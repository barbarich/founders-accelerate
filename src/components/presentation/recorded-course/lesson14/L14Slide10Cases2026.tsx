import { useIsMobile } from "@/hooks/use-mobile";

const cases = [
  {
    name: "Cursor (Anysphere)",
    tag: "рост ≠ прибыль",
    story: "Самый быстрорастущий продукт в истории SaaS: ~$2B ARR. Но в середине 2025 платил Anthropic около $650M в год при ~$500M выручки - валовая маржа была отрицательной.",
    fix: "Починили продуктом: своя модель Composer (ноябрь 2025) + умный роутинг запросов. К весне 2026 маржа вышла в плюс.",
  },
  {
    name: "AI-рынок в целом",
    tag: "токены = себестоимость",
    story: "Средняя валовая маржа AI-продуктов в 2026 - около 52% против 75-85% у классического SaaS. «Токеновый налог» держит маржу на ~30 пунктов ниже.",
    fix: "Вывод для тебя: если в продукте есть LLM - считай токены как себестоимость с первого дня, а не «потом разберусь».",
  },
  {
    name: "Duolingo",
    tag: "здоровая экономика",
    story: "Freemium с маржой выше 70%. Основной приток - органика и виральные механики, платная реклама - малая доля бюджета.",
    fix: "CAC около нуля на большинстве юзеров + высокая маржа = прибыльная компания на «несерьёзном» рынке образования.",
  },
];

export default function L14Slide10Cases2026() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">🔥 Кейсы рынка · июль 2026</p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[7px]">
          У кого экономика сходится - <span className="text-[hsl(var(--slide-gold))]">а у кого нет</span>
        </h2>
        <div className="space-y-[6px]">
          {cases.map((c, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[7px] px-[10px] py-[6px]">
              <div className="flex items-baseline justify-between mb-[2px]">
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{c.name}</p>
                <p className="text-[7.5px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))]">{c.tag}</p>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[2px]">{c.story}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-gold))] leading-[1.45]">→ {c.fix}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[32px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">🔥 Кейсы рынка · июль 2026</p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.02em]">
        У кого экономика сходится - <span className="text-[hsl(var(--slide-gold))]">а у кого нет</span>
      </h2>
      <div className="space-y-[12px] max-w-[1700px]">
        {cases.map((c, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[26px] py-[16px]">
            <div className="flex items-baseline gap-[18px] mb-[6px]">
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{c.name}</p>
              <p className="text-[13px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))]">{c.tag}</p>
            </div>
            <p className="text-[17.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[4px]">{c.story}</p>
            <p className="text-[17.5px] text-[hsl(var(--slide-gold))] leading-[1.45]">→ {c.fix}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
