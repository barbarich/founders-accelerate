import { useIsMobile } from "@/hooks/use-mobile";

export default function L15SlideClosing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Финал курса
        </p>
        <h2 className="font-display text-[32px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em]">
          16 уроков. <span className="text-[hsl(var(--slide-gold))]">От идеи до первых платящих клиентов</span>.
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[20px]">
          Теперь у тебя есть инструмент. <span className="text-[hsl(var(--slide-text))] font-medium">Дальше — только действия</span>.
        </p>
        <p className="text-[11px] text-[hsl(var(--slide-gold))] leading-[1.5] mb-[16px]">
          За первый месяц после курса:<br />
          · 1 платящий клиент<br />
          · 5 партнёрских ситуаций<br />
          · 1 moat в строительстве
        </p>
        <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))]" />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[20px] uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium mb-[28px]">
        Финал курса
      </p>
      <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[40px] tracking-[-0.02em] max-w-[1700px]">
        16 уроков. <span className="text-[hsl(var(--slide-gold))]">От идеи до первых платящих клиентов</span>.
      </h2>
      <p className="text-[30px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1500px] mb-[32px]">
        Теперь у тебя есть инструмент. <span className="text-[hsl(var(--slide-text))] font-semibold">Дальше — только действия</span>.
      </p>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] leading-[1.6] max-w-[1500px] mb-[48px]">
        За первый месяц после курса:<br />
        · 1 платящий клиент · 5 партнёрских ситуаций · 1 moat в строительстве
      </p>
      <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))]" />
    </div>
  );
}
