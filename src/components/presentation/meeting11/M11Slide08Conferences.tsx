import { useIsMobile } from "@/hooks/use-mobile";

const events = [
  { name: "Web Summit Lisbon", when: "10–13 ноября 2026", price: "$1295 standard", who: "Универсальный — 70k people, всё подряд. Сцены + side events каждый вечер.", fit: "Все" },
  { name: "SaaStr Annual", when: "май 2026 · San Francisco", price: "$2495 standard", who: "SaaS founders, VPs, CRO. Самая концентрация B2B SaaS.", fit: "Laura · B2B SaaS" },
  { name: "TechCrunch Disrupt", when: "октябрь 2026 · San Francisco", price: "$1095 founder pass", who: "Early-stage founders + VCs. Если ищешь инвестиции — must.", fit: "Все" },
  { name: "PropTech Connect London", when: "июнь 2026", price: "£995", who: "Real estate × tech. Агентства, landlords, smart-home.", fit: "Dira.click" },
  { name: "Women in Tech Global", when: "октябрь 2026 · Madrid", price: "€600", who: "Female founders + women-led startups. Community сильнее sales.", fit: "Lea · Default She" },
  { name: "DTC × Mom community meetups", when: "ежемесячно · NYC / LA / Lisbon", price: "Free–$50", who: "Local meetups для B2C founders с family-аудиторией.", fit: "Mila · Hobbix" },
];

const tiers = [
  { label: "Poor founder", budget: "$0–500", advice: "Skip билет на main conf — приезжай за день до. Side-events свободны, нетворк тот же. Travel + Airbnb." },
  { label: "Serious founder", budget: "$1500–3000", advice: "1 большой event в год + 2–3 нишевых meetup. Билет + travel + 2 ужина с целевой аудиторией." },
  { label: "On the stage", budget: "$0 (тебе платят)", advice: "Спикер не платит. CFP за 4–6 мес. Side-stages открыты почти всем с экспертизой." },
];

export default function M11Slide08Conferences() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Конференции Q2–Q4 2026
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Что выбрать — <span className="text-[hsl(var(--slide-gold))]">по бюджету и цели</span>
        </h2>
        <div className="space-y-[3px] mb-[5px]">
          {events.map((e) => (
            <div key={e.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.25)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-baseline justify-between gap-[4px]">
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{e.name}</p>
                <p className="text-[7px] text-[hsl(var(--slide-gold))]">{e.price}</p>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))]">{e.when} · {e.fit}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{e.who}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-[3px]">
          {tiers.map((t) => (
            <div key={t.label} className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[3px] px-[5px] py-[3px]">
              <p className="text-[7px] font-bold text-[hsl(var(--slide-gold))]">{t.label}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))]">{t.budget}</p>
              <p className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{t.advice}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Конференции Q2–Q4 2026
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Что выбрать — <span className="text-[hsl(var(--slide-gold))]">по бюджету и цели</span>
      </h2>
      <div className="grid grid-cols-2 gap-[14px] max-w-[1700px] mb-[18px]">
        {events.map((e) => (
          <div key={e.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[22px] py-[12px]">
            <div className="flex items-baseline justify-between gap-[10px]">
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{e.name}</p>
              <p className="text-[14px] text-[hsl(var(--slide-gold))] font-semibold">{e.price}</p>
            </div>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] mb-[4px]">{e.when} · <span className="text-[hsl(var(--slide-gold))]">{e.fit}</span></p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{e.who}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-[14px] max-w-[1700px]">
        {tiers.map((t) => (
          <div key={t.label} className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[16px] py-[10px]">
            <div className="flex items-baseline gap-[8px] mb-[3px]">
              <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em]">{t.label}</p>
              <p className="text-[12px] text-[hsl(var(--slide-text-muted))]">{t.budget}</p>
            </div>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{t.advice}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
