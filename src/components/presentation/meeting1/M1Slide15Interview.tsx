export default function M1Slide15Interview() {
  const questions = [
    { q: "Расскажите, как вы сейчас решаете [проблему]?", why: "Понять текущее поведение, не мнение" },
    { q: "Что в этом отнимает больше всего времени / денег / нервов?", why: "Найти боль" },
    { q: "Пробовали что-то менять? Какие инструменты смотрели?", why: "Понять осведомлённость о рынке" },
    { q: "Почему остановились на текущем варианте?", why: "Понять барьеры и критерии выбора" },
    { q: "Если бы это можно было решить идеально — как бы выглядело?", why: "Описание идеального продукта словами клиента" },
    { q: "Сколько тратите на решение — деньги или время?", why: "Willingness to pay" },
    { q: "Кто ещё сталкивается с этой проблемой?", why: "Рефералы на следующие интервью" },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Customer-интервью</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
        15 минут. 7 вопросов.
      </h2>
      <div className="space-y-[14px] mb-[32px]">
        {questions.map((item, i) => (
          <div key={i} className="flex gap-[16px] items-start">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] w-[28px] h-[28px] rounded flex items-center justify-center shrink-0 mt-[2px]">{i + 1}</span>
            <div className="flex-1">
              <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.4]">{item.q}</p>
              <p className="text-[16px] text-[hsl(var(--slide-gold)/0.7)] mt-[4px]">→ {item.why}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[28px] py-[16px]">
        <p className="text-[18px] text-[hsl(var(--slide-gold))] font-medium">
          🚫 Никогда не спрашивай "купили бы вы это?" — люди врут. Спрашивай про прошлое поведение.
        </p>
      </div>
    </div>
  );
}
