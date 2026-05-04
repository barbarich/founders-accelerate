import { useIsMobile } from "@/hooks/use-mobile";

const rows = [
  { metric: "D1", human: "Вернулся хотя бы раз в течение 1 дня после установки", saas: "30–40%", social: "50–70%", utility: "20–30%", market: "25–35%" },
  { metric: "D7", human: "Возвращался хотя бы раз за первые 7 дней", saas: "20–25%", social: "35–50%", utility: "10–15%", market: "15–20%" },
  { metric: "D30", human: "Возвращался хотя бы раз за первые 30 дней", saas: "10–15%", social: "20–35%", utility: "5–8%", market: "8–12%" },
];

export default function M8Slide05JargonTranslator() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Переводчик жаргона
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          D1 / D7 / D30 — на человеческом
        </h2>
        <div className="space-y-[6px] mb-[10px]">
          {rows.map((r) => (
            <div key={r.metric} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <div className="flex items-baseline gap-[8px] mb-[2px]">
                <span className="font-mono text-[12px] font-bold text-[hsl(var(--slide-gold))]">{r.metric}</span>
                <span className="text-[11px] text-[hsl(var(--slide-text))]">{r.human}</span>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                SaaS {r.saas} · соцсеть {r.social} · утилита {r.utility} · маркетплейс {r.market}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Если ваш D1 ниже нижней границы — чините не маркетинг, а первый день в продукте.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Переводчик жаргона
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px]">
        D1 / D7 / D30 — на человеческом языке
      </h2>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] overflow-hidden max-w-[1500px]">
        <div className="grid grid-cols-[120px_1fr_repeat(4,140px)] gap-0 px-[28px] py-[16px] bg-[hsl(var(--slide-gold)/0.08)] border-b border-[hsl(var(--slide-border)/0.3)]">
          <span className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Метрика</span>
          <span className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">По-человечески</span>
          <span className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">SaaS</span>
          <span className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Соцсеть</span>
          <span className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Утилита</span>
          <span className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Маркетплейс</span>
        </div>
        {rows.map((r) => (
          <div key={r.metric} className="grid grid-cols-[120px_1fr_repeat(4,140px)] gap-0 px-[28px] py-[18px] border-b border-[hsl(var(--slide-border)/0.2)] last:border-0 items-baseline">
            <span className="font-mono text-[26px] font-bold text-[hsl(var(--slide-gold))]">{r.metric}</span>
            <span className="text-[22px] text-[hsl(var(--slide-text))]">{r.human}</span>
            <span className="text-[20px] text-[hsl(var(--slide-text-muted))]">{r.saas}</span>
            <span className="text-[20px] text-[hsl(var(--slide-text-muted))]">{r.social}</span>
            <span className="text-[20px] text-[hsl(var(--slide-text-muted))]">{r.utility}</span>
            <span className="text-[20px] text-[hsl(var(--slide-text-muted))]">{r.market}</span>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold mt-[28px] max-w-[1400px] leading-[1.4]">
        Если ваш D1 ниже нижней границы — чините не маркетинг, а первый день в продукте.
      </p>
    </div>
  );
}