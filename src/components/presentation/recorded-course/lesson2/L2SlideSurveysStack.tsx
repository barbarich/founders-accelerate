import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  {
    name: "Tally",
    price: "Бесплатно до 500 ответов",
    when: "Лучший выбор для соло-фаундера",
    pros: "Условная логика, branching, embed на лендинг, экспорт в Notion/Sheets за 1 клик",
  },
  {
    name: "Typeform",
    price: "$25/мес от Basic",
    when: "Если важна анимация и красивая обёртка",
    pros: "UI как у Apple — выше completion rate (~60% vs 40% у Google Forms). Дорого для соло.",
  },
  {
    name: "Google Forms",
    price: "Бесплатно",
    when: "Если опрос для друзей/команды, не для рынка",
    pros: "Самый низкий completion rate. Но zero friction setup. Хорошо для super quick тестов.",
  },
];

export default function L2SlideSurveysStack() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[24px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Стек для опросов
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          3 инструмента — какой когда
        </h2>
        <div className="space-y-[10px]">
          {tools.map((t) => (
            <div key={t.name} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[12px] py-[10px] bg-[hsl(var(--slide-gold)/0.04)]">
              <div className="flex items-baseline justify-between mb-[4px]">
                <p className="text-[14px] font-bold text-[hsl(var(--slide-text))]">{t.name}</p>
                <p className="text-[10px] text-[hsl(var(--slide-gold))] font-medium">{t.price}</p>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">{t.when}</p>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{t.pros}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Стек для опросов
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px] tracking-[-0.01em]">
        3 инструмента — какой когда
      </h2>
      <div className="grid grid-cols-3 gap-[24px] max-w-[1700px]">
        {tools.map((t) => (
          <div key={t.name} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[28px] py-[24px] bg-[hsl(var(--slide-gold)/0.04)]">
            <div className="flex items-baseline justify-between mb-[10px]">
              <p className="text-[28px] font-bold text-[hsl(var(--slide-text))]">{t.name}</p>
              <p className="text-[14px] text-[hsl(var(--slide-gold))] font-medium">{t.price}</p>
            </div>
            <p className="text-[15px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">{t.when}</p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{t.pros}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
