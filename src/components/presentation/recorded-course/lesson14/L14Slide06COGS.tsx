import { useIsMobile } from "@/hooks/use-mobile";

const costs = [
  { name: "AI-токены / LLM API", note: "главная статья для AI-продукта: каждый запрос юзера стоит денег" },
  { name: "Инфраструктура", note: "хостинг, база данных, очереди, стораджи" },
  { name: "Сторонние API и сервисы", note: "почта, платежи, аналитика, енрич-данные" },
  { name: "Поддержка", note: "твои часы или часы саппорта на клиента" },
];

export default function L14Slide06COGS() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Число 2 · себестоимость</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Продуктовые косты: <span className="text-[hsl(var(--slide-gold))]">во что обходится обслуживание клиента</span>
        </h2>
        <div className="space-y-[5px] mb-[8px]">
          {costs.map((c, i) => (
            <div key={i} className="flex items-start gap-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[9px] py-[5px]">
              <span className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))] shrink-0 w-[110px] leading-[1.3]">{c.name}</span>
              <span className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.note}</span>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[7px] px-[11px] py-[7px] mb-[8px]">
          <p className="text-[9.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.5]">
            Валовая маржа = (цена - себестоимость) / цена<br />
            Цена $29, косты $7 → маржа $22 = <span className="text-[hsl(var(--slide-gold))] font-bold">75%</span>
          </p>
        </div>
        <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[6px]">
          Ориентиры 2026: классический SaaS - 75-85% маржи. AI-продукты - в среднем около 52%: из каждого $1M выручки примерно $230K уходит на inference.
        </p>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45]">
          Правило: LTV считается по марже, не по выручке. При марже 50% твой «наивный» LTV сразу делится пополам.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Число 2 · себестоимость</p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em] max-w-[1700px]">
        Продуктовые косты: <span className="text-[hsl(var(--slide-gold))]">во что обходится обслуживание клиента</span>
      </h2>
      <div className="grid grid-cols-2 gap-[14px] mb-[18px] max-w-[1650px]">
        {costs.map((c, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[22px] py-[13px]">
            <p className="text-[19px] font-bold text-[hsl(var(--slide-gold))] leading-[1.3] mb-[4px]">{c.name}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.note}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[12px] px-[28px] py-[14px] mb-[16px] max-w-[1650px]">
        <p className="text-[21px] font-mono text-[hsl(var(--slide-text))] leading-[1.5]">
          Валовая маржа = (цена - себестоимость) / цена · Цена $29, косты $7 → маржа $22 = <span className="text-[hsl(var(--slide-gold))] font-bold">75%</span>
        </p>
      </div>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[12px] max-w-[1650px]">
        Ориентиры 2026: классический SaaS - 75-85% маржи. AI-продукты - в среднем около 52%: из каждого $1M выручки примерно $230K уходит на inference ещё до зарплат и маркетинга.
      </p>
      <p className="text-[21px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45] max-w-[1650px]">
        Правило: LTV считается по марже, не по выручке. При марже 50% твой «наивный» LTV сразу делится пополам.
      </p>
    </div>
  );
}
