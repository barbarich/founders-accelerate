// Founder OS Mini · Сессия 2 — «Цена и MVP-скоуп»
// Базируется на структуре meeting2 (re-export слайдов цены/MVP),
// плюс новые FOM2-слайды: cover, инсайт, recap, AI-as-QA, два AI-промпта, лайв-упражнения, разбор, ДЗ, закрытие.

// Reused from meeting2 (12-week accelerator)
import M2Slide03ThreeThings from "../meeting2/M2Slide03ThreeThings";
import M2Slide12CommonMistakes from "../meeting2/M2Slide12CommonMistakes";
import M2Slide13ModelsOverview from "../meeting2/M2Slide13ModelsOverview";
import M2Slide14HowToChoose from "../meeting2/M2Slide14HowToChoose";
import M2Slide15PricingPsychology from "../meeting2/M2Slide15PricingPsychology";
import M2Slide16FirstPrice from "../meeting2/M2Slide16FirstPrice";
import M2Slide17MyCases from "../meeting2/M2Slide17MyCases";
import M2Slide18MVPMyths from "../meeting2/M2Slide18MVPMyths";
import M2Slide19OneFeature from "../meeting2/M2Slide19OneFeature";
import M2Slide20KillFeatures from "../meeting2/M2Slide20KillFeatures";
import M2Slide21MVPChecklist from "../meeting2/M2Slide21MVPChecklist";

// New FOM2 slides
import FOM2Slide01Cover from "./FOM2Slide01Cover";
import FOM2Slide02MainInsight from "./FOM2Slide02MainInsight";
import FOM2Slide03Recap from "./FOM2Slide03Recap";
import FOM2Slide06AIQaPrompt from "./FOM2Slide06AIQaPrompt";
import FOM2BlockPricing from "./FOM2BlockPricing";
import FOM2Slide14LivePricing from "./FOM2Slide14LivePricing";
import FOM2BlockMVP from "./FOM2BlockMVP";
import FOM2Slide20MVPPrompt from "./FOM2Slide20MVPPrompt";
import FOM2Slide21LiveReview from "./FOM2Slide21LiveReview";
import FOM2Slide22Homework from "./FOM2Slide22Homework";
import FOM2Slide23Closing from "./FOM2Slide23Closing";

// Storyline:
// 1) Открытие + главный инсайт сессии
// 2) Recap С1 → мост к С2
// 3) Карта сегодня: 3 кита
// 4) Позиционирование как фильтр (применение, не переучивание)
// 5) AI-as-QA промпт для формулировки
// 6) Блок «Цена»: модели → выбор → психология → первая цена → мои кейсы → AI-промпт → лайв
// 7) Блок «MVP»: мифы → one feature → kill features → MoSCoW → AI-промпт
// 8) Универсальный разбор + директорий
// 9) ДЗ к С3 + закрытие

export const slides = [
  FOM2Slide01Cover,             // 1  — Title
  FOM2Slide02MainInsight,       // 2  — Главный инсайт: клиент покупает результат
  FOM2Slide03Recap,             // 3  — Recap С1 → С2
  M2Slide03ThreeThings,         // 4  — 3 кита сегодня
  M2Slide12CommonMistakes,      // 5  — Common mistakes в формулировке позиционирования
  FOM2Slide06AIQaPrompt,        // 6  — AI-as-QA промпт #1
  FOM2BlockPricing,             // 7  — Block 1 header «Цена»
  M2Slide13ModelsOverview,      // 8  — 7 моделей монетизации
  M2Slide14HowToChoose,         // 9  — Как выбрать модель
  M2Slide15PricingPsychology,   // 10 — Психология цены
  M2Slide16FirstPrice,          // 11 — Первая цена
  M2Slide17MyCases,             // 12 — Мои кейсы (ForexTester · MetaMinder · Mikey)
  FOM2Slide14LivePricing,       // 13 — Лайв-упражнение: ставим цену
  FOM2BlockMVP,                 // 14 — Block 2 header «MVP-скоуп»
  M2Slide18MVPMyths,            // 15 — 5 мифов про MVP
  M2Slide19OneFeature,          // 16 — One feature принцип
  M2Slide20KillFeatures,        // 17 — Упражнение «убей фичи» 10→3→1
  M2Slide21MVPChecklist,        // 18 — MoSCoW чеклист
  FOM2Slide21LiveReview,        // 19 — Каждый — по очереди
  FOM2Slide20MVPPrompt,         // 20 — FAQ · вопросы и ответы
  FOM2Slide22Homework,          // 21 — ДЗ к С3
  FOM2Slide23Closing,           // 22 — Закрытие
];
