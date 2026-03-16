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
    { icon: "🎯", title: "Value Proposition", text: "Почему, что и кому продают — разберите их обещание" },
    { icon: "👥", title: "Юзкейсы и аудитория", text: "Для кого работают — найдите кейсы на сайте и в отзывах" },
  ];
...
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        10 вещей, а не всё подряд
      </h2>
      <div className="grid grid-cols-4 gap-[24px]">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-[12px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[24px]">
            <span className="text-[32px]">{item.icon}</span>
            <h3 className="text-[20px] font-semibold text-[hsl(var(--slide-text))] leading-[1.2]">{item.title}</h3>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{item.text}</p>
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
