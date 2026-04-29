import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSlideMeta } from "./SlideMetaContext";
import titleBg from "@/assets/slides/title-bg.jpg";
import { Copy, Check, FileText, Download } from "lucide-react";
import {
  S10, // Mikey case (Slide 6)
} from "./MiniCourseLesson1Slides";

/* ========== Shared atoms (matched to Lesson 1) ========== */

const Stage: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col ${className}`}>{children}</div>
);

const Eyebrow: React.FC<{ children: React.ReactNode; mobile?: boolean }> = ({ children, mobile }) => (
  <p
    className={`uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium ${
      mobile ? "text-[9px] mb-[8px]" : "text-[18px] mb-[20px]"
    }`}
  >
    {children}
  </p>
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

/* ========== Slide 1 — Title (mirrors Lesson 1 S1) ========== */
const L2Title = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--slide-bg))] via-[hsl(var(--slide-bg)/0.85)] to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col justify-center px-[28px] h-full">
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[20px]" />
          <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] text-[10px] font-medium mb-[10px]">
            Урок 2 · Мини-курс
          </p>
          <h1 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.02em]">
            Услышать правду от рынка<br />за 10 разговоров —<br />и не строить для воображаемого клиента
          </h1>
          <div className="mt-[18px] space-y-[8px] text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> сформулировать гипотезу, которую можно проверить</p>
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> провести интервью так, чтобы услышать правду</p>
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> отделить вежливость собеседника от реального сигнала</p>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[14px] italic">
            Без этого продукт строить рано.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--slide-bg))] via-[hsl(var(--slide-bg)/0.85)] to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col justify-center px-[140px] max-w-[1400px] h-full">
        <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[48px]" />
        <p className="uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] text-[20px] font-medium mb-[28px]">
          Урок 2 · Мини-курс The Founders Circle
        </p>
        <h1 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] max-w-[1500px]">
          Услышать правду от рынка за 10 разговоров —<br />
          <span className="text-[hsl(var(--slide-gold))]">и не строить для воображаемого</span> клиента
        </h1>
        <div className="mt-[44px] grid grid-cols-3 gap-[32px] max-w-[1500px]">
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[8px]">Сформулируешь</p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.35]">гипотезу, которую можно проверить за неделю</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[8px]">Проведёшь</p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.35]">интервью так, чтобы услышать правду — а не «купил бы»</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[8px]">Отделишь</p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.35]">вежливость собеседника от реального сигнала</p>
          </div>
        </div>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[36px] italic">
          Без этого продукт строить рано. С этим — у тебя на руках доказательства, а не вера.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 2 — Main insight (PullQuote style from Lesson 1) ========== */
const L2Insight = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Главный инсайт</Eyebrow>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[14px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
              «Если в интервью звучит твой голос громче, чем чужой — ты не интервьюируешь. Ты продаёшь себе свою же идею.»
            </p>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[10px]">
            Это разница между custdev и самообманом.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Главный инсайт</Eyebrow>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[40px] py-[36px] max-w-[1500px]">
          <p className="text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
            «Если в интервью звучит твой голос громче, чем чужой — ты не интервьюируешь. Ты продаёшь себе свою же идею.»
          </p>
        </div>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[20px] italic">
          Это разница между custdev и самообманом.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 3 — Mirror question ========== */
const L2Mirror = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <Eyebrow mobile>Вопрос на старт</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
            Процитируй прямо сейчас одну фразу клиента, которую ты услышал на прошлой неделе.
          </h2>
          <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[10px]">
            Не свой пересказ — его дословные слова.
          </p>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] leading-[1.4]">
            Не можешь — ты ещё не интервьюировал. Только продавал. Этот урок исправит это.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <Eyebrow>Вопрос на старт</Eyebrow>
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em] max-w-[1500px]">
          Процитируй прямо сейчас одну фразу клиента, которую ты услышал на прошлой неделе.
        </h2>
        <p className="text-[26px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[24px] max-w-[1400px]">
          Не свой пересказ — его дословные слова.
        </p>
        <p className="text-[24px] italic text-[hsl(var(--slide-gold))] leading-[1.45] max-w-[1500px]">
          Не можешь — ты ещё не интервьюировал. Только продавал. Этот урок исправит это.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 4 — Цена пропущенного custdev ========== */
const L2_COST_ITEMS = [
  { num: "18 месяцев", text: "жизни на InterviewNinja без custdev" },
  { num: "7 месяцев", text: "до первого клиента на MetaMinder с custdev" },
  { num: "5–10 разговоров", text: "— вся разница между этими двумя историями" },
];
const L2Cost = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <Eyebrow mobile>Мой счёт</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
            Цена пропущенного шага
          </h2>
          <div className="space-y-[10px] mb-[12px]">
            {L2_COST_ITEMS.map((it) => (
              <div key={it.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[10px]">
                <div className="text-[16px] font-bold text-[hsl(var(--slide-gold))] leading-[1.1] mb-[2px]">{it.num}</div>
                <div className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{it.text}</div>
              </div>
            ))}
          </div>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] leading-[1.4]">
            Это не теория из учебника. Это мой счёт за пропущенный custdev.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Мой счёт</Eyebrow>
        <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px] tracking-[-0.01em]">
          Цена пропущенного шага
        </h2>
        <div className="grid grid-cols-3 gap-[24px] mb-[36px]">
          {L2_COST_ITEMS.map((it) => (
            <div key={it.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[28px]">
              <div className="font-display text-[44px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05] mb-[14px]">{it.num}</div>
              <div className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">{it.text}</div>
            </div>
          ))}
        </div>
        <p className="text-[24px] italic text-[hsl(var(--slide-gold))] leading-[1.45]">
          Это не теория из учебника. Это мой счёт за пропущенный custdev.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 5 — Почему custdev — после рынка ========== */
const L2WhyAfterMarket = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <Eyebrow mobile>Порядок имеет значение</Eyebrow>
          <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
            Почему custdev — после рынка
          </h2>
          <div className="space-y-[10px]">
            <div className="bg-[hsl(0_70%_55%/0.08)] border-l-2 border-[hsl(0_70%_55%)] rounded-[8px] px-[12px] py-[10px]">
              <p className="text-[10px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.15em] mb-[4px]">Custdev без карты рынка</p>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                Идёшь к 10 случайным людям, услышишь 10 разных болей и не поймёшь, какая из них — рынок, а какая — частный случай.
              </p>
            </div>
            <div className="bg-[hsl(140_55%_45%/0.1)] border-l-2 border-[hsl(140_55%_50%)] rounded-[8px] px-[12px] py-[10px]">
              <p className="text-[10px] font-bold text-[hsl(140_55%_60%)] uppercase tracking-[0.15em] mb-[4px]">Custdev после рынка</p>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                У тебя гипотеза с конкретным сегментом и болью. 10 разговоров либо подтверждают, либо опровергают её.
              </p>
            </div>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic mt-[12px] leading-[1.4]">
            Карта рынка показывает, где боль в среднем. Custdev — где она прямо сейчас.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <Eyebrow>Порядок имеет значение</Eyebrow>
        <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px] tracking-[-0.01em]">
          Почему custdev — после рынка
        </h2>
        <div className="grid grid-cols-2 gap-[28px] mb-[28px]">
          <div className="bg-[hsl(0_70%_55%/0.08)] border-l-[4px] border-[hsl(0_70%_55%)] rounded-[14px] px-[32px] py-[28px]">
            <p className="text-[18px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.18em] mb-[16px]">Custdev без карты рынка</p>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              Идёшь к 10 случайным людям, услышишь 10 разных болей и не поймёшь, какая из них — рынок, а какая — частный случай. Тратишь недели и не знаешь, что делать с ответами.
            </p>
          </div>
          <div className="bg-[hsl(140_55%_45%/0.08)] border-l-[4px] border-[hsl(140_55%_50%)] rounded-[14px] px-[32px] py-[28px]">
            <p className="text-[18px] font-bold text-[hsl(140_55%_60%)] uppercase tracking-[0.18em] mb-[16px]">Custdev после рынка</p>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              У тебя гипотеза с конкретным сегментом и конкретной болью. 10 разговоров либо подтверждают, либо опровергают её. У тебя есть критерий PASS / FAIL.
            </p>
          </div>
        </div>
        <p className="text-[24px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
          Карта рынка показывает, где боль в среднем. Custdev — где она прямо сейчас.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 7 — Кому полезно ≠ Кто заплатит ========== */
const L2WhoPays = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <Eyebrow mobile>Сегмент</Eyebrow>
          <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
            Кому полезно ≠ Кто заплатит
          </h2>
          <div className="space-y-[10px]">
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.15)] rounded-[8px] px-[12px] py-[10px]">
              <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">🌍 «Кому полезно» = весь мир</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">
                Это не аудитория, это фантазия. На фантазию никто не платит.
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.5)] rounded-[8px] px-[12px] py-[10px]">
              <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">💰 «Кто заплатит»</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">
                Конкретный человек с конкретной болью, который УЖЕ тратит на эту проблему деньги или время.
              </p>
            </div>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic mt-[12px] leading-[1.4]">
            Перед каждым custdev спрашивай: я ищу того, кому полезно — или того, кто заплатит?
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <Eyebrow>Сегмент</Eyebrow>
        <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px] tracking-[-0.01em]">
          Кому полезно ≠ Кто заплатит
        </h2>
        <div className="grid grid-cols-2 gap-[28px] mb-[28px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.18)] rounded-[14px] px-[32px] py-[28px]">
            <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] mb-[16px]">🌍 «Кому полезно» = весь мир</p>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              Это не аудитория, это фантазия. На фантазию никто не платит.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.5)] rounded-[14px] px-[32px] py-[28px]">
            <p className="text-[28px] font-bold text-[hsl(var(--slide-gold))] mb-[16px]">💰 «Кто заплатит»</p>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              Конкретный человек с конкретной болью, который УЖЕ тратит на эту проблему деньги или время.
            </p>
          </div>
        </div>
        <p className="text-[24px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
          Перед каждым custdev спрашивай себя: я ищу того, кому полезно — или того, кто заплатит? Если первое — не трать своё и его время.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 8 — 6 правил интервью ========== */
const L2_RULES = [
  { icon: "🎯", title: "Спрашивай про прошлое", body: "«Как ты решал это в последний раз?» — не «купил бы?»" },
  { icon: "🤐", title: "80/20: слушай vs говори", body: "Клиент говорит 80% времени. Не подсказывай ответ." },
  { icon: "🔍", title: "Копай вглубь", body: "«Почему?» — минимум 3 уровня вглубь. Поверхность врёт." },
  { icon: "⏱️", title: "15–20 минут", body: "Короткие, фокусные. Один сегмент — одна проблема." },
  { icon: "📝", title: "Записывай дословно", body: "Цитаты как есть. Не интерпретируй. Анализ — потом." },
  { icon: "🔄", title: "Проси рефералы", body: "«Кто ещё с этим сталкивается?» Каждое интервью генерит следующее." },
];
const L2Rules = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <p className="text-[9px] text-[hsl(var(--slide-text-muted))] italic mb-[6px] leading-[1.4]">
            Без правил это не custdev. Это разговор с другом про твою идею.
          </p>
          <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            6 правил настоящего интервью
          </h2>
          <div className="grid grid-cols-2 gap-[5px]">
            {L2_RULES.map((r) => (
              <div key={r.title} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.18)] rounded-[6px] px-[8px] py-[7px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{r.icon} {r.title}</p>
                <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
            Нарушаешь хотя бы одно — у тебя на руках не данные, а вежливость собеседника.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[120px] h-full max-w-[1900px]">
        <p className="text-[18px] text-[hsl(var(--slide-text-muted))] italic mb-[14px] leading-[1.4]">
          Без правил это не custdev. Это разговор с другом про твою идею.
        </p>
        <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
          6 правил настоящего интервью
        </h2>
        <div className="grid grid-cols-3 gap-[16px] mb-[24px]">
          {L2_RULES.map((r) => (
            <div key={r.title} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[12px] px-[20px] py-[20px]">
              <p className="text-[28px] mb-[6px]">{r.icon}</p>
              <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] mb-[8px]">{r.title}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{r.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
          Если ты нарушаешь хотя бы одно правило — у тебя на руках не данные. У тебя на руках вежливость собеседника.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 9 — Шаблон гипотезы ========== */
const L2HypothesisChecks = [
  "Люди реально это делают и страдают?",
  "Готовы тратить время или деньги, чтобы это решить?",
  "Пробовали что-то — не помогло?",
  "Есть бюджет и мотивация переключиться?",
];
const L2Hypothesis = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Шаблон</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
            Гипотеза для custdev
          </h2>
          <p className="text-[10px] italic text-[hsl(var(--slide-text-muted))] mb-[10px]">
            Custdev без гипотезы — болтовня. С гипотезой — проверка.
          </p>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[12px] py-[10px] mb-[10px]">
            <p className="text-[10px] font-semibold text-[hsl(var(--slide-text))] leading-[1.5]">
              <span className="text-[hsl(var(--slide-gold))] font-bold">[сегмент]</span> страдает от{" "}
              <span className="text-[hsl(var(--slide-gold))] font-bold">[боль]</span> когда{" "}
              <span className="text-[hsl(var(--slide-gold))] font-bold">[контекст]</span>, и готов платить за решение в формате{" "}
              <span className="text-[hsl(var(--slide-gold))] font-bold">[формат]</span>.
            </p>
          </div>
          <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[4px]">Что ты проверяешь</p>
          <ul className="space-y-[3px] mb-[8px]">
            {L2HypothesisChecks.map((c) => (
              <li key={c} className="text-[9px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4] flex gap-[5px]">
                <span className="text-[hsl(var(--slide-gold))]">·</span><span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            Гипотеза не написана до интервью — услышишь то, что хочешь услышать.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Шаблон</Eyebrow>
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px] tracking-[-0.01em]">
          Гипотеза для custdev
        </h2>
        <p className="text-[22px] italic text-[hsl(var(--slide-text-muted))] mb-[28px]">
          Custdev без гипотезы — это болтовня. С гипотезой — проверка.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[40px] py-[32px] mb-[28px] max-w-[1600px]">
          <p className="text-[32px] font-semibold text-[hsl(var(--slide-text))] leading-[1.5]">
            <span className="text-[hsl(var(--slide-gold))] font-bold">[сегмент]</span> страдает от{" "}
            <span className="text-[hsl(var(--slide-gold))] font-bold">[боль]</span> когда{" "}
            <span className="text-[hsl(var(--slide-gold))] font-bold">[контекст]</span>, и готов платить за решение в формате{" "}
            <span className="text-[hsl(var(--slide-gold))] font-bold">[формат]</span>.
          </p>
        </div>
        <p className="text-[18px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Что ты проверяешь в каждом разговоре</p>
        <ul className="space-y-[8px] mb-[24px]">
          {L2HypothesisChecks.map((c) => (
            <li key={c} className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] flex gap-[14px]">
              <span className="text-[hsl(var(--slide-gold))] font-bold">·</span><span>{c}</span>
            </li>
          ))}
        </ul>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
          Если гипотеза не написана до интервью — ты услышишь то, что захочешь услышать.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 13 — Инструменты + mini-CTA ========== */
const L2_PROMPT = `Ты — продуктовый исследователь уровня senior с 15+ годами опыта проведения customer development интервью для ранних стартапов. Ты глубоко владеешь методологиями «The Mom Test» (Rob Fitzpatrick), Jobs-to-be-Done (Christensen / Ulwick), Lean Customer Development (Cindy Alvarez) и Continuous Discovery Habits (Teresa Torres).

Твоя задача — на основе моей гипотезы сгенерировать сценарий проблемного интервью на 20-30 минут, который я возьму и проведу как есть.

ПЕРВЫЙ ХОД ОБЯЗАТЕЛЬНО — РЕВИЗИЯ ГИПОТЕЗЫ. Прежде чем сгенерировать хоть одну строчку сценария, проверь мою гипотезу по чеклисту:
1. Сегмент — насколько он узок? Можно ли по нему за 30 секунд отфильтровать живого респондента?
2. Боль — конкретная и осязаемая, или абстрактная «это неудобно»?
3. Контекст — понятно, в какой ситуации боль возникает?
4. Альтернативы — указано, что люди делают сейчас, чтобы её обойти?
5. Ключевые предположения — есть 3–5 проверяемых утверждений?

Если в любом пункте есть пробел, размытость или сомнение — и/или у тебя есть свои уточняющие вопросы — не начинай генерацию. Выпиши все вопросы одним нумерованным списком и жди моего ответа. Только после получения уточнений переходи к сценарию.

ВСТАВЬ СВОЮ ГИПОТЕЗУ ЗДЕСЬ ↓
[ заменить эту строку на свою гипотезу из шаблона курса целиком ]

ЧТО ТЫ ДЕЛАЕШЬ

Шаг 1. Анализ гипотезы. Перед сценарием выдай краткую сводку: кого интервьюируем (сегмент + 3–5 квалификационных критериев), что проверяем (3–5 ключевых предположений в формате «Я предполагаю, что [сегмент] [делает / страдает от / тратит на] X в ситуации Y»), где гипотеза самая хрупкая.

Шаг 2. Сценарий интервью. Структура с жёстким таймингом: 1) Разогрев и контекст 2–3 мин; 2) Профиль респондента 3–4 мин; 3) Прошлый опыт с проблемой 10–12 мин; 4) Текущие решения и обходные пути 5–7 мин; 5) Квантификация боли 3–4 мин; 6) Закрытие 2–3 мин.
Для каждого вопроса дай: сам вопрос (точная формулировка), цель (какое предположение проверяет), 2–3 follow-up для углубления, на что слушать (сигналы, эмоции, цифры).

Шаг 3. Пост-интервью чеклист: 5–7 «зелёных» сигналов (проблема реальна), 5–7 «красных» сигналов (проблемы нет), 3 типичные ошибки именно в моей теме.

ЖЁСТКИЕ ПРАВИЛА.
Запрещено: гипотетические вопросы («стали бы вы платить»), наводящие, питчинг идеи, составные вопросы, закрытые как основные, абстрактные мнения.
Обязательно: past behavior > stated preferences > future intentions; конкретные истории (дата, место, что чувствовал); деньги и время; workarounds; 5 Whys; слушать эмоцию; пауза 5 секунд после ключевых вопросов.

ФОРМАТ ОТВЕТА для каждого вопроса:
Q [номер]. [Сам вопрос]
Цель: [какое предположение проверяет]
Follow-up:
→ [углубляющий 1]
→ [углубляющий 2]
Слушать: [сигналы, фразы, цифры, эмоции]

Между блоками — короткие переходы (1–2 предложения). В начале — скрипт открытия и согласия на запись. В конце — скрипт закрытия с просьбой о рефералах в формате «кто из ваших знакомых сталкивается с такой же ситуацией?».

ЯЗЫК. Все вопросы пиши на русском, разговорным языком 2026 года. Никакого канцелярита. Если сегмент — не русскоговорящий, спроси перед началом, на каком языке нужны вопросы.`;

const PDF_HREF = "/mini-course/custdev_interview_prompt.pdf";

const L2Tools = () => {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(L2_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[16px] h-full pb-[28px]">
          <Eyebrow mobile>AI-промпт</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
            Готовый промпт для сценария интервью
          </h2>
          <p className="text-[9px] italic text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
            Скопируй в Claude / GPT / Gemini, вставь свою гипотезу — получи сценарий на 20–30 минут. Всегда читай результат головой и редактируй под себя.
          </p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] p-[8px] mb-[8px] relative">
            <button
              onClick={handleCopy}
              className="absolute top-[6px] right-[6px] flex items-center gap-[3px] text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] hover:bg-[hsl(var(--slide-gold)/0.22)] px-[6px] py-[3px] rounded transition-colors z-10"
            >
              {copied ? <Check className="w-[10px] h-[10px]" /> : <Copy className="w-[10px] h-[10px]" />}
              {copied ? "OK" : "Copy"}
            </button>
            <pre className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] font-mono whitespace-pre-wrap max-h-[150px] overflow-y-auto pr-[40px]">
              {L2_PROMPT}
            </pre>
          </div>
          <div className="flex gap-[6px]">
            <a
              href={PDF_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={stop}
              className="flex-1 flex items-center justify-center gap-[4px] text-[9px] font-semibold text-[hsl(var(--slide-bg))] bg-[hsl(var(--slide-gold))] hover:bg-[hsl(var(--slide-gold)/0.85)] px-[8px] py-[7px] rounded-[6px] transition-colors"
            >
              <FileText className="w-[10px] h-[10px]" /> Превью PDF
            </a>
            <a
              href={PDF_HREF}
              download
              onClick={stop}
              className="flex-1 flex items-center justify-center gap-[4px] text-[9px] font-semibold text-[hsl(var(--slide-gold))] border border-[hsl(var(--slide-gold)/0.5)] hover:bg-[hsl(var(--slide-gold)/0.1)] px-[8px] py-[7px] rounded-[6px] transition-colors"
            >
              <Download className="w-[10px] h-[10px]" /> Скачать
            </a>
          </div>
        </div>
        <FooterMobile />
      </Stage>
    );
  }

  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[120px] h-full max-w-[1800px]">
        <Eyebrow>AI-промпт</Eyebrow>
        <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px] tracking-[-0.01em]">
          Готовый промпт для сценария интервью
        </h2>
        <p className="text-[20px] italic text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1500px] leading-[1.4]">
          Скопируй в Claude / GPT / Gemini, замени плейсхолдер на свою гипотезу — получи сценарий проблемного интервью на 20–30 минут. Всегда читай результат головой и редактируй под себя — AI ошибается.
        </p>

        <div className="grid grid-cols-[1fr_360px] gap-[24px] items-start">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] p-[20px] relative">
            <button
              onClick={handleCopy}
              className="absolute top-[14px] right-[14px] flex items-center gap-[6px] text-[14px] font-medium text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] hover:bg-[hsl(var(--slide-gold)/0.22)] px-[14px] py-[7px] rounded-[8px] transition-colors z-10 cursor-pointer"
            >
              {copied ? <Check className="w-[16px] h-[16px]" /> : <Copy className="w-[16px] h-[16px]" />}
              {copied ? "Скопировано" : "Скопировать"}
            </button>
            <pre className="text-[13px] text-[hsl(var(--slide-text)/0.85)] leading-[1.55] font-mono whitespace-pre-wrap max-h-[520px] overflow-y-auto pr-[160px]">
              {L2_PROMPT}
            </pre>
          </div>

          <div className="flex flex-col gap-[14px]">
            <a
              href={PDF_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={stop}
              className="group flex flex-col gap-[8px] bg-[hsl(var(--slide-gold))] hover:bg-[hsl(var(--slide-gold)/0.9)] text-[hsl(var(--slide-bg))] rounded-[14px] px-[22px] py-[18px] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-[10px]">
                <FileText className="w-[22px] h-[22px]" />
                <span className="text-[20px] font-bold">Превью PDF</span>
              </div>
              <span className="text-[14px] opacity-80 leading-[1.4]">
                Открыть полную версию промпта с памяткой интервьюера в новой вкладке
              </span>
            </a>

            <a
              href={PDF_HREF}
              download
              onClick={stop}
              className="group flex flex-col gap-[8px] border-2 border-[hsl(var(--slide-gold)/0.5)] hover:border-[hsl(var(--slide-gold))] hover:bg-[hsl(var(--slide-gold)/0.08)] text-[hsl(var(--slide-text))] rounded-[14px] px-[22px] py-[18px] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-[10px] text-[hsl(var(--slide-gold))]">
                <Download className="w-[22px] h-[22px]" />
                <span className="text-[20px] font-bold">Скачать PDF</span>
              </div>
              <span className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                5 страниц · промпт + 3-шаговая инструкция + памятка до/во время/после интервью
              </span>
            </a>

            <p className="text-[13px] italic text-[hsl(var(--slide-text-muted))] leading-[1.45] mt-[4px]">
              Промпт — стартовая точка, а не финал. Прочитай сценарий, выкини лишнее, добавь своё. Думай головой.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 14 — InterviewNinja counter-case ========== */
const L2_NINJA = [
  <>Не сформулировал гипотезу до постройки. Думал «всем нужен симулятор интервью». Это не гипотеза — это фантазия. <b>Сигнал был бы в шаблоне.</b></>,
  <>Не провёл 10 разговоров с теми, кто ищет работу. Они бы сказали: «нам не нужен симулятор. Нам нужна работа». <b>Сигнал был бы в первых трёх интервью.</b></>,
  <>Не записывал цитаты. Слышал то, что хотел услышать. «Прикольно» = «купят». «Интересно» = «нужно». <b>Сигнал был бы в pass/fail чек-листе.</b></>,
];
const L2NinjaRetro = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Ретроспектива</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
            InterviewNinja · что было бы при custdev
          </h2>
          <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[8px]">2023–2024. Стартап, который я закрыл за 18 месяцев.</p>
          <ul className="space-y-[7px] mb-[10px]">
            {L2_NINJA.map((t, i) => (
              <li key={i} className="bg-[hsl(0_70%_55%/0.06)] border-l-2 border-[hsl(0_70%_55%)] rounded-[6px] px-[10px] py-[7px] text-[9px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                <span className="text-[hsl(0_70%_65%)] font-bold mr-[4px]">❌</span>{t}
              </li>
            ))}
          </ul>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] leading-[1.4]">
            6 месяцев разработки. Ответ был в 5–10 интервью. Тех самых, которые я отказался делать.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Ретроспектива</Eyebrow>
        <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
          InterviewNinja · что было бы при custdev
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] italic mb-[28px]">
          2023–2024. Стартап, который я закрыл за 18 месяцев. Теперь ты знаешь метод — посмотри, что бы он мне сэкономил.
        </p>
        <ul className="space-y-[16px] mb-[28px]">
          {L2_NINJA.map((t, i) => (
            <li key={i} className="bg-[hsl(0_70%_55%/0.06)] border-l-[4px] border-[hsl(0_70%_55%)] rounded-[12px] px-[28px] py-[20px] text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] flex gap-[18px] max-w-[1600px]">
              <span className="text-[hsl(0_70%_65%)] font-bold text-[26px]">❌</span><span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[24px] italic text-[hsl(var(--slide-gold))] leading-[1.45]">
          6 месяцев разработки. Ответ был в 5–10 интервью. Тех самых, которые я отказался делать.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 15 — Practice now (recorded format, no timeline) ========== */
const L2_PRACTICE = [
  { n: "01", title: "Сформулируй гипотезу", body: "По шаблону: «[сегмент] страдает от [боль] когда [контекст], готов платить за [формат]»." },
  { n: "02", title: "Сгенерируй вопросы с AI", body: "Открой ChatGPT / Claude → дай гипотезу → попроси 10–18 custdev-вопросов." },
  { n: "03", title: "Почисти вопросы", body: "Убери наводящие и дубли. Оставь только открытые — про прошлый опыт, текущее решение и бюджет." },
  { n: "04", title: "Собери список 5 человек", body: "С которыми ты проведёшь интервью на этой неделе. Минимум один — НЕ друг и НЕ из твоего пузыря." },
];
const L2Practice = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Подготовка</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
            Стартовый пакет на 7 дней
          </h2>
          <ol className="space-y-[6px] mb-[10px]">
            {L2_PRACTICE.map((it) => (
              <li key={it.n} className="text-[9px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] font-bold">{it.n}.</span>{" "}
                <b className="text-[hsl(var(--slide-text))]">{it.title}.</b> {it.body}
              </li>
            ))}
          </ol>
          <p className="text-[9px] italic text-[hsl(var(--slide-gold))] leading-[1.4]">
            На выходе: гипотеза + список вопросов + 5 имён.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Подготовка</Eyebrow>
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
          Стартовый пакет на 7 дней
        </h2>
        <ol className="space-y-[16px] mb-[28px]">
          {L2_PRACTICE.map((it) => (
            <li key={it.n} className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] max-w-[1600px]">
              <span className="text-[hsl(var(--slide-gold))] font-bold mr-[14px]">{it.n}.</span>
              <b className="text-[hsl(var(--slide-text))]">{it.title}.</b> {it.body}
            </li>
          ))}
        </ol>
        <p className="text-[22px] italic text-[hsl(var(--slide-gold))] leading-[1.4]">
          На выходе: гипотеза + список вопросов + 5 имён. Это твой стартовый пакет на ближайшие 7 дней.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 16 — Homework (matches Lesson 1 L1Homework style) ========== */
const L2_HOMEWORK_STEPS = [
  { title: "Подготовка", body: "Гипотеза + 10 вопросов + список 10 человек твоей ЦА." },
  { title: "5 интервью × 20 мин", body: "Минимум 5 разговоров. Без записи и дословных цитат — не считается." },
  { title: "Анализ цитат", body: "Сложи цитаты в одну таблицу. Сгруппируй по темам и частоте упоминаний." },
  { title: "Pass / Fail", body: "Прогон по чек-листу: 7 из 10 говорят про одну боль = PASS. Меньше = FAIL." },
  { title: "Решение", body: "PASS → готовь Урок 3. FAIL → переформулируй гипотезу и возвращайся к Уроку 1." },
];
const L2_HOMEWORK_DELIVERABLE = [
  { icon: "📄", title: "Скрипт интервью", sub: "12 открытых вопросов" },
  { icon: "🗣️", title: "10 цитат", sub: "сгруппированных по темам" },
  { icon: "✅", title: "Вердикт PASS / FAIL", sub: "по конкретному критерию" },
];
const L2Homework = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">Домашнее задание</p>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Что сделать после этого урока
          </h2>
          <ol className="space-y-[5px] mb-[10px]">
            {L2_HOMEWORK_STEPS.map((s, i) => (
              <li key={i} className="text-[9px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                <b className="text-[hsl(var(--slide-gold))]">{i + 1}.</b>{" "}
                <b className="text-[hsl(var(--slide-text))]">{s.title}.</b> {s.body}
              </li>
            ))}
          </ol>
          <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[4px]">На выходе должно быть</p>
          <div className="grid grid-cols-3 gap-[5px] mb-[8px]">
            {L2_HOMEWORK_DELIVERABLE.map((t) => (
              <div key={t.title} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[6px] py-[6px]">
                <p className="text-[14px] mb-[2px]">{t.icon}</p>
                <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">{t.title}</p>
                <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{t.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            Без этих трёх артефактов Урок 3 не сработает — он строится поверх них.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">Домашнее задание</p>
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
          Что сделать после этого урока
        </h2>
        <div className="grid grid-cols-2 gap-[48px]">
          <div>
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[16px]">5 шагов</p>
            <ol className="space-y-[14px]">
              {L2_HOMEWORK_STEPS.map((s, i) => (
                <li key={i} className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                  <span className="text-[hsl(var(--slide-gold))] font-bold mr-2">{i + 1}.</span>
                  <b className="text-[hsl(var(--slide-text))]">{s.title}.</b> {s.body}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[16px]">На выходе должно быть</p>
            <div className="grid grid-cols-1 gap-[12px]">
              {L2_HOMEWORK_DELIVERABLE.map((t) => (
                <div key={t.title} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[20px] py-[16px] flex items-center gap-[16px]">
                  <p className="text-[36px]">{t.icon}</p>
                  <div>
                    <p className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{t.title}</p>
                    <p className="text-[15px] text-[hsl(var(--slide-text-muted))]">{t.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[19px] text-[hsl(var(--slide-gold))] italic mt-[18px] leading-[1.45]">
              Без этих трёх артефактов Урок 3 не сработает — он строится поверх них.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 9 (replaces S14) — Кого и где найти + outreach ========== */
const L2_OUTREACH_WHERE = [
  { icon: "🔗", k: "LinkedIn", v: "Sales Navigator: фильтр по должности + индустрии. 20 DM в день." },
  { icon: "👽", k: "Reddit + нишевые форумы", v: "Subreddits твоей ЦА. Ищи треды, где жалуются на проблему." },
  { icon: "💬", k: "Slack / Discord-комьюнити", v: "Профильные сообщества. Сначала помогаешь, потом просишь 15 минут." },
  { icon: "🤝", k: "Своя сеть + рефералы", v: "Знакомые из ниши. Каждое интервью заканчивай: «Кто ещё с этим сталкивается?»" },
];
const L2_DM_TEMPLATE = `Привет, {имя}! Меня зовут {моё имя}, я {коротко о себе — 1 строка, например: делаю исследование для нового сервиса для {роль}}.

Увидел(а) твой профиль и понял(а), что ты как раз сталкиваешься с {проблема} — и мне очень интересен именно твой опыт.

Я ничего не продаю и ничего не предлагаю купить. Просто собираю реальные истории: как ты сейчас с этим справляешься, что работает, что бесит.

Если будет 15 минут на этой или следующей неделе — буду благодарен(на) за разговор. Удобно созвониться или можно текстом, как тебе комфортнее.

В любом случае спасибо, что прочитал(а) 🙌`;
const L2WhoToInterview = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Кого и где найти</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Друзей и семью — <span className="text-[hsl(var(--slide-gold))]">можно</span>. Если они ЦА.
          </h2>
          <p className="text-[9px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[8px]">
            Главное — не <b>кого</b> ты спрашиваешь, а <b>как</b>. Но 5 разговоров с близкими ≠ сигнал — нужны и холодные.
          </p>
          <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[4px]">Где брать холодных</p>
          <div className="grid grid-cols-2 gap-[5px] mb-[8px]">
            {L2_OUTREACH_WHERE.map((w) => (
              <div key={w.k} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[8px] py-[6px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] mb-[1px]">{w.icon} {w.k}</p>
                <p className="text-[8px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35]">{w.v}</p>
              </div>
            ))}
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[7px]">
            <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Шаблон сообщения</p>
            <p className="text-[8.5px] italic text-[hsl(var(--slide-text))] leading-[1.45] whitespace-pre-line">{L2_DM_TEMPLATE}</p>
          </div>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Кого и где найти</Eyebrow>
        <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.01em]">
          Друзей и семью — <span className="text-[hsl(var(--slide-gold))]">можно</span>. Если они твоя ЦА.
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[28px] max-w-[1500px]">
          Доступные люди вокруг — нормальный канал. Но 5 разговоров с близкими ≠ сигнал. Нужны и <b>холодные</b> — те, кто скажет правду без вежливости.
        </p>
        <div className="grid grid-cols-2 gap-[40px] max-w-[1700px]">
          <div>
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Где брать холодных</p>
            <div className="grid grid-cols-1 gap-[10px]">
              {L2_OUTREACH_WHERE.map((w) => (
                <div key={w.k} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[14px]">
                  <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{w.icon} {w.k}</p>
                  <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{w.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Шаблон холодного сообщения</p>
            <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[28px] py-[24px]">
              <p className="text-[22px] italic text-[hsl(var(--slide-text))] leading-[1.55] whitespace-pre-line">{L2_DM_TEMPLATE}</p>
            </div>
            <p className="text-[18px] text-[hsl(var(--slide-gold))] italic mt-[18px] leading-[1.45]">
              Не «расскажу про идею». Не «дай feedback». Только: <b>изучаю проблему</b>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 10 (replaces S15) — Mom Test + Bad/Good questions ========== */
const L2_MOM_RULES = [
  { n: "01", t: "Не говори про свою идею", body: "Спрашивай про их жизнь. Идея — твоя проблема, не их." },
  { n: "02", t: "Спрашивай про прошлое, а не про будущее", body: "«Когда последний раз?» вместо «купил бы?». Прошлое — данные, будущее — фантазии." },
  { n: "03", t: "Меньше говори, больше слушай", body: "80/20. Каждое твоё слово — это твой голос вместо его." },
];
const L2_QA_PAIRS = [
  { bad: "«Тебе бы пригодилось приложение, которое...?»", good: "«Расскажи, как ты решал эту задачу в последний раз?»" },
  { bad: "«Ты бы заплатил $20 в месяц за такое?»", good: "«Сколько ты сейчас тратишь — деньгами или временем — чтобы это решать?»" },
  { bad: "«Тебе нравится идея?»", good: "«Что ты пробовал до этого и почему перестал этим пользоваться?»" },
];
const L2HowToAsk = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Mom Test</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Открытые вопросы про <span className="text-[hsl(var(--slide-gold))]">прошлое</span>
          </h2>
          <div className="space-y-[4px] mb-[8px]">
            {L2_MOM_RULES.map((r) => (
              <div key={r.n} className="text-[9px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] font-bold">{r.n}.</span>{" "}
                <b className="text-[hsl(var(--slide-text))]">{r.t}.</b> {r.body}
              </div>
            ))}
          </div>
          <div className="space-y-[4px]">
            {L2_QA_PAIRS.map((p) => (
              <div key={p.bad} className="grid grid-cols-2 gap-[4px]">
                <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/30 rounded-[5px] px-[6px] py-[5px]">
                  <p className="text-[7px] font-bold text-red-400 uppercase tracking-[0.1em] mb-[1px]">Плохо</p>
                  <p className="text-[8px] italic text-[hsl(var(--slide-text))] leading-[1.3]">{p.bad}</p>
                </div>
                <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[5px] px-[6px] py-[5px]">
                  <p className="text-[7px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[1px]">Хорошо</p>
                  <p className="text-[8px] italic text-[hsl(var(--slide-text))] leading-[1.3]">{p.good}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
            Прошлое — данные. Будущее — фантазии.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Mom Test · 3 правила</Eyebrow>
        <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] mb-[20px]">
          Открытые вопросы про <span className="text-[hsl(var(--slide-gold))]">прошлое</span>
        </h2>
        <div className="grid grid-cols-3 gap-[20px] mb-[28px] max-w-[1700px]">
          {L2_MOM_RULES.map((r) => (
            <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[22px] py-[18px]">
              <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[8px]">{r.n}</p>
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[6px] leading-[1.25]">{r.t}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{r.body}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-[20px] gap-y-[10px] max-w-[1700px] mb-[18px]">
          {L2_QA_PAIRS.map((p) => (
            <React.Fragment key={p.bad}>
              <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/30 rounded-[10px] px-[20px] py-[12px]">
                <p className="text-[11px] font-bold text-red-400 uppercase tracking-[0.18em] mb-[4px]">Плохо</p>
                <p className="text-[18px] italic text-[hsl(var(--slide-text))] leading-[1.4]">{p.bad}</p>
              </div>
              <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[10px] px-[20px] py-[12px]">
                <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[4px]">Хорошо</p>
                <p className="text-[18px] italic text-[hsl(var(--slide-text))] leading-[1.4]">{p.good}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
        <p className="text-[20px] text-[hsl(var(--slide-gold))] italic leading-[1.4] max-w-[1700px]">
          Прошлое — данные. Будущее — фантазии. Спрашивай так, чтобы человек <b className="not-italic">рассказывал историю</b>, а не отвечал «да / нет».
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 11 (replaces S16) — Pass/Fail + vitamin/painkiller + ready-to-pay ========== */
const L2_PASS = [
  "Сами поднимают эту боль — без наводящего вопроса",
  "Описывают её теми же словами, что и ты",
  "Рассказывают про костыли: таблицы, чаты, стажёр",
  "Называют, сколько времени / денег / нервов это съедает",
  "Уже пробовали что-то — и бросили. Проблема не решена",
  "7 из 10 в сегменте говорят про одно и то же",
];
const L2_FAIL = [
  "Проблему называешь ты — собеседник просто кивает",
  "«Да, бывает» — без примера и без деталей",
  "Не помнят, когда сталкивались последний раз",
  "«У друга такое было» — не у них самих",
  "Никаких костылей нет — значит, и боли нет",
  "В сегменте про эту боль говорят 1–2 из 10",
];
const L2_READY_TO_PAY = [
  { icon: "💸", t: "Уже тратят деньги или время", v: "На костыль, стажёра, фрилансера, подписку." },
  { icon: "📅", t: "Готовы согласиться на демо или предоплату", v: "Не «когда выйдет — напишу». А: «когда покажешь?»" },
  { icon: "🤝", t: "Дают рефералы сами, без просьбы", v: "«Слушай, у моего коллеги то же самое — познакомлю»." },
];
const L2PassFail = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[16px] h-full">
          <Eyebrow mobile>Как читать результат</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Pass / Fail + <span className="text-[hsl(var(--slide-gold))]">painkiller</span>, не vitamin
          </h2>
          <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[6px]">
            Vitamin = «было бы неплохо». Painkiller = «болит сейчас, плачу за обезболивающее».
          </p>
          <div className="grid grid-cols-2 gap-[5px] mb-[6px]">
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[5px] px-[6px] py-[6px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Pass</p>
              <ul className="text-[7px] text-[hsl(var(--slide-text))] leading-[1.4] space-y-[2px]">
                {L2_PASS.map((t) => <li key={t}>• {t}</li>)}
              </ul>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/30 rounded-[5px] px-[6px] py-[6px]">
              <p className="text-[8px] font-bold text-red-400 uppercase tracking-[0.12em] mb-[3px]">Fail</p>
              <ul className="text-[7px] text-[hsl(var(--slide-text))] leading-[1.4] space-y-[2px]">
                {L2_FAIL.map((t) => <li key={t}>• {t}</li>)}
              </ul>
            </div>
          </div>
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">3 сигнала готовности платить</p>
          <ul className="space-y-[2px]">
            {L2_READY_TO_PAY.map((r) => (
              <li key={r.t} className="text-[7.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                {r.icon} <b>{r.t}.</b> {r.v}
              </li>
            ))}
          </ul>
          <p className="text-[8px] text-[hsl(var(--slide-gold))] italic mt-[6px] leading-[1.4]">
            7 из 10 говорят про боль + хотя бы 1 сигнал платить → строим. Иначе — гипотеза не та.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[120px] h-full max-w-[1900px]">
        <Eyebrow>Как читать результат</Eyebrow>
        <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px] tracking-[-0.01em]">
          Pass / Fail + <span className="text-[hsl(var(--slide-gold))]">painkiller</span>, не vitamin
        </h2>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[24px] max-w-[1600px]">
          <b className="text-[hsl(var(--slide-text))]">Vitamin</b> = «было бы неплохо», тёплая улыбка, отложили и забыли.{" "}
          <b className="text-[hsl(var(--slide-text))]">Painkiller</b> = болит прямо сейчас, уже платят за костыль. Стройте только painkiller.
        </p>
        <div className="grid grid-cols-2 gap-[24px] mb-[20px] max-w-[1700px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] px-[28px] py-[20px]">
            <p className="text-[18px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Pass</p>
            <ul className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.45] space-y-[6px]">
              {L2_PASS.map((t) => <li key={t}>• {t}</li>)}
            </ul>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/30 rounded-[14px] px-[28px] py-[20px]">
            <p className="text-[18px] font-bold text-red-400 uppercase tracking-[0.18em] mb-[12px]">Fail</p>
            <ul className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.45] space-y-[6px]">
              {L2_FAIL.map((t) => <li key={t}>• {t}</li>)}
            </ul>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[28px] py-[16px] max-w-[1700px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">3 сигнала готовности платить</p>
          <div className="grid grid-cols-3 gap-[20px]">
            {L2_READY_TO_PAY.map((r) => (
              <div key={r.t} className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                <p className="font-bold text-[hsl(var(--slide-text))] mb-[2px]">{r.icon} {r.t}</p>
                <p>{r.v}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-[20px] text-[hsl(var(--slide-gold))] italic mt-[18px] leading-[1.4] max-w-[1700px]">
          7 из 10 говорят про боль <b className="not-italic">+ хотя бы один сигнал платить</b> → строим. Иначе — гипотеза не та, возвращайся к Уроку 1.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 17 — Closing (matches Lesson 1 L1Closing style, no button) ========== */
const L2Closing = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Дальше — Урок 3</p>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
            Гипотеза прошла рынок и людей.<br />Время строить.
          </h2>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[12px] py-[10px] mb-[12px]">
            <p className="text-[11px] italic font-semibold text-[hsl(var(--slide-gold))] leading-[1.4]">
              «Если идея пережила рынок, конкурентов и 10 разговоров — у тебя на руках не вера, а доказательства. Можно строить.»
            </p>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[8px]">
            До этого момента любой код, любая фича, любой лендинг — преждевременны.
          </p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            В Уроке 3 — как с AI собрать первую версию продукта за 7 дней. Не обзор инструментов. Воркфлоу.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">Дальше — Урок 3</p>
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px] tracking-[-0.01em]">
          Гипотеза прошла рынок и людей. Время строить.
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[40px] py-[32px] mb-[36px] max-w-[1500px]">
          <p className="text-[34px] italic font-semibold text-[hsl(var(--slide-gold))] leading-[1.35]">
            «Если идея пережила рынок, конкурентов и 10 разговоров — у тебя на руках не вера, а доказательства. Можно строить.»
          </p>
        </div>
        <p className="text-[26px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[16px] max-w-[1500px]">
          До этого момента любой код, любая фича, любой лендинг — преждевременны.
        </p>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] italic leading-[1.5] max-w-[1500px]">
          В Уроке 3 — как с AI собрать первую версию продукта за 7 дней. Не обзор инструментов. Воркфлоу.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

// Lesson 2 — 17 slides (visual style aligned with Lesson 1)
export const slides = [
  L2Title,            // 1  Title (mirrors S1)
  L2Insight,          // 2  Main insight (PullQuote style)
  L2Cost,             // 3  Цена пропущенного шага
  L2WhyAfterMarket,   // 4  Почему custdev — после рынка
  S10,                // 5  Mikey case (kept from Lesson 1)
  L2WhoPays,          // 6  Кому полезно ≠ Кто заплатит
  L2Rules,            // 7  6 правил интервью
  L2Hypothesis,       // 8  Шаблон гипотезы
  L2WhoToInterview,   // 9  Кого и где найти + outreach (доработка S14)
  L2HowToAsk,         // 10 Mom Test + Bad/Good вопросы (доработка S15)
  L2PassFail,         // 11 Pass/Fail + vitamin/painkiller + готовность платить (доработка S16)
  L2Tools,            // 12 Инструменты + mini-CTA
  L2NinjaRetro,       // 13 InterviewNinja counter-case
  L2Practice,         // 14 Стартовый пакет на 7 дней
  L2Homework,         // 15 Домашнее задание
  L2Closing,          // 16 Closing
];
