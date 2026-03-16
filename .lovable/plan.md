

## Plan: Invitation Code System for Student Access

### Summary
Replace the current open login with a code-gated flow: student enters an invitation code on the landing page, then registers via email OTP. Admin creates/manages codes and sees usage tracking.

### Database Changes

**New table `invite_codes`:**
```sql
create table public.invite_codes (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  label text,                    -- admin note ("Когорта 1", "Март 2026")
  max_uses integer default null, -- null = unlimited
  used_count integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
```

**Add `invite_code_id` to `participants`:**
```sql
alter table public.participants
  add column invite_code_id uuid references public.invite_codes(id);
```

RLS: admins full CRUD on `invite_codes`; anon/authenticated can `select` active codes (for validation).

### Flow

```text
Landing page ("Вход для студентов")
  → /login
  → Step 1: Enter invite code → validate against invite_codes
  → Step 2: Enter email → signInWithOtp (magic link)
  → After auth → ParticipantGuard auto-creates participant with invite_code_id
  → /cabinet (sees only assigned presentations)
```

### Changes by File

**1. DB migration** — `invite_codes` table + alter `participants` + RLS

**2. `src/pages/Landing.tsx`** — Add "Вход для студентов" link in nav (desktop + mobile), linking to `/login`

**3. `src/pages/ParticipantLogin.tsx`** — Rewrite as 2-step flow:
- Step 1: code input field, validate against DB (`invite_codes` where `code = input and is_active = true`)
- Step 2: email OTP (keep existing logic, remove Google OAuth per new requirement — user said "register via email")
- Store validated code in state, pass to ParticipantGuard via localStorage or URL param

**4. `src/components/participant/ParticipantGuard.tsx`** — On auto-create participant, read `invite_code_id` from localStorage, save to participant record, increment `used_count` on `invite_codes`

**5. `src/pages/admin/AdminParticipants.tsx`** — Add column showing which invite code each participant used

**6. New: `src/pages/admin/AdminInviteCodes.tsx`** — Admin page to:
- Create new codes (auto-generate or custom)
- See list: code, label, used_count, is_active, created_at
- Toggle active/inactive
- See which participants used each code

**7. `src/components/admin/AdminSidebar.tsx`** — Add "Коды приглашений" nav item

**8. `src/App.tsx`** — Add route `/admin/invite-codes`

### Key Decisions
- Google OAuth removed (user said "register via email" after entering code)
- Code validation happens before showing email input — invalid code = no registration
- `invite_codes.used_count` incremented via DB function to avoid race conditions
- Codes are short random strings (e.g. 6 chars uppercase) generated in admin UI

