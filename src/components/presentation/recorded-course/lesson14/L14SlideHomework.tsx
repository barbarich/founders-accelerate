import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  { n: "1", t: "Решение Bootstrap или Raise", d: "По 4 критериям из лекции. Запиши свой выбор в 1 строку с обоснованием" },
  { n: "2", t: "Pitch deck v1", d: "10 слайдов по Sequoia format. Используй Pitch.com или Figma. Не идеально — первая версия" },
  { n: "3", t: "Список 30 инвесторов", d: "AngelList + Crunchbase: фаундеры из похожих ниш + angels с твоей географии. CSV с именами и контактами" },
  { n: "4", t: "5 warm intros запрошено", d: "Найди 5 фаундеров с твоего круга, кто знает кого-то из 30. Попроси intro" },
  { n: "5", t: "Готов к Уроку 16", d: "Если выбрал Raise — pitch deck в кармане. Если Bootstrap — переходим к партнёрствам" },
];

export default function L14SlideHomework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Домашка на эту неделю
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          5 пунктов · от решения к pitch deck
        </h2>
        <div className="space-y-[8px]">
          {items.map((i) => (
            <div key={i.n} className="flex items-start gap-[10px]">
              <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[22px] h-[22px] flex items-center justify-center shrink-0 font-bold mt-[1px]">{i.n}</span>
              <div className="flex-1">
                <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] mb-[2px] leading-[1.2]">{i.t}</p>
                <p className="text-[10px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Домашка на эту неделю
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        5 пунктов · от решения к pitch deck
      </h2>
      <div className="grid grid-cols-2 gap-x-[40px] gap-y-[18px] max-w-[1800px]">
        {items.map((i) => (
          <div key={i.n} className="flex items-start gap-[18px]">
            <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[44px] h-[44px] flex items-center justify-center shrink-0 font-bold mt-[2px]">{i.n}</span>
            <div className="flex-1">
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[4px] leading-[1.2]">{i.t}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{i.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
