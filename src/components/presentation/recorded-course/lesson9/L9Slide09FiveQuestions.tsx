import { useIsMobile } from "@/hooks/use-mobile";

const questions = [
  { num: "1", q: "Откуда приходят?", metric: "Источники трафика", why: "Чтобы знать, какой канал повторять, а какой закрыть." },
  { num: "2", q: "Доходят ли до ценности?", metric: "% дошедших до Aha", why: "Главный вопрос блока про продукт. Не доходят - маркетинг бессмысленен." },
  { num: "3", q: "Возвращаются?", metric: "% вернувшихся на 7-й день", why: "Один визит - это любопытство. Возврат - это ценность." },
  { num: "4", q: "Платят?", metric: "% заплативших", why: "Единственная метрика, которую нельзя подделать энтузиазмом." },
  { num: "5", q: "Рассказывают?", metric: "% пришедших по рекомендации", why: "Люди рекомендуют только то, что делает их самих лучше в чужих глазах." },
];

export default function L9Slide09FiveQuestions() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Что смотреть под North Star
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Пять вопросов к продукту. <span className="text-[hsl(var(--slide-gold))]">По одной метрике на каждый</span>.
        </h2>
        <div className="space-y-[6px] mb-[9px]">
          {questions.map((q) => (
            <div key={q.num} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <div className="flex items-start gap-[7px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[16px] h-[16px] flex items-center justify-center rounded-full font-bold shrink-0 mt-[1px]">{q.num}</span>
                <div>
                  <p className="text-[10.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">{q.q}</p>
                  <p className="text-[9.5px] text-[hsl(var(--slide-gold))] leading-[1.35]">{q.metric}</p>
                  <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[1px]">{q.why}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Эти пять - <span className="text-[hsl(var(--slide-gold))]">под</span> North Star, а не вместо неё. Она говорит «хорошо или плохо». Они - «где именно сломалось».
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Что смотреть под North Star
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em] max-w-[1800px]">
        Пять вопросов к продукту. <span className="text-[hsl(var(--slide-gold))]">По одной метрике на каждый</span>.
      </h2>
      <div className="space-y-[11px] max-w-[1800px] mb-[22px]">
        {questions.map((q) => (
          <div key={q.num} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[10px] px-[24px] py-[12px] bg-[hsl(var(--slide-gold)/0.04)] flex items-center gap-[20px]">
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[36px] h-[36px] flex items-center justify-center rounded-full font-bold shrink-0">{q.num}</span>
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] w-[330px] shrink-0">{q.q}</p>
            <p className="text-[21px] text-[hsl(var(--slide-gold))] font-semibold w-[330px] shrink-0">{q.metric}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45] flex-1">{q.why}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Эти пять - <span className="text-[hsl(var(--slide-gold))]">под</span> North Star, а не вместо неё. Она говорит «хорошо или плохо». Они - «где именно сломалось».
        </p>
      </div>
    </div>
  );
}
