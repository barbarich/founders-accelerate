import { useIsMobile } from "@/hooks/use-mobile";

export default function L0Slide05Truth3() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Правда 3 из 5
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] tracking-[-0.01em]">
          AI не сделает продукт за тебя.<br />Он <span className="text-[hsl(var(--slide-gold))]">усиливает</span> тебя.
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[12px]">
          В 2026 каждый думает: «у меня есть Claude и Lovable — я построю SaaS за выходные». Технически — <span className="text-[hsl(var(--slide-text))] font-medium">да, можешь</span>. Но без понимания клиента ты построишь красивый продукт, которым никто не пользуется.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px] mb-[12px]">
          <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.4] mb-[6px]">
            AI-стек — мультипликатор.
          </p>
          <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            Понимаешь клиента — AI делает тебя <span className="text-[hsl(var(--slide-gold))] font-bold">в 10 раз быстрее</span>. Не понимаешь — AI делает твой ноль <span className="text-[hsl(var(--slide-gold))] font-bold">в 10 раз больше</span>.
          </p>
        </div>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
          Базовые навыки фаундера в 2026 не изменились: <span className="text-[hsl(var(--slide-text))] font-medium">понимать клиента, упаковывать, продавать</span>. AI помогает быстрее, но не освобождает от этого.
        </p>
        <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[12px]">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Что делать</p>
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            На следующих 16 уроках — половина про базовые навыки, половина про AI-стек. <span className="text-[hsl(var(--slide-gold))]">Не пропускай первую половину.</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Правда 3 из 5
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em] max-w-[1700px]">
        AI не сделает продукт за тебя.<br />Он <span className="text-[hsl(var(--slide-gold))]">усиливает</span> тебя.
      </h2>
      <div className="max-w-[1500px] space-y-[20px] mb-[28px]">
        <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          В 2026 каждый думает: «у меня есть Claude и Lovable — я построю SaaS за выходные». Технически — <span className="text-[hsl(var(--slide-text))] font-semibold">да, можешь</span>. Но без понимания клиента ты построишь красивый продукт, которым никто не пользуется.
        </p>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[24px] max-w-[1500px] mb-[28px]">
        <p className="text-[32px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[10px]">
          AI-стек — мультипликатор.
        </p>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
          Понимаешь клиента — AI делает тебя <span className="text-[hsl(var(--slide-gold))] font-bold">в 10 раз быстрее</span>.<br />
          Не понимаешь — AI делает твой ноль <span className="text-[hsl(var(--slide-gold))] font-bold">в 10 раз больше</span>.
        </p>
      </div>
      <div className="max-w-[1500px] mb-[28px]">
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          Базовые навыки фаундера в 2026 не изменились: <span className="text-[hsl(var(--slide-text))] font-semibold">понимать клиента, упаковывать, продавать</span>. AI помогает быстрее, но не освобождает от этого.
        </p>
      </div>
      <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[20px] max-w-[1500px]">
        <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Что делать</p>
        <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5]">
          На следующих 16 уроках — половина про базовые навыки, половина про AI-стек. <span className="text-[hsl(var(--slide-gold))] font-semibold">Не пропускай первую половину.</span>
        </p>
      </div>
    </div>
  );
}
