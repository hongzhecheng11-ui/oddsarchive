-- Run this once in the Supabase SQL Editor before deploying the member
-- statistics API. The function is callable only with the server-side role.
create or replace function public.get_member_statistics()
returns jsonb
language sql
stable
security definer
set search_path = public, auth
as $$
  with bounds as (
    select (
      date_trunc('day', now() at time zone 'Asia/Seoul') at time zone 'Asia/Seoul'
    ) as today_start
  ),
  members as (
    select
      u.id,
      u.email,
      u.created_at,
      u.last_sign_in_at,
      coalesce(
        nullif(u.raw_user_meta_data ->> 'full_name', ''),
        nullif(u.raw_user_meta_data ->> 'name', ''),
        nullif(u.raw_user_meta_data ->> 'display_name', ''),
        ''
      ) as display_name,
      coalesce(
        nullif(u.raw_app_meta_data ->> 'provider', ''),
        nullif(u.raw_app_meta_data -> 'providers' ->> 0, ''),
        'unknown'
      ) as provider,
      exists (
        select 1
        from public.app_admins administrators
        where administrators.user_id = u.id
      ) as is_admin
    from auth.users u
  ),
  totals as (
    select
      count(*) as total_members,
      count(*) filter (where created_at >= bounds.today_start) as new_today,
      count(*) filter (where created_at >= bounds.today_start - interval '6 days') as new_7_days,
      count(*) filter (where created_at >= bounds.today_start - interval '13 days') as new_14_days,
      count(*) filter (where created_at >= bounds.today_start - interval '29 days') as new_30_days,
      count(*) filter (where last_sign_in_at >= bounds.today_start) as active_today,
      count(*) filter (where last_sign_in_at >= bounds.today_start - interval '6 days') as active_7_days,
      count(*) filter (where last_sign_in_at >= bounds.today_start - interval '13 days') as active_14_days,
      count(*) filter (where last_sign_in_at >= bounds.today_start - interval '29 days') as active_30_days
    from members
    cross join bounds
  ),
  recent_members as (
    select display_name, email, created_at, last_sign_in_at, provider, is_admin
    from members
    order by created_at desc
    limit 20
  )
  select jsonb_build_object(
    'totalMembers', totals.total_members,
    'newToday', totals.new_today,
    'new7Days', totals.new_7_days,
    'new14Days', totals.new_14_days,
    'new30Days', totals.new_30_days,
    'activeToday', totals.active_today,
    'active7Days', totals.active_7_days,
    'active14Days', totals.active_14_days,
    'active30Days', totals.active_30_days,
    'recentMembers', coalesce((
      select jsonb_agg(jsonb_build_object(
        'displayName', display_name,
        'email', email,
        'createdAt', created_at,
        'lastSignInAt', last_sign_in_at,
        'provider', provider,
        'isAdmin', is_admin
      ) order by created_at desc)
      from recent_members
    ), '[]'::jsonb)
  )
  from totals;
$$;

revoke all on function public.get_member_statistics() from public;
revoke all on function public.get_member_statistics() from anon;
revoke all on function public.get_member_statistics() from authenticated;
grant execute on function public.get_member_statistics() to service_role;
