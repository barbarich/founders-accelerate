import { useIsMobile } from "@/hooks/use-mobile";

export default function L8Slide02MainThesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Главная мысль сегодня
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[16px] tracking-[-0.01em]">
          Если человек открыл продукт и ушёл за 30 секунд — он не ленивый, не глупый, не «не ваша аудитория».
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px] mb-[14px]">
          <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
            Это вы недоделали первые 30 секунд.
          </p>
        </div>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
          80 из 100 людей, которые впервые открывают продукт, уходят в первую минуту. Это не их вина. Сегодня учимся это чинить.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        Главная мысль сегодня
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] max-w-[1500px] tracking-[-0.01em]">
        Если человек открыл продукт и ушёл за 30 секунд — он не ленивый, не глупый, не «не ваша аудитория».
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[28px] max-w-[1400px] mb-[28px]">
        <p className="text-[40px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
          Это вы недоделали первые 30 секунд.
        </p>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1400px]">
        80 из 100 людей, которые впервые открывают продукт, уходят в первую минуту. Это не их вина. Сегодня учимся это чинить.
      </p>
    </div>
  );
}
