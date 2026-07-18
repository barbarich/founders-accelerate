import { useIsMobile } from "@/hooks/use-mobile";

const topics = [
  "Meta Business Manager: кампания за 20 минут",
  "Advantage+ — отдаёшь таргет алгоритму, заливаешь пачку креативов",
  "Бюджеты и learning phase: сколько и как долго",
  "Что читать в метриках и когда выключать креатив",
];

export default function L11Slide23NextWeek() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Дальше · Урок 12</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Запуск: <span className="text-[hsl(var(--slide-gold))]">платный трафик</span>
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[10px]">
          Упаковка и воронка готовы. Теперь заводим Meta и запускаем рекламу на холодную аудиторию.
        </p>
        <div className="space-y-[5px] mb-[8px]">
          {topics.map((t, i) => (
            <p key={i} className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
              <span className="text-[hsl(var(--slide-gold))] mr-[6px]">→</span>{t}
            </p>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Приносишь готовую упаковку - в L12 запускаем твою реальную кампанию.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Дальше · Урок 12</p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Запуск: <span className="text-[hsl(var(--slide-gold))]">платный трафик</span>
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[28px] max-w-[1500px]">
        Упаковка и воронка готовы. Теперь заводим Meta и запускаем рекламу на холодную аудиторию - без слитого бюджета.
      </p>
      <div className="space-y-[10px] max-w-[1600px] mb-[28px]">
        {topics.map((t, i) => (
          <p key={i} className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
            <span className="text-[hsl(var(--slide-gold))] mr-[12px]">→</span>{t}
          </p>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1600px] leading-[1.4]">
        Приносишь готовую упаковку - в уроке 12 запускаем твою реальную кампанию вживую.
      </p>
    </div>
  );
}
