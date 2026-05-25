import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { day: "Day 30 после signing", action: "Mid-success звонок с champion'ом", ask: "Конкретный результат за месяц + что улучшить. Пока ничего не просишь." },
  { day: "Day 45", action: "Запрос #1: case-study (1 страница)", ask: "«Можно я напишу одностраничник по нашему результату? Покажу тебе перед публикацией. Это поможет нам обоим — тебе как case продемонстрировать impact внутри.»" },
  { day: "Day 60", action: "Запрос #2: 3 referrals (точечный)", ask: "«У тебя в твоей сети есть 3 человека в похожей роли в [индустрия] — кому это могло бы помочь? Не нужно продавать — просто познакомь меня им если ок.»" },
  { day: "Day 75", action: "Запрос #3: testimonial + LinkedIn пост", ask: "«Можешь написать 1 абзац про результат + опубликовать у себя? Я подготовлю draft, ты отредактируешь.»" },
  { day: "Day 90", action: "Expansion разговор с champion + EB", ask: "Расширение: больше seats / новые модули / годовой контракт со скидкой. Сейчас у тебя данные за квартал — это твой козырь." },
];

const math = [
  { n: "1", l: "первая закрытая сделка" },
  { n: "→ 3", l: "warm intros по реферал-запросу (если champion реальный)" },
  { n: "→ 0.8", l: "из этих 3 закрываются (warm intro = 30% conversion)" },
  { n: "= 4 deals", l: "из 1 за 90 дней. Это твой compounding loop." },
];

export default function M11Slide16ExpansionLoop() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[12px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Expansion loop · после первой сделки
        </p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          1 сделка = <span className="text-[hsl(var(--slide-gold))]">4 сделки за 90 дней</span>
        </h2>
        <div className="grid grid-cols-4 gap-[2px] mb-[4px]">
          {math.map((m, i) => (
            <div key={i} className="bg-[hsl(var(--slide-gold)/0.1)] rounded-[3px] px-[4px] py-[2px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{m.n}</p>
              <p className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{m.l}</p>
            </div>
          ))}
        </div>
        <div className="space-y-[2px]">
          {steps.map((s) => (
            <div key={s.day} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[3px] px-[5px] py-[2px]">
              <div className="flex items-baseline gap-[3px]">
                <p className="text-[7px] font-bold text-[hsl(var(--slide-gold))]">{s.day}</p>
                <p className="text-[7px] font-bold text-[hsl(var(--slide-text))]">· {s.action}</p>
              </div>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4]">{s.ask}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Expansion loop · после первой сделки
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px] tracking-[-0.02em]">
        1 сделка = <span className="text-[hsl(var(--slide-gold))]">4 сделки за 90 дней</span>
      </h2>
      <div className="grid grid-cols-4 gap-[14px] mb-[18px] max-w-[1700px]">
        {math.map((m, i) => (
          <div key={i} className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[18px] py-[10px]">
            <p className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[3px]">{m.n}</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.l}</p>
          </div>
        ))}
      </div>
      <div className="space-y-[8px] max-w-[1700px]">
        {steps.map((s) => (
          <div key={s.day} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[22px] py-[10px]">
            <div className="flex items-baseline gap-[12px] mb-[3px]">
              <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em]">{s.day}</p>
              <p className="text-[17px] font-bold text-[hsl(var(--slide-text))]">{s.action}</p>
            </div>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] italic leading-[1.5]">→ {s.ask}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
