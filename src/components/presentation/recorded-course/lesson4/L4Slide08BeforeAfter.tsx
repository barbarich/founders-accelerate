import { useIsMobile } from "@/hooks/use-mobile";

const before = [
  { icon: "🗣️", step: "Обсудить с командой", time: "3-5 дней" },
  { icon: "🎨", step: "Дизайнер рисует макеты", time: "1-2 недели" },
  { icon: "🔄", step: "Правки и согласования", time: "1 неделя" },
  { icon: "👨‍💻", step: "Разработчик имплементирует", time: "2-4 недели" },
  { icon: "🐛", step: "Тестирование и правки", time: "1 неделя" },
];

const now = [
  { icon: "⚡", step: "Один раз: дал AI контекст - экраны, стиль, логику продукта", time: "1 час" },
  { icon: "🔁", step: "Каждый виток: описал правку → AI собрал → показал людям", time: "20-30 мин" },
];

const principles = [
  { icon: "🧪", title: "Плейграунд идей", desc: "Здесь оттачиваешь видение, а не строишь финальный продукт" },
  { icon: "✂️", title: "Не усложняй и не засиживайся", desc: "Визуализируй → фидбэк → улучши, и дальше по кругу" },
  { icon: "♻️", title: "Итерация теперь дёшева", desc: "Показывай и переделывай столько, сколько нужно" },
];

export default function L4Slide08BeforeAfter() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Мышление</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Прототип - это плейграунд
        </h2>
        <div className="space-y-[8px]">
          <div className="grid grid-cols-2 gap-[8px]">
            <div className="bg-red-950/20 border border-red-500/20 rounded-[8px] px-[10px] py-[8px]">
              <p className="text-[9px] uppercase tracking-widest text-red-400 font-medium mb-[4px]">Раньше</p>
              <p className="text-[13px] font-bold text-red-400">2-3 месяца</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">на одну фичу</p>
            </div>
            <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <p className="text-[9px] uppercase tracking-widest text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Сейчас</p>
              <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))]">30 минут</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">на виток</p>
            </div>
          </div>
          {principles.map((p, i) => (
            <div key={i} className="flex items-start gap-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <span className="text-[16px] shrink-0">{p.icon}</span>
              <div>
                <span className="text-[12px] font-semibold text-[hsl(var(--slide-text))]">{p.title}</span>
                <span className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.3] block">{p.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[40px]">
      <p className="text-[14px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">Мышление</p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
        Прототип - это плейграунд
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[28px] max-w-[1150px] leading-[1.4]">
        Собрать и переделать теперь стоит минуты - поэтому играй с идеей смело, а не строй сразу «начисто».
      </p>

      <div className="grid grid-cols-2 gap-[24px] max-w-[1200px]">
        <div className="bg-red-950/20 border border-red-500/20 rounded-[12px] px-[28px] py-[18px] flex flex-col">
          <p className="text-[12px] uppercase tracking-[0.2em] text-red-400 font-semibold mb-[14px]">Раньше · без AI</p>
          <div className="space-y-[9px] flex-1">
            {before.map((b, i) => (
              <div key={i} className="flex items-center justify-between gap-[16px]">
                <span className="text-[15px] text-[hsl(var(--slide-text-muted))]">{b.icon} {b.step}</span>
                <span className="text-[13px] text-red-400 font-mono shrink-0 bg-red-500/10 px-[10px] py-[2px] rounded-full">{b.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-[14px] pt-[12px] border-t border-red-500/20 flex items-center justify-between">
            <span className="text-[14px] text-red-400/70">Итого на фичу</span>
            <span className="text-[22px] font-bold text-red-400 font-mono">2-3 месяца</span>
          </div>
        </div>

        <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[28px] py-[18px] flex flex-col">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-semibold mb-[14px]">Сейчас · с AI</p>
          <div className="space-y-[16px] flex-1">
            {now.map((n, i) => (
              <div key={i} className="flex items-start justify-between gap-[16px]">
                <span className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{n.icon} {n.step}</span>
                <span className="text-[13px] text-[hsl(var(--slide-gold))] font-mono shrink-0 bg-[hsl(var(--slide-gold)/0.12)] px-[10px] py-[2px] rounded-full">{n.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-[14px] pt-[12px] border-t border-[hsl(var(--slide-gold)/0.2)] flex items-center justify-between">
            <span className="text-[14px] text-[hsl(var(--slide-text-muted))]">Итого на виток</span>
            <span className="text-[22px] font-bold text-[hsl(var(--slide-gold))] font-mono">30 минут</span>
          </div>
        </div>
      </div>

      <div className="mt-[22px] grid grid-cols-3 gap-[18px] max-w-[1200px]">
        {principles.map((p, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[16px]">
            <span className="text-[28px] block mb-[8px]">{p.icon}</span>
            <h4 className="text-[17px] font-semibold text-[hsl(var(--slide-text))] mb-[4px] leading-[1.2]">{p.title}</h4>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
