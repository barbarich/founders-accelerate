import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  {
    rule: "Начни с напряжения, не с продукта",
    bad: "«Mikey - приложение для знакомств»",
    good: "«Мне надоели свидания, где всё решает фото»",
  },
  {
    rule: "Один живой человек, а не «все»",
    bad: "«для тех, кто ищет любовь»",
    good: "«для отца-одиночки без времени на пустые свидания»",
  },
  {
    rule: "Честность сильнее глянца",
    bad: "«мы - лидеры рынка знакомств»",
    good: "«я сам не мог найти того, кто совпадает по ценностям»",
  },
  {
    rule: "Деталь вместо прилагательных",
    bad: "«было тяжело и одиноко»",
    good: "«вторник, 2 ночи, десятый свайп ни о чём»",
  },
  {
    rule: "Заверши тем, что изменилось",
    bad: "обрыв на описании фичи",
    good: "«раньше - случайные встречи, теперь - совпадение по ценностям»",
  },
];

export default function L10SlidePractices() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[18px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Топ-практики · на примере Mikey
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Как собрать историю, <span className="text-[hsl(var(--slide-gold))]">которая продаёт</span>
        </h2>
        <div className="space-y-[5px]">
          {rules.map((r, i) => (
            <div key={i} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[3px]">{i + 1}. {r.rule}</p>
              <p className="text-[8.5px] text-[hsl(0_55%_65%)] leading-[1.35]">✗ {r.bad}</p>
              <p className="text-[8.5px] text-[hsl(142_45%_58%)] leading-[1.35]">✓ {r.good}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[32px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Топ-практики · на примере Mikey
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.01em]">
        Как собрать историю, <span className="text-[hsl(var(--slide-gold))]">которая продаёт</span>
      </h2>
      <div className="space-y-[11px] max-w-[1800px]">
        {rules.map((r, i) => (
          <div key={i} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[10px] px-[24px] py-[13px] bg-[hsl(var(--slide-gold)/0.04)] flex items-center gap-[24px]">
            <p className="text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] w-[420px] shrink-0">
              <span className="text-[hsl(var(--slide-gold))]">{i + 1}.</span> {r.rule}
            </p>
            <div className="flex-1 space-y-[3px]">
              <p className="text-[16px] text-[hsl(0_55%_65%)] leading-[1.35]">✗ {r.bad}</p>
              <p className="text-[16px] text-[hsl(142_45%_58%)] leading-[1.35]">✓ {r.good}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
