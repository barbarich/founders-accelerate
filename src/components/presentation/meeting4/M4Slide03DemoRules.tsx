import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { time: "0:00 – 0:30", title: "Ты и твой клиент", question: "Кто ты, для кого делаешь, какую боль решаешь" },
  { time: "0:30 – 2:00", title: "Демо продукта", question: "Покажи что есть: MVP, прототип или черновик — вживую, как будто перед клиентом" },
  { time: "2:00 – 3:00", title: "Почему это работает", question: "В чём ценность? Чем лучше альтернатив? Покажи результат" },
  { time: "3:00 – 4:00", title: "Лендинг и упаковка", question: "Как выглядит снаружи — зайди на лендинг, покажи оффер" },
  { time: "4:00 – 4:30", title: "Что уже сделал", question: "Первые шаги: кому показал, что услышал, какие метрики" },
  { time: "4:30 – 5:00", title: "Следующий шаг", question: "Что сделаешь на этой неделе, чтобы получить первого клиента" },
];

export default function M4Slide03DemoRules() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Демо-день
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Питч как для клиента
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[12px]">Представь, что перед тобой потенциальный клиент. 5 минут питч + 5 минут фидбек</p>
        <div className="space-y-[6px]">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] px-[5px] py-[2px] rounded shrink-0 mt-[1px]">
                {s.time}
              </span>
              <div>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{s.title}</p>
                <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{s.question}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Демо-день
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
        Питч как для клиента
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[48px]">Представь, что перед тобой потенциальный клиент. 5 минут питч + 5 минут фидбек</p>

      <div className="space-y-[16px] max-w-[1200px]">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-[24px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[32px] py-[20px]">
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded-[8px] shrink-0 min-w-[160px] text-center">
              {s.time}
            </span>
            <div>
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{s.title}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.question}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
