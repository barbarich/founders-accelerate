export default function M1Slide26HWCompetitors() {
  const tasks = [
    "Зарегистрироваться в 3 продуктах конкурентов, пройти онбординг, сделать скриншоты",
    "Заполнить таблицу конкурентного анализа (6 строк: 3 прямых, 2 косвенных, 1 замена)",
    "Заполнить таблицу бизнес-модели для 3 главных конкурентов",
    "Проверить Meta Ad Library — скриншоты рекламы",
    "Проверить SimilarWeb — источники трафика",
    "Найти 10 негативных отзывов, сгруппировать по темам",
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">2–3 часа</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Задание на неделю</span>
      </div>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        Конкурентный анализ
      </h2>
      <div className="space-y-[16px] max-w-[1100px]">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <div className="w-[32px] h-[32px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0 mt-[2px]">
              <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
            </div>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
