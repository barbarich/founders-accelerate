import { useIsMobile } from "@/hooks/use-mobile";

export default function L4Slide06AIStack() {
  const steps = [
    {
      emoji: "🖼️",
      num: "01",
      title: "Визуализируй идею",
      text: "Опиши продукт словами или покажи скриншот, набросок, референс. AI превращает это в первый экран.",
    },
    {
      emoji: "🧩",
      num: "02",
      title: "Собери прототип",
      text: "Экран за экраном - кликабельный поток от входа до результата. Реальные тексты, единый стиль.",
    },
    {
      emoji: "🔍",
      num: "03",
      title: "Доработай",
      text: "Пройди прототип как пользователь. Правь, пока за 10 секунд не ясно: что это, кому и зачем.",
    },
  ];

  const tools = [
    { name: "Lovable", desc: "визуальный сборщик, деплой в 1 клик" },
    { name: "Claude Design", desc: "прототип из описания прямо в чате" },
    { name: "Codex", desc: "для тех, кто работает с кодом" },
  ];

  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Прототип за 3 шага</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          От идеи к рабочему прототипу
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[14px]">Ты думаешь и решаешь - AI собирает</p>
        <div className="space-y-[8px]">
          {steps.map((s, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[9px]">
              <div className="flex items-center gap-[8px] mb-[3px]">
                <span className="text-[16px]">{s.emoji}</span>
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold)/0.6)]">{s.num}</span>
                <span className="text-[12px] font-semibold text-[hsl(var(--slide-text))]">{s.title}</span>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-[12px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
          <p className="text-[9px] uppercase tracking-widest text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Чем собрать - на выбор</p>
          <div className="space-y-[3px]">
            {tools.map((t, i) => (
              <p key={i} className="text-[10px] text-[hsl(var(--slide-text-muted))]">
                <span className="text-[hsl(var(--slide-text))] font-semibold">{t.name}</span> - {t.desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Прототип за 3 шага</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
        От идеи к рабочему прототипу
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[40px]">
        Не всё сразу, а по шагам. Ты думаешь и решаешь - AI собирает.
      </p>
      <div className="flex gap-[32px] mb-[28px]">
        {steps.map((s, i) => (
          <div key={i} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] p-[32px]">
            <div className="flex items-center gap-[12px] mb-[16px]">
              <span className="text-[40px]">{s.emoji}</span>
              <span className="font-mono text-[18px] text-[hsl(var(--slide-gold)/0.5)]">{s.num}</span>
            </div>
            <h3 className="text-[24px] font-semibold text-[hsl(var(--slide-text))] mb-[12px]">{s.title}</h3>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-[20px] bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[18px]">
        <span className="text-[15px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-semibold shrink-0">Чем собрать · на выбор</span>
        <div className="flex gap-[28px] flex-1">
          {tools.map((t, i) => (
            <div key={i} className="flex items-baseline gap-[8px]">
              <span className="text-[19px] font-semibold text-[hsl(var(--slide-text))]">{t.name}</span>
              <span className="text-[16px] text-[hsl(var(--slide-text-muted))]">- {t.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
