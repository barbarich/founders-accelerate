export default function M1Slide07Perplexity() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Инструмент 1</span>
      </div>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">
        Perplexity.ai
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mb-[48px]">
        Исследование рынка за 5 минут вместо 5 дней
      </p>
      <div className="grid grid-cols-2 gap-[32px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Что это и чем отличается от GPT</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Perplexity — это AI-поисковик. GPT генерирует текст из памяти и часто выдумывает факты. Perplexity ищет в реальном интернете прямо сейчас и даёт ссылки на источники. Для ресёрча конкурентов — это критично.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Пробуем вживую</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Сейчас дам готовый промпт — каждый вводит его для своего продукта. Смотрим результаты вместе и разбираем, что полезно, а что нет.
          </p>
        </div>
      </div>
      <div className="mt-[32px] bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[32px] py-[20px]">
        <p className="text-[20px] text-[hsl(var(--slide-gold))] font-medium">
          💡 Используйте режим Pro Search — он задаёт уточняющие вопросы и копает глубже. Всегда проверяйте источники: кликайте по ссылкам, AI может неверно интерпретировать данные.
        </p>
      </div>
    </div>
  );
}
