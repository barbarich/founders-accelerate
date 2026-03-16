export default function M1Slide30Toolkit() {
  const tools = [
    { name: "Perplexity.ai", desc: "Исследование рынка и конкурентов" },
    { name: "Google NotebookLM", desc: "Глубокий анализ документов" },
    { name: "Google Trends", desc: "Динамика спроса и сезонность" },
    { name: "SimilarWeb", desc: "Анализ трафика конкурентов" },
    { name: "Meta Ad Library", desc: "Реклама конкурентов" },
    { name: "tl;dv", desc: "Запись и анализ интервью" },
    { name: "Tally.so", desc: "Custdev-форма" },
    { name: "Napkin.ai", desc: "Визуализация позиционирования" },
  ];
  const templates = [
    "Таблица конкурентного анализа",
    "Таблица разбора бизнес-модели",
    "Чеклист продуктового teardown",
    "5 запросов для Perplexity",
    "Шаблон custdev-интервью (7 вопросов)",
    "Таблица записи интервью",
    "Шаблон сообщения для поиска респондентов",
    "Шаблон позиционирования + 3 теста",
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Ваш стартовый набор</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
        Всё в одной папке
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[40px]">Ссылка в чате после встречи</p>
      <div className="flex gap-[40px]">
        <div className="flex-1">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[20px]">🛠️ Инструменты</h3>
          <div className="space-y-[12px]">
            {tools.map((t, i) => (
              <div key={i} className="flex items-center gap-[12px]">
                <div className="w-[5px] h-[5px] rounded-full bg-[hsl(var(--slide-gold)/0.5)]" />
                <span className="text-[18px] text-[hsl(var(--slide-text))] font-medium">{t.name}</span>
                <span className="text-[16px] text-[hsl(var(--slide-text-muted))]">— {t.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[20px]">📋 Шаблоны</h3>
          <div className="space-y-[12px]">
            {templates.map((t, i) => (
              <div key={i} className="flex items-center gap-[12px]">
                <div className="w-[5px] h-[5px] rounded-full bg-[hsl(var(--slide-gold)/0.5)]" />
                <span className="text-[18px] text-[hsl(var(--slide-text)/0.85)]">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
