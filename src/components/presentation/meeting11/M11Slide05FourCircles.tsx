import { useIsMobile } from "@/hooks/use-mobile";

const circles = [
  {
    n: "1",
    name: "Ближний круг",
    size: "~5 friends-of-friends",
    purpose: "Первые 3 платных клиента. Тестируешь pitch, получаешь честную обратную связь, получаешь testimonials.",
    when: "Неделя 1–2",
  },
  {
    n: "2",
    name: "Отраслевой круг",
    size: "~50 в твоей нише",
    purpose: "Pipeline на 6 месяцев. Эти люди тебя видят регулярно, рекомендуют, дают warm intros. Качаем через комментарии и встречи.",
    when: "Неделя 3–12",
  },
  {
    n: "3",
    name: "Expert круг",
    size: "~10 advisor-уровня",
    purpose: "Не покупатели — мультипликаторы. Каждый знает 50 потенциальных клиентов. 1 хорошее интро от них = 10 cold писем.",
    when: "Постоянно, медленно",
  },
  {
    n: "4",
    name: "Loud круг",
    size: "~5 «громких» в LinkedIn / X",
    purpose: "Distribution. Один retweet / коммент / упоминание = 10 inbound запросов. Качаем через ценность в комментариях к их постам.",
    when: "Постоянно, медленно",
  },
];

export default function M11Slide05FourCircles() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Карта нетворка
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          4 круга × <span className="text-[hsl(var(--slide-gold))]">разные цели</span>
        </h2>
        <div className="space-y-[4px]">
          {circles.map((c) => (
            <div key={c.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <div className="flex items-baseline gap-[5px] mb-[1px]">
                <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))]">{c.n}</span>
                <span className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{c.name}</span>
                <span className="text-[7.5px] text-[hsl(var(--slide-text-muted))]">· {c.size}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4] ml-[16px]">{c.purpose}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-gold))] ml-[16px] mt-[1px]">{c.when}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Карта нетворка
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em]">
        4 круга × <span className="text-[hsl(var(--slide-gold))]">разные цели</span>
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        {circles.map((c) => (
          <div key={c.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[20px]">
            <div className="flex items-baseline gap-[14px] mb-[6px]">
              <span className="font-display text-[44px] font-bold text-[hsl(var(--slide-gold))] leading-none">{c.n}</span>
              <div>
                <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{c.name}</p>
                <p className="text-[14px] text-[hsl(var(--slide-text-muted))]">{c.size}</p>
              </div>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[58px] mb-[6px]">{c.purpose}</p>
            <p className="text-[14px] text-[hsl(var(--slide-gold))] font-semibold ml-[58px]">{c.when}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
