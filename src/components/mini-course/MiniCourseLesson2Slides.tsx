import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSlideMeta } from "./SlideMetaContext";
import {
  S10, // Mikey case (Slide 6)
  S14, // Who to interview (Slide 10)
  S15, // How to ask questions (Slide 11)
  S16, // Pass/Fail signals (Slide 12)
} from "./MiniCourseLesson1Slides";

/* ========== Shared atoms ========== */

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

/* ========== Slide 2 — Main insight (rewritten) ========== */
const L2Insight = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center items-center text-center px-[24px] h-full">
          <p className="font-display text-[16px] italic font-semibold text-[hsl(var(--slide-text))] leading-[1.4] mb-[14px]">
            «Если в интервью звучит твой голос громче, чем чужой —<br />
            ты не интервьюируешь.<br />
            Ты продаёшь себе свою же идею.»
          </p>
          <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] text-[9px] font-medium">
            главный инсайт этого урока
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center items-center text-center px-[140px] h-full max-w-[1700px] mx-auto">
        <p className="font-display text-[58px] italic font-semibold text-[hsl(var(--slide-text))] leading-[1.3] max-w-[1600px] mb-[40px]">
          «Если в интервью звучит твой голос громче, чем чужой —<br />
          ты не интервьюируешь.<br />
          Ты продаёшь себе свою же идею.»
        </p>
        <p className="uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] text-[20px] font-medium">
          главный инсайт этого урока
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
        <div className="flex flex-col justify-center px-[24px] h-full">
          <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] text-[9px] mb-[14px] font-medium text-center">
            Вопрос на старт
          </p>
          <p className="font-display text-[15px] font-semibold text-[hsl(var(--slide-text))] leading-[1.35] text-center mb-[14px]">
            Процитируй прямо сейчас<br />
            одну фразу клиента,<br />
            которую ты услышал на прошлой неделе.<br />
            Не свой пересказ — его дословные слова.
          </p>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] leading-[1.4] text-center">
            Не можешь — ты ещё не интервьюировал. Только продавал. Этот урок исправит это.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center items-center px-[140px] h-full max-w-[1700px] mx-auto">
        <p className="uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] text-[20px] mb-[40px] font-medium">
          Вопрос на старт
        </p>
        <p className="font-display text-[52px] font-semibold text-[hsl(var(--slide-text))] leading-[1.25] text-center mb-[40px] max-w-[1500px]">
          Процитируй прямо сейчас<br />
          одну фразу клиента,<br />
          которую ты услышал на прошлой неделе.<br />
          Не свой пересказ — его дословные слова.
        </p>
        <p className="text-[24px] italic text-[hsl(var(--slide-gold))] leading-[1.45] text-center max-w-[1400px]">
          Не можешь — ты ещё не интервьюировал. Только продавал. Этот урок исправит это.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 4 — Цена пропущенного custdev ========== */
const L2Cost = () => {
  const isMobile = useIsMobile();
  const items = [
    { num: "18 месяцев", text: "жизни на InterviewNinja без custdev" },
    { num: "7 месяцев", text: "до первого клиента на MetaMinder с custdev" },
    { num: "5–10 разговоров", text: "— вся разница" },
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[16px]">
            Цена пропущенного шага
          </h2>
          <div className="space-y-[12px] mb-[14px]">
            {items.map((it) => (
              <div key={it.num}>
                <div className="text-[16px] font-bold text-[hsl(var(--slide-gold))] leading-[1.1]">{it.num}</div>
                <div className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{it.text}</div>
              </div>
            ))}
          </div>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] leading-[1.4] text-center">
            Это не теория из учебника. Это мой счёт за пропущенный custdev.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
          Цена пропущенного шага
        </h2>
        <div className="space-y-[28px] mb-[40px]">
          {items.map((it) => (
            <div key={it.num} className="flex items-baseline gap-[28px]">
              <div className="font-display text-[64px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05] min-w-[420px]">
                {it.num}
              </div>
              <div className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{it.text}</div>
            </div>
          ))}
        </div>
        <p className="text-[26px] italic text-[hsl(var(--slide-gold))] leading-[1.4] text-center max-w-[1500px]">
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
          <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
            Почему custdev — после рынка
          </h2>
          <div className="space-y-[10px] mb-[12px]">
            <div>
              <p className="text-[10px] font-bold text-[#E07B6F] mb-[4px]">Если custdev без карты рынка</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
                Ты идёшь к 10 случайным людям, услышишь 10 разных болей, и не поймёшь, какая из них — рынок, а какая — частный случай.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#7FB77E] mb-[4px]">Если custdev после рынка</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
                У тебя гипотеза с конкретным сегментом и болью. 10 разговоров либо подтверждают, либо опровергают её.
              </p>
            </div>
          </div>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] leading-[1.4] text-center">
            Карта рынка показывает, где боль в среднем. Custdev — где она прямо сейчас.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] py-[60px] h-full max-w-[1700px]">
        <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
          Почему custdev — после рынка
        </h2>
        <div className="grid grid-cols-2 gap-[40px] mb-[40px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
            <h3 className="text-[26px] font-bold text-[#E07B6F] mb-[20px]">Если custdev без карты рынка</h3>
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.55]">
              Ты идёшь к 10 случайным людям, услышишь 10 разных болей, и не поймёшь, какая из них — рынок, а какая — частный случай. Тратишь недели и не знаешь, что делать с ответами.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
            <h3 className="text-[26px] font-bold text-[#7FB77E] mb-[20px]">Если custdev после рынка</h3>
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.55]">
              У тебя гипотеза с конкретным сегментом и конкретной болью. 10 разговоров либо подтверждают, либо опровергают её. У тебя есть критерий PASS / FAIL.
            </p>
          </div>
        </div>
        <p className="text-[26px] italic text-[hsl(var(--slide-gold))] leading-[1.4] text-center max-w-[1500px] mx-auto">
          Карта рынка показывает, где боль в среднем. Custdev показывает, где она прямо сейчас.
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
          <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
            Кому полезно ≠ Кто заплатит
          </h2>
          <div className="space-y-[10px] mb-[12px]">
            <div>
              <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">🌍 «Кому полезно» = весь мир</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
                Это не аудитория, это фантазия. На фантазию никто не платит.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">💰 «Кто заплатит»</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
                Конкретный человек с конкретной болью, который УЖЕ тратит на эту проблему деньги или время.
              </p>
            </div>
          </div>
          <p className="text-[9px] italic text-[hsl(var(--slide-gold))] leading-[1.4] text-center">
            Перед каждым custdev спрашивай: я ищу того, кому полезно — или того, кто заплатит?
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] py-[60px] h-full max-w-[1700px]">
        <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
          Кому полезно ≠ Кто заплатит
        </h2>
        <div className="grid grid-cols-2 gap-[40px] mb-[40px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
            <h3 className="text-[28px] font-bold text-[hsl(var(--slide-text))] mb-[20px]">🌍 «Кому полезно» = весь мир</h3>
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.55]">
              Это не аудитория, это фантазия. На фантазию никто не платит.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.5)] rounded-[12px] p-[36px]">
            <h3 className="text-[28px] font-bold text-[hsl(var(--slide-gold))] mb-[20px]">💰 «Кто заплатит»</h3>
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.55]">
              Конкретный человек с конкретной болью, который УЖЕ тратит на эту проблему деньги или время.
            </p>
          </div>
        </div>
        <p className="text-[24px] italic text-[hsl(var(--slide-gold))] leading-[1.45] text-center max-w-[1500px] mx-auto">
          Перед каждым custdev спрашивай себя: я ищу того, кому полезно — или того, кто заплатит? Если первое — не трать своё и его время.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 8 — 6 правил интервью ========== */
const L2_RULES = [
  { icon: "🎯", title: "Спрашивай про прошлое", text: "«Как ты решал это в последний раз?» — не «купил бы?»" },
  { icon: "🤐", title: "80/20: слушай vs говори", text: "Клиент говорит 80% времени. Не подсказывай ответ." },
  { icon: "🔍", title: "Копай вглубь", text: "«Почему?» — минимум 3 уровня вглубь. Поверхность врёт." },
  { icon: "⏱️", title: "15–20 минут", text: "Короткие, фокусные. Один сегмент — одна проблема." },
  { icon: "📝", title: "Записывай дословно", text: "Цитаты как есть. Не интерпретируй. Анализ — потом." },
  { icon: "🔄", title: "Проси рефералы", text: "«Кто ещё с этим сталкивается?» Каждое интервью генерит следующее." },
];
const L2Rules = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <h2 className="font-display text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
            6 правил настоящего интервью
          </h2>
          <p className="text-[8px] italic text-[hsl(var(--slide-text-muted))] mb-[10px]">
            Без этих правил это не custdev. Это разговор с другом про твою идею.
          </p>
          <div className="grid grid-cols-2 gap-[6px] mb-[10px]">
            {L2_RULES.map((r) => (
              <div key={r.title} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] p-[6px]">
                <div className="text-[10px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{r.icon} {r.title}</div>
                <div className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{r.text}</div>
              </div>
            ))}
          </div>
          <p className="text-[8px] italic text-[hsl(var(--slide-gold))] leading-[1.4] text-center">
            Нарушаешь хотя бы одно — у тебя на руках не данные, а вежливость собеседника.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] py-[60px] h-full max-w-[1700px]">
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
          6 правил настоящего интервью
        </h2>
        <p className="text-[22px] italic text-[hsl(var(--slide-text-muted))] mb-[28px]">
          Без этих правил это не custdev. Это разговор с другом про твою идею.
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-[20px] mb-[28px]">
          {L2_RULES.map((r) => (
            <div key={r.title} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[24px]">
              <div className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[10px]">{r.icon} {r.title}</div>
              <div className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{r.text}</div>
            </div>
          ))}
        </div>
        <p className="text-[22px] italic text-[hsl(var(--slide-gold))] leading-[1.4] text-center max-w-[1500px] mx-auto">
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
          <h2 className="font-display text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
            Шаблон гипотезы для custdev
          </h2>
          <p className="text-[8px] italic text-[hsl(var(--slide-text-muted))] mb-[10px]">
            Custdev без гипотезы — болтовня. С гипотезой — проверка.
          </p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.5)] rounded-[6px] p-[10px] mb-[10px]">
            <p className="text-[10px] font-semibold text-[hsl(var(--slide-text))] leading-[1.4]">
              <span className="text-[hsl(var(--slide-gold))]">[сегмент]</span> испытывает проблему <span className="text-[hsl(var(--slide-gold))]">[боль]</span> когда <span className="text-[hsl(var(--slide-gold))]">[контекст]</span>, и готов платить за решение в формате <span className="text-[hsl(var(--slide-gold))]">[формат]</span>.
            </p>
          </div>
          <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">Что ты проверяешь:</p>
          <ul className="space-y-[2px] mb-[10px]">
            {L2HypothesisChecks.map((c) => (
              <li key={c} className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] flex gap-[4px]">
                <span className="text-[hsl(var(--slide-gold))]">·</span><span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="text-[8px] italic text-[hsl(var(--slide-gold))] leading-[1.4] text-center">
            Гипотеза не написана до интервью — услышишь то, что хочешь услышать.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] py-[60px] h-full max-w-[1700px]">
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
          Шаблон гипотезы для custdev
        </h2>
        <p className="text-[22px] italic text-[hsl(var(--slide-text-muted))] mb-[28px]">
          Custdev без гипотезы — это болтовня. С гипотезой — проверка.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border-2 border-[hsl(var(--slide-gold)/0.5)] rounded-[14px] p-[36px] mb-[28px]">
          <p className="text-[28px] font-semibold text-[hsl(var(--slide-text))] leading-[1.5]">
            <span className="text-[hsl(var(--slide-gold))]">[сегмент]</span> испытывает проблему <span className="text-[hsl(var(--slide-gold))]">[боль]</span> когда <span className="text-[hsl(var(--slide-gold))]">[контекст]</span>, и готов платить за решение в формате <span className="text-[hsl(var(--slide-gold))]">[формат]</span>.
          </p>
        </div>
        <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[12px]">Что ты проверяешь в каждом разговоре:</p>
        <ul className="space-y-[8px] mb-[24px]">
          {L2HypothesisChecks.map((c) => (
            <li key={c} className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5] flex gap-[14px]">
              <span className="text-[hsl(var(--slide-gold))] font-bold">·</span><span>{c}</span>
            </li>
          ))}
        </ul>
        <p className="text-[22px] italic text-[hsl(var(--slide-gold))] leading-[1.4] text-center max-w-[1500px] mx-auto">
          Если гипотеза не написана до интервью — ты услышишь то, что захочешь услышать.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 13 — Инструменты + mini-CTA в TFC ========== */
const L2Tools = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <h2 className="font-display text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
            Инструменты для custdev
          </h2>
          <p className="text-[8px] italic text-[hsl(var(--slide-text-muted))] mb-[8px]">
            Два инструмента, которые делают за тебя 80% работы.
          </p>
          <div className="space-y-[6px] mb-[10px]">
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] p-[8px]">
              <div className="text-[10px] font-bold text-[hsl(var(--slide-text))]">🎙️ tl;dv <span className="text-[8px] text-[hsl(var(--slide-text-muted))] font-normal">tldv.io · бесплатно</span></div>
              <div className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[2px]">
                Бот в Zoom/Meet → запись, транскрипт, саммари с цитатами.
              </div>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] p-[8px]">
              <div className="text-[10px] font-bold text-[hsl(var(--slide-text))]">🤖 AI для вопросов <span className="text-[8px] text-[hsl(var(--slide-text-muted))] font-normal">ChatGPT / Claude / Gemini</span></div>
              <div className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[2px]">
                Гипотеза → 10–18 вопросов за 2 минуты. Убираешь наводящие.
              </div>
            </div>
          </div>
          <div className="border border-[hsl(var(--slide-gold)/0.4)] rounded-[6px] p-[8px]">
            <p className="text-[7px] italic text-[hsl(var(--slide-text-muted))] leading-[1.45]">
              Сделать 10 интервью реально. Сделать так, чтобы они привели к решению — нужны итерации и обратная связь. Если хочешь, чтобы я еженедельно разбирал твои интервью — TFC. <a href="https://founders-circle.space" className="text-[hsl(var(--slide-gold))] underline">founders-circle.space →</a>
            </p>
          </div>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] py-[60px] h-full max-w-[1700px]">
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
          Инструменты для custdev
        </h2>
        <p className="text-[22px] italic text-[hsl(var(--slide-text-muted))] mb-[28px]">
          Два инструмента, которые делают за тебя 80% работы.
        </p>
        <div className="grid grid-cols-2 gap-[32px] mb-[28px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[28px]">
            <h3 className="text-[26px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">🎙️ tl;dv</h3>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] mb-[10px]">tldv.io · бесплатно</p>
            <p className="text-[18px] italic text-[hsl(var(--slide-gold))] mb-[10px]">Запись и AI-анализ интервью.</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Бот подключается к Zoom / Google Meet, записывает, транскрибирует, выделяет ключевые моменты. После звонка — готовое саммари с цитатами.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[28px]">
            <h3 className="text-[26px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">🤖 AI для вопросов</h3>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] mb-[10px]">ChatGPT / Claude / Gemini</p>
            <p className="text-[18px] italic text-[hsl(var(--slide-gold))] mb-[10px]">Генерирует custdev-вопросы за 2 минуты.</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Вставляешь шаблон гипотезы → AI выдаёт 10–18 вопросов. Убираешь наводящие, проверяешь логику, проводишь интервью.
            </p>
          </div>
        </div>
        <div className="border border-[hsl(var(--slide-gold)/0.4)] rounded-[12px] p-[20px] bg-[hsl(var(--slide-bg-alt)/0.4)]">
          <p className="text-[18px] italic text-[hsl(var(--slide-text-muted))] leading-[1.55] text-center">
            Это весь метод. Сделать 10 интервью руками — реально. Сделать так, чтобы они привели к решению — нужны итерации и обратная связь на интерпретацию. Если хочешь, чтобы я еженедельно разбирал твои интервью и говорил, где ты обманываешь себя — <a href="https://founders-circle.space" className="text-[hsl(var(--slide-gold))] underline font-semibold">TFC. founders-circle.space →</a>
          </p>
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
          <h2 className="font-display text-[14px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
            InterviewNinja · что было бы при custdev
          </h2>
          <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px]">2023–2024. Стартап, который я закрыл за 18 месяцев.</p>
          <p className="text-[9px] italic text-[hsl(var(--slide-text))] mb-[8px]">Теперь ты знаешь метод. Посмотри, что бы он мне сэкономил.</p>
          <ul className="space-y-[6px] mb-[10px]">
            {L2_NINJA.map((t, i) => (
              <li key={i} className="flex gap-[5px] text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
                <span className="text-[#E07B6F] font-bold">❌</span><span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-[8px] italic text-[hsl(var(--slide-gold))] leading-[1.4] text-center">
            18 месяцев разработки. Ответ был в 5–10 интервью. Тех самых, которые я отказался делать.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] py-[60px] h-full max-w-[1700px]">
        <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          InterviewNinja · что было бы при custdev
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[14px]">2023–2024. Стартап, который я закрыл за 18 месяцев.</p>
        <p className="text-[24px] italic text-[hsl(var(--slide-text))] mb-[28px]">Теперь ты знаешь метод. Посмотри, что бы он мне сэкономил.</p>
        <ul className="space-y-[18px] mb-[28px]">
          {L2_NINJA.map((t, i) => (
            <li key={i} className="flex gap-[18px] text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              <span className="text-[#E07B6F] font-bold text-[26px]">❌</span><span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[24px] italic text-[hsl(var(--slide-gold))] leading-[1.45] text-center max-w-[1500px] mx-auto">
          18 месяцев разработки. Ответ был в 5–10 интервью. Те самые, которые я отказался делать.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 15 — Practice now · 10 минут ========== */
const L2_PRACTICE = [
  { time: "2 мин", text: <>Сформулируй гипотезу по шаблону: «[сегмент] страдает от [боль] когда [контекст], готов платить за [формат]»</> },
  { time: "2 мин", text: <>Открой ChatGPT / Claude → вставь промпт для генерации custdev-вопросов с твоей гипотезой</> },
  { time: "2 мин", text: <>Получи 10–18 вопросов → убери наводящие и дубли</> },
  { time: "2 мин", text: <>Проверь: есть ли вопросы про прошлый опыт, текущее решение и бюджет. Если нет — добавь.</> },
  { time: "2 мин", text: <>Составь список из 5 человек, с которыми ты проведёшь интервью на этой неделе. Минимум один — НЕ друг.</> },
];
const L2Practice = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <h2 className="font-display text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
            Делаем прямо сейчас · 10 минут
          </h2>
          <p className="text-[8px] italic text-[hsl(var(--slide-gold))] mb-[8px]">
            Поставь видео на паузу. Сделай это руками. Без этого Урок 3 не сработает.
          </p>
          <ol className="space-y-[5px] mb-[8px]">
            {L2_PRACTICE.map((it, i) => (
              <li key={i} className="flex gap-[5px] text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] font-bold min-w-[28px]">{i + 1}. {it.time}</span>
                <span>{it.text}</span>
              </li>
            ))}
          </ol>
          <p className="text-[8px] italic text-[hsl(var(--slide-gold))] leading-[1.4] text-center">
            На выходе: гипотеза + список вопросов + 5 имён. Это твой стартовый пакет на 7 дней.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] py-[60px] h-full max-w-[1700px]">
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
          Делаем прямо сейчас · 10 минут
        </h2>
        <p className="text-[22px] italic text-[hsl(var(--slide-gold))] mb-[28px]">
          Поставь видео на паузу. Сделай это руками. Без этого Урок 3 не сработает.
        </p>
        <ol className="space-y-[14px] mb-[28px]">
          {L2_PRACTICE.map((it, i) => (
            <li key={i} className="flex gap-[20px] text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              <span className="text-[hsl(var(--slide-gold))] font-bold min-w-[140px]">{i + 1}. {it.time}</span>
              <span>{it.text}</span>
            </li>
          ))}
        </ol>
        <p className="text-[22px] italic text-[hsl(var(--slide-gold))] leading-[1.45] text-center max-w-[1500px] mx-auto">
          На выходе: гипотеза + список вопросов + 5 имён. Это твой стартовый пакет на ближайшие 7 дней.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 16 — Полный план + шаблоны ========== */
const L2_PLAN = [
  { time: "30 мин · Подготовка.", text: "Гипотеза + 10 вопросов + список 10 человек." },
  { time: "5 интервью × 20 мин = 100 мин.", text: "Минимум 5 разговоров. Без записи — не считается." },
  { time: "30 мин · Анализ.", text: "Сложи цитаты в одну таблицу. Сгруппируй по темам." },
  { time: "15 мин · Pass / Fail.", text: "Прогон по чек-листу: 7 из 10 говорят про одну боль = PASS. Меньше = FAIL." },
  { time: "15 мин · Решение.", text: "PASS → готовь Урок 3. FAIL → переформулируй гипотезу и возвращайся к Уроку 1." },
];
const L2_TEMPLATES = [
  { icon: "📄", title: "Скрипт интервью", desc: "12 вопросов под адаптацию" },
  { icon: "🎯", title: "Шаблон гипотезы", desc: "формула + чек-лист проверки" },
  { icon: "✅", title: "Pass/Fail чек-лист", desc: "сигналы в одной странице" },
];
const L2Plan = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <h2 className="font-display text-[14px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Полный план на 7 дней + шаблоны
          </h2>
          <ol className="space-y-[4px] mb-[8px]">
            {L2_PLAN.map((it, i) => (
              <li key={i} className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] font-bold">{i + 1}. {it.time}</span> {it.text}
              </li>
            ))}
          </ol>
          <div className="grid grid-cols-3 gap-[4px] mb-[8px]">
            {L2_TEMPLATES.map((t) => (
              <div key={t.title} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[4px] p-[5px] text-center">
                <div className="text-[10px]">{t.icon}</div>
                <div className="text-[7px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{t.title}</div>
                <div className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.3] mt-[1px]">{t.desc}</div>
                <button disabled className="mt-[3px] text-[6px] text-[hsl(var(--slide-gold))] underline opacity-60">Скачать</button>
              </div>
            ))}
          </div>
          <p className="text-[8px] italic text-[hsl(var(--slide-gold))] leading-[1.4] text-center">
            Гипотеза провалила тест — это не провал. Это сэкономленные 18 месяцев.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] py-[60px] h-full max-w-[1700px]">
        <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px]">
          Полный план на 7 дней + шаблоны
        </h2>
        <ol className="space-y-[10px] mb-[24px]">
          {L2_PLAN.map((it, i) => (
            <li key={i} className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              <span className="text-[hsl(var(--slide-gold))] font-bold">{i + 1}. {it.time}</span> {it.text}
            </li>
          ))}
        </ol>
        <div className="grid grid-cols-3 gap-[20px] mb-[24px]">
          {L2_TEMPLATES.map((t) => (
            <div key={t.title} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[20px] text-center">
              <div className="text-[32px] mb-[6px]">{t.icon}</div>
              <div className="text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">{t.title}</div>
              <div className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[10px]">{t.desc}</div>
              <button disabled className="text-[16px] text-[hsl(var(--slide-gold))] underline opacity-60 cursor-not-allowed">Скачать</button>
            </div>
          ))}
        </div>
        <p className="text-[22px] italic text-[hsl(var(--slide-gold))] leading-[1.45] text-center max-w-[1500px] mx-auto">
          Если гипотеза провалила тест — это не провал. Это сэкономленные 18 месяцев.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 17 — Closing + CTA → Lesson 3 ========== */
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

// Lesson 2 — 17 slides (Customer Development, restructured per v3 plan)
export const slides = [
  L2Title,            // 1  Title
  L2Insight,          // 2  Main insight (rewritten)
  L2Mirror,           // 3  Mirror question
  L2Cost,             // 4  Цена пропущенного шага
  L2WhyAfterMarket,   // 5  Почему custdev — после рынка
  S10,                // 6  Mikey case (kept)
  L2WhoPays,          // 7  Кому полезно ≠ Кто заплатит
  L2Rules,            // 8  6 правил интервью
  L2Hypothesis,       // 9  Шаблон гипотезы
  S14,                // 10 Who to interview (kept)
  S15,                // 11 How to ask questions (kept)
  S16,                // 12 Pass/Fail signals (kept)
  L2Tools,            // 13 Инструменты + mini-CTA
  L2NinjaRetro,       // 14 InterviewNinja counter-case
  L2Practice,         // 15 Practice now · 10 минут
  L2Plan,             // 16 Полный план + шаблоны
  L2Final,            // 17 Closing + CTA
];
