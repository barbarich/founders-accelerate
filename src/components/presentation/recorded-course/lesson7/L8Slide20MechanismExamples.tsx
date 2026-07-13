import { useIsMobile } from "@/hooks/use-mobile";

const cases = [
  {
    mechanism: "Незавершённость",
    product: "Duolingo",
    detail: "Streak — серия дней. Главный экран показывает «3 дня подряд». Сломаешь — обидно. Это структурный механизм возврата, push только напоминает.",
  },
  {
    mechanism: "Ожидание",
    product: "LinkedIn",
    detail: "«3 человека посмотрели твой профиль» — конкретное событие, которое нужно увидеть. Не «зайди в LinkedIn», а «у тебя что-то новое».",
  },
  {
    mechanism: "Свежий контент",
    product: "Spotify Discover Weekly",
    detail: "Каждый понедельник новый плейлист на 30 песен подобран под тебя. Это не push — это свойство продукта. Ты сам открываешь по понедельникам.",
  },
  {
    mechanism: "Сохранённое",
    product: "Pinterest",
    detail: "Закрыл — у тебя 4 доски и 200 пинов. Хочешь обновить, добавить, посмотреть. Возвращаешься без напоминания.",
  },
  {
    mechanism: "Созданное",
    product: "Notion",
    detail: "Закрыл — у тебя страница, в которой 3 часа жизни. Хочешь продолжить. Возвращаешься, потому что там твоё.",
  },
];

export default function L8Slide20MechanismExamples() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Как сделано у тех, у кого retention высокий
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Один пример каждого механизма.
        </h2>
        <div className="space-y-[4px]">
          {cases.map((c, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[8px] py-[5px]">
              <div className="flex items-baseline gap-[6px] mb-[1px]">
                <p className="text-[8.5px] uppercase tracking-[0.08em] text-[hsl(var(--slide-text-muted))] font-semibold">{c.mechanism}</p>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{c.product}</p>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4]">{c.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[6px] leading-[1.4]">
          Каждое — структурное. Не push. Само устройство продукта говорит «вернись».
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Как сделано у тех, у кого retention высокий
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
        Один пример каждого механизма.
      </h2>
      <div className="space-y-[10px] max-w-[1600px] mb-[20px]">
        {cases.map((c, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[14px] grid grid-cols-[200px_240px_1fr] gap-[24px] items-center">
            <p className="text-[14px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))] font-semibold leading-[1.3]">{c.mechanism}</p>
            <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] leading-[1.2]">{c.product}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.45]">{c.detail}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Каждое — структурное. Не push. Не email. Само устройство продукта говорит «вернись».
      </p>
    </div>
  );
}
