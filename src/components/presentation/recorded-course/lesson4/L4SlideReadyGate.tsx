import { useIsMobile } from "@/hooks/use-mobile";

const gate = [
  { icon: "🧠", t: "Ты понимаешь продукт", d: "Что строишь, зачем, для кого и как это работает" },
  { icon: "💬", t: "Люди подтверждают", d: "Говорят «пользовался бы» и «заплатил бы»" },
  { icon: "📈", t: "Рынок подтверждает", d: "Это не велосипед, спрос реальный" },
];

export default function L4SlideReadyGate() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Стоп-линия</p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Когда переходить к разработке
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[12px] leading-[1.5]">
          Прототип - твой плейграунд. Не начинай разработку, пока не выполнены все три.
        </p>
        <div className="space-y-[7px] mb-[10px]">
          {gate.map((g, i) => (
            <div key={i} className="flex items-start gap-[10px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
              <span className="text-[16px] shrink-0">{g.icon}</span>
              <div>
                <div className="flex items-center gap-[6px]">
                  <span className="text-[hsl(var(--slide-gold))] text-[12px]">✓</span>
                  <span className="text-[12px] font-semibold text-[hsl(var(--slide-text))]">{g.t}</span>
                </div>
                <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{g.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-red-950/20 border border-red-500/25 rounded-[8px] px-[12px] py-[8px] mb-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
            <span className="text-red-400 font-semibold">⛔ Пока не выполнены все три</span> - разработку не начинай. Строить сразу = чаще всего выкинуть время впустую.
          </p>
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
          Прошёл ворота? Код прототипа берёт Claude Code или разработчик (готовый React-проект, не Figma-макет). Дальше - лендинг и первые деньги.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[40px]">
      <p className="text-[14px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">Стоп-линия</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
        Когда переходить к разработке
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[32px] max-w-[1150px] leading-[1.4]">
        Прототип - твой плейграунд. Не начинай разработку, пока не выполнены все три условия.
      </p>

      <div className="grid grid-cols-3 gap-[20px] max-w-[1300px]">
        {gate.map((g, i) => (
          <div key={i} className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[16px] px-[28px] py-[24px]">
            <div className="flex items-center gap-[12px] mb-[14px]">
              <span className="text-[40px]">{g.icon}</span>
              <span className="text-[hsl(var(--slide-gold))] text-[28px] font-bold">✓</span>
            </div>
            <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[8px] leading-[1.2]">{g.t}</h3>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{g.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-[28px] grid grid-cols-[1fr_1fr] gap-[20px] max-w-[1300px]">
        <div className="bg-red-950/20 border border-red-500/25 rounded-[14px] px-[28px] py-[18px] flex items-center gap-[16px]">
          <span className="text-[32px] shrink-0">⛔</span>
          <p className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="text-red-400 font-semibold">Пока не выполнены все три</span> - разработку не начинай. Строить сразу = чаще всего выкинуть время впустую.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[18px] flex items-center gap-[16px]">
          <span className="text-[30px] shrink-0">🚀</span>
          <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
            Прошёл ворота? Код прототипа берёт <span className="text-[hsl(var(--slide-text))]">Claude Code</span> или разработчик - готовый React-проект, не Figma-макет.
          </p>
        </div>
      </div>
    </div>
  );
}
