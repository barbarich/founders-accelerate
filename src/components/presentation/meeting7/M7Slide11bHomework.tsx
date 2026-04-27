import { useIsMobile } from "@/hooks/use-mobile";

const tasks = [
  { num: "1", title: "Аудит через промпт", desc: "Прогнать свой onboarding через Friction-audit prompt со скриншотами. На M8 — приносишь карту трения и список 3 правок." },
  { num: "2", title: "Установить замер", desc: "PostHog или Clarity — поставить за 10 мин. Определить funnel из 3–5 шагов. Зафиксировать % дошедших до Aha = baseline." },
  { num: "3", title: "Выкатить 1 правку в прод", desc: "Из quick wins. Не «начать переделывать» — именно выкатить и измерить. Без живого изменения встреча на M8 — теория." },
  { num: "4", title: "Привести 5–10 новых юзеров", desc: "На новый флоу. Из канала, который работал в M4 outreach. Не «найду где-нибудь» — конкретный канал в Commitment." },
  { num: "5", title: "Принести данные на M8", desc: "% ДО → % ПОСЛЕ + 3 цитаты юзеров на новом флоу + одно наблюдение, которое тебя удивило." },
];

export default function M7Slide11bHomework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[14px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">Задание на неделю</p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          5 задач до M8.
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Не последовательность — параллель. День 1 — аудит и замер. День 2–4 — правка. День 5–7 — юзеры и числа.
        </p>
        <div className="space-y-[4px]">
          {tasks.map((t) => (
            <div key={t.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[8px] py-[5px]">
              <div className="flex items-center gap-[6px] mb-[1px]">
                <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold">{t.num}</span>
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{t.title}</p>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[50px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Задание на неделю</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px]">
        5 задач до M8.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[28px] max-w-[1600px] leading-[1.45]">
        Не последовательность — параллель. День 1 — аудит и замер baseline. Дни 2–4 — правка. Дни 5–7 — юзеры и числа на M8.
      </p>
      <div className="space-y-[12px] max-w-[1700px]">
        {tasks.map((t) => (
          <div key={t.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[28px] py-[16px] grid grid-cols-[60px_320px_1fr] gap-[24px] items-center">
            <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[44px] h-[44px] flex items-center justify-center rounded-full font-bold">{t.num}</span>
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{t.title}</p>
            <p className="text-[16.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
