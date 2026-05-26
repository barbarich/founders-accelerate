import { useIsMobile } from "@/hooks/use-mobile";

const reasons = [
  {
    num: "1",
    title: "Не понял, что я тут получу.",
    desc: "Лозунг вместо результата. Список фич вместо одного предложения.",
  },
  {
    num: "2",
    title: "От меня просят слишком много слишком рано.",
    desc: "Регистрация, верификация, настройка — до того, как я увидел ценность.",
  },
  {
    num: "3",
    title: "Я что-то сделал — и не понял, что произошло.",
    desc: "Результат был, но продукт его не назвал. Юзер не уверен, сработало ли.",
  },
  {
    num: "4",
    title: "Я закрыл — и ничего не происходит.",
    desc: "Нет причины открыть завтра. Push не помогает — нечего напоминать.",
  },
];

export default function L8Slide04FourReasons() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Почему уходят
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Все уходят по одной из четырёх причин.
        </h2>
        <div className="space-y-[5px]">
          {reasons.map((r) => (
            <div key={r.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[10px] py-[7px] flex gap-[8px]">
              <span className="font-mono text-[12px] text-[hsl(var(--slide-gold))] font-bold shrink-0">{r.num}</span>
              <div>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[2px]">{r.title}</p>
                <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[8px] leading-[1.4]">
          Эти 4 причины — и есть три экрана, которые сегодня переделаем.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Почему уходят
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px]">
        Все уходят по одной из четырёх причин.
      </h2>
      <div className="grid grid-cols-2 gap-[16px] max-w-[1500px] mb-[24px]">
        {reasons.map((r) => (
          <div key={r.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[22px] flex gap-[20px]">
            <span className="font-mono text-[36px] text-[hsl(var(--slide-gold))] font-bold leading-none shrink-0">{r.num}</span>
            <div>
              <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[8px]">{r.title}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1400px] leading-[1.4]">
        Эти 4 причины — и есть три экрана, которые сегодня переделаем. Один экран = одна причина устранена.
      </p>
    </div>
  );
}
