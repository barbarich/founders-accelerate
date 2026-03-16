export default function M1Slide23Step2() {
  const steps = [
    { time: "0–2 мин", action: "Открыть ChatGPT / Gemini / Claude → вставить готовый промпт для генерации custdev-вопросов" },
    { time: "2–5 мин", action: "Получить список из 10–18 вопросов для звонка → прочитать, убрать наводящие и дублирующие" },
    { time: "5–7 мин", action: "Проверить: есть ли вопросы о прошлом опыте, текущем решении и бюджете. Если нет — добавить" },
    { time: "7–9 мин", action: "Оценить список визуально: логичный ли порядок, нет ли сложных формулировок, понятен ли каждый вопрос" },
    { time: "9–10 мин", action: "Показать список — быстрый разбор слабых мест и рекомендации по доработке" },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">10 мин</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Делаем вместе — Шаг 2</span>
      </div>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        Вопросы для custdev-звонка
      </h2>
      <div className="space-y-[20px] max-w-[1100px]">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[8px] rounded shrink-0 min-w-[90px] text-center">
              {s.time}
            </span>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
      <div className="mt-[44px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[18px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold">
          Результат: 10–18 вопросов для звонка → скопировать в Google Docs или использовать как основу для Google Forms
        </p>
      </div>
    </div>
  );
}
