import { useIsMobile } from "@/hooks/use-mobile";

const levers = [
  { lever: "Цена ↑", example: "$29 → $35 (+20%)", effect: "LTV $275 → $350, payback 4 → 3.1 мес", note: "самый быстрый: меняется за один день" },
  { lever: "CAC ↓", example: "$87 → $70 (-20%)", effect: "LTV:CAC 3.2 → 3.9", note: "лучше креативы, точнее таргетинг, выше конверсия лендинга" },
  { lever: "Churn ↓", example: "8% → 6% в месяц", effect: "жизнь 12.5 → 16.7 мес, LTV $275 → $367", note: "механики удержания из урока 8 - это деньги, а не «продукт»" },
  { lever: "Себестоимость ↓", example: "$7 → $4 на клиента", effect: "маржа 75% → 86%, LTV $275 → $312", note: "для AI-продукта - оптимизация токенов, следующий слайд" },
];

export default function L14Slide14FourLevers() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Четыре рычага</p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Экономика не сходится? <span className="text-[hsl(var(--slide-gold))]">Есть ровно 4 рычага</span>
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[7px]">
          На примере нашей «салфетки»: цена $29, маржа $22, churn 8%, CAC $87, LTV $275.
        </p>
        <div className="space-y-[5px] mb-[7px]">
          {levers.map((l, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[9px] py-[5px]">
              <div className="flex items-baseline gap-[8px] mb-[1px]">
                <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] w-[110px] shrink-0">{l.lever}</p>
                <p className="font-mono text-[8px] text-[hsl(var(--slide-text))]">{l.example}</p>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4]">→ {l.effect}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{l.note}</p>
            </div>
          ))}
        </div>
        <p className="text-[9.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45]">
          Выбирай один рычаг за раз - тот, где разрыв между твоим числом и бенчмарком больше всего.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[32px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Четыре рычага</p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px] tracking-[-0.02em]">
        Экономика не сходится? <span className="text-[hsl(var(--slide-gold))]">Есть ровно 4 рычага</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[18px]">
        На примере нашей «салфетки»: цена $29, маржа $22, churn 8%, CAC $87, LTV $275.
      </p>
      <div className="space-y-[10px] mb-[16px] max-w-[1700px]">
        {levers.map((l, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[24px] py-[12px] flex items-baseline gap-[22px]">
            <p className="text-[21px] font-bold text-[hsl(var(--slide-gold))] w-[240px] shrink-0">{l.lever}</p>
            <p className="font-mono text-[16.5px] text-[hsl(var(--slide-text))] w-[300px] shrink-0">{l.example}</p>
            <div className="flex-1">
              <p className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.4]">→ {l.effect}</p>
              <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{l.note}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45] max-w-[1650px]">
        Выбирай один рычаг за раз - тот, где разрыв между твоим числом и бенчмарком больше всего.
      </p>
    </div>
  );
}
