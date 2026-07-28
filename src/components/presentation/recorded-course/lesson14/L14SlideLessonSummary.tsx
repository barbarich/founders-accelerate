import { useIsMobile } from "@/hooks/use-mobile";

const points = [
  "Юнит-экономика - это два вопроса: сколько стоит клиент (CAC) и сколько он приносит за жизнь (LTV). Всё остальное - производные.",
  "CAC считается по платящим клиентам и по каждому каналу отдельно. Blended CAC скрывает убыточный канал за прибыльным.",
  "Для AI-продукта себестоимость (токены, API) - не мелочь, а главный риск маржи. Cursor был в минусе при $2B ARR, пока не починил косты продуктом.",
  "Два числа решения: LTV:CAC ≥ 3 и payback ≤ 6-12 месяцев. На ранней стадии payback важнее - это живой кэш, а не прогноз.",
  "Четыре рычага: цена, CAC, churn, себестоимость. Цена - самый быстрый: меняется за день, а LTV растёт на десятки процентов.",
];

export default function L14SlideLessonSummary() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Саммари урока</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[9px]">
          5 мыслей, <span className="text-[hsl(var(--slide-gold))]">которые стоит забрать</span>
        </h2>
        <div className="space-y-[6px]">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[10px] py-[6px]">
              <span className="text-[11px] font-bold text-[hsl(var(--slide-gold))] shrink-0">{i + 1}</span>
              <p className="text-[9px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">{p}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Саммари урока</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[26px] tracking-[-0.02em]">
        5 мыслей, <span className="text-[hsl(var(--slide-gold))]">которые стоит забрать</span>
      </h2>
      <div className="space-y-[12px] max-w-[1650px]">
        {points.map((p, i) => (
          <div key={i} className="flex items-start gap-[24px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[26px] py-[14px]">
            <span className="text-[26px] font-bold text-[hsl(var(--slide-gold))] shrink-0 leading-[1.2]">{i + 1}</span>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">{p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
