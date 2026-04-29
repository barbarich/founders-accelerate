import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSlideMeta } from "./SlideMetaContext";
import titleBg from "@/assets/slides/title-bg.jpg";

/* ========== Shared atoms (matched to Lessons 1–3) ========== */

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

/* ========== Slide 1 — Title ========== */
const L4Title = () => {
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
            Урок 4 · Финальный
          </p>
          <h1 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.02em]">
            Упаковка<br />и запуск
          </h1>
          <p className="text-[13px] text-[hsl(var(--slide-text))] mt-[16px] leading-[1.45]">
            Как сделать так, чтобы первые 100 человек нажали <span className="text-[hsl(var(--slide-gold))]">«Купить»</span>
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
      <div className="relative z-10 flex flex-col justify-center px-[140px] max-w-[1500px] h-full">
        <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[44px]" />
        <p className="uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] text-[20px] font-medium mb-[28px]">
          Урок 4 · Финальный · Мини-курс The Founders Circle
        </p>
        <h1 className="font-display text-[88px] font-bold text-[hsl(var(--slide-text))] leading-[1.02] tracking-[-0.02em]">
          Упаковка <span className="text-[hsl(var(--slide-gold))]">и запуск</span>
        </h1>
        <p className="text-[28px] text-[hsl(var(--slide-text))] mt-[36px] leading-[1.4] max-w-[1300px]">
          Как сделать так, чтобы первые <span className="text-[hsl(var(--slide-gold))] font-semibold">100 человек</span> нажали «Купить»
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 2 — Главный инсайт ========== */
const L4Insight = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Главный инсайт</Eyebrow>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[14px]">
            <p className="text-[14px] italic font-bold text-[hsl(var(--slide-text))] leading-[1.35]">
              «Хороший продукт без упаковки проигрывает плохому продукту в красивой коробке. И на старте у тебя есть только коробка.»
            </p>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[10px]">главный инсайт этого урока</p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center items-center px-[140px] h-full">
        <Eyebrow>Главный инсайт</Eyebrow>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[48px] py-[44px] max-w-[1500px]">
          <p className="text-[44px] italic font-bold text-[hsl(var(--slide-text))] leading-[1.25] text-center">
            «Хороший продукт без упаковки проигрывает плохому продукту в красивой коробке. И на старте у тебя есть только коробка.»
          </p>
        </div>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[24px] italic">главный инсайт этого урока</p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 3 — Stats: industry + my score ========== */
const L4_INDUSTRY = [
  { big: "22%", line: "higher ROAS", body: "у тех, кто использует AI-Advantage+ кампании на Meta", src: "Meta · 2025" },
  { big: "15–35%", line: "bounce rate", body: "на «верифицированных» имейлах Apollo без warmup", src: "Cleverly · 2026" },
  { big: "88%", line: "AI-агентов", body: "не доходят до продакшена из-за плохой упаковки и слабого онбординга", src: "CIO · 2025" },
];
const L4_MY = [
  { big: "107", line: "стран", body: "RunEverywhere — органический запуск без бюджета на рекламу" },
  { big: "7", line: "месяцев", body: "MetaMinder — sales-led: Apollo + Instantly + LinkedIn до первого B2B-клиента" },
  { big: "Сейчас", line: "тестирую", body: "Mikey — Meta + Google для B2C, ICP-таргет от $5/день" },
];

const L4Stats = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative overflow-y-auto">
        <div className="px-[18px] py-[18px]">
          <Eyebrow mobile>Статистика индустрии</Eyebrow>
          <div className="space-y-[8px]">
            {L4_INDUSTRY.map((c) => (
              <div key={c.big} className="border border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-bg-alt))] px-[10px] py-[8px]">
                <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] leading-none">{c.big} <span className="text-[10px] font-medium text-[hsl(var(--slide-text))] uppercase tracking-[0.1em]">{c.line}</span></p>
                <p className="text-[10px] text-[hsl(var(--slide-text))] mt-[4px] leading-[1.35]">{c.body}</p>
                <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mt-[2px]">{c.src}</p>
              </div>
            ))}
          </div>
          <div className="my-[12px] h-px bg-[hsl(var(--slide-gold)/0.5)]" />
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] mb-[8px]">А вот мой счёт по запускам:</p>
          <p className="uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] text-[8px] font-medium mb-[8px]">Мой счёт</p>
          <div className="space-y-[8px]">
            {L4_MY.map((c) => (
              <div key={c.big} className="border border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-bg-alt))] px-[10px] py-[8px]">
                <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] leading-none">{c.big} <span className="text-[10px] font-medium text-[hsl(var(--slide-text))] uppercase tracking-[0.1em]">{c.line}</span></p>
                <p className="text-[10px] text-[hsl(var(--slide-text))] mt-[4px] leading-[1.35]">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[9px] italic text-[hsl(var(--slide-gold))] mt-[10px] text-center">Каждый запуск — это другая комбинация инструментов. Сегодня покажу обе.</p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="px-[100px] py-[70px] h-full flex flex-col">
        <Eyebrow>Статистика индустрии</Eyebrow>
        <div className="grid grid-cols-3 gap-[24px]">
          {L4_INDUSTRY.map((c) => (
            <div key={c.big} className="border-2 border-[hsl(var(--slide-gold)/0.5)] bg-[hsl(var(--slide-bg-alt))] px-[28px] py-[26px]">
              <p className="text-[44px] font-bold text-[hsl(var(--slide-gold))] leading-[1]">{c.big}</p>
              <p className="text-[16px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text))] font-semibold mt-[4px]">{c.line}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text))] mt-[14px] leading-[1.4]">{c.body}</p>
              <p className="text-[14px] text-[hsl(var(--slide-text-muted))] mt-[10px] uppercase tracking-[0.1em]">{c.src}</p>
            </div>
          ))}
        </div>
        <div className="my-[26px] flex items-center gap-[20px]">
          <div className="flex-1 h-px bg-[hsl(var(--slide-gold)/0.5)]" />
          <p className="text-[20px] italic text-[hsl(var(--slide-gold))]">А вот мой счёт по запускам:</p>
          <div className="flex-1 h-px bg-[hsl(var(--slide-gold)/0.5)]" />
        </div>
        <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] text-[16px] font-medium mb-[16px]">Мой счёт</p>
        <div className="grid grid-cols-3 gap-[24px]">
          {L4_MY.map((c) => (
            <div key={c.big} className="border-2 border-[hsl(var(--slide-gold)/0.5)] bg-[hsl(var(--slide-bg-alt))] px-[28px] py-[26px]">
              <p className="text-[40px] font-bold text-[hsl(var(--slide-gold))] leading-[1]">{c.big}</p>
              <p className="text-[16px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text))] font-semibold mt-[4px]">{c.line}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text))] mt-[14px] leading-[1.4]">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[20px] italic text-[hsl(var(--slide-gold))] mt-[24px] text-center">Каждый запуск — это другая комбинация инструментов. Сегодня покажу обе.</p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 4 — Почему упаковка ========== */
const L4WhyPackaging = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="px-[20px] py-[20px] h-full flex flex-col">
          <Eyebrow mobile>Почему упаковка решает</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[14px]">Почему упаковка — после продукта, но <span className="text-[hsl(var(--slide-gold))]">ДО продаж</span></h2>
          <div className="space-y-[10px]">
            <div className="border-l-2 border-red-500/70 pl-[10px]">
              <p className="text-[11px] uppercase tracking-[0.12em] text-red-400 font-semibold mb-[4px]">Если упаковка слабая</p>
              <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.45]">Лучший продукт в мире не получит первого клиента. Люди не покупают то, что не понимают за 5 секунд. Без упаковки твой Урок 1–3 в курсе провалится.</p>
            </div>
            <div className="border-l-2 border-green-500/70 pl-[10px]">
              <p className="text-[11px] uppercase tracking-[0.12em] text-green-400 font-semibold mb-[4px]">Если упаковка сильная</p>
              <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.45]">Слабый продукт получит шанс. Сильный — взрывается. Упаковка — единственный мультипликатор, который работает в обе стороны.</p>
            </div>
          </div>
          <p className="text-[11px] italic text-[hsl(var(--slide-gold))] mt-[14px] text-center">На лендинг тратят 5 секунд. На рекламу — 1 секунду. У тебя нет права на скучно.</p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="px-[120px] py-[90px] h-full flex flex-col">
        <Eyebrow>Почему упаковка решает</Eyebrow>
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[60px] tracking-[-0.02em]">
          Почему упаковка — после продукта, но <span className="text-[hsl(var(--slide-gold))]">ДО продаж</span>
        </h2>
        <div className="grid grid-cols-2 gap-[60px]">
          <div className="border-l-[4px] border-red-500/80 pl-[32px]">
            <p className="text-[20px] uppercase tracking-[0.15em] text-red-400 font-semibold mb-[18px]">Если упаковка слабая</p>
            <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5]">Лучший продукт в мире не получит первого клиента. Люди не покупают то, что не понимают за 5 секунд. Без упаковки твой Урок 1–3 в курсе провалится.</p>
          </div>
          <div className="border-l-[4px] border-green-500/80 pl-[32px]">
            <p className="text-[20px] uppercase tracking-[0.15em] text-green-400 font-semibold mb-[18px]">Если упаковка сильная</p>
            <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5]">Слабый продукт получит шанс. Сильный — взрывается. Упаковка — единственный мультипликатор, который работает в обе стороны.</p>
          </div>
        </div>
        <p className="text-[24px] italic text-[hsl(var(--slide-gold))] mt-[60px] text-center font-semibold">На лендинг тратят 5 секунд. На рекламу — 1 секунду. У тебя нет права на скучно.</p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 5 — 3 кита упаковки ========== */
const L4_PILLARS = [
  { n: "01", icon: "🎯", title: "Позиционирование", body: "ОДНА фраза. Кому, что, чем отличается." },
  { n: "02", icon: "🎨", title: "Визуал", body: "Лендинг + соцсети + ад-креативы. Один стиль везде." },
  { n: "03", icon: "📢", title: "Креативы и каналы", body: "20–30 вариантов рекламы. AI делает за тебя." },
];
const L4Pillars = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="px-[20px] py-[20px] h-full flex flex-col">
          <Eyebrow mobile>Framework</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[6px]">Упаковка — это <span className="text-[hsl(var(--slide-gold))]">3 кита</span></h2>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[14px]">Все три обязательны. Слабое звено убивает остальные два.</p>
          <div className="space-y-[10px]">
            {L4_PILLARS.map((p) => (
              <div key={p.n} className="border border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-bg-alt))] px-[12px] py-[10px]">
                <p className="text-[10px] text-[hsl(var(--slide-gold))] font-mono">{p.icon} {p.n}</p>
                <p className="text-[13px] font-bold text-[hsl(var(--slide-text))] mt-[2px]">{p.title}</p>
                <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mt-[4px] leading-[1.4]">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] mt-[12px] text-center">На каждый кит — 30 минут. Полная упаковка — 90 минут с AI.</p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="px-[120px] py-[90px] h-full flex flex-col">
        <Eyebrow>Framework</Eyebrow>
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px] tracking-[-0.02em]">
          Упаковка — это <span className="text-[hsl(var(--slide-gold))]">3 кита</span>
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[50px]">Все три обязательны. Слабое звено убивает остальные два.</p>
        <div className="grid grid-cols-3 gap-[28px]">
          {L4_PILLARS.map((p) => (
            <div key={p.n} className="border-2 border-[hsl(var(--slide-gold)/0.5)] bg-[hsl(var(--slide-bg-alt))] px-[32px] py-[32px]">
              <p className="text-[18px] text-[hsl(var(--slide-gold))] font-mono uppercase tracking-[0.15em]">{p.icon} {p.n}</p>
              <p className="text-[30px] font-bold text-[hsl(var(--slide-text))] mt-[14px] leading-[1.2]">{p.title}</p>
              <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[18px] leading-[1.5]">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[22px] italic text-[hsl(var(--slide-gold))] mt-[50px] text-center font-semibold">На каждый кит — 30 минут. Полная упаковка — 90 минут с AI.</p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 6 — Кит 1 · Позиционирование ========== */
const L4_POS_TESTS = [
  "Можешь сократить до 1 фразы для billboard? → Передай в hero-секцию лендинга.",
  "Незнакомец понимает за 5 секунд? → Если нет, упрощай дальше.",
  "Конкурент НЕ может сказать о себе то же? → Если может — это не позиционирование, это категория.",
];
const L4Positioning = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative overflow-y-auto">
        <div className="px-[20px] py-[18px]">
          <Eyebrow mobile>Кит 1 · 30 минут</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">Кит 1 · <span className="text-[hsl(var(--slide-gold))]">Позиционирование</span></h2>
          <p className="text-[11px] text-[hsl(var(--slide-gold))] italic mt-[4px] mb-[12px]">Формула из Урока 1, но теперь финальная — для лендинга.</p>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
            <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.5]">
              <span className="text-[hsl(var(--slide-gold))]">[Продукт]</span> помогает <span className="text-[hsl(var(--slide-gold))]">[узкий сегмент]</span> достичь <span className="text-[hsl(var(--slide-gold))]">[конкретный результат]</span> через <span className="text-[hsl(var(--slide-gold))]">[уникальный механизм]</span>, в отличие от <span className="text-[hsl(var(--slide-gold))]">[альтернатива]</span>, которая <span className="text-[hsl(var(--slide-gold))]">[её слабость]</span>.
            </p>
          </div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mt-[14px] mb-[6px]">Тест формулы</p>
          <ul className="space-y-[6px]">
            {L4_POS_TESTS.map((t, i) => <li key={i} className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.45]"><span className="text-[hsl(var(--slide-gold))]">→</span> {t}</li>)}
          </ul>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] mt-[12px]">Эта одна фраза станет hero-текстом лендинга, headline в рекламе и первой строкой в Apollo-сиквенсе. Если она слабая — всё остальное провалится.</p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="px-[120px] py-[80px] h-full flex flex-col">
        <Eyebrow>Кит 1 · 30 минут</Eyebrow>
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">Кит 1 · <span className="text-[hsl(var(--slide-gold))]">Позиционирование</span></h2>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic mt-[10px] mb-[36px]">Формула из Урока 1, но теперь финальная — для лендинга.</p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[28px]">
          <p className="text-[28px] text-[hsl(var(--slide-text))] leading-[1.5] font-medium">
            <span className="text-[hsl(var(--slide-gold))]">[Продукт]</span> помогает <span className="text-[hsl(var(--slide-gold))]">[узкий сегмент]</span> достичь <span className="text-[hsl(var(--slide-gold))]">[конкретный результат]</span> через <span className="text-[hsl(var(--slide-gold))]">[уникальный механизм]</span>, в отличие от <span className="text-[hsl(var(--slide-gold))]">[альтернатива]</span>, которая <span className="text-[hsl(var(--slide-gold))]">[её слабость]</span>.
          </p>
        </div>
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] mt-[36px] mb-[14px] font-medium">Тест формулы</p>
        <ul className="space-y-[12px]">
          {L4_POS_TESTS.map((t, i) => <li key={i} className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45]"><span className="text-[hsl(var(--slide-gold))] mr-[8px]">→</span>{t}</li>)}
        </ul>
        <p className="text-[20px] italic text-[hsl(var(--slide-gold))] mt-[28px] font-semibold">Эта одна фраза станет hero-текстом лендинга, headline в рекламе и первой строкой в Apollo-сиквенсе. Если она слабая — всё остальное провалится.</p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 7 — Кит 2 · Визуалы ========== */
const L4_VISUAL_TOOLS = [
  { ic: "🖼️", t: "ChatGPT (Sora) / Nano Banana", b: "hero-картинки, иллюстрации, визуальные концепты" },
  { ic: "🎬", t: "Kling / Veo 3", b: "видео-креативы из текста или картинки" },
  { ic: "🎨", t: "Canva (с AI-инструментами)", b: "баннеры, обложки, посты в соцсети" },
  { ic: "🧑‍🎤", t: "HeyGen", b: "AI-аватар или готовые UGC-криейторы" },
  { ic: "✨", t: "Готовые AI UGC-актёры", b: "для рекламных видео без съёмок" },
];
const L4Visuals = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative overflow-y-auto">
        <div className="px-[20px] py-[18px]">
          <Eyebrow mobile>Кит 2 · 30 минут</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">Кит 2 · <span className="text-[hsl(var(--slide-gold))]">Визуалы</span></h2>
          <p className="text-[11px] text-[hsl(var(--slide-gold))] italic mt-[4px] mb-[10px]">Дизайнер не нужен. AI делает за 20 минут то, что раньше — за неделю.</p>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Стек 2026</p>
          <ul className="space-y-[6px]">
            {L4_VISUAL_TOOLS.map((t) => <li key={t.t} className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="mr-[4px]">{t.ic}</span><b>{t.t}</b> — {t.b}</li>)}
          </ul>
          <div className="mt-[10px] border border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-bg-alt))] px-[10px] py-[8px]">
            <p className="text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-semibold mb-[4px]">Правило одного стиля</p>
            <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]">Один шрифт. Одна палитра (3 цвета максимум). Один тон голоса. Везде. Лендинг → реклама → соцсети → email.</p>
          </div>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] mt-[10px]">Несоответствие визуала между лендингом и рекламой убивает конверсию на 40%. Самая частая ошибка startup'ов.</p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="px-[120px] py-[70px] h-full flex flex-col">
        <Eyebrow>Кит 2 · 30 минут</Eyebrow>
        <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">Кит 2 · <span className="text-[hsl(var(--slide-gold))]">Визуалы</span></h2>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic mt-[8px] mb-[28px]">Дизайнер не нужен. AI делает за 20 минут то, что раньше — за неделю.</p>
        <div className="grid grid-cols-2 gap-[40px]">
          <div>
            <p className="text-[18px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-medium mb-[18px]">Стек упаковки 2026</p>
            <ul className="space-y-[14px]">
              {L4_VISUAL_TOOLS.map((t) => (
                <li key={t.t} className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]">
                  <span className="text-[24px] mr-[10px]">{t.ic}</span>
                  <b className="text-[hsl(var(--slide-text))]">{t.t}</b>
                  <span className="text-[hsl(var(--slide-text-muted))]"> — {t.b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-[hsl(var(--slide-gold)/0.5)] bg-[hsl(var(--slide-bg-alt))] px-[28px] py-[28px] self-start">
            <p className="text-[18px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-semibold mb-[14px]">Правило одного стиля</p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.5]">Один шрифт. Одна палитра (3 цвета максимум). Один тон голоса.</p>
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[16px] leading-[1.5]">Везде. Лендинг → реклама → соцсети → email.</p>
          </div>
        </div>
        <p className="text-[20px] italic text-[hsl(var(--slide-gold))] mt-[34px] font-semibold">Несоответствие визуала между лендингом и рекламой убивает конверсию на 40%. Это самая частая ошибка startup'ов.</p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 8 — Кит 3 · Креативы 2026 ========== */
const L4_OLD = [
  "1 идеальный креатив + узкий таргетинг",
  "A/B-тесты по 2 варианта",
  "Месяцы на «доработку» одного объявления",
];
const L4_NEW = [
  "20–30 креативов на одну кампанию (Meta Andromeda сама выберет)",
  "Broad audience + creative diversity (AI делает таргетинг лучше тебя)",
  "AI-генерация ассетов (ChatGPT, Kling, Canva генерят 50+ вариантов из URL)",
];
const L4Creatives = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative overflow-y-auto">
        <div className="px-[20px] py-[18px]">
          <Eyebrow mobile>Кит 3 · 2026</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">Кит 3 · <span className="text-[hsl(var(--slide-gold))]">Креативы — что изменилось в 2026</span></h2>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic mt-[4px] mb-[12px]">Старые правила сломались. По-старому — сольёшь бюджет за неделю.</p>
          <div className="border-l-2 border-red-500/70 pl-[10px] mb-[10px]">
            <p className="text-[11px] uppercase tracking-[0.12em] text-red-400 font-semibold mb-[4px]">🚨 НЕ работает</p>
            <ul className="space-y-[3px]">{L4_OLD.map((t,i)=><li key={i} className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]">— {t}</li>)}</ul>
          </div>
          <div className="border-l-2 border-green-500/70 pl-[10px]">
            <p className="text-[11px] uppercase tracking-[0.12em] text-green-400 font-semibold mb-[4px]">✅ Работает в 2026</p>
            <ul className="space-y-[3px]">{L4_NEW.map((t,i)=><li key={i} className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]">— {t}</li>)}</ul>
          </div>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] mt-[10px]">Главный сдвиг: креатив стал важнее таргетинга. Раньше выигрывал тот, кто лучше таргетировал. Сейчас — тот, кто быстрее генерит варианты.</p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="px-[120px] py-[70px] h-full flex flex-col">
        <Eyebrow>Кит 3 · 2026</Eyebrow>
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">Кит 3 · <span className="text-[hsl(var(--slide-gold))]">Креативы — что изменилось в 2026</span></h2>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic mt-[10px] mb-[36px]">Старые правила сломались. Если делаешь по-старому — сольёшь бюджет за неделю.</p>
        <div className="grid grid-cols-2 gap-[40px] flex-1">
          <div className="border-l-[4px] border-red-500/80 pl-[28px]">
            <p className="text-[20px] uppercase tracking-[0.15em] text-red-400 font-semibold mb-[18px]">🚨 НЕ работает (2024 и раньше)</p>
            <ul className="space-y-[14px]">{L4_OLD.map((t,i)=><li key={i} className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.45]">— {t}</li>)}</ul>
          </div>
          <div className="border-l-[4px] border-green-500/80 pl-[28px]">
            <p className="text-[20px] uppercase tracking-[0.15em] text-green-400 font-semibold mb-[18px]">✅ Работает в 2026</p>
            <ul className="space-y-[14px]">{L4_NEW.map((t,i)=><li key={i} className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.45]">— {t}</li>)}</ul>
          </div>
        </div>
        <p className="text-[22px] italic text-[hsl(var(--slide-gold))] mt-[28px] font-semibold">Главный сдвиг: креатив стал важнее таргетинга. Раньше выигрывал тот, кто лучше таргетировал. Сейчас — тот, кто быстрее генерит варианты.</p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 9 — B2B запуск ========== */
const L4_B2B = [
  { n: "1", t: "Apollo.io", meta: "apollo.io · $49/мес", body: "Найти 500 ICP-контактов. Job title + company size + industry. Экспорт в CSV.", warn: "⚠️ Apollo даёт 65–70% точности на email. Без warmup — 15–35% bounce." },
  { n: "2", t: "Instantly.ai", meta: "instantly.ai · $37/мес", body: "5–10 sender-доменов. Unlimited warmup на каждом. Максимум 30 имейлов/день/домен → 150–300 имейлов/день безопасно." },
  { n: "3", t: "AI-копирайтинг", meta: "ChatGPT / Claude", body: "Промпт: «Сгенерируй 3 cold email-варианта для [ICP] с болью [боль из Урока 2]. Каждый — 4 строки, без буллетов, с одним конкретным CTA.»" },
  { n: "4", t: "LinkedIn Helper", meta: "linkedhelper.com · $15/мес", body: "Параллельно с email — connection requests + follow-up. Тот же ICP-список из Apollo." },
];
const L4_B2B_METRICS = [
  { k: "Open rate", v: "30–50%", n: "если warmup правильный" },
  { k: "Reply rate", v: "1–3%", n: "cold" },
  { k: "Booked meetings", v: "0.5–1%", n: "от total contacts" },
];
const L4B2B = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative overflow-y-auto">
        <div className="px-[18px] py-[16px]">
          <Eyebrow mobile>B2B запуск · 90 минут</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">Запуск для <span className="text-[hsl(var(--slide-gold))]">B2B</span></h2>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic mt-[4px] mb-[10px]">Стек, давший MetaMinder первого клиента за 7 месяцев.</p>
          <div className="space-y-[8px]">
            {L4_B2B.map((s) => (
              <div key={s.n} className="border border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-bg-alt))] px-[10px] py-[8px]">
                <p className="text-[10px] text-[hsl(var(--slide-gold))] font-mono">{s.n}. {s.t} <span className="text-[hsl(var(--slide-text-muted))]">· {s.meta}</span></p>
                <p className="text-[10px] text-[hsl(var(--slide-text))] mt-[3px] leading-[1.4]">{s.body}</p>
                {s.warn && <p className="text-[9px] text-red-400 mt-[3px] leading-[1.4]">{s.warn}</p>}
              </div>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mt-[12px] mb-[6px]">Реалистичные метрики 2026</p>
          <div className="grid grid-cols-3 gap-[6px]">
            {L4_B2B_METRICS.map((m) => (
              <div key={m.k} className="border border-[hsl(var(--slide-gold)/0.3)] px-[6px] py-[6px]">
                <p className="text-[12px] font-bold text-[hsl(var(--slide-gold))] leading-none">{m.v}</p>
                <p className="text-[9px] text-[hsl(var(--slide-text))] mt-[3px]">{m.k}</p>
                <p className="text-[8px] text-[hsl(var(--slide-text-muted))]">{m.n}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] mt-[10px] text-center">500 контактов → 5–10 встреч → 1–2 платящих клиента. Это математика B2B.</p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="px-[100px] py-[60px] h-full flex flex-col">
        <Eyebrow>B2B запуск · workflow на 90 минут</Eyebrow>
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">Запуск для <span className="text-[hsl(var(--slide-gold))]">B2B</span></h2>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic mt-[8px] mb-[28px]">Стек, который дал MetaMinder первого клиента за 7 месяцев.</p>
        <div className="grid grid-cols-2 gap-[24px]">
          {L4_B2B.map((s) => (
            <div key={s.n} className="border border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-bg-alt))] px-[24px] py-[20px]">
              <p className="text-[16px] text-[hsl(var(--slide-gold))] font-mono uppercase tracking-[0.12em]">{s.n}. {s.t} <span className="text-[hsl(var(--slide-text-muted))] normal-case">· {s.meta}</span></p>
              <p className="text-[18px] text-[hsl(var(--slide-text))] mt-[10px] leading-[1.45]">{s.body}</p>
              {s.warn && <p className="text-[16px] text-red-400 mt-[8px] leading-[1.4]">{s.warn}</p>}
            </div>
          ))}
        </div>
        <p className="text-[18px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mt-[24px] mb-[12px] font-medium">Реалистичные метрики 2026</p>
        <div className="grid grid-cols-3 gap-[20px]">
          {L4_B2B_METRICS.map((m) => (
            <div key={m.k} className="border-2 border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-bg-alt))] px-[24px] py-[16px]">
              <p className="text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-none">{m.v}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text))] mt-[8px]">{m.k} <span className="text-[hsl(var(--slide-text-muted))]">— {m.n}</span></p>
            </div>
          ))}
        </div>
        <p className="text-[20px] italic text-[hsl(var(--slide-gold))] mt-[20px] text-center font-semibold">500 контактов → 5–10 встреч → 1–2 платящих клиента. Это математика B2B-запуска.</p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 10 — B2C запуск ========== */
const L4_B2C = [
  { n: "1", t: "Подготовка ассетов · 30 мин", body: "1 hero-картинка (ChatGPT / Nano Banana). 1 видео 9:16 (Kling / Veo 3). 5 текстовых хуков (ChatGPT генерит 20 — выбираешь 5). 5 headlines + 5 descriptions. Итого ~50 уникальных комбинаций." },
  { n: "2", t: "Meta Ads · Advantage+", body: "НЕ настраивать узкий таргет — пусть AI сам найдёт. Залить все 50 креативов в одну Advantage+. Бюджет: $20/день минимум (ниже AI не успеет обучиться). Цель: Conversions (если есть пиксель и 50+ событий) или Engagement." },
  { n: "3", t: "Google Ads · Performance Max", body: "Та же логика: дай Google все ассеты, не настраивай вручную. Подключи conversions tracking. Audience signals: твой ICP как стартовая подсказка, но не constraint." },
  { n: "4", t: "Аналитика и итерация", body: "Первые 3–5 дней — НЕ трогай. AI учится. На 7-й день — выключи худшие 30% креативов. Залей новые 10–15. Цикл: каждые 7 дней — refresh." },
];
const L4B2C = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative overflow-y-auto">
        <div className="px-[18px] py-[16px]">
          <Eyebrow mobile>B2C запуск · 90 минут</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">Запуск для <span className="text-[hsl(var(--slide-gold))]">B2C</span></h2>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic mt-[4px] mb-[10px]">Стек, который сейчас тестирую на Mikey. Бюджет от $5/день.</p>
          <div className="space-y-[8px]">
            {L4_B2C.map((s) => (
              <div key={s.n} className="border border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-bg-alt))] px-[10px] py-[8px]">
                <p className="text-[10px] text-[hsl(var(--slide-gold))] font-mono">{s.n}. {s.t}</p>
                <p className="text-[10px] text-[hsl(var(--slide-text))] mt-[3px] leading-[1.4]">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] mt-[10px] text-center">Старая модель: 1 креатив, тонкий таргет. Новая 2026: 50 креативов, broad audience, AI делает работу.</p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="px-[100px] py-[60px] h-full flex flex-col">
        <Eyebrow>B2C запуск · workflow на 90 минут</Eyebrow>
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">Запуск для <span className="text-[hsl(var(--slide-gold))]">B2C</span></h2>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic mt-[8px] mb-[28px]">Стек, который сейчас тестирую на Mikey. Бюджет от $5/день.</p>
        <div className="grid grid-cols-2 gap-[24px] flex-1">
          {L4_B2C.map((s) => (
            <div key={s.n} className="border border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-bg-alt))] px-[24px] py-[20px]">
              <p className="text-[18px] text-[hsl(var(--slide-gold))] font-mono uppercase tracking-[0.12em]">{s.n}. {s.t}</p>
              <p className="text-[19px] text-[hsl(var(--slide-text))] mt-[10px] leading-[1.5]">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[22px] italic text-[hsl(var(--slide-gold))] mt-[24px] text-center font-semibold">Старая модель: 1 креатив, тонкий таргет, ждёшь чуда. Новая 2026: 50 креативов, broad audience, AI делает работу.</p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 11 — Tools + mini-CTA ========== */
const L4_CREATE = [
  { ic: "🎨", t: "Lovable / v0", b: "лендинг" },
  { ic: "🖼️", t: "ChatGPT / Nano Banana", b: "картинки" },
  { ic: "🎬", t: "Kling / Veo 3", b: "видео" },
  { ic: "✨", t: "Canva", b: "баннеры" },
  { ic: "🧑‍🎤", t: "HeyGen", b: "AI-аватар или UGC-криейторы" },
  { ic: "📝", t: "Claude / GPT", b: "копирайтинг" },
];
const L4_LAUNCH = [
  { ic: "💼", t: "B2B", b: "Apollo + Instantly + LinkedIn Helper" },
  { ic: "🎯", t: "B2C", b: "Meta Advantage+ + Google PMax + TikTok Smart+" },
  { ic: "📊", t: "Пиксели", b: "Meta Pixel + Google Tag + TikTok Pixel" },
  { ic: "📈", t: "Аналитика", b: "Mixpanel + GA4" },
];
const L4Tools = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative overflow-y-auto">
        <div className="px-[18px] py-[16px]">
          <Eyebrow mobile>Стек 29.04.2026</Eyebrow>
          <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[10px]">Инструменты упаковки и <span className="text-[hsl(var(--slide-gold))]">запуска</span></h2>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Создание</p>
          <ul className="space-y-[3px] mb-[8px]">{L4_CREATE.map(t=><li key={t.t} className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="mr-[3px]">{t.ic}</span><b>{t.t}</b> — {t.b}</li>)}</ul>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Запуск</p>
          <ul className="space-y-[3px]">{L4_LAUNCH.map(t=><li key={t.t} className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="mr-[3px]">{t.ic}</span><b>{t.t}:</b> {t.b}</li>)}</ul>
          <div className="mt-[12px] border border-[hsl(var(--slide-gold)/0.5)] bg-[hsl(var(--slide-gold)/0.06)] px-[10px] py-[10px]">
            <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.5]">Это весь стек. Применить его руками за 90 минут — реально. Сделать так, чтобы он сработал на ТВОЁМ продукте — нужны итерации, обратная связь и неочевидные тонкости.</p>
            <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.5] mt-[6px]">Я веду группу до 8 фаундеров от идеи к запуску с реальными пользователями.</p>
            <a href="https://founders-circle.space" target="_blank" rel="noopener noreferrer" className="inline-block text-[10px] text-[hsl(var(--slide-gold))] font-semibold mt-[6px] underline">founders-circle.space →</a>
          </div>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="px-[100px] py-[60px] h-full flex flex-col">
        <Eyebrow>Стек одиночки-фаундера · 29 апреля 2026</Eyebrow>
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">Инструменты упаковки и <span className="text-[hsl(var(--slide-gold))]">запуска</span></h2>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mt-[8px] mb-[28px]">Полный стек одиночки-фаундера на 29 апреля 2026.</p>
        <div className="grid grid-cols-2 gap-[40px] flex-1">
          <div>
            <p className="text-[18px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Создание</p>
            <ul className="space-y-[12px]">{L4_CREATE.map(t=><li key={t.t} className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="text-[24px] mr-[10px]">{t.ic}</span><b>{t.t}</b><span className="text-[hsl(var(--slide-text-muted))]"> — {t.b}</span></li>)}</ul>
          </div>
          <div>
            <p className="text-[18px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Запуск</p>
            <ul className="space-y-[12px]">{L4_LAUNCH.map(t=><li key={t.t} className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="text-[24px] mr-[10px]">{t.ic}</span><b>{t.t}:</b><span className="text-[hsl(var(--slide-text-muted))]"> {t.b}</span></li>)}</ul>
          </div>
        </div>
        <div className="mt-[28px] border-2 border-[hsl(var(--slide-gold)/0.6)] bg-[hsl(var(--slide-gold)/0.07)] px-[32px] py-[22px]">
          <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.5]">
            Это весь стек. Применить его руками за 90 минут — реально. Сделать так, чтобы он сработал на ТВОЁМ продукте — нужны итерации, обратная связь и неочевидные тонкости. Я веду группу до 8 фаундеров от идеи к запуску с реальными пользователями. <a href="https://founders-circle.space" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--slide-gold))] font-semibold underline">founders-circle.space →</a>
          </p>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 12 — Practice now ========== */
const L4_PRACTICE = [
  { time: "5 мин", body: "Заполни финальную формулу позиционирования из Слайда 6. Одна фраза." },
  { time: "5 мин", body: "Открой ChatGPT/Claude → промпт: «Сгенерируй 10 hero-headlines для лендинга на основе позиционирования: [твоя формула]. Без воды. Каждый — до 8 слов.»" },
  { time: "10 мин", body: "Открой свой лендинг (с прошлого урока) → перепиши hero-секцию: новый headline + sub-headline + обновлённый CTA. Если нужно — обнови Value Proposition в section 2." },
  { time: "5 мин", body: "Сгенерируй 1 hero-картинку (ChatGPT / Nano Banana) под обновлённое позиционирование. Залей на лендинг." },
  { time: "5 мин", body: "Реши: B2B или B2C? Запиши, какой стек применишь на следующей неделе (Apollo+Instantly или Meta+Google+TikTok)." },
];
const L4Practice = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative overflow-y-auto">
        <div className="px-[18px] py-[16px]">
          <Eyebrow mobile>Делаем сейчас · 30 минут</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">Делаем прямо сейчас · <span className="text-[hsl(var(--slide-gold))]">30 минут</span></h2>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic mt-[4px] mb-[10px]">Лендинг ты уже сделал на прошлом уроке. Сейчас переписываем под финальное позиционирование.</p>
          <ol className="space-y-[8px]">
            {L4_PRACTICE.map((p, i) => (
              <li key={i} className="border-l-2 border-[hsl(var(--slide-gold))] pl-[10px]">
                <p className="text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-mono">{i+1} · {p.time}</p>
                <p className="text-[10px] text-[hsl(var(--slide-text))] mt-[3px] leading-[1.4]">{p.body}</p>
              </li>
            ))}
          </ol>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] mt-[12px]">На выходе: финальное позиционирование + обновлённый лендинг + hero-image + план запуска. За 30 минут.</p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="px-[120px] py-[60px] h-full flex flex-col">
        <Eyebrow>Делаем сейчас · 5 шагов · 30 минут</Eyebrow>
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">Делаем прямо сейчас · <span className="text-[hsl(var(--slide-gold))]">30 минут</span></h2>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic mt-[8px] mb-[28px]">Лендинг уже сделан на прошлом уроке. Сейчас переписываем под финальное позиционирование и готовим к запуску.</p>
        <ol className="space-y-[14px] flex-1">
          {L4_PRACTICE.map((p, i) => (
            <li key={i} className="border-l-[4px] border-[hsl(var(--slide-gold))] pl-[24px]">
              <p className="text-[18px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-mono">Шаг {i+1} · {p.time}</p>
              <p className="text-[20px] text-[hsl(var(--slide-text))] mt-[6px] leading-[1.45]">{p.body}</p>
            </li>
          ))}
        </ol>
        <p className="text-[20px] italic text-[hsl(var(--slide-gold))] mt-[24px] text-center font-semibold">На выходе: финальное позиционирование + обновлённый лендинг + hero-image + план запуска. За 30 минут.</p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 13 — 7-day checklist + templates + final CTA ========== */
const L4_B2B_DAYS = [
  { d: "День 1 · 90 мин", b: "Финальное позиционирование + обновление лендинга + 1 hero-картинка." },
  { d: "День 2 · 60 мин", b: "Apollo: 500 ICP-контактов, экспорт в CSV." },
  { d: "День 3 · 60 мин", b: "Instantly: 5–10 sender-доменов, warmup включён, домены прогреваются." },
  { d: "День 4 · 45 мин", b: "AI-копирайт: 3 cold email-варианта + LinkedIn-сообщения через Helper." },
  { d: "День 5 · 30 мин", b: "Запуск первой партии: 100 имейлов через Instantly + 50 connection requests в LinkedIn." },
  { d: "Дни 6–7 · 15 мин/день", b: "Мониторинг open/reply rates. Записывать наблюдения. Не трогать настройки." },
];
const L4_B2C_DAYS = [
  { d: "День 1 · 90 мин", b: "Финальное позиционирование + обновление лендинга + 1 hero-картинка." },
  { d: "День 2 · 60 мин", b: "Генерация ассетов: 20–30 креативов через ChatGPT + Kling + Canva." },
  { d: "День 3 · 60 мин", b: "Установка пикселей: Meta Pixel + Google Tag + TikTok Pixel на лендинг." },
  { d: "День 4 · 45 мин", b: "Создание Advantage+ на Meta + Performance Max на Google. Бюджет $20/день." },
  { d: "День 5 · 30 мин", b: "Запуск кампаний. Проверить, что всё крутится." },
  { d: "Дни 6–7 · 15 мин/день", b: "НЕ трогать AI 3–5 дней. Только смотреть метрики и записывать." },
];
const L4_TEMPLATES = [
  { ic: "🎯", t: "Positioning Worksheet", b: "финальная формула + 3 теста" },
  { ic: "💼", t: "B2B Launch Stack", b: "Apollo + Instantly настройки и cold email-промпты" },
  { ic: "🎨", t: "B2C Creative Brief", b: "промпты для ChatGPT, Kling, Canva под Advantage+" },
];

const L4Final = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative overflow-y-auto">
        <div className="px-[16px] py-[14px]">
          <Eyebrow mobile>Полный план на 7 дней</Eyebrow>
          <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[10px]">Полный план на <span className="text-[hsl(var(--slide-gold))]">7 дней</span></h2>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">B2B трек</p>
          <ul className="space-y-[4px] mb-[10px]">
            {L4_B2B_DAYS.map((d,i)=><li key={i} className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.4]"><b className="text-[hsl(var(--slide-gold))]">{d.d}</b> — {d.b}</li>)}
          </ul>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">B2C трек</p>
          <ul className="space-y-[4px] mb-[10px]">
            {L4_B2C_DAYS.map((d,i)=><li key={i} className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.4]"><b className="text-[hsl(var(--slide-gold))]">{d.d}</b> — {d.b}</li>)}
          </ul>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Шаблоны</p>
          <ul className="space-y-[4px] mb-[8px]">
            {L4_TEMPLATES.map(t=><li key={t.t} className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.4]">{t.ic} <b>{t.t}</b> — {t.b}</li>)}
          </ul>
          <p className="text-[9px] italic text-[hsl(var(--slide-gold))] mb-[10px]">Если пройдёшь все 7 дней — у тебя будет работающий запуск, а не презентация в Notion.</p>
          <div className="border-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[12px] py-[12px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] text-center">The Founders Circle</p>
            <p className="text-[10px] text-[hsl(var(--slide-text))] text-center mt-[3px]">Группа до 8 фаундеров. Моё личное участие. 8 недель — от идеи к запуску.</p>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] italic text-center mt-[6px] leading-[1.4]">В группе с моей личной поддержкой шансы дойти до первого платящего клиента кратно выше, чем в одиночку.</p>
            <a href="https://founders-circle.space" target="_blank" rel="noopener noreferrer" className="block mt-[8px] bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] text-center text-[11px] font-bold py-[8px] rounded">Узнать про следующую когорту →</a>
            <p className="text-[8px] italic text-[hsl(var(--slide-text-muted))] text-center mt-[6px]">Спасибо, что прошёл курс до конца. Увидимся в TFC или на твоём запуске.</p>
          </div>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative overflow-y-auto">
      <div className="px-[80px] py-[40px] flex flex-col" style={{ minHeight: "100%" }}>
        <Eyebrow>Финальный слайд · полный план на 7 дней</Eyebrow>
        <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px]">
          Полный план на <span className="text-[hsl(var(--slide-gold))]">7 дней</span>
        </h2>
        <div className="grid grid-cols-2 gap-[28px] mb-[28px]">
          <div className="border-l-[4px] border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[18px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-semibold mb-[10px]">B2B трек</p>
            <ul className="space-y-[8px]">
              {L4_B2B_DAYS.map((d,i)=><li key={i} className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.4]"><b className="text-[hsl(var(--slide-gold))]">{d.d}.</b> {d.b}</li>)}
            </ul>
          </div>
          <div className="border-l-[4px] border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[18px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-semibold mb-[10px]">B2C трек</p>
            <ul className="space-y-[8px]">
              {L4_B2C_DAYS.map((d,i)=><li key={i} className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.4]"><b className="text-[hsl(var(--slide-gold))]">{d.d}.</b> {d.b}</li>)}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[18px] mb-[16px]">
          {L4_TEMPLATES.map((t)=>(
            <div key={t.t} className="border-2 border-[hsl(var(--slide-gold)/0.5)] bg-[hsl(var(--slide-bg-alt))] px-[18px] py-[14px]">
              <p className="text-[20px]">{t.ic} <b className="text-[16px] text-[hsl(var(--slide-text))]">{t.t}</b></p>
              <p className="text-[14px] text-[hsl(var(--slide-text-muted))] mt-[6px] leading-[1.4]">{t.b}</p>
              <button className="text-[13px] text-[hsl(var(--slide-gold))] font-semibold mt-[6px] underline">[Скачать]</button>
            </div>
          ))}
        </div>
        <p className="text-[16px] italic text-[hsl(var(--slide-gold))] mb-[18px] text-center">Если пройдёшь все 7 дней — у тебя будет работающий запуск, а не презентация в Notion.</p>
        <div className="border-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[36px] py-[26px]">
          <p className="font-display text-[32px] font-bold text-[hsl(var(--slide-gold))] text-center">The Founders Circle</p>
          <p className="text-[18px] text-[hsl(var(--slide-text))] text-center mt-[4px]">Группа до 8 фаундеров. Моё личное участие. 8 недель — от идеи к запуску.</p>
          <p className="text-[16px] text-[hsl(var(--slide-text-muted))] italic text-center mt-[10px]">В группе с моей личной поддержкой шансы дойти до первого платящего клиента кратно выше, чем в одиночку.</p>
          <div className="grid grid-cols-2 gap-[18px] mt-[14px]">
            <ul className="space-y-[4px]">
              <li className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.45]"><b className="text-[hsl(var(--slide-gold))]">Что внутри:</b> еженедельные созвоны в группе с разбором</li>
              <li className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.45]">— Обратная связь от меня лично на твои кейсы</li>
              <li className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.45]">— Группа фаундеров твоего уровня: нетворк и sparring</li>
              <li className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.45]">— Все шаблоны, агенты, фреймворки — на ТВОЁМ продукте</li>
            </ul>
            <ul className="space-y-[4px]">
              <li className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.45]"><b className="text-[hsl(var(--slide-gold))]">Кому подходит:</b> прошёл курс и хочешь дальше</li>
              <li className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.45]">— Готов вкладывать 5–10 часов в неделю</li>
              <li className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.45]">— Хочешь дойти до первого платящего клиента, а не отложить</li>
            </ul>
          </div>
          <a href="https://founders-circle.space" target="_blank" rel="noopener noreferrer" className="block mt-[18px] bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] text-center text-[20px] font-bold py-[14px] rounded">
            Узнать про следующую когорту → founders-circle.space
          </a>
          <p className="text-[12px] italic text-[hsl(var(--slide-text-muted))] text-center mt-[10px]">Спасибо, что прошёл курс до конца. Увидимся в TFC или на твоём запуске.</p>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Export slides ========== */
export const slides = [
  L4Title,        // 1  Title
  L4Insight,      // 2  Главный инсайт
  L4Stats,        // 3  Статистика индустрии + мой счёт
  L4WhyPackaging, // 4  Почему упаковка
  L4Pillars,      // 5  3 кита упаковки
  L4Positioning,  // 6  Кит 1 · Позиционирование
  L4Visuals,      // 7  Кит 2 · Визуалы
  L4Creatives,    // 8  Кит 3 · Креативы 2026
  L4B2B,          // 9  B2B запуск
  L4B2C,          // 10 B2C запуск
  L4Tools,        // 11 Tools + mini-CTA
  L4Practice,     // 12 Practice 30 мин
  L4Final,        // 13 7 дней + шаблоны + CTA
];
