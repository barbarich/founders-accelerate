import { useIsMobile } from "@/hooks/use-mobile";

const filters = [
  { n: "1", name: "Размер компании", q: "Сколько сотрудников. Малый бизнес и большая корпорация — это две разные продажи.", tag: "было в уроке 10" },
  { n: "2", name: "Отрасль", q: "Не «бизнес», а конкретная ниша: рестораны, клиники, логистика, юристы.", tag: "было в уроке 10" },
  { n: "3", name: "Должность человека", q: "Конкретная роль, а не «руководство». Кому эта задача мешает жить каждый день.", tag: "было в уроке 10" },
  { n: "4", name: "Что у них случилось сейчас", q: "Наняли человека, открыли направление, сменили систему, получили деньги. Без повода — «может, когда-нибудь».", tag: "новое" },
  { n: "5", name: "Какую сумму он утвердит сам", q: "Если твоя цена выше его полномочий — сделка уходит на согласование и стоит там месяцами.", tag: "новое" },
  { n: "6", name: "Кто ещё подписывает", q: "Юристы, безопасность, закупки. Не знаешь заранее — они появятся в самом конце и всё остановят.", tag: "новое" },
  { n: "7", name: "Похож на лучшего клиента", q: "Возьми того, кому уже помог. Кого из него ты бы «клонировал»? Портрет из головы — фантазия.", tag: "новое" },
];

export default function L13Slide04KillerICP() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Портрет клиента
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          7 вопросов — и <span className="text-[hsl(var(--slide-gold))]">4 из них обычно забывают</span>
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Первые три ты уже делал в уроке про маркетинг. Продажи ломаются на остальных четырёх.
        </p>
        <div className="space-y-[3px]">
          {filters.map((f) => (
            <div
              key={f.n}
              className={`rounded-[4px] px-[7px] py-[3px] border ${f.tag === "новое" ? "bg-[hsl(var(--slide-gold)/0.1)] border-[hsl(var(--slide-gold)/0.4)]" : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"}`}
            >
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{f.n}</span>
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{f.name}</span>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{f.q}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Портрет клиента
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px] tracking-[-0.02em]">
        7 вопросов — и <span className="text-[hsl(var(--slide-gold))]">4 из них обычно забывают</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1700px] leading-[1.45]">
        Первые три ты уже делал в уроке про маркетинг — это твой сегмент. Продажи ломаются на остальных четырёх: они про деньги, сроки и согласование.
      </p>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[10px] max-w-[1700px]">
        {filters.map((f) => (
          <div
            key={f.n}
            className={`rounded-[10px] px-[22px] py-[13px] border ${f.tag === "новое" ? "bg-[hsl(var(--slide-gold)/0.1)] border-[hsl(var(--slide-gold)/0.4)]" : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"}`}
          >
            <div className="flex items-baseline gap-[12px] mb-[3px]">
              <span className="font-display text-[26px] font-bold text-[hsl(var(--slide-gold))] leading-none">{f.n}</span>
              <p className="text-[21px] font-bold text-[hsl(var(--slide-text))]">{f.name}</p>
              <span className="text-[13px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))]">{f.tag}</span>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[38px]">{f.q}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
