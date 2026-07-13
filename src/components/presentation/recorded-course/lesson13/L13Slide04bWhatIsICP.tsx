import { useIsMobile } from "@/hooks/use-mobile";

const reasons = [
  {
    n: "1",
    title: "Сообщение бьёт в цель",
    text: "Когда ты знаешь, кому пишешь — слова в outreach, лендинге и demo звучат как «про меня». Без ICP сообщение размытое и проходит мимо.",
  },
  {
    n: "2",
    title: "Короткий цикл сделки",
    text: "Правильный ICP уже признал проблему и имеет бюджет. Сделка закрывается за недели, а не за месяцы переписки с «может быть».",
  },
  {
    n: "3",
    title: "Экономишь время и деньги",
    text: "Соло-фаундер не может работать со всеми. ICP отсекает плохих лидов до того, как ты потратишь на них час discovery-звонка.",
  },
  {
    n: "4",
    title: "Продукт становится лучше",
    text: "Узкий ICP даёт чёткий фидбек. Широкий ICP — противоречивый: одни просят X, другие Y, и ты строишь Франкенштейна.",
  },
];

export default function L13Slide04bWhatIsICP() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Что такое ICP
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          ICP = <span className="text-[hsl(var(--slide-gold))]">Ideal Customer Profile</span>
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[12px]">
          Точный портрет компании и человека, которому твой продукт нужен <span className="text-[hsl(var(--slide-text))]">сильнее всего, прямо сейчас, и кто готов за него платить</span>. Не «целевая аудитория». Не «B2B SaaS». Конкретный клиент.
        </p>
        <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Почему это критично
        </p>
        <div className="space-y-[5px]">
          {reasons.map((r) => (
            <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{r.n}</span>
                <span className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{r.title}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[16px]">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[22px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[18px]">
        Что такое ICP и почему это критично
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[22px] tracking-[-0.02em]">
        ICP = <span className="text-[hsl(var(--slide-gold))]">Ideal Customer Profile</span>
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[40px] max-w-[1700px]">
        Точный портрет компании и человека, которому твой продукт нужен <span className="text-[hsl(var(--slide-text))] font-medium">сильнее всего, прямо сейчас, и кто готов за него платить</span>.
        Не «целевая аудитория». Не «B2B SaaS». Конкретный клиент, на котором сходится боль, бюджет и триггер.
      </p>
      <div className="grid grid-cols-2 gap-x-[36px] gap-y-[24px] max-w-[1700px]">
        {reasons.map((r) => (
          <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[36px] py-[28px]">
            <div className="flex items-baseline gap-[20px] mb-[12px]">
              <span className="font-display text-[52px] font-bold text-[hsl(var(--slide-gold))] leading-none">{r.n}</span>
              <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{r.title}</p>
            </div>
            <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[62px]">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}