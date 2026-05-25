import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { day: "День 30", action: "Проверочный звонок", ask: "Спроси: какой результат уже есть и что можно улучшить. Пока ничего не продавай — просто слушай." },
  { day: "День 45", action: "Попросить историю успеха", ask: "«Можно я напишу короткую историю о том, что мы сделали вместе? Покажу вам перед публикацией.»" },
  { day: "День 60", action: "Попросить 3 знакомства", ask: "«Знаете ли вы 3 человека в похожей роли, кому это тоже может помочь? Просто познакомьте нас — я сам всё расскажу.»" },
  { day: "День 75", action: "Попросить отзыв и пост", ask: "«Можете написать пару строк про результат? Я подготовлю текст — вы просто одобрите.»" },
  { day: "День 90", action: "Предложить расширение", ask: "«У вас уже есть данные за квартал — давайте обсудим: больше мест, новые функции или годовой договор со скидкой.»" },
];

const math = [
  { n: "1", l: "первая продажа" },
  { n: "→ 3", l: "знакомства через довольного клиента" },
  { n: "→ 1", l: "из 3 тоже покупает (через доверие)" },
  { n: "= 4", l: "продажи из одной за 90 дней" },
];

export default function M11Slide16ExpansionLoop() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          После первой продажи
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          1 сделка = <span className="text-[hsl(var(--slide-gold))]">4 сделки за 90 дней</span>
        </h2>
        <div className="grid grid-cols-4 gap-[4px] mb-[8px]">
          {math.map((m, i) => (
            <div key={i} className="bg-[hsl(var(--slide-gold)/0.1)] rounded-[6px] px-[6px] py-[5px]">
              <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))]">{m.n}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{m.l}</p>
            </div>
          ))}
        </div>
        <div className="space-y-[4px]">
          {steps.map((s) => (
            <div key={s.day} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-baseline gap-[4px]">
                <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{s.day}</p>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">· {s.action}</p>
              </div>
              <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] italic leading-[1.45]">{s.ask}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[20px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        После первой продажи
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        1 сделка = <span className="text-[hsl(var(--slide-gold))]">4 сделки за 90 дней</span>
      </h2>
      <div className="grid grid-cols-4 gap-[16px] mb-[20px] max-w-[1700px]">
        {math.map((m, i) => (
          <div key={i} className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[20px] py-[12px]">
            <p className="font-display text-[32px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[4px]">{m.n}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.l}</p>
          </div>
        ))}
      </div>
      <div className="space-y-[10px] max-w-[1700px]">
        {steps.map((s) => (
          <div key={s.day} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[14px]">
            <div className="flex items-baseline gap-[14px] mb-[4px]">
              <p className="text-[17px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em]">{s.day}</p>
              <p className="text-[19px] font-bold text-[hsl(var(--slide-text))]">{s.action}</p>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] italic leading-[1.5]">→ {s.ask}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
