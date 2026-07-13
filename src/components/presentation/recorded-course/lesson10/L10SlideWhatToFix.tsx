import { useIsMobile } from "@/hooks/use-mobile";

const quadrants = [
  { x: "Low visitors", y: "Low activation", verdict: "Чини маркетинг + чини продукт", color: "text-red-400", body: "Двойная проблема. Сначала фикси маркетинг (channels, copy), потом продукт. Не оба разом." },
  { x: "Low visitors", y: "High activation", verdict: "Чини маркетинг", color: "text-[hsl(var(--slide-gold))]", body: "Продукт хороший — те кто приходят, активируются. Проблема в каналах: мало трафика. L11-L12 решают." },
  { x: "High visitors", y: "Low activation", verdict: "Чини продукт", color: "text-[hsl(var(--slide-gold))]", body: "Маркетинг ок — люди приходят. Но что-то ломается в первом экране / onboarding. L7-L8 решают." },
  { x: "High visitors", y: "High activation, low retention", verdict: "Чини retention", color: "text-[hsl(var(--slide-gold))]", body: "Приходят, активируются, но не возвращаются. Onboarding отрабатывает, цикл возврата — нет. L8 решает." },
];

export default function L10SlideWhatToFix() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Матрица «что чинить»
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Не угадывай. <span className="text-[hsl(var(--slide-gold))]">Читай по цифрам</span>.
        </h2>
        <div className="space-y-[8px]">
          {quadrants.map((q, i) => (
            <div key={i} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[12px] py-[8px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))] font-medium mb-[2px]">{q.x} · {q.y}</p>
              <p className={`text-[12px] font-bold ${q.color} mb-[4px]`}>{q.verdict}</p>
              <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{q.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Матрица «что чинить»
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        Не угадывай. <span className="text-[hsl(var(--slide-gold))]">Читай по цифрам</span>.
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1800px]">
        {quadrants.map((q, i) => (
          <div key={i} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[22px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-medium mb-[6px]">{q.x} · {q.y}</p>
            <p className={`text-[24px] font-bold ${q.color} mb-[12px]`}>{q.verdict}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{q.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
