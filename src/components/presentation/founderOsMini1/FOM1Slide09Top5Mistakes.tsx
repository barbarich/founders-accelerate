import FOM1SlideBase from "./FOM1SlideBase";

const items = [
  {
    n: 1,
    bad: "Продаёте процесс, а не результат",
    fix: "«Автоматизируем процессы» → «Отчёт по продажам за 30 секунд вместо 2 часов»",
  },
  {
    n: 2,
    bad: "Аудитория = «все»",
    fix: "Чем уже — тем сильнее результат. «HR-менеджеры в IT 50–200 человек» лучше, чем «бизнесы»",
  },
  {
    n: 3,
    bad: "Результат нельзя измерить",
    fix: "«Улучшаем эффективность» → «Экономит 10 часов в неделю». Часы, деньги, штуки",
  },
  {
    n: 4,
    bad: "Нет «без чего» клиент обойдётся",
    fix: "«Без аналитика», «без Excel», «без 2 недель ожидания» — показывает, от чего избавляете",
  },
  {
    n: 5,
    bad: "Buzzwords вместо конкретики",
    fix: "«AI-powered next-gen platform» — шум. «Курс за 5 минут» — результат",
  },
];

export default function FOM1Slide09Top5Mistakes() {
  return (
    <FOM1SlideBase
      slide={9}
      eyebrow="Топ-5 ошибок"
      title="Топ-5 ошибок позиционирования"
      subtitle="Если узнали себя — переписываем сегодня"
    >
      <div className="space-y-[10px] md:space-y-[14px] max-w-[1700px] text-[10.5px] md:text-[18px]">
        {items.map((x) => (
          <div key={x.n} className="flex gap-[10px] md:gap-[16px]">
            <span className="font-mono text-[hsl(var(--slide-gold))] font-bold w-[14px] md:w-[24px]">{x.n}</span>
            <div>
              <p>
                <span style={{ color: "hsl(0 70% 60%)" }}>❌ </span>
                <span className="text-[hsl(var(--slide-text))] font-semibold">{x.bad}</span>
              </p>
              <p className="text-[hsl(var(--slide-text-muted))] mt-[2px]">→ {x.fix}</p>
            </div>
          </div>
        ))}
      </div>
    </FOM1SlideBase>
  );
}
