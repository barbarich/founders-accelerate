import { useIsMobile } from "@/hooks/use-mobile";

const questions = [
  "Какое первое действие у юзера в твоём продукте?",
  "Что он сразу видит после него?",
  "Нужна ли регистрация для этого? Если да — почему нельзя без?",
];

export default function M7Slide17Exercise2() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Упражнение · 3 минуты
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px]">
          Твоё первое действие. В чат.
        </h2>
        <div className="space-y-[5px] mb-[12px]">
          {questions.map((q, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[10px] py-[7px] flex gap-[8px]">
              <span className="font-mono text-[11px] text-[hsl(var(--slide-gold))] font-bold shrink-0">{i + 1}.</span>
              <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.4]">{q}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Если для первого действия нужна регистрация — её надо убрать или отложить. Сейчас увидим на чьём-то примере.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Упражнение · 3 минуты
      </p>
      <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] mb-[32px] tracking-[-0.02em]">
        Твоё первое действие. В чат.
      </h2>
      <div className="space-y-[14px] max-w-[1500px] mb-[28px]">
        {questions.map((q, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[20px] flex gap-[20px] items-center">
            <span className="font-mono text-[36px] text-[hsl(var(--slide-gold))] font-bold leading-none shrink-0">{i + 1}</span>
            <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.4]">{q}</p>
          </div>
        ))}
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Если для первого действия нужна регистрация — её надо убрать или отложить. Сейчас увидим на чьём-то примере.
      </p>
    </div>
  );
}
