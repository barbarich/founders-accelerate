const phases = [
  {
    num: "01",
    title: "Фундамент",
    weeks: "Недели 1–4",
    subtitle: "Превращаем идею в план",
    items: [
      "Валидация идеи — проверяем, есть ли спрос",
      "Исследование рынка и конкурентов",
      "Формируем бизнес-модель",
      "Определяем MVP — что строить первым",
    ],
    result: "Вы точно знаете, что строить и для кого",
  },
  {
    num: "02",
    title: "Создание продукта",
    weeks: "Недели 5–8",
    subtitle: "Строим MVP с помощью AI",
    items: [
      "Осваиваем AI-инструменты для разработки",
      "Создаём рабочий прототип — без навыков кода",
      "Еженедельные демо и обратная связь",
      "Быстрые итерации — улучшаем каждую неделю",
    ],
    result: "У вас есть работающий продукт",
  },
  {
    num: "03",
    title: "Запуск в рынок",
    weeks: "Недели 9–12",
    subtitle: "Находим первых клиентов",
    items: [
      "Стратегия выхода на рынок",
      "Маркетинг, продажи, первые касания",
      "Привлечение первых пользователей",
      "План роста на следующие 3–6 месяцев",
    ],
    result: "Продукт в рынке с первыми клиентами",
  },
];

export default function Slide15Phases() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Программа
      </p>
      <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
        Как устроена программа
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[64px]">
        Пошаговый путь. Не нужен опыт в разработке, маркетинге или продажах — мы пройдём это вместе.
      </p>

      <div className="flex gap-[32px]">
        {phases.map((p, idx) => (
          <div key={p.num} className="flex-1 flex flex-col">
            {/* Phase card */}
            <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[40px] flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-[16px] mb-[8px]">
                <span className="text-[48px] font-bold text-[hsl(var(--slide-gold)/0.15)] font-mono leading-none">
                  {p.num}
                </span>
                <div>
                  <p className="text-[16px] font-mono text-[hsl(var(--slide-gold))]">{p.weeks}</p>
                  <h3 className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{p.title}</h3>
                </div>
              </div>
              <p className="text-[18px] text-[hsl(var(--slide-text-muted))] italic mb-[24px]">{p.subtitle}</p>

              {/* Items */}
              <div className="space-y-[14px] flex-1">
                {p.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-[12px]">
                    <div className="w-[6px] h-[6px] rounded-full bg-[hsl(var(--slide-gold)/0.4)] mt-[9px] shrink-0" />
                    <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{item}</p>
                  </div>
                ))}
              </div>

              {/* Result */}
              <div className="mt-[24px] pt-[20px] border-t border-[hsl(var(--slide-border)/0.3)]">
                <div className="flex items-center gap-[10px]">
                  <span className="text-[20px]">✅</span>
                  <p className="text-[19px] text-[hsl(var(--slide-gold))] font-medium">{p.result}</p>
                </div>
              </div>
            </div>

            {/* Arrow connector */}
            {idx < phases.length - 1 && (
              <div className="hidden" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
