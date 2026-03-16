export default function M1Slide30Toolkit() {
  const tools = [
    { name: "Perplexity.ai", desc: "Анализ рынка и конкурентов с источниками" },
    { name: "SimilarWeb", desc: "Трафик и каналы привлечения конкурентов" },
    { name: "Meta Ad Library", desc: "Рекламные креативы и офферы конкурентов" },
    { name: "Google Trends", desc: "Динамика спроса, сезонность, география" },
    { name: "tl;dv", desc: "Запись и AI-саммари custdev-интервью" },
    { name: "Google Forms + Gemini", desc: "Генерация опросников через AI" },
    { name: "Google Docs", desc: "Скрипт вопросов для custdev-звонка" },
    { name: "ChatGPT / Gemini / Claude", desc: "Генерация вопросов для интервью по промпту" },
  ];
  const resources = [
    "Промпты для анализа рынка и конкурентов",
    "Промпт для генерации custdev-вопросов",
    "Формула позиционирования + 3 теста проверки",
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Резюме встречи</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
        Инструменты и материалы
      </h2>
      <div className="flex gap-[40px]">
        <div className="flex-[1.2]">
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
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[20px]">📄 Материалы</h3>
          <div className="space-y-[12px]">
            {resources.map((t, i) => (
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
