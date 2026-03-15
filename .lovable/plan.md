

# Meeting 1 Presentation — Implementation Plan

## What we're building

A full slide presentation for Week 1 ("Кто ваш клиент и зачем ему ваш продукт") using the same visual engine and design system as `/pitch`. The presentation will be accessible at `/admin/meeting/1` — protected by AdminGuard so only authenticated admins can view it.

The content maps to ~30 slides across 7 blocks as described in the user's content.

## Architecture

### Reuse existing presentation engine
- Create a new `Meeting1PresentationShell.tsx` that reuses the same `PresentationShell` pattern (navigation, fullscreen, grid view, swipe, progress bar, sidebar thumbnails)
- But with its own slide array and slide components

### Slide components
Create individual slide components in `src/components/presentation/meeting1/`:

```
M1Slide01Welcome.tsx      — Title + structure
M1Slide02MainMistake.tsx   — 90% fail stat
M1Slide03ThreeThings.tsx   — 3 goals for today
M1Slide04CompetitorLevels.tsx — 3 levels of competitors
M1Slide05WhatToCheck.tsx   — 4 things to analyze
M1Slide06MetaMinder.tsx    — Personal example
M1Slide07Perplexity.tsx    — Tool: Perplexity.ai
M1Slide08PerplexityPrompts.tsx — 5 prompt templates
M1Slide09SimilarWeb.tsx    — Tool: SimilarWeb
M1Slide10MetaAdLibrary.tsx — Tool: Meta Ad Library
M1Slide11Reviews.tsx       — Competitor reviews
M1Slide12Teardown.tsx      — Product teardown checklist
M1Slide13BusinessModel.tsx — Business model template
M1Slide14WhoWillPay.tsx    — Who pays vs who benefits
M1Slide15Interview.tsx     — 7 interview questions
M1Slide16FindPeople.tsx    — Where to find interviewees
M1Slide17Tldv.tsx          — Tool: tl;dv
M1Slide18Tally.tsx         — Tool: Tally.so
M1Slide19Formula.tsx       — Positioning formula
M1Slide20ThreeTests.tsx    — 3 positioning tests
M1Slide21Napkin.tsx        — Tool: Napkin.ai
M1Slide22Step1.tsx         — Workshop: competitors
M1Slide23Step2.tsx         — Workshop: custdev form
M1Slide24Step3.tsx         — Workshop: positioning
M1Slide25ReviewFormat.tsx  — 5-min review format
M1Slide26HWCompetitors.tsx — Homework: competitor analysis
M1Slide27HWCustdev.tsx     — Homework: customer development
M1Slide28HWPositioning.tsx — Homework: positioning
M1Slide29NextMeeting.tsx   — What to present next week
M1Slide30Toolkit.tsx       — Full toolkit summary
M1Slide31Closing.tsx       — Closing slide
```

### Visual style
All slides use the exact same CSS variables (`--slide-bg`, `--slide-gold`, `--slide-text`, etc.), same `font-display` for headings, same card/border patterns as existing `/pitch` slides. Desktop: 1920x1080 base. Mobile: 430x760 base via `ScaledSlide`.

Slide types used:
- **Title slides**: large Playfair Display heading + gold accent line (like Slide01Title)
- **List/card slides**: cards with gold borders, bullet points (like Slide13Format)
- **Tool slides**: icon/logo + description + demo callout
- **Block header slides**: section dividers with block number

### Routing & protection

Add route `/admin/meeting/:id` inside the admin layout's parent, protected by `AdminGuard`:

```tsx
<Route path="/admin/meeting/:id" element={
  <AdminGuard fallback={<AdminLogin />}>
    <Meeting1PresentationShell />
  </AdminGuard>
} />
```

### Integration with Meetings section

Update `AdminMeetings.tsx` to store/display the `presentation_url` as `/admin/meeting/1` for Week 1. The existing "Презентация" link in the expanded meeting card will navigate to this protected route.

## Implementation steps

1. Create all ~31 slide components in `src/components/presentation/meeting1/`
2. Create `Meeting1PresentationShell.tsx` — clone of PresentationShell with meeting 1 slides
3. Add protected route in `App.tsx`
4. Update the Week 1 meeting record's `presentation_url` to `/admin/meeting/1`

## Scope

- ~31 new slide component files + 1 shell + 1 route change
- No database schema changes needed
- No new tables or RLS changes

