import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide12CommonMistakes() {
  const mistakes = [
    { num: "1", mistake: 'Аудитория = "все"', fix: "Чем уже — тем сильнее. «HR-менеджеры в IT-компаниях 50-200 человек» лучше чем «бизнесы»" },
    { num: "2", mistake: "Описание процесса, а не результата", fix: "«Автоматизируем процессы» → «Экономит 10 часов в неделю на отчётах»" },
    { num: "3", mistake: "Слишком много всего", fix: "Одна проблема, одно решение, одно предложение. Не пытайтесь впихнуть всё" },
    { num: "4", mistake: "Нет отстройки от альтернатив", fix: "Клиент всегда сравнивает. «В отличие от X» — обязательная часть" },
    { num: "5", mistake: "Buzzwords вместо смысла", fix: "«AI-powered», «next-gen», «innovative» — это шум. Говорите конкретно" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Позиционирование</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Топ-5 ошибок
        </h2>
        <div className="space-y-[6px]">
          {mistakes.map((m, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <p className="text-[11px] font-semibold text-[hsl(var(--slide-text))] mb-[2px]">❌ {m.mistake}</p>
              <p className="text-[10px] text-[hsl(var(--slide-gold))] leading-[1.4]">→ {m.fix}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Позиционирование</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[44px]">Топ-5 ошибок</h2>
      <div className="space-y-[16px] max-w-[1100px]">
        {mistakes.map((m, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <div className="w-[32px] h-[32px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0 mt-[4px]">
              <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))]">{m.num}</span>
            </div>
            <div className="flex-1">
              <p className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[4px]">❌ {m.mistake}</p>
              <p className="text-[19px] text-[hsl(var(--slide-gold))] leading-[1.5]">→ {m.fix}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
