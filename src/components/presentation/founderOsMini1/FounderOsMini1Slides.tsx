// Founder OS Mini · Сессия 1
// Базируется на структуре /mini-course/lesson1 (re-export слайдов),
// плюс вставки из исходной FOM1-презентации (знакомство, pass/fail, формула, тесты, разбор кейса).

import {
  S1, S2, S3, S4, S4b, S5, S6, S9,
  L1ThreeLevels,
  L1EightDimensions,
  L1NegativeReviews,
  L1Perplexity,
  L1DeepResearchPrompt,
  L1AgentLens,
  L1AgentPmf,
  L1Homework,
  L1Closing,
} from "@/components/mini-course/MiniCourseLesson1Slides";

import FOM1Slide04Intro from "./FOM1Slide04Intro";
import FOM1Slide11Competitors from "./FOM1Slide11Competitors";
import FOM1Slide12WhoPays from "./FOM1Slide12WhoPays";
import FOM1Slide13Hypothesis from "./FOM1Slide13Hypothesis";
import FOM1Slide16PassFail from "./FOM1Slide16PassFail";
import FOM1Slide18Formula from "./FOM1Slide18Formula";
import FOM1Slide19ThreeFormats from "./FOM1Slide19ThreeFormats";
import FOM1Slide20FourTests from "./FOM1Slide20FourTests";
import FOM1Slide22MikhaelDiagnosis from "./FOM1Slide22MikhaelDiagnosis";

// Storyline:
// 1) Открытие и главный месседж сессии
// 2) Знакомство с группой
// 3) Личная история «как НЕ надо» + зеркальный вопрос + цифры + кто я
// 4) Кейс успеха (MetaMinder) — рынок решает
// 5) Конкуренты: зачем, кто, как искать, как анализировать
// 6) Инструменты ресёрча: Perplexity, Deep Research, SimilarWeb, AI-агенты
// 7) Custdev: сигналы pass/fail
// 8) Позиционирование: формула + три формулировки + четыре теста
// 9) Разбор живого кейса участника (Михаэль · AIRecom)
// 10) ДЗ + закрытие

export const slides = [
  S1,                            // 1  — Title
  S2,                            // 2  — Главный инсайт
  FOM1Slide04Intro,              // 3  — Знакомство с группой
  S5,                            // 4  — Провальный кейс InterviewNinja (title)
  S6,                            // 5  — InterviewNinja · анатомия
  S3,                            // 6  — Зеркальный вопрос
  S4,                            // 7  — Цифры по рынку
  S4b,                           // 8  — Кто ведёт
  S9,                            // 9  — MetaMinder · кейс успеха
  FOM1Slide11Competitors,        // 10 — Зачем смотреть на конкурентов
  FOM1Slide12WhoPays,            // 11 — 3 уровня + где искать
  L1EightDimensions,             // 12 — 8 измерений анализа
  L1NegativeReviews,             // 13 — Негативные отзывы — золото
  L1Perplexity,                  // 14 — Perplexity · 5 промптов
  L1DeepResearchPrompt,          // 15 — Deep Research master prompt
  FOM1Slide13Hypothesis,         // 16 — Deep Research + SimilarWeb (наш промпт + ручной чек-лист)
  L1AgentLens,                   // 17 — FoundersLens AI Agent
  L1AgentPmf,                    // 18 — PMF AI Agent
  FOM1Slide16PassFail,           // 19 — Сигналы pass / fail в интервью
  FOM1Slide18Formula,            // 20 — Формула позиционирования
  FOM1Slide19ThreeFormats,       // 21 — Один результат — три формулировки
  FOM1Slide20FourTests,          // 22 — Четыре теста перед запуском
  FOM1Slide22MikhaelDiagnosis,   // 23 — Разбор кейса участника · AIRecom
  L1Homework,                    // 24 — Домашнее задание
  L1Closing,                     // 25 — Закрытие
];
