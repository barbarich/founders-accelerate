import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide15PricingPsychology() {
  const principles = [
    { icon: "⚓", title: "Якорение", desc: "Покажите дорогой тариф первым — средний покажется выгодным. Enterprise $499 → Pro $99 → Starter $29" },
    { icon: "3️⃣", title: "Правило трёх тарифов", desc: "Дешёвый (для входа), средний (основной, 70% покупок), дорогой (для якоря). Всегда выделяйте средний" },
    { icon: "🆓", title: "Бесплатный тир", desc: "Даёт попробовать без риска. Ограничивайте по объёму, не по функциям. Цель: довести до Aha-момента" },
    { icon: "🧠", title: "Цена = ценность", desc: "Не «сколько стоит построить», а «сколько экономит/зарабатывает клиент». Цена = 10-20% от ценности для клиента" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Ценообразование</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Психология цены
        </h2>
        <div className="space-y-[8px]">
          {principles.map((p, i) => (
            <div key={i} className="flex items-start gap-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <span className="text-[16px] shrink-0">{p.icon}</span>
              <div>
                <p className="text-[11px] font-semibold text-[hsl(var(--slide-text))]">{p.title}</p>
                <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Ценообразование</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">Психология цены</h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1100px]">
        {principles.map((p, i) => (
          <div key={i} className="flex items-start gap-[16px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[24px] py-[20px]">
            <span className="text-[32px] shrink-0">{p.icon}</span>
            <div>
              <p className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">{p.title}</p>
              <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
