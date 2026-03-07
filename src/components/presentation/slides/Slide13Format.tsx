const blocks = [
  {
    icon: "📅",
    title: "Еженедельные встречи · 2 часа",
    items: [
      "Разбор прогресса — что сделали за неделю",
      "Теория + практика: инструменты, методологии, кейсы",
      "Планирование следующего шага",
      "Домашнее задание на неделю",
    ],
  },
  {
    icon: "🧭",
    title: "Менторство без ограничений",
    items: [
      "Доступ ко мне лично — по любым вопросам",
      "Не только на встречах, но и между ними",
      "Telegram-группа для быстрых вопросов",
      "Вы никогда не остаётесь один на один с проблемой",
    ],
  },
  {
    icon: "🎤",
    title: "Эксперты · раз в месяц",
    items: [
      "Приглашённые специалисты: маркетинг, продажи, AI, legal, стратегия",
      "Живой Q&A с экспертом по вашему проекту",
    ],
  },
];

export default function Slide13Format() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex">
      {/* Left — title */}
      <div className="w-[560px] h-full flex flex-col justify-center px-[80px] border-r border-[hsl(var(--slide-border)/0.3)]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
          Формат
        </p>
        <h2 className="text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px]">
          The Founders Circle
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[40px]">
          12 недель. Маленькая группа 5–7 человек. Чёткий флоу от идеи до продукта с первыми пользователями.
        </p>
        <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[32px]" />
        <p className="text-[20px] text-[hsl(var(--slide-gold)/0.8)] leading-[1.5] italic">
          Вы не одни. Группа, ментор и система — всё работает на ваш результат.
        </p>
      </div>

      {/* Right — content blocks */}
      <div className="flex-1 flex flex-col justify-center px-[80px] gap-[28px]">
        {blocks.map((block, i) => (
          <div
            key={i}
            className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] px-[44px] py-[32px]"
          >
            <div className="flex items-center gap-[16px] mb-[16px]">
              <span className="text-[28px]">{block.icon}</span>
              <h3 className="text-[26px] font-semibold text-[hsl(var(--slide-text))]">
                {block.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-x-[40px] gap-y-[10px]">
              {block.items.map((item, j) => (
                <div key={j} className="flex items-start gap-[12px]">
                  <div className="w-[6px] h-[6px] rounded-full bg-[hsl(var(--slide-gold)/0.5)] mt-[10px] shrink-0" />
                  <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Goal */}
        <div className="flex items-center gap-[16px] px-[44px] py-[24px] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] bg-[hsl(var(--slide-gold)/0.05)]">
          <span className="text-[28px]">🎯</span>
          <p className="text-[22px] text-[hsl(var(--slide-gold))] font-medium">
            Цель — готовый продукт с первыми пользователями через 12 недель
          </p>
        </div>
      </div>
    </div>
  );
}
