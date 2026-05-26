import { useIsMobile } from "@/hooks/use-mobile";

export default function L2Slide27HWCustdev() {
  const tasks = [
    "Сформулировать гипотезу: [сегмент] испытывает [боль] и готов платить за [решение]",
    "Подготовить 10–18 вопросов по промпту с встречи",
    "Написать знакомым из ЦА. Попросить intro",
    "Провести 3–5 интервью (20–30 мин). Слушать 80%",
    "Записать через tl;dv — не полагаться на память",
    "Зафиксировать: боль, текущее решение, готовность платить",
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <div className="flex items-center gap-[8px] mb-[6px]">
          <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[8px] py-[4px] rounded">3–4 ч</span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Задание</span>
        </div>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">Custdev: живые интервью</h2>
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
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">Customer development: живые интервью</h2>
      <div className="space-y-[14px] max-w-[1100px]">
        {[
          "Сформулировать гипотезу: [сегмент] испытывает [боль] в контексте [ситуация] и готов платить за [решение]",
          "Подготовить 10–18 вопросов для звонка по промпту из встречи. Фокус: прошлый опыт, текущее решение, бюджет",
          "Начать с нетворка — написать знакомым, кто подходит под целевую аудиторию. Попросить intro к нужным людям",
          "Провести 3–5 живых интервью (звонок или встреча, 20–30 минут). Слушать 80%, говорить 20%",
          "Записать каждое интервью через tl;dv — не полагаться на память",
          "После каждого интервью зафиксировать: подтверждённая боль, текущее решение, готовность платить, инсайты",
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
