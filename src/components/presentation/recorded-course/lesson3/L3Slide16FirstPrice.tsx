import { useIsMobile } from "@/hooks/use-mobile";

export default function L3Slide16FirstPrice() {
  const steps = [
    {
      n: "1",
      title: "Найди альтернативу",
      desc: "Что клиент делает сейчас вместо твоего продукта и сколько это стоит ему в деньгах или времени.",
      example: "B2B: нанимает копирайтера за $2 500/мес.\nB2C: ходит к репетитору — 8 × $40 = $320/мес.",
    },
    {
      n: "2",
      title: "Посчитай ценность в деньгах",
      desc: "Сколько клиент экономит или зарабатывает с твоим продуктом за месяц. Это твой потолок цены.",
      example: "B2B: экономия $2 500/мес.\nB2C: экономия $320/мес.",
    },
    {
      n: "3",
      title: "Возьми 10% от ценности",
      desc: "Правило десяти: клиент готов платить ~10% от того, что ты ему даёшь. Это и стартовая цена.",
      example: "B2B: $2 500 × 10% → $250/мес.\nB2C: $320 × 10% → $32/мес → округляем до $29.",
    },
  ];
  const rules = [
    "Сначала глянь 3-5 конкурентов - так ты увидишь рамки рынка, а не выдумываешь цену из головы",
    "Цены конкурентов - это коридор: ниже - выглядишь дёшево, выше - нужно объяснить, за что",
    "B2B - ориентир 5-15% от экономии или прироста выручки",
    "B2C - ориентир 1/10 от оффлайн-альтернативы, цена «не думая» $7-29/мес",
    "Не ниже $19/мес для подписки - иначе экономика не сходится",
    "Лучше начать дороже и дать скидку, чем начать дёшево и не поднять",
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Ценообразование</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Формула первой цены
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[10px]">
          3 шага, чтобы поставить цену осознанно, а не наугад
        </p>
        <div className="space-y-[6px] mb-[10px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <div className="flex items-center gap-[8px] mb-[3px]">
                <span className="text-[11px] font-bold text-[hsl(var(--slide-bg))] bg-[hsl(var(--slide-gold))] rounded-full w-[18px] h-[18px] flex items-center justify-center">{s.n}</span>
                <p className="text-[12px] font-semibold text-[hsl(var(--slide-text))]">{s.title}</p>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[3px]">{s.desc}</p>
              <p className="text-[10px] text-[hsl(var(--slide-gold)/0.9)] leading-[1.4] whitespace-pre-line">{s.example}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[10px] py-[8px]">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-semibold mb-[4px]">Ориентиры 2026</p>
          <ul className="space-y-[3px]">
            {rules.map((r, i) => (
              <li key={i} className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.35]">• {r}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[20px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">Ценообразование</p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px]">
        Формула первой цены
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[28px] max-w-[1100px]">
        Три шага, чтобы поставить цену от ценности и в рамках рынка - а не наугад
      </p>
      <div className="grid grid-cols-3 gap-[24px] max-w-[1640px] mb-[28px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[28px] py-[24px] flex flex-col">
            <div className="flex items-center gap-[14px] mb-[12px]">
              <span className="text-[22px] font-bold text-[hsl(var(--slide-bg))] bg-[hsl(var(--slide-gold))] rounded-full w-[42px] h-[42px] flex items-center justify-center">{s.n}</span>
              <p className="text-[24px] font-semibold text-[hsl(var(--slide-text))] leading-[1.15]">{s.title}</p>
            </div>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[14px]">{s.desc}</p>
            <p className="text-[17px] text-[hsl(var(--slide-gold)/0.95)] leading-[1.5] whitespace-pre-line mt-auto">{s.example}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[32px] py-[20px] max-w-[1640px]">
        <p className="text-[14px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-semibold mb-[10px]">Ориентиры 2026</p>
        <div className="grid grid-cols-2 gap-x-[28px] gap-y-[6px]">
          {rules.map((r, i) => (
            <p key={i} className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.4]">• {r}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
