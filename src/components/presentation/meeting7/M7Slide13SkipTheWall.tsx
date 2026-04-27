import { useIsMobile } from "@/hooks/use-mobile";

const oldFlow = ["Зарегистрируйся", "Подтверди email", "Создай команду", "Создай проект", "Выбери шаблон", "Начни рисовать"];
const newFlow = ["Открыл сайт", "Пустой холст", "Рисуй"];

export default function M7Slide13SkipTheWall() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Главное правило экрана 2
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Сначала результат. Потом email.
        </h2>
        <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[10px]">
          Регистрация — это плата. Берёшь её только когда юзер уже получил ценность.
        </p>
        <div className="space-y-[6px] mb-[10px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-400/30 rounded-[6px] px-[10px] py-[7px]">
            <p className="text-[9px] uppercase tracking-[0.1em] text-red-400 mb-[4px] font-semibold">✗ Старая модель — Figma до 2018</p>
            <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{oldFlow.join(" → ")}</p>
            <p className="text-[8px] text-red-400 mt-[3px] font-semibold">6 шагов до действия = 80% уходит</p>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.4)] rounded-[6px] px-[10px] py-[7px]">
            <p className="text-[9px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[4px] font-semibold">✓ Новая модель — Figma с 2018</p>
            <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4]">{newFlow.join(" → ")}</p>
            <p className="text-[8px] text-[hsl(var(--slide-gold))] mt-[3px] font-semibold">1 шаг = в 4 раза больше остаются</p>
          </div>
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Email — после результата. Не до.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Главное правило экрана 2
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
        Регистрация — это плата.
      </h2>
      <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[28px] max-w-[1500px]">
        Берёшь её только когда юзер уже получил ценность.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1600px] mb-[24px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-400/30 rounded-[14px] px-[28px] py-[24px]">
          <p className="text-[14px] uppercase tracking-[0.15em] text-red-400 mb-[14px] font-semibold">✗ Старая модель — Figma до 2018</p>
          <div className="space-y-[6px] mb-[12px]">
            {oldFlow.map((step, i) => (
              <p key={i} className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                <span className="font-mono text-[hsl(var(--slide-gold))] mr-[8px]">{i + 1}.</span>{step}
              </p>
            ))}
          </div>
          <p className="text-[18px] text-red-400 font-semibold leading-[1.3]">
            6 шагов до первого действия = 80% уходят
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-[2px] border-[hsl(var(--slide-gold)/0.5)] rounded-[14px] px-[28px] py-[24px]">
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[14px] font-semibold">✓ Новая модель — Figma с 2018</p>
          <div className="space-y-[6px] mb-[12px]">
            {newFlow.map((step, i) => (
              <p key={i} className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.4]">
                <span className="font-mono text-[hsl(var(--slide-gold))] mr-[8px]">{i + 1}.</span>{step}
              </p>
            ))}
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4] mt-[10px]">
              Email — только когда хочешь сохранить.
            </p>
          </div>
          <p className="text-[18px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.3]">
            1 шаг до действия = в 4 раза больше остаются
          </p>
        </div>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Кто отдаёт ценность ДО регистрации — тот выигрывает. Это разница между продуктами, которые растут, и теми, которые нет.
      </p>
    </div>
  );
}
