import { useIsMobile } from "@/hooks/use-mobile";

export default function L10Slide23NextWeek() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Дальше
        </p>
        <h2 className="font-display text-[32px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em]">
          Сторителлинг: <span className="text-[hsl(var(--slide-gold))]">первые продажи через себя</span>
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[16px]">
          Ты знаешь, кто твои люди и где они. Дальше - история, которую хочется купить: как фаундер продаёт лично и делает первые продажи.
        </p>
        <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))]" />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[20px] uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium mb-[28px]">
        Дальше
      </p>
      <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[40px] tracking-[-0.02em]">
        Сторителлинг: <span className="text-[hsl(var(--slide-gold))]">первые продажи через себя</span>
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1400px] mb-[40px]">
        Ты знаешь, кто твои люди и где они.<br />
        Дальше - история, которую хочется купить: как фаундер продаёт лично и делает первые продажи.
      </p>
      <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))]" />
    </div>
  );
}
