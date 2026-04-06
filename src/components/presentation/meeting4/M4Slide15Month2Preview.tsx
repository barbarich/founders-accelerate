import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { label: "Идея", done: true },
  { label: "Валидация", done: true },
  { label: "MVP", done: true },
  { label: "", youAreHere: true },
  { label: "Продукт", done: false, next: true },
  { label: "Рост", done: false },
  { label: "Деньги", done: false },
];

const month2 = [
  { week: "5", from: "Прототип", to: "Продукт", desc: "MVP с AI — из идеи в рабочий продукт за вечер" },
  { week: "6", from: "Заходит", to: "Остаётся", desc: "UX, onboarding, первые 60 секунд" },
  { week: "7", from: "Есть лендинг", to: "Конвертит", desc: "Копирайтинг, визуал, оффер который продаёт" },
  { week: "8", from: "Вы строите", to: "Мир знает", desc: "Личный бренд, контент-система, первые подписчики" },
];

export default function M4Slide15Month2Preview() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Что дальше
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          От «работает» к<br />«хочется использовать»
        </h2>

        {/* Funnel */}
        <div className="flex items-center gap-[3px] mb-[12px] flex-wrap">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-[3px]">
              {s.youAreHere ? (
                <span className="text-[7px] text-[hsl(var(--slide-gold))] font-bold mx-[2px]">↓здесь</span>
              ) : (
                <div className={`px-[6px] py-[3px] rounded-[4px] text-[7px] font-bold ${
                  s.next
                    ? "bg-[hsl(var(--slide-bg-alt))] text-[hsl(var(--slide-text))] border border-[hsl(var(--slide-gold)/0.5)]"
                    : s.done
                      ? "bg-[hsl(var(--slide-gold)/0.2)] text-[hsl(var(--slide-gold))]"
                      : "bg-[hsl(var(--slide-bg-alt))] text-[hsl(var(--slide-text-muted))] border border-[hsl(var(--slide-border)/0.3)]"
                }`}>
                  {s.label}
                </div>
              )}
              {i < steps.length - 1 && !s.youAreHere && !steps[i+1]?.youAreHere && <span className="text-[6px] text-[hsl(var(--slide-text-muted))]">→</span>}
            </div>
          ))}
        </div>

        {/* Month 2 weeks */}
        <div className="space-y-[6px]">
          {month2.map((m, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-center gap-[6px] mb-[2px]">
                <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[16px] h-[16px] flex items-center justify-center rounded-full font-bold">{m.week}</span>
                <span className="text-[9px] text-[hsl(var(--slide-text-muted))]">{m.from}</span>
                <span className="text-[8px] text-[hsl(var(--slide-gold))]">→</span>
                <span className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{m.to}</span>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] ml-[22px]">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Что дальше
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
        От «работает» к «хочется использовать»
      </h2>

      {/* Visual funnel */}
      <div className="flex items-center gap-[8px] mb-[48px]">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-[8px]">
            {s.youAreHere ? (
              <div className="flex flex-col items-center mx-[8px]">
                <span className="text-[13px] text-[hsl(var(--slide-gold))] font-bold mb-[4px] animate-pulse">вы здесь ↓</span>
                <div className="w-[3px] h-[16px] bg-[hsl(var(--slide-gold))]" />
              </div>
            ) : (
              <div className={`px-[20px] py-[12px] rounded-[10px] text-[17px] font-bold transition-all ${
                s.next
                  ? "bg-[hsl(var(--slide-bg-alt))] text-[hsl(var(--slide-text))] border-2 border-[hsl(var(--slide-gold)/0.5)]"
                  : s.done
                    ? "bg-[hsl(var(--slide-gold)/0.15)] text-[hsl(var(--slide-gold))]"
                    : "bg-[hsl(var(--slide-bg-alt))] text-[hsl(var(--slide-text-muted))] border border-[hsl(var(--slide-border)/0.3)]"
              }`}>
                {s.label}
              </div>
            )}
            {i < steps.length - 1 && !s.youAreHere && !steps[i+1]?.youAreHere && (
              <div className={`w-[24px] h-[2px] ${s.done ? "bg-[hsl(var(--slide-gold)/0.4)]" : "bg-[hsl(var(--slide-border)/0.3)]"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Month 2 transformations */}
      <div className="flex gap-[20px]">
        {month2.map((m, i) => (
          <div key={i} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[24px] py-[24px]">
            <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[36px] h-[36px] flex items-center justify-center rounded-full font-bold mb-[16px]">{m.week}</span>
            <div className="flex items-center gap-[8px] mb-[12px]">
              <span className="text-[18px] text-[hsl(var(--slide-text-muted))]">{m.from}</span>
              <span className="text-[18px] text-[hsl(var(--slide-gold))] font-bold">→</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{m.to}</span>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
