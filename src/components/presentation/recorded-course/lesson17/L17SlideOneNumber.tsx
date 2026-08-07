import { useIsMobile } from "@/hooks/use-mobile";

const rows = [
  { k: "А", num: "Сколько из 10 разговоров дали «пользовался бы» и «заплатил бы»", where: "Таблица разговоров" },
  { k: "Б", num: "Сколько человек заплатили в этом месяце. Цель - 1", where: "Счётчик оплат по каналам" },
  { k: "В", num: "Сколько заплатили и во сколько обошёлся один клиент", where: "Таблица каналов из урока 14" },
];

export default function L17SlideOneNumber() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Чтобы не утонуть в метриках
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Одно число, которое ты держишь
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Не десять метрик. Одно число на месяц - и смотришь на него каждую пятницу.
        </p>
        <div className="space-y-[5px]">
          {rows.map((r) => (
            <div key={r.k} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[8px] py-[5px] bg-[hsl(var(--slide-gold)/0.05)]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">
                <span className="text-[hsl(var(--slide-gold))]">{r.k} · </span>{r.num}
              </p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mt-[1px]">Где записываешь: {r.where}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-gold))] leading-[1.4] mt-[7px]">
          Остальное смотришь раз в месяц. Чаще - будешь принимать решения по шуму.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[110px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Чтобы не утонуть в метриках
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Одно число, <span className="text-[hsl(var(--slide-gold))]">которое ты держишь</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[22px] max-w-[1500px]">
        Не десять метрик. Одно число на месяц - и смотришь на него каждую пятницу.
      </p>
      <div className="space-y-[12px] max-w-[1550px]">
        {rows.map((r) => (
          <div key={r.k} className="flex items-center gap-[20px] border border-[hsl(var(--slide-gold)/0.22)] rounded-[12px] px-[24px] py-[16px] bg-[hsl(var(--slide-gold)/0.05)]">
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold shrink-0">{r.k}</span>
            <div>
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">{r.num}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text-muted))] mt-[2px]">Где записываешь: {r.where}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] leading-[1.45] mt-[22px] max-w-[1550px]">
        Остальное смотришь раз в месяц. Чаще - будешь принимать решения по шуму.
      </p>
    </div>
  );
}
