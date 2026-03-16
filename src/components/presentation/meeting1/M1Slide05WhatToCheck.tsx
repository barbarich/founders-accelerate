export default function M1Slide05WhatToCheck() {
  const items = [
    { icon: "💰", title: "Цена и модель монетизации", text: "Ваш ценовой коридор" },
    { icon: "⭐", title: "Негативные отзывы (1–2 звезды)", text: "Неудовлетворённые потребности = ваша возможность" },
    { icon: "🖥️", title: "Первый экран лендинга", text: "Как они формулируют ценность" },
    { icon: "🕳️", title: "Что НЕ делают", text: "Пробелы в функционале = ваша ниша" },
    { icon: "📧", title: "Email-воронка и онбординг", text: "Подпишитесь — изучите каждое письмо" },
    { icon: "📱", title: "Соцсети и комьюнити", text: "О чём жалуются и что хвалят пользователи" },
    { icon: "📊", title: "Трафик и каналы привлечения", text: "Откуда приходят клиенты (SimilarWeb)" },
    { icon: "🔄", title: "Частота обновлений", text: "Как быстро развивают продукт" },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Что смотреть у конкурентов</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[64px]">
        4 вещи, а не всё подряд
      </h2>
      <div className="grid grid-cols-2 gap-[32px]">
        {items.map((item, i) => (
          <div key={i} className="flex gap-[24px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
            <span className="text-[40px] shrink-0">{item.icon}</span>
            <div>
              <h3 className="text-[24px] font-semibold text-[hsl(var(--slide-text))] mb-[8px]">{item.title}</h3>
              <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[48px] bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[32px] py-[20px]">
        <p className="text-[20px] text-[hsl(var(--slide-gold))] font-medium leading-[1.6]">
          💡 web.archive.org — машина времени для сайтов. Смотрите, как конкуренты менялись: какие фичи добавляли, как переписывали лендинг, как трансформировали позиционирование. История изменений — это карта их стратегии.
        </p>
      </div>
    </div>
  );
}
