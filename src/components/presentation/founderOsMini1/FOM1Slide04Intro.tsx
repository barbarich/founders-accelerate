import FOM1SlideBase from "./FOM1SlideBase";

const items = [
  { e: "👋", t: "Кто вы", d: "имя, бэкграунд" },
  { e: "💡", t: "Идея / продукт", d: "в одном предложении" },
  { e: "😤", t: "Проблема → решение", d: "какая боль и как закрываете" },
  { e: "👥", t: "Для кого", d: "кто заплатит" },
  { e: "📍", t: "Стадия", d: "идея, прототип, MVP" },
  { e: "🤝", t: "Команда", d: "один или с кем-то" },
  { e: "🎯", t: "Чего хотите", d: "за 30 дней программы" },
];

export default function FOM1Slide04Intro() {
  return (
    <FOM1SlideBase
      slide={4}
      eyebrow="Знакомство"
      title="Давайте знакомиться 🙌"
      subtitle="Каждый — 7 минут на питч, без перебиваний"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[12px] max-w-[1500px]">
        {items.map((x, i) => (
          <div key={i} className="flex items-baseline gap-[14px]">
            <span className="text-[hsl(var(--slide-gold))] font-mono text-[14px] md:text-[18px] w-[18px]">{i + 1}</span>
            <span className="text-[18px] md:text-[24px]">{x.e}</span>
            <div>
              <span className="font-semibold text-[hsl(var(--slide-text))]">{x.t}</span>
              <span className="text-[hsl(var(--slide-text-muted))]"> — {x.d}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-[28px] text-[hsl(var(--slide-gold))] font-semibold">
        7 мин × 2 человека = 14 мин. После каждого — короткий разбор.
      </p>
    </FOM1SlideBase>
  );
}
