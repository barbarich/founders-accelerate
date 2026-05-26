import { useIsMobile } from "@/hooks/use-mobile";

const metrics = [
  { stage: "TOFU · реклама", m: "CPM", good: "$5–25", body: "Cost per 1000 impressions. Дорогая B2B-ниша = $20+, нишевая B2C = $5–10." },
  { stage: "TOFU · реклама", m: "CTR", good: "1–3%", body: "Click-through rate. <1% — креатив слабый или аудитория не та. >3% — кампания живая." },
  { stage: "MOFU · email", m: "Open rate", good: "30–50%", body: "При правильном warmup и теме до 50 символов. <20% — попал в спам или тема мусорная." },
  { stage: "MOFU · email", m: "Reply rate", good: "1–3%", body: "Норма 2026. >3% — отличный hit. 0% — переделывай тему и первую строку." },
  { stage: "BOFU · продажи", m: "Trial → paid", good: "10–25%", body: "Какой процент triala конвертится в платящих. <10% — продукт не показывает ценность за trial." },
  { stage: "Всё · юнит-экономика", m: "CAC : LTV", good: "1 : 3+", body: "Customer Acquisition Cost vs Lifetime Value. LTV должна быть минимум втрое больше CAC, иначе бизнеса нет." },
];

export default function L12Slide17Metrics() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Метрики 2026 · ориентиры
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          6 цифр, которые надо знать <span className="text-[hsl(var(--slide-gold))]">наизусть</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Бенчмарки 2026 для AI-стартапов и B2B SaaS. Падаешь ниже — копаешь почему.
        </p>
        <div className="space-y-[3px]">
          {metrics.map((m) => (
            <div key={m.m + m.stage} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[8px] py-[3px]">
              <div className="flex items-baseline justify-between gap-[4px]">
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{m.m}</p>
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))]">{m.good}</p>
              </div>
              <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold)/0.85)]">{m.stage}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Метрики 2026 · ориентиры по стадиям воронки
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
        6 цифр, которые надо знать <span className="text-[hsl(var(--slide-gold))]">наизусть</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1600px]">
        Бенчмарки 2026 для AI-стартапов и B2B SaaS на холодную аудиторию. Падаешь сильно ниже — копаешь, почему.
      </p>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] overflow-hidden max-w-[1700px]">
        <div className="grid grid-cols-[200px_140px_140px_1fr] gap-[16px] px-[28px] py-[12px] bg-[hsl(var(--slide-gold)/0.08)] text-[13px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">
          <span>Стадия</span>
          <span>Метрика</span>
          <span>Норма</span>
          <span>Что это значит</span>
        </div>
        {metrics.map((m) => (
          <div key={m.m + m.stage} className="grid grid-cols-[200px_140px_140px_1fr] gap-[16px] px-[28px] py-[12px] border-t border-[hsl(var(--slide-border)/0.2)] items-baseline">
            <span className="text-[14px] text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.1em]">{m.stage}</span>
            <span className="text-[20px] text-[hsl(var(--slide-text))] font-bold">{m.m}</span>
            <span className="text-[20px] text-[hsl(var(--slide-gold))] font-mono font-bold">{m.good}</span>
            <span className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{m.body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
