import FOM2SlideBase from "./FOM2SlideBase";

const steps = [
  { n: "1", t: "Каждый называет цену прямо сейчас", d: "Без подготовки. Одно число — основной тариф. Записываем на доску." },
  { n: "2", t: "Каждый называет 2 числа вокруг", d: "Стартовый (-50% или Free) и якорь (+2×). 3 тарифа = Free/Starter / Pro / Business." },
  { n: "3", t: "Аргументация средней цены", d: "30 секунд: сколько денег / времени / нервов экономит клиент в месяц. Какой % от этой суммы — твоя цена. Если меньше 5% — поднимай. Больше 30% — режь скоуп или ICP." },
  { n: "4", t: "Тест «скажи вслух дорогому клиенту»", d: "Произнеси цену вслух как если перед клиентом. Если запнулся или хочется добавить «но мы можем подумать» — цена низкая." },
  { n: "5", t: "Зафиксировать выходную цену", d: "Та, с которой выходим на С3 (лендинг будем строить с этой ценой)." },
];

export default function FOM2Slide14LivePricing() {
  return (
    <FOM2SlideBase
      slide={14}
      eyebrow="Лайв-упражнение · 5 минут"
      title="Назначаем цену за столом"
      subtitle="К концу упражнения у каждого фаундера — 3 тарифа с обоснованием и одно «выходное» число для лендинга"
    >
      <div className="space-y-[6px] md:space-y-[12px] max-w-[1800px] text-[12px] md:text-[22px]">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-[10px] md:gap-[16px] items-baseline">
            <span className="font-mono text-[hsl(var(--slide-gold))] font-bold w-[20px] md:w-[34px] shrink-0 text-[14px] md:text-[28px]">{s.n}</span>
            <div>
              <p className="font-semibold text-[hsl(var(--slide-text))]">{s.t}</p>
              <p className="text-[hsl(var(--slide-text-muted))] mt-[2px] leading-[1.4]">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[12px] md:mt-[20px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] md:pl-[16px] max-w-[1800px] text-[11px] md:text-[20px]">
        <p>💡 Не «может, рынок не готов». Готов или нет — узнаём из метрик первого месяца, а не из головы.</p>
      </div>
    </FOM2SlideBase>
  );
}
