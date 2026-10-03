-- Apply after match-votes.sql. Local migration draft; no existing data is replaced.
create table if not exists public.match_opinions (
  id uuid primary key default gen_random_uuid(),
  fixture_id text not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  body text,
  kickoff timestamptz not null,
  hidden boolean not null default false,
  deleted_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (fixture_id, user_id),
  check ((deleted_at is not null and body is null) or
    (deleted_at is null and body is not null and char_length(btrim(body)) between 1 and 200 and body !~ '[[:cntrl:]]'))
);
create table if not exists public.match_opinion_reports (
  opinion_id uuid not null references public.match_opinions(id) on delete cascade,
  reporter_id uuid not null references auth.users(id) on delete cascade,
  reason text not null check (reason in ('spam','abuse','other')),
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  primary key (opinion_id, reporter_id)
);
alter table public.match_opinions enable row level security;
alter table public.match_opinion_reports enable row level security;
revoke all on public.match_opinions, public.match_opinion_reports from anon, authenticated;
grant select, insert, update on public.match_opinions to service_role;
grant select, insert, update, delete on public.match_opinion_reports to service_role;
grant select on public.app_admins to service_role;
create index if not exists match_opinions_recent on public.match_opinions(fixture_id, updated_at desc)
  where hidden = false and deleted_at is null;

create or replace function public.get_match_opinions(p_fixture_id text, p_user_id uuid)
returns jsonb language sql stable security invoker set search_path = public as $$
  select jsonb_build_object(
    'isModerator', exists(select 1 from public.app_admins where user_id=p_user_id),
    'mine', (select jsonb_build_object('id',id,'body',body,'hidden',hidden) from public.match_opinions
      where fixture_id=p_fixture_id and user_id=p_user_id and deleted_at is null),
    'opinions', coalesce((select jsonb_agg(row) from (
      select o.id, o.body, v.selection, o.updated_at as "updatedAt", o.user_id=p_user_id as "isMine",
        exists(select 1 from public.match_opinion_reports r where r.opinion_id=o.id and r.reporter_id=p_user_id) as reported
      from public.match_opinions o join public.match_votes v on v.fixture_id=o.fixture_id and v.user_id=o.user_id
      where o.fixture_id=p_fixture_id and o.hidden=false and o.deleted_at is null
      order by o.updated_at desc, o.id limit 30
    ) row), '[]'::jsonb)
  );
$$;

create or replace function public.save_match_opinion(p_fixture_id text, p_user_id uuid, p_body text, p_kickoff timestamptz)
returns jsonb language plpgsql security invoker set search_path = public as $$
declare saved_id uuid;
begin
  if p_kickoff is null or p_kickoff <= now() then raise exception 'OPINION_CLOSED'; end if;
  if p_body is null or char_length(btrim(p_body)) not between 1 and 200 or p_body ~ '[[:cntrl:]]' then
    raise exception 'OPINION_INVALID';
  end if;
  if not exists(select 1 from public.match_votes where fixture_id=p_fixture_id and user_id=p_user_id) then
    raise exception 'VOTE_REQUIRED';
  end if;
  if exists(select 1 from public.match_opinions where fixture_id=p_fixture_id and user_id=p_user_id and hidden) then
    raise exception 'OPINION_HIDDEN';
  end if;
  insert into public.match_opinions(fixture_id,user_id,body,kickoff)
  values(p_fixture_id,p_user_id,btrim(p_body),p_kickoff)
  on conflict(fixture_id,user_id) do update set body=excluded.body,kickoff=excluded.kickoff,deleted_at=null,updated_at=now()
    where match_opinions.hidden=false and match_opinions.updated_at <= now()-interval '30 seconds'
  returning id into saved_id;
  if saved_id is null then raise exception 'OPINION_RATE_LIMIT'; end if;
  return public.get_match_opinions(p_fixture_id,p_user_id);
end;
$$;

create or replace function public.delete_match_opinion(p_fixture_id text, p_user_id uuid)
returns jsonb language plpgsql security invoker set search_path = public as $$
declare removed_id uuid;
begin
  update public.match_opinions set body=null,deleted_at=now(),updated_at=now()
    where fixture_id=p_fixture_id and user_id=p_user_id and deleted_at is null returning id into removed_id;
  delete from public.match_opinion_reports where opinion_id=removed_id;
  return public.get_match_opinions(p_fixture_id,p_user_id);
end;
$$;

create or replace function public.report_match_opinion(p_fixture_id text, p_user_id uuid, p_opinion_id uuid, p_reason text)
returns jsonb language plpgsql security invoker set search_path = public as $$
begin
  if p_reason not in ('spam','abuse','other') or p_reason is null then raise exception 'OPINION_INVALID'; end if;
  perform 1 from public.match_opinions where id=p_opinion_id and fixture_id=p_fixture_id
    and user_id<>p_user_id and hidden=false and deleted_at is null for update;
  if not found then raise exception 'OPINION_NOT_FOUND'; end if;
  insert into public.match_opinion_reports(opinion_id,reporter_id,reason) values(p_opinion_id,p_user_id,p_reason)
    on conflict(opinion_id,reporter_id) do nothing;
  return public.get_match_opinions(p_fixture_id,p_user_id);
end;
$$;

create or replace function public.get_match_opinion_reports(p_user_id uuid)
returns jsonb language plpgsql security invoker set search_path = public as $$
declare records jsonb;
begin
  if not exists(select 1 from public.app_admins where user_id=p_user_id) then raise exception 'MODERATOR_REQUIRED'; end if;
  select coalesce(jsonb_agg(row),'[]'::jsonb) into records from (
    select o.id, o.fixture_id as "fixtureId", o.body, count(*) as "reportCount",
      min(r.created_at) as "reportedAt", array_agg(distinct r.reason) as reasons
    from public.match_opinion_reports r join public.match_opinions o on o.id=r.opinion_id
    where o.hidden=false and o.deleted_at is null and r.reviewed_at is null
    group by o.id order by min(r.created_at),o.id limit 50
  ) row;
  return jsonb_build_object('reports',records);
end;
$$;

create or replace function public.hide_match_opinion(p_fixture_id text, p_user_id uuid, p_opinion_id uuid)
returns jsonb language plpgsql security invoker set search_path = public as $$
begin
  if not exists(select 1 from public.app_admins where user_id=p_user_id) then raise exception 'MODERATOR_REQUIRED'; end if;
  update public.match_opinions set hidden=true where id=p_opinion_id and fixture_id=p_fixture_id and deleted_at is null;
  if not found then raise exception 'OPINION_NOT_FOUND'; end if;
  return public.get_match_opinion_reports(p_user_id);
end;
$$;

create or replace function public.dismiss_match_opinion_reports(p_fixture_id text, p_user_id uuid, p_opinion_id uuid)
returns jsonb language plpgsql security invoker set search_path = public as $$
begin
  if not exists(select 1 from public.app_admins where user_id=p_user_id) then raise exception 'MODERATOR_REQUIRED'; end if;
  if not exists(select 1 from public.match_opinions where id=p_opinion_id and fixture_id=p_fixture_id and deleted_at is null) then
    raise exception 'OPINION_NOT_FOUND';
  end if;
  update public.match_opinion_reports set reviewed_at=now() where opinion_id=p_opinion_id and reviewed_at is null;
  return public.get_match_opinion_reports(p_user_id);
end;
$$;

revoke all on function public.get_match_opinions(text,uuid), public.save_match_opinion(text,uuid,text,timestamptz),
  public.delete_match_opinion(text,uuid), public.report_match_opinion(text,uuid,uuid,text),
  public.get_match_opinion_reports(uuid), public.hide_match_opinion(text,uuid,uuid), public.dismiss_match_opinion_reports(text,uuid,uuid) from public, anon, authenticated;
grant execute on function public.get_match_opinions(text,uuid), public.save_match_opinion(text,uuid,text,timestamptz),
  public.delete_match_opinion(text,uuid), public.report_match_opinion(text,uuid,uuid,text),
  public.get_match_opinion_reports(uuid), public.hide_match_opinion(text,uuid,uuid), public.dismiss_match_opinion_reports(text,uuid,uuid) to service_role;
