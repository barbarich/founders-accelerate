import { useIsMobile } from "@/hooks/use-mobile";

const metrics = [
  { name: "Touches / неделя", healthy: "30+", alarm: "<10", what: "Любое касание: DM · письмо · комментарий" },
  { name: "Разговоры / неделя", healthy: "5+", alarm: "<2", what: "Реальные 15+ мин звонки с целевым человеком" },
  { name: "Demo / месяц", healthy: "10+", alarm: "<3", what: "Звонки где ты pitched продукт" },
  { name: "Close rate", healthy: "20–30%", alarm: "<10%", what: "Из demo → платящий клиент" },
  { name: "CAC (фактический)", healthy: "<1/3 LTV", alarm: ">1/2 LTV", what: "Cost of acquiring customer · реальные часы × твоя ставка" },
];

const errors = [
  "Visiting-card hoarding — собрал 50, не написал никому в 48 часов",
  "Нет CRM (даже Notion с 4 колонками) → теряешь контакты, теряешь warmth",
  "Pitch до discovery → продаёшь не то, что ему нужно",
  "Нарушение one-CTA → клиент не понимает что делать, ничего не делает",
  "Стесняешься спрашивать про деньги → ты не серьёзный для серьёзных клиентов",
];

export default function M11Slide20MetricsErrors() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Здоровье pipeline + ошибки
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          5 метрик · <span className="text-[hsl(var(--slide-gold))]">5 anti-patterns</span>
        </h2>
        <div className="space-y-[2px] mb-[4px]">
          {metrics.map((m) => (
            <div key={m.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[2px]">
              <div className="flex items-baseline justify-between gap-[4px]">
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{m.name}</p>
                <p className="text-[7px]"><span className="text-[hsl(var(--slide-gold))]">{m.healthy}</span> <span className="text-[hsl(var(--slide-text-muted))]">| тревога: {m.alarm}</span></p>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.what}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[6px] py-[3px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase mb-[1px]">5 ошибок одиночек 2026</p>
          {errors.map((e, i) => (
            <p key={i} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{i + 1}. {e}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Здоровье pipeline + ошибки одиночек
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px] tracking-[-0.02em]">
        5 метрик · <span className="text-[hsl(var(--slide-gold))]">5 anti-patterns</span>
      </h2>
      <div className="grid grid-cols-5 gap-[12px] mb-[20px] max-w-[1700px]">
        {metrics.map((m) => (
          <div key={m.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[16px] py-[12px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] mb-[3px]">{m.name}</p>
            <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))] mb-[1px]">{m.healthy}</p>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[5px]">тревога: {m.alarm}</p>
            <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.what}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[28px] py-[14px] max-w-[1700px]">
        <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[8px]">5 ошибок одиночек 2026 — на которых ломаются первые продажи</p>
        <div className="grid grid-cols-5 gap-[12px]">
          {errors.map((e, i) => (
            <p key={i} className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.45]"><span className="text-[hsl(var(--slide-gold))] font-bold">{i + 1}.</span> {e}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
