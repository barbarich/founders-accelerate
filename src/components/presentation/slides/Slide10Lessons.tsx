const lessons = [
  {
    icon: "💡",
    title: "Не нужен миллион",
    subtitle: "Самое сложное — начать",
    text: "Можно запуститься с минимальным бюджетом. Главное — правильная стратегия и скорость.",
  },
  {
    icon: "🤖",
    title: "AI изменил правила",
    subtitle: "",
    text: "Один человек с AI сейчас может то, на что раньше нужна была команда из 10.",
  },
  {
    icon: "👥",
    title: "Группа ускоряет в разы",
    subtitle: "",
    text: "Ментор + окружение = антидот к прокрастинации и ошибкам в одиночку.",
  },
];

export default function Slide10Lessons() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Инсайты</p>
      <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-[80px]">
        Чему меня научил этот путь
      </h2>

      <div className="flex gap-[60px]">
        {lessons.map((l, i) => (
          <div key={i} className="flex-1 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[hsl(var(--slide-gold)/0.4)] to-transparent" />
            <div className="pt-[40px]">
              <span className="text-[48px]">{l.icon}</span>
              <h3 className="text-[28px] font-semibold text-[hsl(var(--slide-text))] mt-[20px] mb-[12px]">{l.title}</h3>
              {l.subtitle && <p className="text-[18px] text-[hsl(var(--slide-gold))] mb-[12px]">{l.subtitle}</p>}
              <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">{l.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
