import { useIsMobile } from "@/hooks/use-mobile";

const wednesdayTasks = [
  "Переписан и выкачен Экран 1 — одно обещание",
  "Переписан и выкачен Экран 2 — одно действие, без стены",
  "Добавлен или починен Экран 3 — один механизм возврата",
];

const mondayTasks = [
  "5 новых юзеров прошли через новые экраны",
  "Цифры: сколько прошли все 3, где выпали остальные",
  "2 цитаты юзеров: что было понятно, что — нет",
];

export default function M7Slide25Homework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Домашнее задание
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
          К M8 у каждого: три новых экрана в проде.
        </h2>
        <div className="space-y-[6px] mb-[10px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[7px] px-[10px] py-[6px]">
            <p className="text-[9px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-bold mb-[3px]">До среды</p>
            {wednesdayTasks.map((t, i) => (
              <p key={i} className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.4]">→ {t}</p>
            ))}
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[7px] px-[10px] py-[6px]">
            <p className="text-[9px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-bold mb-[3px]">До понедельника</p>
            {mondayTasks.map((t, i) => (
              <p key={i} className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.4]">→ {t}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Домашнее задание
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px]">
        К M8 у каждого: три новых экрана в проде.
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1600px] mb-[28px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border-[2px] border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[18px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-bold mb-[14px]">До среды</p>
          <div className="space-y-[8px]">
            {wednesdayTasks.map((t, i) => (
              <p key={i} className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] mr-[8px]">→</span>{t}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border-[2px] border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[18px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-bold mb-[14px]">До понедельника</p>
          <div className="space-y-[8px]">
            {mondayTasks.map((t, i) => (
              <p key={i} className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] mr-[8px]">→</span>{t}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
