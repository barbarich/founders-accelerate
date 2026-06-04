// Founder OS Mini · Сессия 4 — «Onboarding & Aha»
// 29 слайдов, 120 минут. Компрессия онбординг-арки большой программы
// (meeting6 «Aha/онбординг» + meeting7 «Правило трёх экранов» + meeting8 «Retention»)
// Retention-автоматизация = РЕЮЗ готовых M7/M8-слайдов (push/email, промпт 7 писем,
// реактивация, сервисный стек $0), НЕ новые экраны. Новые FOM4-слайды — только структурные
// (cover/инсайт/recap/блок-хедера/воркшоп/ДЗ/тизер/закрытие) + 5 механик + AI-промпт по скриншотам.

// Reused from meeting6 (12-week accelerator)
import M6Slide07Aha from "../meeting6/M6Slide07Aha";
import M6Slide08Onboarding from "../meeting6/M6Slide08Onboarding";

// Reused from meeting7 (12-week accelerator) — «Правило трёх экранов»
import M7Slide04FourReasons from "../meeting7/M7Slide04FourReasons";
import M7Slide05ThreeScreensRule from "../meeting7/M7Slide05ThreeScreensRule";
import M7Slide07PromiseFormula from "../meeting7/M7Slide07PromiseFormula";
import M7Slide10FiveSecondTest from "../meeting7/M7Slide10FiveSecondTest";
import M7Slide13SkipTheWall from "../meeting7/M7Slide13SkipTheWall";
import M7Slide16EmptyStates from "../meeting7/M7Slide16EmptyStates";
import M7Slide18Screen3Intro from "../meeting7/M7Slide18Screen3Intro";
import M7Slide21PushEmail from "../meeting7/M7Slide21PushEmail";

// Reused from meeting8 (12-week accelerator) — Retention
import M8Slide03ShockNumber from "../meeting8/M8Slide03ShockNumber";
import M8Slide06Principle from "../meeting8/M8Slide06Principle";
import M8Slide10NotificationLast from "../meeting8/M8Slide10NotificationLast";
import M8Slide17AIPrompt from "../meeting8/M8Slide17AIPrompt";
import M8Slide22ReactivationInsights from "../meeting8/M8Slide22ReactivationInsights";
import M8Slide20RetentionStackFree from "../meeting8/M8Slide20RetentionStackFree";

// New FOM4 slides
import FOM4Slide01Cover from "./FOM4Slide01Cover";
import FOM4Slide02MainInsight from "./FOM4Slide02MainInsight";
import FOM4Slide03Recap from "./FOM4Slide03Recap";
import FOM4Block1Sixty from "./FOM4Block1Sixty";
import FOM4Block2Screens from "./FOM4Block2Screens";
import FOM4Slide15Workshop from "./FOM4Slide15Workshop";
import FOM4Block3Retention from "./FOM4Block3Retention";
import FOM4Slide20Mechanics from "./FOM4Slide20Mechanics";
import FOM4Slide21AIPrompt from "./FOM4Slide21AIPrompt";
import FOM4Slide22LiveReview from "./FOM4Slide22LiveReview";
import FOM4Slide23Homework from "./FOM4Slide23Homework";
import FOM4Slide24NextWeek from "./FOM4Slide24NextWeek";
import FOM4Slide25Closing from "./FOM4Slide25Closing";

// Storyline:
// 1) Открытие + главный инсайт: Aha живёт в продукте, не на лендинге
// 2) Recap С3 → мост в первые 60 секунд
// 3) Block 1 «Первые 60 секунд»: 4 причины ухода → Aha → онбординг = путь к Aha
// 4) Block 2 «Правило трёх экранов»: рамка → экран 1 (обещание + тест 5 сек)
//    → экран 2 (действие до регистрации + empty states) → экран 3 (причина вернуться)
//    → лайв-воркшоп «проходим продукт каждого»
// 5) Block 3 «Retention»: бенчмарки D1/D7/D30 → петля → уведомление-финал → 5 механик в продукте
//    → [reuse M7/M8] push vs email → промпт «7 писем» → реактивация → сервисы автоматизации ($0 стек)
// 6) AI-промпт «AI по скриншотам» → универсальный разбор → ДЗ к С5 → тизер С5 → закрытие

export const slides = [
  FOM4Slide01Cover,         // 1  — Title
  FOM4Slide02MainInsight,   // 2  — Aha живёт в продукте
  FOM4Slide03Recap,         // 3  — Мост С3 → С4

  FOM4Block1Sixty,          // 4  — Block 1 header «Первые 60 секунд»
  M7Slide04FourReasons,     // 5  — 4 причины, почему уходят
  M6Slide07Aha,             // 6  — Aha живёт в продукте (примеры)
  M6Slide08Onboarding,      // 7  — Онбординг = кратчайший путь к Aha

  FOM4Block2Screens,        // 8  — Block 2 header «Правило трёх экранов»
  M7Slide05ThreeScreensRule,// 9  — Рамка: обещание / действие / возврат
  M7Slide07PromiseFormula,  // 10 — Экран 1: формула обещания
  M7Slide10FiveSecondTest,  // 11 — Экран 1: тест на 5 секунд
  M7Slide13SkipTheWall,     // 12 — Экран 2: результат раньше регистрации
  M7Slide16EmptyStates,     // 13 — Экран 2: empty states
  M7Slide18Screen3Intro,    // 14 — Экран 3: одна причина вернуться
  FOM4Slide15Workshop,      // 15 — Лайв-воркшоп: проходим продукт каждого

  FOM4Block3Retention,      // 16 — Block 3 header «Причина вернуться»
  M8Slide03ShockNumber,     // 17 — Бенчмарки D1/D7/D30
  M8Slide06Principle,       // 18 — Петля возврата
  M8Slide10NotificationLast,// 19 — Уведомление — это финал петли
  FOM4Slide20Mechanics,          // 20 — 5 механик возврата в продукте (причина)
  M7Slide21PushEmail,            // 21 — Каналы: push vs email, что куда (reuse M7)
  M8Slide17AIPrompt,             // 22 — Готовый промпт «7 писем» onboarding-серии (reuse M8)
  M8Slide22ReactivationInsights, // 23 — Реактивация ушедших: 6 инсайтов (reuse M8)
  M8Slide20RetentionStackFree,   // 24 — Сервисы автоматизации ретеншна, $0 на старте (reuse M8)

  FOM4Slide21AIPrompt,      // 25 — AI смотрит твои экраны (3 точки спотыкания)
  FOM4Slide22LiveReview,    // 26 — Универсальный разбор по трём экранам
  FOM4Slide23Homework,      // 27 — ДЗ к С5
  FOM4Slide24NextWeek,      // 28 — Что будет на С5 «Маркетинг»
  FOM4Slide25Closing,       // 29 — Закрытие
];
