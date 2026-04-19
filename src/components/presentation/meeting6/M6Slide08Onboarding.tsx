import { useIsMobile } from "@/hooks/use-mobile";

const elements = [
  { name: "Empty state", rule: "Никогда не пустой", detail: "Пустой дашборд = юзер уходит. Дай pre-filled sample или одну яркую CTA на первое действие." },
  { name: "3–5 шагов", rule: "Не тур, а последовательность", detail: "Путь к первому результату. Не объяснение интерфейса, а действия, ведущие к Aha." },
  { name: "Подсказки", rule: "По месту, не списком", detail: "Tooltip на поле ввода > модалка «вот 12 фич продукта». Контекст > лекция." },
  { name: "Progress", rule: "Видно сколько осталось", detail: "Если шагов больше 2 — показывай. Иначе юзер выходит на полпути, не зная что близок." },
  { name: "Pre-filled sample", rule: "Быстрее, чем пустой workspace", detail: "Notion: template gallery. Linear: демо-issues. Slack: welcome-бот. Первый Aha без усилий." },
];

export default function M6Slide08Onboarding() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Архитектура первой сессии
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Онбординг = кратчайший путь к Aha.
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Не тур по продукту. Не wizard из 8 шагов. Набор решений, проводящих юзера к первому результату без застревания — минуты для B2C, первая сессия для продуктивных tools, 2–3 сессии для B2B.
        </p>
        <div className="space-y-[4px]">
          {elements.map((e) => (
            <div key={e.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[9px] py-[5px]">
              <div className="flex items-baseline gap-[6px] mb-[1px]">
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{e.name}</p>
                <p className="text-[7.5px] text-[hsl(var(--slide-gold))] leading-[1.2]">— {e.rule}</p>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{e.detail}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Архитектура первой сессии
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px]">
        Онбординг = кратчайший путь к Aha.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[32px] max-w-[1400px] leading-[1.45]">
        Не тур по продукту. Не wizard из 8 шагов. Набор решений, проводящих юзера к первому результату без застревания — минуты для B2C, первая сессия для продуктивных tools, 2–3 сессии для B2B.
      </p>

      <div className="max-w-[1500px] border border-[hsl(var(--slide-gold)/0.2)] rounded-[14px] overflow-hidden">
        {elements.map((e, i) => (
          <div
            key={e.name}
            className={`grid grid-cols-[220px_280px_1fr] gap-[24px] px-[28px] py-[14px] ${i !== elements.length - 1 ? "border-b border-[hsl(var(--slide-border)/0.15)]" : ""} ${i === 0 ? "bg-[hsl(var(--slide-bg-alt))]" : ""}`}
          >
            <p className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{e.name}</p>
            <p className="text-[17px] text-[hsl(var(--slide-gold))] leading-[1.3]">{e.rule}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{e.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
