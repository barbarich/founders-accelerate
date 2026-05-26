import { useIsMobile } from "@/hooks/use-mobile";

const insights = [
  {
    num: "1",
    title: "Маркетинг стоит на 3 китах — позиционирование, визуал, креативы",
    body: "Без позиционирования — никто не понимает зачем. Без визуала — никто не доверяет. Без креативов — нет повода кликнуть. Все три обязательны.",
  },
  {
    num: "2",
    title: "AEO/GEO — новое SEO. Попадание в ChatGPT/Perplexity важнее Google",
    body: "Юзеры всё чаще спрашивают AI вместо поисковика. Если AI про твой продукт не знает — тебя не существует. llms.txt + JSON-LD + ответы в Reddit/Quora.",
  },
  {
    num: "3",
    title: "Visual stack на AI — ~50 креативов за день",
    body: "Sora + Nano Banana + Kling + Canva = маленький отдел маркетинга. Один фаундер делает то, что раньше делали 3-4 человека в агентстве за неделю.",
  },
  {
    num: "4",
    title: "B2B путь vs B2C путь — разные стеки и метрики",
    body: "B2B: Apollo + Instantly + LinkedIn Helper. Метрика — open/reply rate. B2C: Meta Advantage+ + TikTok Spark + Google Ads. Метрика — CAC и LTV.",
  },
  {
    num: "5",
    title: "Креатив-матрица 5×3 — твоё первое тестирование",
    body: "5 углов (страх, выгода, история, социальное, статус) × 3 формата (статика, видео, карусель) = 15 креативов. Лучший по конверсии масштабируешь.",
  },
];

export default function L12SlideLessonSummary() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Что унести из этого урока
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Саммари · <span className="text-[hsl(var(--slide-gold))]">5 главных мыслей</span>
        </h2>
        <div className="space-y-[3px]">
          {insights.map((i) => (
            <div key={i.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-start gap-[4px]">
                <span className="font-mono text-[7px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[12px] h-[12px] flex items-center justify-center rounded-full font-bold shrink-0 mt-[1px]">{i.num}</span>
                <div>
                  <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{i.title}</p>
                  <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{i.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Что унести из этого урока
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px]">
        Саммари · <span className="text-[hsl(var(--slide-gold))]">5 главных мыслей</span>
      </h2>

      <div className="grid grid-cols-5 gap-[14px] max-w-[1700px]">
        {insights.map((i) => (
          <div key={i.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[18px] py-[16px] flex flex-col">
            <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[28px] h-[28px] flex items-center justify-center rounded-full font-bold mb-[10px]">{i.num}</span>
            <p className="text-[16.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[8px]">{i.title}</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.55]">{i.body}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[26px] py-[14px] max-w-[1700px] mt-[20px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Дальше — выбрать B2B или B2C путь и сделать первую креатив-матрицу.
        </p>
      </div>
    </div>
  );
}
