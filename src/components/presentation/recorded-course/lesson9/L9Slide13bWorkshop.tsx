import { useIsMobile } from "@/hooks/use-mobile";

const rows = [
  {
    n: "1",
    t: "Ключевое действие",
    q: "Что пользователь должен сделать, чтобы получить ценность повторно?",
    ex: "Загрузить документ · Открыть отчёт · Завершить тренировку",
  },
  {
    n: "2",
    t: "Окно возврата",
    q: "Через сколько часов / дней он должен вернуться, чтобы продукт работал?",
    ex: "24 часа · 7 дней · до даты события",
  },
  {
    n: "3",
    t: "Триггер",
    q: "Какое событие в продукте или в жизни пользователя запускает возврат?",
    ex: "Не открыл 3 дня · Завершил шаг 1 · За 24ч до встречи",
  },
  {
    n: "4",
    t: "Механика (1 из 5)",
    q: "Streak · Незаконченное · Социальный долг · Свежий контент · Дедлайн",
    ex: "Выберите одну — ту, что естественна для вашего продукта",
  },
  {
    n: "5",
    t: "Канал и сообщение",
    q: "Где догоняем и какой одной фразой? (push / email / WhatsApp)",
    ex: "«Осталось 2 документа до проверки 14 марта»",
  },
  {
    n: "6",
    t: "Метрика проверки",
    q: "По какой цифре через 2 недели поймёте, что работает?",
    ex: "D7 retention · % завершивших шаг 2 · возвраты по триггеру",
  },
];

export default function L9Slide13bWorkshop() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Шаблон · карта возврата
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Карта возврата твоего продукта
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[10px] leading-[1.4]">
          Заполни 6 пунктов для своего продукта. Один лист — один контур возврата. AI-coach промпт: «Я фаундер, мой продукт [тип]. Помоги заполнить карту возврата по этим 6 пунктам».
        </p>
        <div className="space-y-[5px]">
          {rows.map((r) => (
            <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-baseline gap-[8px] mb-[2px]">
                <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{r.n}</span>
                <span className="text-[10.5px] font-bold text-[hsl(var(--slide-text))]">{r.t}</span>
              </div>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.35] ml-[16px]">{r.q}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-gold)/0.85)] leading-[1.35] ml-[16px] mt-[1px] italic">{r.ex}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[60px]">
      <div className="flex items-end justify-between mb-[20px]">
        <div>
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
            Шаблон · карта возврата
          </p>
          <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
            Карта возврата <span className="text-[hsl(var(--slide-gold))]">твоего продукта</span>
          </h2>
        </div>
        <p className="text-[18px] text-[hsl(var(--slide-text-muted))] max-w-[520px] text-right leading-[1.4]">
          Заполни 6 пунктов для своего продукта.<br />
          AI-coach промпт: «Я фаундер, продукт [тип]. Помоги заполнить карту возврата».
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[14px] max-w-[1680px]">
        {rows.map((r) => (
          <div
            key={r.n}
            className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[24px] py-[16px]"
          >
            <div className="flex items-baseline gap-[14px] mb-[6px]">
              <span className="font-display text-[32px] font-bold text-[hsl(var(--slide-gold))] leading-none">
                {r.n}
              </span>
              <span className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{r.t}</span>
            </div>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[46px]">
              {r.q}
            </p>
            <p className="text-[15px] text-[hsl(var(--slide-gold)/0.9)] leading-[1.4] ml-[46px] mt-[4px] italic">
              Пример: {r.ex}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}