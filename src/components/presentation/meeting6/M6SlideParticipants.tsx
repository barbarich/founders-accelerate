import { useIsMobile } from "@/hooks/use-mobile";

const participants = [
  {
    order: 1,
    name: "Laura",
    product: "QA/RA assistant",
    task: "Собрать первый продуктовый экран",
    detail: "Заполни промпт под QA/RA assistant. Главное действие — загрузить документ, получить ответ со ссылкой на параграф. Документ остаётся приватным.",
  },
  {
    order: 2,
    name: "Mila",
    product: "Hobbix",
    task: "Продуманный флоу после авторизации → ценность",
    detail: "Что видит юзер сразу после login, как удерживаешь внимание, как доносишь ценность Hobbix не словами, а действиями за первые минуты.",
  },
  {
    order: 3,
    name: "Vlad",
    product: "Выбор идеи + первый экран",
    task: "Зафиксировать идею и собрать функц. экран",
    detail: "Сначала вслух 3 вопроса (кому конкретно / какое ОДНО действие / что он получит обратно). Проходишь — заполняешь промпт под выбранную идею.",
  },
  {
    order: 4,
    name: "Lea",
    product: "Default She",
    task: "Выбрать категорию → флоу до Aha",
    detail: "Первое решение: одна категория, на которой фокусируемся. Узкий аватар, одна боль, одно ключевое действие. Под неё — флоу auth → результат → Aha.",
  },
  {
    order: 5,
    name: "Inna + Aleksandra",
    product: "Dira.click",
    task: "Провалидировать флоу с ИИ → Aha",
    detail: "Промпт выше — для web. Для бота: даёшь Claude/GPT роль типичного клиента, прогоняешь текущий флоу, фиксируешь точки трения, дорабатываешь онбординг и момент первой выдачи.",
  },
];

export default function M6SlideParticipants() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[16px] py-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Что делаем сейчас
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          5 фаундеров. Параллельная работа.
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Открываешь промпт. Заполняешь под свою задачу. Начинаешь. Я подключаюсь к каждому в этом порядке.
        </p>
        <div className="space-y-[5px] flex-1 overflow-y-auto prompt-scroll pr-[3px]">
          {participants.map((p) => (
            <div key={p.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[9px] py-[6px]">
              <div className="flex items-center gap-[6px] mb-[2px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold shrink-0">{p.order}</span>
                <p className="text-[10.5px] font-bold text-[hsl(var(--slide-text))]">{p.name}</p>
                <p className="text-[8px] text-[hsl(var(--slide-gold))]">· {p.product}</p>
              </div>
              <p className="text-[9px] font-semibold text-[hsl(var(--slide-text))] leading-[1.3] mb-[2px]">{p.task}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[100px] py-[60px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Что делаем сейчас
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px]">
        5 фаундеров. Параллельная работа.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[28px] max-w-[1500px] leading-[1.4]">
        Открываешь промпт. Заполняешь под свою задачу. Начинаешь. Я подключаюсь к каждому в этом порядке — не ждёшь.
      </p>

      <div className="grid grid-cols-1 gap-[14px] max-w-[1700px] flex-1 min-h-0">
        {participants.map((p) => (
          <div
            key={p.name}
            className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[26px] py-[16px] grid grid-cols-[60px_220px_320px_1fr] gap-[24px] items-center"
          >
            <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[44px] h-[44px] flex items-center justify-center rounded-full font-bold">{p.order}</span>
            <div>
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">{p.name}</p>
              <p className="text-[15px] text-[hsl(var(--slide-gold))] mt-[2px]">{p.product}</p>
            </div>
            <p className="text-[18px] font-semibold text-[hsl(var(--slide-text))] leading-[1.3]">{p.task}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{p.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
