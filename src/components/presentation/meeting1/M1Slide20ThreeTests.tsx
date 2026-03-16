export default function M1Slide20ThreeTests() {
  const tests = [
    { icon: "⏱️", title: 'Тест "5 секунд"', text: "Зачитайте незнакомому человеку. Понял о чём и для кого? Если нет — переписывайте." },
    { icon: "👩", title: 'Тест "мама"', text: 'Расскажите кому-то не из вашей ниши. Если спросил "а как это работает?" — зацепило. Если кивнул и промолчал — не зацепило.' },
    { icon: "🖥️", title: 'Тест "лендинг"', text: "Можно поставить заголовком первого экрана? Если человек за 5 секунд поймёт что это и для кого — готово." },
  ];

  const adSteps = [
    { num: "1", text: "Лендинг или форма сбора заявок — ключевое действие: «Оставить заявку» или «Coming soon — записаться»" },
    { num: "2", text: "Тестовая реклама в Meta — $5–10/день, 3–5 дней, 2–3 креатива на целевую аудиторию" },
    { num: "3", text: "Метрики: CTR объявления, конверсия формы, стоимость заявки — показывают реальный интерес" },
    { num: "4", text: "Обзвон заявок — провести короткое интервью с теми, кто оставил контакт" },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Проверка позиционирования</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        Четыре теста перед запуском
      </h2>

      <div className="flex gap-[32px] mb-[40px]">
        {tests.map((t, i) => (
          <div key={i} className="flex-1 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[hsl(var(--slide-gold)/0.4)] to-transparent" />
            <div className="pt-[28px]">
              <span className="text-[40px]">{t.icon}</span>
              <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mt-[14px] mb-[10px]">{t.title}</h3>
              <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{t.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Meta Ads test block */}
      <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[14px] p-[28px]">
        <div className="flex items-center gap-[12px] mb-[18px]">
          <span className="text-[36px]">📢</span>
          <h3 className="text-[24px] font-bold text-[hsl(var(--slide-text))]">Тест рекламой в Meta</h3>
          <span className="text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] px-[12px] py-[3px] rounded-full font-medium">самый показательный</span>
        </div>
        <div className="grid grid-cols-4 gap-[20px]">
          {adSteps.map((s) => (
            <div key={s.num} className="flex gap-[10px]">
              <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 font-bold mt-[2px]">
                {s.num}
              </span>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
