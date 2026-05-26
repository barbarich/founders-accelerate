import { useIsMobile } from "@/hooks/use-mobile";

const story = [
  {
    step: "1",
    label: "Что увидел юзер",
    body: "Зашёл в Mikey AI, нажал «начать» — белый экран. Ничего не происходит. Закрыл приложение, ушёл.",
  },
  {
    step: "2",
    label: "Что увидел я",
    body: "В Sentry — 23 одинаковые ошибки за час. Все на одном экране — после регистрации. Все юзеры новые.",
  },
  {
    step: "3",
    label: "Где была проблема",
    body: "Claude забыл добавить «состояние ошибки» на одном экране. Если API упал — белый экран вместо понятного сообщения.",
  },
  {
    step: "4",
    label: "Как починили",
    body: "Дал Claude скрин из Sentry. Через 10 минут — PR с фиксом + понятное сообщение «что-то пошло не так, попробуй ещё раз». Замержил.",
  },
];

const lessons = [
  {
    title: "Что добавил в CLAUDE.md",
    body: "«На каждом экране — три состояния: загрузка, пусто, ошибка. Без исключений.»",
  },
  {
    title: "Что узнал про себя",
    body: "Без Sentry я бы никогда не узнал про этих 23 юзеров. Они просто бы ушли тихо.",
  },
  {
    title: "Что добавил в чек-лист",
    body: "Перед каждым релизом: пройти все экраны с выключенным WiFi. Посмотреть что юзер увидит.",
  },
];

export default function L6Slide18RealProductionCase() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Реальный кейс из Mikey AI
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Белый экран после регистрации
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          Самая частая ошибка соло-фаундеров: забыли добавить «состояние ошибки» на экране. Юзер видит белое — уходит.
        </p>
        <div className="space-y-[3px] mb-[5px]">
          {story.map((s) => (
            <div key={s.step} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-center gap-[4px]">
                <span className="font-mono text-[7px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[12px] h-[12px] flex items-center justify-center rounded-full font-bold shrink-0">{s.step}</span>
                <p className="text-[8px] font-bold text-[hsl(var(--slide-text))]">{s.label}</p>
              </div>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Что унёс из истории</p>
        <div className="space-y-[2px]">
          {lessons.map((l) => (
            <div key={l.title} className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[1.5px] border-[hsl(var(--slide-gold))] rounded-[3px] px-[5px] py-[2px]">
              <p className="text-[7px] font-bold text-[hsl(var(--slide-text))]">{l.title}</p>
              <p className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{l.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Реальный кейс из Mikey AI
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        <span className="text-[hsl(var(--slide-gold))]">Белый экран</span> после регистрации
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[16px] max-w-[1500px] leading-[1.45]">
        Самая частая ошибка соло-фаундеров: забыли добавить «состояние ошибки» на экране. Если что-то падает на сервере — юзер видит белый экран. Ничего не понимает. Уходит. Тихо.
      </p>

      <div className="grid grid-cols-4 gap-[14px] max-w-[1700px] mb-[16px]">
        {story.map((s) => (
          <div key={s.step} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[18px] py-[14px]">
            <div className="flex items-center gap-[8px] mb-[8px]">
              <span className="font-mono text-[13px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[26px] h-[26px] flex items-center justify-center rounded-full font-bold shrink-0">{s.step}</span>
              <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">{s.label}</p>
            </div>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.55]">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[26px] py-[16px] max-w-[1700px]">
        <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">Что унёс с собой из этой истории</p>
        <div className="grid grid-cols-3 gap-[18px]">
          {lessons.map((l) => (
            <div key={l.title}>
              <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">{l.title}</p>
              <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{l.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
