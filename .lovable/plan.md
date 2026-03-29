

## Problem

Secondary text across the landing page uses very low-opacity white or muted colors that are hard to read, especially in bright ambient light (outdoors/sunlight). The main culprits:

- `text-white/40` (~40% opacity) — used for meta info, subtitles
- `text-white/60` — used for problem points, descriptions  
- `--landing-muted: 25 10% 50%` — CSS variable for muted text (50% lightness)
- `--muted-foreground: 0 0% 55%` — global muted foreground (55% lightness)
- Various card descriptions at low opacity

Primary white text reads fine; the gap between primary and secondary is too large.

## Plan

Raise secondary text brightness while keeping the visual hierarchy (primary text stays white/95%, secondary becomes noticeably lighter than current but still clearly subordinate).

### 1. Update CSS variables in `src/index.css`

| Variable | Current | New |
|---|---|---|
| `--muted-foreground` | `0 0% 55%` | `0 0% 70%` |
| `--landing-muted` | `25 10% 50%` | `25 12% 68%` |
| `--slide-text-muted` | `0 0% 55%` | `0 0% 70%` |

### 2. Update inline opacity classes in `src/pages/Landing.tsx`

Search and replace across the file:

| Current | New | Context |
|---|---|---|
| `text-white/40` | `text-white/60` | Meta info, cohort details, icon labels |
| `text-white/60` | `text-white/80` | Problem points, card descriptions, body text |
| `text-white/50` | `text-white/70` | Any 50% opacity text |
| `text-white/30` | `text-white/50` | Inactive lang switcher, minor decorative text |
| `text-white/90` | `text-white/90` | Keep as-is (already readable) |

This preserves the 3-tier hierarchy: **white (primary) → white/80 (secondary) → white/60 (tertiary)** while making all tiers significantly more readable in bright conditions.

### 3. Check other landing-related pages

Apply same opacity bumps in `src/pages/Program.tsx`, `src/pages/Mentor.tsx`, `src/pages/Apply.tsx`, and `src/pages/ThankYou.tsx` if they use the same low-opacity patterns.

## Result

All text remains visually hierarchical but the minimum contrast ratio improves substantially — secondary text goes from ~3:1 to ~5:1+ contrast against the dark background, making it comfortable to read even in direct sunlight.

