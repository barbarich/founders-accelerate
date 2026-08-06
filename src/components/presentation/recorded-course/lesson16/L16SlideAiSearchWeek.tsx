import { useIsMobile } from "@/hooks/use-mobile";

const days = [
  { d: "День 1", t: "Узнай, где тебя нет", b: "Выпиши 20-30 вопросов, которые задаёт твой покупатель. Прогони через ChatGPT, Claude, Perplexity. Записывай не только упомянули или нет, а какие источники процитированы - это твой список целей." },
  { d: "День 2", t: "Почини главную страницу", b: "Первый экран: что это, для кого, какую задачу закрывает, чем отличается. Открытые цены. Страница сравнения с конкурентами." },
  { d: "День 3-5", t: "Напиши авторам подборок", b: "Возьми 10-15 списков, которые модели цитируют чаще всего. Каждому автору - короткое письмо: вот продукт, вот чем отличается от того, что уже в списке, вот доступ. Цель - 5 размещений." },
  { d: "День 6-7", t: "Свой список и отзывы", b: "Напиши честную подборку по своей категории, где разбираешь и конкурентов. Плюс попроси 5 живых клиентов оставить отзыв там, где их видно." },
];

export default function L16SlideAiSearchWeek() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[15px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Видимость в AI-ответах · план
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Неделя работы · и дальше ждать
        </h2>
        <div className="space-y-[4px] mb-[6px]">
          {days.map((x) => (
            <div key={x.d} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[5px] bg-[hsl(var(--slide-gold)/0.04)]">
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[8px] font-mono text-[hsl(var(--slide-gold))] shrink-0">{x.d}</span>
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{x.t}</p>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35]">{x.b}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[9px] py-[6px]">
          <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-bold">Честно про сроки:</span> первые появления в ответах - через 2-4 месяца, заметный поток - через полгода. Трафика из AI пока мало, но он растёт в разы каждый год и покупает лучше обычного. Это вклад на будущее, а не продажи на этой неделе.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Видимость в AI-ответах · план
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.01em]">
        Неделя работы · <span className="text-[hsl(var(--slide-gold))]">и дальше ждать</span>
      </h2>
      <div className="grid grid-cols-4 gap-[16px] max-w-[1900px] mb-[18px]">
        {days.map((x) => (
          <div key={x.d} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[14px] bg-[hsl(var(--slide-gold)/0.04)]">
            <span className="text-[13px] font-mono text-[hsl(var(--slide-gold))]">{x.d}</span>
            <p className="text-[17.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mt-[3px] mb-[5px]">{x.t}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{x.b}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[26px] py-[14px] max-w-[1900px]">
        <p className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.4]">
          <span className="font-semibold">Честно про сроки:</span> первые появления в ответах - через 2-4 месяца, заметный поток - через полгода. Трафика из AI пока мало, но он растёт в разы каждый год и покупает лучше обычного. Это вклад на будущее, а не продажи на этой неделе.
        </p>
      </div>
    </div>
  );
}
