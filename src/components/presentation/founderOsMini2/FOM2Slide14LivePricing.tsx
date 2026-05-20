import FOM2SlideBase from "./FOM2SlideBase";

const tasks = [
  {
    n: "1",
    t: "Напиши 3 цены для своего продукта",
    d: "Например: $9 / $29 / $99. Минимум — кто только пробует. Средняя — основной клиент. Максимум — кто хочет больше.",
  },
  {
    n: "2",
    t: "Реши, как продаёшь",
    d: "Тарифы (Starter / Pro / Business) — массовый продукт. Энтерпрайз (цена по запросу) — крупные клиенты под задачу.",
  },
  {
    n: "3",
    t: "Оплата сразу или free trial?",
    d: "Сразу — когда ценность видна за 1 минуту. Free trial 7–14 дней — когда нужно время, чтобы её почувствовать.",
  },
  {
    n: "4",
    t: "Опиши ценность — за что платят",
    d: "Одной фразой: какую проблему решаешь и что человек получает. «Платят за то, что…» — продолжи.",
  },
];

export default function FOM2Slide14LivePricing() {
  return (
    <FOM2SlideBase
      slide={14}
      eyebrow="Лайв-упражнение · 5 минут"
      title="Поставь цену своему продукту"
      subtitle="К концу упражнения у тебя 3 цены, понятная модель продаж и одна фраза о ценности"
    >
      <div className="space-y-[10px] md:space-y-[20px] max-w-[1800px] text-[13px] md:text-[24px]">
        {tasks.map((s, i) => (
          <div
            key={i}
            className="flex gap-[12px] md:gap-[20px] items-baseline rounded-[8px] md:rounded-[14px] bg-[hsl(var(--slide-text)/0.04)] border border-[hsl(var(--slide-text)/0.08)] p-[10px_12px] md:p-[18px_24px]"
          >
            <span className="font-mono text-[hsl(var(--slide-gold))] font-bold w-[22px] md:w-[42px] shrink-0 text-[16px] md:text-[34px]">
              {s.n}
            </span>
            <div>
              <p className="font-semibold text-[hsl(var(--slide-text))]">{s.t}</p>
              <p className="text-[hsl(var(--slide-text-muted))] mt-[3px] md:mt-[6px] leading-[1.45] text-[12px] md:text-[20px]">
                {s.d}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[14px] md:mt-[28px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] md:pl-[18px] max-w-[1800px] text-[12px] md:text-[20px]">
        <p>💡 Цена — это гипотеза. Правильная она или нет — покажут первые 10 клиентов, а не размышления.</p>
      </div>
    </FOM2SlideBase>
  );
}
