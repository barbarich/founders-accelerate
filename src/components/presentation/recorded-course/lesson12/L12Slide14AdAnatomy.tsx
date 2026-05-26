import { useIsMobile } from "@/hooks/use-mobile";

const parts = [
  { n: "01", t: "Hook · первые 0.8 секунды", body: "Останавливает scroll. Цифра, противоречие, обращение к боли. «До 80% B2B-сделок умирают в demo. Вот почему.»" },
  { n: "02", t: "Value · следующие 3 секунды", body: "Что человек получит. Конкретный outcome, не фича. «Узнаешь, какие 3 фразы убивают воронку — и чем их заменить.»" },
  { n: "03", t: "Proof · параллельно с value", body: "Цифра, лицо, лого. «Используют 200+ команд от Vercel до Linear». Без proof — это «ещё один stoartup».", },
  { n: "04", t: "CTA · последний кадр", body: "Один глагол + один результат. «Скачай чек-лист» лучше, чем «Узнать больше». Кнопка одна, не три." },
];

export default function L12Slide14AdAnatomy() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Анатомия рабочего креатива
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Четыре куска <span className="text-[hsl(var(--slide-gold))]">в любом видео-объявлении</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Если в креативе нет хоть одного — конверсия проседает в 3–10 раз.
        </p>
        <div className="space-y-[5px]">
          {parts.map((p) => (
            <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[5px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{p.n}.</span> {p.t}
              </p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] ml-[16px]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Анатомия рабочего креатива
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
        Четыре куска <span className="text-[hsl(var(--slide-gold))]">в любом видео-объявлении</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1600px]">
        Если в креативе нет хоть одного из четырёх — конверсия проседает в 3–10 раз. Это работает одинаково для B2B и B2C.
      </p>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px]">
        {parts.map((p) => (
          <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[20px]">
            <div className="flex items-baseline gap-[14px] mb-[8px]">
              <span className="font-display text-[36px] font-bold text-[hsl(var(--slide-gold))] leading-none">{p.n}</span>
              <span className="text-[24px] font-bold text-[hsl(var(--slide-text))]">{p.t}</span>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5] ml-[52px]">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
