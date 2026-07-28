import { useIsMobile } from "@/hooks/use-mobile";

const benchmarks = [
  { metric: "LTV : CAC", green: "≥ 3", yellow: "1-3", red: "< 1", note: "медиана B2B SaaS в 2026 - 3.2 : 1" },
  { metric: "Payback", green: "≤ 6 мес", yellow: "6-18 мес", red: "> 18 мес", note: "медиана: B2C ~4 мес, B2B ~9 мес" },
];

export default function L14Slide08TwoNumbers() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Формула решения</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Два числа, <span className="text-[hsl(var(--slide-gold))]">которые решают всё</span>
        </h2>
        <div className="space-y-[7px] mb-[9px]">
          {benchmarks.map((b, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[7px] px-[11px] py-[7px]">
              <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] mb-[3px]">{b.metric}</p>
              <div className="flex gap-[6px] mb-[3px]">
                <span className="text-[8.5px] px-[6px] py-[2px] rounded-[3px] bg-emerald-500/15 text-emerald-400 font-semibold">🟢 {b.green}</span>
                <span className="text-[8.5px] px-[6px] py-[2px] rounded-[3px] bg-yellow-500/15 text-yellow-400 font-semibold">🟡 {b.yellow}</span>
                <span className="text-[8.5px] px-[6px] py-[2px] rounded-[3px] bg-red-500/15 text-red-400 font-semibold">🔴 {b.red}</span>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{b.note}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[8px]">
          <p className="text-[9.5px] text-[hsl(var(--slide-text))] leading-[1.5]">
            <span className="font-bold text-[hsl(var(--slide-gold))]">На ранней стадии payback важнее.</span> LTV - это прогноз, который легко завысить. Payback - это живой кэш: деньги, вернувшиеся за 4 месяца, ты снова вкладываешь в рекламу. Быстрый 3:1 сильнее медленного 5:1.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Формула решения</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.02em]">
        Два числа, <span className="text-[hsl(var(--slide-gold))]">которые решают всё</span>
      </h2>
      <div className="space-y-[14px] mb-[22px] max-w-[1650px]">
        {benchmarks.map((b, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[28px] py-[18px] flex items-center gap-[32px]">
            <p className="text-[26px] font-bold text-[hsl(var(--slide-gold))] w-[220px] shrink-0">{b.metric}</p>
            <div className="flex gap-[12px]">
              <span className="text-[18px] px-[16px] py-[6px] rounded-[8px] bg-emerald-500/15 text-emerald-400 font-semibold">🟢 {b.green}</span>
              <span className="text-[18px] px-[16px] py-[6px] rounded-[8px] bg-yellow-500/15 text-yellow-400 font-semibold">🟡 {b.yellow}</span>
              <span className="text-[18px] px-[16px] py-[6px] rounded-[8px] bg-red-500/15 text-red-400 font-semibold">🔴 {b.red}</span>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{b.note}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-4 border-[hsl(var(--slide-gold))] px-[28px] py-[18px] max-w-[1650px]">
        <p className="text-[21px] text-[hsl(var(--slide-text))] leading-[1.5]">
          <span className="font-bold text-[hsl(var(--slide-gold))]">На ранней стадии payback важнее.</span> LTV - это прогноз, который легко завысить. Payback - это живой кэш: деньги, вернувшиеся за 4 месяца, ты снова вкладываешь в рекламу и растёшь без инвестора. Быстрый 3:1 сильнее медленного 5:1.
        </p>
      </div>
    </div>
  );
}
