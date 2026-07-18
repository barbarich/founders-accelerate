import { useIsMobile } from "@/hooks/use-mobile";

const ladder = [
  { n: "01", t: "Бесплатные родительские группы", d: "Пришёл в сообщества, где сидят мамы. Без бюджета - живое участие и польза." },
  { n: "02", t: "Пошли первые продажи", d: "Спрос подтвердился руками. Стало ясно: продукт и место совпали." },
  { n: "03", t: "Таргет", d: "Только теперь - платная реклама. Масштабируешь то, что уже сработало органически." },
  { n: "04", t: "Партнёрства с сетями", d: "Дистрибуция через розничные сети. Рычаг, который включаешь, когда модель доказана." },
];

export default function L11SlidePeraTwo() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Кейс PERA · часть 2 · масштаб
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Сначала руками и бесплатно. <span className="text-[hsl(var(--slide-gold))]">Потом - газ.</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[7px]">
          Порядок важнее скорости. Каждый шаг включается, только когда предыдущий сработал:
        </p>
        <div className="space-y-[4px] mb-[7px]">
          {ladder.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[9px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]"><span className="text-[hsl(var(--slide-gold))]">{s.n}</span> {s.t}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[5px]">
          <p className="text-[8.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">Инсайт: докажи руками бесплатно - потом масштабируй бюджетом. Не наоборот.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[34px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Кейс PERA · часть 2 · масштаб
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Сначала руками и бесплатно. <span className="text-[hsl(var(--slide-gold))]">Потом - газ.</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[20px] max-w-[1650px]">
        Порядок важнее скорости. Каждый следующий шаг включается, только когда предыдущий сработал:
      </p>
      <div className="grid grid-cols-4 gap-[14px] max-w-[1750px] mb-[18px]">
        {ladder.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[18px] py-[14px]">
            <p className="font-display text-[24px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[8px]">{s.n}</p>
            <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">{s.t}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[16px] max-w-[1750px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Инсайт: докажи руками и бесплатно - потом масштабируй бюджетом. Не наоборот.
        </p>
      </div>
    </div>
  );
}
