import { useIsMobile } from "@/hooks/use-mobile";

const decisions = [
  {
    quote: "«Люди уходят - добавлю ещё одну фичу»",
    cost: "3 недели работы",
    truth: "Уходили не из-за нехватки фич. Уходили, потому что за 20 секунд не поняли, что это вообще такое. Фича не помогла никому.",
  },
  {
    quote: "«Не платят - снижу цену вдвое»",
    cost: "Выручка упала вдвое",
    truth: "Не платили те, кто вообще не дошёл до ценности. Тем, кто дошёл, цена не мешала. Скидку получили только они.",
  },
  {
    quote: "«Мало клиентов - залью рекламу»",
    cost: "$2 000 в трубу",
    truth: "Трафик пришёл. Продукт не удержал. Заплатил за то, чтобы люди узнали о нём и ушли быстрее.",
  },
];

export default function L9Slide03BlindCost() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Цена решения вслепую
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Три решения. Все три <span className="text-[hsl(var(--slide-gold))]">выглядели логично</span>.
        </h2>
        <div className="space-y-[8px]">
          {decisions.map((d, i) => (
            <div key={i} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[12px] py-[8px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold leading-[1.35] mb-[3px]">{d.quote}</p>
              <p className="text-[10px] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">{d.cost}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{d.truth}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mt-[10px]">
          Ни одно из них не было глупым. Все три - угадывание.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Цена решения вслепую
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        Три решения. Все три <span className="text-[hsl(var(--slide-gold))]">выглядели логично</span>.
      </h2>
      <div className="space-y-[18px] max-w-[1800px]">
        {decisions.map((d, i) => (
          <div key={i} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[20px] bg-[hsl(var(--slide-gold)/0.04)] flex items-start gap-[28px]">
            <div className="w-[380px] shrink-0">
              <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.35] mb-[8px]">{d.quote}</p>
              <p className="text-[18px] text-[hsl(var(--slide-gold))] font-bold">{d.cost}</p>
            </div>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{d.truth}</p>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mt-[24px] max-w-[1800px]">
        Ни одно из них не было глупым. Все три - угадывание.
      </p>
    </div>
  );
}
