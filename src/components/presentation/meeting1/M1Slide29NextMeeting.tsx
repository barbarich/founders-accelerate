export default function M1Slide29NextMeeting() {
  const items = [
    "Что узнали из интервью — что изменилось в понимании продукта",
    "Кто конкуренты — полная картина с данными",
    "Финальное позиционирование — одно предложение",
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">На следующей встрече</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        Каждый расскажет
      </h2>
      <div className="space-y-[24px] max-w-[1000px] mb-[56px]">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-[20px]">
            <div className="w-[36px] h-[36px] rounded-full bg-[hsl(var(--slide-gold)/0.15)] border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0">
              <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
            </div>
            <p className="text-[26px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] px-[32px] py-[24px]">
        <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold">
          ⚠️ Без интервью и анализа конкурентов — нечего обсуждать.
        </p>
      </div>
    </div>
  );
}
