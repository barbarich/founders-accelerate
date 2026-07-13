import { useIsMobile } from "@/hooks/use-mobile";

const mistakes = [
  { t: "Лендинг минималистичный — реклама перегружена", body: "Пользователь кликает ад, попадает на чужую страницу, чувствует подвох — bounce." },
  { t: "Шрифты не совпадают: лендинг Inter, реклама Montserrat", body: "Мелочь, но мозг чувствует диссонанс. Доверие падает до решения о покупке." },
  { t: "Цвет CTA на лендинге зелёный, в рекламе синий", body: "Сила бренда — это повторяемость. Каждое отклонение крадёт узнавание." },
];

const rule = [
  { k: "Один шрифт", v: "максимум два · один для заголовков, один для текста" },
  { k: "Палитра", v: "максимум три цвета · primary + accent + neutral" },
  { k: "Тон голоса", v: "одно прилагательное на бренд: дерзкий ИЛИ тёплый ИЛИ авторитетный" },
  { k: "Hero-картинка", v: "один и тот же стиль на лендинге, в рекламе, в соцсетях, в email" },
];

export default function L11Slide11OneStyleRule() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Правило одного стиля
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Несоответствие визуала роняет конверсию <span className="text-[hsl(var(--slide-gold))]">на 40%</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Самая частая ошибка стартапов. Делают круто отдельно, но не сводят воедино.
        </p>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Правило</p>
        <div className="space-y-[3px] mb-[6px]">
          {rule.map((r) => (
            <div key={r.k} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[8px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{r.k}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{r.v}</p>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.12em] mb-[3px]">Три ошибки</p>
        <div className="space-y-[3px]">
          {mistakes.map((m) => (
            <div key={m.t} className="bg-[hsl(0_70%_55%/0.06)] border-l-2 border-[hsl(0_70%_55%)] rounded-[5px] px-[8px] py-[4px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">{m.t}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Правило одного стиля
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Несоответствие визуала роняет конверсию <span className="text-[hsl(var(--slide-gold))]">на 40%</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1600px]">
        Самая частая ошибка стартапов — делают круто отдельно (лендинг отдельно, реклама отдельно), но не сводят воедино.
      </p>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[28px] py-[20px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Правило · везде одно и то же</p>
          <div className="space-y-[8px]">
            {rule.map((r) => (
              <div key={r.k}>
                <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">{r.k}</p>
                <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{r.v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(0_70%_55%/0.06)] border-l-[4px] border-[hsl(0_70%_55%)] rounded-[14px] px-[28px] py-[20px]">
          <p className="text-[14px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.18em] mb-[12px]">Три ошибки, на которых ловят всех</p>
          <div className="space-y-[10px]">
            {mistakes.map((m) => (
              <div key={m.t}>
                <p className="text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">{m.t}</p>
                <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
