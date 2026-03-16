import { useIsMobile } from "@/hooks/use-mobile";

export default function M1Slide19Formula() {
  const examples = [
    { bad: '"Mikey — это AI-приложение для знакомств."', good: '"Mikey подбирает партнёра по ценностям через AI-диалог — без свайпов, без фейков."' },
    { bad: '"MetaMinder — платформа для обучения."', good: '"MetaMinder создаёт обучение для сотрудников за 5 минут с помощью AI."' },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Позиционирование</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Формула позиционирования
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] p-[12px] mb-[14px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.6]">
            <span className="text-[hsl(var(--slide-gold))] font-semibold">[Продукт]</span> помогает <span className="text-[hsl(var(--slide-gold))] font-semibold">[кому]</span>{" "}
            <span className="text-[hsl(var(--slide-gold))] font-semibold">[решить проблему]</span>,{" "}
            <span className="text-[hsl(var(--slide-gold))] font-semibold">[чем отличается]</span>.
          </p>
        </div>
        <div className="space-y-[10px]">
          {examples.map((e, i) => (
            <div key={i} className="space-y-[4px]">
              <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] p-[10px]">
                <span className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-medium">❌ Плохо</span>
                <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[4px] leading-[1.5]">{e.bad}</p>
              </div>
              <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] p-[10px]">
                <span className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">✅ Хорошо</span>
                <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] mt-[4px] leading-[1.5]">{e.good}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Позиционирование</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px]">Формула позиционирования</h2>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] p-[40px] mb-[48px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5]">
          <span className="text-[hsl(var(--slide-gold))] font-semibold">[Продукт]</span> помогает <span className="text-[hsl(var(--slide-gold))] font-semibold">[кому конкретно]</span>{" "}
          <span className="text-[hsl(var(--slide-gold))] font-semibold">[решить проблему / получить результат]</span>,{" "}
          <span className="text-[hsl(var(--slide-gold))] font-semibold">[чем отличается от альтернатив]</span>.
        </p>
      </div>
      <div className="space-y-[32px]">
        {[
          { bad: '"Mikey — это AI-приложение для знакомств."', good: '"Mikey подбирает партнёра по ценностям через AI-диалог — без свайпов, без фейков, полностью анонимно."' },
          { bad: '"MetaMinder — платформа для обучения."', good: '"MetaMinder позволяет создать обучение для сотрудников за 5 минут с помощью AI — без методологов, без бюджета на разработку."' },
        ].map((e, i) => (
          <div key={i} className="flex gap-[32px]">
            <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[28px]">
              <span className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-medium">❌ Плохо</span>
              <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[12px] leading-[1.5]">{e.bad}</p>
            </div>
            <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] p-[28px]">
              <span className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">✅ Хорошо</span>
              <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] mt-[12px] leading-[1.5]">{e.good}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
