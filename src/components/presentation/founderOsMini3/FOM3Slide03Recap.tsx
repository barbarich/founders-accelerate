import FOM3SlideBase from "./FOM3SlideBase";

const recap = [
  { tag: "На С1 определили", text: "Кто клиент, за что платит, формула позиционирования и 4 теста гипотезы." },
  { tag: "На С2 определили", text: "Цену и 3 тарифа · MUST / SHOULD / WON'T HAVE · убили лишние фичи 10 → 3 → 1." },
  { tag: "С чем пришли на С3", text: "MUST HAVE-список, цена с обоснованием, реакция 3 человек из ЦА, ссылка на текущий прототип." },
  { tag: "Что делаем сегодня", text: "Берём это как ТЗ. Собираем MVP в Lovable + Claude Code + Supabase. Поднимаем лендинг с 8 блоками." },
  { tag: "Зачем это для С4", text: "Через 7 дней — «Onboarding & Aha». Готовый MVP+лендинг становятся материалом для теста первых 60 секунд." },
];

export default function FOM3Slide03Recap() {
  return (
    <FOM3SlideBase
      slide={3}
      eyebrow="Мост из С2 в С3"
      title="Где мы и куда идём"
      subtitle="С1 дал позиционирование. С2 дал цену и скоуп. С3 превращает это в продукт и лендинг."
    >
      <div className="space-y-[8px] md:space-y-[14px] max-w-[1800px] text-[12px] md:text-[22px]">
        {recap.map((r, i) => (
          <div key={i} className="grid grid-cols-[110px_1fr] md:grid-cols-[220px_1fr] gap-[8px] md:gap-[20px] items-baseline border-b border-[hsl(var(--slide-border)/0.2)] pb-[6px] md:pb-[10px]">
            <span className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] text-[10px] md:text-[16px] font-medium">{r.tag}</span>
            <p className="text-[hsl(var(--slide-text))] leading-[1.4]">{r.text}</p>
          </div>
        ))}
      </div>
    </FOM3SlideBase>
  );
}
