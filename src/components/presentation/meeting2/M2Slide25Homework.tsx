import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide25Homework() {
  const tasks = [
    {
      time: "1 ч",
      title: "Позиционирование через результат",
      items: [
        "Финализируйте формулу: [Кто] получает [результат] с помощью [продукт], без [боль]",
        "Напишите 3 версии: для лендинга, для холодного сообщения, для 30-сек питча",
        "Протестируйте на 5 людях — понятно ли с первого раза, что это и для кого?",
      ],
    },
    {
      time: "1–2 ч",
      title: "Цена и модель монетизации",
      items: [
        "Посчитайте результат клиента в деньгах или времени",
        "Определите цену: B2B = 1-10% от результата, B2C = в 20-50× дешевле альтернативы",
        "Выберите модель монетизации и запишите тарифы",
      ],
    },
    {
      time: "2–3 ч",
      title: "Фичи MVP по методу MoSCoW",
      items: [
        "Выпишите все фичи, которые хотите построить",
        "Каждой присвойте приоритет: MUST / SHOULD / COULD / WON'T",
        "В MVP оставьте только MUST HAVE (не больше 3-4 фичей)",
        "Покажите прототип 3 людям из ЦА. Если есть MVP — попробуйте продать. Если нет — возьмите предоплату в обмен на обещание дать продукт первым",
      ],
    },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Задание на неделю</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">3 задания</h2>
        <div className="space-y-[10px]">
          {tasks.map((t, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <div className="flex items-center gap-[6px] mb-[4px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[6px] py-[2px] rounded">{t.time}</span>
                <p className="text-[11px] font-semibold text-[hsl(var(--slide-text))]">{t.title}</p>
              </div>
              <div className="space-y-[2px]">
                {t.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-[6px]">
                    <span className="w-[3px] h-[3px] rounded-full bg-[hsl(var(--slide-gold))] shrink-0 mt-[5px]" />
                    <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Задание на неделю</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[44px]">3 задания</h2>
      <div className="space-y-[24px] max-w-[1100px]">
        {tasks.map((t, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[20px]">
            <div className="flex items-center gap-[12px] mb-[12px]">
              <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[12px] py-[6px] rounded">{t.time}</span>
              <p className="text-[22px] font-semibold text-[hsl(var(--slide-text))]">{t.title}</p>
            </div>
            <div className="space-y-[8px] pl-[4px]">
              {t.items.map((item, j) => (
                <div key={j} className="flex items-start gap-[10px]">
                  <span className="w-[5px] h-[5px] rounded-full bg-[hsl(var(--slide-gold))] shrink-0 mt-[8px]" />
                  <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
