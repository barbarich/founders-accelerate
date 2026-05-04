import { useIsMobile } from "@/hooks/use-mobile";

export default function M8Slide09Exercise1() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Упражнение 1 · 5 минут
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
          Сейчас. Каждый. В чат.
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[10px] mb-[12px]">
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[6px]">
            Опиши свою петлю возврата по формуле:
          </p>
          <p className="font-mono text-[10px] text-[hsl(var(--slide-gold))] leading-[1.6]">
            Триггер: ___<br />
            Действие (1 тап): ___<br />
            Награда (переменная): ___<br />
            Инвестиция: ___
          </p>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[8px]">
          Если хоть в одном поле «не знаю» — это и есть слабое место retention.
        </p>
        <p className="text-[10.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Кидай в чат. Разберём 3 вслух.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Упражнение 1 · 5 минут
      </p>
      <h2 className="font-display text-[80px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] mb-[28px] tracking-[-0.02em]">
        Сейчас. Каждый. В чат.
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[40px] py-[28px] max-w-[1400px] mb-[20px]">
        <p className="text-[28px] text-[hsl(var(--slide-text))] leading-[1.4] mb-[16px]">
          Опиши свою петлю возврата по формуле:
        </p>
        <pre className="font-mono text-[24px] text-[hsl(var(--slide-gold))] leading-[1.7] whitespace-pre">
{`Триггер: ___
Действие (1 тап): ___
Награда (переменная): ___
Инвестиция: ___`}
        </pre>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] max-w-[1400px] leading-[1.5] mb-[14px]">
        Если хоть в одном поле «не знаю» — это и есть слабое место retention.
      </p>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1400px] leading-[1.4]">
        Кидай в чат. Разберём 3 петли вслух.
      </p>
    </div>
  );
}