const phases = [
  {
    num: "01",
    title: "От идеи к плану",
    weeks: "Недели 1–4",
    items: ["Валидация идеи", "Исследование рынка", "Бизнес-модель", "Определение MVP"],
  },
  {
    num: "02",
    title: "Строим MVP",
    weeks: "Недели 5–8",
    items: ["AI-инструменты", "Разработка", "Еженедельные демо", "Итерации"],
  },
  {
    num: "03",
    title: "Запуск",
    weeks: "Недели 9–12",
    items: ["Стратегия выхода", "Маркетинг и продажи", "Первые клиенты", "План роста"],
  },
];

export default function Slide15Phases() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Программа</p>
      <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-[80px]">
        Как устроена программа
      </h2>

      <div className="flex gap-[40px]">
        {phases.map((p) => (
          <div key={p.num} className="flex-1 relative">
            <div className="absolute top-0 left-0 w-[60px] h-[3px] bg-[hsl(var(--slide-gold))]" />
            <div className="pt-[32px]">
              <span className="text-[16px] font-mono text-[hsl(var(--slide-gold)/0.6)]">{p.weeks}</span>
              <h3 className="text-[32px] font-bold text-[hsl(var(--slide-text))] mt-[8px] mb-[32px]">{p.title}</h3>
              <div className="space-y-[16px]">
                {p.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-[12px]">
                    <div className="w-[4px] h-[4px] rounded-full bg-[hsl(var(--slide-gold)/0.5)]" />
                    <span className="text-[22px] text-[hsl(var(--slide-text)/0.8)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
