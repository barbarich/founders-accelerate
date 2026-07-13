import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  {
    name: "GA4",
    price: "Бесплатно",
    when: "Web-трафик и базовая воронка",
    what: "Откуда пришли · какие страницы смотрят · что конвертится в покупку. Подключи в Lovable за 5 минут.",
  },
  {
    name: "Mixpanel",
    price: "Free до 100K событий/мес",
    when: "Product analytics",
    what: "Кто что делает внутри продукта · cohort retention · funnel дроп-офф. Сильно лучше GA для понимания продукта.",
  },
  {
    name: "Hotjar / Microsoft Clarity",
    price: "Clarity бесплатно навсегда",
    when: "Session recordings + heatmaps",
    what: "Смотришь как реальные люди тыкают по продукту. Самый дешёвый способ понять «почему не покупают».",
  },
  {
    name: "Sentry",
    price: "Free до 5K events/мес",
    when: "Error monitoring",
    what: "Если приложение упало у пользователя — узнаешь раньше клиента. Минимум: одна интеграция с Lovable.",
  },
];

export default function L10SlideStack() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Стек измерений · бесплатно на старте
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          4 инструмента · подключаются за час
        </h2>
        <div className="space-y-[8px]">
          {tools.map((t) => (
            <div key={t.name} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[12px] py-[8px] bg-[hsl(var(--slide-gold)/0.04)]">
              <div className="flex items-baseline justify-between mb-[2px]">
                <p className="text-[13px] font-bold text-[hsl(var(--slide-text))]">{t.name}</p>
                <p className="text-[9px] text-[hsl(var(--slide-gold))] font-medium">{t.price}</p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">{t.when}</p>
              <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{t.what}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Стек измерений · бесплатно на старте
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        4 инструмента · подключаются за час
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1800px]">
        {tools.map((t) => (
          <div key={t.name} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[26px] py-[20px] bg-[hsl(var(--slide-gold)/0.04)]">
            <div className="flex items-baseline justify-between mb-[8px]">
              <p className="text-[26px] font-bold text-[hsl(var(--slide-text))]">{t.name}</p>
              <p className="text-[14px] text-[hsl(var(--slide-gold))] font-medium">{t.price}</p>
            </div>
            <p className="text-[14px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">{t.when}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{t.what}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
