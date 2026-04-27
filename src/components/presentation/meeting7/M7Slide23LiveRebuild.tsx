import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    num: "1",
    time: "3 мин",
    title: "Смотрим текущие 3 экрана",
    desc: "Открываем продукт. Каждый из группы — одна фраза: «На экране 1 я не понял, что получу.» «На экране 2 от меня просят email.» «На экране 3 ничего не заставит вернуться.»",
  },
  {
    num: "2",
    time: "5 мин",
    title: "Переписываем все три",
    desc: "Экран 1 → новое одно предложение по формуле. Экран 2 → новое одно действие, без регистрации. Экран 3 → один из 5 механизмов возврата.",
  },
  {
    num: "3",
    time: "2 мин",
    title: "Автор фиксирует",
    desc: "Повторяет вслух три новые формулировки. Группа кивает или поправляет. Обещает: «До среды выкатываю. К понедельнику — 5 новых юзеров.»",
  },
];

export default function M7Slide23LiveRebuild() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Live · 10 минут
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
          Один продукт. Три экрана. Сейчас, вместе.
        </h2>
        <div className="space-y-[5px] mb-[10px]">
          {steps.map((s) => (
            <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-baseline gap-[6px] mb-[2px]">
                <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] font-bold">{s.num}.</span>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.title}</p>
                <span className="text-[8px] text-[hsl(var(--slide-text-muted))] ml-auto">{s.time}</span>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Параллельно — все остальные заполняют тот же шаблон для своего продукта.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Live · 10 минут
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px]">
        Один продукт. Три экрана. Сейчас, на экране, вместе.
      </h2>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1700px] mb-[24px]">
        {steps.map((s) => (
          <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[24px]">
            <div className="flex items-baseline justify-between mb-[12px]">
              <span className="font-mono text-[42px] text-[hsl(var(--slide-gold))] font-bold leading-none">{s.num}</span>
              <span className="text-[14px] uppercase tracking-[0.1em] text-[hsl(var(--slide-text-muted))] font-semibold">{s.time}</span>
            </div>
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[10px]">{s.title}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{s.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Параллельно — все остальные заполняют тот же шаблон для своего продукта. К концу блока у каждого 3 строки на руках.
      </p>
    </div>
  );
}
