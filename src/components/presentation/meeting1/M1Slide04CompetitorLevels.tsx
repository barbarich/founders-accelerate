export default function M1Slide04CompetitorLevels() {
  const levels = [
    { icon: "⚔️", title: "Прямые", text: "Делают то же самое для той же аудитории" },
    { icon: "🔄", title: "Косвенные", text: "Решают ту же проблему другим способом" },
    { icon: "📋", title: "Замена", text: 'Что клиент делает СЕЙЧАС вместо вашего продукта (Excel, стажёр, ручной процесс, "ничего не делать")' },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Конкурентный анализ</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px]">
        Ваши конкуренты — это не те<br />кто делает то же самое
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[56px]">Три уровня конкурентов</p>
      <div className="flex gap-[40px] mb-[56px]">
        {levels.map((l, i) => (
          <div key={i} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[40px]">
            <span className="text-[40px]">{l.icon}</span>
            <h3 className="text-[28px] font-semibold text-[hsl(var(--slide-text))] mt-[20px] mb-[12px]">{l.title}</h3>
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{l.text}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[32px] py-[20px]">
        <p className="text-[20px] text-[hsl(var(--slide-gold))] font-medium">
          💡 "Ничего не делать" — ваш самый сильный конкурент. Люди привыкли жить с проблемой.
        </p>
      </div>
    </div>
  );
}
