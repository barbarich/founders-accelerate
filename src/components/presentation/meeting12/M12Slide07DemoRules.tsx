import { useIsMobile } from "@/hooks/use-mobile";

const flow = [
  "5 минут — твой питч. 3 минуты — фидбек группы.",
  "Покажи продукт вживую, а не рассказывай словами.",
  "Порядок — по готовности. Таймер на экране.",
];

const strong = [
  { t: "Понятно за 30 секунд", d: "Что это и для кого" },
  { t: "Видно, что это нужно людям", d: "Цифры или живой интерес" },
  { t: "В конце — чёткий запрос", d: "Что именно ты просишь" },
];

export default function M12Slide07DemoRules() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Демо-день · правила
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
          Как проходят <span className="text-[hsl(var(--slide-gold))]">твои 5 минут</span>
        </h2>
        <div className="space-y-[5px] mb-[12px]">
          {flow.map((f) => (
            <p key={f} className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))] mr-[6px]">→</span>{f}</p>
          ))}
        </div>
        <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[5px]">Сильный питч = 3 вещи</p>
        <div className="space-y-[4px]">
          {strong.map((s, i) => (
            <div key={s.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[5px] flex items-baseline gap-[8px]">
              <span className="font-display text-[15px] font-bold text-[hsl(var(--slide-gold))] leading-none">{i + 1}</span>
              <div>
                <span className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
                <span className="text-[9px] text-[hsl(var(--slide-text-muted))]"> — {s.d}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Демо-день · правила
      </p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px] tracking-[-0.02em]">
        Как проходят <span className="text-[hsl(var(--slide-gold))]">твои 5 минут</span>
      </h2>
      <div className="space-y-[12px] mb-[34px] max-w-[1500px]">
        {flow.map((f) => (
          <p key={f} className="text-[28px] text-[hsl(var(--slide-text))] leading-[1.35]">
            <span className="text-[hsl(var(--slide-gold))] mr-[14px]">→</span>{f}
          </p>
        ))}
      </div>
      <p className="text-[18px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[14px]">Сильный питч = 3 вещи</p>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1700px]">
        {strong.map((s, i) => (
          <div key={s.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[22px]">
            <span className="font-display text-[40px] font-bold text-[hsl(var(--slide-gold))] leading-none">{i + 1}</span>
            <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mt-[10px] mb-[4px]">{s.t}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
