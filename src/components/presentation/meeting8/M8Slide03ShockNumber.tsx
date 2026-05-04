import { useIsMobile } from "@/hooks/use-mobile";

export default function M8Slide03ShockNumber() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Цифра, после которой не уснёшь
        </p>
        <h2 className="font-display text-[80px] font-bold text-[hsl(var(--slide-gold))] leading-[0.95] mb-[10px] tracking-[-0.03em]">
          77%
        </h2>
        <p className="text-[16px] font-semibold text-[hsl(var(--slide-text))] leading-[1.3] mb-[14px]">
          мобильных пользователей не возвращаются на 3-й день после установки.
        </p>
        <div className="space-y-[6px] mb-[12px]">
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">→ Через 30 дней — уходит 90%.</p>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">→ В среднем у SaaS возвращается на 2-й день только 28%.</p>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted)/0.7)] leading-[1.4] italic">
          Источники: Localytics, Mixpanel benchmarks 2024.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center px-[140px]">
      <div className="flex-1 pr-[60px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
          Цифра, после которой не уснёшь
        </p>
        <p className="text-[44px] font-semibold text-[hsl(var(--slide-text))] leading-[1.2] mb-[28px] max-w-[900px]">
          <span className="text-[hsl(var(--slide-gold))]">77%</span> мобильных пользователей не возвращаются на 3-й день после установки.
        </p>
        <div className="space-y-[14px] mb-[24px]">
          <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>Через 30 дней — уходит 90%.</p>
          <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>У среднего SaaS на 2-й день возвращается 28%.</p>
        </div>
        <p className="text-[16px] text-[hsl(var(--slide-text-muted)/0.7)] italic">
          Источники: Localytics, Mixpanel SaaS Benchmarks 2024.
        </p>
      </div>
      <div className="w-[520px] shrink-0 flex flex-col items-center justify-center">
        <div className="font-display text-[280px] font-bold text-[hsl(var(--slide-gold))] leading-[0.85] tracking-[-0.04em]">
          77%
        </div>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[12px] uppercase tracking-[0.15em]">уходят за 72 часа</p>
      </div>
    </div>
  );
}