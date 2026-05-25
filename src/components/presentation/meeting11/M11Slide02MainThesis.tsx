import { useIsMobile } from "@/hooks/use-mobile";

export default function M11Slide02MainThesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Главная мысль сегодня
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] tracking-[-0.01em]">
          Ты выигрываешь B2B не объёмом писем.<br /><span className="text-[hsl(var(--slide-gold))]">50 правильных счетов × 5 идеальных разговоров &gt; 5000 cold писем.</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px] mb-[12px]">
          <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.4] mb-[5px]">
            В 2026 Instantly есть у всех. Volume-outbound мёртв.
          </p>
          <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Преимущество — точность ICP, multithreading и качество разговора.
          </p>
        </div>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
          Сегодня — один путь от пустого CRM до первой подписанной сделки. Без рекламы, без community-теории, без 10 каналов параллельно. Одна нить, end-to-end.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        Главная мысль сегодня
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] max-w-[1700px] tracking-[-0.01em]">
        Ты выигрываешь B2B не объёмом писем. <span className="text-[hsl(var(--slide-gold))]">50 правильных счетов × 5 идеальных разговоров &gt; 5000 cold писем.</span>
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[28px] max-w-[1700px] mb-[28px]">
        <p className="text-[34px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[10px]">
          В 2026 Instantly есть у всех. Volume-outbound мёртв.
        </p>
        <p className="text-[34px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          Преимущество — точность ICP, multithreading и качество разговора.
        </p>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1700px]">
        Сегодня — один путь от пустого CRM до первой подписанной сделки. Без рекламы, без community-теории, без 10 каналов параллельно. Одна нить, end-to-end.
      </p>
    </div>
  );
}
