import { useIsMobile } from "@/hooks/use-mobile";

const checklist = [
  "Пиксель выбран · событие осознанное",
  "Бюджет $20–30 / день · daily",
  "Креативы загрузились · preview ок",
  "Dynamic Creative включен",
  "UTM в URL parameters стоят",
  "Special Ad Category выбрана (если применимо)",
];

const expect = [
  { n: "0–24 ч", t: "Модерация", body: "Meta проверяет креативы автоматически. Обычно 15 минут – 24 часа. Если отклонили — читай причину, чини текст или картинку." },
  { n: "1–3 дня", t: "Поиск", body: "Импрешены идут медленно, CPA нестабилен. Это нормально. Не паникуешь, не выключаешь, не правишь." },
  { n: "4–7 дней", t: "Learning phase", body: "Если набрал 50 конверсий — выйдешь из обучения. Если нет — увеличиваешь бюджет или меняешь событие на более частое (Purchase → AddToCart)." },
  { n: "После 7 дней", t: "Оптимизация", body: "Только теперь можно отключать слабые креативы и доливать бюджет на winning ad set. Раньше — статистика не репрезентативна." },
];

export default function M10Slide10WorkshopPublish() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          🔴 Воркшоп · Шаг 4 · Review → Publish
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Чек-лист перед кнопкой. <span className="text-[hsl(var(--slide-gold))]">И что будет дальше.</span>
        </h2>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[3px]">Перед Publish</p>
        <ul className="space-y-[2px] mb-[6px]">
          {checklist.map((c) => (
            <li key={c} className="text-[8px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">☐ {c}</li>
          ))}
        </ul>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[3px]">После Publish · что ждать</p>
        <div className="space-y-[3px]">
          {expect.map((e) => (
            <div key={e.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[4px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{e.n} ·</span> {e.t}
              </p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        🔴 Воркшоп · Шаг 4 · Review → Publish → Learning phase
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.02em]">
        Чек-лист перед кнопкой. <span className="text-[hsl(var(--slide-gold))]">И что будет дальше.</span>
      </h2>
      <div className="grid grid-cols-[1fr_2fr] gap-[24px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[28px] py-[20px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Перед Publish</p>
          <ul className="space-y-[8px]">
            {checklist.map((c) => (
              <li key={c} className="text-[17px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">☐ {c}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">После Publish · таймлайн ожидания</p>
          <div className="grid grid-cols-2 gap-[14px]">
            {expect.map((e) => (
              <div key={e.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[22px] py-[14px]">
                <div className="flex items-baseline gap-[10px] mb-[4px]">
                  <span className="text-[14px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] font-bold">{e.n}</span>
                  <span className="text-[18px] font-bold text-[hsl(var(--slide-text))]">{e.t}</span>
                </div>
                <p className="text-[14px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
