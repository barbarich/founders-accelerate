import FOM1SlideBase from "./FOM1SlideBase";

const rules = [
  "Результат, который можно измерить: часы, деньги, штуки",
  "Конкретный клиент, а не «все» и не «бизнесы»",
  "«Без» = от чего избавляете (боль или старый способ)",
  "Ноль жаргона — если бабушка не поняла, переписывайте",
];

export default function FOM1Slide18Formula() {
  return (
    <FOM1SlideBase
      slide={18}
      eyebrow="Формула позиционирования"
      title="Формула результата"
      subtitle="[Кто] получает [конкретный результат] с помощью [продукт], без [боль / старый способ]"
    >
      <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[9px] md:text-[14px]">
        Ключевые правила
      </p>
      <ul className="mt-[8px] space-y-[6px] md:space-y-[10px] max-w-[1700px]">
        {rules.map((r, i) => (
          <li key={i} className="flex gap-[10px]">
            <span className="text-[hsl(var(--slide-gold))] font-mono">{i + 1}.</span>
            <span className="text-[hsl(var(--slide-text))]">{r}</span>
          </li>
        ))}
      </ul>
      <div className="mt-[20px] border-l-[3px] border-[hsl(var(--slide-gold))] pl-[14px] max-w-[1700px]">
        <p>💡 Тест простоты: если ваша бабушка не поняла, что вы делаете — переписывайте.</p>
      </div>
    </FOM1SlideBase>
  );
}
