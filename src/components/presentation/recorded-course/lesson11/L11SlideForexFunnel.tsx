import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "01", t: "Позиционирование + один стиль", d: "«Advanced backtesting software» - для трейдеров: тест стратегии на 20+ годах реальной истории, zero risk. Сайт и креативы в одной айдентике." },
  { n: "02", t: "Оффер на входе", d: "Софт ≈$139 lifetime - разовая оплата, доступ навсегда. Плюс акции. Дешёвый вход снимает страх «а вдруг не подойдёт»." },
  { n: "03", t: "Доступ = продукт в руках", d: "После оплаты - симулятор + 25 лет истории по 18 инструментам бесплатно. Человек уже внутри и получает ценность." },
  { n: "04", t: "Апсейл данных", d: "Super Data: 860 инструментов вместо 18. Подписка 1 мес / 12 мес / lifetime VIP. Тут и растёт чек - на тех, кто уже поверил." },
];

export default function L11SlideForexFunnel() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Разбор · воронка как одно целое
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Forex Tester: сайт, оффер и апсейл - <span className="text-[hsl(var(--slide-gold))]">одна система</span>
        </h2>
        <div className="space-y-[4px] mb-[6px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[9px] py-[5px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{s.n}</span> {s.t}
              </p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[9px] py-[5px]">
          <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4]">
            Не четыре куска, а одно целое: каждый шаг ведёт к следующему. Так упаковка превращается в продажи.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[34px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Разбор · воронка как одно целое
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.02em] max-w-[1650px]">
        Forex Tester: сайт, оффер и апсейл - <span className="text-[hsl(var(--slide-gold))]">одна система</span>
      </h2>
      <div className="space-y-[12px] max-w-[1700px] mb-[20px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[26px] py-[13px] flex items-center gap-[22px]">
            <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none w-[44px] shrink-0">{s.n}</span>
            <span className="text-[21px] font-bold text-[hsl(var(--slide-text))] w-[380px] shrink-0">{s.t}</span>
            <span className="text-[17px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4] flex-1">{s.d}</span>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[32px] py-[16px] max-w-[1700px]">
        <p className="text-[21px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Не четыре отдельных куска, а <b className="text-[hsl(var(--slide-gold))]">одно целое</b>: каждый шаг ведёт к следующему. Дешёвый lifetime-вход → человек внутри → апсейл. Так упаковка превращается в продажи.
        </p>
      </div>
    </div>
  );
}
