import { useIsMobile } from "@/hooks/use-mobile";

const tasks = [
  { n: "1", t: "Killer ICP · 7 фильтров", d: "Определи свой ICP по 7 пунктам в одной странице Notion. Перепиши свой текущий «ICP» если он размазан." },
  { n: "2", t: "Dream 50 + 150 имён", d: "Построй target list в Apollo / LinkedIn Sales Nav. 50 счетов × 3 stakeholder'а. Tier A/B/C." },
  { n: "3", t: "10 trigger-based outreach", d: "10 personalized DM/email на конкретный trigger из Tier A. Не «ваш ICP» — конкретный сигнал." },
  { n: "4", t: "3 discovery-звонка с pre-call promprt'ом", d: "Применяй главный AI-промпт перед каждым. 5 вопросов дословно. Если в pipeline пусто — на звонок идёт ближайший знакомый из 4-го круга." },
  { n: "5", t: "1 closed deal ИЛИ 1 MAP подписан", d: "Минимум: подписанный Mutual Action Plan с реальным клиентом на pilot. Если есть закрытая сделка — ещё лучше." },
  { n: "6", t: "5-мин питч готов к M12", d: "Проблема (1м) · решение (1м) · traction (1м) · команда+ask (1м) · CTA (1м). Прорепетирован вслух 3 раза." },
];

export default function M11Slide17Homework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Домашка · к встрече 12 (финал)
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Запусти motion · <span className="text-[hsl(var(--slide-gold))]">не теорию</span>
        </h2>
        <div className="space-y-[3px]">
          {tasks.map((t) => (
            <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[3px]">
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{t.n}</span>
                <span className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[16px]">{t.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Домашка · к встрече 12 (финал)
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em]">
        Запусти motion · <span className="text-[hsl(var(--slide-gold))]">не теорию</span>
      </h2>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1700px]">
        {tasks.map((t) => (
          <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[26px] py-[14px]">
            <div className="flex items-baseline gap-[14px] mb-[4px]">
              <span className="font-display text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-none">{t.n}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5] ml-[48px]">{t.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
