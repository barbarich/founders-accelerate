

# Landing Page Premium Redesign

## Design Philosophy

Inspired by a16z Speedrun, YC, and Antler — the new landing will use:

- **Massive typography** with generous whitespace (like a16z Speedrun)
- **Scroll-triggered animations** using CSS `@keyframes` + Intersection Observer (no new deps)
- **Gradient overlays and subtle grain textures** via CSS for depth
- **Hero with animated counter/stats** — key numbers animate on load (7 products, 2 exits, 50K+ users, 107 countries)
- **Horizontal scroll showcase** for track record (portfolio-style, like top VC sites)
- **Glassmorphism cards** with subtle backdrop-blur for program phases and pricing
- **Sticky section indicators** — minimal dots or progress bar showing scroll position
- **Full-bleed sections** alternating between dark/darker backgrounds with gold accent lines

## Sections (Redesigned)

### 1. Hero (Full viewport)
- Left-aligned massive headline (80-96px), not centered
- Animated gold line under headline
- Stats bar: `7 Products · 2 Exits · 50K+ Users · 107 Countries` with number count-up animation
- Single CTA button with hover glow effect
- Cohort date badge with pulse animation
- Background: subtle radial gradient from center, no image

### 2. Social Proof / Stats Strip
- Full-width dark strip with 4 key metrics in large monospace numbers
- Thin gold top/bottom borders
- Numbers animate when scrolled into view

### 3. Problem Section
- Large quote-style typography, one problem per "card" that fades in sequentially
- No borders — just spacing and opacity changes on scroll

### 4. Mentor Section  
- Full-bleed two-column: photo takes 40% width edge-to-edge (no rounded corners, bleeds to edge), bio on right
- Key stats highlighted inline with gold color
- Photo has subtle parallax on scroll (CSS transform)

### 5. Track Record — Horizontal Scroll Gallery
- Horizontally scrolling cards triggered by vertical scroll (CSS `position: sticky` + transform)
- Each card: image + title + highlight badge
- Creates a "portfolio gallery" feel

### 6. Program Phases — Timeline
- Vertical timeline with 3 connected nodes
- Each phase revealed on scroll with staggered animation
- Gold connecting line that "fills" as you scroll

### 7. Outcomes — Bento Grid
- Asymmetric grid layout (bento-style) — 2 large cards + 4 smaller ones
- No emojis — use simple geometric shapes or gold numbers as visual anchors
- Glassmorphism effect on hover

### 8. Format — Three Pillars
- Three vertical columns with thin gold top borders
- Clean typography, no icons/emojis
- Subtle hover lift effect

### 9. Pricing — Side by Side  
- Accelerator card with gold gradient border (animated shimmer)
- Consultation card with standard border
- Price numbers in oversized typography

### 10. Final CTA
- Full-viewport section with centered headline
- Animated background gradient (slow-moving gold/dark mesh)
- Large CTA button with glow

## Technical Approach

### Files to modify:
| File | Changes |
|---|---|
| `src/pages/Landing.tsx` | Complete rewrite with new design system |
| `src/index.css` | Add animation keyframes, grain texture, glassmorphism utilities |
| `src/i18n/translations.ts` | Remove emoji icons from `resultsItems` and `formatColumns`, add stats translations |

### Animation System (no new deps):
- Custom `useInView` hook using `IntersectionObserver`
- CSS keyframes for fade-up, fade-in, count-up, shimmer
- `scroll-driven` CSS animations where supported, JS fallback

### New CSS utilities to add:
- `.glass` — `backdrop-blur-xl bg-white/[0.03] border border-white/[0.06]`
- `.animate-fade-up` — translateY(30px) → 0, opacity 0 → 1
- `.animate-shimmer` — gold gradient moving across border
- `.text-gradient` — gold gradient text for accents
- Grain texture overlay via CSS `background-image` with noise SVG

### No new dependencies needed. Pure CSS + React + IntersectionObserver.

## Scope

This is a full rewrite of `Landing.tsx` (~400 lines → ~600-700 lines) plus CSS additions. The translations file stays mostly the same — just removing emojis and adding a few stat-related keys. The component will be split into inline sub-components for readability.

