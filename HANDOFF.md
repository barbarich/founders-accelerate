# Handoff: углубление записанного курса $397 (17 уроков)

## Контекст

Я (Михаэль Барбарич, серийный фаундер, 2 экзита, Tel Aviv) строю записанный курс для соло-фаундеров — 17 уроков, цена $397. Курс продаётся для тех, кто покупал мой $19 мини-курс, и для новых студентов.

**Репо:** `/Users/mikhaelbarbarych/Downloads/founders-accelerate-main`
**Ветка:** `main` (всё уже задеплоено в Lovable, развернётся на `founders-circle.space`)
**URLs:** `/recorded-course/lesson{0..16}` — все 17 уроков уже задеплоены

**Что нужно сделать:** углубить контент каждого урока. Текущая версия слишком похожа на мой $19 мини-курс — это критично, потому что новый курс продаётся в **20 раз дороже**.

## Принятые решения (НЕ обсуждать заново)

1. **Overlap policy:** мини-курс = prerequisite. Сразу идём в execution-grade. Не повторять «что такое Perplexity» — давать «8-dimension teardown framework + 12 готовых промптов + 3 кейса с реальными выводами».
2. **Объём каждого урока:** 20-33 слайдов. Не 50+ (риск water).
3. **Обязательное ДЗ в конце каждого урока:** добавить **2 связанных слайда** перед Closing:
   - **Слайд "Саммари урока"** — 3-5 ключевых инсайтов, которые человек должен унести из урока (краткие bullets)
   - **Слайд "Чеклист действий до следующего урока"** — 5-7 конкретных действий + артефакт на выходе (файл/таблица/скриншот)
4. **Tone of voice:** "ты" неформальное, простой язык для начинающих фаундеров, конкретные числа и кейсы, нет water.
5. **AI-coach вместо live:** все упражнения через "открой Claude/ChatGPT" + готовый промпт.

## Что в мини-курсе ($19) — что НЕ повторять в L1-L17

**Mini-course Lesson 0** — orientation (4 outcomes: validation, AI research, vibe coding, first clients).

**Mini-course Lesson 1 — рынок + конкуренты:**
- 3 уровня конкурентов (direct/indirect/habit)
- 8 dimensions для teardown
- Negative reviews are gold
- Perplexity 5 prompts
- Deep Research master prompt с copy button
- FoundersLens + PMF Agent links
- Positioning formula `[Продукт] помогает [кому] [решить проблему]`

**Mini-course Lesson 2 — кастдев:**
- Гипотеза template `[сегмент] страдает от [боль]`
- 6 rules (past not future, 80/20, why x3, 15-20min, verbatim, ask referrals)
- Mom Test bad/good pairs
- 12-question script (downloadable PDF)
- PASS/FAIL: 7 of 10 = PASS
- tl;dv + ChatGPT/Claude/Gemini для question gen
- 4 канала outreach (LinkedIn SN, Reddit, Slack/Discord, network+referrals)

**Mini-course Lesson 3 — vibe coding:**
- Lovable (frontend), Claude Code (full product/backend), MCP connectors
- 11 best practices (docs+tests, files <500 lines, Opus 4.7 для hard, production-ready, responsive, CLAUDE.md, unit tests, 1 task=1 prompt, context, plan-before-code, second-opinion)
- MetaMinder before-AI (20→4), Mikey solo 3 months ≤$200/mo
- Landing prompt artifact

**Mini-course Lesson 4 — упаковка и запуск:**
- 3 кита: позиционирование/визуал/креативы
- Positioning formula `[Продукт] помогает [узкий сегмент] достичь [результат] через [механизм], в отличие от [альтернатива]`
- B2B stack: Apollo $49 + Instantly $37 + LinkedIn Helper $15
- B2C stack: Meta/TikTok/Google pixels + Advantage+, Mikey 500 вейтлист
- Visuals: ChatGPT/Sora, Nano Banana, Kling/Veo 3, Canva, HeyGen
- ~50 AI creatives, 7-day plan

**Эти куски в $397 уроках НЕ повторять в виде "что это такое". Только использовать как baseline, сразу идти на 3-4 слоя глубже.**

## Текущее состояние всех 17 уроков

Каждый урок живёт в `src/components/presentation/recorded-course/lesson{N}/`. Файлы:
- `L{N}Slide{NN}{Name}.tsx` — отдельные слайды (mobile + desktop в одном файле)
- `L{N}BlockHeader.tsx` — divider между блоками
- `Lesson{N}PresentationShell.tsx` — admin shell с keyboard nav + grid view
- `PublicLesson{N}Shell.tsx` — public wrapper

| L | Тема | Слайдов сейчас | Источник | Что добавить |
|---|---|---|---|---|
| **L0** | 5 правд (opener) | 9 | новое | OK — добавить ДЗ блок (саммари + checklist что внутренне принять) |
| **L1** | Анализ рынка | 22 | M1 part 1 | **ПРИОРИТЕТ — глубже**. Меньше «что такое Perplexity», больше: 8-dim teardown с 12 готовыми промптами, Reddit pain harvest at scale, AI-driven teardown через Claude (загружаем 5 сайтов конкурентов → структурированный JSON), Trend forecasting через Exploding Topics / Glimpse, SimilarWeb deep dive с 4 use case'ами, советы как валидировать TAM через 3 разных метода |
| **L2** | Валидация (custdev + опросы) | 22 | M1 part 2 + новое | Уже улучшен (workflow + прототип + stack + PASS/FAIL). Усилить: cohort segmentation в опросах, AI-summarization 30 интервью одним промптом, signal extraction frameworks, NPS vs Sean Ellis vs Five Whys |
| **L3** | Позиционирование, цена, MVP | 27 | M2 | Углубить: pricing psychology (anchoring, decoy, charm pricing, 9-effect), value-based pricing framework, tier packaging (good/better/best), MVP frameworks beyond MoSCoW (RICE, ICE, Kano), Jobs-to-be-Done в позиционировании |
| **L4** | Лендинг + MVP + Stripe + Atlas | 24 | M3 + новое | OK базово. Добавить: Lovable advanced (custom domains, Supabase RLS, webhook flow), Stripe deep dive (subscription metering, dunning, trials), 5 ошибок Stripe Atlas onboarding |
| **L5** | Pre-sales | 19 | M4 reworked | Добавить: 5 готовых outreach templates по нишам (SaaS B2B / DTC B2C / Marketplace / Agency / Newsletter), 100-no challenge framework, психология первого "нет", price anchoring перед предложением, follow-up sequences |
| **L6** | Claude Code vibe-coding | ~22 | M5 | **МНОГО улучшать.** Мини-курс это уже даёт. Углубить: продвинутые prompts (Skills, CLAUDE.md templates, MCP setup), debugging workflows, second-model review (Opus 4.7 + Codex), parallelization patterns, реальный 60-минутный live build на видео |
| **L7** | Aha-moment | 16 | новое | OK базово. Добавить: 5 готовых workflow для разных типов продукта (SaaS / marketplace / consumer app / B2B tool / agency), heatmap-based Aha discovery через Hotjar/Clarity |
| **L8** | Onboarding 3 экрана | 26 | M7 | Углубить: 7 best practices empty state design, progressive disclosure patterns, push timing для D1 return (research-based), 3 типа onboarding (overlay/inline/checklist) с примерами Linear/Notion/Figma |
| **L9** | Retention D1/D7/D30 | 25 | M8 + cancel flows | Добавить: cohort analysis в Mixpanel шаг-за-шагом, реальный churn audit framework, save flow examples (Spotify, Netflix), pause/downgrade vs full-cancel, NPS как leading indicator churn |
| **L10** | Сторителлинг + контент | 12 | M5 storytelling + новое | Углубить: Pieter Levels case study (как он строит контент 2026), 30-day content sprint, Pinterest/TikTok algorithm в 2026, AI voice clones этическая граница |
| **L11** | Метрики + 9-axis PMF | 16 | новое | Углубить: GA4 setup workflow с скриншотами, Mixpanel funnel building шаг-за-шагом, 9-axis worksheet (downloadable), Sean Ellis survey автоматизация через Tally + Zapier |
| **L12** | Marketing pack | 25 | M9 | Добавить: AEO/GEO (как попасть в ответы ChatGPT/Claude/Perplexity), llms.txt setup, Schema.org JSON-LD, Reddit/Quora answer farming для AI training, brand search test |
| **L13** | Meta-реклама | 20 | M10 + cohort cleanup | Углубить: Advantage+ детально, Pixel events + CAPI + event_id dedup, AEM iOS 18 considerations, scaling rules (3-day, 50-conv), creative testing matrix (5 углов × 3 формата = 15 creatives) |
| **L14** | B2B продажи | 24 | M11 | Углубить: Apollo + Instantly + LinkedIn Helper полный стек с воркфлоу, MAP template (downloadable), 5 объяснений «дорого» с готовыми сценариями, account research через Clay/Common Room |
| **L15** | Fundraising | 13 | новое | Углубить: SAFE Y Combinator template + cap table math, investor list building через Crunchbase Pro / Affinity, pitch deck templates от Sequoia / DocSend benchmark data, due diligence checklist |
| **L16** | Партнёрства + moats | 11 | новое | Углубить: partnership outreach templates (5 готовых), revenue-share math (vs flat fee), partnership tier framework, distribution moat case studies (Cluely, Cursor, Linear) |

## Архитектура / design system

**Цвета:** `bg-[hsl(var(--slide-bg))]` (dark navy), `text-[hsl(var(--slide-text))]`, `text-[hsl(var(--slide-gold))]` (золотой акцент).
**Шрифт:** `font-display` для заголовков (display serif), default sans для body.
**Структура каждого слайда:**
```tsx
import { useIsMobile } from "@/hooks/use-mobile";

export default function L{N}Slide{Name}() {
  const isMobile = useIsMobile();
  if (isMobile) { return (<mobile JSX>); }
  return (<desktop JSX>);
}
```
**Размеры (desktop):**
- H1 welcome: 86px display serif bold
- H2 main thesis: 60px display
- Body large: 26px
- Body: 22px
- Eyebrow uppercase: 18px tracking-[0.2em]
**Размеры (mobile):**
- H1: 36px
- H2: 22-24px
- Body: 12-13px
- Eyebrow: 9-10px tracking-[0.2em]

**Eyebrow → Heading → Body → Callout/Action pattern:**
- Eyebrow в uppercase, золотой, tracking-[0.2em], `text-[hsl(var(--slide-gold))]`
- Heading display serif с золотым акцентом на ключевом слове через `<span className="text-[hsl(var(--slide-gold))]">`
- Body sans muted с `font-semibold` на важных словах
- Callout (gold-tinted): `bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))]`

**ScaledSlide импорт (КРИТИЧНО):** в shell файлах путь — `"../../ScaledSlide"` (2 уровня глубже чем оригинальные meetingN/).

## Шаблон Homework slides (2 связанных слайда)

В конце КАЖДОГО урока, ПЕРЕД Closing, добавить:

**Slide N-2: "Саммари урока · 5 ключевых инсайтов"**
```
Eyebrow: "Что ты должен унести из этого урока"
Heading: "Саммари Урока {N}"
5 numbered bullets с самыми важными insight'ами (не more)
Footer callout: "Эти 5 инсайтов — основа для домашки и для следующего урока"
```

**Slide N-1: "Чеклист действий до следующего урока"**
```
Eyebrow: "Домашка · до следующего урока"
Heading: "Что сделать прямо сейчас"
5-7 numbered actions, каждый с конкретным выходом
Bottom: deliverable (что должно лежать в твоей папке после ДЗ) + AI-coach prompt для проверки
```

Затем Closing slide (что в следующем уроке).

## Memory references (для recall)

В `/Users/mikhaelbarbarych/.claude/projects/-Users-mikhaelbarbarych-Downloads-founders-accelerate-main/memory/MEMORY.md` лежит индекс. Прочитай эти memory-файлы прежде чем начать:
- `project_recorded_course_397.md` — оригинальный 14-уроковый план
- `project_accelerator_meetings.md` — структура M1-M11
- `reference_slide_style.md` — visual system + structural pattern
- `reference_slide_prompt_artifact.md` — copy-button pattern
- `feedback_content_standards.md` — bar качества
- `feedback_design_preferences.md` — design rules

## Workflow для следующих сессий

1. **Начинать с L1** — это самый критичный (Михаэль только что просматривал, отметил overlap)
2. Прочитай `lesson1/Lesson1PresentationShell.tsx` + 5-7 текущих слайдов чтобы понять baseline
3. Прочитай `src/components/mini-course/MiniCourseLesson1Slides.tsx` чтобы НЕ повторять
4. Спланируй 20-33 слайдов в execution-grade формате — где минимум 60% контента не пересекается с мини-курсом
5. Напиши новые слайды + Homework block (Саммари + Чеклист) перед Closing
6. Обнови shell (slideNames, getSlideContent, TOTAL)
7. Verify в preview: открой `localhost:8080/recorded-course/lesson1` и пройди все слайды
8. Commit + push в `main` (Lovable auto-deploy)
9. Спроси Михаэля: «L1 готов, открой /recorded-course/lesson1. Какой следующий — L2 или L6?»

## Конвенции команд

- `git commit -F /tmp/commit-msg.txt` (НЕ `-m` heredoc — кириллица ломает bash)
- `git add <конкретные файлы>` (НЕ `git add .` — там untracked WIP файлы Михаэля типа `.claude/worktrees/`, `.railwayignore`, `founderOsMini3/`)
- После каждого push — Lovable развернёт за 1-2 мин

## Что НЕ трогать

- `src/components/presentation/meeting{1..11}/` — это live акселератор Михаэля (отдельный продукт), его слайды не трогать
- `src/components/mini-course/` — это $19 мини-курс, отдельный продукт
- `src/components/presentation/founderOsMini{1,2,3}/` — это параллельный платный mini-group продукт
- `.claude/worktrees/`, `.railwayignore`, `public/` — WIP / unrelated

## Первое сообщение в новом чате

Скопируй всё содержимое этого файла как первое сообщение. После того как агент прочитает, попроси:

> Прочитай этот handoff полностью. Затем: открой `src/components/presentation/recorded-course/lesson1/Lesson1PresentationShell.tsx` и все слайды L1. Прочитай `src/components/mini-course/MiniCourseLesson1Slides.tsx`. Составь детальный план переработки L1 до 25-30 слайдов execution-grade уровня с 2 Homework слайдами перед Closing. План показать мне прежде чем начнёшь писать слайды.

---

**Последний коммит на main:** `d2bec3f chore(meeting): refresh dates 2025->2026 and Opus 4.6->4.7`
**Все 17 уроков задеплоены.** Дальше — только углубление контента и добавление ДЗ.
