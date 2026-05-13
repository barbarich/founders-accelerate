import FOM1SlideBase from "./FOM1SlideBase";

const levels = [
  { e: "⚔️", t: "Прямые", d: "делают то же самое для той же аудитории" },
  { e: "🔄", t: "Косвенные", d: "решают ту же проблему другим способом" },
  { e: "📋", t: "Замена", d: "что клиент делает СЕЙЧАС вместо вашего продукта (Excel, стажёр, ChatGPT, ручной процесс)" },
];

export default function FOM1Slide11Competitors() {
  return (
    <FOM1SlideBase
      slide={11}
      eyebrow="Конкуренты"
      title="Три уровня конкурентов"
      subtitle="Ваши конкуренты — это не те, кто делает то же самое"
    >
      <div className="space-y-[12px] max-w-[1700px]">
        {levels.map((x, i) => (
          <div key={i} className="flex items-baseline gap-[14px]">
            <span className="text-[18px] md:text-[26px]">{x.e}</span>
            <p>
              <span className="text-[hsl(var(--slide-text))] font-semibold">{x.t}</span>
              <span className="text-[hsl(var(--slide-text-muted))]"> — {x.d}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="mt-[24px] border-l-[3px] border-[hsl(var(--slide-gold))] pl-[16px] max-w-[1700px]">
        <p>
          💡 В RunEverywhere наш конкурент — не другое беговое приложение. Это бар и YouTube.
          Потому что вечером человек выбирает: выйти на пробежку или остаться на диване.
          Конкурент Netflix — сон. Думайте шире.
        </p>
      </div>
    </FOM1SlideBase>
  );
}
