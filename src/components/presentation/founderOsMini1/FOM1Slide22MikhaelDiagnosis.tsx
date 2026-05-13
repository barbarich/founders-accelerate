import FOM1SlideBase from "./FOM1SlideBase";

export default function FOM1Slide22MikhaelDiagnosis() {
  return (
    <FOM1SlideBase
      slide={23}
      eyebrow="Домашнее задание · к среде"
      title="Одно задание · для Михаэля и Маргариты"
      subtitle="Сделать всё, что разобрали сегодня — на своём проекте"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] md:gap-[24px] max-w-[1800px] text-[13px] md:text-[20px] leading-[1.4]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[16px] md:p-[26px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">1 · ICP за 24 часа</p>
          <p className="mt-[8px] text-[hsl(var(--slide-text))]">
            Сузить аудиторию до <b>одного</b> сегмента. Не «SMB» и не «founders» — а конкретный человек: роль, размер компании, в какой момент у него болит.
          </p>
          <p className="mt-[6px] text-[hsl(var(--slide-text-muted))] text-[12px] md:text-[17px]">
            Михаэль · один вертикал для AIRecom · Маргарита · один сценарий ChampionVibes
          </p>
        </div>

        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[16px] md:p-[26px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">2 · Ресёрч конкурентов</p>
          <p className="mt-[8px] text-[hsl(var(--slide-text))]">
            Прогнать Deep Research промпт в Perplexity. Собрать <b>10–15 конкурентов</b> по 3 уровням, проверить трафик в SimilarWeb, выписать <b>3 негативных отзыва</b> на каждого из топ-5.
          </p>
        </div>

        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[16px] md:p-[26px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">3 · 5–7 интервью по Mom Test</p>
          <p className="mt-[8px] text-[hsl(var(--slide-text))]">
            Не питчим — слушаем. Считаем pass/fail сигналы: сами поднимают боль, называют костыли, считают потери. Цель — <b>7 из 10</b> подтверждают одну и ту же проблему.
          </p>
        </div>

        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[16px] md:p-[26px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">4 · Позиционирование</p>
          <p className="mt-[8px] text-[hsl(var(--slide-text))]">
            Собрать одну строку по формуле <b>[Кто] получает [результат] за [время] — без [боли]</b>. Сделать <b>3 формулировки</b> и прогнать через <b>4 теста</b>: ясность, конкретика, желание, отстройка.
          </p>
        </div>
      </div>

      <div className="mt-[14px] md:mt-[22px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[14px] max-w-[1800px] text-[13px] md:text-[20px] leading-[1.45]">
        <p className="text-[hsl(var(--slide-gold))] font-semibold">Что приносим в среду</p>
        <p className="text-[hsl(var(--slide-text))]">
          Один ICP · карта 10–15 конкурентов с дырами · ≥ 5 интервью с отметками pass/fail · одно позиционирование, прошедшее 4 теста. Всё на 1–2 страницах.
        </p>
      </div>
    </FOM1SlideBase>
  );
}

