import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide04InterviewResults() {
  const questions = [
    { emoji: "🎯", q: "Подтвердилась ли боль?", hint: "Люди действительно жалуются на это или вы додумали?" },
    { emoji: "💸", q: "Готовы ли платить?", hint: "Спрашивали про деньги? Какая была реакция на цену?" },
    { emoji: "🔄", q: "Что удивило?", hint: "Что вы узнали, чего не ожидали? Это самое ценное" },
    { emoji: "🚫", q: "Что НЕ подтвердилось?", hint: "Какие ваши гипотезы оказались неверными?" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Разбор домашнего задания</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Что вы узнали из интервью?
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[16px]">
          Каждый рассказывает: 3 минуты на человека
        </p>
        <div className="space-y-[8px]">
          {questions.map((q, i) => (
            <div key={i} className="flex items-start gap-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <span className="text-[16px] shrink-0">{q.emoji}</span>
              <div>
                <p className="text-[12px] font-semibold text-[hsl(var(--slide-text))]">{q.q}</p>
                <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{q.hint}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Разбор домашнего задания</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
        Что вы узнали из интервью?
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[48px]">
        Каждый рассказывает — 3 минуты на человека. Группа задаёт вопросы.
      </p>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1100px]">
        {questions.map((q, i) => (
          <div key={i} className="flex items-start gap-[16px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[24px] py-[20px]">
            <span className="text-[32px] shrink-0">{q.emoji}</span>
            <div>
              <p className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">{q.q}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{q.hint}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
