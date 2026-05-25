import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  { n: "1", t: "Холл, не зал", d: "Доклады смотришь в записи. На конференции — кофе, регистрация, очередь к speaker'у. Там твоя ICP." },
  { n: "2", t: "Pre-conference scheduler", d: "Brella · Swapcard · Grip · Web Summit Connect. Цель: 60-70% calendar заполнен ДО прилёта. Список attendees → 30 целевых → personal DM с reference на эвент." },
  { n: "3", t: "Демо букается в моменте", d: "Calendar открыт на телефоне с 30-мин слотами. «У меня вторник 14:00 свободен — кидаю инвайт». Инвайт улетает до того, как ты пожал руку второй раз." },
  { n: "4", t: "Voice memo вместо визиток", d: "30 сек после каждого: имя, компания, о чём говорили, что обещал. К вечеру — всё в CRM. Визитки = death." },
];

const numbers = [
  { n: "70%", l: "явка на демо, забуканное в моменте на конференции" },
  { n: "15%", l: "явка на демо «давай созвонимся через неделю»" },
  { n: "4.5×", l: "разница в конверсии · вот почему «в моменте» — единственное правильное" },
];

export default function M11Slide08MetaMinderB2B() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          🔥 Кейс MetaMinder · события как B2B-канал
        </p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Конференция = <span className="text-[hsl(var(--slide-gold))]">форсированный warm intro в массе</span>
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[5px] leading-[1.45]">
          В MetaMinder сотни B2B-клиентов пришли через офлайн-нетворк. Не через ads, не через SDR — через личные разговоры в перерывах. Одно правило: <span className="text-[hsl(var(--slide-gold))] font-semibold">демо букается прямо в моменте.</span>
        </p>
        <div className="space-y-[3px] mb-[5px]">
          {rules.map((r) => (
            <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-baseline gap-[4px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{r.n}</span>
                <span className="text-[8px] font-bold text-[hsl(var(--slide-text))]">{r.t}</span>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{r.d}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-[3px]">
          {numbers.map((m) => (
            <div key={m.n} className="bg-[hsl(var(--slide-gold)/0.1)] border-l border-[hsl(var(--slide-gold))] rounded-[3px] px-[4px] py-[2px]">
              <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] leading-none">{m.n}</p>
              <p className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{m.l}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        🔥 Кейс MetaMinder · события как B2B-канал
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        Конференция = <span className="text-[hsl(var(--slide-gold))]">форсированный warm intro в массе</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1700px] leading-[1.45]">
        В MetaMinder сотни B2B-клиентов пришли через офлайн-нетворк. Не через ads, не через SDR — через личные разговоры в перерывах. Одно правило: <span className="text-[hsl(var(--slide-gold))] font-semibold">демо букается прямо в моменте, иначе оно не происходит.</span>
      </p>
      <div className="grid grid-cols-2 gap-[18px] mb-[18px] max-w-[1700px]">
        {rules.map((r) => (
          <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[24px] py-[14px]">
            <div className="flex items-baseline gap-[12px] mb-[4px]">
              <span className="font-display text-[30px] font-bold text-[hsl(var(--slide-gold))] leading-none">{r.n}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{r.t}</span>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[42px]">{r.d}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-[14px] max-w-[1700px]">
        {numbers.map((m) => (
          <div key={m.n} className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[20px] py-[10px]">
            <p className="font-display text-[40px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[4px]">{m.n}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
