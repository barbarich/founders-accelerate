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
            Урок 4 · Мини-курс · Финальный
          </p>
          <h1 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.02em]">
            Упаковка и запуск —<br />как сделать так, чтобы первые <span className="text-[hsl(var(--slide-gold))]">100 человек</span> нажали «Купить»
          </h1>
          <div className="mt-[18px] space-y-[8px] text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> упакуешь продукт в одну фразу, понятную за 5 секунд</p>
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> соберёшь визуал и 50+ креативов с AI за час</p>
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> выберешь стек: B2B (Apollo + Instantly) или B2C (Meta + Google)</p>
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> запустишь по плану на 7 дней — без бюджета на агентство</p>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[14px] italic">
            Хороший продукт без упаковки проигрывает плохому в красивой коробке.
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
          Урок 4 · Мини-курс The Founders Circle · Финальный
        </p>
        <h1 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
          Упаковка и запуск —<br />
          <span className="text-[hsl(var(--slide-gold))]">как сделать, чтобы первые 100 человек нажали «Купить»</span>
        </h1>
        <div className="mt-[40px] grid grid-cols-2 gap-[24px] max-w-[1500px]">
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Упакуешь</p>
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.35]">продукт в одну фразу, понятную незнакомцу за 5 секунд</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Соберёшь</p>
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.35]">визуал и 50+ креативов с AI — за час, без дизайнера</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Выберешь</p>
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.35]">стек запуска: B2B (Apollo + Instantly) или B2C (Meta + Google)</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Запустишь</p>
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.35]">по плану на 7 дней — без бюджета на агентство и подрядчиков</p>
          </div>
        </div>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[32px] italic">
          Хороший продукт без упаковки проигрывает плохому продукту в красивой коробке.
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
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[14px] py-[14px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
              «Хороший продукт без упаковки проигрывает плохому продукту в красивой коробке. И на старте у тебя есть только коробка.»
            </p>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[10px]">
            Первые 100 клиентов покупают не продукт. Они покупают то, что увидели за 5 секунд.
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
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[40px] py-[36px] max-w-[1600px]">
          <p className="text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
            «Хороший продукт без упаковки проигрывает плохому продукту в красивой коробке. И на старте у тебя есть только коробка.»
          </p>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mt-[24px] italic max-w-[1500px]">
          Первые 100 клиентов покупают не продукт — они покупают то, что увидели и поняли за 5 секунд.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 3 — Stats: industry + my score ========== */
const L4_INDUSTRY = [
  { num: "+22%", text: "ROAS у тех, кто запускает Meta Advantage+ кампании вместо ручного таргета", src: "Meta · 2025" },
  { num: "15–35%", text: "bounce rate на «верифицированных» имейлах Apollo, если запускать без warmup", src: "Cleverly · 2026" },
  { num: "88%", text: "AI-продуктов не доходят до продакшена из-за слабой упаковки и пустого онбординга", src: "CIO · 2025" },
];
const L4_MY = [
  { num: "Первые 10 клиентов", text: "MetaMinder — с нулевым бюджетом на рекламу через Apollo, Instantly, LeadHelper, LinkedIn и собственные соцсети" },
];
const L4Stats = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Статистика индустрии · и мой счёт</Eyebrow>
          <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Что показывают <span className="text-[hsl(var(--slide-gold))]">данные 2026</span> — и мой кейс MetaMinder
          </h2>
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Индустрия</p>
          <div className="grid grid-cols-3 gap-[5px] mb-[8px]">
            {L4_INDUSTRY.map((it) => (
              <div key={it.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[6px] py-[6px]">
                <div className="text-[11px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05]">{it.num}</div>
                <div className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35] mt-[2px]">{it.text}</div>
                <div className="text-[6px] text-[hsl(var(--slide-text-muted))] mt-[2px] uppercase tracking-[0.08em]">{it.src}</div>
              </div>
            ))}
          </div>
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Мой счёт по запускам</p>
          <div className="grid grid-cols-1 gap-[5px] mb-[8px]">
            {L4_MY.map((it) => (
              <div key={it.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[6px] py-[6px]">
                <div className="text-[11px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05]">{it.num}</div>
                <div className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35] mt-[2px]">{it.text}</div>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            Без бюджета на рекламу — через холодные касания и собственный нетворк.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Статистика индустрии · и мой счёт по запускам</Eyebrow>
        <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em]">
          Что показывают <span className="text-[hsl(var(--slide-gold))]">данные 2026</span> — и мой кейс MetaMinder
        </h2>
        <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Индустрия</p>
        <div className="grid grid-cols-3 gap-[24px] mb-[24px] max-w-[1700px]">
          {L4_INDUSTRY.map((it) => (
            <div key={it.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[22px]">
              <div className="font-display text-[40px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05] mb-[10px]">{it.num}</div>
              <div className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45] mb-[10px]">{it.text}</div>
              <div className="text-[13px] text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.12em]">{it.src}</div>
            </div>
          ))}
        </div>
        <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Мой счёт</p>
        <div className="grid grid-cols-1 gap-[24px] mb-[20px] max-w-[1700px]">
          {L4_MY.map((it) => (
            <div key={it.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[22px]">
              <div className="font-display text-[36px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05] mb-[10px]">{it.num}</div>
              <div className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{it.text}</div>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
          Первые 10 клиентов — без бюджета на рекламу. Только холодные касания и собственная сеть.
        </p>
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
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Почему упаковка решает</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
            Упаковка — после продукта, но <span className="text-[hsl(var(--slide-gold))]">до</span> продаж
          </h2>
          <div className="grid grid-cols-2 gap-[6px] mb-[10px]">
            <div className="bg-[hsl(0_70%_55%/0.06)] border-l-2 border-[hsl(0_70%_55%)] rounded-[6px] px-[8px] py-[6px]">
              <p className="text-[8px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.1em] mb-[3px]">Слабая упаковка</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                Лучший продукт не получит первого клиента. Люди не покупают то, что не понимают за 5 секунд.
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[8px] py-[6px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[3px]">Сильная упаковка</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                Слабый продукт получит шанс. Сильный — взрывается. Мультипликатор работает в обе стороны.
              </p>
            </div>
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            На лендинг тратят 5 секунд. На рекламу — 1. У тебя нет права на «скучно».
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Почему упаковка решает</Eyebrow>
        <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
          Упаковка — после продукта, но <span className="text-[hsl(var(--slide-gold))]">до</span> продаж
        </h2>
        <div className="grid grid-cols-2 gap-[24px] mb-[28px] max-w-[1700px]">
          <div className="bg-[hsl(0_70%_55%/0.06)] border-l-[4px] border-[hsl(0_70%_55%)] rounded-[14px] px-[32px] py-[26px]">
            <p className="text-[15px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.18em] mb-[12px]">Слабая упаковка</p>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              Лучший продукт в мире не получит первого клиента. Люди не покупают то, что не понимают за 5 секунд. Без упаковки всё, что ты сделал в Уроках 1–3, остаётся в файлах.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[32px] py-[26px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Сильная упаковка</p>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              Слабый продукт получит шанс. Сильный — взрывается. Упаковка — единственный мультипликатор, который работает в обе стороны.
            </p>
          </div>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
          На лендинг тратят <b className="not-italic">5 секунд</b>. На рекламу — <b className="not-italic">1 секунду</b>. У тебя нет права на «скучно».
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 5 — 3 кита упаковки ========== */
const L4_PILLARS = [
  {
    n: "01",
    name: "Позиционирование",
    tag: "ОДНА ФРАЗА · 30 МИНУТ",
    body: "Кому, что, чем отличается. Та самая фраза, что станет H1 на лендинге, headline в рекламе и первой строкой в Apollo-сиквенсе.",
  },
  {
    n: "02",
    name: "Визуал",
    tag: "ОДИН СТИЛЬ ВЕЗДЕ · 30 МИНУТ",
    body: "Лендинг + соцсети + ад-креативы. Один шрифт, одна палитра, один тон голоса. Дизайнер не нужен — собирается AI-инструментами.",
  },
  {
    n: "03",
    name: "Креативы и каналы",
    tag: "20–30 ВАРИАНТОВ · 30 МИНУТ",
    body: "Не один «идеальный» креатив, а пачка вариантов. AI генерит, алгоритм Meta или Google сам выбирает, что показывать кому.",
  },
];
const L4Pillars = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Framework · 3 кита упаковки</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Упаковка — это <span className="text-[hsl(var(--slide-gold))]">три кита</span>
          </h2>
          <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[8px]">
            Все три обязательны. Слабое звено убивает остальные два.
          </p>
          <div className="space-y-[5px]">
            {L4_PILLARS.map((p) => (
              <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[6px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(var(--slide-gold))]">{p.n}.</span> {p.name}
                </p>
                <p className="text-[7px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[2px]">{p.tag}</p>
                <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
            На каждый кит — 30 минут. Полная упаковка — 90 минут с AI.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Framework · три кита упаковки</Eyebrow>
        <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.01em]">
          Упаковка — это <span className="text-[hsl(var(--slide-gold))]">три кита</span>
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[28px] max-w-[1600px]">
          Все три обязательны. Слабое звено убивает остальные два. Сильное позиционирование без визуала — мимо. Идеальный визуал без креативов — мёртвая страница.
        </p>
        <div className="grid grid-cols-3 gap-[24px] mb-[20px] max-w-[1700px]">
          {L4_PILLARS.map((p) => (
            <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[24px]">
              <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">{p.n}</p>
              <p className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">{p.name}</p>
              <p className="text-[12px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[10px]">{p.tag}</p>
              <p className="text-[17px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
          На каждый кит — 30 минут. Полная упаковка — <b className="not-italic">90 минут с AI</b>. Без AI это месяц с агентством.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 6 — Кит 1 · Позиционирование ========== */
const L4_POS_TESTS = [
  "Можешь сократить до одной фразы для billboard? — Да → передавай в hero-секцию лендинга.",
  "Незнакомец понимает за 5 секунд? — Нет → упрощай дальше, убирай профессиональный жаргон.",
  "Конкурент НЕ может сказать о себе то же? — Может → это категория, а не позиционирование.",
];
const L4Positioning = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Кит 1 · Позиционирование · 30 минут</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Одна фраза, на которой <span className="text-[hsl(var(--slide-gold))]">держится всё</span>
          </h2>
          <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
            Формула из Урока 1, но теперь финальная — для лендинга, рекламы и cold email.
          </p>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[7px] mb-[8px]">
            <p className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.5]">
              <b className="text-[hsl(var(--slide-gold))]">[Продукт]</b> помогает <b className="text-[hsl(var(--slide-gold))]">[узкий сегмент]</b> достичь <b className="text-[hsl(var(--slide-gold))]">[конкретный результат]</b> через <b className="text-[hsl(var(--slide-gold))]">[уникальный механизм]</b>, в отличие от <b className="text-[hsl(var(--slide-gold))]">[альтернатива]</b>, которая <b className="text-[hsl(var(--slide-gold))]">[её слабость]</b>.
            </p>
          </div>
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Тест формулы</p>
          <ul className="space-y-[3px] mb-[8px]">
            {L4_POS_TESTS.map((t, i) => (
              <li key={i} className="text-[8px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">→ {t}</li>
            ))}
          </ul>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            Эта одна фраза станет H1 лендинга, headline в рекламе и первой строкой в Apollo. Слабая фраза — слабо везде.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Кит 1 · Позиционирование · 30 минут</Eyebrow>
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.01em]">
          Одна фраза, на которой <span className="text-[hsl(var(--slide-gold))]">держится всё</span>
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1600px]">
          Формула из Урока 1, но теперь финальная — она пойдёт в H1 лендинга, в headline рекламы и в первую строку cold email.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[36px] py-[28px] mb-[24px] max-w-[1700px]">
          <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Финальная формула</p>
          <p className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.5]">
            <b className="text-[hsl(var(--slide-gold))]">[Продукт]</b> помогает <b className="text-[hsl(var(--slide-gold))]">[узкий сегмент]</b> достичь <b className="text-[hsl(var(--slide-gold))]">[конкретный результат]</b> через <b className="text-[hsl(var(--slide-gold))]">[уникальный механизм]</b>, в отличие от <b className="text-[hsl(var(--slide-gold))]">[альтернатива]</b>, которая <b className="text-[hsl(var(--slide-gold))]">[её слабость]</b>.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[22px] max-w-[1700px]">
          <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Три теста</p>
          <ul className="space-y-[8px]">
            {L4_POS_TESTS.map((t, i) => (
              <li key={i} className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">→ {t}</li>
            ))}
          </ul>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic mt-[20px] leading-[1.45] max-w-[1700px]">
          Эта одна фраза станет H1 лендинга, headline в рекламе и первой строкой в Apollo-сиквенсе. Слабая фраза — слабо везде.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 7 — Кит 2 · Визуалы ========== */
const L4_VISUAL_TOOLS = [
  { name: "ChatGPT (Sora) / Nano Banana", tag: "HERO-КАРТИНКИ · ИЛЛЮСТРАЦИИ", body: "Концепты, hero-визуалы, любые иллюстрации под лендинг и рекламу." },
  { name: "Kling / Veo 3", tag: "ВИДЕО-КРЕАТИВЫ", body: "Из текста или картинки — короткое видео для Meta, TikTok, YouTube Shorts." },
  { name: "Canva (с AI)", tag: "БАННЕРЫ · СОЦСЕТИ", body: "Баннеры, обложки, посты, карусели — все форматы для соцсетей разом." },
  { name: "HeyGen + AI UGC-актёры", tag: "АВАТАР · UGC-ВИДЕО", body: "Свой AI-аватар или готовые «лица» для рекламных видео без съёмок." },
];
const L4Visuals = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Кит 2 · Визуалы · 30 минут</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Дизайнер не нужен — <span className="text-[hsl(var(--slide-gold))]">AI делает за 20 минут</span>
          </h2>
          <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
            То, что раньше занимало неделю с дизайнером — сейчас собирается за вечер.
          </p>
          <div className="grid grid-cols-2 gap-[5px] mb-[8px]">
            {L4_VISUAL_TOOLS.map((t) => (
              <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[5px]">
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{t.name}</p>
                <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[2px]">{t.tag}</p>
                <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{t.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[8px] py-[6px]">
            <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">Правило одного стиля</p>
            <p className="text-[8px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
              Один шрифт. Одна палитра (3 цвета максимум). Один тон. Везде: лендинг → реклама → соцсети → email.
            </p>
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[6px] leading-[1.4]">
            Несоответствие визуала между лендингом и рекламой роняет конверсию на 40%.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Кит 2 · Визуалы · 30 минут</Eyebrow>
        <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.01em]">
          Дизайнер не нужен — <span className="text-[hsl(var(--slide-gold))]">AI делает за 20 минут</span>
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1600px]">
          То, что раньше занимало неделю с дизайнером — сейчас собирается за вечер. Стек, на котором я делаю визуал упаковки в 2026:
        </p>
        <div className="grid grid-cols-2 gap-[20px] mb-[20px] max-w-[1700px]">
          {L4_VISUAL_TOOLS.map((t) => (
            <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[20px]">
              <p className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">{t.name}</p>
              <p className="text-[12px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[8px]">{t.tag}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{t.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[32px] py-[22px] max-w-[1700px]">
          <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Правило одного стиля</p>
          <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            Один шрифт. Одна палитра — максимум 3 цвета. Один тон голоса. Везде: лендинг → реклама → соцсети → email.
          </p>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic mt-[20px] leading-[1.45] max-w-[1700px]">
          Несоответствие визуала между лендингом и рекламой роняет конверсию на <b className="not-italic">40%</b>. Самая частая ошибка стартапов.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 8 — Кит 3 · Креативы 2026 ========== */
const L4_OLD_RULES = [
  "Один «идеальный» креатив + узкий ручной таргет",
  "A/B-тесты по два варианта раз в неделю",
  "Месяцы на «доработку» одного объявления",
];
const L4_NEW_RULES = [
  "20–30 креативов на одну кампанию — Meta Andromeda сама выбирает, что показывать",
  "Broad audience + creative diversity — AI таргетит лучше, чем ручная настройка",
  "AI-генерация ассетов: ChatGPT, Kling, Canva выкатывают 50+ вариантов из URL продукта",
];
const L4Creatives = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Кит 3 · Креативы · что изменилось в 2026</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Старые правила <span className="text-[hsl(var(--slide-gold))]">сломались</span>. Если делать по-старому — сольёшь бюджет за неделю
          </h2>
          <div className="bg-[hsl(0_70%_55%/0.06)] border-l-2 border-[hsl(0_70%_55%)] rounded-[6px] px-[8px] py-[6px] mb-[6px]">
            <p className="text-[8px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.1em] mb-[2px]">Что больше не работает · 2024 и раньше</p>
            <ul className="space-y-[2px]">
              {L4_OLD_RULES.map((t) => (
                <li key={t} className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">→ {t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[8px] py-[6px]">
            <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">Что работает · 2026</p>
            <ul className="space-y-[2px]">
              {L4_NEW_RULES.map((t) => (
                <li key={t} className="text-[7.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.35]">→ {t}</li>
              ))}
            </ul>
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
            Главный сдвиг: креатив стал важнее таргетинга. Раньше выигрывал тот, кто лучше таргетировал. Сейчас — тот, кто быстрее генерит варианты.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Кит 3 · Креативы · что изменилось в 2026</Eyebrow>
        <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em]">
          Старые правила <span className="text-[hsl(var(--slide-gold))]">сломались</span>. По-старому — сольёшь бюджет за неделю
        </h2>
        <div className="grid grid-cols-2 gap-[24px] mb-[24px] max-w-[1700px]">
          <div className="bg-[hsl(0_70%_55%/0.06)] border-l-[4px] border-[hsl(0_70%_55%)] rounded-[14px] px-[32px] py-[24px]">
            <p className="text-[15px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.18em] mb-[14px]">Что больше не работает · 2024 и раньше</p>
            <ul className="space-y-[10px]">
              {L4_OLD_RULES.map((t) => (
                <li key={t} className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">→ {t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[32px] py-[24px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Что работает · 2026</p>
            <ul className="space-y-[10px]">
              {L4_NEW_RULES.map((t) => (
                <li key={t} className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">→ {t}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
          Главный сдвиг: <b className="not-italic">креатив стал важнее таргетинга</b>. Раньше выигрывал тот, кто лучше таргетировал. Сейчас — тот, кто быстрее генерит варианты.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 9 — B2B запуск ========== */
/* ========== Slide 9 — B2B запуск · личный бренд фаундера ========== */
const L4_FOUNDER_MOVES = [
  { n: "01", name: "Личные соцсети", tag: "FACEBOOK · LINKEDIN · X", body: "Пиши о продукте каждый день: путь, инсайты, фейлы, скриншоты. Люди не покупают у ноунейм-бренда — покупают у фаундера, которому доверяют и за чьим путём следят." },
  { n: "02", name: "Прямой обзвон сети", tag: "ДРУЗЬЯ · ЗНАКОМЫЕ · БЫВШИЕ КОЛЛЕГИ", body: "Открой контакты, выпиши всех, кто подходит под ICP. Пиши и звони лично: «Запустил продукт, решает X. Подходит под вас? Покажу за 15 минут». Так я закрыл первых клиентов MetaMinder." },
  { n: "03", name: "Контент с продуктом", tag: "ПОСТЫ · ВИДЕО · DEMO", body: "Каждый запуск фичи — пост. Каждый кейс клиента — пост. Каждое возражение — пост. Подписчики, которые видят продукт в работе неделями, конвертируются сами — без cold outreach." },
  { n: "04", name: "Networking-events", tag: "OFFLINE · MEETUPS · ПОДКАСТЫ", body: "Иди туда, где твоя ICP. Выступай, знакомься, рассказывай. Один разговор лицом к лицу даёт больше доверия, чем 100 cold email. Первые B2B-сделки рождаются из рукопожатий." },
];
const L4B2B = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Запуск B2B · бренд фаундера</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Первые 5 клиентов приходят <span className="text-[hsl(var(--slide-gold))]">не из Apollo, а из тебя</span>
          </h2>
          <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
            Твой продукт — ноунейм. Никто ему не верит. Но люди верят лично тебе, твоему пути, твоей репутации. Именно это закрывает первые сделки.
          </p>
          <div className="space-y-[5px] mb-[6px]">
            {L4_FOUNDER_MOVES.map((s) => (
              <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[5px]">
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(var(--slide-gold))]">{s.n}.</span> {s.name}
                </p>
                <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[2px]">{s.tag}</p>
                <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            Первых 5 клиентов MetaMinder я привёл из своих соцсетей и личной базы. Cold outreach подключал уже после.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Запуск B2B · бренд фаундера · первые 5 клиентов</Eyebrow>
        <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.01em]">
          Первые клиенты приходят <span className="text-[hsl(var(--slide-gold))]">не из Apollo, а из тебя</span>
        </h2>
        <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1600px]">
          Твой продукт на старте — ноунейм. Ему никто не верит. Но люди верят лично тебе — твоему пути, репутации и нетворку. Бренд фаундера закрывает первые сделки, когда у продукта ещё нет ни кейсов, ни отзывов.
        </p>
        <div className="grid grid-cols-2 gap-[20px] mb-[20px] max-w-[1700px]">
          {L4_FOUNDER_MOVES.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[18px]">
              <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[6px]">{s.n}</p>
              <p className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">{s.name}</p>
              <p className="text-[12px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[8px]">{s.tag}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic mt-[6px] leading-[1.45] max-w-[1700px]">
          Первых 5 клиентов MetaMinder я привёл из личных соцсетей и обзвона своей базы знакомых. Автоматизация и cold outreach — следующий шаг, когда есть первые кейсы и социальное доказательство.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 10 — B2B автоматизация · Apollo / Instantly / LinkedIn Helper ========== */
const L4_B2B_STEPS = [
  { n: "01", name: "Apollo.io", tag: "$49 / мес · ICP-БАЗА", body: "500 ICP-контактов: job title + company size + industry. Экспорт в CSV. Apollo даёт 65–70% точности на email — без warmup получишь 15–35% bounce." },
  { n: "02", name: "Instantly.ai", tag: "$37 / мес · WARMUP + ОТПРАВКА", body: "5–10 sender-доменов. Unlimited warmup на каждом. Максимум 30 имейлов/день/домен → 150–300 имейлов/день безопасно." },
  { n: "03", name: "AI-копирайт", tag: "CHATGPT / CLAUDE · БЕСПЛАТНО", body: "Промпт: «3 cold email-варианта для [ICP] с болью [из Урока 2]. Каждый — 4 строки, без буллетов, один CTA»." },
  { n: "04", name: "LinkedIn Helper", tag: "$15 / мес · ВТОРОЙ КАНАЛ", body: "Параллельно с email — connection requests + follow-up. Тот же ICP-список из Apollo, чтобы попадать в одного и того же человека дважды." },
];
const L4_B2B_METRICS = [
  { num: "30–50%", text: "open rate, если warmup настроен правильно" },
  { num: "1–3%", text: "reply rate на cold email — это норма 2026" },
  { num: "0.5–1%", text: "booked meetings от total contacts" },
];
const L4B2BTools = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>B2B автоматизация · Apollo + Instantly + LinkedIn</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Когда есть первые кейсы — <span className="text-[hsl(var(--slide-gold))]">подключай стек</span>
          </h2>
          <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
            Workflow на 90 минут. Дальше — только мониторинг и итерации.
          </p>
          <div className="space-y-[5px] mb-[6px]">
            {L4_B2B_STEPS.map((s) => (
              <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[5px]">
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(var(--slide-gold))]">{s.n}.</span> {s.name}
                </p>
                <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[2px]">{s.tag}</p>
                <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-[5px] mb-[6px]">
            {L4_B2B_METRICS.map((m) => (
              <div key={m.num} className="bg-[hsl(var(--slide-gold)/0.06)] border-l-2 border-[hsl(var(--slide-gold)/0.6)] rounded-[6px] px-[6px] py-[5px]">
                <div className="text-[10px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05]">{m.num}</div>
                <div className="text-[6.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35] mt-[2px]">{m.text}</div>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            500 контактов → 5–10 встреч → 1–2 платящих клиента. Это математика B2B-запуска в 2026.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>B2B автоматизация · Apollo + Instantly + LinkedIn Helper · workflow на 90 минут</Eyebrow>
        <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.01em]">
          Когда первые кейсы есть — <span className="text-[hsl(var(--slide-gold))]">подключай стек</span>
        </h2>
        <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1600px]">
          Четыре инструмента, 90 минут на настройку. Дальше — только мониторинг open / reply rates и еженедельные итерации. Это масштабирование, а не первый запуск.
        </p>
        <div className="grid grid-cols-2 gap-[20px] mb-[20px] max-w-[1700px]">
          {L4_B2B_STEPS.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[18px]">
              <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[6px]">{s.n}</p>
              <p className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">{s.name}</p>
              <p className="text-[12px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[8px]">{s.tag}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-[20px] max-w-[1700px]">
          {L4_B2B_METRICS.map((m) => (
            <div key={m.num} className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[4px] border-[hsl(var(--slide-gold)/0.6)] rounded-[14px] px-[26px] py-[18px]">
              <div className="font-display text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05] mb-[6px]">{m.num}</div>
              <div className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{m.text}</div>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic mt-[18px] leading-[1.45] max-w-[1700px]">
          500 контактов → 5–10 встреч → 1–2 платящих клиента. Это математика B2B-запуска.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 10 — B2C запуск ========== */
const L4_B2C_STEPS = [
  { n: "01", name: "Пиксели до первого клика", tag: "ДЕНЬ 1 · ДО ЗАПУСКА", body: "Поставь Meta Pixel + TikTok Pixel + Google Tag + GA4 на лендинг ДО первого посетителя. Каждый клик уже учит алгоритм. Без пикселей первый месяц трафика — выброшен." },
  { n: "02", name: "Вейтлист с личных страниц", tag: "0$ · 500 ЧЕЛОВЕК ЗА НЕДЕЛЮ", body: "Кейс Mikey: пока делал продукт — открыл вейтлист, писал со своих FB/IG/LinkedIn, нашёл группы целевой аудитории (знакомства), пригласил записаться. 500 человек за неделю без бюджета. Они же стали early adopters и бета-тестерами." },
  { n: "03", name: "Креативы на AI", tag: "~50 КОМБИНАЦИЙ · 50/50 IMG+VIDEO", body: "Картинки — Nano Banana + ChatGPT. Видео — Kling. Я-аватар — HeyGen. На кампанию ~50 креативов: половина изображений, половина видео. ChatGPT генерит 20 хуков — оставляешь 5 лучших." },
  { n: "04", name: "Meta · Advantage+", tag: "$20 / ДЕНЬ МИНИМУМ", body: "Запускаю через Advantage+ — пусть AI сам определит, кому показывать. Заливаю все 50 креативов в одну кампанию. Цель: Conversions (пиксель + 50 событий). Узкий таргет НЕ настраиваю." },
  { n: "05", name: "Google · позже, та же логика", tag: "Performance Max · НЕ НА СТАРТЕ", body: "На запуске Google пока не использую — фокус на Meta. Когда подключаю: PMax, все ассеты в одну кампанию, обязательно conversion tracking. Логика та же — даёшь алгоритму данные, не лезешь руками." },
  { n: "06", name: "GA4 + аналитика", tag: "MUST · БЕЗ ВАРИАНТОВ", body: "Google Analytics обязательно. Знать сколько людей заходит, как себя ведут, что делают, где отваливаются. Без аналитики ты не знаешь, что улучшать — слепой полёт." },
];
const L4B2C = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Запуск B2C · Mikey · от вейтлиста до Advantage+</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Стек, который сейчас тестирую на <span className="text-[hsl(var(--slide-gold))]">Mikey</span>
          </h2>
          <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
            Пиксели → вейтлист с личных страниц (500 чел / 0$) → AI-креативы → Meta Advantage+ → аналитика.
          </p>
          <div className="space-y-[5px] mb-[6px]">
            {L4_B2C_STEPS.map((s) => (
              <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[5px]">
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(var(--slide-gold))]">{s.n}.</span> {s.name}
                </p>
                <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[2px]">{s.tag}</p>
                <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            Старая модель: 1 креатив, тонкий таргет, ждёшь чуда. Новая: 50 креативов, broad audience, AI делает работу.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Запуск B2C · Mikey · пиксели → вейтлист → AI-креативы → Advantage+</Eyebrow>
        <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.01em]">
          Стек, который сейчас тестирую на <span className="text-[hsl(var(--slide-gold))]">Mikey</span>
        </h2>
        <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1600px]">
          Пиксели Meta / TikTok / Google и GA4 ставлю с первого дня — чтобы алгоритмы учились с первого клика. Параллельно открываю вейтлист и привлекаю людей с личных соцсетей. На Mikey так получил 500 человек за неделю без бюджета — они же стали бета-тестерами.
        </p>
        <div className="grid grid-cols-2 gap-[20px] mb-[20px] max-w-[1700px]">
          {L4_B2C_STEPS.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[18px]">
              <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[6px]">{s.n}</p>
              <p className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">{s.name}</p>
              <p className="text-[12px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[8px]">{s.tag}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
          Если продукт реально нужен рынку — первые 500 человек приходят бесплатно. Платный трафик потом масштабирует то, что уже сработало органически.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 11 — Tools + mini-CTA ========== */
const L4_CREATE = [
  "Lovable / v0 — лендинг",
  "ChatGPT / Nano Banana — картинки",
  "Kling / Veo 3 — видео",
  "Canva — баннеры и соцсети",
  "HeyGen — AI-аватар или UGC-актёры",
  "Claude / GPT — копирайтинг",
];
const L4_LAUNCH = [
  "B2B: Apollo + Instantly + LinkedIn Helper",
  "B2C: Meta Advantage+ + Google PMax + TikTok Smart+",
  "Пиксели: Meta Pixel + Google Tag + TikTok Pixel",
  "Аналитика: Mixpanel + GA4",
];
const L4Tools = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Стек одиночки-фаундера · 29.04.2026</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Полный стек упаковки и <span className="text-[hsl(var(--slide-gold))]">запуска</span>
          </h2>
          <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
            То, чем я пользуюсь сегодня. Применить руками за 90 минут — реально.
          </p>
          <div className="grid grid-cols-2 gap-[6px] mb-[6px]">
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[6px]">
              <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Создание</p>
              <ul className="space-y-[2px]">
                {L4_CREATE.map((t) => (
                  <li key={t} className="text-[7.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">→ {t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[6px]">
              <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Запуск</p>
              <ul className="space-y-[2px]">
                {L4_LAUNCH.map((t) => (
                  <li key={t} className="text-[7.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">→ {t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[7px]">
            <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">P.S. Чтобы это сработало на твоём продукте</p>
            <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">
              Стек применяется за 90 минут. Чтобы он сработал именно на твоём продукте — нужны итерации и неочевидные тонкости. На <b className="text-[hsl(var(--slide-gold))]">The Founders Circle</b> я веду группу до 8 фаундеров от идеи к запуску.
            </p>
          </div>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Стек одиночки-фаундера · 29 апреля 2026</Eyebrow>
        <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.01em]">
          Полный стек упаковки и <span className="text-[hsl(var(--slide-gold))]">запуска</span>
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[26px] max-w-[1600px]">
          Всё, чем я пользуюсь сегодня для упаковки и запуска продукта в одиночку. Применить руками за 90 минут — реально.
        </p>
        <div className="grid grid-cols-2 gap-[24px] mb-[22px] max-w-[1700px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[24px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Создание · упаковка</p>
            <ul className="space-y-[8px]">
              {L4_CREATE.map((t) => (
                <li key={t} className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">→ {t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[24px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Запуск · трафик и аналитика</p>
            <ul className="space-y-[8px]">
              {L4_LAUNCH.map((t) => (
                <li key={t} className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">→ {t}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[3px] border-[hsl(var(--slide-gold)/0.6)] rounded-[10px] px-[28px] py-[18px] max-w-[1700px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] mb-[8px]">P.S. Чтобы это сработало на твоём продукте</p>
          <p className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            Стек применяется руками за 90 минут. Чтобы он сработал именно на твоём продукте — нужны итерации, обратная связь и неочевидные тонкости. На <b className="text-[hsl(var(--slide-gold))]">The Founders Circle</b> я веду группу до 8 фаундеров от идеи к запуску с реальными пользователями.
          </p>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 12 — Practice now (30 минут, 5 шагов) ========== */
const L4_PRACTICE = [
  { t: "Финальная формула позиционирования", time: "5 мин", body: "Заполни формулу со Слайда 6. Одна фраза, проходит все три теста." },
  { t: "10 hero-headlines от AI", time: "5 мин", body: "ChatGPT/Claude → «10 hero-headlines на основе позиционирования: [твоя формула]. Без воды. До 8 слов»." },
  { t: "Перепиши hero-секцию лендинга", time: "10 мин", body: "Открой свой лендинг с прошлого урока → новый headline + sub-headline + CTA. Обнови Value Proposition в section 2." },
  { t: "Hero-картинка с AI", time: "5 мин", body: "ChatGPT / Nano Banana → одна картинка под обновлённое позиционирование. Залей на лендинг." },
  { t: "Реши: B2B или B2C", time: "5 мин", body: "Запиши, какой стек применишь на следующей неделе: Apollo + Instantly или Meta + Google + TikTok." },
];
const L4Practice = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Делаем прямо сейчас · 30 минут</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Перепакуй лендинг с прошлого урока — <span className="text-[hsl(var(--slide-gold))]">за 30 минут</span>
          </h2>
          <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[8px]">
            Лендинг ты уже сделал на Уроке 3. Сейчас переписываем под финальное позиционирование.
          </p>
          <ol className="space-y-[5px] mb-[6px]">
            {L4_PRACTICE.map((p, i) => (
              <li key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[8px] py-[5px]">
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(var(--slide-gold))]">{i + 1}.</span> {p.t}
                </p>
                <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[2px]">{p.time}</p>
                <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{p.body}</p>
              </li>
            ))}
          </ol>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            На выходе: финальное позиционирование + обновлённый лендинг + hero-image + план запуска.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Делаем прямо сейчас · 5 шагов · 30 минут</Eyebrow>
        <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.01em]">
          Перепакуй лендинг с прошлого урока — <span className="text-[hsl(var(--slide-gold))]">за 30 минут</span>
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[26px] max-w-[1600px]">
          Лендинг уже сделан на Уроке 3. Сейчас переписываем под финальное позиционирование и готовим к запуску.
        </p>
        <div className="grid grid-cols-[1.4fr_1fr] gap-[40px] max-w-[1700px]">
          <div>
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">5 шагов</p>
            <ol className="space-y-[12px]">
              {L4_PRACTICE.map((p, i) => (
                <li key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[24px] py-[14px]">
                  <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">
                    <span className="text-[hsl(var(--slide-gold))] mr-2">{i + 1}.</span> {p.t}
                    <span className="text-[13px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] ml-3 align-middle">· {p.time}</span>
                  </p>
                  <p className="text-[17px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5] mt-[4px]">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[32px] py-[26px]">
              <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">На выходе · 30 минут</p>
              <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.5]">
                <b className="text-[hsl(var(--slide-gold))]">Финальное позиционирование</b> + <b className="text-[hsl(var(--slide-gold))]">обновлённый лендинг</b> + <b className="text-[hsl(var(--slide-gold))]">hero-image</b> + <b className="text-[hsl(var(--slide-gold))]">план запуска</b> на следующую неделю.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 13 — 7-day checklist + final CTA ========== */
const L4_B2B_DAYS = [
  { d: "День 1", time: "90 мин", b: "Финальное позиционирование + обновление лендинга + hero-картинка." },
  { d: "День 2", time: "60 мин", b: "Apollo: 500 ICP-контактов, экспорт в CSV." },
  { d: "День 3", time: "60 мин", b: "Instantly: 5–10 sender-доменов, warmup включён." },
  { d: "День 4", time: "45 мин", b: "AI-копирайт: 3 cold email + LinkedIn-сообщения через Helper." },
  { d: "День 5", time: "30 мин", b: "Запуск: 100 имейлов через Instantly + 50 connection requests." },
  { d: "Дни 6–7", time: "15 мин/день", b: "Мониторинг open / reply rates. Не трогать настройки." },
];
const L4_B2C_DAYS = [
  { d: "День 1", time: "90 мин", b: "Финальное позиционирование + обновление лендинга + hero-картинка." },
  { d: "День 2", time: "60 мин", b: "Генерация ассетов: 20–30 креативов через ChatGPT + Kling + Canva." },
  { d: "День 3", time: "60 мин", b: "Установка пикселей: Meta + Google Tag + TikTok на лендинг." },
  { d: "День 4", time: "45 мин", b: "Advantage+ на Meta + Performance Max на Google. $20/день." },
  { d: "День 5", time: "30 мин", b: "Запуск кампаний. Проверить, что всё крутится." },
  { d: "Дни 6–7", time: "15 мин/день", b: "НЕ трогать AI 3–5 дней. Только смотреть метрики." },
];
const L4Final = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--slide-bg))] via-[hsl(var(--slide-bg)/0.85)] to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col justify-center px-[18px] h-full">
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[10px]" />
          <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Урок 4 · план на 7 дней + дальше</p>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            7 дней до <span className="text-[hsl(var(--slide-gold))]">работающего запуска</span>
          </h2>
          <div className="grid grid-cols-2 gap-[5px] mb-[8px]">
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[7px] py-[5px]">
              <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">B2B трек</p>
              <ul className="space-y-[2px]">
                {L4_B2B_DAYS.map((d, i) => (
                  <li key={i} className="text-[6.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.35]">
                    <b className="text-[hsl(var(--slide-gold))]">{d.d}.</b> {d.b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[7px] py-[5px]">
              <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">B2C трек</p>
              <ul className="space-y-[2px]">
                {L4_B2C_DAYS.map((d, i) => (
                  <li key={i} className="text-[6.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.35]">
                    <b className="text-[hsl(var(--slide-gold))]">{d.d}.</b> {d.b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-[8.5px] text-[hsl(var(--slide-gold))] italic leading-[1.4] mb-[8px]">
            Пройдёшь 7 дней — у тебя работающий запуск, а не презентация в Notion.
          </p>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[8px]">
            <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[3px]">The Founders Circle</p>
            <p className="text-[8px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4] mb-[6px]">
              Группа до 8 фаундеров. 8 недель — от идеи к запуску. С моей личной поддержкой шансы дойти до первого платящего клиента кратно выше, чем в одиночку.
            </p>
            <a href="https://founders-circle.space" target="_blank" rel="noopener noreferrer" className="block text-center text-[9px] font-bold py-[6px] rounded-[4px] bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))]">
              Узнать про когорту → founders-circle.space
            </a>
            <p className="text-[7px] italic text-[hsl(var(--slide-text-muted))] text-center mt-[5px]">
              Спасибо, что прошёл курс до конца. Увидимся в TFC или на твоём запуске.
            </p>
          </div>
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
      <div className="relative z-10 flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[20px]" />
        <p className="text-[18px] uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">Урок 4 · план на 7 дней · что дальше</p>
        <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.01em]">
          7 дней до <span className="text-[hsl(var(--slide-gold))]">работающего запуска</span>
        </h2>
        <div className="grid grid-cols-2 gap-[24px] mb-[22px] max-w-[1700px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[20px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">B2B трек</p>
            <ul className="space-y-[6px]">
              {L4_B2B_DAYS.map((d, i) => (
                <li key={i} className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                  <b className="text-[hsl(var(--slide-gold))]">{d.d} · {d.time}.</b> {d.b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[20px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">B2C трек</p>
            <ul className="space-y-[6px]">
              {L4_B2C_DAYS.map((d, i) => (
                <li key={i} className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                  <b className="text-[hsl(var(--slide-gold))]">{d.d} · {d.time}.</b> {d.b}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-[20px] text-[hsl(var(--slide-gold))] italic mb-[20px] leading-[1.45] max-w-[1700px]">
          Пройдёшь все 7 дней — у тебя работающий запуск, а не презентация в Notion.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[36px] py-[22px] max-w-[1700px]">
          <p className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">The Founders Circle</p>
          <p className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[14px]">
            Группа до 8 фаундеров. Моё личное участие. <b className="text-[hsl(var(--slide-gold))]">8 недель — от идеи к запуску.</b> С моей личной поддержкой шансы дойти до первого платящего клиента кратно выше, чем в одиночку.
          </p>
          <a href="https://founders-circle.space" target="_blank" rel="noopener noreferrer" className="inline-block text-[18px] font-bold px-[28px] py-[12px] rounded-[10px] bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] hover:opacity-90 transition">
            Узнать про следующую когорту → founders-circle.space
          </a>
          <p className="text-[14px] italic text-[hsl(var(--slide-text-muted))] mt-[12px]">
            Спасибо, что прошёл курс до конца. Увидимся в TFC или на твоём запуске.
          </p>
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
  L4B2B,          // 9  B2B запуск · бренд фаундера
  L4B2BTools,     // 10 B2B автоматизация · Apollo + Instantly + LinkedIn
  L4B2C,          // 11 B2C запуск
  L4Tools,        // 12 Tools + mini-CTA
  L4Final,        // 13 7 дней + финальный CTA
];
