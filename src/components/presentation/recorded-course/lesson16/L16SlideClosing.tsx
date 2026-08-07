import { useIsMobile } from "@/hooks/use-mobile";

export default function L16SlideClosing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Что дальше
        </p>
        <h2 className="font-display text-[32px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em]">
          Каналы выбраны. <span className="text-[hsl(var(--slide-gold))]">Остался последний урок</span>.
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[20px]">
          В уроке 17 соберём весь курс в один план: что делать в ближайшие <span className="text-[hsl(var(--slide-text))] font-medium">30 и 90 дней</span>.
        </p>
        <p className="text-[11px] text-[hsl(var(--slide-gold))] leading-[1.5] mb-[16px]">
          За первые 90 дней:<br />
          · 2 канала выбраны и запущены<br />
          · 40 касаний сделано<br />
          · понятно, какой канал оставлять
        </p>
        <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))]" />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[20px] uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium mb-[28px]">
        Что дальше
      </p>
      <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[40px] tracking-[-0.02em] max-w-[1700px]">
        Каналы выбраны. <span className="text-[hsl(var(--slide-gold))]">Остался последний урок</span>.
      </h2>
      <p className="text-[30px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1500px] mb-[32px]">
        В уроке 17 соберём весь курс в один план: что делать в ближайшие <span className="text-[hsl(var(--slide-text))] font-semibold">30 и 90 дней</span>.
      </p>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] leading-[1.6] max-w-[1500px] mb-[48px]">
        За первые 90 дней:<br />
        · 2 канала выбраны и запущены · 40 касаний сделано · понятно, какой канал оставлять
      </p>
      <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))]" />
    </div>
  );
}
