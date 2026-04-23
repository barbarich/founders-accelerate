

## Webinar Presentation `/pitch1` — Apple-Minimalist Style

A new 31-slide deck (slides 0–30) for the 90-minute webinar "Запуск продукта с AI", reachable at `/pitch1`. It reuses the existing presentation shell architecture (1920×1080 scaled slides, keyboard nav, fullscreen, grid view, mobile swipe), but with a completely new white/minimalist visual language — separate from the dark, copper-accented `/pitch` deck.

### Visual language

- Background `#FFFFFF`, primary text `#0A0A0A`, secondary `#666666`
- Hairline separators `0.5px #E5E5E5`
- Accent (eyebrow + CTA) `#185FA5`, success `#639922`, error `#D64545`
- Inter / SF Pro for headings, JetBrains Mono for code-style blocks
- Eyebrow: 12px UPPERCASE, letter-spacing 0.1em, color `#185FA5`
- H1 48–64px, H2 24–28px (muted), body 18–20px, mono 16px
- 80–120px padding from edges, one central object per slide
- No emojis, no gradients, no shadows, arrows `→` instead of bullets

### Slide list (0–30)

```text
0   Pre-show cover           "Запуск продукта с AI"
1   Холодный факт            "В 2024 я не умел писать код"
2   Главный тезис            проблема не в инструментах
3   Пайплайн (mono)          4 этапа запуска
4   Карта вебинара           4 темы + offer hint
5   Divider — Тема 1          Валидация за 48 часов
6   Почему валидация
7   Playbook (mono)          10–15 разговоров
8   Кейс Mikey               два слоя валидации (split)
9   Divider — Тема 2          Ресерч: что НЕ строить
10  Парадокс рынка 2026
11  Live demo intro          PMF Research Agent + кнопка "Open Agent"
12  Что вы только что увидели
13  Divider — Тема 3          MVP с AI без команды
14  Мой стек (mono)          Lovable / Claude / MCP
15  Кейс MetaMinder          было / стало (split)
16  Фича в Mikey             flow diagram
17  MCP · Mixpanel           before/after + "3000€ → 0€"
18  5 правил workflow
19  Divider — Тема 4          Первые 10 платящих
20  Почему руками
21  Метод (5 шагов)
22  MetaMinder — никакой магии
23  Что автоматизировал ПОСЛЕ
24  Скрипт LinkedIn DM (mono message box)
25  Переход к офферу
26  Что такое программа      4-week table
27  Что получаете на выходе
28  Оффер                    ₪4,500 → ₪3,000 + QR + CTA
29  Q&A
30  Финал                    "Спасибо. 48 часов."
```

### Architecture

```text
src/components/presentation/pitch1/
   Pitch1Shell.tsx         ← copy of PresentationShell, TOTAL=31, light-theme chrome
   slides/
      Slide00Cover.tsx
      Slide01ColdFact.tsx
      Slide02Thesis.tsx
      Slide03Pipeline.tsx
      Slide04Map.tsx
      Slide05DividerT1.tsx
      Slide06WhyValidation.tsx
      Slide07Playbook.tsx
      Slide08MikeyCase.tsx
      Slide09DividerT2.tsx
      Slide10MarketParadox.tsx
      Slide11LiveDemo.tsx
      Slide12WhatYouSaw.tsx
      Slide13DividerT3.tsx
      Slide14Stack.tsx
      Slide15MetaminderCase.tsx
      Slide16MikeyFlow.tsx
      Slide17MCPMixpanel.tsx
      Slide18WorkflowRules.tsx
      Slide19DividerT4.tsx
      Slide20WhyManual.tsx
      Slide21Method.tsx
      Slide22MetaminderManual.tsx
      Slide23PostAutomation.tsx
      Slide24LinkedInScript.tsx
      Slide25BridgeToOffer.tsx
      Slide26ProgramTable.tsx
      Slide27Outcomes.tsx
      Slide28Offer.tsx        ← QR + CTA + price
      Slide29QA.tsx
      Slide30Finale.tsx
```

Shared shell behaviour copied from `PresentationShell.tsx`: keyboard arrows / Space / F5 / G, fullscreen, grid view, mobile swipe, fade transitions, progress bar, slide counter. Mobile uses the existing `ScaledSlide` (430×760 base) — each slide ships a separate mobile branch with reduced font sizes, mirroring the `Slide18Pricing` pattern.

### Key implementation details

- **Routing** — add `<Route path="/pitch1" element={<Pitch1Shell />} />` in `src/App.tsx` next to the existing `/pitch` route.
- **Light theme chrome** — the new shell uses inline white surfaces (not the dark `--background` token) for the bottom bar, sidebar, and grid view, so the chrome matches the deck's white aesthetic. Progress bar fill uses `#0A0A0A` on a `#E5E5E5` track.
- **Slide 11 — Live demo** — eyebrow + H1 + H2 + body + a `<a target="_blank">` "Open PMF Agent" button styled as a black pill (`#0A0A0A` bg, white text) so the presenter can switch to the live agent in one click without alt-tab fumbling.
- **Slide 28 — Offer** — uses `qrcode.react` (already installed for `/pitch`) to render a 240×240 QR pointing to `/register` (same registration page as `/pitch`, which holds the Bit / wire-transfer requisites referenced in the brief). Strikethrough `₪4,500` in `#666666`, current `₪3,000` in 96px black, savings note in `#666666`. Black "ЗАБРАТЬ МЕСТО" button links to `/register` (clickable in fullscreen). Conditions list with arrows.
- **Mono blocks** — slides 3, 7, 14, 16, 17, 22, 24, 26 render content inside `<pre className="font-mono">` with proper indentation/alignment so arrows line up vertically as in the spec. ❌ in `#D64545`, ✅ in `#639922`, everything else in `#0A0A0A`.
- **Divider slides** (5, 9, 13, 19) — eyebrow "ТЕМА N", giant H1, muted H2, single hairline divider — pure typography.
- **Q&A slide (29)** — extra-large H1 centered, small grey footer reminding about 48-hour offer.
- **Final slide (30)** — large "Спасибо.", divider, two-line body, "Михаэль" footer.

### Memory updates

Add a new memory file `mem://features/pitch1-webinar-deck` describing this Apple-minimalist webinar deck, its route, structure, and the offer details (₪4,500 → ₪3,000, 48h window). Update `mem://index.md` to reference it next to the existing presentation memories.

### Out of scope

- No edits to existing `/pitch` deck or its slides
- No backend changes — registration flow already exists
- QR is generated client-side via `qrcode.react`; replacing it with a pre-rendered image from qrcode-monkey can happen later if needed
- No localisation — webinar is delivered in Russian only

