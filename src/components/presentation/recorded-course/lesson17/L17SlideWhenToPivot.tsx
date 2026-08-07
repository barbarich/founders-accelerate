import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "1", t: "Канал", q: "Где ты ищешь людей", when: "Меняешь после 40 касаний, на которые вообще не ответили" },
  { n: "2", t: "Сообщение", q: "Что ты им пишешь", when: "Меняешь, если отвечают, но до разговора не доходит" },
  { n: "3", t: "Цена", q: "Сколько просишь", when: "Меняешь, если доходят до кнопки оплаты и не платят" },
  { n: "4", t: "Сегмент", q: "Кому продаёшь", when: "Меняешь, если разговоры идут, но слышишь «это не для нас»" },
  { n: "5", t: "Продукт", q: "Что ты сделал", when: "Меняешь последним - если платят, но не пользуются, или прямо говорят, что задачу это не решает" },
];

export default function L17SlideWhenToPivot() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[14px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Не работает - что менять
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[2px]">
          Одна переменная за раз, и только в этом порядке
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[6px]">
          Поменяешь всё сразу - не узнаешь, что сработало.
        </p>
        <div className="space-y-[4px]">
          {steps.map((s) => (
            <div key={s.n} className="flex items-start gap-[6px]">
              <span className="font-mono text-[7.5px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[14px] h-[14px] flex items-center justify-center shrink-0 font-bold mt-[1px]">{s.n}</span>
              <div>
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.t} <span className="text-[7.5px] font-normal text-[hsl(var(--slide-text-muted))]">· {s.q}</span></p>
                <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{s.when}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[8px] py-[5px] mt-[6px]">
          <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4]">
            Переписывать продукт от тишины - самая дорогая ошибка. Тишина чаще говорит об объёме касаний, а не о качестве продукта.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[110px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Не работает - что менять
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px] tracking-[-0.01em]">
        Одна переменная за раз, <span className="text-[hsl(var(--slide-gold))]">и только в этом порядке</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[20px] max-w-[1500px]">
        Поменяешь всё сразу - не узнаешь, что сработало, и придётся начинать проверку заново.
      </p>
      <div className="space-y-[10px] max-w-[1550px]">
        {steps.map((s) => (
          <div key={s.n} className="flex items-start gap-[18px]">
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[40px] h-[40px] flex items-center justify-center shrink-0 font-bold">{s.n}</span>
            <div>
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
                {s.t} <span className="text-[16px] font-normal text-[hsl(var(--slide-text-muted))]">· {s.q}</span>
              </p>
              <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[2px]">{s.when}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[26px] py-[14px] max-w-[1550px] mt-[20px]">
        <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Переписывать продукт от тишины - самая дорогая ошибка. Тишина чаще говорит об объёме касаний, а не о качестве продукта.
        </p>
      </div>
    </div>
  );
}
