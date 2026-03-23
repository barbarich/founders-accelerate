import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide17MyCases() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Мой опыт</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Кейсы ценообразования
        </h2>
        {/* RunEverywhere */}
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] p-[10px] mb-[6px]">
          <p className="text-[12px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">RunEverywhere</p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[4px]">Виртуальные забеги с реальными медалями</p>
          <p className="text-[9px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5] mb-[4px]">
            Тестировали разные цены в маркетинге. Дороже $40 — не покупают. Дешевле — не зарабатываем. Подстроили расходы: $30 (маркетинг + медали + доставка) → $10 прибыль.
          </p>
          <p className="text-[9px] font-semibold text-[hsl(var(--slide-gold))]">Подход: найди потолок клиента → подстрой экономику</p>
        </div>
        {/* MetaMinder */}
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] p-[10px] mb-[8px]">
          <p className="text-[12px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">MetaMinder</p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[4px]">AI-платформа для обучения сотрудников</p>
          <p className="text-[9px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5] mb-[4px]">
            Enterprise-сделки тянулись 6-12 месяцев. Добавили SaaS (Free → $49 → $99) и пошли снизу вверх: продавали HR-ам обучение 1-2 отделов, те продвигали внутри компании → enterprise от $360/мес.
          </p>
          <p className="text-[9px] font-semibold text-[hsl(var(--slide-gold))]">Подход: зайди снизу → вырасти внутри компании</p>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] px-[10px] py-[8px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold text-center">
            Цена — это не решение на один раз. Это эксперимент, который никогда не заканчивается.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Мой опыт</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">Кейсы ценообразования</h2>
      <div className="flex gap-[28px] max-w-[1100px] mb-[28px]">
        {/* RunEverywhere */}
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] p-[28px] flex flex-col">
          <p className="text-[24px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">RunEverywhere</p>
          <p className="text-[16px] text-[hsl(var(--slide-text-muted))] mb-[16px]">Виртуальные забеги с реальными медалями</p>
          <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
            Тестировали разные цены в маркетинге. Дороже <span className="text-[hsl(var(--slide-gold))] font-semibold">$40</span> — не покупают. Дешевле — не зарабатываем.
          </p>
          <div className="flex items-center gap-[8px] mb-[16px] font-mono text-[16px]">
            <span className="bg-[hsl(var(--slide-bg))] px-[12px] py-[6px] rounded-[6px] text-[hsl(var(--slide-text-muted))]">расходы $30</span>
            <span className="text-[hsl(var(--slide-text-muted))]">→</span>
            <span className="bg-[hsl(var(--slide-bg))] px-[12px] py-[6px] rounded-[6px] text-[hsl(var(--slide-text))]">цена $40</span>
            <span className="text-[hsl(var(--slide-text-muted))]">→</span>
            <span className="bg-[hsl(var(--slide-gold)/0.15)] px-[12px] py-[6px] rounded-[6px] text-[hsl(var(--slide-gold))] font-bold">$10 прибыль</span>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[16px] py-[10px] mt-auto">
            <p className="text-[16px] text-[hsl(var(--slide-text))]">💡 Найди потолок клиента → подстрой экономику под него</p>
          </div>
        </div>

        {/* MetaMinder */}
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] p-[28px] flex flex-col">
          <p className="text-[24px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">MetaMinder</p>
          <p className="text-[16px] text-[hsl(var(--slide-text-muted))] mb-[16px]">AI-платформа для обучения сотрудников</p>
          <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
            Enterprise-сделки тянулись <span className="text-[hsl(var(--slide-gold))] font-semibold">6-12 месяцев</span>. Не было ресурса ждать. Пошли снизу вверх: продавали HR-ам обучение 1-2 отделов → те продвигали нас внутри компании.
          </p>
          <div className="flex items-center gap-[6px] mb-[16px] font-mono text-[15px]">
            <span className="bg-[hsl(var(--slide-bg))] px-[10px] py-[5px] rounded-[6px] text-[hsl(var(--slide-text-muted))]">Free</span>
            <span className="text-[hsl(var(--slide-text-muted))]">→</span>
            <span className="bg-[hsl(var(--slide-bg))] px-[10px] py-[5px] rounded-[6px] text-[hsl(var(--slide-text))]">$49/мес</span>
            <span className="text-[hsl(var(--slide-text-muted))]">→</span>
            <span className="bg-[hsl(var(--slide-bg))] px-[10px] py-[5px] rounded-[6px] text-[hsl(var(--slide-text))]">$99/мес</span>
            <span className="text-[hsl(var(--slide-text-muted))]">→</span>
            <span className="bg-[hsl(var(--slide-gold)/0.15)] px-[10px] py-[5px] rounded-[6px] text-[hsl(var(--slide-gold))] font-bold">Enterprise от $360/мес</span>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[16px] py-[10px] mt-auto">
            <p className="text-[16px] text-[hsl(var(--slide-text))]">💡 Зайди снизу через сотрудников → вырасти внутри компании</p>
          </div>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[28px] py-[16px] max-w-[1100px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold text-center">
          Цена — это не решение на один раз. Это эксперимент, который никогда не заканчивается.
        </p>
      </div>
    </div>
  );
}
