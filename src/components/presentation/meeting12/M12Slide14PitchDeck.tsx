import { useIsMobile } from "@/hooks/use-mobile";

const slides = [
  { n: "1", t: "Проблема", d: "Чья боль и насколько дорогая" },
  { n: "2", t: "Решение", d: "Что делаешь, в одном предложении" },
  { n: "3", t: "Why now", d: "Что изменилось именно сейчас" },
  { n: "4", t: "Рынок", d: "TAM снизу-вверх, не «$50 млрд»" },
  { n: "5", t: "Продукт / демо", d: "Покажи, что работает" },
  { n: "6", t: "Тяга", d: "Числа, рост, retention" },
  { n: "7", t: "Бизнес-модель", d: "Как зарабатываешь + юнит-экономика" },
  { n: "8", t: "Конкуренты + защита", d: "Почему тебя не скопируют — в 2026 решает", star: true },
  { n: "9", t: "Команда", d: "Что вы shipped, не «ex-Google»" },
  { n: "10", t: "Запрос", d: "Сколько, на что, какой milestone закроешь" },
];

export default function M12Slide14PitchDeck() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Pitch deck · что обязательно внутри
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Инвестор-дека: <span className="text-[hsl(var(--slide-gold))]">10 слайдов, без лишнего.</span>
        </h2>
        <div className="grid grid-cols-2 gap-[3px]">
          {slides.map((s) => (
            <div key={s.n} className={`rounded-[4px] px-[6px] py-[3px] border ${s.star ? "bg-[hsl(var(--slide-gold)/0.12)] border-[hsl(var(--slide-gold)/0.45)]" : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"}`}>
              <div className="flex items-baseline gap-[4px]">
                <span className="text-[8px] font-bold text-[hsl(var(--slide-gold))]">{s.n}</span>
                <span className="text-[8px] font-bold text-[hsl(var(--slide-text))]">{s.t}{s.star ? " ⭐" : ""}</span>
              </div>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3] ml-[12px]">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mt-[6px]">
          Дека — для встречи и follow-up. 5-мин питч — её устная версия.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Pitch deck · что обязательно внутри
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Инвестор-дека: <span className="text-[hsl(var(--slide-gold))]">10 слайдов, без лишнего.</span>
      </h2>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[8px] max-w-[1700px] mb-[18px]">
        {slides.map((s) => (
          <div key={s.n} className={`rounded-[10px] px-[20px] py-[10px] border flex items-baseline gap-[14px] ${s.star ? "bg-[hsl(var(--slide-gold)/0.12)] border-[hsl(var(--slide-gold)/0.45)]" : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"}`}>
            <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
            <div>
              <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.t}{s.star ? " ⭐" : ""}</p>
              <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] max-w-[1700px]">
        Дека — документ для встречи и follow-up. 5-минутный питч — её устная версия. Слайд про moat теперь решает.
      </p>
    </div>
  );
}
