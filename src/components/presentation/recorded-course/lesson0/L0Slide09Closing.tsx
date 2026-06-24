import { useIsMobile } from "@/hooks/use-mobile";

export default function L0Slide09Closing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Готов?
        </p>
        <h2 className="font-display text-[32px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em]">
          Тогда —<br /><span className="text-[hsl(var(--slide-gold))]">в Урок 1.</span>
        </h2>
        <p className="text-[15px] font-medium text-[hsl(var(--slide-text))] leading-[1.5] mb-[8px]">
          Блок 1 · Валидация и ресерч
        </p>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[20px]">
          Начинаем с самого начала — что вообще строить.<br />Дальше каждый урок строит на предыдущем.
        </p>
        <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))]" />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[20px] uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium mb-[28px]">
        Готов?
      </p>
      <h2 className="font-display text-[100px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[48px] tracking-[-0.02em]">
        Тогда —<br /><span className="text-[hsl(var(--slide-gold))]">в Урок 1.</span>
      </h2>
      <p className="text-[36px] font-medium text-[hsl(var(--slide-text))] leading-[1.3] mb-[16px]">
        Блок 1 · Валидация и ресерч
      </p>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1300px] mb-[40px]">
        Начинаем с самого начала — что вообще строить.<br />Дальше каждый урок строит на предыдущем.
      </p>
      <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))]" />
    </div>
  );
}
