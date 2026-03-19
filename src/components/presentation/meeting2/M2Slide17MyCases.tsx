import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide17MyCases() {
  const cases = [
    {
      product: "ForexTester",
      model: "Разовая покупка + подписка на данные",
      insight: "Начинали с $149 разовой. Добавили подписку $29/мес на данные — это утроило LTV. Урок: комбинируйте модели.",
      result: "💰 Средний чек вырос в 3 раза",
    },
    {
      product: "MetaMinder",
      model: "Freemium → SaaS",
      insight: "Запустили бесплатно, чтобы набрать базу. Через 3 месяца включили подписку $49/мес. 12% конвертировались. Урок: бесплатное нужно ограничивать.",
      result: "💰 12% конверсия из бесплатного в платное",
    },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Мой опыт</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Кейсы ценообразования
        </h2>
        <div className="space-y-[10px]">
          {cases.map((c, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] p-[12px]">
              <div className="flex items-center gap-[6px] mb-[6px]">
                <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))]">{c.product}</p>
                <span className="text-[9px] text-[hsl(var(--slide-text-muted))]">· {c.model}</span>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5] mb-[6px]">{c.insight}</p>
              <p className="text-[10px] font-semibold text-[hsl(var(--slide-gold))]">{c.result}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Мой опыт</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">Кейсы ценообразования</h2>
      <div className="space-y-[28px] max-w-[1100px]">
        {cases.map((c, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] p-[28px]">
            <div className="flex items-center gap-[12px] mb-[14px]">
              <p className="text-[26px] font-bold text-[hsl(var(--slide-gold))]">{c.product}</p>
              <span className="text-[18px] text-[hsl(var(--slide-text-muted))]">· {c.model}</span>
            </div>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">{c.insight}</p>
            <p className="text-[20px] font-semibold text-[hsl(var(--slide-gold))]">{c.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
