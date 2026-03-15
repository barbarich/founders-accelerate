export default function M1Slide12Teardown() {
  const checklist = [
    "Первое впечатление (первые 10 секунд)",
    "Сколько шагов в онбординге",
    "Где просят деньги и как агрессивно",
    "Что понравилось (что украдёшь)",
    "Что бесит (что сделаешь лучше)",
    "Скриншоты каждого шага",
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Продуктовый teardown</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px]">
        Зарегистрируйся у конкурента как клиент
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[56px]">
        Чего никакой AI не даст — только руки. Зайди на сайт, зарегистрируйся, пройди весь путь.
      </p>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[48px] max-w-[1000px]">
        <h3 className="text-[24px] font-semibold text-[hsl(var(--slide-text))] mb-[28px]">Чеклист что записать</h3>
        <div className="space-y-[20px]">
          {checklist.map((item, i) => (
            <div key={i} className="flex items-center gap-[16px]">
              <div className="w-[28px] h-[28px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0">
                <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
              </div>
              <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
