import { useIsMobile } from "@/hooks/use-mobile";

const tactics = [
  { n: "1", t: "Холл, не зал", d: "Доклады смотришь в записи через неделю. На конференции — кофе, регистрация, курилка, очередь к speaker'у. Там твоя аудитория." },
  { n: "2", t: "Calendar открыт на телефоне", d: "Cal.com / Calendly с готовыми 30-мин слотами на ближайшие 7 дней. Не в браузере — в приложении, доступ в 2 тапа." },
  { n: "3", t: "Демо букается в моменте", d: "Не «давай созвонимся» — а «у меня вторник в 14:00 свободен, кидаю инвайт». Инвайт улетает до того, как ты пожал руку второй раз." },
  { n: "4", t: "Voice memo вместо визиток", d: "После разговора — 30 сек voice memo: имя, компания, о чём говорили, что обещал. Визитки = death. Voice memo = живой контекст для follow-up." },
];

export default function M11Slide09MetaMinderCase() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          🔥 Кейс · MetaMinder
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Холл важнее зала.<br /><span className="text-[hsl(var(--slide-gold))]">Десятки контактов → реальные сделки.</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[7px] leading-[1.45]">
          В MetaMinder сотни клиентов пришли через офлайн-нетворк на конференциях. Не через ads, не через SDR — через личные разговоры в перерывах. Правило одно: <span className="text-[hsl(var(--slide-gold))] font-semibold">демо букается прямо в моменте, иначе оно не происходит.</span>
        </p>
        <div className="space-y-[4px] mb-[5px]">
          {tactics.map((t) => (
            <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[4px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[11px] font-bold text-[hsl(var(--slide-gold))]">{t.n}</span>
                <span className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[16px]">{t.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[8px] py-[4px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[1px]">Конверсия</p>
          <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">Демо, забуканное в моменте → 70% явка. Демо «созвонимся позже» → 15% явка. Разница в 4.5×.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        🔥 Кейс · MetaMinder
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        Холл важнее зала. <span className="text-[hsl(var(--slide-gold))]">Десятки контактов → реальные сделки.</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1700px] leading-[1.45]">
        В MetaMinder сотни клиентов пришли через офлайн-нетворк на конференциях. Не через ads, не через SDR — через личные разговоры в перерывах. Правило одно: <span className="text-[hsl(var(--slide-gold))] font-semibold">демо букается прямо в моменте, иначе оно не происходит.</span>
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px] mb-[20px]">
        {tactics.map((t) => (
          <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[18px]">
            <div className="flex items-baseline gap-[14px] mb-[6px]">
              <span className="font-display text-[36px] font-bold text-[hsl(var(--slide-gold))] leading-none">{t.n}</span>
              <span className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[50px]">{t.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[28px] py-[16px] max-w-[1700px]">
        <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[6px]">Конверсия — почему именно «в моменте»</p>
        <p className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">Демо, забуканное в моменте → <span className="text-[hsl(var(--slide-gold))] font-bold">70% явка</span>. Демо «давай созвонимся позже» → <span className="text-[hsl(var(--slide-gold))] font-bold">15% явка</span>. Разница в 4.5×. Через неделю человек забыл о чём говорили, у него 200 новых писем — твоё одно из них.</p>
      </div>
    </div>
  );
}
