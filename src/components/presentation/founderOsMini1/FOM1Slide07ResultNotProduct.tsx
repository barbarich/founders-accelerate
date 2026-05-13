import FOM1SlideBase from "./FOM1SlideBase";

const examples = [
  { e: "🔩", a: "Никто не покупает дрель", b: "покупают дырку в стене" },
  { e: "📊", a: "Никто не покупает CRM", b: "покупают «ни один лид не потерялся»" },
  { e: "📚", a: "Никто не покупает онлайн-курс", b: "покупают новую работу с зарплатой ×2" },
];

export default function FOM1Slide07ResultNotProduct() {
  return (
    <FOM1SlideBase
      slide={7}
      eyebrow="За что покупают"
      title="Никто не покупает продукт. Покупают результат."
      subtitle="Не фичи, не технологии, не красивый UI"
    >
      <div className="space-y-[14px] max-w-[1600px]">
        {examples.map((x, i) => (
          <div key={i} className="flex items-baseline gap-[14px]">
            <span className="text-[18px] md:text-[28px]">{x.e}</span>
            <p>
              <span className="text-[hsl(var(--slide-text-muted))]">{x.a}</span>
              <span className="text-[hsl(var(--slide-gold))]"> → </span>
              <span className="text-[hsl(var(--slide-text))] font-semibold">{x.b}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="mt-[28px] border-l-[3px] border-[hsl(var(--slide-gold))] pl-[16px] max-w-[1600px]">
        <p className="text-[hsl(var(--slide-text))]">
          💡 Сегодня всё через эту линзу: позиционирование = обещание результата,
          цена = стоимость результата, MVP = минимум для доставки результата.
        </p>
      </div>
    </FOM1SlideBase>
  );
}
