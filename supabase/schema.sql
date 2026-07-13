create table if not exists public.user_favorites (
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  favorite_id text not null,
  item_type text not null check (item_type in ('match', 'odds_search')),
  source_match_id text not null default '',
  active boolean not null default true,
  name text not null default '',
  criteria jsonb not null default '{}'::jsonb,
  match_snapshot jsonb,
  favorite_updated_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, favorite_id),
  constraint favorite_id_not_empty check (length(favorite_id) between 1 and 300),
  constraint name_size_limit check (length(name) <= 120),
  constraint match_id_size_limit check (length(source_match_id) <= 240),
  constraint user_id_matches_session check (user_id = auth.uid())
);

create index if not exists user_favorites_updated_idx
  on public.user_favorites (user_id, favorite_updated_at desc);

alter table public.user_favorites enable row level security;
alter table public.user_favorites force row level security;

drop policy if exists "users_select_own_favorites" on public.user_favorites;
create policy "users_select_own_favorites"
  on public.user_favorites for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "users_insert_own_favorites" on public.user_favorites;
create policy "users_insert_own_favorites"
  on public.user_favorites for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "users_update_own_favorites" on public.user_favorites;
create policy "users_update_own_favorites"
  on public.user_favorites for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "users_delete_own_favorites" on public.user_favorites;
create policy "users_delete_own_favorites"
  on public.user_favorites for delete
  to authenticated
  using (auth.uid() = user_id);

revoke all on public.user_favorites from anon;
grant select, insert, update, delete on public.user_favorites to authenticated;

-- Admin membership contains only the Supabase user UUID. Add or remove rows
-- from the Supabase SQL editor; authenticated browser clients can only read
-- their own membership and can never grant themselves access.
create table if not exists public.app_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.app_admins enable row level security;
alter table public.app_admins force row level security;

drop policy if exists "admins_read_own_membership" on public.app_admins;
create policy "admins_read_own_membership"
  on public.app_admins for select
  to authenticated
  using (auth.uid() = user_id);

revoke all on public.app_admins from anon;
revoke all on public.app_admins from authenticated;
grant select on public.app_admins to authenticated;
