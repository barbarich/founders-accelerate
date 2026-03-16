
create table public.participant_meetings (
  id uuid primary key default gen_random_uuid(),
  participant_id uuid references public.participants(id) on delete cascade not null,
  meeting_id uuid references public.meetings(id) on delete cascade not null,
  created_at timestamptz not null default now(),
  unique(participant_id, meeting_id)
);

alter table public.participant_meetings enable row level security;

-- Participants see their own assignments
create policy "Participants view own assignments" on public.participant_meetings
  for select to authenticated
  using (participant_id in (
    select id from public.participants where user_id = auth.uid()
  ));

-- Admins full access
create policy "Admins manage participant_meetings" on public.participant_meetings
  for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());
