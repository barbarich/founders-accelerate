import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { num: "1", title: "Личный outreach с историей", body: "Не «здравствуйте, мы компания X». А ты лично: почему написал именно ему, какую его боль видишь, как связано с твоей историей." },
  { num: "2", title: "Разговор один на один", body: "Звонок или встреча, где ты слушаешь больше, чем говоришь. Каждое «нет» и «а что если» - это данные, которых у тебя ещё нет." },
  { num: "3", title: "Ручное закрытие", body: "Ты сам доводишь до оплаты, подстраивая предложение под конкретного клиента. Медленно, зато ты видишь, что реально двигает сделку." },
];

export default function L10SlideB2BHow() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          B2B · как фаундер продаёт
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Руками. И это <span className="text-[hsl(var(--slide-gold))]">твоё преимущество</span>, не проблема.
        </h2>
        <div className="space-y-[7px] mb-[9px]">
          {steps.map((s) => (
            <div key={s.num} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[7px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[10.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">{s.num}. {s.title}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45] mt-[1px]">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Из этой ручной работы рождается скрипт и список возражений. <span className="text-[hsl(var(--slide-gold))]">Вот тогда</span> и нанимают продажника - на готовое. Подробно - в уроке 13.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        B2B · как фаундер продаёт
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em] max-w-[1800px]">
        Руками. И это <span className="text-[hsl(var(--slide-gold))]">твоё преимущество</span>, не проблема.
      </h2>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1800px] mb-[24px]">
        {steps.map((s) => (
          <div key={s.num} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[26px] py-[20px] bg-[hsl(var(--slide-gold)/0.04)]">
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[40px] h-[40px] flex items-center justify-center rounded-full font-bold mb-[14px]">{s.num}</span>
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[10px]">{s.title}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Из этой ручной работы рождается скрипт и список возражений. <span className="text-[hsl(var(--slide-gold))]">Вот тогда</span> и нанимают продажника - на готовое. Подробно - в уроке 13.
        </p>
      </div>
    </div>
  );
}
