import FOM1SlideBase from "./FOM1SlideBase";

const blocks = [
  { n: "01", e: "🎯", t: "За что заплатят", d: "позиционирование через результат, не через фичи" },
  { n: "02", e: "👤", t: "Кто заплатит", d: "конкретный человек, не «все люди»" },
  { n: "03", e: "📋", t: "Что проверять на этой неделе", d: "конкуренты + интервью + тесты" },
];

export default function FOM1Slide05Agenda() {
  return (
    <FOM1SlideBase
      slide={5}
      eyebrow="План на сегодня"
      title="Что мы сделаем за 2 часа"
      subtitle="Три вещи. Каждая — с конкретным результатом"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] max-w-[1600px]">
        {blocks.map((b) => (
          <div
            key={b.n}
            className="border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] p-[16px] md:p-[24px] bg-[hsl(var(--slide-bg-alt))]"
          >
            <p className="font-mono text-[hsl(var(--slide-gold))] text-[12px] md:text-[16px]">{b.n}</p>
            <p className="text-[18px] md:text-[28px] mt-[6px]">{b.e}</p>
            <h3 className="font-display text-[14px] md:text-[24px] font-bold text-[hsl(var(--slide-text))] mt-[6px]">
              {b.t}
            </h3>
            <p className="text-[10.5px] md:text-[18px] text-[hsl(var(--slide-text-muted))] mt-[6px] leading-[1.45]">
              {b.d}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-[24px] text-[hsl(var(--slide-gold))] font-semibold">
        К концу: один ICP, одно позиционирование, план 5–7 интервью.
      </p>
    </FOM1SlideBase>
  );
}
