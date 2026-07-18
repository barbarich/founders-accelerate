import { useIsMobile } from "@/hooks/use-mobile";

export default function L9SlideClosing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Блок про продукт закрыт
        </p>
        <h2 className="font-display text-[32px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em]">
          В Урок 10: <span className="text-[hsl(var(--slide-gold))]">маркетинг</span>
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[16px]">
          Продукт вовлекает, удерживает, возвращает - и ты это измеряешь. Дальше самое интересное: как о тебе узнают.
        </p>
        <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))]" />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[20px] uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium mb-[28px]">
        Блок про продукт закрыт
      </p>
      <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[40px] tracking-[-0.02em]">
        В Урок 10: <span className="text-[hsl(var(--slide-gold))]">маркетинг</span>
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1300px] mb-[40px]">
        Продукт вовлекает, удерживает, возвращает - и ты это измеряешь.<br />
        Дальше самое интересное: как о тебе узнают.
      </p>
      <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))]" />
    </div>
  );
}
