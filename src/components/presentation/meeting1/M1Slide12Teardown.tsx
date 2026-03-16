import { useIsMobile } from "@/hooks/use-mobile";

export default function M1Slide12Teardown() {
  const checklist = [
    "Первое впечатление (первые 10 секунд)",
    "Сколько шагов в онбординге",
    "Где просят деньги и как агрессивно",
    "Что понравилось (что возьмёшь себе)",
    "Что можно улучшить",
    "Скриншоты каждого шага",
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Продуктовый teardown</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Зарегистрируйся у конкурента
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[14px]">
          Зайди на сайт, зарегистрируйся, пройди весь путь.
        </p>
        <div className="flex gap-[8px]">
          <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[12px]">
            <h3 className="text-[11px] font-semibold text-[hsl(var(--slide-text))] mb-[8px]">Чеклист</h3>
            <div className="space-y-[6px]">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-center gap-[6px]">
                  <div className="w-[16px] h-[16px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0">
                    <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
                  </div>
                  <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] p-[12px]">
            <h3 className="text-[11px] font-semibold text-[hsl(var(--slide-gold))] mb-[8px]">Если B2B</h3>
            <div className="space-y-[6px]">
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
                <span className="text-[hsl(var(--slide-gold))]">1.</span> Забронируй демо под видом клиента
              </p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
                <span className="text-[hsl(var(--slide-gold))]">2.</span> Проси доступ к продукту
              </p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
                <span className="text-[hsl(var(--slide-gold))]">3.</span> Разбирай: UX, sales, pricing
              </p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
                <span className="text-[hsl(var(--slide-gold))]">4.</span> Что можно использовать у себя
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Продуктовый teardown</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px]">
        Зарегистрируйся у конкурента как клиент
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[40px]">
        Чего никакой AI не даст — только руки. Зайди на сайт, зарегистрируйся, пройди весь путь.
      </p>
      <div className="flex gap-[24px]">
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[24px]">Чеклист что записать</h3>
          <div className="space-y-[16px]">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-center gap-[14px]">
                <div className="w-[26px] h-[26px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0">
                  <span className="font-mono text-[13px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
                </div>
                <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-gold))] mb-[20px]">Если это B2B</h3>
          <div className="space-y-[14px]">
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6]">
              <span className="text-[hsl(var(--slide-gold))] font-medium">1.</span> Забронируй демо — придумай легенду, что ты их ЦА, готов платить и интересуешься продуктом
            </p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6]">
              <span className="text-[hsl(var(--slide-gold))] font-medium">2.</span> Проси проведение демо и доступ к продукту
            </p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6]">
              <span className="text-[hsl(var(--slide-gold))] font-medium">3.</span> Разбирай на молекулы: UX, sales-процесс, pricing, онбординг
            </p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6]">
              <span className="text-[hsl(var(--slide-gold))] font-medium">4.</span> Думай — что из этого можно использовать у себя
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
