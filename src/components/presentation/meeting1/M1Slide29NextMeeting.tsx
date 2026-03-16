export default function M1Slide29NextMeeting() {
  const items = [
    { emoji: "🔍", text: "Конкуренты — кто они, чем отличаетесь, какие слабые места нашли" },
    { emoji: "🎙️", text: "Интервью — что узнали из разговоров, какие боли подтвердились" },
    { emoji: "💬", text: "Позиционирование — рабочая версия в одном предложении. Не финальная, но понятная" },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">На следующей встрече</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
        Каждый расскажет
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[48px]">
        Не нужно быть идеальным — нужно попробовать и принести результат
      </p>
      <div className="space-y-[24px] max-w-[1000px] mb-[48px]">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-[20px]">
            <div className="w-[40px] h-[40px] rounded-full bg-[hsl(var(--slide-gold)/0.15)] border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0">
              <span className="text-[22px]">{item.emoji}</span>
            </div>
            <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[32px] py-[20px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))]">
          🙌 Даже если получилось не всё — приходите с тем, что есть. Разберём вместе и докрутим.
        </p>
      </div>
    </div>
  );
}
