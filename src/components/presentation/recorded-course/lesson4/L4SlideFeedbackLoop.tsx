import { useIsMobile } from "@/hooks/use-mobile";

const loop = [
  { n: "01", icon: "🎨", title: "Визуализируй", text: "Преврати идею в первые экраны" },
  { n: "02", icon: "👥", title: "Покажи людям", text: "Друзьям, знакомым, своей ЦА" },
  { n: "03", icon: "🎧", title: "Собери фидбэк", text: "Что непонятно, чем бы пользовались" },
  { n: "04", icon: "🔧", title: "Доработай", text: "Внеси правки - и снова к шагу 2" },
];

export default function L4SlideFeedbackLoop() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Главная идея</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Прототип - это цикл, а не разовая сборка
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[12px] leading-[1.5]">
          Готовый прототип рождается из постоянного фидбэка: собрал - показал людям - доработал - и снова. Без этого никуда.
        </p>
        <div className="space-y-[6px]">
          {loop.map((s, i) => (
            <div key={i} className="flex items-center gap-[10px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[8px]">
              <span className="text-[18px] shrink-0">{s.icon}</span>
              <div className="flex items-baseline gap-[8px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold)/0.6)]">{s.n}</span>
                <span className="text-[12px] font-semibold text-[hsl(var(--slide-text))]">{s.title}</span>
              </div>
              <span className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.3] ml-auto text-right">{s.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-[10px] space-y-[6px]">
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[10px] text-[hsl(var(--slide-gold))] leading-[1.4]">
              <span className="font-semibold">↺ Повторяй цикл</span>, пока люди не скажут: «пользовался бы»
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
              🔎 Параллельно смотри на рынок: не изобретаешь ли велосипед и есть ли реальный спрос
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[40px]">
      <p className="text-[14px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">Главная идея</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
        Прототип - это цикл, а не разовая сборка
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[36px] max-w-[1100px] leading-[1.4]">
        Готовый прототип рождается из постоянного фидбэка: собрал - показал людям - доработал - и снова. Без этого никуда.
      </p>

      <div className="flex items-stretch gap-[8px] max-w-[1300px]">
        {loop.map((s, i) => (
          <div key={i} className="flex items-center gap-[8px] flex-1">
            <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] p-[24px] h-full">
              <div className="flex items-center gap-[10px] mb-[12px]">
                <span className="text-[34px]">{s.icon}</span>
                <span className="font-mono text-[15px] text-[hsl(var(--slide-gold)/0.5)]">{s.n}</span>
              </div>
              <h3 className="text-[21px] font-semibold text-[hsl(var(--slide-text))] mb-[8px]">{s.title}</h3>
              <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.text}</p>
            </div>
            {i < loop.length - 1 && (
              <span className="text-[hsl(var(--slide-gold))] text-[26px] shrink-0">→</span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-[28px] grid grid-cols-2 gap-[16px] max-w-[1300px]">
        <div className="bg-[hsl(var(--slide-gold)/0.07)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[18px] flex items-center gap-[14px]">
          <span className="text-[30px] shrink-0">↺</span>
          <p className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-semibold text-[hsl(var(--slide-gold))]">Повторяй цикл</span>, пока не будешь доволен и люди не скажут: «пользовался бы»
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[18px] flex items-center gap-[14px]">
          <span className="text-[28px] shrink-0">🔎</span>
          <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
            Параллельно смотри на рынок: не изобретаешь ли велосипед и есть ли реальный спрос
          </p>
        </div>
      </div>
    </div>
  );
}
