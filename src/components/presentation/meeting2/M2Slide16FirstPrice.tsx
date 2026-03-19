import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide16FirstPrice() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Ценообразование</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Как поставить первую цену
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] p-[12px] mb-[12px]">
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.8] text-center font-semibold">
            Цена = <span className="text-[hsl(var(--slide-gold))]">ценность для клиента</span> × <span className="text-[hsl(var(--slide-gold))]">10-20%</span>
          </p>
        </div>
        <div className="space-y-[6px] mb-[10px]">
          {[
            { label: "Экономит время", example: "40 часов/месяц × $50/час = $2000 экономии → цена $200-400/мес" },
            { label: "Увеличивает доход", example: "+$5000 выручки/мес → цена $500-1000/мес" },
            { label: "Заменяет сотрудника", example: "Зарплата $3000/мес → цена $300-600/мес" },
          ].map((item, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <p className="text-[10px] font-semibold text-[hsl(var(--slide-gold))]">{item.label}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{item.example}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px]">
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
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px]">Как поставить первую цену</h2>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] p-[32px] mb-[36px] max-w-[800px]">
        <p className="text-[28px] text-[hsl(var(--slide-text))] leading-[1.6] text-center font-semibold">
          Цена = <span className="text-[hsl(var(--slide-gold))]">ценность для клиента</span> × <span className="text-[hsl(var(--slide-gold))]">10-20%</span>
        </p>
      </div>
      <div className="space-y-[16px] max-w-[1000px] mb-[32px]">
        {[
          { label: "Экономит время", example: "40 часов/месяц × $50/час = $2000 экономии → цена $200-400/мес" },
          { label: "Увеличивает доход", example: "+$5000 выручки/мес → цена $500-1000/мес" },
          { label: "Заменяет сотрудника", example: "Зарплата $3000/мес → цена $300-600/мес" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-[16px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[24px] py-[16px]">
            <p className="text-[20px] font-semibold text-[hsl(var(--slide-gold))] shrink-0 min-w-[200px]">{item.label}</p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item.example}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[18px] max-w-[800px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))]">
          💡 Лучше начать дороже и дать скидку первым клиентам, чем начать дёшево и не смочь поднять цену
        </p>
      </div>
    </div>
  );
}
