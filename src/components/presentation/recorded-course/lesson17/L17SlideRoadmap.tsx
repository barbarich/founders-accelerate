import { useIsMobile } from "@/hooks/use-mobile";

const parts = [
  { t: "Что у тебя теперь есть", d: "Весь путь курса в трёх фазах и список того, что уже лежит у тебя на руках" },
  { t: "Где ты сейчас", d: "Три честные точки - А, Б, В. Выбираешь одну, и весь план читаешь через неё" },
  { t: "Первые 30 дней", d: "План по неделям, ритм рабочей недели и одно число, которое ты держишь" },
  { t: "Следующие 90 дней", d: "Три месяца - три разные задачи. Чек-точки и правило, когда менять курс" },
  { t: "Как не сдаться", d: "Как это выглядит изнутри на самом деле и 5 правил, которые держат в работе" },
];

export default function L17SlideRoadmap() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Карта урока
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Пять частей финала
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[9px]">
          К концу урока у тебя будет расписанный план на 30 и на 90 дней - под твою ситуацию, а не общий.
        </p>
        <div className="space-y-[5px]">
          {parts.map((p, i) => (
            <div key={p.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.05)]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{i + 1}. {p.t}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35]">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Карта урока
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px] tracking-[-0.01em]">
        Пять частей <span className="text-[hsl(var(--slide-gold))]">финала</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[26px] max-w-[1500px]">
        К концу урока у тебя будет расписанный план на 30 и на 90 дней - под твою ситуацию, а не общий.
      </p>
      <div className="space-y-[12px] max-w-[1500px]">
        {parts.map((p, i) => (
          <div key={p.t} className="flex items-start gap-[20px] border border-[hsl(var(--slide-gold)/0.22)] rounded-[12px] px-[24px] py-[14px] bg-[hsl(var(--slide-gold)/0.05)]">
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0 font-bold">{i + 1}</span>
            <div>
              <p className="text-[23px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{p.t}</p>
              <p className="text-[17px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4] mt-[2px]">{p.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
