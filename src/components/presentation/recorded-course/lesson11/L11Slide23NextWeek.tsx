import { useIsMobile } from "@/hooks/use-mobile";

export default function L11Slide23NextWeek() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Дальше
        </p>
        <h2 className="font-display text-[32px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em]">
          Упаковка и запуск <span className="text-[hsl(var(--slide-gold))]">под твою аудиторию</span>
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[16px]">
          Ты знаешь, кто твои люди и где они. Дальше упаковываем продукт под них: позиционирование, визуал, креативы, воронка - и запуск.
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
        Упаковка и запуск <span className="text-[hsl(var(--slide-gold))]">под твою аудиторию</span>
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1400px] mb-[40px]">
        Ты знаешь, кто твои люди и где они.<br />
        Дальше упаковываем продукт под них: позиционирование, визуал, креативы, воронка - и запуск.
      </p>
      <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))]" />
    </div>
  );
}
