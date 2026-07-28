import { useIsMobile } from "@/hooks/use-mobile";

const questions = [
  { q: "Сколько стоит привести одного платящего клиента?", a: "Это CAC - customer acquisition cost", note: "реклама, инструменты, подрядчики, твоё время" },
  { q: "Сколько этот клиент принесёт за всю свою жизнь в продукте?", a: "Это LTV - lifetime value", note: "не выручка, а то, что остаётся после себестоимости" },
];

export default function L14Slide03WhatIsUnit() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">База · без жаргона</p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Юнит - это <span className="text-[hsl(var(--slide-gold))]">один платящий клиент</span>
        </h2>
        <p className="text-[10.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[10px]">
          Смотрим на бизнес не целиком, а через одного клиента, как через микроскоп. Каждый клиент - это мини-сделка: ты вложил деньги, чтобы его привести, и получаешь деньги, пока он платит.
        </p>
        <div className="space-y-[7px] mb-[10px]">
          {questions.map((item, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[7px] px-[11px] py-[8px]">
              <p className="text-[10.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[3px]">{i + 1}. {item.q}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-gold))] font-semibold">{item.a}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            LTV больше CAC - у тебя бизнес, который можно масштабировать.<br />
            LTV меньше CAC - у тебя дорогое хобби, и трафик сделает только хуже.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">База · без жаргона</p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.02em]">
        Юнит - это <span className="text-[hsl(var(--slide-gold))]">один платящий клиент</span>
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[24px] max-w-[1600px]">
        Смотрим на бизнес не целиком, а через одного клиента, как через микроскоп. Каждый клиент - это мини-сделка: ты вложил деньги, чтобы его привести, и получаешь деньги, пока он платит.
      </p>
      <div className="grid grid-cols-2 gap-[20px] mb-[24px] max-w-[1600px]">
        {questions.map((item, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[26px] py-[20px]">
            <p className="text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[10px]">{i + 1}. {item.q}</p>
            <p className="text-[19px] text-[hsl(var(--slide-gold))] font-semibold mb-[4px]">{item.a}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{item.note}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-4 border-[hsl(var(--slide-gold))] px-[28px] py-[16px] max-w-[1600px]">
        <p className="text-[21px] text-[hsl(var(--slide-text))] font-semibold leading-[1.5]">
          LTV больше CAC - у тебя бизнес, который можно масштабировать.<br />
          LTV меньше CAC - у тебя дорогое хобби, и трафик сделает только хуже.
        </p>
      </div>
    </div>
  );
}
