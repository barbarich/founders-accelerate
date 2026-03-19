import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide13ModelsOverview() {
  const models = [
    { icon: "🔄", name: "Подписка (SaaS)", example: "Netflix, Notion, Slack", when: "Регулярное использование, высокая retention" },
    { icon: "🆓", name: "Freemium", example: "Spotify, Canva, Zoom", when: "Массовый рынок, вирусный рост" },
    { icon: "💳", name: "Разовая покупка", example: "Figma плагины, курсы", when: "Чёткий одноразовый результат" },
    { icon: "🤝", name: "Marketplace / комиссия", example: "Airbnb, Uber, Fiverr", when: "Соединяете двух сторон" },
    { icon: "📊", name: "Usage-based", example: "AWS, Twilio, OpenAI API", when: "Оплата за объём использования" },
    { icon: "🏢", name: "Enterprise / Custom", example: "Salesforce, SAP", when: "Крупные клиенты, длинные циклы" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Монетизация</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          6 моделей монетизации
        </h2>
        <div className="space-y-[6px]">
          {models.map((m, i) => (
            <div key={i} className="flex items-start gap-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <span className="text-[14px] shrink-0">{m.icon}</span>
              <div>
                <p className="text-[11px] font-semibold text-[hsl(var(--slide-text))]">{m.name}</p>
                <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{m.example} · {m.when}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Монетизация</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[44px]">6 моделей монетизации</h2>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1100px]">
        {models.map((m, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[18px]">
            <span className="text-[28px]">{m.icon}</span>
            <p className="text-[19px] font-semibold text-[hsl(var(--slide-text))] mt-[8px] mb-[6px]">{m.name}</p>
            <p className="text-[15px] text-[hsl(var(--slide-gold))] mb-[4px]">{m.example}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.when}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
