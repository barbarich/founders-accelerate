
create table public.participants (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
  email text not null,
  full_name text,
  avatar_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.participants enable row level security;

create policy "Users can view own participant record"
  on public.participants for select to authenticated
  using (user_id = auth.uid());

create policy "Admins can view all participants"
  on public.participants for select to authenticated
  using (public.is_admin());

create policy "Admins can update participants"
  on public.participants for update to authenticated
  using (public.is_admin());

create policy "Users can insert own participant record"
  on public.participants for insert to authenticated
  with check (user_id = auth.uid());

create policy "Active participants can view meetings"
  on public.meetings for select to authenticated
  using (
    exists (
      select 1 from public.participants
      where user_id = auth.uid() and is_active = true
    )
  );

create policy "Active participants can view meeting_materials"
  on public.meeting_materials for select to authenticated
  using (
    exists (
      select 1 from public.participants
      where user_id = auth.uid() and is_active = true
    )
  );
