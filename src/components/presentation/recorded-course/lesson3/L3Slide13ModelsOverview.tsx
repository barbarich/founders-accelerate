import { useIsMobile } from "@/hooks/use-mobile";

export default function L3Slide13ModelsOverview() {
  const classicModels = [
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
        <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Монетизация</p>
        <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          7 моделей монетизации
        </h2>
        <div className="space-y-[8px] mb-[14px]">
          {classicModels.map((m, i) => (
            <div key={i} className="flex items-start gap-[10px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[14px] py-[10px]">
              <span className="text-[18px] shrink-0">{m.icon}</span>
              <div>
                <p className="text-[13px] font-semibold text-[hsl(var(--slide-text))]">{m.name}</p>
                <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.example} · {m.when}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.4)] rounded-[10px] px-[14px] py-[12px]">
          <div className="flex items-center gap-[8px] mb-[6px]">
            <span className="text-[18px]">🤖</span>
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))]">Оплата за результат</p>
            <span className="text-[9px] bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] px-[6px] py-[2px] rounded font-bold uppercase">Тренд 2026</span>
          </div>
          <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.5]">
            AI-агенты меняют правила: клиент платит не за доступ к инструменту, а за выполненную работу. Результат измерим — цена привязана к outcome.
          </p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[5px]">Devin, AI SDR-агенты, лидген-сервисы</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[20px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[18px]">Монетизация</p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">7 моделей монетизации</h2>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1200px] mb-[28px]">
        {classicModels.map((m, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[22px] py-[18px]">
            <span className="text-[28px]">{m.icon}</span>
            <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))] mt-[8px] mb-[4px]">{m.name}</p>
            <p className="text-[15px] text-[hsl(var(--slide-gold))] mb-[3px]">{m.example}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{m.when}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.06)] border-2 border-[hsl(var(--slide-gold)/0.4)] rounded-[18px] px-[36px] py-[26px] max-w-[1200px] flex items-start gap-[28px]">
        <span className="text-[28px] shrink-0">🤖</span>
        <div className="flex-1">
          <div className="flex items-center gap-[14px] mb-[5px]">
            <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))]">Оплата за результат (Outcome-based)</p>
            <span className="text-[12px] bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] px-[10px] py-[3px] rounded-full font-bold uppercase tracking-wider">Тренд 2026</span>
          </div>
          <p className="text-[15px] text-[hsl(var(--slide-gold))] mb-[3px]">Devin, AI SDR-агенты, AI-рекрутеры</p>
          <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            AI-агенты меняют правила: клиент платит не за доступ, а за выполненную работу. Нет результата — нет оплаты.
          </p>
        </div>
      </div>
    </div>
  );
}
