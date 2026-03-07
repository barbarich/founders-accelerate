const features = [
  { icon: "👥", text: "Маленькая группа 5–7 человек" },
  { icon: "📅", text: "3 месяца, 12 еженедельных встреч по 2 часа" },
  { icon: "💻", text: "Все встречи онлайн (Zoom)" },
  { icon: "🎤", text: "Раз в месяц — сессия с приглашённым экспертом" },
  { icon: "💬", text: "Telegram-группа — я на связи между встречами" },
  { icon: "🤝", text: "Межгрупповые встречи для нетворка" },
];

export default function Slide13Format() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Формат</p>
      <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-[8px]">
        The Founders Circle
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mb-[72px]">
        Акселератор для запуска продуктов
      </p>

      <div className="grid grid-cols-2 gap-[32px] max-w-[1400px]">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-[24px] p-[32px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border))] rounded-[8px]">
            <span className="text-[36px]">{f.icon}</span>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)]">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
