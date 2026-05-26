import { useIsMobile } from "@/hooks/use-mobile";

export default function L1Slide29NextMeeting() {
  const items = [
    { emoji: "🔍", text: "Конкуренты — кто они, чем отличаетесь, слабые места" },
    { emoji: "🎙️", text: "Интервью — что узнали, какие боли подтвердились" },
    { emoji: "💬", text: "Позиционирование — рабочая версия в одном предложении" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">На следующей встрече</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">Каждый расскажет</h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[18px]">
          Не нужно быть идеальным — нужно попробовать
        </p>
        <div className="space-y-[10px] mb-[18px]">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-[10px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[hsl(var(--slide-gold)/0.15)] border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0">
                <span className="text-[14px]">{item.emoji}</span>
              </div>
              <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[14px] py-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))]">
            🙌 Даже если не всё — приходите с тем, что есть. Разберём вместе.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">На следующей встрече</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">Каждый расскажет</h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[48px]">Не нужно быть идеальным — нужно попробовать и принести результат</p>
      <div className="space-y-[24px] max-w-[1000px] mb-[48px]">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-[20px]">
            <div className="w-[40px] h-[40px] rounded-full bg-[hsl(var(--slide-gold)/0.15)] border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0">
              <span className="text-[22px]">{item.emoji}</span>
            </div>
            <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[32px] py-[20px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))]">🙌 Даже если получилось не всё — приходите с тем, что есть. Разберём вместе и докрутим.</p>
      </div>
    </div>
  );
}
