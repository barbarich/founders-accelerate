import { useIsMobile } from "@/hooks/use-mobile";

const slides = [
  {
    name: "Problem",
    tag: "ГЛАВНОЕ — КОНКРЕТИКА",
    body: "Назови конкретного человека, конкретную боль, конкретную цену вопроса. Не «отдел продаж теряет время», а «менеджер теряет 4 часа в неделю на поиск данных в Slack и CRM — это $50K в год». Без цифры — это не проблема, а жалоба.",
  },
  {
    name: "Traction",
    tag: "ГЛАВНОЕ — ЦИФРЫ, НЕ СЛОВА",
    body: "«Выросли в 3 раза за 6 месяцев» бьёт сильнее, чем «уверенный рост». На pre-seed traction почти нет — это нормально, тогда упор на Problem, Solution и Team. Округлять и приукрашивать не стоит — на звонке проверят.",
  },
  {
    name: "Competition",
    tag: "ГЛАВНОЕ — ОТЛИЧИЕ, НЕ ПРЕВОСХОДСТВО",
    body: "2×2 матрица показывает твой угол зрения, а не «мы лучше всех». «У нас нет конкурентов» — красный флаг для инвестора: либо не изучил рынок, либо рынка нет вообще.",
  },
  {
    name: "Team",
    tag: "ГЛАВНОЕ — ДОСТИЖЕНИЯ, НЕ ДОЛЖНОСТИ",
    body: "Инвестор вкладывается в людей, не в идею — особенно на pre-seed, где кроме команды показывать почти нечего. Что ты построил или продал раньше, а не «ex-Google» строчкой. Максимум 3 человека на слайде, остальные — в приложение.",
  },
];

export default function L15SlidePitchDeckEmphasis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Не все 10 слайдов равны
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          На чём инвестор задерживает взгляд <span className="text-[hsl(var(--slide-gold))]">дольше всего</span>
        </h2>
        <div className="grid grid-cols-2 gap-[5px]">
          {slides.map((s) => (
            <div key={s.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[6px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{s.name}</p>
              <p className="text-[6.5px] uppercase tracking-[0.08em] text-[hsl(var(--slide-gold))] mb-[3px]">{s.tag}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Не все 10 слайдов равны
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.02em]">
        На чём инвестор задерживает взгляд <span className="text-[hsl(var(--slide-gold))]">дольше всего</span>
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1900px]">
        {slides.map((s) => (
          <div key={s.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[18px]">
            <div className="flex items-baseline gap-[14px] mb-[6px]">
              <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{s.name}</p>
              <p className="text-[11px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))]">{s.tag}</p>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
