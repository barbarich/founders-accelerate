import FOM1SlideBase from "./FOM1SlideBase";

export default function FOM1Slide24MargaritaDiagnosis() {
  return (
    <FOM1SlideBase
      slide={24}
      eyebrow="Применение · участник 2"
      title="Маргарита · ChampionVibes AI"
      subtitle="Диагностика и точка фокуса"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] md:gap-[20px] max-w-[1800px] text-[12px] md:text-[22px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[14px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Где сейчас</p>
          <ul className="mt-[6px] text-[hsl(var(--slide-text))] space-y-[3px]">
            <li>· Прототип, full-time 20+ часов, есть команда и бюджет</li>
            <li>· 6 направлений в одном продукте: AI safety + digital resilience + cognitive performance + energy + privacy + gamification</li>
            <li>· Монетизация заявлена как «реклама»</li>
          </ul>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border rounded-[14px] p-[14px] md:p-[24px]" style={{ borderColor: "hsl(0 70% 60% / 0.4)" }}>
          <p className="uppercase tracking-[0.2em] text-[10px] md:text-[14px]" style={{ color: "hsl(0 70% 60%)" }}>Что не работает</p>
          <ul className="mt-[6px] text-[hsl(var(--slide-text))] space-y-[3px]">
            <li>· 6 value props = 0 value props. Невозможно продать, объяснить, построить.</li>
            <li>· Монетизация «реклама» для B2B (клиент = company) — несовместимо. Это либо ошибка, либо отсутствие решения.</li>
            <li>· Конкуренты не Calm и не Headspace — а Notion + ChatGPT + бесплатный промпт «дай мне план снять стресс», который HR уже использует</li>
          </ul>
        </div>
      </div>
      <div className="mt-[10px] md:mt-[16px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] max-w-[1800px] text-[12px] md:text-[22px]">
        <p className="text-[hsl(var(--slide-gold))] font-semibold">Гипотеза на эту неделю</p>
        <p className="text-[hsl(var(--slide-text))]">
          Kill 5 из 6 направлений. Один use case. Моя ставка: «AI safety &amp; cognitive load for hybrid teams» — наименее crowded из шести, наиболее B2B-продаваемый.
        </p>
        <p className="mt-[4px] text-[hsl(var(--slide-text-muted))]">
          <span className="text-[hsl(var(--slide-text))] font-semibold">Reframe:</span> MVP — это после LOI, не до. Пока не нашёл одного human, который скажет «я бы заплатил» — не строим.
        </p>
      </div>
    </FOM1SlideBase>
  );
}
