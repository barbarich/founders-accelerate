import { useIsMobile } from "@/hooks/use-mobile";

const cases = [
  {
    aha: "«Увидел первый готовый отчёт»",
    freq: "раз в неделю",
    nsm: "Отчётов создано за неделю",
  },
  {
    aha: "«Получил первый ответ от клиента»",
    freq: "каждый день",
    nsm: "Ответов получено за день",
  },
  {
    aha: "«Провёл первую тренировку»",
    freq: "3 раза в неделю",
    nsm: "Тренировок за неделю на человека",
  },
];

export default function L9Slide07FindYourNSM() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Как найти свою
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          North Star = <span className="text-[hsl(var(--slide-gold))]">Aha-момент</span> × частота
        </h2>
        <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.55] mb-[10px]">
          Ты уже нашёл свой Aha в уроке 7. North Star - это просто его счётчик. Новой теории здесь нет.
        </p>
        <div className="space-y-[7px] mb-[10px]">
          {cases.map((c, i) => (
            <div key={i} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[7px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                {c.aha} <span className="text-[hsl(var(--slide-gold))]">×</span> {c.freq}
              </p>
              <p className="text-[11px] text-[hsl(var(--slide-gold))] font-bold leading-[1.35] mt-[3px]">→ {c.nsm}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Если твой Aha случается <span className="text-[hsl(var(--slide-gold))]">один раз в жизни клиента</span> - это не Aha, это установка. Вернись к уроку 7.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Как найти свою
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.01em]">
        North Star = <span className="text-[hsl(var(--slide-gold))]">Aha-момент</span> × частота
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1800px] mb-[26px]">
        Ты уже нашёл свой Aha в уроке 7. North Star - это просто его счётчик. Новой теории здесь нет.
      </p>
      <div className="space-y-[14px] max-w-[1800px] mb-[26px]">
        {cases.map((c, i) => (
          <div key={i} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)] flex items-center gap-[24px]">
            <p className="text-[21px] text-[hsl(var(--slide-text-muted))] leading-[1.4] flex-1">
              {c.aha} <span className="text-[hsl(var(--slide-gold))] font-bold">×</span> {c.freq}
            </p>
            <p className="text-[23px] text-[hsl(var(--slide-gold))] font-bold leading-[1.35] w-[480px] shrink-0">→ {c.nsm}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1800px]">
        <p className="text-[23px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Если твой Aha случается <span className="text-[hsl(var(--slide-gold))]">один раз в жизни клиента</span> - это не Aha, это установка. Вернись к уроку 7.
        </p>
      </div>
    </div>
  );
}
