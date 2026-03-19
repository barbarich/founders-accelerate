import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide05CompetitorInsights() {
  const areas = [
    { emoji: "💰", title: "Цены и модели", text: "Какие цены у конкурентов? Freemium или подписка? Где дыры?" },
    { emoji: "😤", title: "Боли пользователей", text: "Какие жалобы в отзывах? Что бесит людей? Это ваш шанс" },
    { emoji: "🕳️", title: "Что не делают", text: "Какие фичи просят, но их нет? Где конкуренты слабы?" },
    { emoji: "📢", title: "Как продают", text: "Какие каналы используют? Какие рекламные сообщения?" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Разбор домашки</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Что нашли у конкурентов?
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[16px]">
          На что обращать внимание при разборе
        </p>
        <div className="space-y-[8px]">
          {areas.map((a, i) => (
            <div key={i} className="flex items-start gap-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <span className="text-[16px] shrink-0">{a.emoji}</span>
              <div>
                <p className="text-[12px] font-semibold text-[hsl(var(--slide-text))]">{a.title}</p>
                <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Разбор домашки</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
        Что нашли у конкурентов?
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[48px]">
        Делимся находками. На что обращать внимание:
      </p>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1100px]">
        {areas.map((a, i) => (
          <div key={i} className="flex items-start gap-[16px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[24px] py-[20px]">
            <span className="text-[32px] shrink-0">{a.emoji}</span>
            <div>
              <p className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">{a.title}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{a.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
