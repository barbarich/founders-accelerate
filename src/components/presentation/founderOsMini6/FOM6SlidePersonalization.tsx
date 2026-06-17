import { useIsMobile } from "@/hooks/use-mobile";

// FOM6-копия M11Slide09TriggerOutreach, переосмысленная под философию Михаэля:
// НЕ «жди идеального триггера» (его сложно найти вживую), а «пиши в объёме, но
// в каждое касание вшивай живую деталь». Триггеры остаются — но как банк готовых
// деталей для персонализации, а не как условие «без сигнала не пишем».
const triggers = [
  { name: "Свежий раунд / рост", source: "Crunchbase / TechCrunch / их LinkedIn", angle: "«Видел, вы подняли раунд. Обычно в этот момент команды масштабируют X — мы это закрываем.»" },
  { name: "Найм sales / eng", source: "LinkedIn jobs · их careers page", angle: "«Видел, вы нанимаете VP of Sales. Новые VP в первые 90 дней внедряют Y — покажу, как мы это упрощаем.»" },
  { name: "Смена стека", source: "BuiltWith / описания вакансий", angle: "«Заметил, вы переехали на Y. Мы интегрируемся с Y и закрываем gap, что остался от X.»" },
  { name: "Их роль / отдел", source: "Их профиль в LinkedIn", angle: "«Вы отвечаете за [направление] — большинство в этой роли упирается в [боль]. У нас quick win за 2 недели.»" },
  { name: "Недавний пост / новость", source: "Их посты в LinkedIn / упоминания", angle: "«Ваш пост про [тему] — в точку. Мы помогли [похожей компании] решить это за 30 дней.»" },
];

const sequence = [
  { day: "Day 0", what: "LinkedIn DM / email — 3 строки, 1 деталь про него, 1 вопрос, без ссылки", goal: "Получить «да, интересно»" },
  { day: "Day 3", what: "Follow-up по второму каналу если тишина — короче, та же деталь", goal: "Дублируем канал" },
  { day: "Day 7", what: "Voice note или Loom 90 сек — персональное видео под их кейс", goal: "Stand out из inbox" },
  { day: "Day 14", what: "Финальный bump через champion'а, если найден — gentle ask об intro", goal: "Multithreading" },
];

export default function FOM6SlidePersonalization() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[12px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Персонализация в объёме
        </p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Пишешь многим — <span className="text-[hsl(var(--slide-gold))]">но в каждое касание живая деталь</span>
        </h2>
        <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[5px]">
          Ждать идеального повода = не написать никому. Шаблон — это каркас, в который вшиваешь 1 конкретную деталь. Банк деталей:
        </p>
        <div className="space-y-[2px] mb-[5px]">
          {triggers.map((t) => (
            <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[3px] px-[5px] py-[2px]">
              <div className="flex items-baseline justify-between gap-[3px]">
                <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))]">{t.name}</p>
                <p className="text-[6px] text-[hsl(var(--slide-text-muted))]">{t.source}</p>
              </div>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4]">"{t.angle}"</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[3px] px-[5px] py-[2px]">
          <p className="text-[7px] font-bold text-[hsl(var(--slide-gold))] uppercase mb-[1px]">4-touch sequence (14 дней)</p>
          {sequence.map((s) => (
            <p key={s.day} className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))]">{s.day}:</span> {s.what}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Персонализация в объёме
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px] tracking-[-0.02em]">
        Пишешь многим — <span className="text-[hsl(var(--slide-gold))]">но в каждое касание вшиваешь живую деталь</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[18px] max-w-[1700px] leading-[1.45]">
        Ждать идеального повода = не написать никому. Пишешь по всему списку, но шаблон — это каркас: в каждое сообщение вшиваешь 1 конкретную деталь про человека. Вот что годится как деталь:
      </p>
      <div className="grid grid-cols-1 gap-[7px] mb-[14px] max-w-[1700px]">
        {triggers.map((t) => (
          <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[20px] py-[7px]">
            <div className="flex items-baseline justify-between gap-[14px] mb-[2px]">
              <p className="text-[17px] font-bold text-[hsl(var(--slide-gold))]">{t.name}</p>
              <p className="text-[12px] text-[hsl(var(--slide-text-muted))]">источник: {t.source}</p>
            </div>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] italic leading-[1.45]">"{t.angle}"</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[24px] py-[12px] max-w-[1700px]">
        <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[6px]">4-touch sequence по списку (14 дней)</p>
        <div className="grid grid-cols-4 gap-[14px]">
          {sequence.map((s) => (
            <div key={s.day}>
              <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))] mb-[3px]">{s.day}</p>
              <p className="text-[13px] text-[hsl(var(--slide-text))] leading-[1.4] mb-[3px]">{s.what}</p>
              <p className="text-[11px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4]">цель: {s.goal}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
