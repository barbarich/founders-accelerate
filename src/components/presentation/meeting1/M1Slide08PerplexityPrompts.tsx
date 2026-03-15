export default function M1Slide08PerplexityPrompts() {
  const prompts = [
    { label: "Карта конкурентов", text: '"List the top 10 tools/products that help [ваша аудитория] to [решить проблему]. For each: name, website, pricing, target audience, main differentiator..."' },
    { label: "Слабые места", text: '"What are the most common complaints about [конкурент]? Search Reddit, G2, Trustpilot, Product Hunt. List specific pain points."' },
    { label: "Размер рынка", text: '"What is the market size for [ниша] in 2026? Growth rate? Key trends? Main investors? Give specific numbers and sources."' },
    { label: "Кто платит", text: '"Who specifically pays for [тип продукта]? Job title, company size, industry, budget. Not who \'could use it\' but who already spends money."' },
    { label: "Позиционирование", text: '"I\'m building [продукт] for [аудитория]. Competitors: [1, 2, 3]. What positioning angle would make me stand out? 5 specific angles."' },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Готовые запросы для Perplexity</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        5 шаблонов — скопируйте и подставьте своё
      </h2>
      <div className="space-y-[16px]">
        {prompts.map((p, i) => (
          <div key={i} className="flex gap-[20px] items-start">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[12px] py-[6px] rounded shrink-0 mt-[4px]">{i + 1}</span>
            <div className="flex-1">
              <span className="text-[20px] font-semibold text-[hsl(var(--slide-text))]">{p.label}</span>
              <p className="text-[17px] text-[hsl(var(--slide-text-muted))] font-mono leading-[1.5] mt-[6px]">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
