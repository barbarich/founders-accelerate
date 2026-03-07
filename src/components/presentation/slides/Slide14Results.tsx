const results = [
  {
    before: "«Не знаю с чего начать»",
    after: "Чёткий план и понимание каждого шага",
    icon: "🗺️",
  },
  {
    before: "«Делаю один — нет мотивации»",
    after: "Группа, ментор и система, которые не дадут остановиться",
    icon: "🔥",
  },
  {
    before: "«Не могу сделать продукт без разработчика»",
    after: "Навык создания продуктов с помощью AI — без единой строчки кода",
    icon: "🤖",
  },
  {
    before: "«Не понимаю как монетизировать»",
    after: "Рабочая бизнес-модель, проверенная на реальных клиентах",
    icon: "💰",
  },
  {
    before: "«Не знаю как найти первых клиентов»",
    after: "Первые пользователи и понятная стратегия привлечения",
    icon: "👥",
  },
  {
    before: "«Нет нетворка и поддержки»",
    after: "Комьюнити 170+ фаундеров, которое остаётся навсегда",
    icon: "🌐",
  },
];

export default function Slide14Results() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Через 12 недель
      </p>
      <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">
        От «не знаю с чего начать» — к готовому продукту
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[64px]">
        Вот что изменится за 3 месяца работы в программе
      </p>

      <div className="grid grid-cols-3 gap-[24px]">
        {results.map((r, i) => (
          <div
            key={i}
            className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px] flex flex-col"
          >
            <span className="text-[32px] mb-[16px]">{r.icon}</span>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.4)] line-through mb-[12px] leading-[1.4]">
              {r.before}
            </p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] font-medium leading-[1.4]">
              {r.after}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
