import { useIsMobile } from "@/hooks/use-mobile";

const parts = [
  {
    n: "01",
    t: "Как Meta работает в 2026",
    body: "Andromeda и Advantage+ - что алгоритм теперь делает за тебя и что он требует взамен. Короткая часть: без неё всё остальное выглядит набором кнопок.",
    time: "теория · коротко",
  },
  {
    n: "02",
    t: "Готовим два рычага",
    body: "Креативы - на AI, за вечер, без дизайнера. Данные - пиксель, события и серверная отправка, по шагам. Это единственные две вещи, которыми ты управляешь.",
    time: "подготовка · по шагам",
  },
  {
    n: "03",
    t: "Воркшоп на моём экране",
    body: "Открываю свой рекламный кабинет и настраиваю кампанию с нуля до кнопки Publish. Ты ставишь на паузу и повторяешь у себя.",
    time: "практика · основная часть",
  },
];

export default function L12SlideLessonMap() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Карта урока
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Три части. <span className="text-[hsl(var(--slide-gold))]">Одна кампания от нуля до запуска.</span>
        </h2>
        <div className="space-y-[5px] mb-[8px]">
          {parts.map((p) => (
            <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[5px]">
              <div className="flex items-baseline justify-between gap-[6px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(var(--slide-gold))]">{p.n}.</span> {p.t}
                </p>
                <p className="text-[6px] uppercase tracking-[0.08em] text-[hsl(var(--slide-gold)/0.7)] shrink-0">{p.time}</p>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            В конце урока у тебя на руках: папка креативов, пиксель, который шлёт события, и активная кампания. Не конспект.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Карта урока
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[26px] tracking-[-0.02em]">
        Три части. <span className="text-[hsl(var(--slide-gold))]">Одна кампания от нуля до запуска.</span>
      </h2>
      <div className="grid grid-cols-3 gap-[20px] mb-[26px] max-w-[1700px]">
        {parts.map((p) => (
          <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[20px]">
            <div className="flex items-baseline gap-[12px] mb-[6px]">
              <span className="font-display text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-none">{p.n}</span>
              <span className="text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{p.t}</span>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[46px] mb-[8px]">{p.body}</p>
            <p className="text-[12px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold)/0.75)] ml-[46px]">{p.time}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[30px] py-[18px] max-w-[1700px]">
        <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
          В конце урока у тебя на руках: папка креативов, пиксель, который шлёт события, и активная кампания. Не конспект.
        </p>
      </div>
    </div>
  );
}
