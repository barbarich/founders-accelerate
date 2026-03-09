import { useIsMobile } from "@/hooks/use-mobile";

const results = [
  { icon: "🗺️", title: "Чёткий план действий", desc: "Понимание каждого шага — от идеи до продукта в рынке" },
  { icon: "🔥", title: "Мотивация и дисциплина", desc: "Группа, ментор и система, которые не дадут остановиться" },
  { icon: "🤖", title: "AI как суперсила", desc: "Навык создания продуктов с помощью AI — без команды разработчиков" },
  { icon: "💰", title: "Рабочая бизнес-модель", desc: "Понятная монетизация, проверенная на реальных клиентах" },
  { icon: "👥", title: "Первые пользователи", desc: "Стратегия привлечения и первые платящие клиенты" },
  { icon: "🌐", title: "Комьюнити 170+ фаундеров", desc: "Нетворк, поддержка и связи, которые остаются навсегда" },
];

export default function Slide14Results() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Результат</p>
        <h2 className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">Что вы получите за 12 недель</h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[20px]">
          Неважно, на какой вы стадии — программа ускорит ваш путь к результату.
        </p>
        <div className="grid grid-cols-2 gap-[8px]">
          {results.map((r, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[12px]">
              <span className="text-[18px] mb-[6px] block">{r.icon}</span>
              <h3 className="text-[13px] font-semibold text-[hsl(var(--slide-text))] mb-[3px] leading-[1.2]">{r.title}</h3>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.7)] leading-[1.4]">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Результат</p>
      <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">Что вы получите за 12 недель</h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[64px]">
        Неважно, на какой вы стадии — идея, прототип или первые клиенты. Программа ускорит ваш путь к результату.
      </p>
      <div className="grid grid-cols-3 gap-[28px]">
        {results.map((r, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[40px] flex flex-col">
            <span className="text-[36px] mb-[20px]">{r.icon}</span>
            <h3 className="text-[26px] font-semibold text-[hsl(var(--slide-text))] mb-[12px] leading-[1.2]">{r.title}</h3>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.7)] leading-[1.5]">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
