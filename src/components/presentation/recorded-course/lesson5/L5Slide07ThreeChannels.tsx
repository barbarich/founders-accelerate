import { useIsMobile } from "@/hooks/use-mobile";

const channels = [
  {
    num: "01",
    icon: "🤝",
    title: "3F + окружение",
    subtitle: "friends, family, fools — и знакомые знакомых",
    points: [
      "Рассказывай о продукте всем и везде — постоянно",
      "«Уже в разработке, финальная стадия» → покажи демо",
      "Смотри на реакцию и сразу продавай. Это — самое главное",
    ],
  },
  {
    num: "02",
    icon: "🌐",
    title: "Нетворкинг + building in public",
    subtitle: "публичная разработка в соцсетях",
    points: [
      "Транслируй процесс публично: посты, апдейты, инсайты",
      "Ходи на движухи, знакомься, рассказывай про продукт",
      "Работая в тишине — о тебе и идее никто не узнает",
    ],
  },
  {
    num: "03",
    icon: "👥",
    title: "Комьюнити",
    subtitle: "там, где уже живёт твоя аудитория",
    points: [
      "Reddit, Telegram-группы, Facebook, нишевые форумы",
      "Давай ценность и участвуй — а не спамь",
      "Стань своим до того, как что-то предложишь",
    ],
  },
];

export default function L5Slide07ThreeChannels() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Без бюджета
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[16px]">
          3 канала для первых клиентов
        </h2>
        <div className="space-y-[10px]">
          {channels.map((ch, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[10px]">
              <div className="flex items-center gap-[8px] mb-[6px]">
                <span className="text-[16px]">{ch.icon}</span>
                <span className="text-[12px] font-bold text-[hsl(var(--slide-text))]">{ch.title}</span>
                <span className="text-[9px] text-[hsl(var(--slide-text-muted))]">— {ch.subtitle}</span>
              </div>
              {ch.points.map((p, j) => (
                <div key={j} className="flex items-start gap-[6px] ml-[24px]">
                  <span className="text-[6px] text-[hsl(var(--slide-gold))] mt-[4px]">●</span>
                  <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Без бюджета
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[56px]">
        3 канала для первых клиентов
      </h2>

      <div className="flex gap-[36px] max-w-[1300px]">
        {channels.map((ch, i) => (
          <div key={i} className="flex-1 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[hsl(var(--slide-gold)/0.4)] to-transparent" />
            <div className="pt-[32px]">
              <div className="flex items-center gap-[12px] mb-[8px]">
                <span className="font-mono text-[16px] text-[hsl(var(--slide-gold)/0.5)]">{ch.num}</span>
                <span className="text-[36px]">{ch.icon}</span>
              </div>
              <h3 className="text-[28px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">{ch.title}</h3>
              <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[20px]">{ch.subtitle}</p>
              <div className="space-y-[12px]">
                {ch.points.map((p, j) => (
                  <div key={j} className="flex items-start gap-[10px]">
                    <span className="text-[8px] text-[hsl(var(--slide-gold))] mt-[8px]">●</span>
                    <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
