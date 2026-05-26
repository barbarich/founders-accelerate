import { useIsMobile } from "@/hooks/use-mobile";

export default function L2Slide04CompetitorLevels() {
  const levels = [
    { icon: "⚔️", title: "Прямые", text: "Делают то же самое для той же аудитории" },
    { icon: "🔄", title: "Косвенные", text: "Решают ту же проблему другим способом" },
    { icon: "📋", title: "Замена", text: 'Что клиент делает СЕЙЧАС вместо вашего продукта (Excel, стажёр, ручной процесс)' },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Конкурентный анализ</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Ваши конкуренты — это не те кто делает то же самое
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[16px]">Три уровня конкурентов</p>
        <div className="space-y-[8px] mb-[14px]">
          {levels.map((l, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px]">
              <div className="flex items-center gap-[8px] mb-[4px]">
                <span className="text-[18px]">{l.icon}</span>
                <h3 className="text-[14px] font-semibold text-[hsl(var(--slide-text))]">{l.title}</h3>
              </div>
              <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{l.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[12px] py-[10px]">
          <p className="text-[10px] text-[hsl(var(--slide-gold))] font-medium leading-[1.6]">
            💡 Конкурент Netflix — сон. Думайте шире.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Конкурентный анализ</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px]">
        Ваши конкуренты — это не те<br />кто делает то же самое
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[56px]">Три уровня конкурентов</p>
      <div className="flex gap-[40px] mb-[56px]">
        {levels.map((l, i) => (
          <div key={i} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[40px]">
            <span className="text-[40px]">{l.icon}</span>
            <h3 className="text-[28px] font-semibold text-[hsl(var(--slide-text))] mt-[20px] mb-[12px]">{l.title}</h3>
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{l.text}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[32px] py-[20px]">
        <p className="text-[20px] text-[hsl(var(--slide-gold))] font-medium leading-[1.6]">
          💡 В RunEverywhere наш конкурент — не другое беговое приложение. Это бар и YouTube. Потому что вечером человек выбирает: выйти на пробежку или остаться на диване. Конкурент Netflix — сон. Думайте шире.
        </p>
      </div>
    </div>
  );
}
