export default function M1Slide22Step1() {
  const steps = [
    { time: "0–2 мин", action: "Открыть Perplexity → вставить промпт «Карта конкурентов» со своим продуктом" },
    { time: "2–5 мин", action: "Из результатов выбрать 3 прямых конкурента → записать в таблицу: название, цена, ключевое отличие" },
    { time: "5–7 мин", action: "Открыть сайт главного конкурента → зафиксировать: заголовок, CTA, целевую аудиторию" },
    { time: "7–9 мин", action: "Найти 2–3 негативных отзыва на конкурента (G2, Trustpilot, App Store) → записать боли" },
    { time: "9–10 мин", action: "Сформулировать одно предложение: чем ваш продукт лучше главного конкурента" },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">10 мин</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Делаем вместе — Шаг 1</span>
      </div>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        Конкуренты: 5 действий за 10 минут
      </h2>
      <div className="space-y-[20px] max-w-[1100px]">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[8px] rounded shrink-0 min-w-[90px] text-center">
              {s.time}
            </span>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
      <div className="mt-[44px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[18px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold">
          Результат: таблица из 3 конкурентов + одно предложение отстройки
        </p>
      </div>
    </div>
  );
}
