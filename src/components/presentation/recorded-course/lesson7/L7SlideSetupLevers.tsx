import { useIsMobile } from "@/hooks/use-mobile";

const levers = [
  {
    t: "Сократи путь",
    d: "Выпиши каждый шаг от открытия до результата. Всё, что не обязательно ДО первого вау — регистрацию, тур, настройку профиля — перенеси на ПОСЛЕ Aha.",
  },
  {
    t: "Покажи результат заранее",
    d: "Юзер должен увидеть «готовое» раньше, чем сам что-то сделал. Demo-данные, заполненный пример, шаблон, чужой результат. Пустой первый экран = Aha не случится.",
  },
  {
    t: "Дай один маленький win",
    d: "Одно действие, которое сразу даёт видимый результат. Не «настрой всё», а «нажми — и увидь». Первый успех за секунды, не за сессию.",
  },
];

export default function L7SlideSetupLevers() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Как настроить Aha
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Настроить Aha — значит <span className="text-[hsl(var(--slide-gold))]">убрать всё</span> между «открыл» и «увидел результат».
        </h2>
        <p className="text-[10.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[12px]">
          Aha не придумывают — его расчищают. Три рычага, которыми это делается в любом продукте:
        </p>
        <div className="space-y-[8px]">
          {levers.map((r, i) => (
            <div key={i} className="flex items-start gap-[10px]">
              <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[22px] h-[22px] flex items-center justify-center shrink-0 font-bold mt-[1px]">{i + 1}</span>
              <div className="flex-1">
                <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] mb-[2px] leading-[1.2]">{r.t}</p>
                <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Как настроить Aha
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.01em] max-w-[1800px]">
        Настроить Aha — значит <span className="text-[hsl(var(--slide-gold))]">убрать всё</span> между «открыл» и «увидел результат».
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1700px] mb-[32px]">
        Aha не придумывают — его расчищают. Три рычага, которыми это делается в любом продукте:
      </p>
      <div className="space-y-[16px] max-w-[1800px]">
        {levers.map((r, i) => (
          <div key={i} className="flex items-start gap-[18px]">
            <span className="font-mono text-[22px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[48px] h-[48px] flex items-center justify-center shrink-0 font-bold mt-[2px]">{i + 1}</span>
            <div className="flex-1">
              <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] mb-[6px] leading-[1.2]">{r.t}</p>
              <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{r.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
