import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide13ModelsOverview() {
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
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Монетизация</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px]">7 моделей монетизации</h2>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1100px] mb-[24px]">
        {classicModels.map((m, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[18px] py-[14px]">
            <span className="text-[24px]">{m.icon}</span>
            <p className="text-[17px] font-semibold text-[hsl(var(--slide-text))] mt-[6px] mb-[3px]">{m.name}</p>
            <p className="text-[13px] text-[hsl(var(--slide-gold))] mb-[2px]">{m.example}</p>
            <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.when}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.06)] border-2 border-[hsl(var(--slide-gold)/0.4)] rounded-[16px] px-[32px] py-[22px] max-w-[1100px] flex items-start gap-[24px]">
        <span className="text-[24px] shrink-0">🤖</span>
        <div className="flex-1">
          <div className="flex items-center gap-[12px] mb-[3px]">
            <p className="text-[17px] font-semibold text-[hsl(var(--slide-text))]">Оплата за результат (Outcome-based)</p>
            <span className="text-[11px] bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] px-[8px] py-[2px] rounded-full font-bold uppercase tracking-wider">Тренд 2026</span>
          </div>
          <p className="text-[13px] text-[hsl(var(--slide-gold))] mb-[2px]">Devin, AI SDR-агенты, AI-рекрутеры</p>
          <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
            AI-агенты меняют правила: клиент платит не за доступ, а за выполненную работу. Нет результата — нет оплаты.
          </p>
        </div>
      </div>
    </div>
  );
}
