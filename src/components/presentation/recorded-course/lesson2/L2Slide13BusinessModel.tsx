import { useIsMobile } from "@/hooks/use-mobile";

export default function L2Slide13BusinessModel() {
  const items = [
    { icon: "💵", title: "Как зарабатывает", text: "Подписка / разовая / freemium" },
    { icon: "📊", title: "Какие тарифы", text: "Что в каждом тарифе" },
    { icon: "🔓", title: "Что бесплатно", text: "За что просят деньги" },
    { icon: "🚧", title: "Где paywall", text: "На каком шаге" },
    { icon: "📢", title: "Как привлекает", text: "Реклама, контент, партнёры" },
    { icon: "🎯", title: "Что взять себе", text: "Фича, подход, структура" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Шаблон разбора</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Бизнес-модель конкурента
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[14px]">Не просто "подписка $29". Понимайте всю картину.</p>
        <div className="grid grid-cols-2 gap-[6px]">
          {items.map((item, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] p-[10px]">
              <div className="flex items-center gap-[6px] mb-[4px]">
                <span className="text-[16px]">{item.icon}</span>
                <h3 className="text-[11px] font-semibold text-[hsl(var(--slide-text))]">{item.title}</h3>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Шаблон разбора</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">
        Бизнес-модель конкурента
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[48px]">Не просто "подписка $29". Понимайте всю картину.</p>
      <div className="grid grid-cols-3 gap-[24px]">
        {items.map((item, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[28px]">
            <span className="text-[32px]">{item.icon}</span>
            <h3 className="text-[20px] font-semibold text-[hsl(var(--slide-text))] mt-[12px] mb-[8px]">{item.title}</h3>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
