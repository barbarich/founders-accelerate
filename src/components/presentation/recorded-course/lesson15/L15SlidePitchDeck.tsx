import { useIsMobile } from "@/hooks/use-mobile";

const slides = [
  { n: "1", t: "Cover", d: "Название · логотип · one-line pitch · контакты" },
  { n: "2", t: "Problem", d: "Чью боль ты решаешь. Конкретные люди в конкретных ситуациях. Не «в мире нет X»" },
  { n: "3", t: "Solution", d: "Как продукт решает боль. 1 главная фича. Screenshot или GIF в действии" },
  { n: "4", t: "Market", d: "TAM/SAM/SOM. Только убедительные цифры с источниками. Не «рынок огромный»" },
  { n: "5", t: "Product", d: "Демо. 1-2 screenshots ключевого flow. Не feature list" },
  { n: "6", t: "Traction", d: "MRR · users · growth rate · cohort retention. Самый важный слайд для seed+" },
  { n: "7", t: "Business model", d: "Как ты зарабатываешь. Unit economics: CAC, LTV, payback period" },
  { n: "8", t: "Competition", d: "2×2 матрица: твоя ось vs ось конкурента. Где ты в правом верхнем" },
  { n: "9", t: "Team", d: "Почему именно ты. Прошлые победы + relevant background" },
  { n: "10", t: "Ask + Use of funds", d: "Сколько просишь · на что · какие milestones закроешь. Один слайд" },
];

export default function L15SlidePitchDeck() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Pitch deck · Sequoia format (industry standard)
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          10 слайдов · pitch за 5 минут
        </h2>
        <div className="space-y-[4px]">
          {slides.map((s) => (
            <div key={s.n} className="flex items-start gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[18px] h-[18px] flex items-center justify-center shrink-0 font-bold mt-[1px]">{s.n}</span>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] mb-[1px] leading-[1.2]">{s.t}</p>
                <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Pitch deck · Sequoia format (industry standard)
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em]">
        10 слайдов · pitch за 5 минут
      </h2>
      <div className="grid grid-cols-2 gap-x-[40px] gap-y-[12px] max-w-[1900px]">
        {slides.map((s) => (
          <div key={s.n} className="flex items-start gap-[16px]">
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[40px] h-[40px] flex items-center justify-center shrink-0 font-bold mt-[2px]">{s.n}</span>
            <div className="flex-1">
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[3px] leading-[1.2]">{s.t}</p>
              <p className="text-[15px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
