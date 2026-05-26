import { useIsMobile } from "@/hooks/use-mobile";

const examples = [
  {
    brand: "Notion",
    aha: "«О, я могу собрать любой workflow за 5 минут — без программирования»",
    when: "Когда добавил первый template и увидел его на странице",
    why: "Templates показывают результат до того, как ты его построил.",
  },
  {
    brand: "Canva",
    aha: "«О, я могу сделать профессиональный дизайн без дизайнера»",
    when: "Когда drag-and-drop'нул первый элемент и увидел красивый результат",
    why: "Drag-drop UX делает дизайн ощущается «легко», даже до первого экспорта.",
  },
  {
    brand: "Duolingo",
    aha: "«О, я уже могу понимать слова на новом языке»",
    when: "После первого мини-урока (5 слов · 2 минуты)",
    why: "Мини-урок даёт реальный прогресс быстрее, чем приложение учит тебя UI.",
  },
];

export default function L7SlideAhaExamples() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Что такое Aha — на 3 примерах
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          «О, я понял зачем мне это»
        </h2>
        <div className="space-y-[8px]">
          {examples.map((e) => (
            <div key={e.brand} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[12px] py-[8px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[13px] font-bold text-[hsl(var(--slide-text))] mb-[3px]">{e.brand}</p>
              <p className="text-[10px] italic text-[hsl(var(--slide-gold))] leading-[1.4] mb-[3px]">{e.aha}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[2px]"><span className="font-semibold">Когда:</span> {e.when}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{e.why}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Что такое Aha — на 3 примерах
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        «О, я понял зачем мне это»
      </h2>
      <div className="grid grid-cols-3 gap-[24px] max-w-[1900px]">
        {examples.map((e) => (
          <div key={e.brand} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[26px] py-[22px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] mb-[12px]">{e.brand}</p>
            <p className="text-[18px] italic text-[hsl(var(--slide-gold))] leading-[1.4] mb-[14px]">{e.aha}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[8px]"><span className="font-semibold text-[hsl(var(--slide-text))]">Когда:</span> {e.when}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{e.why}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
