import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide20KillFeatures() {
  const categories = [
    {
      name: "MUST HAVE",
      emoji: "🔴",
      rule: "Без этого клиент НЕ получит результат",
      example: "Создание курса из текста",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
    },
    {
      name: "SHOULD HAVE",
      emoji: "🟡",
      rule: "Результат будет лучше, но и без этого работает",
      example: "Система отзывов от учеников",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
    },
    {
      name: "COULD HAVE",
      emoji: "🔵",
      rule: "Хотелка. Не влияет на результат клиента",
      example: "Анимации интерфейса",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      name: "WON'T HAVE",
      emoji: "⚫",
      rule: "Не делаем сейчас. Запиши и забудь",
      example: "Мобильное приложение",
      color: "text-[hsl(var(--slide-text-muted))]",
      bgColor: "bg-[hsl(var(--slide-bg))]",
      borderColor: "border-[hsl(var(--slide-border)/0.3)]",
    },
  ];

  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">MVP</p>
        <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Метод MoSCoW
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mb-[14px]">Как выбрать что строить, а что — нет</p>
        <div className="space-y-[6px] mb-[10px]">
          {categories.map((cat, i) => (
            <div key={i} className={`${cat.bgColor} border ${cat.borderColor} rounded-[8px] px-[12px] py-[8px]`}>
              <div className="flex items-center gap-[8px] mb-[3px]">
                <span className="text-[14px]">{cat.emoji}</span>
                <span className={`text-[12px] font-bold ${cat.color} uppercase tracking-wider`}>{cat.name}</span>
              </div>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{cat.rule}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text-muted))] italic">Пример: {cat.example}</p>
            </div>
          ))}
        </div>
        <div className="space-y-[6px]">
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[11px] text-[hsl(var(--slide-text))]">💡 Твой MVP = только MUST HAVE</p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))]">⚠️ Если MUST больше 3-4 — ты обманываешь себя</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">MVP</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">Метод MoSCoW</h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[32px]">Как выбрать что строить для MVP, а что — нет</p>

      <div className="flex gap-[16px] max-w-[1100px] mb-[24px]">
        {categories.map((cat, i) => (
          <div key={i} className={`flex-1 ${cat.bgColor} border ${cat.borderColor} rounded-[12px] p-[20px] flex flex-col`}>
            <div className="flex items-center gap-[8px] mb-[10px]">
              <span className="text-[22px]">{cat.emoji}</span>
              <span className={`text-[14px] font-bold ${cat.color} uppercase tracking-wider`}>{cat.name}</span>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[10px] flex-1">{cat.rule}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] italic">Пример: {cat.example}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-[16px] max-w-[1100px]">
        <div className="flex-1 bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[24px] py-[16px]">
          <p className="text-[18px] text-[hsl(var(--slide-text))] font-semibold">💡 Твой MVP = только MUST HAVE. Всё остальное — после запуска.</p>
        </div>
        <div className="flex-[0.7] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[24px] py-[16px]">
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))]">⚠️ Если MUST больше 3-4 фичей — ты обманываешь себя. Перечитай каждую.</p>
        </div>
      </div>
    </div>
  );
}
