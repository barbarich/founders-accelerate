import { useIsMobile } from "@/hooks/use-mobile";

const loop = [
  { n: "1", t: "Триггер", d: "Push, письмо, иконка, календарь — что-то снаружи или внутри напомнило о продукте." },
  { n: "2", t: "Действие", d: "Один тап. Открыл, отметил, свайпнул. Чем проще — тем выше шанс вернуться завтра." },
  { n: "3", t: "Награда", d: "Переменная, не предсказуемая. Новый матч, +1 к streak, свежая лента, неожиданный бонус." },
  { n: "4", t: "Инвестиция", d: "Пользователь оставляет след: данные, прогресс, контент. Завтра вернуться — уже легче, чем не вернуться." },
];

export default function M8Slide06Principle() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Принцип возврата · одна петля
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Любой возврат — это одна и та же петля.
        </h2>
        <p className="font-mono text-[10px] text-[hsl(var(--slide-gold))] mb-[10px]">
          Триггер → Действие → Награда → Инвестиция → ↺
        </p>
        <div className="space-y-[5px] mb-[10px]">
          {loop.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-baseline gap-[8px]">
                <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))]">{s.n}</span>
                <span className="text-[10.5px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
              </div>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[10px] py-[7px]">
          <p className="text-[9.5px] text-[hsl(var(--slide-text))] leading-[1.45]">
            <span className="font-bold text-[hsl(var(--slide-gold))]">Дальше — 5 готовых механик.</span> Каждая закрывает все 4 шага. Бери и встраивай в продукт сегодня.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Принцип возврата · вся теория за 60 секунд
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.02em]">
        Любой возврат пользователя — это одна и та же петля.
      </h2>
      <p className="font-mono text-[26px] text-[hsl(var(--slide-gold))] mb-[24px] tracking-[0.02em]">
        Триггер → Действие → Награда → Инвестиция → ↺
      </p>
      <div className="grid grid-cols-4 gap-[14px] max-w-[1500px] mb-[22px]">
        {loop.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[16px]">
            <div className="flex items-baseline gap-[10px] mb-[6px]">
              <span className="font-display text-[36px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[19px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
            </div>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[6px] px-[24px] py-[16px] max-w-[1500px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.5]">
          <span className="font-bold text-[hsl(var(--slide-gold))]">Дальше — 5 готовых механик.</span> Каждая закрывает все 4 шага петли. Никакой теории — только настройка, инструменты и код, который ты соберёшь сегодня вечером.
        </p>
      </div>
    </div>
  );
}