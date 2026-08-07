import { useIsMobile } from "@/hooks/use-mobile";

const goals = [
  {
    k: "А",
    t: "10 разговоров и прототип в чужих руках",
    m: "Сколько из 10 сказали «пользовался бы» и «заплатил бы», потрогав его сами",
    w: "Таблица разговоров",
  },
  {
    k: "Б",
    t: "Первый платящий",
    m: "40 адресных касаний за месяц и число оплат. Цель по оплатам - 1",
    w: "Счётчик оплат по каналам",
  },
  {
    k: "В",
    t: "Пятый платящий из того же канала",
    m: "Число оплат и во сколько обошёлся один клиент",
    w: "Таблица каналов из урока 14",
  },
];

export default function L17SlideMonth1Goal() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Первый месяц
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Одна цель и одно число под неё
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Не «запустить бизнес». Одна цель на месяц, одно число, одна таблица.
        </p>
        <div className="space-y-[5px]">
          {goals.map((g) => (
            <div key={g.k} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[8px] py-[5px] bg-[hsl(var(--slide-gold)/0.05)]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
                <span className="text-[hsl(var(--slide-gold))]">{g.k} · </span>{g.t}
              </p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">Число: {g.m}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">Куда пишешь: {g.w}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-gold))] leading-[1.4] mt-[7px]">
          Смотришь на него каждую пятницу. Остальные метрики - раз в месяц, иначе решения по шуму.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[110px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Первый месяц
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Одна цель <span className="text-[hsl(var(--slide-gold))]">и одно число под неё</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[24px] max-w-[1500px]">
        Не «запустить бизнес». Одна цель на месяц, одно число, одна таблица - своё для каждой точки.
      </p>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1550px]">
        {goals.map((g) => (
          <div key={g.k} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[18px] bg-[hsl(var(--slide-gold)/0.05)]">
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[38px] h-[38px] flex items-center justify-center rounded-full font-bold mb-[10px]">{g.k}</span>
            <p className="text-[23px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[10px]">{g.t}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[6px]">
              <span className="text-[hsl(var(--slide-text))] font-medium">Число: </span>{g.m}
            </p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
              <span className="text-[hsl(var(--slide-text))] font-medium">Куда пишешь: </span>{g.w}
            </p>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] leading-[1.45] mt-[22px] max-w-[1550px]">
        Смотришь на него каждую пятницу. Остальные метрики - раз в месяц, иначе будешь принимать решения по шуму.
      </p>
    </div>
  );
}
