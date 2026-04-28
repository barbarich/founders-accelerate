import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSlideMeta } from "./SlideMetaContext";
import {
  // Reused source slides from Lesson 1 module
  S5,  // InterviewNinja opening (source pos 6)
  S6,  // InterviewNinja anatomy (source pos 7)
  S7,  // Why it didn't work (source pos 8)
  S8,  // What I would do now (source pos 9)
  S10, // Mikey case (source pos 11)
  S13, // Anchor 3 · Customer Development (source pos 21)
  S14, // Who to interview (source pos 22)
  S15, // How to ask questions (source pos 23)
  S16, // Pass/Fail signals (source pos 24)
  S18, // Templates download (source pos 25)
  S21, // Where it breaks if you go solo (source pos 27)
} from "./MiniCourseLesson1Slides";

/* ========== Shared atoms (same visual language) ========== */

const Stage: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col ${className}`}>{children}</div>
);

const Footer: React.FC = () => {
  const { index, total, lesson } = useSlideMeta();
  return (
    <div
      className="absolute"
      style={{ right: 48, bottom: 28, color: "hsl(var(--slide-text-muted))", fontSize: 14, letterSpacing: "0.04em" }}
    >
      Михаэль · Урок {lesson} из 4 · Slide {index}/{total}
    </div>
  );
};

const FooterMobile: React.FC = () => {
  const { index, total } = useSlideMeta();
  return (
    <div
      className="absolute"
      style={{ right: 14, bottom: 10, color: "hsl(var(--slide-text-muted))", fontSize: 8, letterSpacing: "0.04em" }}
    >
      Slide {index}/{total}
    </div>
  );
};

/* ========== Slide 1 — Title ========== */
const L2Title = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[28px] h-full">
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[20px]" />
          <h1 className="font-display text-[32px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
            Урок 2.<br />Customer<br />Development
          </h1>
          <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mt-[14px] leading-[1.5] italic">
            Как услышать правду от рынка через 10 разговоров
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] max-w-[1500px] h-full">
        <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[48px]" />
        <h1 className="font-display text-[88px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
          Урок 2. Customer Development
        </h1>
        <p className="text-[30px] text-[hsl(var(--slide-text-muted))] mt-[28px] leading-[1.4] max-w-[1200px] italic">
          Как услышать правду от рынка через 10 разговоров
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 2 — Main insight ========== */
const L2Insight = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center items-center text-center px-[24px] h-full">
          <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] text-[9px] mb-[16px] font-medium">
            Главный инсайт этого урока
          </p>
          <p className="font-display text-[18px] italic font-semibold text-[hsl(var(--slide-text))] leading-[1.35] mb-[12px]">
            «Карта рынка показывает, где боль есть в среднем.<br />
            Customer Development показывает, где она у конкретного человека прямо сейчас.»
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center items-center text-center px-[140px] h-full max-w-[1700px] mx-auto">
        <p className="uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] text-[20px] mb-[48px] font-medium">
          Главный инсайт этого урока
        </p>
        <p className="font-display text-[60px] italic font-semibold text-[hsl(var(--slide-text))] leading-[1.3] max-w-[1600px]">
          «Карта рынка показывает, где боль есть в среднем.<br />
          Customer Development показывает, где она у конкретного человека прямо сейчас.»
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 14 — Checklist + closing + transition (CTA to Lesson 3) ========== */
const L2_CHECKLIST: { n: string; t: React.ReactNode }[] = [
  { n: "01", t: <>Сформулируй главную гипотезу: <i>«Я предполагаю, что [кто] страдает от [чего] и сейчас решает это [как]»</i>.</> },
  { n: "02", t: <>Составь список из <b>10 человек твоей ЦА</b> для интервью. Можно знакомых — главное, что они реально в сегменте.</> },
  { n: "03", t: <>Адаптируй вопросы под свою нишу: <b>только открытые, только про прошлый опыт</b>. Никаких «купил бы / понравилось бы».</> },
  { n: "04", t: <>Проведи минимум <b>5 разговоров</b>. Записывай дословные цитаты, костыли, частоту и стоимость проблемы.</> },
];

const L2Final = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
            Что сделать после этого урока
          </h2>
          <ol className="space-y-[6px] mb-[12px]">
            {L2_CHECKLIST.map((it) => (
              <li key={it.n} className="flex items-start gap-[6px] text-[9px] text-[hsl(var(--slide-text))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] font-bold min-w-[16px]">{it.n}</span>
                <span>{it.t}</span>
              </li>
            ))}
          </ol>
          <div className="border-t border-[hsl(var(--slide-text-muted)/0.3)] pt-[10px]">
            <p className="text-[11px] italic font-semibold text-[hsl(var(--slide-gold))] leading-[1.35] mb-[8px] text-center">
              «Если идея пережила рынок, конкурентов и 10 разговоров — у тебя на руках не вера, а доказательства. Можно строить.»
            </p>
            <p className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[10px] text-center">
              На Уроке 3 — как строить с AI. Не обзор инструментов. Воркфлоу.
            </p>
            <div className="text-center">
              <button
                disabled
                className="inline-flex items-center gap-2 px-[14px] py-[8px] rounded-[8px] bg-[hsl(var(--slide-gold)/0.4)] text-[hsl(var(--slide-bg))] font-bold text-[11px] cursor-not-allowed"
                title="Урок 3 скоро будет доступен"
              >
                Урок 3 — скоро →
              </button>
            </div>
          </div>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] py-[60px] h-full max-w-[1700px]">
        <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
          Что сделать после этого урока
        </h2>
        <ol className="space-y-[14px] mb-[32px]">
          {L2_CHECKLIST.map((it) => (
            <li key={it.n} className="flex items-start gap-[20px] text-[22px] text-[hsl(var(--slide-text))] leading-[1.45] max-w-[1500px]">
              <span className="text-[24px] text-[hsl(var(--slide-gold))] font-bold tracking-[0.04em] min-w-[54px]">{it.n}</span>
              <span>{it.t}</span>
            </li>
          ))}
        </ol>
        <div className="border-t border-[hsl(var(--slide-text-muted)/0.3)] pt-[28px] flex flex-col items-center text-center">
          <p className="text-[34px] italic font-semibold text-[hsl(var(--slide-gold))] leading-[1.3] mb-[20px] max-w-[1500px]">
            «Если идея пережила рынок, конкурентов и 10 разговоров — у тебя на руках не вера, а доказательства. Можно строить.»
          </p>
          <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[28px]">
            На Уроке 3 — как строить с AI. Не обзор инструментов. Воркфлоу.
          </p>
          <button
            disabled
            className="inline-flex items-center gap-3 px-[40px] py-[18px] rounded-[14px] bg-[hsl(var(--slide-gold)/0.4)] text-[hsl(var(--slide-bg))] font-bold text-[24px] cursor-not-allowed"
            title="Урок 3 скоро будет доступен"
          >
            Урок 3 — скоро →
          </button>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

// Lesson 2 — 14 slides (Customer Development)
export const slides = [
  L2Title,   // 1 NEW Title
  L2Insight, // 2 NEW Main insight
  S5,        // 3 InterviewNinja opening (src pos 6)
  S6,        // 4 InterviewNinja anatomy (src pos 7)
  S7,        // 5 Why it didn't work (src pos 8)
  S8,        // 6 What I would do now (src pos 9)
  S10,       // 7 Mikey case (src pos 11)
  S13,       // 8 Anchor 3 · Customer Development (src pos 21)
  S14,       // 9 Who to interview (src pos 22)
  S15,       // 10 How to ask questions (src pos 23)
  S16,       // 11 Pass/Fail signals (src pos 24)
  S18,       // 12 Templates download (src pos 25)
  S21,       // 13 Where it breaks if you go solo (src pos 27)
  L2Final,   // 14 NEW Checklist + closing + CTA
];