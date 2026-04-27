import { useIsMobile } from "@/hooks/use-mobile";

const screens = [
  {
    num: "1",
    label: "Одно обещание",
    body: "Человек понял что получит",
    detail: "За 5 секунд ясно, ради чего стоит остаться",
  },
  {
    num: "2",
    label: "Одно действие",
    body: "Человек получил результат сразу",
    detail: "Без регистрации, без тура, без настроек",
  },
  {
    num: "3",
    label: "Одна причина вернуться",
    body: "Человек захотел открыть завтра",
    detail: "Незавершённость, ожидание, свежее, сохранённое, созданное",
  },
];

export default function M7Slide05ThreeScreensRule() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Рамка всей встречи
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
          Три экрана.<br />Каждый делает одну вещь.
        </h2>
        <div className="space-y-[6px]">
          {screens.map((s) => (
            <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
              <div className="flex items-baseline gap-[6px] mb-[3px]">
                <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] font-bold">{s.num}</span>
                <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.05em]">{s.label}</p>
              </div>
              <p className="text-[11px] font-semibold text-[hsl(var(--slide-text))] leading-[1.3] mb-[2px]">{s.body}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[10px] leading-[1.4]">
          Все три стоят — продукт работает. Сломан хотя бы один — человек ушёл.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Рамка всей встречи
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[32px]">
        Три экрана. Каждый делает одну вещь.
      </h2>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1700px] mb-[28px]">
        {screens.map((s) => (
          <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[28px] py-[28px]">
            <div className="flex items-baseline gap-[12px] mb-[14px]">
              <span className="font-mono text-[64px] text-[hsl(var(--slide-gold))] font-bold leading-none">{s.num}</span>
              <p className="text-[18px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.08em] leading-[1.2]">{s.label}</p>
            </div>
            <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[10px]">{s.body}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{s.detail}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Все три стоят — продукт работает. Сломан хотя бы один — человек ушёл. Сегодня разбираем каждый экран отдельно, с примерами.
      </p>
    </div>
  );
}
