import FOM2SlideBase from "./FOM2SlideBase";

const steps = [
  { n: "1", t: "Делишься мыслями", d: "Цена, MVP, где сейчас застрял." },
  { n: "2", t: "Получаешь фидбек", d: "Группа и ментор задают вопросы." },
  { n: "3", t: "Фокус на главном", d: "Уходишь с одним приоритетом на неделю." },
];

export default function FOM2Slide21LiveReview() {
  return (
    <FOM2SlideBase
      slide={21}
      eyebrow="10 минут на участника"
      title="Каждый — по очереди"
      subtitle="Простой формат: рассказал → услышал → выбрал главное."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[32px] max-w-[1600px]">
        {steps.map((s, i) => (
          <div
            key={i}
            className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] p-[20px] md:p-[40px]"
          >
            <p className="text-[hsl(var(--slide-gold))] font-semibold text-[28px] md:text-[56px] leading-none">
              {s.n}
            </p>
            <p className="text-[hsl(var(--slide-text))] font-semibold mt-[12px] md:mt-[24px] text-[18px] md:text-[28px]">
              {s.t}
            </p>
            <p className="text-[hsl(var(--slide-text-muted))] mt-[8px] md:mt-[14px] leading-[1.5] text-[13px] md:text-[20px]">
              {s.d}
            </p>
          </div>
        ))}
      </div>
    </FOM2SlideBase>
  );
}
