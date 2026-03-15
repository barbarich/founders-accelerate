export default function M1Slide13BusinessModel() {
  const items = [
    { icon: "💵", title: "Как зарабатывает", text: "Подписка / разовая / freemium / реклама" },
    { icon: "📊", title: "Какие тарифы", text: "Что в каждом тарифе" },
    { icon: "🔓", title: "Что бесплатно", text: "За что просят деньги (это показывает что самое ценное)" },
    { icon: "🚧", title: "Где paywall", text: "На каком шаге" },
    { icon: "📢", title: "Как привлекает клиентов", text: "Реклама, контент, партнёры (SimilarWeb + Meta Ad Library)" },
    { icon: "🎯", title: "Что можно украсть", text: "Конкретная фича, подход, формулировка, структура тарифов" },
  ];

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
