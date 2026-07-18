import { useIsMobile } from "@/hooks/use-mobile";

const tasks = [
  { n: "1", t: "Опиши один сегмент", d: "Кто конкретно, повод покупки, боль их словами. Один человек, не «рынок»." },
  { n: "2", t: "Найди, где они сидят", d: "3-5 конкретных мест: сообщества, площадки, события, где сегмент уже собран." },
  { n: "3", t: "Сделай 3 бесплатных касания", d: "На этой неделе: зайти в сообщество, написать 5 знакомых по ICP, договориться о выступлении или демо." },
  { n: "4", t: "Собери маркетинг-план", d: "Таблица: 2 канала × активность × частота × метрика на 30 дней. Можно через промпт с прошлого слайда." },
];

export default function L11Slide22Homework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Домашка · твой go-to-market
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Определи аудиторию, место и план - за неделю
        </h2>
        <div className="space-y-[4px] mb-[6px]">
          {tasks.map((t) => (
            <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[5px]">
              <div className="flex items-baseline gap-[7px]">
                <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{t.n}</span>
                <span className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[16px]">{t.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="text-[hsl(var(--slide-gold))] font-semibold">Готово: </span>у тебя есть аудитория, каналы и план - с этим идёшь в упаковку.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Домашка · твой go-to-market
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em]">
        Определи аудиторию, место и план - за одну неделю
      </h2>
      <div className="space-y-[12px] max-w-[1700px] mb-[22px]">
        {tasks.map((t) => (
          <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[14px] flex items-center gap-[22px]">
            <span className="font-display text-[30px] font-bold text-[hsl(var(--slide-gold))] leading-none w-[36px] shrink-0">{t.n}</span>
            <span className="text-[21px] font-bold text-[hsl(var(--slide-text))] w-[360px] shrink-0">{t.t}</span>
            <span className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4] flex-1">{t.d}</span>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[16px] max-w-[1700px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45]">
          <span className="text-[hsl(var(--slide-gold))] font-semibold">Готово: </span>у тебя есть аудитория, каналы и план на 30 дней - именно с этим ты идёшь в упаковку и запуск.
        </p>
      </div>
    </div>
  );
}
