import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  { n: "1", t: "Не сиди в зале — ходи в перерывах", d: "Доклады можно посмотреть в записи. А вот кофе-брейки, регистрация и очереди после выступлений — это место, где собираются твои будущие клиенты. Будь там." },
  { n: "2", t: "Договаривайся о встречах до прилёта", d: "Заранее найди список участников конференции, выбери тех, кто тебе подходит, и напиши им: «Тоже буду на этом мероприятии — давай встретимся». Цель: забить 60-70% времени до начала." },
  { n: "3", t: "Назначай встречу прямо во время разговора", d: "Открой календарь на телефоне и предложи конкретное время: «У меня завтра в 14:00 свободно — пришлю приглашение». Отправь его, пока вы ещё стоите рядом." },
  { n: "4", t: "Записывай заметки голосом вместо визиток", d: "30 секунд после разговора: назови вслух имя, компанию и о чём договорились. К вечеру перенеси в таблицу. Визитка без записи — это потерянный контакт." },
];

const numbers = [
  { n: "70%", l: "приходят на встречу, если назначили прямо на мероприятии" },
  { n: "15%", l: "приходят, если сказали «давай как-нибудь позже»" },
  { n: "4.5×", l: "разница в результате: «сейчас» работает в 4-5 раз лучше, чем «потом»" },
];

export default function M11Slide08MetaMinderB2B() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          🔥 Кейс MetaMinder · события как канал продаж
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Конференция = <span className="text-[hsl(var(--slide-gold))]">сотни личных знакомств за 2 дня</span>
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[10px] leading-[1.45]">
          В MetaMinder сотни клиентов пришли через офлайн-нетворк. Не через рекламу и не через холодные звонки — через личные разговоры в перерывах. Одно правило: <span className="text-[hsl(var(--slide-gold))] font-semibold">встречу назначаем сразу на месте.</span>
        </p>
        <div className="space-y-[6px] mb-[10px]">
          {rules.map((r) => (
            <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))]">{r.n}</span>
                <span className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{r.t}</span>
              </div>
              <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[18px]">{r.d}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-[6px]">
          {numbers.map((m) => (
            <div key={m.n} className="bg-[hsl(var(--slide-gold)/0.1)] border-l border-[hsl(var(--slide-gold))] rounded-[4px] px-[8px] py-[6px]">
              <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] leading-none">{m.n}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{m.l}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        🔥 Кейс MetaMinder · события как канал продаж
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[16px] tracking-[-0.02em]">
        Конференция = <span className="text-[hsl(var(--slide-gold))]">сотни личных знакомств за 2 дня</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1700px] leading-[1.45]">
        В MetaMinder сотни клиентов пришли через офлайн-нетворк. Не через рекламу и не через холодные звонки — через личные разговоры в перерывах. Одно правило: <span className="text-[hsl(var(--slide-gold))] font-semibold">встречу назначаем сразу на месте, иначе она не случится.</span>
      </p>
      <div className="grid grid-cols-2 gap-[22px] mb-[22px] max-w-[1700px]">
        {rules.map((r) => (
          <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[18px]">
            <div className="flex items-baseline gap-[12px] mb-[6px]">
              <span className="font-display text-[32px] font-bold text-[hsl(var(--slide-gold))] leading-none">{r.n}</span>
              <span className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{r.t}</span>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[44px]">{r.d}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1700px]">
        {numbers.map((m) => (
          <div key={m.n} className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[24px] py-[14px]">
            <p className="font-display text-[44px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[6px]">{m.n}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

