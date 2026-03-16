export default function M1Slide11Reviews() {
  const sources = ["G2", "Trustpilot", "Product Hunt (комменты)", "Reddit", "App Store / Google Play"];
  const examples = [
    { complaint: '"terrible onboarding"', action: "→ Кластеризуй: это UX-проблема или проблема ценностного предложения? Если 30%+ жалоб на онбординг — это точка входа для disruption." },
    { complaint: '"too expensive for what it does"', action: "→ Разбери unit-экономику конкурента: где маржа, за что переплачивают. Твой pricing может стать оружием." },
    { complaint: '"works fine but no integrations"', action: "→ Это сигнал зрелости рынка. Пользователи переросли продукт — строй платформу, не фичу." },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Инструмент 4</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">
        Отзывы конкурентов
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[48px]">Голос недовольного клиента = ваша возможность</p>
      <div className="flex gap-[40px]">
        <div className="flex-1">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[20px]">Где искать</h3>
          <div className="space-y-[12px]">
            {sources.map((s, i) => (
              <div key={i} className="flex items-center gap-[12px]">
                <div className="w-[5px] h-[5px] rounded-full bg-[hsl(var(--slide-gold)/0.5)]" />
                <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)]">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-[32px] bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[24px] py-[16px]">
            <p className="text-[18px] text-[hsl(var(--slide-gold))]">
              Задание: найти 10 негативных отзывов по каждому конкуренту, сгруппировать по темам.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[20px]">Как использовать</h3>
          <div className="space-y-[20px]">
            {examples.map((e, i) => (
              <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[20px]">
                <p className="font-mono text-[18px] text-[hsl(var(--slide-text-muted))]">{e.complaint}</p>
                <p className="text-[18px] text-[hsl(var(--slide-gold))] font-medium mt-[8px]">{e.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
