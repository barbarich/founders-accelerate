const results = [
  { icon: "✅", text: "Проверенная идея с понятной целевой аудиторией" },
  { icon: "👤", text: "Первые пользователи или клиенты" },
  { icon: "🚀", text: "Рабочий MVP или прототип" },
  { icon: "🤖", text: "Навык использования AI для разработки" },
  { icon: "💰", text: "Стратегия монетизации" },
  { icon: "🌐", text: "Нетворк и комьюнити, которое остаётся после программы" },
];

export default function Slide14Results() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Результаты</p>
      <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-[72px]">
        Что получите за 12 недель
      </h2>

      <div className="grid grid-cols-2 gap-x-[80px] gap-y-[40px] max-w-[1400px]">
        {results.map((r, i) => (
          <div key={i} className="flex items-start gap-[20px]">
            <span className="text-[32px] mt-[-4px]">{r.icon}</span>
            <p className="text-[24px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
