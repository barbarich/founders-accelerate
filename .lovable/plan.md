

# Admin Dashboard for The Founders Circle

## Overview

Build a secure admin panel at `/admin` with Supabase authentication. Only whitelisted emails can access it. The admin (barbarych@gmail.com) can manage other admins. Three sections: Presentations, Monthly Plans, and Meeting Plans with materials.

## Prerequisites

Connect your Supabase project to Lovable first. I'll then set up:

## Database Schema

### Tables

**`admin_users`** — whitelist of allowed admin emails
- `id` uuid PK
- `email` text UNIQUE NOT NULL
- `created_at` timestamptz
- `created_by` uuid (FK to auth.users)

**`presentations`** — links to presentations
- `id` uuid PK
- `title` text NOT NULL
- `description` text
- `url` text (internal link like `/pitch` or external)
- `sort_order` integer
- `created_at` timestamptz

**`monthly_plans`** — monthly curriculum plans
- `id` uuid PK
- `month_number` integer NOT NULL
- `title` text NOT NULL
- `content` text (rich markdown content)
- `created_at` / `updated_at` timestamptz

**`meetings`** — individual meeting plans
- `id` uuid PK
- `month_id` uuid FK → monthly_plans
- `week_number` integer
- `title` text NOT NULL
- `agenda` text (markdown)
- `presentation_url` text
- `created_at` / `updated_at` timestamptz

**`meeting_materials`** — attachments/links per meeting
- `id` uuid PK
- `meeting_id` uuid FK → meetings
- `title` text NOT NULL
- `type` text ('link' | 'file' | 'document')
- `url` text NOT NULL
- `sort_order` integer
- `created_at` timestamptz

### RLS & Security

- All tables: RLS enabled
- SELECT/INSERT/UPDATE/DELETE policies check `auth.jwt()->>'email'` against `admin_users` table via a `is_admin()` security definer function
- Seed `admin_users` with `barbarych@gmail.com`

## Frontend Architecture

### Routing

```
/admin         → Login (if not authed) or redirect to dashboard
/admin/dash    → Dashboard with sidebar navigation
```

Protected by an `AdminGuard` component that checks auth + admin email.

### Components

```
src/
├── pages/
│   ├── admin/
│   │   ├── AdminLogin.tsx        — Email/password login form
│   │   ├── AdminLayout.tsx       — Sidebar + content area
│   │   ├── AdminDashboard.tsx    — Overview / welcome
│   │   ├── AdminPresentations.tsx — List + add/edit presentations
│   │   ├── AdminMonthlyPlans.tsx  — Monthly plans CRUD
│   │   ├── AdminMeetings.tsx      — Meetings + materials CRUD
│   │   └── AdminUsers.tsx         — Manage admin emails
├── components/
│   ├── admin/
│   │   ├── AdminGuard.tsx        — Auth + admin check wrapper
│   │   ├── AdminSidebar.tsx      — Navigation sidebar
│   │   └── MaterialsList.tsx     — Reusable materials editor
├── integrations/supabase/
│   ├── client.ts                 — Supabase client init
│   └── types.ts                  — Generated types
```

### UI Design

- Clean sidebar layout (like Notion/Linear) — dark theme matching the site
- Sidebar: logo, 4 nav items (Dashboard, Presentations, Monthly Plans, Meetings), admin users at bottom
- Content area: card-based lists with inline editing
- Add/Edit via slide-over panels (Sheet component) — not separate pages
- Minimal clicks to add content

### Initial Data Seeding

- **Presentations section**: Pre-populate with the existing accelerator presentation (`/pitch`)
- **Monthly Plans**: Import Month 1 content from existing `Program.tsx` data
- **Meetings**: Create Week 1-4 entries from existing program data

## Implementation Order

1. Connect Supabase → create tables + RLS + seed admin email
2. Create Supabase client + AdminGuard
3. Build AdminLogin page
4. Build AdminLayout with sidebar
5. Build Presentations section (CRUD)
6. Build Monthly Plans section (CRUD)
7. Build Meetings + Materials section (CRUD)
8. Build Admin Users management
9. Add routes to App.tsx

