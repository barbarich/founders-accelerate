import { useIsMobile } from "@/hooks/use-mobile";

const benchmarks = [
  { cat: "Mobile apps (среднее)", d1: "25%", d7: "11%", d30: "4%", source: "AppsFlyer 2024" },
  { cat: "Игры", d1: "29%", d7: "10%", d30: "3%", source: "Adjust Benchmarks" },
  { cat: "SaaS B2C", d1: "37%", d7: "19%", d30: "10%", source: "Mixpanel 2024" },
  { cat: "SaaS B2B (топ-квартиль)", d1: "55%", d7: "38%", d30: "28%", source: "OpenView" },
  { cat: "Соцсети / messaging", d1: "62%", d7: "45%", d30: "32%", source: "Sensor Tower" },
  { cat: "Duolingo (бенчмарк)", d1: "≈65%", d7: "≈55%", d30: "≈55%", source: "Public IR data" },
];

export default function L9Slide03ShockNumber() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Бенчмарки · Терять пользователей — это норма
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Даже у лучших уходит большинство.
        </h2>
        <p className="text-[10.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[10px]">
          % пользователей, которые возвращаются хотя бы раз за период:
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] overflow-hidden">
          <div className="grid grid-cols-[1fr_36px_36px_36px] gap-[4px] px-[8px] py-[5px] bg-[hsl(var(--slide-gold)/0.08)] text-[8px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))]">
            <span>Категория</span><span className="text-right">D1</span><span className="text-right">D7</span><span className="text-right">D30</span>
          </div>
          {benchmarks.map((b) => (
            <div key={b.cat} className="grid grid-cols-[1fr_36px_36px_36px] gap-[4px] px-[8px] py-[4px] border-t border-[hsl(var(--slide-border)/0.2)] text-[9.5px]">
              <span className="text-[hsl(var(--slide-text))]">{b.cat}</span>
              <span className="text-right text-[hsl(var(--slide-text-muted))] font-mono">{b.d1}</span>
              <span className="text-right text-[hsl(var(--slide-text-muted))] font-mono">{b.d7}</span>
              <span className="text-right text-[hsl(var(--slide-gold))] font-mono font-bold">{b.d30}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mt-[8px]">
          Если у тебя D30 = 5–10% — ты в рынке. Не паникуй, работай с теми, кто остался.
        </p>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted)/0.7)] italic mt-[4px]">
          AppsFlyer · Mixpanel · OpenView · Sensor Tower · 2024
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Бенчмарки retention · Терять пользователей — это норма
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Даже у лучших уходит большинство. <span className="text-[hsl(var(--slide-text-muted))]">Это математика, а не катастрофа.</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[22px] max-w-[1200px]">
        Процент пользователей, которые возвращаются <span className="text-[hsl(var(--slide-text))] font-semibold">хотя бы раз</span> в течение D1 / D7 / D30 после первого захода:
      </p>

      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] overflow-hidden max-w-[1500px]">
        <div className="grid grid-cols-[1.6fr_120px_120px_120px_220px] gap-[16px] px-[28px] py-[14px] bg-[hsl(var(--slide-gold)/0.08)] text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">
          <span>Категория продукта</span>
          <span className="text-right">D1</span>
          <span className="text-right">D7</span>
          <span className="text-right">D30</span>
          <span className="text-right">Источник</span>
        </div>
        {benchmarks.map((b) => (
          <div key={b.cat} className="grid grid-cols-[1.6fr_120px_120px_120px_220px] gap-[16px] px-[28px] py-[12px] border-t border-[hsl(var(--slide-border)/0.2)] items-baseline">
            <span className="text-[20px] text-[hsl(var(--slide-text))]">{b.cat}</span>
            <span className="text-right text-[20px] text-[hsl(var(--slide-text-muted))] font-mono">{b.d1}</span>
            <span className="text-right text-[20px] text-[hsl(var(--slide-text-muted))] font-mono">{b.d7}</span>
            <span className="text-right text-[22px] text-[hsl(var(--slide-gold))] font-mono font-bold">{b.d30}</span>
            <span className="text-right text-[13px] text-[hsl(var(--slide-text-muted)/0.7)] italic">{b.source}</span>
          </div>
        ))}
      </div>

      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mt-[22px] max-w-[1500px]">
        Если у твоего продукта D30 в районе 5–10% — ты в рынке. Не паникуй из-за «уходящих». Работай с теми, кто остался — и догоняй верхний квартиль.
      </p>
    </div>
  );
}