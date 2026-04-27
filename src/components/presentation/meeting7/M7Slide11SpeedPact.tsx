import { useIsMobile } from "@/hooks/use-mobile";

const lines = [
  { label: "Одна правка в продукте", placeholder: "[конкретное изменение, выкаченное в прод до M8 — не «протестирую»]" },
  { label: "Одна гипотеза с метрикой ДО / ПОСЛЕ", placeholder: "[«если переписать onboarding-вопрос с X на Y, % дошедших до 1-го результата вырастет с 30% до 50%»]" },
  { label: "5–10 новых юзеров на новом флоу", placeholder: "[откуда возьмёшь — чтобы это не было «потом найду»]" },
];

export default function M7Slide11SpeedPact() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Обязательство группы</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Каждый говорит вслух. Три строки.
        </h2>
        <div className="space-y-[5px] mb-[8px]">
          {lines.map((l, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[8px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[2px]">{i + 1}. {l.label}</p>
              <p className="text-[9px] font-mono text-[hsl(var(--slide-text-muted))] leading-[1.4]">{l.placeholder}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border-l-[2px] border-[hsl(var(--slide-gold))] pl-[8px] py-[4px] mb-[6px]">
          <p className="text-[8px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[2px]">Reverse demo · проверка</p>
          <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
            Помните, в начале каждый сказал, что покажет на демо-дне? Сравните: «Сегодняшняя правка приближает меня к этому или нет?» Если нет — формулируйте другую.
          </p>
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Между сегодня и M8 — семь дней. Либо одна выкаченная правка с замером, либо неделя без движения.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[50px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Обязательство группы</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[32px]">
        Каждый говорит вслух. Три строки.
      </h2>
      <div className="space-y-[14px] max-w-[1700px] mb-[28px]">
        {lines.map((l, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[28px] py-[20px]">
            <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[8px]">{i + 1}. {l.label}</p>
            <p className="text-[20px] font-mono text-[hsl(var(--slide-text))] leading-[1.45]">{l.placeholder}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-bg-alt))] border-l-[3px] border-[hsl(var(--slide-gold))] pl-[24px] py-[16px] mb-[20px] max-w-[1700px]">
        <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[6px]">Reverse demo · проверка</p>
        <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.5]">
          Помните, в начале встречи каждый сказал, что покажет на демо-дне 5 декабря? Сравните вслух: «Я обещал [X]. Сегодняшняя правка приближает меня к этому или нет?» Если нет — формулируйте другую правку.
        </p>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1700px] leading-[1.4]">
        Между сегодня и M8 у вас семь дней. Семь дней — это либо одна выкаченная правка с замером, либо одна неделя без движения. В среду пара ждёт скриншот.
      </p>
    </div>
  );
}