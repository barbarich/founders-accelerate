import { useIsMobile } from "@/hooks/use-mobile";

const all = [
  { n: "1", t: "5 разговоров с клиентом", d: "B2B-трек = демо-звонки. B2C-трек = juicy интервью с пользователем. Pre-sales = design partner discovery." },
  { n: "2", t: "1 закрытая сделка / предоплата / LOI", d: "Что-то с подписью или деньгами. Не «обещали подумать»." },
  { n: "3", t: "3 testimonials", d: "Текст + имя + LinkedIn URL + согласие на публикацию." },
  { n: "4", t: "1 networking touch", d: "Warm intro отправлен ИЛИ зарегистрирован на 1 нишевый meetup в ближайшие 30 дней." },
  { n: "5", t: "5-мин питч готов к M12", d: "Структура: проблема (1м) · решение (1м) · traction (1м) · команда + ask (1м) · CTA (1м). Прорепетирован вслух 3 раза." },
];

const b2c = {
  who: "B2C-трек · Mila · Lea · Dira",
  body: "Параллельно: 2-я итерация Meta-креативов. Возьми те 1–2 угла, что показали лучший CTR на первой неделе → сделай 5 вариаций. Скриншот результатов к M12.",
};

export default function M11Slide23Homework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Домашка · к встрече 12 (финал)
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Первая закрытая сделка <span className="text-[hsl(var(--slide-gold))]">+ питч готов</span>
        </h2>
        <div className="space-y-[4px] mb-[5px]">
          {all.map((t) => (
            <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[4px]">
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[11px] font-bold text-[hsl(var(--slide-gold))]">{t.n}</span>
                <span className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[18px]">{t.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[7px] py-[3px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))]">{b2c.who}</p>
          <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{b2c.body}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Домашка · к встрече 12 (финал)
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em]">
        Первая закрытая сделка <span className="text-[hsl(var(--slide-gold))]">+ питч готов</span>
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px] mb-[18px]">
        {all.map((t) => (
          <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[16px]">
            <div className="flex items-baseline gap-[14px] mb-[5px]">
              <span className="font-display text-[36px] font-bold text-[hsl(var(--slide-gold))] leading-none">{t.n}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5] ml-[50px]">{t.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[28px] py-[14px] max-w-[1700px]">
        <p className="text-[13px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] font-bold mb-[5px]">{b2c.who}</p>
        <p className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">{b2c.body}</p>
      </div>
    </div>
  );
}
