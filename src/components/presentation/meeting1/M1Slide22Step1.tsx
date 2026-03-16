import { useIsMobile } from "@/hooks/use-mobile";

export default function M1Slide22Step1() {
  const steps = [
    { time: "0–2", action: "Открыть Perplexity → вставить промпт «Карта конкурентов»" },
    { time: "2–5", action: "Выбрать 3 прямых конкурента → записать: название, цена, отличие" },
    { time: "5–7", action: "Открыть сайт главного конкурента → заголовок, CTA, аудитория" },
    { time: "7–9", action: "Найти 2–3 негативных отзыва → записать боли" },
    { time: "9–10", action: "Сформулировать: чем ваш продукт лучше" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <div className="flex items-center gap-[8px] mb-[6px]">
          <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[8px] py-[4px] rounded">10 мин</span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Шаг 1</span>
        </div>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Конкуренты: 5 действий
        </h2>
        <div className="space-y-[8px] mb-[12px]">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[6px] py-[4px] rounded shrink-0 min-w-[32px] text-center">{s.time}</span>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold">Результат: таблица из 3 конкурентов + отстройка</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">10 мин</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Делаем вместе — Шаг 1</span>
      </div>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">Конкуренты: 5 действий за 10 минут</h2>
      <div className="space-y-[20px] max-w-[1100px]">
        {[
          { time: "0–2 мин", action: "Открыть Perplexity → вставить промпт «Карта конкурентов» со своим продуктом" },
          { time: "2–5 мин", action: "Из результатов выбрать 3 прямых конкурента → записать в таблицу: название, цена, ключевое отличие" },
          { time: "5–7 мин", action: "Открыть сайт главного конкурента → зафиксировать: заголовок, CTA, целевую аудиторию" },
          { time: "7–9 мин", action: "Найти 2–3 негативных отзыва на конкурента (G2, Trustpilot, App Store) → записать боли" },
          { time: "9–10 мин", action: "Сформулировать одно предложение: чем ваш продукт лучше главного конкурента" },
        ].map((s, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[8px] rounded shrink-0 min-w-[90px] text-center">{s.time}</span>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
      <div className="mt-[44px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[18px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold">Результат: таблица из 3 конкурентов + одно предложение отстройки</p>
      </div>
    </div>
  );
}
