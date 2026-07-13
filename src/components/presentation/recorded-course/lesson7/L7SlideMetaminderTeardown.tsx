import { useIsMobile } from "@/hooks/use-mobile";

const principles = [
  {
    t: "Ведём за руку",
    d: "Не бросаем юзера в пустой продукт. Флоу подсказывает каждый следующий шаг — он ни разу не думает «а что теперь?».",
  },
  {
    t: "Результат — персональный",
    d: "Не демо-пример, а ответ про самого юзера. «Это про меня» цепляет сильнее любого общего вау.",
  },
  {
    t: "Максимально быстро",
    d: "Флоу спроектирован так, что персональный результат случается в первые секунды, а не в конце пути.",
  },
];

export default function L7SlideMetaminderTeardown() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Разбор вживую · MetaMinder
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Как мы настроили Aha в MetaMinder
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[12px]">
          Построили флоу, который ведёт юзера <span className="text-[hsl(var(--slide-gold))] font-medium">за руку</span> — и максимально быстро показывает ему <span className="text-[hsl(var(--slide-text))] font-semibold">его персональный результат</span>.
        </p>
        <div className="space-y-[8px]">
          {principles.map((r, i) => (
            <div key={i} className="border-l-2 border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-gold)/0.04)] pl-[10px] py-[6px]">
              <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{r.t}</p>
              <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{r.d}</p>
            </div>
          ))}
        </div>
        <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mt-[10px]">
          На видео прохожу по реальным экранам MetaMinder — шаг за шагом, как флоу ведёт к результату.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Разбор вживую · MetaMinder
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.01em]">
        Как мы настроили <span className="text-[hsl(var(--slide-gold))]">Aha</span> в MetaMinder
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1700px] mb-[32px]">
        Построили флоу, который ведёт юзера <span className="text-[hsl(var(--slide-gold))] font-semibold">за руку</span> — и максимально быстро показывает ему <span className="text-[hsl(var(--slide-text))] font-semibold">его персональный результат</span>.
      </p>
      <div className="space-y-[16px] max-w-[1800px]">
        {principles.map((r, i) => (
          <div key={i} className="border-l-[4px] border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-gold)/0.04)] pl-[28px] py-[14px]">
            <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] mb-[6px]">{r.t}</p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{r.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-[28px] bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[28px] py-[16px] max-w-[1800px]">
        <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.45]">
          На видео прохожу по реальным экранам MetaMinder — шаг за шагом, как флоу ведёт юзера к результату.
        </p>
      </div>
    </div>
  );
}
