
-- Create invite_codes table
create table public.invite_codes (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  label text,
  max_uses integer default null,
  used_count integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.invite_codes enable row level security;

-- Anyone authenticated or anon can validate codes (select active ones)
create policy "Anyone can validate active codes" on public.invite_codes
  for select to anon, authenticated
  using (is_active = true);

-- Admins full CRUD
create policy "Admins manage invite_codes" on public.invite_codes
  for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Add invite_code_id to participants
alter table public.participants
  add column invite_code_id uuid references public.invite_codes(id);

-- Atomic increment function
create or replace function public.use_invite_code(_code_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.invite_codes
  set used_count = used_count + 1
  where id = _code_id
    and is_active = true
    and (max_uses is null or used_count < max_uses);
end;
$$;
