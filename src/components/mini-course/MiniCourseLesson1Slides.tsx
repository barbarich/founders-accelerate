import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { QRCodeSVG } from "qrcode.react";
import { Check, Copy } from "lucide-react";
import titleBg from "@/assets/slides/title-bg.jpg";
import photoMichael from "@/assets/slides/photo-michael.jpg";
import { useSlideMeta } from "./SlideMetaContext";

/* ========== Shared atoms (meeting7 visual language) ========== */

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

// Footer now reads index/total/lesson from SlideMetaContext.
// The `index` prop is kept for backward-compat with existing call sites but ignored.
const Footer: React.FC<{ index?: number }> = () => {
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

const FooterMobile: React.FC<{ index?: number }> = () => {
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
export const S1 = () => {
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
            Урок 1 · Мини-курс
          </p>
          <h1 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.02em]">
            За 30 минут понять рынок,<br />на который ты заходишь —<br />и не потерять 6 месяцев впустую
          </h1>
          <div className="mt-[18px] space-y-[8px] text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> увидеть реальных конкурентов и их слабые места</p>
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> найти боли клиентов в отзывах и Reddit с AI</p>
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> сформулировать своё место на рынке за 1 фразу</p>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[14px] italic">
            Без этого код писать рано.
          </p>
        </div>
        <FooterMobile index={1} />
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
          Урок 1 · Мини-курс The Founders Circle
        </p>
        <h1 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] max-w-[1500px]">
          За 30 минут понять рынок, на который ты заходишь —<br />
          <span className="text-[hsl(var(--slide-gold))]">и не потерять 6 месяцев</span> впустую
        </h1>
        <div className="mt-[44px] grid grid-cols-3 gap-[32px] max-w-[1500px]">
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[8px]">Увидишь</p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.35]">реальных конкурентов и их слабые места</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[8px]">Найдёшь</p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.35]">боли клиентов в отзывах и Reddit с помощью AI</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[8px]">Сформулируешь</p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.35]">своё место на рынке одной фразой</p>
          </div>
        </div>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[36px] italic">
          Без этого писать код — рано. С этим — у тебя есть на что опереться.
        </p>
      </div>
      <Footer index={1} />
    </Stage>
  );
};

/* ========== Slide 2 — Pull quote ========== */
const PullQuote: React.FC<{ children: React.ReactNode; sub?: string }> = ({ children, sub }) => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Главный инсайт</Eyebrow>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[14px]">
            <p className="text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">«{children}»</p>
          </div>
          {sub && <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[10px]">{sub}</p>}
        </div>
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Главный инсайт</Eyebrow>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[40px] py-[36px] max-w-[1500px]">
          <p className="text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">«{children}»</p>
        </div>
        {sub && <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[20px]">{sub}</p>}
      </div>
    </Stage>
  );
};

export const S2 = () => (
  <div className="w-full h-full relative">
    <PullQuote sub="главный инсайт этого урока">
      Фаундеры, которые пропускают ресёрч, тратят 6 месяцев на продукт, который никто не покупает. Те, кто вкладывает немного времени в ресёрч, строят то, что нужно рынку — и за что платят.
    </PullQuote>
    <Footer index={2} />
  </div>
);

/* ========== Slide 3 — Big question ========== */
export const S3 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Маленькая проверка</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[12px]">
            Можешь ли ты сейчас назвать:<br />
            <span className="text-[hsl(var(--slide-gold))]">5 своих конкурентов</span>, их цены, позиционирование<br />
            и что они подняли за последний год?
          </h2>
          <div className="space-y-[8px] text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            <p><span className="text-[hsl(var(--slide-gold))] font-bold">Нет?</span> Это нормально — большинство фаундеров не могут. За этим ты и пришёл. К концу урока сможешь.</p>
            <p><span className="text-[hsl(var(--slide-gold))] font-bold">Да?</span> Отлично. Этот урок поможет проверить, не пропустил ли ты что-то важное.</p>
          </div>
        </div>
        <FooterMobile index={3} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1600px]">
        <Eyebrow>Маленькая проверка</Eyebrow>
        <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[44px] tracking-[-0.01em]">
          Можешь ли ты сейчас назвать <span className="text-[hsl(var(--slide-gold))]">5 своих конкурентов</span>,<br />
          их цены, позиционирование и что они подняли за последний год?
        </h2>
        <div className="grid grid-cols-2 gap-[28px] max-w-[1500px]">
          <div className="border-l-[3px] border-[hsl(var(--slide-gold))] pl-[24px]">
            <p className="text-[24px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[10px]">Нет</p>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              Это нормально — большинство фаундеров не могут. Именно за этим ты сюда и пришёл. К концу урока сможешь.
            </p>
          </div>
          <div className="border-l-[3px] border-[hsl(var(--slide-gold))] pl-[24px]">
            <p className="text-[24px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[10px]">Да</p>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              Отлично. Этот урок поможет проверить, не пропустил ли ты что-то важное — и углубить то, что уже знаешь.
            </p>
          </div>
        </div>
      </div>
      <Footer index={3} />
    </Stage>
  );
};

/* ========== Slide 4 — Stats ========== */
const stats = [
  ["42%", "стартапов закрываются от «no market need»"],
  ["87%", "AI-проектов не доходят до продакшена"],
  ["18 мес", "средний срок жизни идеи без валидации"],
];
export const S4 = () => {
  const isMobile = useIsMobile();
  const industry: Array<[string, string, string]> = [
    ["42%", "стартапов закрываются от «no market need»", "CB Insights"],
    ["80%", "AI-проектов не доходят до продакшена", "RAND Corporation"],
    ["1 из 12", "стартапов доходит до product-market fit", "Startup Genome"],
  ];
  const myScore: Array<[string, string]> = [
    ["6 мес", "на InterviewNinja без валидации — закрыл"],
    ["7 мес", "на MetaMinder с правильным ресёрчем — первый платящий клиент"],
    ["50K+", "клиентов на RunEverywhere в 107 странах — поймали момент"],
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full gap-[10px]">
          <Eyebrow mobile>Статистика индустрии</Eyebrow>
          <div className="grid grid-cols-3 gap-[6px]">
            {industry.map(([n, t, src]) => (
              <div key={n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[6px] px-[6px] py-[8px] flex flex-col">
                <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))] font-bold leading-none">{n}</span>
                <span className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.25] mt-[5px]">{t}</span>
                <span className="text-[7px] text-[hsl(var(--slide-text-muted))] mt-[4px] uppercase tracking-[0.06em]">{src}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-[hsl(var(--slide-gold)/0.5)] my-[2px]" />
          <p className="italic text-[9px] text-[hsl(var(--slide-gold))] text-center">
            А вот мой счёт по каждому из трёх подходов:
          </p>
          <Eyebrow mobile>Мой счёт</Eyebrow>
          <div className="grid grid-cols-3 gap-[6px]">
            {myScore.map(([n, t]) => (
              <div key={n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[6px] px-[6px] py-[8px] flex flex-col">
                <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))] font-bold leading-none">{n}</span>
                <span className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.25] mt-[5px]">{t}</span>
              </div>
            ))}
          </div>
          <p className="italic text-[8px] text-[hsl(var(--slide-gold))] text-center mt-[4px] leading-[1.35]">
            Индустрия — это твои шансы. Мой счёт — это карта, по какой дорожке ты пойдёшь.
          </p>
        </div>
        <FooterMobile index={4} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full gap-[28px]">
        <div>
          <Eyebrow>Статистика индустрии</Eyebrow>
          <div className="grid grid-cols-3 gap-[24px] max-w-[1640px]">
            {industry.map(([n, t, src]) => (
              <div key={n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.5)] rounded-[14px] px-[32px] py-[28px] flex flex-col">
                <span className="font-mono text-[88px] text-[hsl(var(--slide-gold))] font-bold leading-none">{n}</span>
                <span className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.3] mt-[18px]">{t}</span>
                <span className="text-[14px] text-[hsl(var(--slide-text-muted))] mt-[16px] uppercase tracking-[0.12em]">{src}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-[14px]">
          <div className="h-[1px] w-full bg-[hsl(var(--slide-gold)/0.5)]" />
          <p className="italic text-[24px] text-[hsl(var(--slide-gold))]">
            А вот мой счёт по каждому из трёх подходов:
          </p>
          <div className="h-[1px] w-full bg-[hsl(var(--slide-gold)/0.5)]" />
        </div>

        <div>
          <Eyebrow>Мой счёт</Eyebrow>
          <div className="grid grid-cols-3 gap-[24px] max-w-[1640px]">
            {myScore.map(([n, t]) => (
              <div key={n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.5)] rounded-[14px] px-[32px] py-[28px] flex flex-col">
                <span className="font-mono text-[80px] text-[hsl(var(--slide-gold))] font-bold leading-none">{n}</span>
                <span className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.3] mt-[18px]">{t}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="italic text-[22px] text-[hsl(var(--slide-gold))] text-center mt-[4px]">
          Индустрия — это твои шансы. Мой счёт — это карта, по какой дорожке ты пойдёшь.
        </p>
      </div>
      <Footer index={4} />
    </Stage>
  );
};

/* ========== Slide 5 — Case title ========== */
const CaseTitle: React.FC<{ name: string; sub: string; punch: string; index: number }> = ({ name, sub, punch, index }) => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Кейс</Eyebrow>
          <h2 className="font-display text-[34px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">{name}</h2>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[16px]">{sub}</p>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">{punch}</p>
          </div>
        </div>
        <FooterMobile index={index} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Кейс</Eyebrow>
        <h2 className="font-display text-[88px] font-bold text-[hsl(var(--slide-text))] leading-[1] mb-[18px] tracking-[-0.02em]">{name}</h2>
        <p className="text-[26px] text-[hsl(var(--slide-text-muted))] mb-[44px]">{sub}</p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[40px] py-[28px] max-w-[1400px]">
          <p className="text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{punch}</p>
        </div>
      </div>
      <Footer index={index} />
    </Stage>
  );
};

/* ========== Slide 5 — About the speaker ========== */
const SpeakerStat: React.FC<{ value: string; label: string; mobile?: boolean }> = ({ value, label, mobile }) => (
  <div
    className={`bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] ${
      mobile ? "px-[12px] py-[10px]" : "px-[28px] py-[22px]"
    }`}
  >
    <p
      className={`font-bold text-[hsl(var(--slide-text))] leading-[1.1] ${
        mobile ? "text-[15px]" : "text-[34px]"
      }`}
    >
      {value}
    </p>
    <p
      className={`text-[hsl(var(--slide-text-muted))] mt-[4px] ${
        mobile ? "text-[10px]" : "text-[16px]"
      }`}
    >
      {label}
    </p>
  </div>
);

export const S4b = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="h-[230px] relative shrink-0">
          <img src={photoMichael} alt="Михаэль Барбарич" className="w-full h-full object-cover object-[center_25%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--slide-bg))]" />
          <div className="absolute left-[16px] bottom-[14px] z-10">
            <p className="text-[12px] font-bold text-[hsl(var(--slide-text))]">Michael Barbarich</p>
            <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">Serial founder · 2 exits · Tel Aviv</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col px-[24px] pt-[14px]">
          <Eyebrow mobile>Твой ментор</Eyebrow>
          <h2 className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            16 лет. 7 продуктов. 2 экзита. Сейчас — строю с AI.
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[10px]">
            В 18 лет — первая компания с бюджетом $10. Дальше — RunEverywhere (50 000+ клиентов в 107 странах), CEO в канадском финтехе. Сейчас CEO MetaMinder и строю AI-продукты в одиночку.
          </p>
          <div className="grid grid-cols-2 gap-[6px]">
            <SpeakerStat mobile value="7 продуктов" label="2 экзита" />
            <SpeakerStat mobile value="50K+ клиентов" label="107 стран" />
            <SpeakerStat mobile value="$0 → $8M ARR" label="MetaMinder + портфолио" />
            <SpeakerStat mobile value="CEO & Solo AI builder" label="" />
          </div>
        </div>
        <FooterMobile index={5} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex h-full">
        <div className="w-[640px] h-full relative shrink-0 p-[80px]">
          <div className="w-full h-full relative rounded-[14px] overflow-hidden border border-[hsl(var(--slide-gold)/0.25)]">
            <img src={photoMichael} alt="Михаэль Барбарич" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--slide-bg))] via-transparent to-transparent" />
            <div className="absolute left-[24px] bottom-[20px] z-10">
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))]">Michael Barbarich</p>
              <p className="text-[14px] text-[hsl(var(--slide-text-muted))]">Serial founder · 2 exits · Tel Aviv</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center pr-[120px] py-[80px]">
          <Eyebrow>Твой ментор</Eyebrow>
          <h2 className="text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.01em] mb-[28px]">
            16 лет. 7 продуктов.<br />2 экзита. Сейчас — строю с AI.
          </h2>
          <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[36px] max-w-[820px]">
            В 18 лет построил первую компанию с бюджетом $10. Дальше — RunEverywhere, спортивный стартап с 50 000+ клиентами в 107 странах. CEO в крупной канадской финтех-компании. Сейчас CEO MetaMinder (B2B SaaS, от $0 до первых платящих клиентов за 7 месяцев) и строю AI-продукты в одиночку — без команды, без агентств.
          </p>
          <div className="grid grid-cols-2 gap-[16px] max-w-[760px]">
            <SpeakerStat value="7 продуктов" label="2 экзита" />
            <SpeakerStat value="50K+ клиентов" label="107 стран" />
            <SpeakerStat value="$0 → $8M ARR" label="MetaMinder + портфолио" />
            <SpeakerStat value="CEO & Solo AI builder" label="" />
          </div>
        </div>
      </div>
      <Footer index={5} />
    </Stage>
  );
};

export const S5 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Кейс</Eyebrow>
          <h2 className="font-display text-[34px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
            InterviewNinja
          </h2>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[16px]">
            2023–2024. Стартап, который я закрыл.
          </p>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[14px] space-y-[10px]">
            <p className="text-[13px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
              Всё казалось очевидным:{" "}
              <span className="text-[hsl(var(--slide-text))] font-semibold">рынок, проблема, спрос.</span>
            </p>
            <p className="text-[13px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
              Набрал команду. Тратил бюджет. Закрыл.
            </p>
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] leading-[1.3] pt-[4px]">
              Причина — строил наугад.
            </p>
          </div>
        </div>
        <FooterMobile index={6} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Кейс</Eyebrow>
        <h2 className="font-display text-[88px] font-bold text-[hsl(var(--slide-text))] leading-[1] mb-[14px] tracking-[-0.02em]">
          InterviewNinja
        </h2>
        <p className="text-[26px] text-[hsl(var(--slide-text-muted))] mb-[44px]">
          2023–2024. Стартап, который я закрыл.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[40px] py-[36px] max-w-[1500px] space-y-[18px]">
          <p className="text-[34px] text-[hsl(var(--slide-text)/0.9)] leading-[1.3]">
            Всё казалось очевидным:{" "}
            <span className="text-[hsl(var(--slide-text))] font-semibold">рынок, проблема, спрос.</span>
          </p>
          <p className="text-[34px] text-[hsl(var(--slide-text)/0.9)] leading-[1.3]">
            Набрал команду. Тратил бюджет. Закрыл.
          </p>
          <p className="text-[40px] font-bold text-[hsl(var(--slide-gold))] leading-[1.2] pt-[6px]">
            Причина — строил наугад.
          </p>
        </div>
      </div>
      <Footer index={6} />
    </Stage>
  );
};

/* ========== Slide 6 — Two columns ========== */
export const S6 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>InterviewNinja</Eyebrow>
          <div className="space-y-[8px]">
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[7px] px-[12px] py-[10px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[4px]">Что строил</p>
              <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]">
                AI-симулятор интервью для тех, кто ищет работу. Загружаешь резюме — получаешь вопросы под свою вакансию. Отвечаешь голосом, видео или текстом — как перед настоящим рекрутером. На выходе — детальный AI-фидбэк по каждому ответу.
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[7px] px-[12px] py-[10px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[4px]">Цифры</p>
              <ul className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.5]">
                <li>• 6 месяцев разработки</li>
                <li>• Команда: 4 человека</li>
                <li>• Вложено: ~$20k</li>
                <li>• Платящих клиентов: 7</li>
              </ul>
            </div>
          </div>
        </div>
        <FooterMobile index={7} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>InterviewNinja — анатомия</Eyebrow>
        <div className="grid grid-cols-2 gap-[28px] max-w-[1500px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[36px] py-[32px]">
            <h3 className="text-[34px] font-bold text-[hsl(var(--slide-gold))] mb-[20px]">Что строил</h3>
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.5]">
              AI-симулятор интервью для тех, кто ищет работу. Загружаешь резюме — получаешь вопросы под свою вакансию. Отвечаешь <span className="text-[hsl(var(--slide-gold))]">голосом, видео или текстом</span> — как перед настоящим рекрутером. На выходе — детальный AI-фидбэк по каждому ответу.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[36px] py-[32px]">
            <h3 className="text-[34px] font-bold text-[hsl(var(--slide-gold))] mb-[20px]">Цифры</h3>
            <ul className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.7] space-y-[2px]">
              <li>• 6 месяцев разработки</li>
              <li>• Команда: 4 человека</li>
              <li>• Вложено: <span className="text-[hsl(var(--slide-gold))] font-bold">~$20k</span></li>
              <li>• Платящих клиентов: <span className="text-[hsl(var(--slide-gold))] font-bold">7</span></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer index={7} />
    </Stage>
  );
};

/* ========== Slide 7 — Numbered list ========== */
const Numbered: React.FC<{ index: number; eyebrow: string; title: string; items: string[]; closing?: string }> = ({
  index,
  eyebrow,
  title,
  items,
  closing,
}) => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>{eyebrow}</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[12px]">{title}</h2>
          <ol className="space-y-[6px]">
            {items.map((t, i) => (
              <li key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[7px] flex gap-[8px]">
                <span className="font-mono text-[12px] text-[hsl(var(--slide-gold))] font-bold shrink-0">{i + 1}</span>
                <span className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.35]">{t}</span>
              </li>
            ))}
          </ol>
          {closing && <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold mt-[10px] leading-[1.4]">{closing}</p>}
        </div>
        <FooterMobile index={index} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] max-w-[1500px]">
          {title}
        </h2>
        <ol className="space-y-[14px] max-w-[1500px]">
          {items.map((t, i) => (
            <li key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[22px] flex gap-[24px] items-baseline">
              <span className="font-mono text-[40px] text-[hsl(var(--slide-gold))] font-bold leading-none shrink-0">{i + 1}</span>
              <span className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.35]">{t}</span>
            </li>
          ))}
        </ol>
        {closing && <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold mt-[28px] max-w-[1500px]">{closing}</p>}
      </div>
      <Footer index={index} />
    </Stage>
  );
};

export const S7 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Почему не получилось</Eyebrow>
          <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
            Я думал, что знаю рынок лучше всех.
          </h2>
          <div className="space-y-[8px]">
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[12px] py-[10px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[4px]">Контекст</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                Я был CEO, проводил десятки собеседований в неделю. Видел онлайн-школы, поток выпускников, как они не могут найти работу. На одну вакансию — 1 500 резюме.
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[12px] py-[10px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[4px]">Логика</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                Проблема — реальная. Решение — очевидно: симулятор интервью. С аудиторией не пошёл говорить ни разу.
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[12px] py-[10px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[4px]">Что выяснилось</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                Проблема была верной. Решение — нет. Людям не нужен был симулятор. Им нужен был результат — работа. А его мы не давали.
              </p>
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.12)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px] mt-[10px]">
            <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
              Друзья хвалили. Рынок — не платил.
            </p>
          </div>
        </div>
        <FooterMobile index={8} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Почему не получилось</Eyebrow>
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.01em] mb-[36px] max-w-[1500px]">
          Я думал, что знаю рынок лучше всех.
        </h2>
        <div className="grid grid-cols-3 gap-[20px] max-w-[1600px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[26px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Контекст</p>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.92)] leading-[1.45]">
              Я был CEO, проводил десятки собеседований в неделю. Видел онлайн-школы, поток выпускников, как они не могут найти работу. На одну нашу вакансию — <span className="text-[hsl(var(--slide-gold))] font-semibold">1 500 резюме</span>.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[26px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Логика</p>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.92)] leading-[1.45]">
              Проблема — реальная. Решение — очевидно: симулятор интервью. С аудиторией <span className="text-[hsl(var(--slide-text))] font-semibold">не пошёл говорить ни разу</span>.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[26px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Что выяснилось</p>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.92)] leading-[1.45]">
              Проблема была верной. Решение — нет. Людям не нужен был симулятор. Им нужен был <span className="text-[hsl(var(--slide-gold))] font-semibold">результат — работа</span>. А его мы не давали.
            </p>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[24px] mt-[28px] max-w-[1600px]">
          <p className="text-[30px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">
            Красивый интерфейс. Понятный флоу. Друзья хвалили.{" "}
            <span className="text-[hsl(var(--slide-gold))]">Рынок — не платил.</span>
          </p>
        </div>
      </div>
      <Footer index={8} />
    </Stage>
  );
};

export const S8 = () => {
  const isMobile = useIsMobile();
  const steps = [
    {
      kicker: "01",
      title: "Глубокий ресёрч рынка",
      body: "AI-инструменты делают за день то, на что раньше уходил месяц ручной работы. Размер рынка, тренды, поведение, цены — всё в одном слое данных.",
    },
    {
      kicker: "02",
      title: "Анализ каждого конкурента",
      body: "Каждый сайт, каждое приложение, каждый флоу. Как устроены, как монетизируют, за что платят — и платят ли вообще.",
    },
    {
      kicker: "03",
      title: "Глубинные интервью",
      body: "Найти людей, которые реально страдают этой проблемой. В каждом разговоре валидировать: то, что я строю — им вообще нужно?",
    },
    {
      kicker: "04",
      title: "Только потом — код",
      body: "Свести рынок + конкурентов + живые слова аудитории в одну картину. И только тогда приступать к разработке. Не раньше.",
    },
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Что я сделал бы сейчас</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
            Сначала — ресёрч. Код — последним.
          </h2>
          <div className="space-y-[7px]">
            {steps.map((s) => (
              <div
                key={s.kicker}
                className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[12px] py-[9px] flex gap-[10px]"
              >
                <span className="font-mono text-[12px] text-[hsl(var(--slide-gold))] font-bold leading-none shrink-0 mt-[2px]">
                  {s.kicker}
                </span>
                <div>
                  <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[2px]">
                    {s.title}
                  </p>
                  <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <FooterMobile index={9} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Что я сделал бы сейчас</Eyebrow>
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.01em] mb-[36px] max-w-[1500px]">
          Сначала — ресёрч. Код — последним.
        </h2>
        <div className="grid grid-cols-2 gap-[20px] max-w-[1600px]">
          {steps.map((s) => (
            <div
              key={s.kicker}
              className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[26px] flex gap-[22px]"
            >
              <span className="font-mono text-[40px] text-[hsl(var(--slide-gold))] font-bold leading-none shrink-0">
                {s.kicker}
              </span>
              <div>
                <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[10px]">
                  {s.title}
                </p>
                <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer index={9} />
    </Stage>
  );
};

export const S9 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Кейс — успех</Eyebrow>
          <h2 className="font-display text-[30px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[4px]">
            MetaMinder
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[12px]">
            2023 — сейчас. B2B SaaS. Обучение сотрудников через AI-агентов.
          </p>
          <div className="space-y-[7px]">
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[12px] py-[9px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[3px]">v1 — провал</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                Долго разрабатывали. Никто не покупал. Знакомая история.
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[12px] py-[9px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[3px]">Как нашли пивот</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                Анализ рынка → куда движется обучение. Кто из конкурентов поднял раунды и почему. Взяли лучшее от каждого и адаптировали под тренд: AI-агенты, полная автоматизация.
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-gold)/0.12)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                <span className="font-bold text-[hsl(var(--slide-text))]">7 месяцев</span> — первый платящий B2B-клиент. Сейчас — клиенты на всех континентах.
              </p>
            </div>
            <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] leading-[1.3] pt-[2px]">
              Сначала — кто, зачем и какую проблему. Только потом — код.
            </p>
          </div>
        </div>
        <FooterMobile index={10} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Кейс — успех</Eyebrow>
        <h2 className="font-display text-[80px] font-bold text-[hsl(var(--slide-text))] leading-[1] mb-[14px] tracking-[-0.02em]">
          MetaMinder
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[40px]">
          2023 — сейчас. B2B SaaS. Обучение сотрудников через AI-агентов.
        </p>
        <div className="grid grid-cols-2 gap-[20px] max-w-[1600px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[26px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">v1 — провал</p>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
              Долго разрабатывали. Никто не покупал. Знакомая история.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[26px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Как нашли пивот</p>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
              Анализ рынка → куда движется обучение. Кто из конкурентов поднял раунды и почему. Взяли лучшее от каждого и адаптировали под тренд: <span className="text-[hsl(var(--slide-gold))]">AI-агенты, полная автоматизация</span>.
            </p>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[24px] mt-[24px] max-w-[1600px]">
          <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">
            <span className="text-[hsl(var(--slide-gold))]">7 месяцев</span> — первый платящий B2B-клиент. Сейчас — клиенты на всех континентах.
          </p>
          <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mt-[10px]">
            Сначала определили: кто, зачем и какую проблему решаем. Только потом начали строить.
          </p>
        </div>
      </div>
      <Footer index={10} />
    </Stage>
  );
};

export const S10 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Кейс — в работе</Eyebrow>
          <h2 className="font-display text-[30px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[4px]">
            Mikey
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[12px]">
            2025 — сейчас. AI-matchmaking для Израиля.
          </p>
          <div className="space-y-[7px]">
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[12px] py-[9px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[3px]">Триггер</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                Увидел Boardy — AI-matchmaker для бизнес-нетворкинга. Никаких приложений: чат, общение, реальные знакомства. Понял — за этим будущее.
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[12px] py-[9px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[3px]">Ниша</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                В нетворкинге монетизация трудна. Та же модель в дейтинге уже работает в США — есть AI-matchmaking стартапы с раундами. Перенёс модель.
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[12px] py-[9px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[3px]">Метод</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                Не строил в тишине. Каждую итерацию показывал ЦА, друзьям, знакомым. Тонна критики → правки → меньше критики → лучше продукт.
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-gold)/0.12)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                Сегодня — <span className="font-bold text-[hsl(var(--slide-text))]">бета</span>. Интерфейс, тон и функционал — то, что аудитория реально просила.
              </p>
            </div>
            <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] leading-[1.3]">
              Валидация — это не разовый акт. Это ритм.
            </p>
          </div>
        </div>
        <FooterMobile index={11} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Кейс — в работе</Eyebrow>
        <h2 className="font-display text-[80px] font-bold text-[hsl(var(--slide-text))] leading-[1] mb-[14px] tracking-[-0.02em]">
          Mikey
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[36px]">
          2025 — сейчас. AI-matchmaking для Израиля.
        </p>
        <div className="grid grid-cols-3 gap-[18px] max-w-[1620px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[24px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Триггер</p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
              Увидел <span className="text-[hsl(var(--slide-gold))]">Boardy</span> — AI-matchmaker для бизнес-нетворкинга. Никаких приложений: чат, общение, реальные знакомства. Понял — за этим будущее.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[24px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Ниша</p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
              В нетворкинге монетизация трудна. Та же модель в <span className="text-[hsl(var(--slide-gold))]">дейтинге</span> уже работает в США — есть AI-matchmaking стартапы с раундами. Перенёс модель.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[24px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Метод</p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
              Не строил в тишине. Каждую итерацию показывал ЦА, друзьям, знакомым. Тонна критики → правки → меньше критики → лучше продукт.
            </p>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[22px] mt-[22px] max-w-[1620px]">
          <p className="text-[26px] text-[hsl(var(--slide-text)/0.92)] leading-[1.3]">
            Сегодня — <span className="text-[hsl(var(--slide-gold))] font-bold">бета</span>. Интерфейс, тон и функционал — то, что аудитория реально просила.
          </p>
          <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mt-[10px]">
            Валидация — это не разовый акт. Это ритм.
          </p>
        </div>
      </div>
      <Footer index={11} />
    </Stage>
  );
};

export const S11 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Кейс — поймать момент</Eyebrow>
          <h2 className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[4px]">
            RunEverywhere
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[12px]">
            2020 — ковид. Виртуальные забеги. 50 000+ клиентов в 107 странах.
          </p>
          <div className="space-y-[7px]">
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[12px] py-[9px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[3px]">Триггер</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                Я сам бегаю. Ковид — все марафоны и забеги отменили. А желание бегать и соревноваться — никуда не делось.
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[12px] py-[9px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[3px]">Действие</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                Мини-команда. Прототип за 3 месяца. Я сам в рынке — знаю проблему. Поговорил с десятками бегунов, провалидировал готовность платить.
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[12px] py-[9px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[3px]">Сигнал рынка</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                Параллельно появлялись похожие сервисы — у них покупали много. Подтверждение: спрос есть, и он сейчас.
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-gold)/0.12)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                Запустили — <span className="font-bold text-[hsl(var(--slide-text))]">прибыль с первого месяца</span>. Полетело.
              </p>
            </div>
            <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] leading-[1.3]">
              Лучше раньше и сыро, чем вовремя и никому не нужно.
            </p>
          </div>
        </div>
        <FooterMobile index={12} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Кейс — поймать момент</Eyebrow>
        <h2 className="font-display text-[80px] font-bold text-[hsl(var(--slide-text))] leading-[1] mb-[14px] tracking-[-0.02em]">
          RunEverywhere
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[36px]">
          2020 — ковид. Виртуальные забеги. 50 000+ клиентов в 107 странах.
        </p>
        <div className="grid grid-cols-3 gap-[18px] max-w-[1620px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[24px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Триггер</p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
              Я сам бегаю. Ковид отменил все марафоны и забеги. А желание соревноваться — никуда не делось.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[24px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Действие</p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
              Мини-команда. Прототип за <span className="text-[hsl(var(--slide-gold))]">3 месяца</span>. Сам в рынке — знаю проблему. Поговорил с десятками бегунов, проверил готовность платить.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[24px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Сигнал рынка</p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
              Параллельно появлялись похожие сервисы — у них покупали много. Спрос есть, и он <span className="text-[hsl(var(--slide-gold))]">сейчас</span>.
            </p>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[22px] mt-[22px] max-w-[1620px]">
          <p className="text-[26px] text-[hsl(var(--slide-text)/0.92)] leading-[1.3]">
            Запустили — <span className="text-[hsl(var(--slide-gold))] font-bold">прибыль с первого месяца</span>. Полетело.
          </p>
          <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mt-[10px]">
            Лучше раньше и сыро, чем вовремя и никому не нужно.
          </p>
        </div>
      </div>
      <Footer index={12} />
    </Stage>
  );
};

/* ========== Slide 12 — Big quote ========== */
export const S12 = () => (
  <div className="w-full h-full relative">
    <PullQuote sub="">
      Валидация — это не доказательство того, что идея хорошая. Это попытка её убить.
    </PullQuote>
    <Footer index={13} />
  </div>
);

/* ========== Slides 14–19 — Three anchors of validation ========== */

const AnchorCard: React.FC<{
  num: string;
  title: string;
  body: string;
  active?: boolean;
  mobile?: boolean;
}> = ({ num, title, body, active, mobile }) => (
  <div
    className={`${
      active
        ? "bg-[hsl(var(--slide-gold)/0.12)] border-[hsl(var(--slide-gold))]"
        : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-gold)/0.2)]"
    } border rounded-[14px] ${mobile ? "px-[12px] py-[10px]" : "px-[28px] py-[24px]"}`}
  >
    <p
      className={`font-mono ${
        active ? "text-[hsl(var(--slide-gold))]" : "text-[hsl(var(--slide-text-muted))]"
      } ${mobile ? "text-[10px] mb-[4px]" : "text-[14px] mb-[10px]"} font-bold tracking-[0.18em]`}
    >
      {num}
    </p>
    <p
      className={`font-bold text-[hsl(var(--slide-text))] leading-[1.2] ${
        mobile ? "text-[12px] mb-[4px]" : "text-[24px] mb-[10px]"
      }`}
    >
      {title}
    </p>
    <p
      className={`text-[hsl(var(--slide-text)/0.85)] leading-[1.45] ${
        mobile ? "text-[10px]" : "text-[17px]"
      }`}
    >
      {body}
    </p>
  </div>
);

/* ========== Slide 14 — Competitors are a good sign ========== */
export const S11c = () => {
  const isMobile = useIsMobile();
  const points = [
    {
      k: "Есть конкуренты",
      v: "Спрос подтверждён. Кто-то уже зарабатывает на этой боли — значит, рынок живой.",
      tone: "good",
    },
    {
      k: "Один-два конкурента",
      v: "Рынок не «занят». Это значит, что проблема существует и ты копаешь в правильную сторону.",
      tone: "good",
    },
    {
      k: "Конкурентов нет совсем",
      v: "Либо ты не сделал ресёрч, либо ниша без спроса. И то, и другое — красный флаг.",
      tone: "bad",
    },
    {
      k: "Что делать дальше",
      v: "Найди своё уникальное позиционирование — чем ты лучше или иначе. И продавай эту разницу.",
      tone: "good",
    },
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Перед ресёрчем · правда о конкурентах</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Конкуренты есть всегда. И это <span className="text-[hsl(var(--slide-gold))]">хорошо</span>.
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[10px]">
            Если идея стоящая — кто-то уже её решает. Нет конкурентов = нет спроса. Не бойся их — это знак, что рынок живой.
          </p>
          <div className="grid grid-cols-2 gap-[6px]">
            {points.map((p) => (
              <div
                key={p.k}
                className={`bg-[hsl(var(--slide-bg-alt))] border rounded-[7px] px-[10px] py-[8px] ${
                  p.tone === "bad"
                    ? "border-[hsl(var(--slide-gold)/0.45)]"
                    : "border-[hsl(var(--slide-gold)/0.2)]"
                }`}
              >
                <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">{p.k}</p>
                <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
        <FooterMobile index={14} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Перед ресёрчем · правда о конкурентах</Eyebrow>
        <h2 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] mb-[24px]">
          Конкуренты есть всегда. И это <span className="text-[hsl(var(--slide-gold))]">хорошо</span>.
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[36px] max-w-[1500px]">
          Если идея стоящая и проблема реальна — кто-то уже её решает. <span className="text-[hsl(var(--slide-gold))]">Нет конкурентов = нет спроса.</span> Не бойся их — наоборот, это сигнал, что за это платят. Твоя задача не уничтожить их, а найти своё место рядом.
        </p>
        <div className="grid grid-cols-4 gap-[18px] max-w-[1620px]">
          {points.map((p) => (
            <div
              key={p.k}
              className={`bg-[hsl(var(--slide-bg-alt))] border rounded-[14px] px-[24px] py-[22px] ${
                p.tone === "bad"
                  ? "border-[hsl(var(--slide-gold)/0.5)]"
                  : "border-[hsl(var(--slide-gold)/0.25)]"
              }`}
            >
              <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">
                {p.k}
              </p>
              <p className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{p.v}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer index={14} />
    </Stage>
  );
};

/* ========== Slide 15 — Three anchors of validation ========== */
export const S12a = () => {
  const isMobile = useIsMobile();
  const cards = [
    {
      num: "01",
      title: "Анализ рынка",
      body: "Размер, динамика, тренды, ниши. Где деньги, где переоценено, куда движется индустрия.",
    },
    {
      num: "02",
      title: "Анализ конкурентов",
      body: "Кто уже на рынке, какой у них трафик, за что им платят и где у них слабо.",
    },
    {
      num: "03",
      title: "Customer Development",
      body: "Реальные разговоры с ЦА. Боль ли это вообще — или ты её придумал.",
    },
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Валидация — три якоря</Eyebrow>
          <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
            Три проверки до первого пикселя.
          </h2>
          <div className="space-y-[7px]">
            {cards.map((c) => (
              <AnchorCard key={c.num} mobile {...c} />
            ))}
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[10px] leading-[1.4]">
            Сложить все три — и только тогда строить.
          </p>
        </div>
        <FooterMobile index={15} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Валидация — три якоря</Eyebrow>
        <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] mb-[40px]">
          Три проверки до первого пикселя.
        </h2>
        <div className="grid grid-cols-3 gap-[20px] max-w-[1620px]">
          {cards.map((c) => (
            <AnchorCard key={c.num} {...c} />
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mt-[28px] max-w-[1620px]">
          Сложить все три — и только тогда строить. Пропустишь хоть один — рискуешь повторить InterviewNinja.
        </p>
      </div>
      <Footer index={15} />
    </Stage>
  );
};

/* ========== Slide 15 — Anchor 1: Market Research intro ========== */
export const S12b = () => {
  const isMobile = useIsMobile();
  const points = [
    {
      k: "Размер и динамика",
      v: "Сколько людей реально могут купить. Растёт рынок или сжимается. Куда смотрят инвесторы.",
    },
    {
      k: "Тренды и окно",
      v: "Что изменилось за 1–2 года и делает идею реалистичной именно сейчас. Технология, поведение, регуляции.",
    },
    {
      k: "Незакрытые ниши",
      v: "На что жалуются пользователи, но никто не чинит. Какие сегменты игнорируют большие игроки.",
    },
    {
      k: "Риски",
      v: "Платформенные, регуляторные, угроза от больших платформ. Где можно умереть, не начав.",
    },
  ];
  const tools = [
    "Statista",
    "Crunchbase",
    "Google Trends",
    "Reddit",
    "App Store",
    "G2 Reviews",
    "SimilarWeb",
    "Product Hunt",
    "AI Deep Research",
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Якорь 1 · Market Research</Eyebrow>
          <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Сначала пойми рынок.
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[10px]">
            То, на что раньше уходили недели ручной работы, AI делает за 30 минут. Без этого слоя ты строишь вслепую.
          </p>
          <div className="grid grid-cols-2 gap-[6px]">
            {points.map((p) => (
              <div
                key={p.k}
                className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[10px] py-[8px]"
              >
                <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">{p.k}</p>
                <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{p.v}</p>
              </div>
            ))}
          </div>
          <div className="mt-[10px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[7px] px-[10px] py-[8px]">
            <p className="text-[8.5px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] font-semibold mb-[4px]">
              Инструменты
            </p>
            <div className="flex flex-wrap gap-[4px]">
              {tools.map((t) => (
                <span
                  key={t}
                  className="text-[9px] text-[hsl(var(--slide-text)/0.9)] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[4px] px-[6px] py-[2px]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <FooterMobile index={16} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Якорь 1 · Market Research</Eyebrow>
        <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] mb-[24px]">
          Сначала пойми рынок.
        </h2>
        <p className="text-[26px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[36px] max-w-[1500px]">
          То, на что раньше уходили недели ручной работы, AI делает за <span className="text-[hsl(var(--slide-gold))]">30 минут</span>. Без этого слоя ты строишь вслепую.
        </p>
        <div className="grid grid-cols-4 gap-[18px] max-w-[1620px] mb-[28px]">
          {points.map((p) => (
            <div
              key={p.k}
              className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[24px] py-[22px]"
            >
              <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">
                {p.k}
              </p>
              <p className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{p.v}</p>
            </div>
          ))}
        </div>
        <div className="max-w-[1620px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[22px]">
          <p className="text-[13px] uppercase tracking-[0.22em] text-[hsl(var(--slide-gold))] font-semibold mb-[14px]">
            Инструменты ресёрча
          </p>
          <div className="flex flex-wrap gap-[10px]">
            {tools.map((t) => (
              <span
                key={t}
                className="text-[16px] text-[hsl(var(--slide-text))] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] px-[14px] py-[7px]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Footer index={16} />
    </Stage>
  );
};

/* ========== Slide 16 — AI 80% / Human 20% ========== */
export const S12c = () => {
  const isMobile = useIsMobile();
  const aiDoes = [
    "Парсит десятки источников за один прогон",
    "Находит конкурентов, цены, позиционирование",
    "Достаёт цитаты пользователей с Reddit, G2, отзывов",
    "Сводит инсайты в структурированный отчёт",
  ];
  const youDo = [
    "Открой сайты топ-5 конкурентов руками",
    "Прочитай 10–20 живых отзывов и статей",
    "Перепроверь ключевые цифры в источниках",
    "Сложи свою личную картину рынка в голове",
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Правило · AI ≠ замена тебя</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            AI делает <span className="text-[hsl(var(--slide-gold))]">80%</span>. Остальные <span className="text-[hsl(var(--slide-gold))]">20%</span> — твои.
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[10px]">
            Deep Research — мощная база, но он ошибается и придумывает. Если построить продукт только на отчёте AI и он не выстрелит — обвинять будет некого. Финальная валидация всегда на фаундере.
          </p>
          <div className="grid grid-cols-2 gap-[6px] mb-[8px]">
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[7px] px-[10px] py-[8px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[4px]">AI делает</p>
              <ul className="text-[9px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4] space-y-[2px]">
                {aiDoes.map((x) => <li key={x}>• {x}</li>)}
              </ul>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[7px] px-[10px] py-[8px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[4px]">Ты делаешь</p>
              <ul className="text-[9px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4] space-y-[2px]">
                {youDo.map((x) => <li key={x}>• {x}</li>)}
              </ul>
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.12)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
            <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
              Слепо доверять AI = строить вслепую. Используй как базу — валидируй руками.
            </p>
          </div>
        </div>
        <FooterMobile index={17} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Правило · AI ≠ замена тебя</Eyebrow>
        <h2 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] mb-[24px]">
          AI делает <span className="text-[hsl(var(--slide-gold))]">80%</span> работы. Остальные <span className="text-[hsl(var(--slide-gold))]">20%</span> — твои.
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[36px] max-w-[1500px]">
          Deep Research — мощная база. Но AI ошибается, придумывает цифры и упускает контекст. Если построить продукт только на его отчёте и он не выстрелит — <span className="text-[hsl(var(--slide-gold))]">обвинять будет некого</span>. Финальная валидация всегда на фаундере.
        </p>
        <div className="grid grid-cols-2 gap-[20px] max-w-[1620px] mb-[24px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[26px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">
              AI делает (80%)
            </p>
            <ul className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.6] space-y-[6px]">
              {aiDoes.map((x) => <li key={x}>• {x}</li>)}
            </ul>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.45)] rounded-[14px] px-[32px] py-[26px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">
              Ты делаешь руками (20%)
            </p>
            <ul className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.6] space-y-[6px]">
              {youDo.map((x) => <li key={x}>• {x}</li>)}
            </ul>
          </div>
        </div>
        <div className="max-w-[1620px] bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[28px] py-[18px]">
          <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45]">
            Слепо доверять AI = строить вслепую. Используй как базу, но <span className="text-[hsl(var(--slide-gold))]">проверь руками</span> — иначе рискуешь построить то, что никому не нужно.
          </p>
        </div>
      </div>
      <Footer index={17} />
    </Stage>
  );
};

/* ========== Slide 17 — Research Agent (FoundersLens) ========== */
export const S12d = () => {
  const isMobile = useIsMobile();
  const cards = [
    { k: "Анализ рынка", v: "Размер, динамика, ключевые игроки." },
    { k: "Ключевые слова", v: "Объёмы, конкуренция, intent." },
    { k: "Реклама конкурентов", v: "Что крутят и на каких креативах." },
    { k: "Трафик и источники", v: "География, каналы, поведение." },
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Шаг 2 · Мой AI Research Agent</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Когда промпта мало — подключаешь агента.
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[10px]">
            Подхватывает там, где Deep Research заканчивается, и доводит ресёрч до полноценной картинки.
          </p>
          <div className="grid grid-cols-2 gap-[6px] mb-[8px]">
            {cards.map((c) => (
              <div
                key={c.k}
                className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[10px] py-[8px]"
              >
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{c.k}</p>
                <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.v}</p>
              </div>
            ))}
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.12)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px] flex items-center gap-[10px]">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                <span className="font-bold text-[hsl(var(--slide-text))]">FoundersLens</span> — агент прогоняет твою идею.
              </p>
              <p className="text-[8.5px] font-mono text-[hsl(var(--slide-gold))] mt-[2px]">
                founders-circle.space/agents/lens
              </p>
            </div>
            <div className="bg-white p-[3px] rounded-[3px] flex-shrink-0">
              <QRCodeSVG
                value="https://founders-circle.space/agents/lens"
                size={48}
                level="M"
                bgColor="#ffffff"
                fgColor="#0A0E1A"
              />
            </div>
          </div>
        </div>
        <FooterMobile index={18} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Шаг 2 · Мой AI Research Agent</Eyebrow>
        <h2 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] mb-[24px]">
          Когда промпта мало — подключаешь <span className="text-[hsl(var(--slide-gold))]">агента</span>.
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[32px] max-w-[1500px]">
          В дополнение к Deep Research я собрал отдельного AI-агента — <span className="text-[hsl(var(--slide-text))] font-semibold">FoundersLens</span>. Подхватывает там, где Deep Research заканчивается, и доводит ресёрч до полноценной картинки.
        </p>
        <div className="grid grid-cols-4 gap-[18px] max-w-[1620px]">
          {cards.map((c) => (
            <div
              key={c.k}
              className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[24px] py-[22px]"
            >
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[8px]">{c.k}</p>
              <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{c.v}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold))] rounded-[12px] px-[36px] py-[22px] mt-[28px] max-w-[1620px] flex items-center justify-between gap-[24px]">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] mb-[6px]">
              Бонус для участников
            </p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
              <span className="font-bold">FoundersLens</span> — агент прогоняет твою идею за один запуск.
            </p>
            <p className="font-mono text-[14px] text-[hsl(var(--slide-gold))] font-bold mt-[6px]">
              founders-circle.space/agents/lens →
            </p>
          </div>
          <div className="bg-white p-[10px] rounded-[8px] flex-shrink-0">
            <QRCodeSVG
              value="https://founders-circle.space/agents/lens"
              size={120}
              level="M"
              bgColor="#ffffff"
              fgColor="#0A0E1A"
            />
          </div>
        </div>
      </div>
      <Footer index={18} />
    </Stage>
  );
};

/* ========== Slide 18 — Anchor 2: Competitor analysis (find + traffic) ========== */
export const S12e = () => {
  const isMobile = useIsMobile();
  const where = [
    "Google по ключевым запросам ЦА",
    "Product Hunt, App Store, Google Play",
    "Reddit, нишевые форумы, чаты",
    "Crunchbase — кто поднял раунды",
    "G2 / Capterra / Trustpilot",
    "Реклама в Facebook Ad Library",
  ];
  const signals = [
    { k: "Платный трафик", v: "Если крутят рекламу месяцами — окупается. Похожие креативы → рабочая боль." },
    { k: "Органика", v: "SimilarWeb / Semrush. Растёт трафик — растёт спрос. Падает — рынок уходит." },
    { k: "Деньги от инвесторов", v: "Crunchbase: подняли раунд в этой нише за 12 мес — рынок валидирован за тебя." },
    { k: "Активность пользователей", v: "Отзывы, апдейты, ответы на жалобы. Живой продукт vs заброшенный." },
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Якорь 2 · Конкуренты</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
            Сначала найди. Потом проверь, что ими правда пользуются.
          </h2>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[12px] py-[9px] mb-[8px]">
            <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[5px]">Где искать</p>
            <ul className="text-[9.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] space-y-[1px]">
              {where.map((w) => (
                <li key={w}>• {w}</li>
              ))}
            </ul>
          </div>
          <p className="text-[10px] font-bold text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.15em] mb-[5px]">
            На что смотреть
          </p>
          <div className="grid grid-cols-2 gap-[6px]">
            {signals.map((s) => (
              <div
                key={s.k}
                className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[10px] py-[8px]"
              >
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{s.k}</p>
                <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
        <FooterMobile index={19} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Якорь 2 · Конкуренты</Eyebrow>
        <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] mb-[32px] max-w-[1620px]">
          Сначала найди. Потом проверь, что ими <span className="text-[hsl(var(--slide-gold))]">правда пользуются</span>.
        </h2>
        <div className="grid grid-cols-3 gap-[20px] max-w-[1620px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[24px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Где искать</p>
            <ul className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.6] space-y-[4px]">
              {where.map((w) => (
                <li key={w}>• {w}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-[16px]">
            {signals.map((s) => (
              <div
                key={s.k}
                className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[24px] py-[20px]"
              >
                <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[8px]">{s.k}</p>
                <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mt-[24px] max-w-[1620px]">
          Нет рекламы, нет органики, нет инвестиций, нет апдейтов — это не «нет конкурентов». Это <span className="text-[hsl(var(--slide-text))] font-semibold">нет рынка</span>.
        </p>
      </div>
      <Footer index={19} />
    </Stage>
  );
};

/* ========== Slide 19 — Anchor 2: What to learn from competitors ========== */
export const S12f = () => {
  const isMobile = useIsMobile();
  const watch = [
    { k: "Цены и упаковка", v: "За что готовы платить. Где предел готовности платить." },
    { k: "Онбординг", v: "Где люди отваливаются. Что их блокирует на первом экране." },
    { k: "Жалобы в отзывах", v: "Чего им не хватает. Это твоё место для дифференциации." },
    { k: "Флоу до AHA", v: "За какое количество шагов человек получает ценность." },
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Что копировать — а что нет</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Inspired by — да. Copy-paste — нет.
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[10px]">
            UX-паттерны, которые рынок уже валидировал, переиспользовать можно и нужно. Бренд, тексты, визуал и контент — нет.
          </p>
          <p className="text-[10px] font-bold text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.15em] mb-[5px]">
            На что смотреть
          </p>
          <div className="grid grid-cols-2 gap-[6px] mb-[8px]">
            {watch.map((w) => (
              <div
                key={w.k}
                className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[10px] py-[8px]"
              >
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{w.k}</p>
                <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{w.v}</p>
              </div>
            ))}
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.12)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
            <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
              Возьми лучшее у каждого. Адаптируй под свою нишу. Добавь то, чего у них нет.
            </p>
          </div>
        </div>
        <FooterMobile index={20} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Что копировать — а что нет</Eyebrow>
        <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] mb-[24px] max-w-[1620px]">
          <span className="text-[hsl(var(--slide-gold))]">Inspired by</span> — да. Copy-paste — нет.
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[28px] max-w-[1620px]">
          UX-паттерны, которые рынок уже валидировал, переиспользовать можно и нужно. Бренд, тексты, визуал и контент — нет.
        </p>
        <div className="grid grid-cols-2 gap-[20px] max-w-[1620px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[24px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">
              На что смотреть у конкурентов
            </p>
            <div className="space-y-[12px]">
              {watch.map((w) => (
                <div key={w.k}>
                  <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{w.k}</p>
                  <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{w.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[24px] flex flex-col">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">
              Правила приличия
            </p>
            <ul className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.55] space-y-[6px]">
              <li>✓ Бери паттерны и решения, не дизайн и копирайт</li>
              <li>✓ Если рынок валидировал модель — повторяй, отличайся в нише и UX</li>
              <li>✓ Всегда добавляй свою отличительную ценность</li>
              <li>✗ Не копируй визуал, бренд, тексты — это не работа, это плагиат</li>
            </ul>
            <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[20px] py-[14px] mt-[18px]">
              <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.4]">
                Возьми лучшее у каждого. Адаптируй под нишу. Добавь то, чего у них нет.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer index={20} />
    </Stage>
  );
};

/* ========== Slide 13 — Method intro ========== */
export const S13 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Якорь 3 · Customer Development</Eyebrow>
          <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
            Customer Development.
          </h2>
          <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[12px]">
            Лучший способ понять: то, что ты строишь — это <span className="text-[hsl(var(--slide-text))] font-semibold">реальная проблема, которую стоит решать</span>, или ты её придумал, а рынок давно решил её без тебя.
          </p>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">
              10 разговоров — чтобы убедиться, что это правда нужно.
            </p>
          </div>
        </div>
        <FooterMobile index={21} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Якорь 3 · Customer Development</Eyebrow>
        <h2 className="font-display text-[80px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px] tracking-[-0.02em]">
          Customer Development.
        </h2>
        <p className="text-[28px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[36px] max-w-[1500px]">
          Лучший способ понять: то, что ты строишь — это <span className="text-[hsl(var(--slide-text))] font-semibold">реальная проблема, которую стоит решать</span>, или ты её придумал, а рынок давно решил её без тебя.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[40px] py-[28px] max-w-[1500px]">
          <p className="text-[40px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
            10 разговоров — чтобы убедиться, что твоя гипотеза верна и это правда кому-то нужно.
          </p>
        </div>
      </div>
      <Footer index={21} />
    </Stage>
  );
};

/* ========== Slide 22 — Whom to interview (friends/family are OK if they are TA) ========== */
export const S14 = () => {
  const isMobile = useIsMobile();
  const yes = [
    { k: "Целевая аудитория", v: "Те, у кого реально есть эта проблема — независимо от того, знаешь ты их или нет." },
    { k: "Друзья и семья — если они ЦА", v: "Их легче найти и попросить 30 минут. Не отказывайся от доступного канала." },
    { k: "Знакомые из ниши", v: "Коллеги, бывшие клиенты, люди из чатов и сообществ. Они дадут честный контекст." },
  ];
  const no = [
    { k: "Прямые вопросы «купишь / не купишь»", v: "Ответ всегда вежливый и бесполезный. Спрашивай про прошлый опыт, а не про будущее." },
    { k: "Презентация идеи в лоб", v: "Как только ты «продаёшь» — собеседник начинает поддакивать. Ты слышишь себя, а не его." },
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Кого интервьюировать</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[8px]">
            Друзей и семью — <span className="text-[hsl(var(--slide-gold))]">можно</span>. Если они ЦА.
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[10px]">
            Главное — не <span className="text-[hsl(var(--slide-text))]">кого</span> ты спрашиваешь, а <span className="text-[hsl(var(--slide-text))]">как</span>. Доступные люди — это плюс. А «купишь / не купишь» — табу для всех.
          </p>
          <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[4px]">Можно интервьюировать</p>
          <div className="space-y-[5px] mb-[8px]">
            {yes.map((y) => (
              <div key={y.k} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[7px]">
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] mb-[1px]">{y.k}</p>
                <p className="text-[9px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{y.v}</p>
              </div>
            ))}
          </div>
          <p className="text-[9.5px] font-bold text-red-400 uppercase tracking-[0.15em] mb-[4px]">Что нельзя — никогда</p>
          <div className="space-y-[5px]">
            {no.map((n) => (
              <div key={n.k} className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/30 rounded-[6px] px-[10px] py-[7px]">
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] mb-[1px]">{n.k}</p>
                <p className="text-[9px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{n.v}</p>
              </div>
            ))}
          </div>
        </div>
        <FooterMobile index={22} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Кого интервьюировать</Eyebrow>
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] max-w-[1620px]">
          Друзей и семью — <span className="text-[hsl(var(--slide-gold))]">можно</span>. Если они твоя ЦА.
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[32px] max-w-[1500px]">
          Найти 10 «незнакомых» респондентов — задача на недели. Доступные люди вокруг тебя — нормальный канал. Главное — не <span className="text-[hsl(var(--slide-text))] font-semibold">кого</span> ты спрашиваешь, а <span className="text-[hsl(var(--slide-text))] font-semibold">как</span>.
        </p>
        <div className="grid grid-cols-2 gap-[20px] max-w-[1620px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[14px] px-[28px] py-[22px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">
              Можно интервьюировать
            </p>
            <div className="space-y-[12px]">
              {yes.map((y) => (
                <div key={y.k}>
                  <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{y.k}</p>
                  <p className="text-[16px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">{y.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/35 rounded-[14px] px-[28px] py-[22px]">
            <p className="text-[14px] font-bold text-red-400 uppercase tracking-[0.18em] mb-[14px]">
              Что нельзя — никогда
            </p>
            <div className="space-y-[12px]">
              {no.map((n) => (
                <div key={n.k}>
                  <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{n.k}</p>
                  <p className="text-[16px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">{n.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-[20px] text-[hsl(var(--slide-gold))] italic mt-[24px] max-w-[1620px]">
          Технику Customer Development интервью разберём дальше — там и научимся вытаскивать правду из любого собеседника.
        </p>
      </div>
      <Footer index={22} />
    </Stage>
  );
};

/* ========== Slide 23 — Bad vs Good questions (open + about the past) ========== */
export const S15 = () => {
  const isMobile = useIsMobile();
  const pairs = [
    {
      bad: "«Тебе бы пригодилось приложение, которое...?»",
      good: "«Расскажи, как ты решал эту задачу в последний раз?»",
    },
    {
      bad: "«Ты бы заплатил $20 в месяц за такое?»",
      good: "«Сколько ты сейчас тратишь — деньгами или временем — чтобы это решать?»",
    },
    {
      bad: "«Тебе нравится идея?»",
      good: "«Что ты пробовал до этого и почему перестал этим пользоваться?»",
    },
    {
      bad: "«Ты бы пользовался этим каждый день?»",
      good: "«Когда последний раз эта проблема всплывала и что ты тогда сделал?»",
    },
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <Eyebrow mobile>Как спрашивать</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[6px]">
            Открытые вопросы про <span className="text-[hsl(var(--slide-gold))]">прошлое</span>.
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[8px]">
            Закрытые вопросы про будущее → вежливые фантазии. Открытые про прошлое → реальные данные о поведении.
          </p>
          <div className="space-y-[5px]">
            {pairs.map((p) => (
              <div key={p.bad} className="grid grid-cols-2 gap-[5px]">
                <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/30 rounded-[6px] px-[8px] py-[6px]">
                  <p className="text-[8px] font-bold text-red-400 uppercase tracking-[0.12em] mb-[2px]">Плохо</p>
                  <p className="text-[9px] italic text-[hsl(var(--slide-text))] leading-[1.35]">{p.bad}</p>
                </div>
                <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[6px] px-[8px] py-[6px]">
                  <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Хорошо</p>
                  <p className="text-[9px] italic text-[hsl(var(--slide-text))] leading-[1.35]">{p.good}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[9.5px] text-[hsl(var(--slide-gold))] italic leading-[1.4] mt-[8px]">
            Прошлое — данные. Будущее — фантазии.
          </p>
        </div>
        <FooterMobile index={23} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Как спрашивать</Eyebrow>
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] mb-[18px]">
          Открытые вопросы про <span className="text-[hsl(var(--slide-gold))]">прошлое</span>.
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[28px] max-w-[1500px]">
          Закрытые вопросы про будущее = вежливые фантазии. Открытые вопросы про прошлый опыт = реальные данные о поведении.
        </p>
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[14px] max-w-[1620px] mb-[24px]">
          {pairs.map((p) => (
            <React.Fragment key={p.bad}>
              <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/30 rounded-[12px] px-[24px] py-[16px]">
                <p className="text-[12px] font-bold text-red-400 uppercase tracking-[0.18em] mb-[8px]">Плохо</p>
                <p className="text-[20px] italic text-[hsl(var(--slide-text))] leading-[1.4]">{p.bad}</p>
              </div>
              <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[12px] px-[24px] py-[16px]">
                <p className="text-[12px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[8px]">Хорошо</p>
                <p className="text-[20px] italic text-[hsl(var(--slide-text))] leading-[1.4]">{p.good}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.4] max-w-[1620px]">
          Прошлое — данные. Будущее — фантазии. Спрашивай так, чтобы человек <span className="not-italic font-semibold">рассказывал историю</span>, а не отвечал «да / нет».
        </p>
      </div>
      <Footer index={23} />
    </Stage>
  );
};

/* ========== Slide 16 — Pass/Fail ========== */
export const S16 = () => {
  const isMobile = useIsMobile();
  const pass = [
    "Сами поднимают эту проблему — без наводящего вопроса",
    "Описывают её теми же словами, что и ты",
    "Рассказывают про костыли: таблицы, чаты, ручную работу",
    "Называют, сколько времени / денег / нервов это съедает",
    "Проблема не решена — и они уже пробовали что-то и бросили",
    "7 из 10 в сегменте говорят про одно и то же",
  ];
  const fail = [
    "Проблему называешь ты — собеседник просто кивает",
    "«Да, бывает» — без примера и без деталей",
    "Не могут вспомнить, когда сталкивались последний раз",
    "«У друга / коллеги такое было» — не у них самих",
    "Никаких костылей нет — значит, и боли нет",
    "В сегменте про эту боль говорят 1–2 из 10",
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Сигналы</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
            Мы не питчим и не продаём. Мы слушаем.
          </h2>
          <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[10px]">
            На custdev никто не скажет «куплю» — и не должен. Сигнал — в том, как люди <span className="text-[hsl(var(--slide-gold))]">сами</span> говорят о боли.
          </p>
          <div className="grid grid-cols-2 gap-[6px]">
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[6px] px-[8px] py-[8px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[6px]">Pass</p>
              <ul className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4] space-y-[3px]">
                {pass.map((t) => <li key={t}>• {t}</li>)}
              </ul>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/30 rounded-[6px] px-[8px] py-[8px]">
              <p className="text-[9px] font-bold text-red-400 uppercase tracking-[0.15em] mb-[6px]">Fail</p>
              <ul className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4] space-y-[3px]">
                {fail.map((t) => <li key={t}>• {t}</li>)}
              </ul>
            </div>
          </div>
          <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mt-[8px]">
            Правило: <span className="text-[hsl(var(--slide-text))]">7 из 10</span> сами говорят о проблеме → идём строить.
          </p>
        </div>
        <FooterMobile index={24} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Сигналы — pass / fail</Eyebrow>
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px]">
          Мы не питчим и не продаём. Мы <span className="text-[hsl(var(--slide-gold))]">слушаем</span>.
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[28px] max-w-[1500px]">
          На custdev никто не спросит «когда я могу попробовать?» и не достанет карту — и не должен. Сигнал — в том, как люди <span className="text-[hsl(var(--slide-text))]">сами, без наводящих вопросов</span>, говорят о той самой проблеме, которую ты собираешься решать.
        </p>
        <div className="grid grid-cols-2 gap-[28px] max-w-[1600px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[16px] px-[36px] py-[32px]">
            <p className="text-[24px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[24px]">Pass</p>
            <ul className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.5] space-y-[10px]">
              {pass.map((t) => <li key={t}>• {t}</li>)}
            </ul>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/30 rounded-[16px] px-[36px] py-[32px]">
            <p className="text-[24px] font-bold text-red-400 uppercase tracking-[0.15em] mb-[24px]">Fail</p>
            <ul className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.5] space-y-[10px]">
              {fail.map((t) => <li key={t}>• {t}</li>)}
            </ul>
          </div>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[24px] max-w-[1600px]">
          Правило большого пальца: если из 10 разговоров <span className="text-[hsl(var(--slide-gold))]">7 человек сами</span> поднимают эту боль, описывают свои костыли и считают, во что она им обходится — гипотеза подтверждена, можно идти строить.
        </p>
      </div>
      <Footer index={24} />
    </Stage>
  );
};

/* ========== Slide 17 — Downloads ========== */
const ResourceCard: React.FC<{ icon: string; title: string; sub: string; mobile?: boolean }> = ({ icon, title, sub, mobile }) => {
  if (mobile) {
    return (
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[7px] px-[10px] py-[10px]">
        <div className="text-[18px] mb-[4px]">{icon}</div>
        <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{title}</p>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[6px]">{sub}</p>
        <button className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em]">Скачать →</button>
      </div>
    );
  }
  return (
    <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[36px] py-[32px] w-[480px]">
      <div className="text-[48px] mb-[14px]">{icon}</div>
      <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] mb-[8px]">{title}</p>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[24px]">{sub}</p>
      <button className="px-[22px] py-[12px] bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] rounded-[10px] text-[18px] font-bold tracking-[0.05em]">
        Скачать
      </button>
    </div>
  );
};

export const S17 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Материалы</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[12px]">
            Скачай прямо сейчас
          </h2>
          <div className="grid grid-cols-2 gap-[8px]">
            <ResourceCard mobile icon="📄" title="Скрипт интервью" sub="12 готовых вопросов под адаптацию" />
            <ResourceCard mobile icon="✅" title="Чеклист сигналов" sub="pass/fail в одной странице" />
          </div>
        </div>
        <FooterMobile index={25} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Материалы</Eyebrow>
        <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
          Скачай прямо сейчас
        </h2>
        <div className="flex gap-[28px]">
          <ResourceCard icon="📄" title="Скрипт интервью" sub="12 готовых вопросов под адаптацию" />
          <ResourceCard icon="✅" title="Чеклист сигналов" sub="pass/fail в одной странице" />
        </div>
      </div>
      <Footer index={25} />
    </Stage>
  );
};

/* ========== Slide 18 — Timed tasks ========== */
const TaskRow: React.FC<{ time: string; text: string; mobile?: boolean }> = ({ time, text, mobile }) => (
  <div
    className={`bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] flex items-center ${
      mobile ? "rounded-[7px] px-[10px] py-[8px] gap-[8px]" : "rounded-[14px] px-[32px] py-[22px] gap-[24px]"
    }`}
  >
    <span
      className={`bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] font-bold whitespace-nowrap ${
        mobile ? "text-[9px] px-[7px] py-[2px] rounded-full" : "text-[18px] px-[16px] py-[6px] rounded-full"
      }`}
    >
      {time}
    </span>
    <span className={mobile ? "text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]" : "text-[24px] text-[hsl(var(--slide-text))] leading-[1.45]"}>
      {text}
    </span>
  </div>
);

export const S18 = () => {
  const isMobile = useIsMobile();
  const tasks = [
    "Сформулируй главную гипотезу: «Я предполагаю, что [кто] страдает от [чего] и сейчас решает это [как]».",
    "Market Research: оцени размер рынка (TAM/SAM/SOM), тренды и динамику спроса в твоей нише. Зафиксируй источники.",
    "Анализ конкурентов: выпиши 5–7 прямых и непрямых конкурентов. Для каждого — позиционирование, цена, на чём держатся, где слабы.",
    "Найди 3 «дыры» на рынке: что конкуренты не делают, делают плохо или игнорируют целый сегмент.",
    "Составь список из 10 человек твоей ЦА для интервью. Можно знакомых — главное, что они реально в сегменте.",
    "Адаптируй вопросы под свою нишу: только открытые, только про прошлый опыт. Никаких «купил бы / понравилось бы».",
    "Проведи минимум 5 разговоров. Записывай дословные цитаты, костыли, частоту и стоимость проблемы.",
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Чек-лист урока</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[10px]">
            Что сделать после этого урока
          </h2>
          <div className="space-y-[5px] mb-[10px]">
            {tasks.map((txt, i) => (
              <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[9px] py-[6px] flex gap-[7px]">
                <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] font-bold shrink-0 leading-[1.4]">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.4]">{txt}</span>
              </div>
            ))}
          </div>
          <p className="text-[9.5px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            Три блока вместе — рынок, конкуренты, клиенты. Только так картина становится честной.
          </p>
        </div>
        <FooterMobile index={25} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Чек-лист урока</Eyebrow>
        <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
          Что сделать после этого урока
        </h2>
        <div className="space-y-[10px] max-w-[1600px] mb-[24px]">
          {tasks.map((txt, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[28px] py-[16px] flex gap-[22px] items-baseline">
              <span className="font-mono text-[28px] text-[hsl(var(--slide-gold))] font-bold leading-none shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">{txt}</span>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.4] max-w-[1600px]">
          Три блока вместе — рынок, конкуренты, клиенты. Только так картина становится честной.
        </p>
      </div>
      <Footer index={25} />
    </Stage>
  );
};

/* ========== Slide 19 — Where it breaks ========== */
export const S19 = () => {
  const isMobile = useIsMobile();
  const items: [string, string][] = [
    ["Нет ритма.", "Один разговор и бросил."],
    ["Нет обратной связи на интерпретацию.", "Ты услышал «интересно» — и подумал, что это «да»."],
    ["Страх отказа.", "Ты выбираешь только лояльных собеседников."],
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Где ломается</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[12px]">
            Где это ломается, если идти одному
          </h2>
          <div className="space-y-[6px]">
            {items.map(([t, sub], i) => (
              <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[7px] flex gap-[8px]">
                <span className="font-mono text-[12px] text-[hsl(var(--slide-gold))] font-bold">{i + 1}</span>
                <div>
                  <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">{t}</p>
                  <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <FooterMobile index={27} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Если идти одному</Eyebrow>
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] max-w-[1500px]">
          Где это ломается, если идти одному
        </h2>
        <div className="space-y-[16px] max-w-[1500px]">
          {items.map(([t, sub], i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[22px] flex gap-[24px] items-baseline">
              <span className="font-mono text-[40px] text-[hsl(var(--slide-gold))] font-bold leading-none shrink-0">{i + 1}</span>
              <div>
                <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[6px]">{t}</p>
                <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer index={27} />
    </Stage>
  );
};

/* ========== Slide 20 — The Founders Circle ========== */
export const S20 = () => {
  const isMobile = useIsMobile();
  const socials = [
    { label: "LinkedIn", handle: "michael-barbarich", url: "https://www.linkedin.com/in/michael-barbarich/" },
    { label: "Instagram", handle: "@michael_barbarich", url: "https://www.instagram.com/michael_barbarich/" },
    { label: "Facebook", handle: "barbarych", url: "https://www.facebook.com/barbarych" },
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Дальше — сам или вместе</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Если захочешь идти не один
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.55] mb-[10px]">
            Этот урок ты можешь применить самостоятельно. Если захочешь поддержку, менторство и пошаговую работу в группе — у меня есть программа{" "}
            <span className="text-[hsl(var(--slide-gold))] font-semibold">The Founders Circle</span>: 12 недель, маленькая группа, я рядом каждую неделю.
          </p>
          <a
            href="https://founders-circle.space"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-[hsl(var(--slide-gold))] underline text-[10px] mb-[14px] self-start"
          >
            founders-circle.space →
          </a>
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold mb-[8px]">
            Или просто добавляйся ко мне:
          </p>
          <div className="grid grid-cols-3 gap-[8px]">
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline">
                <div className="w-[68px] h-[68px] bg-white rounded-[6px] p-[4px] flex items-center justify-center mb-[4px]">
                  <QRCodeSVG value={s.url} size={60} level="M" bgColor="white" fgColor="#1a1a1a" />
                </div>
                <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold leading-tight">{s.label}</p>
                <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-tight truncate max-w-[72px]">{s.handle}</p>
              </a>
            ))}
          </div>
        </div>
        <FooterMobile index={26} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <Eyebrow>Дальше — сам или вместе</Eyebrow>
        <h2 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em]">
          Если захочешь идти не один
        </h2>
        <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[16px] max-w-[1400px]">
          Этот урок ты можешь применить самостоятельно — этого достаточно, чтобы проверить идею. Если в какой-то момент захочешь менторство, поддержку группы и пошаговую работу со мной — у меня есть программа{" "}
          <span className="text-[hsl(var(--slide-gold))] font-semibold">The Founders Circle</span>: 12 недель, маленькая группа, я рядом каждую неделю.
        </p>
        <a
          href="https://founders-circle.space"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[hsl(var(--slide-gold))] underline text-[22px] mb-[44px] self-start"
        >
          founders-circle.space →
        </a>
        <p className="text-[24px] text-[hsl(var(--slide-text))] font-semibold mb-[20px]">
          А ещё — давай законнектимся напрямую:
        </p>
        <div className="flex gap-[40px]">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline">
              <div className="w-[180px] h-[180px] bg-white rounded-[14px] p-[14px] flex items-center justify-center mb-[14px]">
                <QRCodeSVG value={s.url} size={152} level="M" bgColor="white" fgColor="#1a1a1a" />
              </div>
              <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold">{s.label}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text-muted))]">{s.handle}</p>
            </a>
          ))}
        </div>
      </div>
      <Footer index={26} />
    </Stage>
  );
};

/* ========== Slide 21 — Closing manifesto ========== */
export const S21 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Закрывающая мысль</Eyebrow>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[14px]">
            <p className="text-[13px] font-bold italic text-[hsl(var(--slide-text))] leading-[1.4] mb-[10px]">
              «Валидация — это не доказательство. Это попытка убить идею.»
            </p>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Рынок, конкуренты и реальные разговоры с ЦА — это три разных молотка, которыми ты бьёшь по своей гипотезе. Если она устояла — у тебя на руках не вера, а доказательства. Если развалилась — ты сэкономил себе 18 месяцев жизни и кучу денег.
            </p>
          </div>
        </div>
        <FooterMobile index={27} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Закрывающая мысль</Eyebrow>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[44px] py-[40px] max-w-[1600px]">
          <p className="text-[44px] font-bold italic text-[hsl(var(--slide-text))] leading-[1.3] mb-[28px]">
            «Валидация — это не доказательство. Это попытка убить идею.»
          </p>
          <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            Рынок, конкуренты и реальные разговоры с ЦА — это три разных молотка, которыми ты бьёшь по своей гипотезе. Если она устояла под всеми тремя — у тебя на руках не вера, а доказательства, и можно строить. Если развалилась — ты только что сэкономил себе 18 месяцев жизни и кучу денег.
          </p>
        </div>
      </div>
      <Footer index={27} />
    </Stage>
  );
};

/* ========== Slide 22 — Motivation / outro ========== */
export const S22 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>В завершение</Eyebrow>
          <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
            Сегодня ты получил то, что 9 из 10 фаундеров пропускают.
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.55] mb-[10px]">
            Ты разобрался, как смотреть на рынок, как изучать конкурентов и как разговаривать с реальными людьми так, чтобы за тобой стояли данные, а не догадки.
          </p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.55] mb-[12px]">
            Если ты хочешь построить продукт, которым будут реально пользоваться и за который будут платить — не клади эти знания «на потом». Открой блокнот, пройди чек-лист, поговори с 5 людьми. Это та работа, после которой решения перестают быть лотереей.
          </p>
          <p className="text-[11px] text-[hsl(var(--slide-gold))] font-bold italic leading-[1.4]">
            Идея без проверки — мечта. Идея, прошедшая через рынок, конкурентов и клиентов — это уже бизнес.
          </p>
        </div>
        <FooterMobile index={28} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>В завершение</Eyebrow>
        <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] max-w-[1600px]">
          Сегодня ты получил то, что 9 из 10 фаундеров пропускают.
        </h2>
        <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.55] max-w-[1600px] mb-[18px]">
          Ты разобрался, как смотреть на рынок, как изучать конкурентов и как разговаривать с реальными людьми так, чтобы за тобой стояли данные, а не догадки.
        </p>
        <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.55] max-w-[1600px] mb-[28px]">
          Если ты хочешь построить продукт, которым будут реально пользоваться и за который будут платить — не клади эти знания «на потом». Открой блокнот, пройди чек-лист, поговори с 5 людьми. Это та работа, после которой решения перестают быть лотереей.
        </p>
        <p className="text-[28px] text-[hsl(var(--slide-gold))] font-bold italic leading-[1.4] max-w-[1600px]">
          Идея без проверки — мечта. Идея, прошедшая через рынок, конкурентов и клиентов — это уже бизнес.
        </p>
      </div>
      <Footer index={28} />
    </Stage>
  );
};

/* ========== NEW Slide — Lesson 1 checklist ========== */
const L1_CHECKLIST: { n: string; t: React.ReactNode }[] = [
  { n: "01", t: <><b>Market Research:</b> оцени размер рынка (TAM/SAM/SOM), тренды и динамику спроса в твоей нише. Зафиксируй источники.</> },
  { n: "02", t: <><b>Анализ конкурентов:</b> выпиши 5–7 прямых и непрямых конкурентов. Для каждого — позиционирование, цена, на чём держатся, где слабы.</> },
  { n: "03", t: <>Найди <b>3 «дыры» на рынке:</b> что конкуренты не делают, делают плохо или игнорируют целый сегмент.</> },
  { n: "04", t: <>Сформулируй своё <b>узкое позиционирование:</b> одно предложение про то, чем ты отличаешься и для кого.</> },
  { n: "05", t: <>Запусти <b>FoundersLens</b> на свою идею и сложи всё в одну картинку.</> },
];

export const L1Checklist = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
            Что сделать после этого урока
          </h2>
          <ol className="space-y-[8px] mb-[12px]">
            {L1_CHECKLIST.map((it) => (
              <li key={it.n} className="flex items-start gap-[8px] text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] font-bold min-w-[18px]">{it.n}</span>
                <span>{it.t}</span>
              </li>
            ))}
          </ol>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic text-center leading-[1.4]">
            На Уроке 2 ты пойдёшь к людям и проверишь эту картинку в живых разговорах.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
          Что сделать после этого урока
        </h2>
        <ol className="space-y-[20px] mb-[36px]">
          {L1_CHECKLIST.map((it) => (
            <li key={it.n} className="flex items-start gap-[24px] text-[24px] text-[hsl(var(--slide-text))] leading-[1.45] max-w-[1500px]">
              <span className="text-[28px] text-[hsl(var(--slide-gold))] font-bold tracking-[0.04em] min-w-[60px]">{it.n}</span>
              <span>{it.t}</span>
            </li>
          ))}
        </ol>
        <p className="text-[26px] text-[hsl(var(--slide-gold))] italic text-center leading-[1.4]">
          На Уроке 2 ты пойдёшь к людям и проверишь эту картинку в живых разговорах.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== NEW Slide — Lesson 1 closing + CTA to Lesson 2 ========== */
export const L1Closing = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center items-center text-center px-[24px] h-full">
          <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-text-muted))] text-[10px] mb-[16px]">Дальше</p>
          <p className="text-[16px] italic font-semibold text-[hsl(var(--slide-gold))] leading-[1.35] mb-[14px]">
            «Анализ рынка показывает, где ловить рыбу.<br />
            Customer Development — что эта рыба реально ест.»
          </p>
          <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[20px]">
            Без обоих — ты строишь либо в пустоту, либо для воображаемого клиента.
          </p>
          <a
            href="/mini-course/lesson2"
            className="inline-flex items-center gap-2 px-[18px] py-[10px] rounded-[8px] bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] font-bold text-[12px] no-underline"
          >
            Перейти к Уроку 2 →
          </a>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center items-center text-center px-[140px] h-full max-w-[1700px] mx-auto">
        <p className="uppercase tracking-[0.25em] text-[hsl(var(--slide-text-muted))] text-[20px] mb-[40px]">Дальше</p>
        <p className="text-[52px] italic font-semibold text-[hsl(var(--slide-gold))] leading-[1.3] mb-[36px] max-w-[1500px]">
          «Анализ рынка показывает, где ловить рыбу.<br />
          Customer Development — что эта рыба реально ест.»
        </p>
        <p className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[56px] max-w-[1300px]">
          Без обоих — ты строишь либо в пустоту, либо для воображаемого клиента.
        </p>
        <a
          href="/mini-course/lesson2"
          className="inline-flex items-center gap-3 px-[44px] py-[22px] rounded-[14px] bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] font-bold text-[28px] no-underline hover:opacity-90 transition"
        >
          Перейти к Уроку 2 →
        </a>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== NEW v3 slides (lesson1 restructure) ========== */

/* Slide 6 — Why market research first */
export const L1WhyMarketFirst = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <Eyebrow mobile>Порядок имеет значение</Eyebrow>
          <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
            Почему рынок — раньше людей
          </h2>
          <div className="space-y-[10px]">
            <div className="bg-[hsl(0_70%_55%/0.08)] border-l-2 border-[hsl(0_70%_55%)] rounded-[8px] px-[12px] py-[10px]">
              <p className="text-[10px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.15em] mb-[4px]">Если сначала разговоры</p>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                Ты идёшь в рынок без карты. Слышишь боль одного человека и думаешь, что это рынок. Тратишь 6 месяцев на нишу из 50 клиентов.
              </p>
            </div>
            <div className="bg-[hsl(140_55%_45%/0.1)] border-l-2 border-[hsl(140_55%_50%)] rounded-[8px] px-[12px] py-[10px]">
              <p className="text-[10px] font-bold text-[hsl(140_55%_60%)] uppercase tracking-[0.15em] mb-[4px]">Если сначала рынок</p>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                Ты идёшь к людям с гипотезой, которую уже отфильтровал по размеру, тренду и конкурентам. 10 разговоров проверяют гипотезу, а не выдумывают её.
              </p>
            </div>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic text-center mt-[12px] leading-[1.4]">
            90 минут ресёрча экономят 6 месяцев разработки.
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
          Почему рынок — раньше людей
        </h2>
        <div className="grid grid-cols-2 gap-[28px] mb-[28px]">
          <div className="bg-[hsl(0_70%_55%/0.08)] border-l-[4px] border-[hsl(0_70%_55%)] rounded-[14px] px-[32px] py-[28px]">
            <p className="text-[18px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.18em] mb-[16px]">Если сначала разговоры</p>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              Ты идёшь в рынок без карты. Слышишь боль одного человека и думаешь, что это рынок. Тратишь 6 месяцев на нишу из 50 клиентов.
            </p>
          </div>
          <div className="bg-[hsl(140_55%_45%/0.08)] border-l-[4px] border-[hsl(140_55%_50%)] rounded-[14px] px-[32px] py-[28px]">
            <p className="text-[18px] font-bold text-[hsl(140_55%_60%)] uppercase tracking-[0.18em] mb-[16px]">Если сначала рынок</p>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              Ты идёшь к людям с гипотезой, которую уже отфильтровал по размеру, тренду и конкурентам. 10 разговоров проверяют гипотезу, а не выдумывают её.
            </p>
          </div>
        </div>
        <p className="text-[24px] text-[hsl(var(--slide-gold))] italic text-center leading-[1.4]">
          90 минут ресёрча экономят 6 месяцев разработки. Помнишь, какой инсайт?
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* Slide 8 — Three levels of competitors */
const COMP_LEVELS = [
  { icon: "⚔️", n: "01", title: "Прямые", body: "Делают то же самое для той же аудитории." },
  { icon: "🔄", n: "02", title: "Косвенные", body: "Решают ту же проблему другим способом." },
  { icon: "📋", n: "03", title: "Замена", body: "Что клиент делает СЕЙЧАС вместо твоего продукта: Excel, стажёр, ручной процесс." },
];
export const L1ThreeLevels = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Конкуренты бывают трёх уровней
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] italic mb-[12px] leading-[1.4]">
            Большинство фаундеров видят только первый уровень — и пропускают самое важное.
          </p>
          <div className="space-y-[8px]">
            {COMP_LEVELS.map((c) => (
              <div key={c.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[12px] py-[9px]">
                <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] mb-[3px]">{c.icon} {c.n} · {c.title}</p>
                <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic mt-[12px] leading-[1.4]">
            Не учёл уровень 3 — конкурируешь не с продуктом, а с привычкой. И привычка побеждает.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.01em]">
          Конкуренты бывают трёх уровней
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] italic mb-[44px] leading-[1.4]">
          Большинство фаундеров видят только первый уровень — и пропускают самое важное.
        </p>
        <div className="grid grid-cols-3 gap-[24px] mb-[36px]">
          {COMP_LEVELS.map((c) => (
            <div key={c.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[28px]">
              <p className="text-[40px] mb-[10px]">{c.icon}</p>
              <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">{c.n} · {c.title}</p>
              <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[24px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
          Если ты не учёл уровень 3 — ты конкурируешь не с продуктом, а с привычкой. И привычка побеждает.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* Slide 9 — 8 dimensions to check at competitors */
const COMP_DIMS: { icon: string; title: string; body: string }[] = [
  { icon: "💰", title: "Цена и модель", body: "Подписка / разовая / freemium. Твой ценовой коридор." },
  { icon: "⭐", title: "Негативные отзывы", body: "Где не дотягивают. Это твоё место." },
  { icon: "🖥️", title: "Первый экран", body: "Как формулируют ценность. С кого они снимают деньги." },
  { icon: "🕳️", title: "Что НЕ делают", body: "Пробелы в их офере = твоя ниша." },
  { icon: "📧", title: "Email-воронка", body: "Подпишись на их рассылку. Изучи, чем они греют лида." },
  { icon: "📱", title: "Соцсети и комьюнити", body: "Что хвалят, на что жалуются. Каждый комментарий — данные." },
  { icon: "📊", title: "Трафик и каналы", body: "Откуда идут клиенты (SimilarWeb)." },
  { icon: "🎯", title: "Value Proposition", body: "Их one-liner. Если копируешь — ты не отстройка, ты копия." },
];
export const L1EightDimensions = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <p className="text-[9px] text-[hsl(var(--slide-text-muted))] italic mb-[6px] leading-[1.4]">
            Три уровня — это карта. 8 параметров — это разбор.
          </p>
          <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
            Что смотреть у конкурентов
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] italic mb-[8px]">8 параметров. По каждому — одна находка.</p>
          <div className="grid grid-cols-2 gap-[5px]">
            {COMP_DIMS.map((d) => (
              <div key={d.title} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.18)] rounded-[6px] px-[8px] py-[7px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{d.icon} {d.title}</p>
                <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{d.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] text-center leading-[1.4]">
            На каждый параметр — 5 минут. 40 минут на одного конкурента.
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
          Три уровня — это карта. 8 параметров — это разбор. Без карты разбор бесполезен.
        </p>
        <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
          Что смотреть у конкурентов
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] italic mb-[28px]">8 параметров. По каждому — одна находка.</p>
        <div className="grid grid-cols-4 gap-[16px] mb-[24px]">
          {COMP_DIMS.map((d) => (
            <div key={d.title} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[12px] px-[20px] py-[20px]">
              <p className="text-[28px] mb-[6px]">{d.icon}</p>
              <p className="text-[17px] font-bold text-[hsl(var(--slide-text))] mb-[8px]">{d.title}</p>
              <p className="text-[15px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{d.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
          На каждый параметр — 5 минут. Всего — 40 минут на одного конкурента.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* Slide 10 — Negative reviews are gold */
export const L1NegativeReviews = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
            Главное золото · негативные отзывы
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] italic mb-[10px]">Голос недовольного клиента = твоя возможность.</p>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[12px] py-[9px] mb-[10px]">
            <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.45]">
              <b>Задание:</b> найти 10 негативных отзывов на каждого из 3 главных конкурентов. Сгруппировать по темам.
            </p>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] mb-[6px]">
            <b className="text-[hsl(var(--slide-gold))]">Где искать:</b> G2, Trustpilot, App Store, Google Play, Reddit.
          </p>
          <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">Что искать в группах жалоб:</p>
          <ul className="space-y-[4px] text-[9.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
            <li>• 30%+ жалоб на онбординг → точка входа для disruption</li>
            <li>• Жалуются на цену → разбери unit-экономику. Pricing — твоё оружие.</li>
            <li>• Переросли продукт → строй платформу, не фичу.</li>
          </ul>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
            Час чтения отзывов = лист с 5 «дырами», которые конкуренты не закроют.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px] tracking-[-0.01em]">
          Главное золото · негативные отзывы
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] italic mb-[28px]">
          Голос недовольного клиента = твоя возможность.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[32px] py-[22px] mb-[24px]">
          <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.45]">
            <b>Задание:</b> найти 10 негативных отзывов на каждого из 3 главных конкурентов. Сгруппировать по темам.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[28px] mb-[24px]">
          <div>
            <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Где искать</p>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              G2 · Trustpilot · App Store · Google Play · Reddit
            </p>
          </div>
          <div>
            <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Что искать в группах жалоб</p>
            <ul className="space-y-[8px] text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
              <li>• 30%+ жалоб на онбординг → точка входа для disruption</li>
              <li>• Жалуются на цену → unit-экономика. Pricing — твоё оружие.</li>
              <li>• Переросли продукт → строй платформу, не фичу.</li>
            </ul>
          </div>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
          Один час чтения отзывов = один лист с 5 «дырами», которые твои конкуренты не закроют.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* Slide 11 — Perplexity (5 prompts) */
const PERPLEXITY_PROMPTS = [
  "Карта конкурентов в [моя ниша]: топ-10 с позиционированием, ценой, последним раундом.",
  "Слабые места: что чаще всего ругают в отзывах на [конкурент] на G2 / Trustpilot за последние 12 месяцев.",
  "Размер рынка для [моя ниша]: TAM, SAM, SOM с источниками за 2024–2025.",
  "Кто платит: основной customer profile у [конкурент] — должность, размер компании, индустрия.",
  "Позиционирование: чем [конкурент A] отличается от [конкурент B] и [конкурент C]. Что ни один не делает.",
];
export const L1Perplexity = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Инструмент 1</Eyebrow>
          <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">Perplexity</h2>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic mb-[8px]">Это не GPT. Поиск, который сам цитирует источники.</p>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] mb-[10px] leading-[1.45]">
            AI-поисковик. Отвечает на сложные запросы и даёт ссылки на источники, не выдумывая факты.
          </p>
          <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[6px]">5 промптов</p>
          <ol className="space-y-[5px] mb-[8px]">
            {PERPLEXITY_PROMPTS.map((p, i) => (
              <li key={i} className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] font-mono bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.15)] rounded-[5px] px-[8px] py-[5px]">
                <span className="text-[hsl(var(--slide-gold))] font-bold">{i + 1}.</span> {p}
              </li>
            ))}
          </ol>
          <p className="text-[9.5px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            AI делает 80% работы. Оставшиеся 20% — твои.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Инструмент 1</Eyebrow>
        <h2 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px] tracking-[-0.02em]">Perplexity</h2>
        <p className="text-[24px] text-[hsl(var(--slide-gold))] italic mb-[18px]">Это не GPT. Это поиск, который сам цитирует источники.</p>
        <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] mb-[26px] leading-[1.5] max-w-[1500px]">
          AI-поисковик. Отвечает на сложные запросы и даёт ссылки на источники, не выдумывая факты.
        </p>
        <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">5 промптов для конкурентного анализа</p>
        <ol className="space-y-[10px] mb-[20px]">
          {PERPLEXITY_PROMPTS.map((p, i) => (
            <li key={i} className="text-[17px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] font-mono bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.18)] rounded-[10px] px-[20px] py-[12px]">
              <span className="text-[hsl(var(--slide-gold))] font-bold mr-2">{i + 1}.</span>{p}
            </li>
          ))}
        </ol>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
          AI делает 80% работы. Оставшиеся 20% — твои: открыть сайты, прочитать отзывы, перепроверить цифры.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* Slide 12 — Three verification tools */
const VERIFY_TOOLS = [
  {
    icon: "📊",
    name: "SimilarWeb",
    url: "similarweb.com · бесплатно",
    sub: "Откуда конкуренты берут клиентов.",
    signal: "70%+ из платной рекламы → у них дорогой CAC, заходи через органику.",
  },
  {
    icon: "📢",
    name: "Meta Ad Library",
    url: "facebook.com/ads/library · бесплатно",
    sub: "Какую рекламу крутят месяцами.",
    signal: "Одно объявление 6+ месяцев = working creative. Учись на их экспериментах.",
  },
  {
    icon: "📈",
    name: "Google Trends",
    url: "trends.google.com · бесплатно",
    sub: "Растёт ли интерес к нише.",
    signal: "+30% год к году = ты в правильном месте. Падение → переоцени гипотезу.",
  },
];
export const L1VerificationTools = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
            Три инструмента для верификации
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] italic mb-[12px]">
            Perplexity даёт картину. Эти три проверяют, что AI не выдумал.
          </p>
          <div className="space-y-[8px]">
            {VERIFY_TOOLS.map((t) => (
              <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[12px] py-[9px]">
                <p className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{t.icon} {t.name}</p>
                <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[4px]">{t.url}</p>
                <p className="text-[10px] text-[hsl(var(--slide-gold))] italic mb-[3px]">{t.sub}</p>
                <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{t.signal}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic text-center mt-[10px] leading-[1.4]">
            5 минут на каждый. 15 минут — и знаешь, врёт ли тебе Perplexity.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px] tracking-[-0.01em]">
          Три инструмента для верификации
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] italic mb-[36px]">
          Perplexity даёт картину. Эти три проверяют, что AI не выдумал.
        </p>
        <div className="grid grid-cols-3 gap-[24px] mb-[28px]">
          {VERIFY_TOOLS.map((t) => (
            <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[26px] py-[26px]">
              <p className="text-[36px] mb-[8px]">{t.icon}</p>
              <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">{t.name}</p>
              <p className="text-[14px] text-[hsl(var(--slide-text-muted))] mb-[14px]">{t.url}</p>
              <p className="text-[18px] text-[hsl(var(--slide-gold))] italic mb-[12px] leading-[1.4]">{t.sub}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
                <span className="font-bold">Главный сигнал:</span> {t.signal}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic text-center leading-[1.4]">
          5 минут на каждый. 15 минут — и ты знаешь, врёт ли тебе Perplexity.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* Slide 13 — Find 3 gaps + Positioning formula + mid CTA */
const GAPS = [
  { t: "Сегментная дыра", d: "есть аудитория, которую никто не обслуживает прицельно" },
  { t: "Функциональная дыра", d: "все жалуются на одно и то же отсутствие" },
  { t: "Ценовая дыра", d: "есть premium и есть free, но нет mid-tier" },
];
export const L1GapsPositioning = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
            Шаг финальный · 3 дыры + позиционирование
          </h2>
          <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] italic mb-[8px]">Ресёрч без позиционирования — потерянное время.</p>
          <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">3 типа дыр:</p>
          <ul className="space-y-[3px] mb-[8px]">
            {GAPS.map((g) => (
              <li key={g.t} className="text-[9.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                <b className="text-[hsl(var(--slide-text))]">{g.t}</b> — {g.d}
              </li>
            ))}
          </ul>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[8px] mb-[8px]">
            <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.45]">
              [Продукт] помогает [кому конкретно]<br />
              [решить проблему / получить результат],<br />
              в отличие от [главная альтернатива],<br />
              который [её слабость].
            </p>
          </div>
          <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[7px]">
            <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] italic leading-[1.4]">
              Хочешь, чтобы я еженедельно разбирал твою карту конкурентов и говорил, где ты обманываешь себя — TFC. <span className="text-[hsl(var(--slide-gold))] font-semibold">founders-circle.space →</span>
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
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
          Шаг финальный · 3 дыры + позиционирование
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] italic mb-[24px]">
          Ресёрч без позиционирования — потерянное время.
        </p>
        <div className="grid grid-cols-2 gap-[36px] mb-[24px]">
          <div>
            <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">3 типа дыр</p>
            <ul className="space-y-[14px]">
              {GAPS.map((g) => (
                <li key={g.t} className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                  <b className="text-[hsl(var(--slide-text))]">{g.t}</b> — {g.d}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[28px] py-[22px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Формула позиционирования</p>
            <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))] leading-[1.5]">
              [Продукт] помогает [кому конкретно]<br />
              [решить проблему / получить результат],<br />
              в отличие от [главная альтернатива],<br />
              который [её слабость].
            </p>
          </div>
        </div>
        <div className="border border-[hsl(var(--slide-gold)/0.35)] rounded-[12px] px-[24px] py-[16px] bg-[hsl(var(--slide-bg-alt)/0.5)]">
          <p className="text-[17px] text-[hsl(var(--slide-text)/0.85)] italic leading-[1.5]">
            Это весь метод. Сделать его руками за 90 минут — реально. Сделать так, чтобы он сработал — нужны итерации. Если хочешь, чтобы я еженедельно разбирал твою карту конкурентов и говорил, где ты обманываешь себя — TFC. <span className="text-[hsl(var(--slide-gold))] font-semibold not-italic">founders-circle.space →</span>
          </p>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

/* Slide 14 — InterviewNinja counter-case */
const NINJA_LINES = [
  { t: "Не проверил, поднял ли кто-то раунд в этой нише за 12 месяцев. Никто не поднял.", sig: "Сигнал был в Crunchbase." },
  { t: "Не посмотрел отзывы на конкурентов. Все жаловались на одно: «симулятор не даёт работу».", sig: "Сигнал был в G2 и App Store." },
  { t: "Не построил карту дыр. Дыр не было — ниша уже схлопнулась.", sig: "Сигнал был в Google Trends." },
];
export const L1InterviewNinjaRetro = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
            InterviewNinja · что было бы при ресёрче
          </h2>
          <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[8px]">2023–2024. Стартап, который я закрыл за 18 месяцев.</p>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] italic mb-[10px] leading-[1.4]">
            Теперь ты знаешь метод. Посмотри, что бы он мне сэкономил.
          </p>
          <ul className="space-y-[8px] mb-[10px]">
            {NINJA_LINES.map((l, i) => (
              <li key={i} className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                <span className="text-[hsl(0_70%_60%)] font-bold mr-1">❌</span>{l.t} <b className="text-[hsl(var(--slide-gold))]">{l.sig}</b>
              </li>
            ))}
          </ul>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            18 месяцев разработки. Ответ был в 90 минутах ресёрча.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1750px]">
        <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
          InterviewNinja · что было бы при ресёрче
        </h2>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[18px]">2023–2024. Стартап, который я закрыл за 18 месяцев.</p>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] italic mb-[28px]">
          Теперь ты знаешь метод. Посмотри, что бы он мне сэкономил.
        </p>
        <ul className="space-y-[18px] mb-[28px]">
          {NINJA_LINES.map((l, i) => (
            <li key={i} className="flex items-start gap-[16px] text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              <span className="text-[28px] text-[hsl(0_70%_60%)] font-bold leading-none">❌</span>
              <span>{l.t} <b className="text-[hsl(var(--slide-gold))]">{l.sig}</b></span>
            </li>
          ))}
        </ul>
        <p className="text-[24px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
          18 месяцев разработки. Ответ был в 90 минутах ресёрча. В тех же инструментах, что я только что дал тебе.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* Slide 15 — Practice now · 10 minutes */
const PRACTICE_STEPS: { time: string; t: string }[] = [
  { time: "2 мин", t: "Открой Perplexity → вставь промпт «Карта конкурентов» со своей нишей" },
  { time: "2 мин", t: "Из результата выбери 3 прямых конкурента → запиши в таблицу: название, цена, ключевое отличие" },
  { time: "2 мин", t: "Открой сайт главного конкурента → зафиксируй: заголовок, CTA, целевая аудитория" },
  { time: "2 мин", t: "Найди 2–3 негативных отзыва на конкурента (G2, Trustpilot, App Store) → запиши главные боли" },
  { time: "2 мин", t: "Сформулируй одно предложение: чем твой продукт лучше главного конкурента" },
];
export const L1PracticeNow = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
            Делаем прямо сейчас · 10 минут
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic mb-[10px] leading-[1.4]">
            Поставь видео на паузу. Сделай это руками. Без паузы Урок 2 не сработает.
          </p>
          <ol className="space-y-[6px] mb-[8px]">
            {PRACTICE_STEPS.map((s, i) => (
              <li key={i} className="flex items-start gap-[8px] text-[9.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                <span className="text-[hsl(var(--slide-gold))] font-bold whitespace-nowrap">{i + 1}. {s.time}</span>
                <span>{s.t}</span>
              </li>
            ))}
          </ol>
          <p className="text-[9.5px] text-[hsl(var(--slide-gold))] italic text-center leading-[1.4]">
            На выходе: таблица из 3 конкурентов + одно предложение отстройки.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px] tracking-[-0.01em]">
          Делаем прямо сейчас · 10 минут
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-gold))] italic mb-[36px] leading-[1.4]">
          Поставь видео на паузу. Сделай это руками. Без паузы Урок 2 не сработает.
        </p>
        <ol className="space-y-[16px] mb-[28px]">
          {PRACTICE_STEPS.map((s, i) => (
            <li key={i} className="flex items-start gap-[24px] text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              <span className="text-[24px] text-[hsl(var(--slide-gold))] font-bold whitespace-nowrap min-w-[140px]">
                {i + 1}. <span className="text-[hsl(var(--slide-text))]">{s.time}</span>
              </span>
              <span>{s.t}</span>
            </li>
          ))}
        </ol>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic text-center leading-[1.4]">
          На выходе: таблица из 3 конкурентов + одно предложение отстройки. Это твой минимальный артефакт после этого урока.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* Slide 16 — Full 90-min plan + templates */
const PLAN_STEPS: { time: string; title: string; body: string }[] = [
  { time: "15 мин", title: "Market Sizing", body: "Промпт #3 в Perplexity. Заполни Market Sizing Template." },
  { time: "15 мин", title: "Карта конкурентов", body: "Промпт #1. Получи 10 имён." },
  { time: "30 мин", title: "Глубокий разбор 3 главных", body: "8 параметров. Pricing, отзывы, FB Ads, SimilarWeb." },
  { time: "15 мин", title: "Найди 3 дыры", body: "Сегментная, функциональная или ценовая." },
  { time: "15 мин", title: "Формула позиционирования", body: "Один лист. Одна фраза." },
];
const PLAN_TEMPLATES = [
  { icon: "📊", title: "Market Sizing Template", sub: "Google Sheets" },
  { icon: "🔍", title: "Competitor Matrix", sub: "10 конкурентов × 8 параметров" },
  { icon: "📝", title: "Positioning Worksheet", sub: "формула + 3 теста" },
];
export const L1FullPlan = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Полный план на 90 минут + шаблоны
          </h2>
          <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[4px]">Чек-лист</p>
          <ol className="space-y-[5px] mb-[10px]">
            {PLAN_STEPS.map((s, i) => (
              <li key={i} className="text-[9px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                <b className="text-[hsl(var(--slide-gold))]">{s.time}</b> · <b className="text-[hsl(var(--slide-text))]">{s.title}.</b> {s.body}
              </li>
            ))}
          </ol>
          <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[4px]">Шаблоны</p>
          <div className="grid grid-cols-3 gap-[5px] mb-[8px]">
            {PLAN_TEMPLATES.map((t) => (
              <div key={t.title} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[6px] py-[6px]">
                <p className="text-[14px] mb-[2px]">{t.icon}</p>
                <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">{t.title}</p>
                <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{t.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            Все три заполнятся за 90 минут, если идёшь по чек-листу.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
          Полный план на 90 минут + шаблоны
        </h2>
        <div className="grid grid-cols-2 gap-[40px]">
          <div>
            <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Чек-лист с временным бюджетом</p>
            <ol className="space-y-[12px]">
              {PLAN_STEPS.map((s, i) => (
                <li key={i} className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                  <span className="text-[hsl(var(--slide-gold))] font-bold mr-2">{s.time}</span>
                  <b className="text-[hsl(var(--slide-text))]">{s.title}.</b> {s.body}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Шаблоны для скачивания</p>
            <div className="grid grid-cols-1 gap-[12px]">
              {PLAN_TEMPLATES.map((t) => (
                <div key={t.title} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[16px] flex items-center gap-[16px]">
                  <p className="text-[36px]">{t.icon}</p>
                  <div>
                    <p className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{t.title}</p>
                    <p className="text-[15px] text-[hsl(var(--slide-text-muted))]">{t.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[20px] text-[hsl(var(--slide-gold))] italic mt-[18px] leading-[1.4]">
              Все три заполнятся за 90 минут, если идёшь по чек-листу.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide · Deep Research master prompt ========== */
const DEEP_RESEARCH_PROMPT = `# РОЛЬ

Ты — опытный бизнес-консультант, который 15 лет помогает предпринимателям без технического бэкграунда не вкладываться в плохие идеи и развивать хорошие.

Твой собеседник — фаундер, который не программист, не MBA, не аналитик. Он строит свой первый или второй продукт. Он не знает и не обязан знать слова TAM, CAGR, unit economics, cold start problem, platform risk.

Твоя задача — провести глубокий ресерч и дать ему понятный ответ на русском языке с конкретным планом действий.

Ты НЕ продавец его идеи. Ты НЕ мотиватор. Ты НЕ друг, который поддерживает.
Ты — старший партнёр, которому платят за то, чтобы он сказал правду, даже если она неприятная.

Главный вопрос: **Стоит ли фаундеру строить эту идею прямо сейчас?**
Финальный ответ: ДА / НЕТ / ИЗМЕНИТЬ НАПРАВЛЕНИЕ.

---

# РАССКАЖИ ПРО СВОЮ ИДЕЮ (заполни каждое поле)

1. Что строишь — одним предложением? [ТВОЙ ОТВЕТ]
2. Для кого — максимально узко? [ТВОЙ ОТВЕТ]
3. Какую боль решаешь? [ТВОЙ ОТВЕТ]
4. Как эту боль решают сейчас? (минимум 3 альтернативы) [ТВОЙ ОТВЕТ]
5. Как планируешь зарабатывать? [ТВОЙ ОТВЕТ]
6. Какая цена — в $ / € / ₪? И на чём основана? [ТВОЙ ОТВЕТ]
7. Где продаёшь? (страна / регион / глобально) [ТВОЙ ОТВЕТ]
8. На каком этапе сейчас? [ТВОЙ ОТВЕТ]
9. Чем отличаешься от того, что уже есть? [ТВОЙ ОТВЕТ]
10. Почему именно ты можешь это построить? [ТВОЙ ОТВЕТ]
11. Сколько денег готов вложить и на какой срок? [ТВОЙ ОТВЕТ]
12. Через сколько хочешь запустить первую версию? [ТВОЙ ОТВЕТ]
13. Есть ли уже 3–5 реальных людей, готовых купить? [ТВОЙ ОТВЕТ]
14. Что ты уже пробовал / проверял? [ТВОЙ ОТВЕТ]
15. Какие у тебя сейчас главные сомнения? [ТВОЙ ОТВЕТ]

---

# ЧТО ИССЛЕДОВАТЬ
Источники: Reddit, App Store / Google Play, G2, Capterra, Trustpilot, Crunchbase, Statista, Google Trends, Product Hunt, Failory.

1. Реальна ли эта боль? — минимум 10 реальных цитат с URL.
2. Сколько людей реально могут купить? — размер рынка обычными словами.
3. Кто уже на рынке (топ-7 конкурентов) — таблица: Конкурент | Цена | Слабое место | Место для нас.
4. Кто пробовал и провалился (3–5 кейсов) — что хотели, сколько потратили, почему упали.
5. Где свободное место — на что жалуются, но никто не чинит. 3–5 ниш.
6. Почему именно сейчас? — что изменилось за 1–2 года.
7. Реальные риски — для каждого одно конкретное действие.

---

# КАК ПИСАТЬ ОТВЕТ
Простой язык. Каждое утверждение — с источником. Цитаты — реальные и переведённые. Нет данных — пиши «нет данных». После каждого блока — строка «если коротко». 8–10 страниц, читается за 20 минут. Не хвали и не бей. Всегда давай план действий на 7 дней.

---

# СТРУКТУРА ОТВЕТА
## 📍 Главное за 30 секунд — Вердикт ДА / НЕТ / ПЕРЕСМОТРИТЕ + 3 причины + 3 риска
## 📍 Что я проверил и что нашёл — разбор по 7 вопросам
## 📍 Мой вердикт развёрнуто
## 📍 План на ближайшие 7 дней — три конкретных действия
## 📍 Если решаешь строить — что дальше
## 📍 Если решаешь не строить — что забрать в следующую идею

---

# СТАРТУЙ
Проведи полный ресерч. Пиши простым человеческим языком. Не пропускай разделы.`;

function highlightDRPrompt(text: string) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((part, i) => {
    if (/^\[[^\]]+\]$/.test(part)) {
      return (
        <span
          key={i}
          className="inline-block px-[6px] py-[1px] mx-[1px] rounded-[3px] bg-[hsl(var(--slide-gold)/0.18)] border border-[hsl(var(--slide-gold))] text-[hsl(var(--slide-gold))] font-semibold"
        >
          {part}
        </span>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export const L1DeepResearchPrompt = () => {
  const isMobile = useIsMobile();
  const [copied, setCopied] = React.useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(DEEP_RESEARCH_PROMPT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col px-[20px] pt-[20px] pb-[24px] h-full gap-[8px]">
          <Eyebrow mobile>Шаг 1 · Deep Research</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">
            Недели ресёрча — за <span className="text-[hsl(var(--slide-gold))]">30 минут</span>.
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">
            Заполни <span className="text-[hsl(var(--slide-gold))]">[поля в скобках]</span> и вставь в Claude / ChatGPT / Gemini Deep Research.
          </p>
          <button
            onClick={handleCopy}
            className="self-start inline-flex items-center gap-[5px] px-[10px] py-[5px] rounded-[6px] border border-[hsl(var(--slide-gold))] text-[10px] font-mono uppercase tracking-[0.05em] text-[hsl(var(--slide-gold))] hover:bg-[hsl(var(--slide-gold)/0.1)] transition"
          >
            {copied ? <Check size={11} /> : <Copy size={11} />}
            {copied ? "Скопировано" : "Копировать промпт"}
          </button>
          <div className="flex-1 min-h-0 overflow-y-auto bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[10px] py-[10px] font-mono text-[8px] leading-[1.55] text-[hsl(var(--slide-text)/0.9)] whitespace-pre-wrap break-words prompt-scroll">
            {highlightDRPrompt(DEEP_RESEARCH_PROMPT)}
          </div>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col px-[140px] pt-[80px] pb-[80px] h-full gap-[20px]" style={{ minHeight: 0 }}>
        <Eyebrow>Шаг 1 · Deep Research в ChatGPT / Gemini / Claude</Eyebrow>
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
          То, на что ушли бы <span className="text-[hsl(var(--slide-gold))]">недели</span>, теперь делается за <span className="text-[hsl(var(--slide-gold))]">30 минут</span>.
        </h2>
        <div className="grid gap-[28px] flex-1" style={{ gridTemplateColumns: "1fr 1.3fr", minHeight: 0 }}>
          {/* LEFT */}
          <div className="flex flex-col bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[36px] py-[32px] gap-[20px]" style={{ minHeight: 0 }}>
            <p className="text-[14px] font-mono uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))]">
              Что делает Deep Research
            </p>
            <ul className="text-[20px] text-[hsl(var(--slide-text)/0.92)] leading-[1.6] space-y-[6px]">
              <li>• Парсит десятки источников за один прогон</li>
              <li>• Сравнивает конкурентов, цены, позиционирование</li>
              <li>• Достаёт цитаты пользователей с Reddit, G2, отзывов</li>
              <li>• Сводит всё в структурированный отчёт со ссылками</li>
            </ul>
            <div className="mt-auto px-[22px] py-[18px] border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] rounded-r-[6px]">
              <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.45]">
                90% фаундеров пропускают этот шаг — «и так понятно». В итоге строят то, что уже есть.
              </p>
            </div>
          </div>

          {/* RIGHT — prompt panel */}
          <div className="flex flex-col bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] overflow-hidden" style={{ minHeight: 0 }}>
            <div className="flex items-center justify-between px-[24px] py-[18px] border-b border-[hsl(var(--slide-border))] bg-[hsl(var(--slide-bg)/0.4)]">
              <div className="flex flex-col gap-[4px]">
                <p className="text-[13px] font-mono uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))]">
                  Мастер-промпт · бонус
                </p>
                <p className="text-[14px] text-[hsl(var(--slide-text-muted))]">
                  Заполни поля в <span className="text-[hsl(var(--slide-gold))]">[квадратных скобках]</span> и вставь в Deep Research
                </p>
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-[8px] px-[16px] py-[10px] rounded-[8px] border border-[hsl(var(--slide-gold))] font-mono text-[13px] uppercase tracking-[0.05em] font-semibold transition whitespace-nowrap"
                style={{
                  background: copied ? "hsl(var(--slide-gold))" : "transparent",
                  color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Скопировано" : "Копировать"}
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-[28px] py-[24px] font-mono text-[14px] leading-[1.65] text-[hsl(var(--slide-text)/0.92)] whitespace-pre-wrap break-words prompt-scroll" style={{ minHeight: 0 }}>
              {highlightDRPrompt(DEEP_RESEARCH_PROMPT)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide · AI Agent · FoundersLens (Lens) ========== */
const AgentSlide: React.FC<{
  eyebrow: string;
  titleHighlight: string;
  titleRest: string;
  intro: React.ReactNode;
  cards: { k: string; v: string }[];
  ctaTitle: React.ReactNode;
  ctaSub: string;
  url: string;
  shortUrl: string;
}> = ({ eyebrow, titleHighlight, titleRest, intro, cards, ctaTitle, ctaSub, url, shortUrl }) => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>{eyebrow}</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            <span className="text-[hsl(var(--slide-gold))]">{titleHighlight}</span> {titleRest}
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[10px]">
            {intro}
          </p>
          <div className="grid grid-cols-2 gap-[6px] mb-[8px]">
            {cards.map((c) => (
              <div
                key={c.k}
                className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[10px] py-[8px]"
              >
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{c.k}</p>
                <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.v}</p>
              </div>
            ))}
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.12)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px] flex items-center gap-[10px]">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{ctaTitle}</p>
              <p className="text-[8.5px] font-mono text-[hsl(var(--slide-gold))] mt-[2px]">{shortUrl}</p>
            </div>
            <div className="bg-white p-[3px] rounded-[3px] flex-shrink-0">
              <QRCodeSVG value={url} size={48} level="M" bgColor="#ffffff" fgColor="#0A0E1A" />
            </div>
          </div>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] mb-[24px]">
          <span className="text-[hsl(var(--slide-gold))]">{titleHighlight}</span> {titleRest}
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[32px] max-w-[1500px]">
          {intro}
        </p>
        <div className="grid grid-cols-4 gap-[18px] max-w-[1620px]">
          {cards.map((c) => (
            <div
              key={c.k}
              className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[24px] py-[22px]"
            >
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[8px]">{c.k}</p>
              <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{c.v}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold))] rounded-[12px] px-[36px] py-[22px] mt-[28px] max-w-[1620px] flex items-center justify-between gap-[24px]">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] mb-[6px]">
              Бонус для участников
            </p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">{ctaTitle}</p>
            <p className="font-mono text-[14px] text-[hsl(var(--slide-gold))] font-bold mt-[6px]">{shortUrl} →</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] mt-[4px]">{ctaSub}</p>
          </div>
          <div className="bg-white p-[8px] rounded-[8px] flex-shrink-0">
            <QRCodeSVG value={url} size={120} level="M" bgColor="#ffffff" fgColor="#0A0E1A" />
          </div>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

export const L1AgentLens = () => (
  <AgentSlide
    eyebrow="Шаг 2 · Мой AI Research Agent"
    titleHighlight="FoundersLens"
    titleRest="— рыночный ресёрч на уровне McKinsey за 10 минут."
    intro={<>Подхватывает там, где Deep Research заканчивается. <span className="text-[hsl(var(--slide-text))] font-semibold">30 конкурентов, TAM/SAM/SOM, тренды, креативы их рекламы</span> — и вердикт GO / PIVOT / NO-GO с планом на 30 дней.</>}
    cards={[
      { k: "Анализ рынка", v: "Размер, динамика, ключевые игроки." },
      { k: "30 конкурентов", v: "Цены, позиционирование, слабые места." },
      { k: "Реклама конкурентов", v: "Что крутят и на каких креативах." },
      { k: "Вердикт + план", v: "GO / PIVOT / NO-GO, 30-дневный roadmap." },
    ]}
    ctaTitle={<><span className="font-bold">FoundersLens</span> — прогоняет твою идею за один запуск.</>}
    ctaSub="~10 минут · 25-страничный HTML-отчёт · работает на твоём LLM-ключе"
    url="https://founders-circle.space/agents/lens"
    shortUrl="founders-circle.space/agents/lens"
  />
);

export const L1AgentPmf = () => (
  <AgentSlide
    eyebrow="Шаг 3 · Мой AI Validation Agent"
    titleHighlight="PMF Agent"
    titleRest="— честная оценка Product-Market Fit."
    intro={<>Когда ресёрч сделан — нужно понять: <span className="text-[hsl(var(--slide-text))] font-semibold">а есть ли у идеи шанс на PMF?</span> Агент считает 9-осевой PMF Score и не льстит. Если score &lt; 50 — Pivot Advisor предлагает альтернативные траектории.</>}
    cards={[
      { k: "9-осевой скор", v: "Pain, market, timing, demand, monetization, экономика." },
      { k: "Honest-сигнал", v: "GO / VALIDATE / PIVOT — без подбадривания." },
      { k: "Pivot Advisor", v: "Если слабо — генерирует 3 альтернативных направления." },
      { k: "Карта рисков", v: "Что обвалит идею и как закрыть до запуска." },
    ]}
    ctaTitle={<><span className="font-bold">PMF Agent</span> — проверяет, готова ли идея к стройке.</>}
    ctaSub="~10–15 минут · PMF-скоринг + pivot-сценарии · работает на твоём LLM-ключе"
    url="https://founders-circle.space/agents/pmf"
    shortUrl="founders-circle.space/agents/pmf"
  />
);

// Lesson 1 — slides (Market & Competitor Research, v3 restructure)
export const slides = [
  S1,                       // 1  Title
  S2,                       // 2  Main insight (rewritten)
  S5,                       // 3  InterviewNinja — личный провальный кейс (title)
  S6,                       // 4  InterviewNinja — анатомия (что строил + цифры)
  S3,                       // 5  Mirror question
  S4,                       // 6  Stats
  S4b,                      // 7  Mentor intro
  S9,                       // 8  MetaMinder success case
  L1ThreeLevels,            // 9  Three levels of competitors
  L1EightDimensions,        // 10 8 dimensions to check
  L1NegativeReviews,        // 11 Negative reviews are gold
  L1Perplexity,             // 12 Perplexity · 5 prompts
  L1DeepResearchPrompt,     // 13 Deep Research master prompt (replaces VerificationTools)
  L1AgentLens,              // 14 FoundersLens AI agent
  L1AgentPmf,               // 15 PMF AI agent
  L1GapsPositioning,        // 16 3 gaps + Positioning formula + mid CTA
  L1PracticeNow,            // 17 Practice now · 10 min
  L1FullPlan,               // 18 Full 90-min plan + templates
  L1Closing,                // 19 Closing + CTA → Lesson 2
];
