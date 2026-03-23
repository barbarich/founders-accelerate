import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide16FirstPrice() {
  const b2b = [
    { label: "Экономит время", example: "Reply.io: экономит $2000/мес (40 ч × $50) → берёт $500/мес ≈ 25%" },
    { label: "Увеличивает доход", example: "Apollo.io: приносит +$5000-10000 выручки → берёт $99-399/мес ≈ 2-4%" },
    { label: "Заменяет сотрудника", example: "Jasper AI: заменяет копирайтера $2000-3000/мес → берёт $49-125/мес ≈ 2-4%" },
  ];
  const b2c = [
    { label: "Заменяет специалиста", example: "Peloton: тренер $500/мес (8 × $60) → приложение $13/мес ≈ 2.5%" },
    { label: "Делает доступным", example: "Duolingo: репетитор $300/мес (8 × $40) → подписка $7-13/мес ≈ 2-4%" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Ценообразование</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Цена = стоимость результата
        </h2>
        <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-semibold mb-[4px]">B2B — цена = 1-10% от результата в деньгах</p>
        <div className="space-y-[4px] mb-[8px]">
          {b2b.map((item, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[10px] font-semibold text-[hsl(var(--slide-text))]">{item.label}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{item.example}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-semibold mb-[4px]">B2C — в 5-10× дешевле оффлайн-альтернативы</p>
        <div className="space-y-[4px] mb-[8px]">
          {b2c.map((item, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[10px] font-semibold text-[hsl(var(--slide-text))]">{item.label}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{item.example}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))]">
            💡 Лучше начать дороже и дать скидку, чем начать дёшево и не смочь поднять
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Ценообразование</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px]">Цена = стоимость результата</h2>
      <div className="flex gap-[32px] max-w-[1100px] mb-[28px]">
        <div className="flex-1">
          <div className="flex items-center gap-[10px] mb-[14px]">
            <span className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-semibold">B2B</span>
            <span className="text-[16px] text-[hsl(var(--slide-text-muted))]">—</span>
            <span className="text-[16px] text-[hsl(var(--slide-text))] font-medium">1-10% от результата в деньгах</span>
          </div>
          <div className="space-y-[12px]">
            {b2b.map((item, i) => (
              <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[14px]">
                <p className="text-[17px] font-semibold text-[hsl(var(--slide-gold))] mb-[3px]">{item.label}</p>
                <p className="text-[15px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[1px] bg-[hsl(var(--slide-border)/0.3)]" />
        <div className="flex-1">
          <div className="flex items-center gap-[10px] mb-[14px]">
            <span className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-semibold">B2C</span>
            <span className="text-[16px] text-[hsl(var(--slide-text-muted))]">—</span>
            <span className="text-[16px] text-[hsl(var(--slide-text))] font-medium">В 20-50× дешевле оффлайн-альтернативы</span>
          </div>
          <div className="space-y-[12px]">
            {b2c.map((item, i) => (
              <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[14px]">
                <p className="text-[17px] font-semibold text-[hsl(var(--slide-gold))] mb-[3px]">{item.label}</p>
                <p className="text-[15px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item.example}</p>
              </div>
            ))}
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[20px] py-[12px] mt-[12px]">
            <p className="text-[14px] text-[hsl(var(--slide-text))]">
              💡 B2C: цена «не думая» — $7-15/мес. Человек сравнивает не с ROI, а с ценой кофе
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[16px] max-w-[1100px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))]">
          💡 В обоих случаях: лучше начать дороже и дать скидку первым клиентам, чем начать дёшево и не смочь поднять цену
        </p>
      </div>
    </div>
  );
}
