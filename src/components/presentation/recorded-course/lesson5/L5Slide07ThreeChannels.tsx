import { useIsMobile } from "@/hooks/use-mobile";

const channels = [
  {
    num: "01",
    icon: "✉️",
    title: "Cold outreach",
    subtitle: "DM и email",
    points: [
      "Персонализированные сообщения",
      "LinkedIn, email, Telegram DM",
      "AI помогает масштабировать",
    ],
  },
  {
    num: "02",
    icon: "👥",
    title: "Комьюнити",
    subtitle: "Где уже есть ваша аудитория",
    points: [
      "Reddit, Telegram-группы, Facebook",
      "LinkedIn-посты, нишевые форумы",
      "Давать ценность, а не спамить",
    ],
  },
  {
    num: "03",
    icon: "📝",
    title: "Контент",
    subtitle: "Один пост который привлекает",
    points: [
      "Building in public",
      "История создания продукта",
      "Конкретный результат / инсайт",
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
