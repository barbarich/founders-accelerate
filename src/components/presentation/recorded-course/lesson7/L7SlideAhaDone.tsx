import { useIsMobile } from "@/hooks/use-mobile";
import { Check } from "lucide-react";

const checks = [
  "Незнакомый человек доходит до результата без твоих подсказок",
  "Доходит меньше чем за 60 секунд",
  "Первое, что он видит — результат, а не форма, тур или пустой экран",
  "Ты можешь ткнуть пальцем в секунду, где у него сработало «о!»",
];

export default function L7SlideAhaDone() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Критерий готовности
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Aha настроен, <span className="text-[hsl(var(--slide-gold))]">если...</span>
        </h2>
        <div className="space-y-[8px] mb-[12px]">
          {checks.map((c, i) => (
            <div key={i} className="flex items-start gap-[8px]">
              <span className="bg-[hsl(var(--slide-gold)/0.15)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[20px] h-[20px] flex items-center justify-center shrink-0 mt-[1px]">
                <Check size={11} className="text-[hsl(var(--slide-gold))]" />
              </span>
              <p className="text-[11.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">{c}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] font-medium leading-[1.5]">
            Не выполняется хоть один пункт — Aha ещё не настроен. Это и есть твоё место для работы.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Критерий готовности
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em]">
        Aha настроен, <span className="text-[hsl(var(--slide-gold))]">если...</span>
      </h2>
      <div className="space-y-[20px] max-w-[1600px] mb-[32px]">
        {checks.map((c, i) => (
          <div key={i} className="flex items-start gap-[18px]">
            <span className="bg-[hsl(var(--slide-gold)/0.15)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[40px] h-[40px] flex items-center justify-center shrink-0 mt-[2px]">
              <Check size={22} className="text-[hsl(var(--slide-gold))]" />
            </span>
            <p className="text-[24px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{c}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[28px] py-[18px] max-w-[1600px]">
        <p className="text-[21px] text-[hsl(var(--slide-text))] font-medium leading-[1.45]">
          Не выполняется хоть один пункт — Aha ещё не настроен. Это и есть твоё место для работы.
        </p>
      </div>
    </div>
  );
}
