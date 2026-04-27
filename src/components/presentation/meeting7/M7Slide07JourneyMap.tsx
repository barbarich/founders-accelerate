import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { name: "Вход", desc: "клик на ссылку, лендинг, регистрация", metric: "% дошедших до экрана 1 продукта" },
  { name: "Onboarding", desc: "от первого экрана до первого осмысленного действия", metric: "% дошедших до первого действия" },
  { name: "Первый результат", desc: "событие, в котором продукт выдал ценность", metric: "% получивших результат" },
  { name: "Aha", desc: "юзер сам признал, что результат — его", metric: "% вернувшихся на 2-й день" },
  { name: "Возврат", desc: "повторная сессия", metric: "D1 / D7 retention" },
];

export default function M7Slide07JourneyMap() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Полный путь</p>
        <h2 className="font-display text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[10px]">
          Вход → Onboarding → Первый результат → Aha → Возврат.
        </h2>
        <div className="space-y-[5px]">
          {steps.map((s, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex gap-[6px] items-baseline">
                <span className="text-[8px] font-mono text-[hsl(var(--slide-gold))]">0{i + 1}</span>
                <p className="text-[10px] font-semibold text-[hsl(var(--slide-text))]">{s.name}</p>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{s.desc}</p>
              <p className="text-[8px] font-mono text-[hsl(var(--slide-gold))] mt-[2px]">{s.metric}</p>
            </div>
          ))}
        </div>
        <div className="border-l-[2px] border-[hsl(var(--slide-gold))] pl-[10px] mt-[10px]">
          <p className="text-[9px] text-[hsl(var(--slide-gold))] leading-[1.45]">
            <strong>Граница, которую все путают:</strong> Первый результат — это событие. Aha — это интерпретация события юзером. Можно дать результат и не получить Aha. Тогда юзер не вернётся.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px] py-[60px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Полный путь</p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
        Вход → Onboarding → Первый результат → Aha → Возврат.
      </h2>
      <div className="grid grid-cols-5 gap-[14px] mb-[36px]">
        {steps.map((s, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[18px] py-[20px]">
            <span className="text-[18px] font-mono text-[hsl(var(--slide-gold))] block mb-[8px]">0{i + 1}</span>
            <p className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[10px]">{s.name}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[12px]">{s.desc}</p>
            <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[10px]">
              <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[3px]">Метрика</p>
              <p className="text-[14px] font-mono text-[hsl(var(--slide-text))] leading-[1.4]">{s.metric}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-l-[3px] border-[hsl(var(--slide-gold))] pl-[24px] max-w-[1700px]">
        <p className="text-[20px] text-[hsl(var(--slide-gold))] leading-[1.45]">
          <strong>Граница, которую все путают:</strong> Первый результат — это событие. Aha — это интерпретация события юзером. Можно дать результат и не получить Aha. Тогда юзер не вернётся.
        </p>
      </div>
    </div>
  );
}