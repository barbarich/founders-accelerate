import { useIsMobile } from "@/hooks/use-mobile";

const decks = [
  {
    name: "Airbnb",
    tag: "2008 · $600K SEED",
    body: "10 слайдов без единого лишнего слова: проблема → решение → рынок → traction. Показывает, как рассказать историю продукта простым языком, без жаргона и лишних графиков.",
    url: "https://www.slideshare.net/PitchDeckExamples/original-airbnb-pitch-deck-2008",
    label: "slideshare.net/PitchDeckExamples/original-airbnb-pitch-deck-2008",
  },
  {
    name: "Front",
    tag: "2016 · $10M SERIES A",
    body: "Опубликован фаундером Mathilde Collin вместе с честным разбором — что инвесторы хвалили и что стоило добавить. Хороший ориентир для SaaS/B2B продукта с реальными цифрами MRR.",
    url: "https://collinmathilde.medium.com/front-series-a-deck-f2e2775a419b",
    label: "collinmathilde.medium.com/front-series-a-deck",
  },
  {
    name: "ElevenLabs",
    tag: "2023 PRE-SEED → 2026 $11B",
    body: "Свежий и живой пример: voice AI, тот же самый пре-сид дек привёл компанию к $180M в январе 2025 и $500M при $11B в феврале 2026. Показан их оригинальный 11-слайдовый пре-сид дек — деки поздних раундов нигде не публикуют.",
    url: "https://bestpitchdeck.com/eleven-labs",
    label: "bestpitchdeck.com/eleven-labs",
  },
];

export default function L15SlidePitchDeckExamples() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Живые примеры — не шаблон, а реальные раунды
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Три дека, на которые стоит равняться
        </h2>
        <div className="space-y-[10px]">
          {decks.map((d) => (
            <div key={d.name} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[10px] bg-[hsl(var(--slide-gold)/0.04)]">
              <div className="flex items-baseline gap-[8px] mb-[3px]">
                <p className="text-[13px] font-bold text-[hsl(var(--slide-text))]">{d.name}</p>
                <p className="text-[8px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))]">{d.tag}</p>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[5px]">{d.body}</p>
              <a href={d.url} target="_blank" rel="noopener noreferrer" className="text-[9px] text-[hsl(var(--slide-gold))] underline underline-offset-2 break-all">
                {d.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Живые примеры — не шаблон, а реальные раунды
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[30px] tracking-[-0.01em]">
        Три дека, на которые стоит равняться
      </h2>
      <div className="grid grid-cols-3 gap-[22px] max-w-[1900px]">
        {decks.map((d) => (
          <div key={d.name} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[24px] py-[22px] bg-[hsl(var(--slide-gold)/0.04)]">
            <div className="flex flex-col gap-[2px] mb-[8px]">
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{d.name}</p>
              <p className="text-[12px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))]">{d.tag}</p>
            </div>
            <p className="text-[14.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[12px]">{d.body}</p>
            <a href={d.url} target="_blank" rel="noopener noreferrer" className="text-[12.5px] text-[hsl(var(--slide-gold))] underline underline-offset-2 break-all">
              {d.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
