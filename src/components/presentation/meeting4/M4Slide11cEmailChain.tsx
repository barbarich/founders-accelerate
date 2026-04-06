import { useIsMobile } from "@/hooks/use-mobile";

const emails = [
  {
    num: "1",
    timing: "День 1",
    subject: "{{имя}}, быстрый вопрос",
    body: "Основное письмо по шаблону. Короткое, конкретное, с мягким CTA.",
    goal: "Открытие + первый интерес",
    emoji: "📨",
  },
  {
    num: "2",
    timing: "День 3",
    subject: "Re: быстрый вопрос",
    body: "Одна цифра: «Кстати, [клиент] получил [результат] за [время]. Подумал, вам полезно»",
    goal: "Доказательство + повторный контакт",
    emoji: "📊",
  },
  {
    num: "3",
    timing: "День 7",
    subject: "Re: быстрый вопрос",
    body: "«Последнее — если не актуально, просто скажите. Если интересно — вот 2-мин видео»",
    goal: "Мягкое закрытие",
    emoji: "🤝",
  },
];

export default function M4Slide11cEmailChain() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Не сдавайся после первого
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Цепочка из 3 писем
        </h2>
        <div className="flex items-center gap-[6px] mb-[10px]">
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[4px] px-[6px] py-[2px]">
            <span className="text-[8px] text-[hsl(var(--slide-text-muted))]">1 письмо: <span className="text-[hsl(var(--slide-text))] font-bold">2-5%</span> ответов</span>
          </div>
          <span className="text-[8px] text-[hsl(var(--slide-text-muted))]">→</span>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[4px] px-[6px] py-[2px]">
            <span className="text-[8px] text-[hsl(var(--slide-text-muted))]">3 письма: <span className="text-[hsl(var(--slide-gold))] font-bold">12-18%</span> ответов</span>
          </div>
        </div>
        <div className="space-y-[8px] mb-[8px]">
          {emails.map((e, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[8px]">
              <div className="flex items-center justify-between mb-[3px]">
                <div className="flex items-center gap-[4px]">
                  <span className="text-[12px]">{e.emoji}</span>
                  <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">Письмо {e.num}</span>
                </div>
                <span className="text-[8px] text-[hsl(var(--slide-text-muted))] font-mono">{e.timing}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text))] mb-[2px]">Тема: {e.subject}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.3] italic">{e.body}</p>
              <p className="text-[7px] text-[hsl(var(--slide-gold))] mt-[3px]">→ {e.goal}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[8px] py-[6px]">
          <p className="text-[8px] text-[hsl(var(--slide-gold))]">💡 Письма 2 и 3 идут как «Re:» — выглядит как продолжение диалога → open rate x2</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <div className="flex items-end justify-between mb-[40px]">
        <div>
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
            Не сдавайся после первого
          </p>
          <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">
            Цепочка из 3 писем
          </h2>
        </div>
        <div className="flex items-center gap-[16px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[14px] text-center">
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))]">1 письмо</p>
            <p className="text-[28px] font-bold text-[hsl(var(--slide-text))]">2-5%</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))]">ответов</p>
          </div>
          <span className="text-[24px] text-[hsl(var(--slide-gold))]">→</span>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[14px] text-center">
            <p className="text-[14px] text-[hsl(var(--slide-gold))]">3 письма</p>
            <p className="text-[28px] font-bold text-[hsl(var(--slide-gold))]">12-18%</p>
            <p className="text-[13px] text-[hsl(var(--slide-gold))]">ответов</p>
          </div>
        </div>
      </div>

      {/* 3 cards horizontal */}
      <div className="flex gap-[24px] mb-[28px]">
        {emails.map((e, i) => (
          <div key={i} className="flex-1 relative">
            {i < emails.length - 1 && (
              <div className="absolute top-[50%] right-[-12px] text-[20px] text-[hsl(var(--slide-gold)/0.5)] z-10">→</div>
            )}
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[28px] py-[24px] h-full flex flex-col">
              <div className="flex items-center justify-between mb-[16px]">
                <div className="flex items-center gap-[10px]">
                  <span className="text-[28px]">{e.emoji}</span>
                  <span className="text-[22px] font-bold text-[hsl(var(--slide-gold))]">Письмо {e.num}</span>
                </div>
                <span className="text-[16px] text-[hsl(var(--slide-text-muted))] font-mono bg-[hsl(var(--slide-gold)/0.1)] px-[12px] py-[4px] rounded-[6px]">{e.timing}</span>
              </div>
              <p className="text-[16px] text-[hsl(var(--slide-text))] mb-[10px]">
                <span className="text-[hsl(var(--slide-gold))]">Тема:</span> {e.subject}
              </p>
              <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5] italic flex-1">{e.body}</p>
              <div className="mt-[14px] pt-[14px] border-t border-[hsl(var(--slide-border)/0.2)]">
                <p className="text-[15px] text-[hsl(var(--slide-gold))] font-semibold">→ {e.goal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Re: trick */}
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[14px] px-[28px] py-[18px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))]">
          <span className="text-[hsl(var(--slide-gold))] font-bold">💡 Трюк с «Re:»</span> — письма 2 и 3 отправляй как ответ на первое. В инбоксе это выглядит как продолжение диалога, а не новый спам. Open rate вырастает в 2 раза.
        </p>
      </div>
    </div>
  );
}
