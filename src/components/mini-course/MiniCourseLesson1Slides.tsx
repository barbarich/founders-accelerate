import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import titleBg from "@/assets/slides/title-bg.jpg";

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
    Михаэль · Урок 1 из 4 · Slide {index}/22
  </div>
);

const FooterMobile: React.FC<{ index: number }> = ({ index }) => (
  <div
    className="absolute"
    style={{ right: 14, bottom: 10, color: "hsl(var(--slide-text-muted))", fontSize: 8, letterSpacing: "0.04em" }}
  >
    Slide {index}/22
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

export const S5 = () => (
  <CaseTitle
    index={5}
    name="InterviewNinja"
    sub="2017–2018. Стартап, который я закрыл."
    punch="18 месяцев. Команда. Деньги. Закрыто."
  />
);

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
                Платформа подготовки к техническим собеседованиям с ментором. Match с интервьюером, mock-сессии, обратная связь.
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[7px] px-[12px] py-[10px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[4px]">Цифры</p>
              <ul className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.5]">
                <li>• 18 месяцев разработки</li>
                <li>• Команда: 4 человека</li>
                <li>• Вложено: ~$120k</li>
                <li>• Платящих клиентов на момент закрытия: 0</li>
              </ul>
            </div>
          </div>
        </div>
        <FooterMobile index={6} />
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
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.5]">
              Платформа подготовки к техническим собеседованиям с ментором. Match с интервьюером, mock-сессии, обратная связь.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[36px] py-[32px]">
            <h3 className="text-[34px] font-bold text-[hsl(var(--slide-gold))] mb-[20px]">Цифры</h3>
            <ul className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.7] space-y-[2px]">
              <li>• 18 месяцев разработки</li>
              <li>• Команда: 4 человека</li>
              <li>• Вложено: ~$120k</li>
              <li>• Платящих клиентов на момент закрытия: <span className="text-[hsl(var(--slide-gold))] font-bold">0</span></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer index={6} />
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

export const S7 = () => (
  <Numbered
    index={7}
    eyebrow="Сигналы, которые я не услышал"
    title="Сигналы, которые я не услышал"
    items={[
      "Никто не платил до того, как был продукт",
      "«Интересно» вместо «когда я могу попробовать?»",
      "Хвалили друзья. Не хвалили незнакомцы.",
      "Я задавал вопросы, чтобы услышать «да»",
    ]}
  />
);

export const S8 = () => (
  <Numbered
    index={8}
    eyebrow="Что я сделал бы сейчас"
    title="Что я сделал бы сейчас"
    items={[
      "Спросил бы $1 до постройки",
      "Говорил бы с теми, кто меня не любит",
      "Слушал бы паузы, а не слова",
    ]}
  />
);

export const S9 = () => (
  <CaseTitle
    index={9}
    name="MetaMinder"
    sub="2019–2025. B2B SaaS LMS. Экзит."
    punch="В первой версии — никто не покупал. Во второй — нашли свою нишу. Разница — 47 разговоров."
  />
);

export const S10 = () => (
  <CaseTitle
    index={10}
    name="Mikey"
    sub="2025–сейчас. AI-matchmaking для Израиля."
    punch="Валидация — это не разовый акт. Это ритм."
  />
);

export const S11 = () => (
  <CaseTitle
    index={11}
    name="RunEverywhere"
    sub="50,000+ пользователей в 107 странах."
    punch="Я не задавал вопросы. Рынок сам говорил. Я просто умел слушать."
  />
);

/* ========== Slide 12 — Big quote ========== */
export const S12 = () => (
  <div className="w-full h-full relative">
    <PullQuote sub="">
      Валидация — это не доказательство того, что идея хорошая. Это попытка её убить.
    </PullQuote>
    <Footer index={12} />
  </div>
);

/* ========== Slide 13 — Method intro ========== */
export const S13 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Метод</Eyebrow>
          <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px]">
            Теперь — метод.
          </h2>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px]">
            <p className="text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">
              10 разговоров до первого пикселя.
            </p>
          </div>
        </div>
        <FooterMobile index={13} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Метод</Eyebrow>
        <h2 className="font-display text-[80px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[40px] tracking-[-0.02em]">
          Теперь — метод.
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[40px] py-[32px] max-w-[1400px]">
          <p className="text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
            10 разговоров до первого пикселя.
          </p>
        </div>
      </div>
      <Footer index={13} />
    </Stage>
  );
};

/* ========== Slide 14 — Who NOT to interview ========== */
export const S14 = () => {
  const isMobile = useIsMobile();
  const items = ["Друзей", "Семью", "Тех, кому ты нравишься"];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Кого не интервьюируешь</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[12px]">
            Кого ты НЕ интервьюируешь
          </h2>
          <div className="space-y-[6px] mb-[12px]">
            {items.map((t) => (
              <div key={t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px] flex gap-[8px] items-center">
                <span className="text-red-400 text-[14px]">✕</span>
                <span className="text-[12px] text-[hsl(var(--slide-text))]">{t}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            «Ты ищешь людей, которые скажут "это не работает" — потому что только они скажут правду.»
          </p>
        </div>
        <FooterMobile index={14} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Кого ты НЕ интервьюируешь</Eyebrow>
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px]">
          Кого ты НЕ интервьюируешь
        </h2>
        <div className="space-y-[14px] max-w-[1400px] mb-[36px]">
          {items.map((t) => (
            <div key={t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[22px] flex gap-[24px] items-center">
              <span className="text-red-400 text-[36px] leading-none">✕</span>
              <span className="text-[34px] text-[hsl(var(--slide-text))] font-medium">{t}</span>
            </div>
          ))}
        </div>
        <p className="text-[24px] text-[hsl(var(--slide-gold))] italic leading-[1.4] max-w-[1500px]">
          «Ты ищешь людей, которые скажут "это не работает" — потому что только они скажут правду.»
        </p>
      </div>
      <Footer index={14} />
    </Stage>
  );
};

/* ========== Slide 15 — Bad vs Good question ========== */
export const S15 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Как спрашивать</Eyebrow>
          <div className="space-y-[8px] mb-[12px]">
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/30 rounded-[7px] px-[12px] py-[10px]">
              <p className="text-[10px] font-bold text-red-400 uppercase tracking-[0.15em] mb-[4px]">Плохо</p>
              <p className="text-[11px] italic text-[hsl(var(--slide-text))] leading-[1.4]">
                «Тебе бы пригодилось приложение, которое...?»
              </p>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[7px] px-[12px] py-[10px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[4px]">Хорошо</p>
              <p className="text-[11px] italic text-[hsl(var(--slide-text))] leading-[1.4]">
                «Расскажи, как ты решал эту проблему в последний раз?»
              </p>
            </div>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            «Спрашивай про прошлое. Не про будущее. Прошлое — данные. Будущее — фантазии.»
          </p>
        </div>
        <FooterMobile index={15} />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Как спрашивать</Eyebrow>
        <div className="grid grid-cols-2 gap-[28px] max-w-[1600px] mb-[36px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/30 rounded-[16px] px-[36px] py-[32px]">
            <p className="text-[20px] font-bold text-red-400 uppercase tracking-[0.15em] mb-[18px]">Плохо</p>
            <p className="text-[28px] italic text-[hsl(var(--slide-text))] leading-[1.4]">
              «Тебе бы пригодилось приложение, которое...?»
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[16px] px-[36px] py-[32px]">
            <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[18px]">Хорошо</p>
            <p className="text-[28px] italic text-[hsl(var(--slide-text))] leading-[1.4]">
              «Расскажи, как ты решал эту проблему в последний раз?»
            </p>
          </div>
        </div>
        <p className="text-[26px] text-[hsl(var(--slide-gold))] italic leading-[1.4] max-w-[1600px]">
          «Спрашивай про прошлое. Не про будущее. Прошлое — данные. Будущее — фантазии.»
        </p>
      </div>
      <Footer index={15} />
    </Stage>
  );
};

/* ========== Slide 16 — Pass/Fail ========== */
export const S16 = () => {
  const isMobile = useIsMobile();
  const pass = [
    "Описывают ту же боль теми же словами",
    "Сами рассказывают про костыли",
    "Спрашивают «когда я могу попробовать?»",
    "Готовы заплатить ДО продукта",
  ];
  const fail = [
    "«Интересная идея»",
    "«Я бы попробовал»",
    "«У моего друга была такая проблема»",
    "Пауза перед ответом",
  ];
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Сигналы</Eyebrow>
          <div className="grid grid-cols-2 gap-[6px]">
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[6px] px-[8px] py-[8px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[6px]">Pass</p>
              <ul className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4] space-y-[3px]">
                {pass.map((t) => <li key={t}>• {t}</li>)}
              </ul>
            </div>
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/30 rounded-[6px] px-[8px] py-[8px]">
              <p className="text-[9px] font-bold text-red-400 uppercase tracking-[0.15em] mb-[6px]">Fail</p>
              <ul className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4] space-y-[3px]">
                {fail.map((t) => <li key={t}>• {t}</li>)}
              </ul>
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
        <Eyebrow>Сигналы — pass / fail</Eyebrow>
        <div className="grid grid-cols-2 gap-[28px] max-w-[1600px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[16px] px-[36px] py-[32px]">
            <p className="text-[24px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[24px]">Pass</p>
            <ul className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.55] space-y-[10px]">
              {pass.map((t) => <li key={t}>• {t}</li>)}
            </ul>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/30 rounded-[16px] px-[36px] py-[32px]">
            <p className="text-[24px] font-bold text-red-400 uppercase tracking-[0.15em] mb-[24px]">Fail</p>
            <ul className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.55] space-y-[10px]">
              {fail.map((t) => <li key={t}>• {t}</li>)}
            </ul>
          </div>
        </div>
      </div>
      <Footer index={16} />
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
        <FooterMobile index={17} />
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
      <Footer index={17} />
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
        <FooterMobile index={18} />
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
      <Footer index={18} />
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
        <FooterMobile index={19} />
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
      <Footer index={19} />
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
        <FooterMobile index={20} />
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
      <Footer index={20} />
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
        <FooterMobile index={21} />
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
      <Footer index={21} />
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
        <FooterMobile index={22} />
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
      <Footer index={22} />
    </Stage>
  );
};

export const slides = [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S16, S17, S18, S19, S20, S21, S22];
