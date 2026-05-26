import { useIsMobile } from "@/hooks/use-mobile";

export default function L1Slide02MainMistake() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">Главная ошибка стартапов</p>
        <h2 className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[20px]">
          90% продуктов проваливаются по одной причине
        </h2>
        <p className="text-[13px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
          Строят то, что никому не нужно. Не потому что продукт плохой — а потому что не проверили, кто за это заплатит.
        </p>
        <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold)/0.4)] mb-[14px]" />
        <p className="text-[12px] text-[hsl(var(--slide-gold))] font-medium leading-[1.5]">
          Ваша задача на этой неделе: перестать угадывать и начать проверять.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">Главная ошибка стартапов</p>
      <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        90% продуктов проваливаются<br />по одной причине
      </h2>
      <div className="max-w-[1000px] space-y-[24px]">
        <p className="text-[28px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          Строят то, что никому не нужно. Не потому что продукт плохой — а потому что не проверили, кто за это заплатит.
        </p>
        <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold)/0.4)]" />
        <p className="text-[24px] text-[hsl(var(--slide-gold))] font-medium leading-[1.5]">
          Ваша задача на этой неделе: перестать угадывать и начать проверять.
        </p>
      </div>
    </div>
  );
}
