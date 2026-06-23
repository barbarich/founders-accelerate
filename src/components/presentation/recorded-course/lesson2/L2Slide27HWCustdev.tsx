import { useIsMobile } from "@/hooks/use-mobile";

export default function L2Slide27HWCustdev() {
  const tasks = [
    "Сформулировать гипотезу: [сегмент] испытывает [боль] и готов платить за [решение]",
    "Собрать опрос в Tally → 100+ ответов через 4 канала. Измерить массовость боли",
    "Подготовить 10–18 вопросов по промпту с урока",
    "Написать знакомым из ЦА, дать ссылку на Calendly для брони",
    "Провести 3–5 интервью (20–30 мин), записать через tl;dv / Granola",
    "Зафиксировать боль/решение/готовность; заметки в одном месте + доступ AI",
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <div className="flex items-center gap-[8px] mb-[6px]">
          <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[8px] py-[4px] rounded">3–4 ч</span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Задание</span>
        </div>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">Custdev: опросы + интервью</h2>
        <div className="space-y-[6px] mb-[10px]">
          {tasks.map((task, i) => (
            <div key={i} className="flex items-start gap-[8px]">
              <div className="w-[18px] h-[18px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0 mt-[1px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{task}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px]">
          <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">Минимум 3 интервью к следующей встрече. Без записи — не считается.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">3–4 часа</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Задание на неделю</span>
      </div>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">Customer development: опросы + интервью</h2>
      <div className="space-y-[14px] max-w-[1100px]">
        {[
          "Сформулировать гипотезу: [сегмент] испытывает [боль] в контексте [ситуация] и готов платить за [решение]",
          "Собрать опрос в Tally и получить 100+ ответов через 4 канала дистрибуции — измерить массовость боли и уточнить гипотезы",
          "Подготовить 10–18 вопросов для интервью по промпту с урока. Фокус: прошлый опыт, текущее решение, бюджет",
          "Начать с нетворка — написать знакомым из ЦА, дать ссылку на Calendly, чтобы сами забронировали время",
          "Провести 3–5 живых интервью (20–30 минут), записать через tl;dv / Granola — лично провалидировать гипотезы. Слушать 80%",
          "Зафиксировать по каждому: подтверждённая боль, текущее решение, готовность платить. Заметки — в одном месте + доступ для AI",
        ].map((task, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <div className="w-[32px] h-[32px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0 mt-[2px]">
              <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
            </div>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{task}</p>
          </div>
        ))}
      </div>
      <div className="mt-[32px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[16px]">
        <p className="text-[18px] text-[hsl(var(--slide-text-muted))]">Минимум 3 интервью к следующей встрече. Без записи — не считается.</p>
      </div>
    </div>
  );
}
