import { useIsMobile } from "@/hooks/use-mobile";

export default function M1Slide20ThreeTests() {
  const tests = [
    { icon: "⏱️", title: 'Тест "5 секунд"', text: "Зачитайте незнакомому. Понял? Нет — переписывайте." },
    { icon: "👩", title: 'Тест "мама"', text: 'Расскажите не из ниши. Спросил «как?» — зацепило.' },
    { icon: "🖥️", title: 'Тест "лендинг"', text: "Можно поставить заголовком первого экрана?" },
  ];
  const adSteps = [
    { num: "1", text: "Лендинг или форма сбора заявок" },
    { num: "2", text: "Тестовая реклама в Meta — $5–10/день, 3–5 дней" },
    { num: "3", text: "CTR, конверсия формы, стоимость заявки" },
    { num: "4", text: "Обзвон заявок — короткое интервью" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Проверка</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Четыре теста перед запуском
        </h2>
        <div className="space-y-[8px] mb-[12px]">
          {tests.map((t, i) => (
            <div key={i} className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[8px]">
              <div className="flex items-center gap-[6px] mb-[2px]">
                <span className="text-[16px]">{t.icon}</span>
                <h3 className="text-[12px] font-semibold text-[hsl(var(--slide-text))]">{t.title}</h3>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] p-[12px]">
          <div className="flex items-center gap-[6px] mb-[8px]">
            <span className="text-[16px]">📢</span>
            <h3 className="text-[12px] font-bold text-[hsl(var(--slide-text))]">Тест рекламой</h3>
            <span className="text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] px-[6px] py-[1px] rounded-full font-medium">самый показательный</span>
          </div>
          <div className="space-y-[4px]">
            {adSteps.map((s) => (
              <div key={s.num} className="flex gap-[6px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] w-[16px] h-[16px] rounded-full flex items-center justify-center shrink-0 font-bold mt-[1px]">{s.num}</span>
                <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Проверка позиционирования</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">Четыре теста перед запуском</h2>
      <div className="flex gap-[32px] mb-[40px]">
        {[
          { icon: "⏱️", title: 'Тест "5 секунд"', text: "Зачитайте незнакомому человеку. Понял о чём и для кого? Если нет — переписывайте." },
          { icon: "👩", title: 'Тест "мама"', text: 'Расскажите кому-то не из вашей ниши. Если спросил "а как это работает?" — зацепило. Если кивнул и промолчал — не зацепило.' },
          { icon: "🖥️", title: 'Тест "лендинг"', text: "Можно поставить заголовком первого экрана? Если человек за 5 секунд поймёт что это и для кого — готово." },
        ].map((t, i) => (
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
      <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[14px] p-[28px]">
        <div className="flex items-center gap-[12px] mb-[18px]">
          <span className="text-[36px]">📢</span>
          <h3 className="text-[24px] font-bold text-[hsl(var(--slide-text))]">Тест рекламой в Meta</h3>
          <span className="text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] px-[12px] py-[3px] rounded-full font-medium">самый показательный</span>
        </div>
        <div className="grid grid-cols-4 gap-[20px]">
          {[
            { num: "1", text: "Лендинг или форма сбора заявок — ключевое действие: «Оставить заявку» или «Coming soon — записаться»" },
            { num: "2", text: "Тестовая реклама в Meta — $5–10/день, 3–5 дней, 2–3 креатива на целевую аудиторию" },
            { num: "3", text: "Метрики: CTR объявления, конверсия формы, стоимость заявки — показывают реальный интерес" },
            { num: "4", text: "Обзвон заявок — провести короткое интервью с теми, кто оставил контакт" },
          ].map((s) => (
            <div key={s.num} className="flex gap-[10px]">
              <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 font-bold mt-[2px]">{s.num}</span>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
