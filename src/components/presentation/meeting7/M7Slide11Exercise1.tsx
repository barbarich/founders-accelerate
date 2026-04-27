import { useIsMobile } from "@/hooks/use-mobile";

export default function M7Slide11Exercise1() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Упражнение · 4 минуты
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px]">
          Сейчас. Каждый. В чат.
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[10px] mb-[12px]">
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[6px]">
            Перепиши первое предложение своего продукта по формуле:
          </p>
          <p className="font-mono text-[11px] text-[hsl(var(--slide-gold))] leading-[1.5]">
            [Кто] получит [что] за [как].
          </p>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[10px]">
          Кидай в чат. Я зачитаю 2-3 вслух — вместе доведём до формулы.
        </p>
        <p className="text-[10.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Не делаешь сейчас — упустишь всё остальное. Просто одну строку.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Упражнение · 4 минуты
      </p>
      <h2 className="font-display text-[80px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] mb-[32px] tracking-[-0.02em]">
        Сейчас. Каждый. В чат.
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[40px] py-[28px] max-w-[1400px] mb-[24px]">
        <p className="text-[28px] text-[hsl(var(--slide-text))] leading-[1.4] mb-[14px]">
          Перепиши первое предложение своего продукта по формуле:
        </p>
        <p className="font-mono text-[26px] text-[hsl(var(--slide-gold))] leading-[1.5]">
          [Кто] получит [что] за [как быстро / как просто].
        </p>
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1400px] mb-[20px]">
        Кидай в чат. Я зачитаю 2-3 вслух — вместе доведём до формулы.
      </p>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1400px] leading-[1.4]">
        Не делаешь сейчас — упустишь всё остальное. Просто одну строку.
      </p>
    </div>
  );
}
