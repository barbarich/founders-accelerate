import { useIsMobile } from "@/hooks/use-mobile";

export default function L1Slide08cValidateProblem() {
  const isMobile = useIsMobile();

  const askPoints = [
    "Насколько часто люди сталкиваются с этой проблемой",
    "Как они решают её сейчас — какие костыли и ручные обходы",
    "Сколько уже платят за обходные решения",
    "Где и как громко жалуются",
  ];
  const signalPoints = [
    "Люди тратят деньги или время на костыли",
    "Жалуются публично — в отзывах, тредах, чатах",
    "Есть конкуренты, которые на этом зарабатывают",
  ];

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Главное правило ресёрча</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Сначала проверь, что проблема реальна
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[12px]">
          Карта конкурентов — полдела. Тот же Deep Research направь на саму проблему.
        </p>
        <div className="space-y-[8px] mb-[10px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[12px]">
            <h3 className="text-[11px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">Что спросить про проблему</h3>
            {askPoints.map((p, i) => (
              <div key={i} className="flex items-start gap-[6px] mb-[3px]">
                <span className="text-[hsl(var(--slide-gold))] text-[10px] mt-[1px]">•</span>
                <span className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p}</span>
              </div>
            ))}
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[12px]">
            <h3 className="text-[11px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">Сигналы, что проблема настоящая</h3>
            {signalPoints.map((p, i) => (
              <div key={i} className="flex items-start gap-[6px] mb-[3px]">
                <span className="text-[hsl(var(--slide-gold))] text-[10px] mt-[1px]">•</span>
                <span className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[2px] border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-medium leading-[1.5]">
            ⚠️ Нет конкурентов и нет жалоб — почти всегда значит, что проблемы нет, а не что ты гений.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Главное правило ресёрча</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
        Сначала проверь, что <span className="text-[hsl(var(--slide-gold))]">проблема реальна</span>
      </h2>
      <p className="text-[26px] text-[hsl(var(--slide-text-muted))] mb-[40px]">
        Карта конкурентов — это полдела. Тот же Deep Research направь на саму проблему, а не только на игроков.
      </p>
      <div className="grid grid-cols-2 gap-[32px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[32px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[18px]">Что спросить у AI про проблему</h3>
          <div className="space-y-[12px]">
            {askPoints.map((p, i) => (
              <div key={i} className="flex items-start gap-[12px]">
                <span className="text-[hsl(var(--slide-gold))] text-[20px] leading-[1.4]">•</span>
                <span className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{p}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[32px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[18px]">Сигналы, что проблема настоящая</h3>
          <div className="space-y-[12px]">
            {signalPoints.map((p, i) => (
              <div key={i} className="flex items-start gap-[12px]">
                <span className="text-[hsl(var(--slide-gold))] text-[20px] leading-[1.4]">•</span>
                <span className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[32px] bg-[hsl(var(--slide-gold)/0.06)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[28px] py-[18px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-medium">
          ⚠️ Нет конкурентов и нет жалоб — почти всегда значит, что проблемы нет, а не что ты нашёл голубой океан.
        </p>
      </div>
    </div>
  );
}
