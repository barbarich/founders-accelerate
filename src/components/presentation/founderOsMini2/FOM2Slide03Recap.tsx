import FOM2SlideBase from "./FOM2SlideBase";

const recap = [
  { tag: "С1 закрепили", text: "Кто клиент и за что он заплатит. Конкуренты на 3 уровнях. Формула позиционирования. 4 теста перед запуском." },
  { tag: "Что приносим", text: "Гипотеза позиционирования + сигналы из 5–7 интервью (даже если их было 2 — работаем с тем, что есть)." },
  { tag: "Куда идём сегодня", text: "Превращаем «что мы делаем» в «сколько это стоит и что строим». Применяем позиционирование как фильтр для решений." },
  { tag: "Куда идём через 5 дней", text: "С3 «Build & Land» — лендинг + работающий первый сценарий MVP в Lovable + Claude Code. Сегодняшний скоуп станет ТЗ для С3." },
];

export default function FOM2Slide03Recap() {
  return (
    <FOM2SlideBase
      slide={3}
      eyebrow="Мост из С1 в С2"
      title="Recap и куда идём"
      subtitle="Между сессиями важнее то, что вы услышали в интервью, чем то, сколько их было"
    >
      <div className="space-y-[8px] md:space-y-[14px] max-w-[1800px] text-[12px] md:text-[22px]">
        {recap.map((r, i) => (
          <div key={i} className="grid grid-cols-[110px_1fr] md:grid-cols-[220px_1fr] gap-[8px] md:gap-[20px] items-baseline border-b border-[hsl(var(--slide-border)/0.2)] pb-[6px] md:pb-[10px]">
            <span className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] text-[10px] md:text-[16px] font-medium">{r.tag}</span>
            <p className="text-[hsl(var(--slide-text))] leading-[1.4]">{r.text}</p>
          </div>
        ))}
      </div>
    </FOM2SlideBase>
  );
}
