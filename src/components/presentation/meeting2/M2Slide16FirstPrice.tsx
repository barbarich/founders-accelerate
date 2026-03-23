import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide16FirstPrice() {
  const b2b = [
    { label: "Экономит время", example: "Reply.io ($500/мес): менеджер тратил 40 ч/мес на холодные письма → AI делает за него" },
    { label: "Увеличивает доход", example: "Apollo.io ($99-399/мес): находит лиды, которые приносят +$5000-10000 выручки" },
    { label: "Заменяет сотрудника", example: "Jasper AI ($49-125/мес): заменяет копирайтера с зарплатой $2000-3000/мес" },
  ];
  const b2c = [
    { label: "Заменяет специалиста", example: "Peloton ($13/мес): тренер $50-70/час × 8 занятий = $500/мес → приложение в 30× дешевле" },
    { label: "Делает доступным", example: "Duolingo ($7-13/мес): репетитор $30-50/час × 8 уроков = $300/мес → приложение в 30× дешевле" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Ценообразование</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Цена = стоимость результата
        </h2>
        <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-semibold mb-[4px]">B2B — цена = 10-20% от результата в деньгах</p>
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
            <span className="text-[16px] text-[hsl(var(--slide-text))] font-medium">10-20% от результата в деньгах</span>
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
            <span className="text-[16px] text-[hsl(var(--slide-text))] font-medium">В 5-10× дешевле оффлайн-альтернативы</span>
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
