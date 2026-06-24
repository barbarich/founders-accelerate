import { useIsMobile } from "@/hooks/use-mobile";

const blocks = [
  {
    num: "01",
    title: "Валидация и ресерч",
    desc: "Понять, что вообще строить. Рынок, конкуренты, разговоры с пользователями.",
  },
  {
    num: "02",
    title: "Построение продукта",
    desc: "Что и как строить, какими инструментами, онбординг и ретеншн.",
  },
  {
    num: "03",
    title: "Маркетинг и продажи",
    desc: "Позиционирование и продажи. Как то, что ты построил, начать продавать.",
  },
];

export default function L0Slide05Blocks() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[36px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Структура курса
        </p>
        <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px] tracking-[-0.01em]">
          Три блока
        </h2>
        <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[20px]">
          Пройдём их по порядку — каждый строит на предыдущем.
        </p>
        <div className="space-y-[12px]">
          {blocks.map((b) => (
            <div key={b.num} className="flex items-start gap-[14px] border border-[hsl(var(--slide-gold)/0.2)] rounded-md p-[14px]">
              <span className="font-display text-[24px] font-bold text-[hsl(var(--slide-gold)/0.55)] leading-none shrink-0">
                {b.num}
              </span>
              <div>
                <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] mb-[4px] leading-[1.2]">
                  {b.title}
                </p>
                <p className="text-[12px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Структура курса
      </p>
      <h2 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px] tracking-[-0.01em]">
        Три блока
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[48px] max-w-[1300px]">
        Пройдём их по порядку — каждый строит на предыдущем.
      </p>
      <div className="grid grid-cols-3 gap-[28px] max-w-[1800px]">
        {blocks.map((b) => (
          <div
            key={b.num}
            className="border border-[hsl(var(--slide-gold)/0.25)] rounded-lg p-[32px] bg-[hsl(var(--slide-gold)/0.04)]"
          >
            <span className="font-display text-[44px] font-bold text-[hsl(var(--slide-gold)/0.5)] leading-none block mb-[16px]">
              {b.num}
            </span>
            <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] mb-[14px] leading-[1.2]">
              {b.title}
            </p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
              {b.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
