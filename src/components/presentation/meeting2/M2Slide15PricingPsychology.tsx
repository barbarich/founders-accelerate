import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide15PricingPsychology() {
  const principles = [
    { icon: "⚓", title: "Якорение", desc: "Покажите дорогой тариф первым — средний покажется выгодным. Так делает Notion: Enterprise → Business $18 → Plus $10. 70% выбирают средний" },
    { icon: "3️⃣", title: "Правило трёх тарифов", desc: "Дешёвый (для входа), средний (основные продажи), дорогой (якорь). Всегда визуально выделяйте средний — это ваш основной доход" },
    { icon: "🏷️", title: "Магия скидки", desc: "В ForexTester мы запускали акцию −50% каждый месяц. Люди знали о скидке, но всё равно покупали — страх упустить выгоду сильнее логики. Это приносило основную прибыль за месяц" },
    { icon: "9️⃣", title: "Магия девятки", desc: "$29 работает лучше чем $30. $99 лучше $100. Мозг округляет влево: $29 = «двадцать с чем-то». Все SaaS используют — это не случайность, это нейробиология" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Ценообразование</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Психология цены
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[10px] italic">Цена — это не математика, это эмоция</p>
        <div className="space-y-[6px] mb-[8px]">
          {principles.map((p, i) => (
            <div key={i} className="flex items-start gap-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[7px]">
              <span className="text-[16px] shrink-0">{p.icon}</span>
              <div>
                <p className="text-[11px] font-semibold text-[hsl(var(--slide-text))]">{p.title}</p>
                <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">
          <p className="text-[9px] text-[hsl(var(--slide-text))]">
            💡 Люди не сравнивают цену с себестоимостью. Они сравнивают с ощущением: «это выгодно или нет?»
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Ценообразование</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">Психология цены</h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[36px] italic">Цена — это не математика, это эмоция. Люди не считают — они чувствуют.</p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1100px] mb-[24px]">
        {principles.map((p, i) => (
          <div key={i} className="flex items-start gap-[16px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[18px]">
            <span className="text-[30px] shrink-0">{p.icon}</span>
            <div>
              <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))] mb-[4px]">{p.title}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[16px] max-w-[1100px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))]">
          💡 Люди не сравнивают вашу цену с себестоимостью — они сравнивают с ощущением: «это выгодно или нет?». Управляйте ощущением, а не калькулятором.
        </p>
      </div>
    </div>
  );
}
