

# Landing Page for The Founders Circle — 4 Languages

## Overview

Transform the site from a slide presentation into a proper marketing landing page. The presentation moves to `/pitch`, the new landing page takes over `/`. Four language versions at `/en`, `/ru`, `/ua`, `/he` (root `/` redirects to `/en`). Application form replaces the current payment-based registration.

## Architecture

### Routing

```
/          → redirect to /en (or auto-detect browser language)
/en        → Landing page (English)
/ru        → Landing page (Russian)
/ua        → Landing page (Ukrainian)
/he        → Landing page (Hebrew, RTL)
/en/apply  → Application form (English)
/ru/apply  → Application form (Russian)
/ua/apply  → Application form (Ukrainian)
/he/apply  → Application form (Hebrew, RTL)
/program   → Keep as-is (Russian curriculum detail)
/register  → Keep as-is (payment details)
/pitch     → Presentation (moved from /)
```

### i18n System

Create `src/i18n/translations.ts` with a flat object per language (`en`, `ru`, `ua`, `he`). Create a `useLanguage()` hook + React context that reads locale from URL param (`:lang`). Hebrew gets `dir="rtl"` on the page wrapper.

No external i18n library — just a simple context + dictionary pattern given the scope.

### Landing Page Sections (single component, scrollable)

`src/pages/Landing.tsx` — all content driven by translations:

1. **Hero** — "Launch your product in 12 weeks" headline, subtitle, next cohort date (April 13, 2026), CTA button "Apply Now"
2. **Problem** — Pain points founders face (from Slide11)
3. **About the Mentor** — Michael Barbarich bio, 16 years, 2 exits, key stats (from Slide02)
4. **Track Record** — Timeline highlights: B-rich, Sky Room, PERA, RunEverywhere, ForexTester, MetaMinder (condensed from timeline slides, reuse existing images)
5. **Program Structure** — 3 phases (Foundation / Product / Launch), 12 weeks (from Slide15)
6. **What You Get** — 6 outcomes cards (from Slide14)
7. **Format** — Weekly meetings, mentorship, experts (from Slide13)
8. **Pricing** — Accelerator ₪4,500 / ₪2,000/mo, Consultation ₪1,200 (from Slide18)
9. **CTA** — Final call to action with "Apply Now" button, "Next cohort: April 13, 2026", group size 5-7

### Navigation

Sticky top nav with: logo text "The Founders Circle", language switcher (EN | RU | UA | HE), "Apply" CTA button. On mobile: hamburger or minimal nav with language switcher + CTA.

### Application Form

`src/pages/Apply.tsx` — replaces `/register` for new traffic:

Fields (validated with zod + react-hook-form):
- Full name (required)
- Email (required)
- Phone (required)
- Describe your idea (textarea, required)
- Stage: select from "Just an idea" / "Have a prototype" / "Have first users" / "Already earning"
- Preferred language: EN / RU / UA / HE

On submit: for now, just show a success message ("We'll contact you within 24 hours"). No backend needed initially — can add Supabase later.

### Hebrew RTL Support

When `lang === 'he'`, add `dir="rtl"` to the page container. Tailwind utilities handle most layout; specific overrides where needed (e.g., flex-row-reverse for timeline items).

## Files to Create/Modify

| File | Action |
|---|---|
| `src/i18n/translations.ts` | Create — all 4 language dictionaries |
| `src/i18n/LanguageContext.tsx` | Create — context + hook |
| `src/pages/Landing.tsx` | Create — main landing page |
| `src/pages/Apply.tsx` | Create — application form |
| `src/App.tsx` | Modify — new routes, move presentation to /pitch |
| `src/pages/Index.tsx` | Modify — redirect to /en |

## Style Approach

Reuse existing dark theme, gold accents, Inter + Playfair Display fonts. Same CSS variables. No new dependencies needed — everything built with existing Tailwind + shadcn/ui components.

## Scope Note

This is a large task. I recommend implementing it in phases:
1. First: i18n system + landing page in English
2. Then: add RU/UA/HE translations
3. Then: application form
4. Finally: Hebrew RTL adjustments

