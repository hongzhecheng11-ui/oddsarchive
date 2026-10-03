-- Additive migration. Apply only after review; no existing data is replaced.
create table if not exists public.match_votes (
  fixture_id text not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  selection text not null check (selection in ('H','D','A')),
  kickoff timestamptz not null,
  updated_at timestamptz not null default now(),
  primary key (fixture_id, user_id)
);
alter table public.match_votes enable row level security;
revoke all on public.match_votes from anon, authenticated;
grant select, insert, update on public.match_votes to service_role;

create or replace function public.get_match_vote_counts(p_fixture_id text, p_user_id uuid)
returns jsonb language sql stable security invoker set search_path = public as $$
  select jsonb_build_object(
    'home', count(*) filter (where selection='H'),
    'draw', count(*) filter (where selection='D'),
    'away', count(*) filter (where selection='A'),
    'total', count(*),
    'mine', max(selection) filter (where user_id=p_user_id)
  ) from public.match_votes where fixture_id=p_fixture_id;
$$;
create or replace function public.cast_match_vote(p_fixture_id text, p_user_id uuid, p_selection text, p_kickoff timestamptz)
returns jsonb language plpgsql security invoker set search_path = public as $$
begin
  if p_selection not in ('H','D','A') or p_kickoff <= now() or p_kickoff is null then
    raise exception 'Voting closed or invalid selection';
  end if;
  insert into public.match_votes(fixture_id,user_id,selection,kickoff)
  values(p_fixture_id,p_user_id,p_selection,p_kickoff)
  on conflict(fixture_id,user_id) do update
  set selection=excluded.selection,kickoff=excluded.kickoff,updated_at=now();
  return public.get_match_vote_counts(p_fixture_id,p_user_id);
end;
$$;
revoke all on function public.get_match_vote_counts(text,uuid) from public, anon, authenticated;
revoke all on function public.cast_match_vote(text,uuid,text,timestamptz) from public, anon, authenticated;
grant execute on function public.get_match_vote_counts(text,uuid) to service_role;
grant execute on function public.cast_match_vote(text,uuid,text,timestamptz) to service_role;
