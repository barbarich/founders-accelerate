// Founder OS Mini · Сессия 3 — «Build & Land»
// 22 слайда, 120 минут. Максимум переиспользования из meeting3/ и meeting5/
// плюс новые FOM3-слайды: cover, инсайт, recap, два блок-хедера, workshop,
// 60-sec test, чек-лист, ДЗ, тизер С4, закрытие.

// Reused from meeting3 (12-week accelerator)
import M3Slide06AIStack from "../meeting3/M3Slide06AIStack";
import M3Slide09LandingFromFrameworks from "../meeting3/M3Slide09LandingFromFrameworks";
import M3Slide10LandingAnatomy from "../meeting3/M3Slide10LandingAnatomy";
import M3Slide11LovableDemo from "../meeting3/M3Slide11LovableDemo";
import M3Slide12AuthPayments from "../meeting3/M3Slide12AuthPayments";
import M3Slide13Analytics from "../meeting3/M3Slide13Analytics";

// Reused from meeting5 (12-week accelerator)
import M5Slide06SwitchSignals from "../meeting5/M5Slide06SwitchSignals";
import M5Slide07AntiPatterns from "../meeting5/M5Slide07AntiPatterns";
import M5Slide08Observability from "../meeting5/M5Slide08Observability";
import M5Slide10P1Scaffolder from "../meeting5/M5Slide10P1Scaffolder";
import M5Slide11P2Debug from "../meeting5/M5Slide11P2Debug";

// New FOM3 slides
import FOM3Slide01Cover from "./FOM3Slide01Cover";
import FOM3Slide02MainInsight from "./FOM3Slide02MainInsight";
import FOM3Slide03Recap from "./FOM3Slide03Recap";
import FOM3BlockBuild from "./FOM3BlockBuild";
import FOM3BlockLanding from "./FOM3BlockLanding";
import FOM3Slide17Workshop from "./FOM3Slide17Workshop";
import FOM3Slide18Publish from "./FOM3Slide18Publish";
import FOM3Slide19Checklist from "./FOM3Slide19Checklist";
import FOM3Slide20Homework from "./FOM3Slide20Homework";
import FOM3Slide21NextWeek from "./FOM3Slide21NextWeek";
import FOM3Slide22Closing from "./FOM3Slide22Closing";

// Storyline:
// 1) Открытие + главный инсайт: скорость = качество ТЗ
// 2) Recap С1→С2→С3, мост в работу
// 3) Block 1 «Build»: стек ролей → 10 плагинов Claude → Supabase+Vercel
//    → 5 правил CLAUDE.md → Plan Mode алгоритм → Debug когда застрял
// 4) Block 2 «Land»: 8 блоков лендинга → промпт для Lovable
//    → как задать стиль → auth+оплата → аналитика с 1-го дня
// 5) Workshop вживую → 60-секундный тест в Claude
// 6) Чек-лист готовности → ДЗ к С4 → тизер С4 → закрытие

export const slides = [
  FOM3Slide01Cover,              // 1  — Title
  FOM3Slide02MainInsight,        // 2  — Скорость = качество ТЗ
  FOM3Slide03Recap,              // 3  — Мост С2 → С3

  FOM3BlockBuild,                // 4  — Block 1 header «Build»
  M3Slide06AIStack,              // 5  — AI-стек: ПМ / Дизайнер+Фронт / Fullstack
  M5Slide06SwitchSignals,        // 6  — 10 плагинов Claude
  M5Slide08Observability,        // 7  — Supabase + Vercel: backend+deploy
  M5Slide07AntiPatterns,         // 8  — 5 правил в CLAUDE.md (Opus 4.7)
  M5Slide10P1Scaffolder,         // 9  — Алгоритм старта: Plan Mode → 2-е мнение → код
  M5Slide11P2Debug,              // 10 — Когда застрял: 4 шага с Claude

  FOM3BlockLanding,              // 11 — Block 2 header «Land»
  M3Slide09LandingFromFrameworks,// 12 — 8 блоков лендинга 2026
  M3Slide10LandingAnatomy,       // 13 — Промпт для Lovable (готовый шаблон со скобками)
  M3Slide11LovableDemo,          // 14 — Как задать стиль + каталог стилей
  M3Slide12AuthPayments,         // 15 — Авторизация + оплата (Supabase Auth · Stripe/Grow)
  M3Slide13Analytics,            // 16 — Аналитика с первого дня (GA · пиксели · Mixpanel · Hotjar)

  FOM3Slide17Workshop,           // 17 — Workshop вживую: лендинг в Lovable за 25 мин
  FOM3Slide18Publish,            // 18 — Publish: GoDaddy → one-click → live за минуту

  FOM3Slide19Checklist,          // 19 — Чек-лист готовности «MVP + лендинг к С4»
  FOM3Slide20Homework,           // 20 — ДЗ к С4
  FOM3Slide21NextWeek,           // 21 — Что будет на С4
  FOM3Slide22Closing,            // 22 — Закрытие
];
