export default function M1Slide26HWCompetitors() {
  const tasks = [
    "Зарегистрироваться в 3–5 продуктах конкурентов. Пройти онбординг, попробовать ключевые функции, зафиксировать сильные и слабые стороны",
    "Для B2B: записаться на демо под видом клиента. Задать вопросы о ценах, интеграциях, онбординге. Записать всё",
    "Проанализировать каждого конкурента через Perplexity — запустить промпты «Карта конкурентов» и «Слабые места»",
    "Проверить рекламу конкурентов в Meta Ad Library — какие креативы, на кого таргетят, какие офферы",
    "Посмотреть трафик через SimilarWeb — откуда приходят пользователи, какие каналы работают",
    "Проверить тренды в Google Trends — растёт ли интерес к нише, сезонность, география",
    "Найти 10+ негативных отзывов (G2, Trustpilot, App Store, Reddit) — сгруппировать по повторяющимся болям",
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">3–4 часа</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Задание на неделю</span>
      </div>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
        Конкурентный анализ
      </h2>
      <div className="space-y-[14px] max-w-[1100px]">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <div className="w-[32px] h-[32px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0 mt-[2px]">
              <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
            </div>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{task}</p>
          </div>
        ))}
      </div>
      <div className="mt-[32px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[16px]">
        <p className="text-[18px] text-[hsl(var(--slide-text-muted))]">
          Записывайте в любом удобном формате — Google Docs, Notion, заметки. Главное — зафиксировать находки.
        </p>
      </div>
    </div>
  );
}
