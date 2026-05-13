import FOM1SlideBase from "./FOM1SlideBase";

export default function FOM1Slide24MargaritaDiagnosis() {
  return (
    <FOM1SlideBase
      slide={25}
      eyebrow="Применение · участник 2"
      title="Маргарита · ChampionVibes AI"
      subtitle="Диагностика и точка фокуса"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] md:gap-[20px] max-w-[1800px] text-[12px] md:text-[22px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[14px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Что есть</p>
          <ul className="mt-[6px] text-[hsl(var(--slide-text))] space-y-[3px]">
            <li>· Идея: privacy-first, gamified, avatar-driven продукт</li>
            <li>· Сразу 4 темы в одной обёртке: AI safety, digital resilience, cognitive performance, energy optimization</li>
            <li>· Стадия и аудитория пока не зафиксированы — это и есть задача недели</li>
          </ul>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border rounded-[14px] p-[14px] md:p-[24px]" style={{ borderColor: "hsl(0 70% 60% / 0.4)" }}>
          <p className="uppercase tracking-[0.2em] text-[10px] md:text-[14px]" style={{ color: "hsl(0 70% 60%)" }}>Где риск</p>
          <ul className="mt-[6px] text-[hsl(var(--slide-text))] space-y-[3px]">
            <li>· 4 темы в одном продукте = 4 разных ICP, 4 разных лендинга, 4 разных конкурента. На неделе так не проверить.</li>
            <li>· Без выбранного ICP невозможно сформулировать вопрос для интервью — каждому собеседнику придётся объяснять «что это вообще»</li>
            <li>· Avatar + gamification — это форма. Сначала важно понять, какую боль она закрывает и у кого</li>
          </ul>
        </div>
      </div>
      <div className="mt-[10px] md:mt-[16px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] max-w-[1800px] text-[12px] md:text-[22px]">
        <p className="text-[hsl(var(--slide-gold))] font-semibold">Гипотеза на эту неделю</p>
        <p className="text-[hsl(var(--slide-text))]">
          Выбрать ОДНУ из четырёх тем как точку входа и ОДНУ конкретную аудиторию, у которой эта боль уже осознана.
          Варианты для обсуждения: <span className="font-semibold">cognitive performance</span> для founders / knowledge workers,
          <span className="font-semibold"> digital resilience</span> для подростков и их родителей,
          либо <span className="font-semibold">AI safety</span> для семей с детьми, использующими ChatGPT.
          Остальные темы не выбрасываем — ставим в backlog как «фичи v2».
        </p>
        <p className="mt-[4px] text-[hsl(var(--slide-text-muted))]">
          <span className="text-[hsl(var(--slide-text))] font-semibold">Задача к С2:</span> принести одну пару «тема × аудитория» и 5 интервью с этой аудиторией — чтобы проверить, есть ли там реальная боль, или она пока только в нашей голове.
        </p>
      </div>
    </FOM1SlideBase>
  );
}
