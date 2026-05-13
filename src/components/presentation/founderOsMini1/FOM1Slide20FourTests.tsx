import FOM1SlideBase from "./FOM1SlideBase";

const tests = [
  { e: "⏱️", t: "Тест «5 секунд»", d: "Зачитайте незнакомому человеку. Понял о чём и для кого? Если нет — переписывайте." },
  { e: "👩", t: "Тест «мама»", d: "Расскажите кому-то не из вашей ниши. Если спросил «а как это работает?» — зацепило. Если кивнул и промолчал — не зацепило." },
  { e: "🖥️", t: "Тест «лендинг»", d: "Можно поставить заголовком первого экрана? Если человек за 5 секунд поймёт, что это и для кого — готово." },
];

export default function FOM1Slide20FourTests() {
  return (
    <FOM1SlideBase
      slide={20}
      eyebrow="Валидация"
      title="Четыре теста перед запуском"
      subtitle="Проверка позиционирования"
    >
      <div className="space-y-[8px] md:space-y-[12px] max-w-[1800px] text-[10px] md:text-[16px]">
        {tests.map((t, i) => (
          <div key={i} className="flex gap-[10px]">
            <span className="text-[14px] md:text-[22px]">{t.e}</span>
            <p>
              <span className="font-semibold text-[hsl(var(--slide-text))]">{t.t}</span>{" "}
              <span className="text-[hsl(var(--slide-text-muted))]">— {t.d}</span>
            </p>
          </div>
        ))}
        <div className="border border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-bg-alt))] rounded-[10px] p-[10px] md:p-[16px] mt-[6px]">
          <p className="font-semibold text-[hsl(var(--slide-gold))] text-[11px] md:text-[18px]">
            📢 Тест рекламой в Meta (самый показательный)
          </p>
          <ul className="mt-[4px] text-[hsl(var(--slide-text))] space-y-[2px]">
            <li>· Лендинг или форма сбора заявок — CTA: «Оставить заявку» / «Coming soon — записаться»</li>
            <li>· Тестовая реклама в Meta — $5–10/день, 3–5 дней, 2–3 креатива на ЦА</li>
            <li>· Метрики: CTR объявления, конверсия формы, стоимость заявки</li>
            <li>· Обзвон заявок — короткое интервью с теми, кто оставил контакт</li>
          </ul>
        </div>
        <div className="border-l-[3px] border-[hsl(var(--slide-gold))] pl-[12px] mt-[8px]">
          <p>
            💡 Хотите узнать, продаётся ли ваше позиционирование? $30 на Meta за выходные.
            CTR &lt; 1% — не работает. Появились заявки — есть рынок. Это валидация рынком, не друзьями.
          </p>
        </div>
      </div>
    </FOM1SlideBase>
  );
}
