import { useIsMobile } from "@/hooks/use-mobile";

const criteria = [
  { emoji: "🎯", label: "Понятность", question: "За 30 секунд понял для кого и зачем?" },
  { emoji: "🛠️", label: "Продукт", question: "Захотелось попробовать? Видна ценность?" },
  { emoji: "💰", label: "Продал?", question: "Если бы ты был клиентом — купил бы?" },
  { emoji: "🎤", label: "Подача", question: "Уверенно, живо, без «ну, типа»?" },
];

export default function M4Slide04Scorecard() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Для группы
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Как слушать питч
        </h2>
        <div className="space-y-[8px] mb-[14px]">
          {criteria.map((c, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[8px]">
              <div className="flex items-center justify-between mb-[4px]">
                <div className="flex items-center gap-[6px]">
                  <span className="text-[14px]">{c.emoji}</span>
                  <span className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{c.label}</span>
                </div>
                <div className="flex gap-[4px]">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span key={n} className="w-[16px] h-[16px] rounded-full border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center text-[7px] text-[hsl(var(--slide-text-muted))]">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))]">{c.question}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[12px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold mb-[2px]">+ Один главный совет</p>
          <p className="text-[8px] text-[hsl(var(--slide-text-muted))]">Что конкретно улучшить в первую очередь?</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Для группы
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        Как слушать питч
      </h2>

      <div className="grid grid-cols-2 gap-[24px] max-w-[1100px] mb-[36px]">
        {criteria.map((c, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[32px] py-[24px]">
            <div className="flex items-center justify-between mb-[16px]">
              <div className="flex items-center gap-[12px]">
                <span className="text-[32px]">{c.emoji}</span>
                <span className="text-[24px] font-bold text-[hsl(var(--slide-text))]">{c.label}</span>
              </div>
              <div className="flex gap-[8px]">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span key={n} className="w-[36px] h-[36px] rounded-full border-2 border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center text-[16px] text-[hsl(var(--slide-text-muted))] font-mono">
                    {n}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))]">{c.question}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[24px] max-w-[1100px]">
        <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold mb-[8px]">+ Один главный совет</p>
        <p className="text-[18px] text-[hsl(var(--slide-text-muted))]">Что конкретно улучшить в первую очередь?</p>
      </div>
    </div>
  );
}
