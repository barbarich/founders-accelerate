import { useIsMobile } from "@/hooks/use-mobile";

const checks = [
  { t: "График роста", d: "Social Blade, бесплатно. Плюс 15% подписчиков за неделю без вирусного ролика - накрутка." },
  { t: "Доля живых подписчиков", d: "Бесплатный чекер Modash или HypeAuditor. Больше 25% подозрительных - проходим мимо." },
  { t: "Комментарии глазами", d: "Больше 15% односложных и эмодзи - аудитория куплена. Ищи вопросы по сути." },
  { t: "Скриншот его статистики", d: "Проси охваты и географию. Отказ показать - главный красный флаг, честные дают сразу." },
];

const money = [
  "Каждому свой промокод и своя ссылка - иначе через месяц не поймёшь, кто привёл",
  "Окно засчитывания - 30 дней, для дорогого продукта 60",
  "Сравнивай креаторов по продажам на 1000 просмотров, а не по лайкам",
];

export default function L16SlideCreatorsCheck() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Инфлюенсеры · проверка и деньги
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          10 минут проверки экономят весь бюджет
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Примерно каждый третий подписчик на рынке - накрутка. Проверять надо до оплаты, а не после.
        </p>
        <div className="space-y-[5px] mb-[7px]">
          {checks.map((c, i) => (
            <div key={c.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{i + 1}. {c.t}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px]">
          <p className="text-[8.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[2px]">Как считать деньги</p>
          {money.map((m) => (
            <p key={m} className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4] pl-[9px] relative before:content-['·'] before:absolute before:left-0 before:text-[hsl(var(--slide-gold))]">{m}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Инфлюенсеры · проверка и деньги
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        10 минут проверки <span className="text-[hsl(var(--slide-gold))]">экономят весь бюджет</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[20px] max-w-[1800px]">
        Примерно каждый третий подписчик на рынке - накрутка. Проверять надо до оплаты, а не после.
      </p>
      <div className="grid grid-cols-4 gap-[16px] max-w-[1900px] mb-[18px]">
        {checks.map((c, i) => (
          <div key={c.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
            <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
            <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mt-[4px] mb-[6px]">{c.t}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[26px] py-[14px] max-w-[1900px]">
        <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Как считать деньги</p>
        <div className="grid grid-cols-3 gap-x-[24px]">
          {money.map((m) => (
            <p key={m} className="text-[15px] text-[hsl(var(--slide-text))] leading-[1.4] pl-[14px] relative before:content-['·'] before:absolute before:left-0 before:text-[hsl(var(--slide-gold))]">{m}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
