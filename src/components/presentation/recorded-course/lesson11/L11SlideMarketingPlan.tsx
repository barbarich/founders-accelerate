import { useIsMobile } from "@/hooks/use-mobile";

const cols = ["Канал", "Активность", "Частота", "Метрика", "Кто"];
const rows = [
  ["Родительские группы", "Польза + мягкий показ продукта", "3 поста/нед", "Заявки", "Ты"],
  ["Личные продажи", "Написать 10 знакомых по ICP", "10/нед", "Встречи", "Ты"],
  ["LinkedIn", "1 пост о продукте + 5 outreach", "Ежедневно", "Ответы", "Ты"],
];

export default function L11SlideMarketingPlan() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Маркетинг-план с активностями
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Не всё сразу. <span className="text-[hsl(var(--slide-gold))]">1-2 канала, доведи до результата.</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[7px]">
          План = канал × активность × частота × метрика. Пример на неделю:
        </p>
        <div className="space-y-[4px]">
          {rows.map((r, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[9px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{r[0]}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{r[1]} · {r[2]} · метрика: {r[3]}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-gold))] italic leading-[1.4] mt-[6px]">
          Концентрация бьёт распыление. Один работающий канал лучше пяти на четверть силы.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Маркетинг-план с активностями
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Не всё сразу. <span className="text-[hsl(var(--slide-gold))]">1-2 канала, доведи до результата.</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[20px] max-w-[1650px]">
        План - это не «займёмся маркетингом», а таблица: канал × активность × частота × метрика × кто. Пример на одну неделю:
      </p>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] overflow-hidden max-w-[1700px] mb-[16px]">
        <div className="grid grid-cols-[1.3fr_1.6fr_0.9fr_0.9fr_0.6fr] gap-[12px] px-[26px] py-[12px] bg-[hsl(var(--slide-gold)/0.08)] text-[13px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-medium">
          {cols.map((c) => <span key={c}>{c}</span>)}
        </div>
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-[1.3fr_1.6fr_0.9fr_0.9fr_0.6fr] gap-[12px] px-[26px] py-[12px] border-t border-[hsl(var(--slide-border)/0.2)] items-center">
            <span className="text-[18px] text-[hsl(var(--slide-text))] font-bold">{r[0]}</span>
            <span className="text-[16px] text-[hsl(var(--slide-text)/0.88)]">{r[1]}</span>
            <span className="text-[16px] text-[hsl(var(--slide-text-muted))]">{r[2]}</span>
            <span className="text-[16px] text-[hsl(var(--slide-gold))]">{r[3]}</span>
            <span className="text-[16px] text-[hsl(var(--slide-text-muted))]">{r[4]}</span>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] italic leading-[1.4] max-w-[1700px]">
        Концентрация бьёт распыление: один работающий канал лучше пяти, каждый на четверть силы.
      </p>
    </div>
  );
}
