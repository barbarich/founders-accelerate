import { useIsMobile } from "@/hooks/use-mobile";

export default function M1Slide05WhatToCheck() {
  const items = [
    { icon: "💰", title: "Цена и модель", text: "Ваш ценовой коридор" },
    { icon: "⭐", title: "Негативные отзывы", text: "Неудовлетворённые потребности" },
    { icon: "🖥️", title: "Первый экран лендинга", text: "Как формулируют ценность" },
    { icon: "🕳️", title: "Что НЕ делают", text: "Пробелы = ваша ниша" },
    { icon: "📧", title: "Email-воронка", text: "Подпишитесь и изучите" },
    { icon: "📱", title: "Соцсети и комьюнити", text: "Жалобы и похвалы" },
    { icon: "📊", title: "Трафик и каналы", text: "Откуда клиенты (SimilarWeb)" },
    { icon: "🔄", title: "Частота обновлений", text: "Скорость развития" },
    { icon: "🎯", title: "Value Proposition", text: "Почему, что и кому" },
    { icon: "👥", title: "Юзкейсы", text: "Для кого работают" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Что смотреть у конкурентов</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          10 вещей, а не всё подряд
        </h2>
        <div className="grid grid-cols-2 gap-[6px] mb-[10px]">
          {items.map((item, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] p-[8px]">
              <div className="flex items-center gap-[4px] mb-[2px]">
                <span className="text-[14px]">{item.icon}</span>
                <h3 className="text-[11px] font-semibold text-[hsl(var(--slide-text))] leading-[1.2]">{item.title}</h3>
              </div>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px]">
          <p className="text-[9px] text-[hsl(var(--slide-gold))] font-medium leading-[1.5]">
            💡 web.archive.org — машина времени для сайтов. Смотрите как конкуренты менялись.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Что смотреть у конкурентов</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        10 вещей, а не всё подряд
      </h2>
      <div className="grid grid-cols-5 gap-[20px]">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-[12px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[24px]">
            <span className="text-[32px]">{item.icon}</span>
            <h3 className="text-[20px] font-semibold text-[hsl(var(--slide-text))] leading-[1.2]">{item.title}</h3>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-[40px] bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[32px] py-[20px]">
        <p className="text-[20px] text-[hsl(var(--slide-gold))] font-medium leading-[1.6]">
          💡 web.archive.org — машина времени для сайтов. Смотрите, как конкуренты менялись: какие фичи добавляли, как переписывали лендинг, как трансформировали позиционирование. История изменений — это карта их стратегии.
        </p>
      </div>
    </div>
  );
}
