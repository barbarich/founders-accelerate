// Founder OS Mini · Сессия 6 — «Продажи: от заявки до первых денег»
// 26 слайдов, 120 минут. ФИНАЛ 6-недельной мини-программы.
// Компрессия B2B sales-арки большой программы (meeting11 «B2B sales motion»)
// + реюз mini-course L4 B2B-стек (Apollo + Instantly + LinkedIn Helper).
// Новые FOM6-слайды — только структурные (cover/recap/блок-хедера/закрытие),
// новый слайд «Партнёрства» (темы нет нигде), универсальный разбор без имён,
// и финал «План на 90 дней» вместо обычного «что на следующей неделе».

// Reused from meeting11 (12-week accelerator) — B2B sales motion (без изменений)
import M11Slide02MainThesis from "../meeting11/M11Slide02MainThesis";
import M11Slide03bCRM from "../meeting11/M11Slide03bCRM";
import M11Slide04KillerICP from "../meeting11/M11Slide04KillerICP";
import M11Slide05Dream50 from "../meeting11/M11Slide05Dream50";
import M11Slide06Multithreading from "../meeting11/M11Slide06Multithreading";
import M11Slide11PreCallPrompt from "../meeting11/M11Slide11PreCallPrompt";
import M11Slide13Objections from "../meeting11/M11Slide13Objections";
import M11Slide14Closing from "../meeting11/M11Slide14Closing";
import M11Slide16ExpansionLoop from "../meeting11/M11Slide16ExpansionLoop";

// FOM6-копии M11-слайдов с правками философии/контента (Михаэль 2026-06-17).
// M11 (12-недельная дека cohort 1) оставлена нетронутой.
import FOM6SlideMotionMap from "./FOM6SlideMotionMap";           // ↔ M11Slide03MotionMap (шаг 3 без «жди повода»)
import FOM6SlideChannelPriority from "./FOM6SlideChannelPriority"; // ↔ M11Slide07ChannelPriority (без trigger-gate)
import FOM6SlidePersonalization from "./FOM6SlidePersonalization"; // ↔ M11Slide09TriggerOutreach (объём+деталь, не «жди сигнал»)
import FOM6SlideDemoFlow from "./FOM6SlideDemoFlow";             // ↔ M11Slide10Discovery (ВАУ периодически, не каждые 60–90с)
import FOM6SlideDemoClose from "./FOM6SlideDemoClose";           // ↔ M11Slide12DemoThatCloses (+ материал на вынос)
import FOM6SlideMAP from "./FOM6SlideMAP";                       // ↔ M11Slide15MAPPilot (без копи-пейст шаблона)

// Reused from mini-course Lesson 4 — B2B автоматизация (Apollo + Instantly + LinkedIn Helper)
import { L4B2BTools } from "../../mini-course/MiniCourseLesson4Slides";

// New FOM6 slides
import FOM6Slide01Cover from "./FOM6Slide01Cover";
import FOM6Slide03Recap from "./FOM6Slide03Recap";
import FOM6Block1Pipeline from "./FOM6Block1Pipeline";
import FOM6Block2Outreach from "./FOM6Block2Outreach";
import FOM6Block3Call from "./FOM6Block3Call";
import FOM6Block4AfterClose from "./FOM6Block4AfterClose";
import FOM6SlidePartnerships from "./FOM6SlidePartnerships";
import FOM6SlideReview from "./FOM6SlideReview";
import FOM6Slide90DayPlan from "./FOM6Slide90DayPlan";
import FOM6SlideClosing from "./FOM6SlideClosing";

// Storyline:
// 1) Открытие (финал) + главная мысль: 50 точных > 5000 шаблонных
// 2) Recap всей арки С1–С5 → мост: продукт и трафик есть, осталось продать
// 3) Block 1 «Путь сделки»: 7 этапов motion → CRM/pipeline первые дни
// 4) Block 2 «Кого и через что»: ICP-фильтры → Dream50 → multithreading →
//    приоритет каналов → B2B-стек (Apollo/Instantly/LinkedIn) → партнёрства → trigger-outreach
// 5) Block 3 «Звонок»: pre-call промпт → discovery → demo → возражения → close
// 6) Block 4 «После да и финал»: MAP/пилот → expansion loop → разбор → план на 90 дней → закрытие

export const slides = [
  FOM6Slide01Cover,        // 1  — Title (финал)
  M11Slide02MainThesis,    // 2  — Главная мысль: 50 точных контактов > 5000 шаблонных
  FOM6Slide03Recap,        // 3  — Мост С5 → финал, вся арка С1–С5

  FOM6Block1Pipeline,      // 4  — Block 1 header «Путь сделки»
  FOM6SlideMotionMap,      // 5  — 7 этапов (шаг 3: персонально, но в объёме)
  M11Slide03bCRM,          // 6  — CRM / pipeline первые дни

  FOM6Block2Outreach,      // 7  — Block 2 header «Кому продаём и как до них дотянуться»
  M11Slide04KillerICP,     // 8  — Killer ICP · 7 фильтров
  M11Slide05Dream50,       // 9  — Dream 50 · target list
  M11Slide06Multithreading,// 10 — Multithreading · 4 роли в сделке
  FOM6SlideChannelPriority,// 11 — Приоритет каналов (персонально в объёме)
  L4B2BTools,              // 12 — B2B-стек: Apollo + Instantly + LinkedIn Helper
  FOM6SlidePartnerships,   // 13 — Партнёрства как канал (НОВЫЙ)
  FOM6SlidePersonalization,// 14 — Персонализация в объёме (не «жди сигнал»)

  FOM6Block3Call,          // 15 — Block 3 header «Звонок, который закрывает»
  M11Slide11PreCallPrompt, // 16 — Главный промпт · pre-call research (artifact)
  FOM6SlideDemoFlow,       // 17 — Demo flow (ВАУ периодически + повторяй)
  FOM6SlideDemoClose,      // 18 — Demo that closes + материал на вынос
  M11Slide13Objections,    // 19 — 3 возражения · ответ заранее
  M11Slide14Closing,       // 20 — Closing · 3 фразы + next step

  FOM6Block4AfterClose,    // 21 — Block 4 header «После да и финал программы»
  FOM6SlideMAP,            // 22 — Пилот → оплата (без копи-пейст шаблона)
  M11Slide16ExpansionLoop, // 23 — Expansion loop · 1 сделка → 4
  FOM6SlideReview,         // 24 — Универсальный разбор sales-motion (без имён)
  FOM6Slide90DayPlan,      // 25 — План на 90 дней дальше
  FOM6SlideClosing,        // 26 — Закрытие программы
];
