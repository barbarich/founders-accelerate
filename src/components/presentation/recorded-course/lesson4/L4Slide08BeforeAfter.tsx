import { useIsMobile } from "@/hooks/use-mobile";

const before = [
  { icon: "🗣️", step: "Обсудить с командой", time: "3–5 дней" },
  { icon: "🎨", step: "Дизайнер рисует макеты", time: "1–2 недели" },
  { icon: "🔄", step: "Правки и согласования", time: "1 неделя" },
  { icon: "👨‍💻", step: "Разработчик имплементирует", time: "2–4 недели" },
  { icon: "🐛", step: "Тестирование и правки", time: "1 неделя" },
];

const now = [
  { icon: "⚡", step: "Один раз: дал AI контекст — загрузил экраны, стиль, логику продукта", time: "1 час" },
  { icon: "🚀", step: "Каждая новая фича: описал идею → AI сгенерировал → поитерировал", time: "20–30 мин" },
];

const paths = [
  {
    icon: "🤖",
    title: "Claude Code",
    desc: "Подключаете GitHub → даёте доступ Claude → он берёт готовый прототип и имплементирует в продакшн",
  },
  {
    icon: "👨‍💻",
    title: "Разработчик",
    desc: "Lovable экспортирует готовый React-проект на GitHub — разработчик получает код, не Figma-макет",
  },
];

export default function L4Slide08BeforeAfter() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Смена подхода</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Раньше vs Сейчас
        </h2>
        <div className="space-y-[10px]">
          <div className="bg-red-950/20 border border-red-500/20 rounded-[8px] px-[12px] py-[10px]">
            <p className="text-[9px] uppercase tracking-widest text-red-400 font-medium mb-[8px]">Раньше</p>
            <div className="space-y-[6px]">
              {before.map((b, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-[10px] text-[hsl(var(--slide-text-muted))]">{b.icon} {b.step}</span>
                  <span className="text-[9px] text-red-400 font-mono shrink-0 ml-2">{b.time}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] font-bold text-red-400 mt-[8px] pt-[6px] border-t border-red-500/20">= 2–3 месяца на фичу</p>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] px-[12px] py-[10px]">
            <p className="text-[9px] uppercase tracking-widest text-[hsl(var(--slide-gold))] font-medium mb-[8px]">Сейчас</p>
            <div className="space-y-[6px]">
              {now.map((n, i) => (
                <div key={i} className="flex items-start justify-between gap-2">
                  <span className="text-[10px] text-[hsl(var(--slide-text-muted))]">{n.icon} {n.step}</span>
                  <span className="text-[9px] text-[hsl(var(--slide-gold))] font-mono shrink-0">{n.time}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] mt-[8px] pt-[6px] border-t border-[hsl(var(--slide-gold)/0.2)]">= 30 минут на фичу</p>
          </div>
          {/* Paths after Lovable */}
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[9px] uppercase tracking-widest text-[hsl(var(--slide-gold))] font-medium mb-[6px]">А дальше?</p>
            <div className="space-y-[6px]">
              {paths.map((p, i) => (
                <div key={i} className="flex items-start gap-[6px]">
                  <span className="text-[12px] shrink-0">{p.icon}</span>
                  <div>
                    <span className="text-[10px] font-semibold text-[hsl(var(--slide-text))]">{p.title}: </span>
                    <span className="text-[9px] text-[hsl(var(--slide-text-muted))]">{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[40px]">
      <p className="text-[14px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">Смена подхода</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px]">
        Раньше vs Сейчас
      </h2>

      <div className="grid grid-cols-2 gap-[24px] max-w-[1200px]">

        {/* РАНЬШЕ */}
        <div className="bg-red-950/20 border border-red-500/20 rounded-[12px] px-[32px] py-[24px] flex flex-col">
          <p className="text-[12px] uppercase tracking-[0.2em] text-red-400 font-semibold mb-[20px]">Раньше</p>
          <div className="space-y-[14px] flex-1">
            {before.map((b, i) => (
              <div key={i} className="flex items-center justify-between gap-[16px]">
                <div className="flex items-center gap-[10px]">
                  <span className="text-[20px]">{b.icon}</span>
                  <span className="text-[16px] text-[hsl(var(--slide-text-muted))]">{b.step}</span>
                </div>
                <span className="text-[14px] text-red-400 font-mono shrink-0 bg-red-500/10 px-[10px] py-[3px] rounded-full">{b.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-[24px] pt-[16px] border-t border-red-500/20 flex items-center justify-between">
            <span className="text-[15px] text-red-400/70">Итого на одну фичу</span>
            <span className="text-[24px] font-bold text-red-400 font-mono">2–3 месяца</span>
          </div>
        </div>

        {/* СЕЙЧАС */}
        <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[32px] py-[24px] flex flex-col">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-semibold mb-[20px]">Сейчас</p>
          <div className="space-y-[20px] flex-1">
            {now.map((n, i) => (
              <div key={i} className="flex items-start justify-between gap-[16px]">
                <div className="flex items-start gap-[10px]">
                  <span className="text-[22px] mt-[1px]">{n.icon}</span>
                  <span className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{n.step}</span>
                </div>
                <span className="text-[14px] text-[hsl(var(--slide-gold))] font-mono shrink-0 bg-[hsl(var(--slide-gold)/0.12)] px-[10px] py-[3px] rounded-full">{n.time}</span>
              </div>
            ))}
          </div>

          <div className="mt-[24px] pt-[16px] border-t border-[hsl(var(--slide-gold)/0.2)] flex items-center justify-between">
            <span className="text-[15px] text-[hsl(var(--slide-text-muted))]">Итого на одну фичу</span>
            <span className="text-[24px] font-bold text-[hsl(var(--slide-gold))] font-mono">30 минут</span>
          </div>
        </div>
      </div>

      {/* Paths after Lovable */}
      <div className="mt-[24px] max-w-[1200px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[32px] py-[18px]">
        <p className="text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-semibold mb-[14px]">Что делать с прототипом дальше?</p>
        <div className="grid grid-cols-2 gap-[32px]">
          {paths.map((p, i) => (
            <div key={i} className="flex items-start gap-[12px]">
              <span className="text-[28px] shrink-0">{p.icon}</span>
              <div>
                <h4 className="text-[17px] font-semibold text-[hsl(var(--slide-text))] mb-[4px]">{p.title}</h4>
                <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
