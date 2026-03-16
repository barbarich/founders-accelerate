export default function M1Slide10bGoogleTrends() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Инструмент 4</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">
        Google Trends
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mb-[48px]">Растёт ли интерес к теме — или угасает</p>

      <div className="grid grid-cols-3 gap-[24px] mb-[40px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[32px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[14px]">Что это</h3>
          <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Бесплатный инструмент Google — показывает динамику поисковых запросов за любой период. Видно, растёт тема или умирает.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[32px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[14px]">Что даёт</h3>
          <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Сравнение нескольких запросов, сезонность, география интереса, связанные темы и запросы — всё на одном графике.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[32px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[14px]">Как использовать</h3>
          <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Вбейте название конкурента или ключевое слово ниши. Сравните 2–3 конкурента. Посмотрите тренд за 5 лет — растёт ли спрос.
          </p>
        </div>
      </div>

      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
        <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] italic">
          "Вбиваем 'AI writing assistant' — видим x3 рост за 2 года. Сравниваем с 'grammar checker' — падает. Значит рынок сдвигается. Вот куда идти."
        </p>
      </div>
    </div>
  );
}
