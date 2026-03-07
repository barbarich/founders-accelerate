const pains = [
  "«У меня есть идея уже полгода, но я не знаю с чего начать»",
  "«Начал строить, застрял и забросил»",
  "«Не технический — не могу сделать продукт»",
  "«Делаю один, не хватает обратной связи»",
  "«Не понимаю как найти первых клиентов»",
];

export default function Slide11PainPoints() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Проблема</p>
      <h2 className="text-[72px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-[72px]">
        Знакомо?
      </h2>

      <div className="space-y-[28px] max-w-[1200px]">
        {pains.map((p, i) => (
          <div key={i} className="flex items-center gap-[24px] py-[20px] border-b border-[hsl(var(--slide-border)/0.5)]">
            <span className="text-[20px] font-mono text-[hsl(var(--slide-gold)/0.5)] w-[40px] shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-[26px] text-[hsl(var(--slide-text)/0.9)] font-light italic">{p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
