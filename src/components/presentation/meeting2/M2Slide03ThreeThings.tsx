import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide03ThreeThings() {
  const items = [
    { num: "01", icon: "💬", title: "Позиционирование через результат", text: "Не что вы делаете, а что клиент получает — одно предложение" },
    { num: "02", icon: "💰", title: "Цена = стоимость результата", text: "Модель монетизации, психология цены, первый прайс" },
    { num: "03", icon: "🛠️", title: "MVP = минимум для результата", text: "Убираем всё, что не ведёт к результату клиента" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">План на сегодня</p>
        <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[24px]">
          Три вещи которые мы сделаем
        </h2>
        <div className="space-y-[14px]">
          {items.map((item, i) => (
            <div key={i} className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[12px]">
              <div className="flex items-center gap-[8px] mb-[6px]">
                <span className="font-mono text-[10px] text-[hsl(var(--slide-gold)/0.5)]">{item.num}</span>
                <span className="text-[18px]">{item.icon}</span>
                <h3 className="text-[15px] font-semibold text-[hsl(var(--slide-text))]">{item.title}</h3>
              </div>
              <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">План на сегодня</p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[64px]">
        Три вещи которые мы сделаем
      </h2>
      <div className="flex gap-[48px]">
        {items.map((item, i) => (
          <div key={i} className="flex-1 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[hsl(var(--slide-gold)/0.4)] to-transparent" />
            <div className="pt-[36px]">
              <div className="flex items-center gap-[12px] mb-[20px]">
                <span className="font-mono text-[16px] text-[hsl(var(--slide-gold)/0.5)]">{item.num}</span>
                <span className="text-[36px]">{item.icon}</span>
              </div>
              <h3 className="text-[28px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">{item.title}</h3>
              <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
