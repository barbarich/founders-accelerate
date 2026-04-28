import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { QRCodeSVG } from "qrcode.react";
import titleBg from "@/assets/slides/title-bg.jpg";
import photoMichael from "@/assets/slides/photo-michael.jpg";

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

const Footer: React.FC<{ index: number }> = ({ index }) => (
  <div
    className="absolute"
    style={{ right: 48, bottom: 28, color: "hsl(var(--slide-text-muted))", fontSize: 14, letterSpacing: "0.04em" }}
  >
    Михаэль · Урок 1 из 4 · Slide {index}/29
  </div>
);

const FooterMobile: React.FC<{ index: number }> = ({ index }) => (
  <div
    className="absolute"
    style={{ right: 14, bottom: 10, color: "hsl(var(--slide-text-muted))", fontSize: 8, letterSpacing: "0.04em" }}
  >
    Slide {index}/29
  </div>
);

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
          <h1 className="font-display text-[34px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
            Урок 1.<br />Валидация
          </h1>
          <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mt-[14px] leading-[1.5]">
            Как проверить идею до того, как написать первую строчку кода
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
        <h1 className="font-display text-[88px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
          Урок 1. Валидация
        </h1>
        <p className="text-[30px] text-[hsl(var(--slide-text-muted))] mt-[28px] leading-[1.4] max-w-[1100px]">
          Как проверить идею до того, как написать первую строчку кода
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
      Валидация — это не доказательство того, что идея хорошая. Это попытка её убить.
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
          <Eyebrow mobile>Вопрос на старт</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[16px]">
            С кем из тех, кто НЕ твой друг, ты говорил про свою идею за последние две недели?
          </h2>
          <p className="text-[12px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
            Если ноль — этот урок изменит всё, что ты делаешь дальше.
          </p>
        </div>
        <FooterMobile index={3} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1600px]">
        <Eyebrow>Вопрос на старт</Eyebrow>
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em]">
          С кем из тех, кто НЕ твой друг, ты говорил про свою идею за последние две недели?
        </h2>
        <p className="text-[28px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Если ноль — этот урок изменит всё, что ты делаешь дальше.
        </p>
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
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Статистика</Eyebrow>
          <div className="space-y-[8px] mb-[12px]">
            {stats.map(([n, t]) => (
              <div key={n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[7px] px-[10px] py-[8px] flex gap-[10px] items-baseline">
                <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] font-bold shrink-0 min-w-[64px]">{n}</span>
                <span className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.3]">{t}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold">
            Это не статистика. Это распределение твоих шансов.
          </p>
        </div>
        <FooterMobile index={4} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Статистика</Eyebrow>
        <div className="space-y-[18px] max-w-[1500px] mb-[28px]">
          {stats.map(([n, t]) => (
            <div key={n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[36px] py-[24px] flex gap-[36px] items-baseline">
              <span className="font-mono text-[64px] text-[hsl(var(--slide-gold))] font-bold leading-none shrink-0 min-w-[260px]">{n}</span>
              <span className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.35]">{t}</span>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold">
          Это не статистика. Это распределение твоих шансов.
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
    ["3 мин", "Напиши 5 имён людей, с которыми ты будешь говорить. Не друзей."],
    ["3 мин", "Сформулируй главную гипотезу: «Я предполагаю, что [кто] страдает от [чего] и сейчас решает это [как].»"],
    ["5 мин", "Адаптируй 3 вопроса из шаблона под свою нишу. Не копируй — переписывай своими словами."],
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Сейчас — твоя очередь</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[12px]">
            Сейчас — твоя очередь
          </h2>
          <div className="space-y-[6px] mb-[10px]">
            {tasks.map(([t, txt]) => <TaskRow mobile key={t + txt} time={t} text={txt} />)}
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            «Поставь видео на паузу. Сделай это руками. Иначе остаток урока бесполезен.»
          </p>
        </div>
        <FooterMobile index={26} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Практика</Eyebrow>
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px]">
          Сейчас — твоя очередь
        </h2>
        <div className="space-y-[14px] max-w-[1500px] mb-[28px]">
          {tasks.map(([t, txt]) => <TaskRow key={t + txt} time={t} text={txt} />)}
        </div>
        <p className="text-[24px] text-[hsl(var(--slide-gold))] italic leading-[1.4] max-w-[1500px]">
          «Поставь видео на паузу. Сделай это руками. Иначе остаток урока бесполезен.»
        </p>
      </div>
      <Footer index={26} />
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
  const items = [
    "У тебя есть идея, и ты не хочешь потерять 18 месяцев",
    "Ты уже строишь, но застрял",
    "Ты прошёл этот урок и понял, что хочешь, чтобы кто-то тебя вёл",
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Программа</Eyebrow>
          <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
            The Founders Circle
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold mb-[12px]">
            3 месяца. 12 встреч. От идеи до первых клиентов.
          </p>
          <ul className="space-y-[3px] mb-[12px]">
            {items.map((t) => (
              <li key={t} className="text-[9.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] mr-[4px]">→</span>{t}
              </li>
            ))}
          </ul>
          <a
            href="https://founders-circle.space"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] px-[12px] py-[7px] rounded-[7px] text-[10px] font-bold no-underline self-start"
          >
            founders-circle.space →
          </a>
        </div>
        <FooterMobile index={28} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Программа</Eyebrow>
        <h2 className="font-display text-[80px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
          The Founders Circle
        </h2>
        <p className="text-[28px] text-[hsl(var(--slide-gold))] font-semibold mb-[40px]">
          3 месяца. 12 встреч. От идеи до первых клиентов.
        </p>
        <ul className="space-y-[14px] mb-[44px] max-w-[1400px]">
          {items.map((t) => (
            <li key={t} className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.4]">
              <span className="text-[hsl(var(--slide-gold))] mr-[14px]">→</span>{t}
            </li>
          ))}
        </ul>
        <a
          href="https://founders-circle.space"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] px-[36px] py-[20px] rounded-[12px] text-[24px] font-bold no-underline self-start tracking-[0.02em]"
        >
          Узнать больше → founders-circle.space
        </a>
      </div>
      <Footer index={28} />
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
            <p className="text-[12px] font-medium italic text-[hsl(var(--slide-text))] leading-[1.45]">
              «Валидация — это не доказательство. Это попытка убить идею.<br /><br />
              Если идея пережила 10 правильных разговоров — можно строить.<br /><br />
              Если нет — ты только что сэкономил себе 18 месяцев жизни.»
            </p>
          </div>
        </div>
        <FooterMobile index={29} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Закрывающая мысль</Eyebrow>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[44px] py-[40px] max-w-[1600px]">
          <p className="text-[40px] font-medium italic text-[hsl(var(--slide-text))] leading-[1.4]">
            «Валидация — это не доказательство. Это попытка убить идею.<br /><br />
            Если идея пережила 10 правильных разговоров — можно строить.<br /><br />
            Если нет — ты только что сэкономил себе 18 месяцев жизни.»
          </p>
        </div>
      </div>
      <Footer index={29} />
    </Stage>
  );
};

/* ========== Slide 22 — Homework ========== */
export const S22 = () => {
  const isMobile = useIsMobile();
  const items = [
    "Назначь 3 разговора в ближайшие 7 дней",
    "Запиши, что ты услышал — буквально, словами собеседника",
    "На Уроке 2 ты будешь работать с этими записями",
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>До Урока 2</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
            До Урока 2
          </h2>
          <ol className="space-y-[6px] mb-[12px]">
            {items.map((t, i) => (
              <li key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[7px] flex gap-[8px]">
                <span className="font-mono text-[12px] text-[hsl(var(--slide-gold))] font-bold shrink-0">{i + 1}</span>
                <span className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.35]">{t}</span>
              </li>
            ))}
          </ol>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4]">
            Урок 2 — Ресерч и позиционирование. Самый дорогой навык 2026 года.
          </p>
        </div>
        <FooterMobile index={30} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Домашнее задание</Eyebrow>
        <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
          До Урока 2
        </h2>
        <ol className="space-y-[14px] max-w-[1500px] mb-[36px]">
          {items.map((t, i) => (
            <li key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[22px] flex gap-[24px] items-baseline">
              <span className="font-mono text-[40px] text-[hsl(var(--slide-gold))] font-bold leading-none shrink-0">{i + 1}</span>
              <span className="text-[28px] text-[hsl(var(--slide-text))] leading-[1.4]">{t}</span>
            </li>
          ))}
        </ol>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4]">
          Урок 2 — Ресерч и позиционирование. Самый дорогой навык 2026 года.
        </p>
      </div>
      <Footer index={30} />
    </Stage>
  );
};

export const slides = [S1, S2, S3, S4, S4b, S5, S6, S7, S8, S9, S10, S11, S12, S11c, S12a, S12b, S12c, S12d, S12e, S12f, S13, S14, S15, S16, S18, S19, S20, S21, S22];
