import { useIsMobile } from "@/hooks/use-mobile";

const stats = [
  { num: "4", label: "недели" },
  { num: "20+", label: "интервью" },
  { num: "15+", label: "AI-инструментов" },
  { num: "1", label: "готовый продукт" },
];

const weeks = [
  {
    week: "Неделя 1",
    icon: "🔍",
    title: "Клиент и боль",
    items: [
      "5 customer-интервью по шаблону",
      "AI-анализ конкурентов (Perplexity, SimilarWeb, Meta Ad Library)",
      "Формула продукта в одно предложение",
      "Конкурентный анализ на 3 уровнях",
    ],
  },
  {
    week: "Неделя 2",
    icon: "🎯",
    title: "Позиционирование и цена",
    items: [
      "Позиционирование: [кто] получает [результат] с [продукт], без [боль]",
      "3 формулировки: лендинг, холодное сообщение, 30-сек питч",
      "Модель монетизации и цена",
      "MVP scope по MoSCoW: только MUST HAVE",
    ],
  },
  {
    week: "Неделя 3",
    icon: "🛠️",
    title: "Продукт и лендинг",
    items: [
      "AI-стек: Lovable, Claude Code, Cursor",
      "Лендинг из 8 блоков по формуле",
      "Авторизация, оплата, аналитика — без разработчика",
      "GA + Pixel + Hotjar подключены",
    ],
  },
  {
    week: "Неделя 4",
    icon: "🚀",
    title: "Демо-день и запуск",
    items: [
      "Питч продукта перед группой",
      "Формула outreach: наблюдение → инсайт → мост → CTA",
      "Шаблон холодного письма + цепочка из 3",
      "Apollo, Instantly, LinkedHelper — для масштаба",
    ],
  },
];

export default function M4Slide14Month1Results() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Посмотрите сколько вы сделали
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Месяц 1 — это было мощно
        </h2>
        <div className="flex gap-[4px] mb-[10px]">
          {stats.map((s, i) => (
            <div key={i} className="flex-1 bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] py-[6px] text-center">
              <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))]">{s.num}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))]">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-[6px]">
          {weeks.map((w, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[8px] py-[6px]">
              <div className="flex items-center gap-[4px] mb-[3px]">
                <span className="text-[12px]">{w.icon}</span>
                <span className="text-[8px] font-bold text-[hsl(var(--slide-gold))]">{w.week}:</span>
                <span className="text-[8px] font-bold text-[hsl(var(--slide-text))]">{w.title}</span>
              </div>
              <div className="flex flex-wrap gap-x-[8px] gap-y-[2px] ml-[16px]">
                {w.items.map((item, j) => (
                  <p key={j} className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">• {item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <div className="flex items-end justify-between mb-[36px]">
        <div>
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
            Посмотрите сколько вы сделали
          </p>
          <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">
            Месяц 1 — это было мощно
          </h2>
        </div>
        <div className="flex gap-[16px]">
          {stats.map((s, i) => (
            <div key={i} className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[18px] py-[14px] text-center min-w-[90px]">
              <p className="text-[32px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.num}</p>
              <p className="text-[14px] text-[hsl(var(--slide-text-muted))] mt-[4px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[20px]">
        {weeks.map((w, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[28px] py-[22px]">
            <div className="flex items-center gap-[10px] mb-[14px]">
              <span className="text-[28px]">{w.icon}</span>
              <span className="text-[15px] font-mono text-[hsl(var(--slide-gold))]">{w.week}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{w.title}</span>
            </div>
            <div className="space-y-[6px]">
              {w.items.map((item, j) => (
                <div key={j} className="flex items-start gap-[8px]">
                  <span className="text-[8px] text-[hsl(var(--slide-gold))] mt-[7px]">●</span>
                  <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
