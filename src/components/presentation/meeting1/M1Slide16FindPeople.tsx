export default function M1Slide16FindPeople() {
  const channels = [
    { icon: "💼", title: "LinkedIn", text: 'Поиск по должности. "Привет, я разрабатываю продукт для [ниша]. Можно 15 минут? Не продаю, хочу понять как вы решаете [проблему]."' },
    { icon: "💬", title: "Telegram / Facebook группы", text: '"Делаю исследование про [тему]. Кто сталкивается с [проблемой]? 15 минут разговора, поделюсь результатами."' },
    { icon: "🔴", title: "Reddit", text: "Найти сабреддит, почитать жалобы, написать активным пользователям." },
    { icon: "🤝", title: "Нетворк", text: 'Не друзья, а "кого ты знаешь кто работает в [нише]?" Один шаг от тебя — уже ценный респондент.' },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Где найти людей для интервью</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        "Где взять 5 человек?" — вот где
      </h2>
      <div className="grid grid-cols-2 gap-[28px] mb-[36px]">
        {channels.map((c, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[32px]">
            <div className="flex items-center gap-[12px] mb-[12px]">
              <span className="text-[28px]">{c.icon}</span>
              <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))]">{c.title}</h3>
            </div>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{c.text}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[32px] py-[16px]">
        <p className="text-[20px] text-[hsl(var(--slide-gold))] font-medium">
          📊 Конверсия: 10–15 сообщений → 1–2 интервью. Пишите 20 — получите 3–5.
        </p>
      </div>
    </div>
  );
}
