---
name: Webinar deck /pitch1
description: Apple-minimalist 31-slide deck for the 90-minute "Запуск продукта с AI" webinar, separate from /pitch
type: feature
---
Route: `/pitch1` — webinar deck for "Запуск продукта с AI" (90 min, RU only).

- Architecture mirrors `/pitch` PresentationShell: 1920×1080 ScaledSlide, keyboard nav (←/→/Space/F5/G), fullscreen, grid view, sidebar thumbs, mobile swipe.
- Lives in `src/components/presentation/pitch1/` with `Pitch1Shell.tsx` + 31 slide components (`Slide00Cover` … `Slide30Finale`) + `_shared.tsx` design primitives (Eyebrow, H1, H2, Body, Divider, Mono, SlideFrame, SlideFooter, COLORS).
- Visual language is OPPOSITE of /pitch: white `#FFFFFF` bg, black `#0A0A0A` text, muted `#666666`, hairline 0.5px `#E5E5E5`, accent `#185FA5`, success `#639922`, error `#D64545`. Inter/SF Pro headings, JetBrains Mono for code/list blocks. No gradients, shadows, emojis. Arrows → instead of bullets.
- Slide 11 (Live Demo) has a black-pill `Open PMF Agent →` button linking to `/agents/pmf` in a new tab.
- Slide 28 (Offer) renders a 180px `qrcode.react` QR pointing to `${origin}/register`, ₪4,500 strikethrough → ₪3,000 (96px), CTA button "ЗАБРАТЬ МЕСТО" → /register, 48h window, 8 cohort seats, PMF agent setup bonus.
- Q&A footer reminds about the 48h ₪3,000 offer; final slide is "Спасибо." + "48 часов." signed Михаэль.
- `/pitch` deck must NOT be touched when iterating on /pitch1.