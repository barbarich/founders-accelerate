export default function M1Slide25ReviewFormat() {
  const points = [
    { emoji: "👋", label: "Кто вы", hint: "Имя, бэкграунд, чем занимаетесь" },
    { emoji: "💡", label: "Идея / продукт", hint: "Что делаете — в одном предложении" },
    { emoji: "😤", label: "Проблема → решение", hint: "Какая боль и как вы её закрываете" },
    { emoji: "👥", label: "Для кого", hint: "Кто ваш клиент — кто заплатит" },
    { emoji: "📍", label: "Стадия", hint: "Идея, прототип, MVP, первые клиенты?" },
    { emoji: "🤝", label: "Команда", hint: "Один или с кем-то, какие роли" },
    { emoji: "🎯", label: "Чего хотите от программы", hint: "Главный запрос на ближайшие 12 недель" },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Давайте познакомимся 🙌</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
        Расскажите о себе и своей идее
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[44px]">
        У каждого 5 минут. Свободный рассказ — без оценок и вопросов. Просто знакомимся.
      </p>

      <div className="grid grid-cols-2 gap-x-[32px] gap-y-[16px] max-w-[1100px]">
        {points.map((p, i) => (
          <div key={i} className="flex items-start gap-[14px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[16px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] w-[30px] h-[30px] rounded-full flex items-center justify-center shrink-0 font-bold">{i + 1}</span>
            <span className="text-[28px] shrink-0">{p.emoji}</span>
            <div>
              <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))] leading-[1.3]">{p.label}</p>
              <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.hint}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[36px] flex items-center gap-[12px]">
        <span className="font-mono text-[17px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[6px] rounded">5 мин × 5 человек = 25 мин</span>
        <span className="text-[18px] text-[hsl(var(--slide-text-muted))]">Нет неправильных ответов — рассказывайте как есть</span>
      </div>
    </div>
  );
}
