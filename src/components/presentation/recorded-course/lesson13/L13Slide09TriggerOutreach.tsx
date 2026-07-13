import { useIsMobile } from "@/hooks/use-mobile";

const triggers = [
  { name: "Recent funding", source: "Crunchbase / TechCrunch · последние 90 дней", angle: "«Видел вы подняли Series A. Обычно в этот момент команды масштабируют X — мы решаем это.»" },
  { name: "Hiring sales/eng", source: "LinkedIn jobs · их careers page", angle: "«Видел вы нанимаете VP of Sales. Большинство новых VP в первые 90 дней внедряют Y. Хочу показать как мы это упрощаем.»" },
  { name: "Tech-stack change", source: "BuiltWith / job descriptions · их инженеры в LinkedIn", angle: "«Заметил вы переехали с X на Y. Мы интегрируемся с Y и закрываем gap который остался от X.»" },
  { name: "New exec", source: "LinkedIn new-job posts · их LinkedIn announcements", angle: "«Поздравляю с новой ролью. В первые 90 дней многие новые [роль] фокусируются на X — наш продукт даёт quick win за 2 недели.»" },
  { name: "Расширение в регион", source: "Их посты в LinkedIn / news mentions", angle: "«Видел вы открываете офис в [region]. Мы помогли [похожая компания] решить [конкретную regional проблему] за 30 дней.»" },
];

const sequence = [
  { day: "Day 0", what: "LinkedIn DM на trigger — 3 строки, 1 вопрос, без ссылки", goal: "Получить «да, интересно»" },
  { day: "Day 3", what: "Email follow-up если нет ответа в LinkedIn — короче, тот же trigger", goal: "Дублируем канал" },
  { day: "Day 7", what: "Voice note или Loom 90 сек — персональное видео под их кейс", goal: "Stand out из inbox" },
  { day: "Day 14", what: "Финальный bump через champion'а если найден в company — gentle ask об intro", goal: "Multithreading" },
];

export default function L13Slide09TriggerOutreach() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[12px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Trigger-based outreach
        </p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Не «вы наш ICP» — <span className="text-[hsl(var(--slide-gold))]">конкретный сигнал прямо сейчас</span>
        </h2>
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
        Trigger-based outreach
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px] tracking-[-0.02em]">
        Не «вы наш ICP» — <span className="text-[hsl(var(--slide-gold))]">конкретный сигнал прямо сейчас</span>
      </h2>
      <div className="grid grid-cols-1 gap-[8px] mb-[16px] max-w-[1700px]">
        {triggers.map((t) => (
          <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[20px] py-[8px]">
            <div className="flex items-baseline justify-between gap-[14px] mb-[2px]">
              <p className="text-[17px] font-bold text-[hsl(var(--slide-gold))]">{t.name}</p>
              <p className="text-[12px] text-[hsl(var(--slide-text-muted))]">источник: {t.source}</p>
            </div>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] italic leading-[1.45]">"{t.angle}"</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[24px] py-[12px] max-w-[1700px]">
        <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[6px]">4-touch sequence на trigger (14 дней)</p>
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
