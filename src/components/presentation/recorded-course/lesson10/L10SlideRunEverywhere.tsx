import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "01", t: "Увидели огромный спрос", d: "Рынок был горячий: люди уже активно искали решение и покупали у конкурентов. Спрос не нужно было создавать - только перехватить." },
  { n: "02", t: "Никаких сообществ и прогревов", d: "Мы не заходили в группы и не строили аудиторию месяцами. Сразу запустили маркетинг." },
  { n: "03", t: "Платная реклама в Meta с первого дня", d: "Деньги → трафик → продажи. Первая же кампания окупилась: мы стали прибыльными сразу." },
];

export default function L10SlideRunEverywhere() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Кейс RunEverywhere · исключение из правил
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Горячий рынок - <span className="text-[hsl(var(--slide-gold))]">иди сразу в бой.</span>
        </h2>
        <div className="space-y-[4px] mb-[7px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[9px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]"><span className="text-[hsl(var(--slide-gold))]">{s.n}</span> {s.t}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[5px]">
          <p className="text-[8.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Это исключение, а не правило. Но если твой продукт на очень горячем рынке - не усложняй: запускай рекламу и тестируй спрос деньгами.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[32px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Кейс RunEverywhere · исключение из правил
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px] tracking-[-0.02em]">
        Горячий рынок - <span className="text-[hsl(var(--slide-gold))]">иди сразу в бой.</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[20px] max-w-[1650px]">
        В RunEverywhere мы не прошли ни одного шага из «правильного» пути - и это сработало:
      </p>
      <div className="space-y-[10px] max-w-[1700px] mb-[18px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[26px] py-[13px] flex items-center gap-[22px]">
            <span className="font-display text-[26px] font-bold text-[hsl(var(--slide-gold))] leading-none w-[44px] shrink-0">{s.n}</span>
            <span className="text-[21px] font-bold text-[hsl(var(--slide-text))] w-[420px] shrink-0">{s.t}</span>
            <span className="text-[17px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4] flex-1">{s.d}</span>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[14px] max-w-[1700px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Это исключение, а не правило. Но если твой продукт на очень горячем рынке, где спрос уже есть, - не усложняй: запускай рекламу и тестируй спрос деньгами.
        </p>
      </div>
    </div>
  );
}
