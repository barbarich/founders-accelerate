// Founder OS Mini · Сессия 5 — «Маркетинг: AI-креативы, аватары и запуск Meta»
// 25 слайдов, 120 минут. Компрессия маркетинг-арки большой программы
// (meeting9 «AI-креативы» + meeting10 «Live Meta ads») + новый блок про AI-аватары.
// РЕЮЗ готовых M9/M10-слайдов. Новые FOM5-слайды — только структурные
// (cover/recap/блок-хедера/ДЗ/тизер/закрытие), блок аватаров (нет нигде) и
// санитайзенные копии M10-воркшопа (убраны привязки cohort-1: Dira.click, имена, «M9»).

// Reused from meeting9 (12-week accelerator) — AI-креативы
import M9Slide13OldVsNew from "../meeting9/M9Slide13OldVsNew";
import M9Slide09VisualStack from "../meeting9/M9Slide09VisualStack";
import M9Slide14AdAnatomy from "../meeting9/M9Slide14AdAnatomy";
import M9Slide11OneStyleRule from "../meeting9/M9Slide11OneStyleRule";

// Reused from meeting10 (12-week accelerator) — Live Meta ads
import M10Slide02MainThesis from "../meeting10/M10Slide02MainThesis";
import M10Slide05Andromeda from "../meeting10/M10Slide05Andromeda";
import M10Slide06BudgetLearningPhase from "../meeting10/M10Slide06BudgetLearningPhase";
import M10Slide10WorkshopPublish from "../meeting10/M10Slide10WorkshopPublish";
import M10Slide11WorkshopAfterLaunch from "../meeting10/M10Slide11WorkshopAfterLaunch";
import M10Slide13Top7Mistakes from "../meeting10/M10Slide13Top7Mistakes";

// New FOM5 slides
import FOM5Slide01Cover from "./FOM5Slide01Cover";
import FOM5Slide03Recap from "./FOM5Slide03Recap";
import FOM5Block1Creatives from "./FOM5Block1Creatives";
import FOM5Block2Avatars from "./FOM5Block2Avatars";
import FOM5SlideCreativePrompt from "./FOM5SlideCreativePrompt";
import FOM5SlideAvatars from "./FOM5SlideAvatars";
import FOM5SlideAvatarPrompt from "./FOM5SlideAvatarPrompt";
import FOM5Block3Meta from "./FOM5Block3Meta";
// Санитайзенные FOM5-копии M10-воркшопа (без привязок cohort-1)
import FOM5SlidePreFlight from "./FOM5SlidePreFlight";
import FOM5SlideWSCampaign from "./FOM5SlideWSCampaign";
import FOM5SlideWSAdSet from "./FOM5SlideWSAdSet";
import FOM5SlideWSAd from "./FOM5SlideWSAd";
import FOM5SlideHomework from "./FOM5SlideHomework";
import FOM5SlideNextWeek from "./FOM5SlideNextWeek";
import FOM5SlideClosing from "./FOM5SlideClosing";

// Storyline:
// 1) Открытие + главный инсайт: в 2026 ты не настраиваешь — кормишь алгоритм креативами
// 2) Recap С4 → мост: продукт удерживает, теперь упаковка трафика
// 3) Block 1 «AI-креативы»: что сломалось → визуальный стек → анатомия → один стиль → промпт 5 концептов
// 4) Block 2 «AI-аватары»: говорящее видео без съёмок → стек и workflow → промпт 5 скриптов
// 5) Block 3 «Запуск Meta вживую»: Andromeda → бюджет/learning → pre-flight → Campaign → AdSet → Ad → Publish → After launch
// 6) Топ-7 ошибок → ДЗ к С6 → тизер С6 «Продажи» → закрытие

export const slides = [
  FOM5Slide01Cover,          // 1  — Title
  M10Slide02MainThesis,      // 2  — Главный инсайт: кормишь алгоритм, не настраиваешь
  FOM5Slide03Recap,          // 3  — Мост С4 → С5

  FOM5Block1Creatives,       // 4  — Block 1 header «AI-креативы»
  M9Slide13OldVsNew,         // 5  — Что сломалось в 2026: креатив > таргетинг
  M9Slide09VisualStack,      // 6  — AI-стек визуалов (вкл. HeyGen)
  M9Slide14AdAnatomy,        // 7  — Анатомия креатива: hook / value / proof / CTA
  M9Slide11OneStyleRule,     // 8  — Правило одного стиля
  FOM5SlideCreativePrompt,   // 9  — Промпт: 5 проработанных концептов креативов (copy-paste, честный)

  FOM5Block2Avatars,         // 10 — Block 2 header «AI-аватары»
  FOM5SlideAvatars,          // 11 — Говорящее видео без съёмок: стек + workflow
  FOM5SlideAvatarPrompt,     // 12 — Промпт: 5 UGC-скриптов аватара (copy-paste)

  FOM5Block3Meta,            // 13 — Block 3 header «Запуск Meta вживую»
  M10Slide05Andromeda,       // 14 — 4 слоя AI внутри Ads Manager
  M10Slide06BudgetLearningPhase, // 15 — Бюджет $20–30 + learning phase
  FOM5SlidePreFlight,        // 16 — Pre-flight: 6 пунктов до Publish
  FOM5SlideWSCampaign,       // 17 — Воркшоп шаг 1: Campaign
  FOM5SlideWSAdSet,          // 18 — Воркшоп шаг 2: Ad Set (Advantage+)
  FOM5SlideWSAd,             // 19 — Воркшоп шаг 3: Ad (Dynamic Creative)
  M10Slide10WorkshopPublish, // 20 — Воркшоп шаг 4: Review → Publish
  M10Slide11WorkshopAfterLaunch, // 21 — Воркшоп шаг 5: After launch

  M10Slide13Top7Mistakes,    // 22 — Топ-7 ошибок первого запуска
  FOM5SlideHomework,         // 23 — ДЗ к С6
  FOM5SlideNextWeek,         // 24 — Что будет на С6 «Продажи»
  FOM5SlideClosing,          // 25 — Закрытие
];
