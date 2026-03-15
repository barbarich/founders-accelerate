export default function M1Slide25ReviewFormat() {
  const steps = [
    { time: "1 мин", label: "Показываете прототип/продукт (экран)" },
    { time: "30 сек", label: "Зачитываете позиционирование" },
    { time: "1.5 мин", label: 'Я задаю вопросы: "кто за это заплатит?", "как узнал что это проблема?"' },
    { time: "1 мин", label: "Группа задаёт вопрос" },
    { time: "1 мин", label: "Мой вердикт: что сильно, где слабое, что проверить первым" },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Разбор каждого участника</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        Формат разбора — 5 минут на каждого
      </h2>
      <div className="space-y-[20px] max-w-[1000px]">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-[20px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[28px]">
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[6px] rounded shrink-0">{s.time}</span>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
