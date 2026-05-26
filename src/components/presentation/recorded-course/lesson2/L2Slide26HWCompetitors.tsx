import { useIsMobile } from "@/hooks/use-mobile";

export default function L2Slide26HWCompetitors() {
  const tasks = [
    "Зарегистрироваться в 3–5 продуктах конкурентов. Пройти онбординг, попробовать ключевые функции",
    "Для B2B: записаться на демо под видом клиента",
    "Проанализировать нишу через Perplexity",
    "Проверить рекламу в Meta Ad Library",
    "Посмотреть трафик через SimilarWeb",
    "Проверить тренды в Google Trends",
    "Найти 10+ негативных отзывов — сгруппировать по болям",
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <div className="flex items-center gap-[8px] mb-[6px]">
          <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[8px] py-[4px] rounded">3–4 ч</span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Задание</span>
        </div>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">Конкурентный анализ</h2>
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
          <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">Записывайте в любом удобном формате — главное зафиксировать.</p>
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
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">Конкурентный анализ</h2>
      <div className="space-y-[14px] max-w-[1100px]">
        {[
          "Зарегистрироваться в 3–5 продуктах конкурентов. Пройти онбординг, попробовать ключевые функции, зафиксировать сильные и слабые стороны",
          "Для B2B: записаться на демо под видом клиента. Задать вопросы о ценах, интеграциях, онбординге. Записать всё",
          "Проанализировать нишу через Perplexity — запустить промпт для общего анализа рынка, затем промпт для анализа каждого конкурента отдельно",
          "Проверить рекламу конкурентов в Meta Ad Library — какие креативы, на кого таргетят, какие офферы",
          "Посмотреть трафик через SimilarWeb — откуда приходят пользователи, какие каналы работают",
          "Проверить тренды в Google Trends — растёт ли интерес к нише, сезонность, география",
          "Найти 10+ негативных отзывов (G2, Trustpilot, App Store, Reddit) — сгруппировать по повторяющимся болям",
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
        <p className="text-[18px] text-[hsl(var(--slide-text-muted))]">Записывайте в любом удобном формате — Google Docs, Notion, заметки. Главное — зафиксировать находки.</p>
      </div>
    </div>
  );
}
