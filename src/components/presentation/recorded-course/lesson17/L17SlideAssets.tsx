import { useIsMobile } from "@/hooks/use-mobile";

const assets = [
  { t: "Позиционирование в одну строку", l: "урок 3" },
  { t: "Цена, названная не наугад", l: "урок 3" },
  { t: "Работающий лендинг", l: "урок 4" },
  { t: "Stripe, который принимает оплату", l: "урок 4" },
  { t: "Продукт с настроенным первым экраном", l: "уроки 6-7" },
  { t: "North Star и понимание, что чинить", l: "урок 9" },
  { t: "Портрет аудитории и маркетинг-план", l: "урок 10" },
  { t: "Таблица сделок", l: "урок 13" },
  { t: "CAC, LTV и payback по каналам", l: "урок 14" },
  { t: "Pitch deck", l: "урок 15" },
  { t: "Два выбранных канала и список из 10 имён", l: "урок 16" },
  { t: "Промпты и шаблоны всех уроков", l: "весь курс" },
];

export default function L17SlideAssets() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Не знания, а вещи
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Что у тебя на руках
        </h2>
        <div className="grid grid-cols-2 gap-[4px]">
          {assets.map((a) => (
            <div key={a.t} className="border border-[hsl(var(--slide-border)/0.4)] rounded-[4px] px-[6px] py-[4px]">
              <p className="text-[8px] font-medium text-[hsl(var(--slide-text))] leading-[1.25]">{a.t}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-gold))]">{a.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[8px] py-[5px] mt-[7px]">
          <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4]">
            Чего из этого нет - это и есть твой список задач на первую неделю. Не начинай новое, пока не закрыл его.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[110px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Не знания, а вещи
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Что у тебя <span className="text-[hsl(var(--slide-gold))]">на руках</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[20px] max-w-[1500px]">
        Пройди этот список и отметь, что у тебя реально сделано, а что осталось на слайдах.
      </p>
      <div className="grid grid-cols-3 gap-[12px] max-w-[1550px]">
        {assets.map((a) => (
          <div key={a.t} className="border border-[hsl(var(--slide-border)/0.4)] rounded-[10px] px-[18px] py-[12px] bg-[hsl(var(--slide-bg-alt))]">
            <p className="text-[17px] font-medium text-[hsl(var(--slide-text))] leading-[1.3]">{a.t}</p>
            <p className="text-[13px] text-[hsl(var(--slide-gold))] mt-[2px]">{a.l}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[26px] py-[14px] max-w-[1550px] mt-[20px]">
        <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Чего из этого нет - это и есть твой список задач на первую неделю. Не начинай новое, пока не закрыл его.
        </p>
      </div>
    </div>
  );
}
