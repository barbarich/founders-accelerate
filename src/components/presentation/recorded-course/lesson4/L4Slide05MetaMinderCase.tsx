import { useIsMobile } from "@/hooks/use-mobile";

export default function L4Slide05MetaMinderCase() {
  const isMobile = useIsMobile();

  const steps = [
    { icon: "📊", label: "1", title: "Рынок", text: "Изучил конкурентов, взял лучшее у каждого", loop: false },
    { icon: "🧩", label: "2", title: "Прототип v1", text: "Первые экраны собрал в Claude", loop: false },
    { icon: "🔁", label: "3", title: "Показал → доработал", text: "Читателям и людям из custdev - несколько витков", loop: true },
    { icon: "✅", label: "4", title: "Пошёл сигнал", text: "«Пользовался бы», «а сколько стоит?»", loop: false },
    { icon: "🚀", label: "5", title: "Только теперь - в разработку", text: "Отдал команде или делает сам", loop: false },
  ];

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Пример · Bookswap</p>
        <h2 className="font-display text-[23px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Bookswap: собран за несколько витков
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[14px] leading-[1.5]">
          Сервис обмена книгами. Не один заход, а цикл: собрал - показал - доработал.
        </p>
        <div className="space-y-[8px]">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex items-start gap-[10px] rounded-[8px] px-[10px] py-[8px] border ${
                s.loop
                  ? "bg-[hsl(var(--slide-gold)/0.08)] border-[hsl(var(--slide-gold)/0.35)]"
                  : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"
              }`}
            >
              <span className="text-[16px] shrink-0">{s.icon}</span>
              <div>
                <div className="flex items-center gap-[6px]">
                  <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[6px] py-[1px] rounded">{s.label}</span>
                  <h3 className="text-[12px] font-semibold text-[hsl(var(--slide-text))]">{s.title}</h3>
                  {s.loop && <span className="text-[8px] text-[hsl(var(--slide-gold))] font-semibold">↺ петля</span>}
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
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Пример · Bookswap</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
        Bookswap: собран за несколько витков
      </h2>
      <p className="text-[23px] text-[hsl(var(--slide-text-muted))] mb-[44px]">
        Сервис обмена книгами. Не один заход, а цикл: собрал - показал - доработал - и снова.
      </p>
      <div className="flex gap-[16px] items-stretch max-w-[1300px]">
        {steps.map((s, i) => (
          <div key={i} className="flex items-stretch gap-[16px] flex-1">
            <div
              className={`flex-1 rounded-[16px] p-[24px] border ${
                s.loop
                  ? "bg-[hsl(var(--slide-gold)/0.08)] border-[hsl(var(--slide-gold)/0.35)]"
                  : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"
              }`}
            >
              <span className="text-[36px] block mb-[12px]">{s.icon}</span>
              <div className="flex items-center gap-[8px] mb-[10px]">
                <span className="font-mono text-[13px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] px-[8px] py-[3px] rounded">{s.label}</span>
                {s.loop && <span className="text-[12px] text-[hsl(var(--slide-gold))] font-semibold">↺ петля</span>}
              </div>
              <h3 className="text-[20px] font-semibold text-[hsl(var(--slide-text))] mb-[8px] leading-[1.2]">{s.title}</h3>
              <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.text}</p>
            </div>
            {i < steps.length - 1 && (
              <span className="self-center text-[hsl(var(--slide-gold))] text-[22px] shrink-0">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
