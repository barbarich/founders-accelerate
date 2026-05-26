import { useIsMobile } from "@/hooks/use-mobile";

export default function L3Slide05PresentResults() {
  const points = [
    { emoji: "🔍", label: "Конкуренты", hint: "Кого нашли, какие цены, где слабые места" },
    { emoji: "🎙️", label: "Интервью", hint: "Что узнали, что удивило, подтвердилась ли боль" },
    { emoji: "💬", label: "Позиционирование", hint: "Ваше предложение в одном предложении" },
    { emoji: "❓", label: "Главный вопрос", hint: "С чем нужна помощь, что застопорилось" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Разбор домашнего задания</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Каждый презентует результаты
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[12px]">
          5 минут на человека. Рассказывайте по пунктам:
        </p>
        <div className="space-y-[6px] mb-[10px]">
          {points.map((p, i) => (
            <div key={i} className="flex items-center gap-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 font-bold">{i + 1}</span>
              <span className="text-[16px] shrink-0">{p.emoji}</span>
              <span className="text-[11px] font-semibold text-[hsl(var(--slide-text))]">{p.label}</span>
              <span className="text-[9px] text-[hsl(var(--slide-text-muted))]">— {p.hint}</span>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] px-[12px] py-[10px] mb-[8px]">
          <p className="text-[12px] text-[hsl(var(--slide-text))] font-semibold text-center">
            "Понятно ли с первого раза, что это и для кого?"
          </p>
        </div>
        <div className="flex items-center gap-[6px]">
          <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[8px] py-[4px] rounded">5 мин × 5 = 25 мин</span>
          <span className="text-[9px] text-[hsl(var(--slide-text-muted))]">Группа даёт обратную связь после каждого</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Разбор домашнего задания</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">Каждый презентует результаты</h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[36px]">5 минут на человека. Рассказывайте по пунктам:</p>
      <div className="flex gap-[32px] max-w-[1100px] mb-[32px]">
        <div className="flex-1 flex flex-col gap-[14px]">
          {points.slice(0, 2).map((p, i) => (
            <div key={i} className="flex items-start gap-[14px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[16px]">
              <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] w-[30px] h-[30px] rounded-full flex items-center justify-center shrink-0 font-bold">{i + 1}</span>
              <span className="text-[28px] shrink-0">{p.emoji}</span>
              <div>
                <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))] leading-[1.3]">{p.label}</p>
                <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.hint}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-[14px]">
          {points.slice(2).map((p, i) => (
            <div key={i} className="flex items-start gap-[14px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[16px]">
              <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] w-[30px] h-[30px] rounded-full flex items-center justify-center shrink-0 font-bold">{i + 3}</span>
              <span className="text-[28px] shrink-0">{p.emoji}</span>
              <div>
                <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))] leading-[1.3]">{p.label}</p>
                <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.hint}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[16px] px-[40px] py-[24px] mb-[20px] max-w-[800px]">
        <p className="text-[26px] text-[hsl(var(--slide-text))] font-semibold text-center">
          "Понятно ли с первого раза, что это и для кого?"
        </p>
      </div>
      <div className="flex items-center gap-[12px]">
        <span className="font-mono text-[17px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[6px] rounded">5 мин × 5 человек = 25 мин</span>
        <span className="text-[18px] text-[hsl(var(--slide-text-muted))]">Группа даёт обратную связь после каждого выступления</span>
      </div>
    </div>
  );
}
