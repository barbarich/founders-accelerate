import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  {
    n: "1",
    t: "Дата назначается, пока вы вместе",
    d: "Календарь открыт во время разговора: «Вторник в 14:00 подходит? Отправляю приглашение прямо сейчас». Не после звонка — во время.",
  },
  {
    n: "2",
    t: "«Созвонимся позже» = сделка потеряна",
    d: "Просто ты ещё об этом не знаешь. Через две недели у него другие приоритеты, а ты пишешь «просто напоминаю».",
  },
  {
    n: "3",
    t: "Правило 14 дней",
    d: "Нет движения две недели — либо письмо «закрываю у себя», либо архив. Третьего не дано: висящая сделка врёт тебе про твой месяц.",
  },
  {
    n: "4",
    t: "Раз в неделю считаешь одну цифру",
    d: "Сколько сделок без даты следующего шага. Это и есть размер твоей дыры. Цель — ноль.",
  },
];

export default function L13SlideNextStep() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Главное правило пайплайна
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
          Нет следующего шага с датой — <span className="text-[hsl(var(--slide-gold))]">нет сделки</span>
        </h2>
        <div className="space-y-[4px] mb-[8px]">
          {rules.map((r) => (
            <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[4px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{r.n}</span>
                <span className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{r.t}</span>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{r.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px]">
          <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Письмо «закрываю у себя» отвечают чаще всех остальных. Люди реагируют на закрытие двери, а не на десятое напоминание.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Главное правило пайплайна
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[26px] tracking-[-0.02em] max-w-[1700px]">
        Нет следующего шага с датой — <span className="text-[hsl(var(--slide-gold))]">нет сделки</span>
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px] mb-[22px]">
        {rules.map((r) => (
          <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[26px] py-[20px]">
            <div className="flex items-baseline gap-[14px] mb-[6px]">
              <span className="font-display text-[36px] font-bold text-[hsl(var(--slide-gold))] leading-none">{r.n}</span>
              <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{r.t}</p>
            </div>
            <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{r.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1700px]">
        <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          На письмо «закрываю у себя, если сейчас неактуально» отвечают чаще, чем на любое другое. Люди реагируют на закрывающуюся дверь, а не на десятое «просто напоминаю».
        </p>
      </div>
    </div>
  );
}
