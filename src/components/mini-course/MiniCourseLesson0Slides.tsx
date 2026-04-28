import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

/* ========== Shared atoms (mirrors Lesson 1 visual language) ========== */

const TOTAL = 6;

const Stage: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col ${className}`}>{children}</div>
);

const Footer: React.FC<{ index: number }> = ({ index }) => (
  <div
    className="absolute"
    style={{ right: 48, bottom: 28, color: "hsl(var(--slide-text-muted))", fontSize: 14, letterSpacing: "0.04em" }}
  >
    Михаэль · Урок 0 из 4 · Slide {index}/{TOTAL}
  </div>
);

const FooterMobile: React.FC<{ index: number }> = ({ index }) => (
  <div
    className="absolute"
    style={{ right: 14, bottom: 10, color: "hsl(var(--slide-text-muted))", fontSize: 8, letterSpacing: "0.04em" }}
  >
    Slide {index}/{TOTAL}
  </div>
);

/* ========== Slide 1 — Hook ========== */
export const S1 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[28px] h-full">
          <h1 className="font-display text-[30px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.02em] mb-[18px]">
            Ты только что заплатил $9.
          </h1>
          <p className="text-[18px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.3] mb-[16px]">
            В ближайшие 7 минут вернём эти деньги ясностью, которой у тебя сейчас нет.
          </p>
          <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">Поехали.</p>
        </div>
        <FooterMobile index={1} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] max-w-[1600px] h-full">
        <h1 className="font-display text-[96px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] mb-[48px]">
          Ты только что заплатил $9.
        </h1>
        <p className="text-[44px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.25] mb-[36px] max-w-[1500px]">
          В ближайшие 7 минут вернём эти деньги ясностью, которой у тебя сейчас нет.
        </p>
        <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">Поехали.</p>
      </div>
      <Footer index={1} />
    </Stage>
  );
};

/* ========== Slide 2 — First exercise ========== */
export const S2 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[16px]">
            Сделай это прямо сейчас
          </h2>
          <div className="rounded-[10px] border-2 border-[hsl(var(--slide-gold))] px-[12px] py-[16px] mb-[14px] bg-[hsl(var(--slide-gold)/0.04)] overflow-hidden">
            <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.3] font-medium whitespace-nowrap text-center">
              «Я строю <span className="text-[hsl(var(--slide-gold))] font-bold">[что]</span> для <span className="text-[hsl(var(--slide-gold))] font-bold">[кого]</span>, потому что они страдают от <span className="text-[hsl(var(--slide-gold))] font-bold">[чего]</span>.»
            </p>
          </div>
          <p className="text-[11px] text-[hsl(var(--slide-gold))] italic leading-[1.4] mb-[10px]">
            Возьми лист бумаги и напиши эту строку про свою идею. У фаундеров с чёткой идеей это занимает 60 секунд.
          </p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            Если уместить идею в одну строку пока не получается — это нормально. Ты в правильном месте: именно над этим мы и начинаем работать.
          </p>
        </div>
        <FooterMobile index={2} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1640px]">
        <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[44px]">
          Сделай это прямо сейчас
        </h2>
        <div className="rounded-[16px] border-2 border-[hsl(var(--slide-gold))] px-[48px] py-[56px] mb-[36px] bg-[hsl(var(--slide-gold)/0.04)] mx-auto w-full max-w-[1640px] overflow-hidden">
          <p className="text-[32px] text-[hsl(var(--slide-text))] leading-[1.3] text-center font-medium whitespace-nowrap">
            «Я строю <span className="text-[hsl(var(--slide-gold))] font-bold">[что]</span> для <span className="text-[hsl(var(--slide-gold))] font-bold">[кого]</span>, потому что они страдают от <span className="text-[hsl(var(--slide-gold))] font-bold">[чего]</span>.»
          </p>
        </div>
        <p className="text-[26px] text-[hsl(var(--slide-gold))] italic leading-[1.45] mb-[20px] text-center max-w-[1500px] mx-auto">
          Возьми лист бумаги и напиши эту строку про свою идею. У фаундеров с чёткой идеей и пониманием, что, кому и зачем они строят, это занимает 60 секунд.
        </p>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5] text-center max-w-[1500px] mx-auto">
          Если уместить идею в одну строку пока не получается — это нормально. Ты в правильном месте: именно над этим мы и начинаем работать.
        </p>
      </div>
      <Footer index={2} />
    </Stage>
  );
};

/* ========== Slide 3 — What this course does NOT promise ========== */
const NOT_ITEMS = [
  "Не сделает тебя миллионером",
  "Не научит привлекать инвестиции",
  "Не научит маркетингу и таргету",
  "Не даст готовую идею",
];

export const S3 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
            Чего этот курс НЕ обещает
          </h2>
          <ul className="space-y-[8px] mb-[14px]">
            {NOT_ITEMS.map((t) => (
              <li key={t} className="flex items-start gap-[8px] text-[12px] text-[hsl(var(--slide-text))] leading-[1.4]">
                <span className="text-[hsl(0_70%_60%)]">❌</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-[12px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mb-[10px]">
            Здесь четыре урока про одну вещь: как из идеи получить первого платящего клиента, не потратив 18 месяцев.
          </p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] italic leading-[1.5]">
            Если тебе нужно что-то другое — закрой и попроси возврат. Я его сделаю.
          </p>
        </div>
        <FooterMobile index={3} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
          Чего этот курс НЕ обещает
        </h2>
        <ul className="space-y-[18px] mb-[40px]">
          {NOT_ITEMS.map((t) => (
            <li key={t} className="flex items-start gap-[20px] text-[34px] text-[hsl(var(--slide-text))] leading-[1.35]">
              <span className="text-[hsl(0_70%_60%)]">❌</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[30px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.35] mb-[20px] max-w-[1600px]">
          Здесь четыре урока про одну вещь: как из идеи получить первого платящего клиента, не потратив 18 месяцев.
        </p>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] italic leading-[1.5] max-w-[1500px]">
          Если тебе нужно что-то другое — закрой и попроси возврат. Я его сделаю.
        </p>
      </div>
      <Footer index={3} />
    </Stage>
  );
};

/* ========== Slide 4 — Outcomes (2x2 grid) ========== */
const OUTCOMES: { n: string; t: string }[] = [
  { n: "01", t: "Список 10 человек, с которыми ты лично говорил про свою идею" },
  { n: "02", t: "Карта твоего рынка с тремя «дырами», в которые можно зайти" },
  { n: "03", t: "Рабочий компонент MVP, построенный с AI за один вечер" },
  { n: "04", t: "Список 10 потенциальных клиентов с планом контакта на ближайшие 7 дней" },
];

export const S4 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
            Что у тебя будет к концу 4 урока
          </h2>
          <div className="grid grid-cols-2 gap-[8px] mb-[12px]">
            {OUTCOMES.map((o) => (
              <div key={o.n} className="rounded-[8px] border border-[hsl(var(--slide-gold))] p-[10px] bg-[hsl(var(--slide-gold)/0.04)]">
                <p className="text-[10px] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">{o.n}</p>
                <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.35]">{o.t}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic text-center leading-[1.4]">
            Это не курс «послушай и забудь». Это четыре артефакта, которые ты унесёшь с собой.
          </p>
        </div>
        <FooterMobile index={4} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[44px]">
          Что у тебя будет к концу 4 урока
        </h2>
        <div className="grid grid-cols-2 gap-[28px] mb-[36px]">
          {OUTCOMES.map((o) => (
            <div key={o.n} className="rounded-[14px] border-2 border-[hsl(var(--slide-gold))] px-[36px] py-[32px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[28px] text-[hsl(var(--slide-gold))] font-bold mb-[14px] tracking-[0.04em]">{o.n}</p>
              <p className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.4]">{o.t}</p>
            </div>
          ))}
        </div>
        <p className="text-[26px] text-[hsl(var(--slide-gold))] italic text-center leading-[1.4]">
          Это не курс «послушай и забудь». Это четыре артефакта, которые ты унесёшь с собой.
        </p>
      </div>
      <Footer index={4} />
    </Stage>
  );
};

/* ========== Slide 5 — Rule of one action ========== */
export const S5 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[18px]">
            Главное правило этого курса
          </h2>
          <p className="text-[16px] text-[hsl(var(--slide-gold))] italic font-semibold text-center leading-[1.35] mb-[18px]">
            «Либо ты делаешь домашку, либо ставишь курс на паузу.»
          </p>
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[10px]">
            Не смотри четыре урока подряд «чтобы понять». Так не работает.
          </p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] italic leading-[1.5]">
            Лучше пройти один урок и применить, чем посмотреть четыре и забыть.
          </p>
        </div>
        <FooterMobile index={5} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[60px]">
          Главное правило этого курса
        </h2>
        <p className="text-[54px] text-[hsl(var(--slide-gold))] italic font-semibold text-center leading-[1.3] mb-[48px] max-w-[1600px] mx-auto">
          «Либо ты делаешь домашку, либо ставишь курс на паузу.»
        </p>
        <p className="text-[28px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[20px]">
          Не смотри четыре урока подряд «чтобы понять». Так не работает.
        </p>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] italic leading-[1.5]">
          Лучше пройти один урок и применить, чем посмотреть четыре и забыть.
        </p>
      </div>
      <Footer index={5} />
    </Stage>
  );
};

/* ========== Slide 6 — Transition to Lesson 1 ========== */
export const S6 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-text-muted))] text-[10px] mb-[12px]">Дальше</p>
          <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] text-center">
            Урок 1 · Customer Development
          </h2>
          <p className="text-[12px] text-[hsl(var(--slide-gold))] leading-[1.4] mb-[20px] text-center">
            К концу следующего часа ты будешь точно знать, имеет ли смысл строить ту идею, которая у тебя сейчас в голове.
          </p>
          <a
            href="/mini-course/lesson1"
            className="inline-flex items-center justify-center self-center px-[20px] py-[12px] rounded-[8px] bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] font-bold text-[13px] no-underline"
          >
            Начать Урок 1 →
          </a>
        </div>
        <FooterMobile index={6} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center items-center px-[140px] h-full max-w-[1700px] mx-auto">
        <p className="uppercase tracking-[0.25em] text-[hsl(var(--slide-text-muted))] text-[22px] mb-[40px]">Дальше</p>
        <h2 className="font-display text-[80px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] text-center">
          Урок 1 · Customer Development
        </h2>
        <p className="text-[32px] text-[hsl(var(--slide-gold))] leading-[1.4] mb-[64px] text-center max-w-[1500px]">
          К концу следующего часа ты будешь точно знать, имеет ли смысл строить ту идею, которая у тебя сейчас в голове.
        </p>
        <a
          href="/mini-course/lesson1"
          className="inline-flex items-center justify-center px-[56px] py-[26px] rounded-[12px] bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] font-bold text-[30px] no-underline hover:opacity-90 transition"
        >
          Начать Урок 1 →
        </a>
      </div>
      <Footer index={6} />
    </Stage>
  );
};

export const slides = [S1, S2, S3, S4, S5, S6];