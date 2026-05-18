import { useIsMobile } from "@/hooks/use-mobile";

const mistakes = [
  { n: "01", t: "Запустили без работающего пикселя", body: "Алгоритму нечего учить. Бюджет уходит, оптимизации нет. Проверка — Test Events до Publish." },
  { n: "02", t: "Слишком узкая аудитория", body: "Включил детальный таргет, исключения, lookalike. Advantage+ задушен, CPM растёт в 2–3 раза. Дай алгоритму простор." },
  { n: "03", t: "Меняли настройки каждый день", body: "Каждая правка сбрасывает learning phase. Кампания не учится никогда. Сидишь на руках первые 3 дня." },
  { n: "04", t: "Не warmup'или Page / IG", body: "0 постов, 5 подписчиков, нет аватарки. Low quality score → CPM в 2 раза дороже. Минимум 5–10 постов на странице до запуска." },
  { n: "05", t: "Один-два креатива", body: "Dynamic Creative нечего перемешивать. Креатив выгорает за 3–5 дней, CPM растёт. Минимум 5, лучше 10 ассетов." },
  { n: "06", t: "Объективом ставят редкое событие", body: "Purchase при 0 продаж в неделю — Meta не наберёт 50 событий. Если событие редкое, выбираешь ViewContent / Lead и оптимизируешь верхний этап." },
  { n: "07", t: "Без warmup сразу $100/день", body: "Новый ad account, нет истории — Meta флажит как fraud. Стартуй с $20–30 первую неделю, потом масштабируй на +20% в день." },
];

export default function M10Slide13Top7Mistakes() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Семь ошибок одиночек на Meta
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Каждая ошибка <span className="text-[hsl(var(--slide-gold))]">сжигает $200–500</span> и неделю
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Знаешь заранее — не повторишь. Это все типовые грабли первого запуска.
        </p>
        <div className="space-y-[3px]">
          {mistakes.map((m) => (
            <div key={m.n} className="bg-[hsl(0_70%_55%/0.05)] border-l-2 border-[hsl(0_70%_55%/0.6)] rounded-[5px] px-[7px] py-[3px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(0_70%_65%)]">{m.n}.</span> {m.t}
              </p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Семь ошибок, которыми ломаются первые кампании одиночек
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Каждая ошибка <span className="text-[hsl(var(--slide-gold))]">сжигает $200–500</span> и неделю
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1700px]">
        Знаешь заранее — не повторишь. Это типовые грабли, на которые наступает каждый, кто настраивает Meta впервые.
      </p>
      <div className="grid grid-cols-2 gap-[16px] max-w-[1700px]">
        {mistakes.map((m) => (
          <div key={m.n} className="bg-[hsl(0_70%_55%/0.05)] border-l-[4px] border-[hsl(0_70%_55%/0.6)] rounded-[12px] px-[26px] py-[14px]">
            <div className="flex items-baseline gap-[12px] mb-[4px]">
              <span className="font-display text-[24px] font-bold text-[hsl(0_70%_65%)] leading-none">{m.n}</span>
              <span className="text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{m.t}</span>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[40px]">{m.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
