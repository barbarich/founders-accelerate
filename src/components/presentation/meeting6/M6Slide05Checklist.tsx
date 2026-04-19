import { useIsMobile } from "@/hooks/use-mobile";

const checks = [
  {
    num: "1",
    title: "Авторизованный вход работает",
    detail: "Юзер регистрируется и попадает в продукт. Не в 404, не в пустой экран с ошибкой, не в «скоро будет».",
  },
  {
    num: "2",
    title: "Первый экран даёт ориентацию",
    detail: "Не пустой дашборд. Либо pre-filled sample, либо одна яркая CTA на первое действие. Юзер понимает что делать — даже если не знает зачем продукт нужен именно ему.",
  },
  {
    num: "3",
    title: "1 реальный юзер прошёл первую сессию",
    detail: "Живой человек, не ты. Зарегистрировался, сделал первое действие, увидел первый результат. Может пересказать что делает продукт своими словами. Aha может не случиться сегодня — это нормально.",
  },
];

export default function M6Slide05Checklist() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Чек-лист готовности к концу встречи
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
          3 галочки.<br />Без них — не двинулись.
        </h2>
        <div className="space-y-[5px]">
          {checks.map((c) => (
            <div key={c.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-center gap-[6px] mb-[2px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold">{c.num}</span>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{c.title}</p>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Чек-лист готовности к концу встречи
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[36px]">
        3 галочки. Без них — не двинулись.
      </h2>

      <div className="grid grid-cols-3 gap-[20px] max-w-[1500px]">
        {checks.map((c) => (
          <div key={c.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[26px] py-[22px]">
            <div className="flex items-center gap-[14px] mb-[14px]">
              <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[34px] h-[34px] flex items-center justify-center rounded-full font-bold">{c.num}</span>
              <h3 className="text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{c.title}</h3>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{c.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
