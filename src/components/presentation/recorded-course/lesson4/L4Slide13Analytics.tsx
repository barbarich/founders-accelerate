import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  {
    icon: "📈",
    name: "Google Analytics",
    tag: "Обязательно",
    desc: "Трафик, источники, конверсии. Откуда приходят пользователи, сколько остаются, какие страницы смотрят. Основа всей аналитики.",
  },
  {
    icon: "🎯",
    name: "Рекламные пиксели",
    tag: "Для рекламы",
    desc: "Facebook Pixel, Google Ads, TikTok Pixel — ставьте сразу, даже если реклама не запланирована. Пиксели собирают аудиторию и учат алгоритмы, кто ваш клиент. Чем раньше — тем дешевле будет реклама.",
  },
  {
    icon: "🔬",
    name: "Mixpanel",
    tag: "Продуктовая аналитика",
    desc: "Трекинг каждого действия: клик, регистрация, покупка. Воронки, ретеншн, когорты. Есть MCP — подключаете к Claude, и он сам настраивает события, аналитику и дашборды.",
  },
  {
    icon: "🔥",
    name: "Hotjar",
    tag: "Поведение",
    desc: "Записи сессий — видите как пользователь двигает мышку, где кликает, где уходит. Тепловые карты. Мини-опросники прямо на сайте для сбора обратной связи от реальных пользователей.",
  },
];

export default function L4Slide13Analytics() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Знать, а не гадать
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Аналитика с первого дня
        </h2>
        <div className="space-y-[6px]">
          {tools.map((t, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <div className="flex items-center gap-[6px] mb-[3px]">
                <span className="text-[13px]">{t.icon}</span>
                <span className="text-[10px] font-semibold text-[hsl(var(--slide-text))]">{t.name}</span>
                <span className="text-[7px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[4px] py-[1px] rounded-full ml-auto">{t.tag}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Знать, а не гадать
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px]">
        Аналитика с первого дня
      </h2>

      <div className="grid grid-cols-2 gap-[20px] max-w-[1300px]">
        {tools.map((t, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[22px]">
            <div className="flex items-center gap-[12px] mb-[10px]">
              <span className="text-[32px]">{t.icon}</span>
              <h3 className="text-[21px] font-bold text-[hsl(var(--slide-text))]">{t.name}</h3>
              <span className="text-[12px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[10px] py-[3px] rounded-full ml-auto">
                {t.tag}
              </span>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.55]">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-[28px] max-w-[1300px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[10px] px-[28px] py-[14px]">
        <p className="text-[17px] text-[hsl(var(--slide-gold))] leading-[1.5]">
          <span className="font-semibold">Подключение:</span> Google Analytics и пиксели — 1 промпт в Lovable. Mixpanel — через MCP в Claude Code. Hotjar — вставьте скрипт в head.
        </p>
      </div>
    </div>
  );
}
