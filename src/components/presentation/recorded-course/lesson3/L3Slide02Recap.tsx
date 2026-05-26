import { useIsMobile } from "@/hooks/use-mobile";

export default function L3Slide02Recap() {
  const items = [
    { num: "01", emoji: "🔍", title: "Конкурентный анализ", text: "Три уровня конкурентов, инструменты, отзывы, teardown" },
    { num: "02", emoji: "👤", title: "Целевая аудитория", text: "Customer-интервью, гипотезы, кто заплатит" },
    { num: "03", emoji: "🎯", title: "Первое позиционирование", text: "Формула, примеры, три теста" },
    { num: "→", emoji: "💡", title: "Сегодня ключевой вопрос", text: "За что именно клиент заплатит? Спойлер: не за ваш продукт" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Прошлая неделя</p>
        <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[20px]">
          Что мы уже сделали
        </h2>
        <div className="space-y-[12px]">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-[10px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[10px]">
              <span className="text-[18px] shrink-0">{item.emoji}</span>
              <div>
                <h3 className="text-[13px] font-semibold text-[hsl(var(--slide-text))]">{item.title}</h3>
                <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Прошлая неделя</p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[56px]">
        Что мы уже сделали
      </h2>
      <div className="flex gap-[48px]">
        {items.map((item, i) => (
          <div key={i} className="flex-1 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[hsl(var(--slide-gold)/0.4)] to-transparent" />
            <div className="pt-[36px]">
              <div className="flex items-center gap-[12px] mb-[20px]">
                <span className="font-mono text-[16px] text-[hsl(var(--slide-gold)/0.5)]">{item.num}</span>
                <span className="text-[36px]">{item.emoji}</span>
              </div>
              <h3 className="text-[28px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">{item.title}</h3>
              <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
