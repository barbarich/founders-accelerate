# Founder OS Mini · Сессия 1 — презентация на 30 слайдов

## Что строим

Новая публичная презентация по образцу существующих `/programm-week1...8`. Тот же визуальный язык: вертикальные полосы фона, копперные акценты, emoji-иконки, крупные цифры на разделителях, paired ❌/✅ блоки, инсайты с 💡 внизу. Адаптив desktop + mobile, навигация стрелками + клавиатурой, footer на каждом слайде.

## Маршруты

- `/founder-os-mini-session1` — публичный shell (как `PublicMeeting8Shell`)
- `/admin/founder-os-mini-session1` — админский shell с кнопкой "назад" (как `Meeting8PresentationShell`)

Регистрация роутов в `src/App.tsx` рядом с `programm-weekN`.

## Структура файлов

Новая директория `src/components/presentation/founderOsMini1/`:

```
FOM1Shell.tsx              — общий shell (навигация, клавиатура, grid, fullscreen)
PublicFOM1Shell.tsx        — публичная обёртка
FOM1BlockHeader.tsx        — разделитель раздела с большой цифрой
FOM1Footer.tsx             — общий футер "Михаэль · Сессия 1 из 6 · Slide N/30"
FOM1Slide01Cover.tsx
FOM1Slide02MainMistake.tsx
FOM1Slide03HonestQuestion.tsx
FOM1Slide04Intro.tsx
FOM1Slide05Agenda.tsx
FOM1Slide06SectionOne.tsx          (разделитель «1 · За что покупают»)
FOM1Slide07ResultNotProduct.tsx
FOM1Slide08ProcessVsResult.tsx     (3 пары ❌/✅)
FOM1Slide09Top5Mistakes.tsx
FOM1Slide10SectionTwo.tsx          (разделитель «2 · Кто заплатит»)
FOM1Slide11Competitors.tsx
FOM1Slide12WhoPays.tsx
FOM1Slide13Hypothesis.tsx
FOM1Slide14SectionThree.tsx        (разделитель «3 · Mom Test»)
FOM1Slide15InterviewRules.tsx
FOM1Slide16PassFailSignals.tsx
FOM1Slide17SectionFour.tsx         (разделитель «4 · Формула позиционирования»)
FOM1Slide18Formula.tsx
FOM1Slide19ThreeFormats.tsx
FOM1Slide20FourTests.tsx
FOM1Slide21SectionFive.tsx         (разделитель «5 · Применение»)
FOM1Slide22MikhaelDiagnosis.tsx
FOM1Slide23MikhaelHomework.tsx
FOM1Slide24MargaritaDiagnosis.tsx
FOM1Slide25MargaritaHomework.tsx
FOM1Slide26SectionSix.tsx          (разделитель «6 · AI-стек»)
FOM1Slide27AIRule8020.tsx
FOM1Slide28Stack.tsx
FOM1Slide29SixSessionsMap.tsx
FOM1Slide30Closing.tsx
```

Каждый слайд — отдельный компонент со своей desktop+mobile вёрсткой через `useIsMobile()`, тексты — ровно по тех. заданию пользователя (без сокращений), оформление токенами landing-палитры (copper/bronze, тёмный фон, вертикальные stripes, рамки `border-landing-line`).

## Содержимое (30 слайдов)

Тексты — дословно из брифа. Соответствие индексов:

1. Cover — The Founders Circle / Founder OS Mini · Сессия 1 из 6
2. Главная ошибка стартапов
3. Один честный вопрос
4. Знакомство (7 пунктов)
5. План на 2 часа (3 блока)
6. **Раздел 1** «За что покупают · ~15 минут»
7. Никто не покупает продукт (3 примера + 💡)
8. Процесс vs Результат (3 пары ❌/✅)
9. Топ-5 ошибок позиционирования
10. **Раздел 2** «Кто заплатит · ~15 минут»
11. Три уровня конкурентов (+ инсайт RunEverywhere/Netflix)
12. Кто заплатит vs кому полезно
13. Гипотеза перед интервью (шаблон + пример + 4 чек-вопроса)
14. **Раздел 3** «Mom Test · ~10 минут»
15. Правила custdev-интервью + блок «как нельзя»
16. Сигналы pass/fail (две колонки + 💡 правило большого пальца)
17. **Раздел 4** «Формула позиционирования · ~15 минут»
18. Формула результата + 4 правила + 💡 тест бабушки
19. Один результат — три формулировки (лендинг/cold/питч)
20. Четыре теста перед запуском (5 секунд / мама / лендинг / Meta-реклама)
21. **Раздел 5** «Применение к проектам · ~25 минут»
22. Михаэль Резник · AIRecom — диагностика
23. Михаэль — ДЗ (5 пунктов)
24. Маргарита · ChampionVibes AI — диагностика
25. Маргарита — ДЗ (5 пунктов)
26. **Раздел 6** «AI-стек · ~10 минут»
27. AI ≠ замена тебя (две колонки 80/20 + 💡 Anthropic 2026)
28. Стек на эту неделю (Claude Project, Perplexity, Meta Ad Library, Google Trends, tl;dv, Claude Sonnet)
29. Карта 6 сессий (С1–С6)
30. Закрытие «Вы уже впереди 90% фаундеров · 🚀 Поехали»

## Технические детали

- Базируемся на `Meeting8PresentationShell.tsx` как ближайшем шаблоне: те же ScaledSlide, BroadcastChannel-нет, клавиатура (←/→/Space/Esc/F5/G), grid view, sidebar thumbnails на desktop, swipe на mobile, авто-скрытие контролов через 3с.
- `TOTAL = 30`, массив `slideNames` и `getSlideContent(index)` со switch на 30 кейсов.
- Footer рендерится внутри каждого слайда (через общий `<FOM1Footer slide={N} />`) — как сейчас сделано в meeting8.
- Block header (слайды 6/10/14/17/21/26) — общий `FOM1BlockHeader` с props `{ number, title, time }`, точная копия логики `M8BlockHeader`.
- Палитра/типографика: те же токены что и в landing (`landing-bg`, `landing-text`, `landing-muted`, copper accent), Playfair для заголовков, Inter для body, JetBrains Mono для эйлбров и футера — как в `pitch1/_shared.tsx`.
- Адаптив: каждый слайд имеет `if (isMobile) return <MobileLayout/>` ветку с переносами/уменьшенными шрифтами и вертикальной компоновкой пар ❌/✅.
- Никаких изменений в backend/i18n/landing — только новая ветка презентации и две записи маршрутов в `App.tsx`.

## Acceptance

- Открывая `/founder-os-mini-session1` пользователь видит 30 слайдов с навигацией ←/→, клавиатурой, grid (G), fullscreen (F5), swipe на мобильном.
- Каждый слайд содержит дословный текст из брифа, footer "Михаэль · Сессия 1 из 6 · Slide N/30".
- Визуально неотличимо по стилю от `/programm-week8`.
