import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "1", label: "Цена", calc: "$29/мес", note: "подписка, один тариф" },
  { n: "2", label: "Себестоимость", calc: "$7/мес", note: "AI-токены $4 + инфраструктура $2 + поддержка $1" },
  { n: "3", label: "Маржа", calc: "$29 - $7 = $22 (75%)", note: "вот что реально остаётся с клиента в месяц" },
  { n: "4", label: "Средняя жизнь", calc: "1 / 0.08 = 12.5 мес", note: "при churn 8% в месяц" },
  { n: "5", label: "LTV", calc: "$22 × 12.5 = $275", note: "маржа за жизнь, не выручка" },
  { n: "6", label: "CAC", calc: "$870 / 10 = $87", note: "весь спенд Meta за месяц / платящие клиенты" },
  { n: "7", label: "LTV : CAC", calc: "$275 / $87 = 3.2", note: "🟢 выше трёх - экономика сходится" },
  { n: "8", label: "Payback", calc: "$87 / $22 = 4 мес", note: "🟢 клиент окупает себя за 4 месяца" },
];

export default function L14Slide09Napkin() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Сквозной пример</p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[7px]">
          Вся экономика продукта - <span className="text-[hsl(var(--slide-gold))]">на салфетке за 5 минут</span>
        </h2>
        <div className="space-y-[4px] mb-[7px]">
          {steps.map((s) => (
            <div key={s.n} className="flex items-baseline gap-[7px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[5px] px-[8px] py-[4px]">
              <span className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] shrink-0 w-[10px]">{s.n}</span>
              <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] shrink-0 w-[86px]">{s.label}</span>
              <span className="font-mono text-[8.5px] text-[hsl(var(--slide-gold))] shrink-0 w-[120px]">{s.calc}</span>
              <span className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{s.note}</span>
            </div>
          ))}
        </div>
        <p className="text-[9.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45]">
          Восемь строк - и ты знаешь о своём бизнесе больше, чем большинство фаундеров на стадии запуска.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[32px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Сквозной пример · SaaS за $29</p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em]">
        Вся экономика продукта - <span className="text-[hsl(var(--slide-gold))]">на салфетке за 5 минут</span>
      </h2>
      <div className="space-y-[7px] mb-[16px] max-w-[1700px]">
        {steps.map((s) => (
          <div key={s.n} className="flex items-baseline gap-[20px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[22px] py-[8px]">
            <span className="text-[16px] font-bold text-[hsl(var(--slide-gold))] shrink-0 w-[24px]">{s.n}</span>
            <span className="text-[18px] font-bold text-[hsl(var(--slide-text))] shrink-0 w-[210px]">{s.label}</span>
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] shrink-0 w-[330px]">{s.calc}</span>
            <span className="text-[15.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{s.note}</span>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45] max-w-[1650px]">
        Восемь строк - и ты знаешь о своём бизнесе больше, чем большинство фаундеров на стадии запуска.
      </p>
    </div>
  );
}
