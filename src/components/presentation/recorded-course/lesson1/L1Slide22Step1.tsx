import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { num: "1", action: "Открой Deep Research (ChatGPT / Claude / Gemini) → запусти промпт по нише со своим продуктом" },
  { num: "2", action: "Из результатов выбери 3 прямых конкурента → запиши в таблицу: название, цена, ключевое отличие" },
  { num: "3", action: "Открой сайт главного конкурента → зафиксируй: заголовок, CTA, целевую аудиторию" },
  { num: "4", action: "Найди 2-3 негативных отзыва на конкурента (G2, Trustpilot, App Store) → запиши боли" },
  { num: "5", action: "Сформулируй одно предложение: чем твой продукт лучше главного конкурента" },
];

export default function L1Slide22Step1() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Пошаговый план · конкуренты
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          5 действий для разбора конкурентов
        </h2>
        <div className="space-y-[8px] mb-[12px]">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[2px] border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold">На выходе: таблица из 3 конкурентов + одно предложение отстройки</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Пошаговый план · конкуренты
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
        5 действий для разбора <span className="text-[hsl(var(--slide-gold))]">конкурентов</span>
      </h2>
      <div className="space-y-[20px] max-w-[1300px]">
        {steps.map((s) => (
          <div key={s.num} className="flex items-start gap-[18px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[36px] h-[36px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
      <div className="mt-[40px] bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[28px] py-[18px] max-w-[1300px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold">На выходе: таблица из 3 конкурентов + одно предложение отстройки от главного</p>
      </div>
    </div>
  );
}
