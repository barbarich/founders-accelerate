import { useIsMobile } from "@/hooks/use-mobile";

export default function L3Slide15PricingPsychology() {
  const principles = [
    { icon: "⚓", title: "Якорение", desc: "Дорогой тариф на странице существует не чтобы его покупали — он делает средний «выгодным». Notion: Free → Plus $10 → Business $20 → Enterprise. Business помечен «Recommended» — именно его и покупают" },
    { icon: "3️⃣", title: "Правило трёх тарифов", desc: "Дешёвый (для входа), средний (основные продажи), дорогой (якорь). Всегда визуально выделяйте средний — это ваш основной доход" },
    { icon: "🏷️", title: "Магия скидки", desc: "В ForexTester мы запускали акцию −50% каждый месяц. Люди знали о скидке, но всё равно покупали — страх упустить выгоду сильнее логики. Это приносило основную прибыль за месяц" },
    { icon: "9️⃣", title: "Магия девятки", desc: "$29 работает лучше чем $30. $99 лучше $100. Мозг округляет влево: $29 = «двадцать с чем-то». Все SaaS используют — это не случайность, это нейробиология" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Ценообразование</p>
        <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Психология цены
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mb-[14px] italic">Цена — это не математика, это эмоция</p>
        <div className="space-y-[10px] mb-[10px]">
          {principles.map((p, i) => (
            <div key={i} className="flex items-start gap-[10px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[14px] py-[10px]">
              <span className="text-[20px] shrink-0">{p.icon}</span>
              <div>
                <p className="text-[13px] font-semibold text-[hsl(var(--slide-text))]">{p.title}</p>
                <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[14px] py-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))]">
            💡 Люди не сравнивают цену с себестоимостью. Они сравнивают с ощущением: «это выгодно или нет?»
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[20px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">Ценообразование</p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">Психология цены</h2>
      <p className="text-[26px] text-[hsl(var(--slide-text-muted))] mb-[40px] italic">Цена — это не математика, это эмоция. Люди не считают — они чувствуют.</p>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1200px] mb-[28px]">
        {principles.map((p, i) => (
          <div key={i} className="flex items-start gap-[20px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[22px]">
            <span className="text-[36px] shrink-0">{p.icon}</span>
            <div>
              <p className="text-[24px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">{p.title}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[14px] px-[32px] py-[20px] max-w-[1200px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))]">
          💡 Люди не сравнивают вашу цену с себестоимостью — они сравнивают с ощущением: «это выгодно или нет?». Управляйте ощущением, а не калькулятором.
        </p>
      </div>
    </div>
  );
}
