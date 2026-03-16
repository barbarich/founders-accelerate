

## Plan: Participant Cabinet with Admin-Controlled Presentation Access

### Summary
Currently the cabinet shows ALL meetings. The new model: admin explicitly "publishes" a meeting's presentation to selected participants. Participants only see what was sent to them.

### Database Changes

**New table `participant_meetings`** — links meetings to specific participants:
```sql
create table public.participant_meetings (
  id uuid primary key default gen_random_uuid(),
  participant_id uuid references public.participants(id) on delete cascade not null,
  meeting_id uuid references public.meetings(id) on delete cascade not null,
  created_at timestamptz not null default now(),
  unique(participant_id, meeting_id)
);

alter table public.participant_meetings enable row level security;

-- Participants see their own assignments
create policy "Participants view own" on public.participant_meetings
  for select to authenticated
  using (participant_id in (
    select id from public.participants where user_id = auth.uid()
  ));

-- Admins full access
create policy "Admins manage" on public.participant_meetings
  for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());
```

### Cabinet Page (`src/pages/Cabinet.tsx`)

- Show program name ("The Founders Circle"), participant name, and email
- Query `participant_meetings` joined with `meetings` to show only assigned presentations
- If no presentations assigned, show "Пока нет доступных презентаций"
- Each card: meeting title, week number, "Открыть" button

### Admin: "Send to Participants" Feature (`src/pages/admin/AdminMeetings.tsx`)

Add a "Отправить участникам" button on each meeting card. Opens a dialog/sheet showing:
- List of all active participants (email + name) with checkboxes
- "Select all" option
- "Отправить" button that inserts rows into `participant_meetings`
- Show which participants already have access (pre-checked, disabled)

### Files to Change

1. **DB migration** — create `participant_meetings` table + RLS
2. **`src/pages/Cabinet.tsx`** — show email, query via `participant_meetings` instead of `meetings` directly
3. **`src/pages/admin/AdminMeetings.tsx`** — add "Send to participants" dialog with participant selection
4. **`src/integrations/supabase/types.ts`** — will auto-update after migration

