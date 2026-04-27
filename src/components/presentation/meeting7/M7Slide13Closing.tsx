import { useIsMobile } from "@/hooks/use-mobile";

const milestones = [
  { week: "M7", body: "правки выкачены в прод" },
  { week: "M8", body: "метрика retention с цифрой" },
  { week: "M12", body: "демо-день, который вы каждый сегодня описали в одном предложении" },
];

export default function M7Slide13Closing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Продукт делается семью днями подряд, не одной встречей в неделю.
        </h2>
        <div className="space-y-[4px] mb-[12px]">
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">Сегодня — рамка и one deep audit.</p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">Семь дней — твоя выкаченная правка и пять новых юзеров.</p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">Через неделю — цифра ДО и ПОСЛЕ, или встреча превращается в теорию.</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[10px] mb-[10px]">
          {milestones.map((m, i) => (
            <div key={i} className="flex gap-[8px] items-baseline py-[3px]">
              <span className="text-[11px] font-mono text-[hsl(var(--slide-gold))] font-semibold w-[28px]">{m.week}</span>
              <span className="text-[9px] text-[hsl(var(--slide-text-muted))]">→</span>
              <p className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.45]">{m.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Среда — пара. Без скриншота прогресса — нет ответа партнёру.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <h2 className="font-display text-[80px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[36px] max-w-[1700px] tracking-[-0.01em]">
        Продукт делается семью днями подряд, не одной встречей в неделю.
      </h2>
      <div className="space-y-[10px] mb-[40px] max-w-[1700px]">
        <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">Сегодня — рамка и one deep audit.</p>
        <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">Семь дней — твоя выкаченная правка и пять новых юзеров.</p>
        <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">Через неделю — цифра ДО и ПОСЛЕ, или встреча превращается в теорию.</p>
      </div>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[40px] py-[28px] max-w-[1700px] mb-[28px]">
        {milestones.map((m, i) => (
          <div key={i} className="flex gap-[24px] items-baseline py-[8px]">
            <span className="text-[32px] font-mono text-[hsl(var(--slide-gold))] font-semibold w-[100px]">{m.week}</span>
            <span className="text-[24px] text-[hsl(var(--slide-text-muted))]">→</span>
            <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.4]">{m.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1700px] leading-[1.4]">
        Среда — пара. Без скриншота прогресса — нет ответа партнёру. Это правило мы держим до конца программы.
      </p>
    </div>
  );
}