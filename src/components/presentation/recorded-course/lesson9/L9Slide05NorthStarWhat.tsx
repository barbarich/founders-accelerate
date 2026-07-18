import { useIsMobile } from "@/hooks/use-mobile";

export default function L9Slide05NorthStarWhat() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          North Star Metric · полярная звезда
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Одно число, которое означает: <span className="text-[hsl(var(--slide-gold))]">клиент получил то, за чем пришёл</span>.
        </h2>
        <div className="space-y-[8px] mb-[10px]">
          <div className="border-l-2 border-[hsl(var(--slide-text-muted)/0.4)] px-[10px] py-[6px]">
            <p className="text-[10px] font-bold text-[hsl(var(--slide-text-muted))] mb-[2px]">Это не выручка</p>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">Выручка - следствие. Она говорит, что было вчера, а не что чинить сегодня.</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-text-muted)/0.4)] px-[10px] py-[6px]">
            <p className="text-[10px] font-bold text-[hsl(var(--slide-text-muted))] mb-[2px]">Это не количество пользователей</p>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">Пользователь, который зарегистрировался и ушёл, тоже пользователь. Ценности он не получил.</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[10px] py-[6px]">
            <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">Почему одна, а не сорок</p>
            <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">У тебя нет аналитика и нет времени на сорок графиков. Одна метрика - это фильтр решений: двигает или не двигает. Что не двигает - не делаешь на этой неделе.</p>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Если метрика может расти, пока клиенту становится хуже, - это <span className="text-[hsl(var(--slide-gold))]">не North Star</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        North Star Metric · полярная звезда
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[30px] tracking-[-0.01em] max-w-[1800px]">
        Одно число, которое означает: <span className="text-[hsl(var(--slide-gold))]">клиент получил то, за чем пришёл</span>.
      </h2>
      <div className="space-y-[16px] max-w-[1800px] mb-[26px]">
        <div className="border-l-[4px] border-[hsl(var(--slide-text-muted)/0.4)] px-[28px] py-[14px]">
          <p className="text-[22px] font-bold text-[hsl(var(--slide-text-muted))] mb-[4px]">Это не выручка</p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">Выручка - следствие. Она говорит, что было вчера, а не что чинить сегодня.</p>
        </div>
        <div className="border-l-[4px] border-[hsl(var(--slide-text-muted)/0.4)] px-[28px] py-[14px]">
          <p className="text-[22px] font-bold text-[hsl(var(--slide-text-muted))] mb-[4px]">Это не количество пользователей</p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">Тот, кто зарегистрировался и ушёл, тоже пользователь. Ценности он не получил.</p>
        </div>
        <div className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[28px] py-[14px]">
          <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">Почему одна, а не сорок</p>
          <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">У тебя нет аналитика и нет времени на сорок графиков. Одна метрика - это фильтр решений: двигает или не двигает. Что не двигает - не делаешь на этой неделе.</p>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1800px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Если метрика может расти, пока клиенту становится хуже, - это <span className="text-[hsl(var(--slide-gold))]">не North Star</span>.
        </p>
      </div>
    </div>
  );
}
