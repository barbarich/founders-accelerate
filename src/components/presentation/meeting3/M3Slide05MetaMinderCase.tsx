import { useIsMobile } from "@/hooks/use-mobile";

export default function M3Slide05MetaMinderCase() {
  const isMobile = useIsMobile();

  const steps = [
    { icon: "📸", label: "Шаг 1", title: "Перенёс экраны в Lovable", text: "Все экраны реального продукта — скриншоты в AI, воссоздал 1 в 1" },
    { icon: "🔄", label: "Шаг 2", title: "Итерировал через AI", text: "Новые фичи + интерфейс — высокое качество, быстрые итерации" },
    { icon: "👨‍💻", label: "Шаг 3", title: "Передавал разработчикам", text: "Lovable генерит код → экспорт → разработчик доводит до прода" },
    { icon: "⚡", label: "Сейчас", title: "Claude Code", text: "Доработка продукта прямо в коде, без промежуточных шагов" },
  ];

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Кейс</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Как я убрал продакта и дизайнера
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[16px] leading-[1.5]">
          MetaMinder: один фаундер = целая продуктовая команда
        </p>
        <div className="space-y-[10px]">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-[10px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <span className="text-[16px] shrink-0">{s.icon}</span>
              <div>
                <div className="flex items-center gap-[6px]">
                  <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[6px] py-[1px] rounded">{s.label}</span>
                  <h3 className="text-[12px] font-semibold text-[hsl(var(--slide-text))]">{s.title}</h3>
                </div>
                <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[2px]">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Кейс MetaMinder</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
        Как я убрал продакта и дизайнера
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[48px]">
        Один фаундер = целая продуктовая команда
      </p>
      <div className="flex gap-[32px]">
        {steps.map((s, i) => (
          <div key={i} className="flex-1 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[hsl(var(--slide-gold)/0.4)] to-transparent" />
            <div className="pt-[28px]">
              <span className="text-[40px] block mb-[16px]">{s.icon}</span>
              <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[10px] py-[4px] rounded inline-block mb-[12px]">{s.label}</span>
              <h3 className="text-[24px] font-semibold text-[hsl(var(--slide-text))] mb-[12px]">{s.title}</h3>
              <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
