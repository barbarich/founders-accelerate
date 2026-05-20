import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide17MyCases() {
  const isMobile = useIsMobile();

  const approach = [
    { n: "1", label: "Цены конкурентов и рынка" },
    { n: "2", label: "Ценность, которую даём клиенту" },
    { n: "3", label: "Юнит-экономика: стоимость продажи и LTV" },
  ];

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Мой опыт</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Кейсы ценообразования
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px] mb-[10px]">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-semibold mb-[4px]">В обоих кейсах я смотрел</p>
          {approach.map((a) => (
            <p key={a.n} className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))] font-bold">{a.n}.</span> {a.label}</p>
          ))}
        </div>
        {/* RunEverywhere */}
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] p-[12px] mb-[8px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] mb-[3px]">RunEverywhere</p>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[6px]">Виртуальные забеги с реальными медалями</p>
          <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[6px]">
            Рынок — $30–50 за забег. Ценность для клиента — $40. Юнит-экономика: медали + доставка + маркетинг = $30 → цена $40 → $10 прибыли с продажи.
          </p>
          <p className="text-[11px] font-semibold text-[hsl(var(--slide-gold))]">Цену задал рынок — экономику подстроили под него</p>
        </div>
        {/* MetaMinder */}
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] p-[12px] mb-[10px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] mb-[3px]">MetaMinder</p>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[6px]">AI-платформа для обучения сотрудников</p>
          <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[6px]">
            Рынок — enterprise от $20k/год, сделки 6–12 мес. Ценность — заменяем тренеров и LMS. Чтобы CAC окупался на коротком цикле, добавили SaaS Free → $49 → $99 и заходили снизу вверх до enterprise от $360/мес.
          </p>
          <p className="text-[11px] font-semibold text-[hsl(var(--slide-gold))]">Зашли снизу — выросли через LTV внутри компании</p>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] px-[10px] py-[8px]">
          <p className="text-[12px] text-[hsl(var(--slide-text))] font-semibold text-center leading-[1.35]">
            Цена — это не решение на один раз. Это эксперимент, который никогда не заканчивается.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[20px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">Мой опыт</p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px]">Кейсы ценообразования</h2>
      <div className="flex flex-wrap items-center gap-x-[28px] gap-y-[8px] max-w-[1640px] mb-[28px]">
        <span className="text-[18px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-semibold">В обоих кейсах смотрел</span>
        {approach.map((a) => (
          <span key={a.n} className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.3]">
            <span className="text-[hsl(var(--slide-gold))] font-bold">{a.n}.</span> {a.label}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-[32px] max-w-[1640px] mb-[28px]">
        {/* RunEverywhere */}
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] p-[36px] flex flex-col">
          <p className="text-[32px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">RunEverywhere</p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[20px]">Виртуальные забеги с реальными медалями</p>
          <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[18px]">
            Рынок задавал потолок: дороже <span className="text-[hsl(var(--slide-gold))] font-semibold">$40</span> — не покупают. Ценность для клиента — медаль и эмоция финиша. Поэтому фиксировали цену и уже под неё подстраивали юнит-экономику.
          </p>
          <div className="flex flex-wrap items-center gap-[10px] mb-[18px] font-mono text-[18px]">
            <span className="bg-[hsl(var(--slide-bg))] px-[14px] py-[8px] rounded-[8px] text-[hsl(var(--slide-text-muted))]">CAC + медали + доставка = $30</span>
            <span className="text-[hsl(var(--slide-text-muted))]">→</span>
            <span className="bg-[hsl(var(--slide-bg))] px-[14px] py-[8px] rounded-[8px] text-[hsl(var(--slide-text))]">цена $40</span>
            <span className="text-[hsl(var(--slide-text-muted))]">→</span>
            <span className="bg-[hsl(var(--slide-gold)/0.15)] px-[14px] py-[8px] rounded-[8px] text-[hsl(var(--slide-gold))] font-bold">$10 прибыль</span>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[20px] py-[14px] mt-auto">
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]">💡 Цену задаёт рынок — экономику подстраиваем под неё</p>
          </div>
        </div>

        {/* MetaMinder */}
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] p-[36px] flex flex-col">
          <p className="text-[32px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">MetaMinder</p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[20px]">AI-платформа для обучения сотрудников</p>
          <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[18px]">
            Рынок — enterprise от $20k/год, цикл сделки <span className="text-[hsl(var(--slide-gold))] font-semibold">6–12 мес</span>. Ценность — заменяем тренеров и LMS. Чтобы CAC окупался быстрее, добавили SaaS и зашли снизу: HR покупал 1–2 отдела и сам продвигал нас внутри. LTV рос за счёт расширения аккаунта.
          </p>
          <div className="flex flex-wrap items-center gap-[8px] mb-[18px] font-mono text-[17px]">
            <span className="bg-[hsl(var(--slide-bg))] px-[12px] py-[7px] rounded-[8px] text-[hsl(var(--slide-text-muted))]">Free</span>
            <span className="text-[hsl(var(--slide-text-muted))]">→</span>
            <span className="bg-[hsl(var(--slide-bg))] px-[12px] py-[7px] rounded-[8px] text-[hsl(var(--slide-text))]">$49/мес</span>
            <span className="text-[hsl(var(--slide-text-muted))]">→</span>
            <span className="bg-[hsl(var(--slide-bg))] px-[12px] py-[7px] rounded-[8px] text-[hsl(var(--slide-text))]">$99/мес</span>
            <span className="text-[hsl(var(--slide-text-muted))]">→</span>
            <span className="bg-[hsl(var(--slide-gold)/0.15)] px-[12px] py-[7px] rounded-[8px] text-[hsl(var(--slide-gold))] font-bold">Enterprise от $360/мес</span>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[20px] py-[14px] mt-auto">
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]">💡 Зайди снизу — расти через LTV внутри компании</p>
          </div>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[20px] max-w-[1640px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] font-semibold text-center leading-[1.35]">
          Цена — это не решение на один раз. Это эксперимент, который никогда не заканчивается.
        </p>
      </div>
    </div>
  );
}
