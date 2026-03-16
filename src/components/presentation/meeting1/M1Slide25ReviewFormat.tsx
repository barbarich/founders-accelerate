export default function M1Slide25ReviewFormat() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Первая встреча</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">
        Знакомство: питч идей
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[56px]">
        5 участников × 5 минут = 25 минут
      </p>

      <div className="flex gap-[32px] max-w-[1100px]">
        {/* Pitch block */}
        <div className="flex-1 bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[14px] p-[36px]">
          <div className="flex items-center gap-[12px] mb-[24px]">
            <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] px-[16px] py-[8px] rounded font-bold">2 мин</span>
            <h3 className="text-[28px] font-bold text-[hsl(var(--slide-text))]">Питч</h3>
          </div>
          <div className="space-y-[16px]">
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">→ Кто вы и чем занимаетесь</p>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">→ Что за продукт / идея</p>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">→ Какую проблему решает и для кого</p>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">→ На какой стадии сейчас</p>
          </div>
        </div>

        {/* Q&A block */}
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[14px] p-[36px]">
          <div className="flex items-center gap-[12px] mb-[24px]">
            <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] px-[16px] py-[8px] rounded font-bold">3 мин</span>
            <h3 className="text-[28px] font-bold text-[hsl(var(--slide-text))]">Вопросы и фидбек</h3>
          </div>
          <div className="space-y-[16px]">
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">→ Вопросы от группы и ментора</p>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">→ Что сильно, где слабое место</p>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">→ Что проверить в первую очередь</p>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">→ Конкретные рекомендации</p>
          </div>
        </div>
      </div>
    </div>
  );
}
