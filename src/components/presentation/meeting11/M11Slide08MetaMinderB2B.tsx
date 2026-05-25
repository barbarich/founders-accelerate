import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  { n: "1", t: "Стояй в холле, а не в зале", d: "На доклады ходи в записи. Главное — кофе-паузы, регистрация, очередь после выступления. Именно там твои будущие клиенты." },
  { n: "2", t: "Договаривайся о встречах заранее", d: "Используй приложения конференции. Цель: забить 60-70% времени ДО прилёта. Найди список участников → выбери 30 подходящих → напиши лично, что тоже будешь на этом мероприятии." },
  { n: "3", t: "Назначай встречу сразу на месте", d: "На телефоне открой расписание с 30-минутными окнами. «У меня вторник в 14:00 свободен — пришлю приглашение». Приглашение уходит до того, как вы попрощались." },
  { n: "4", t: "Записывай голосовые заметки вместо визиток", d: "30 секунд после каждого разговора: имя, компания, о чём говорили, что пообещал. К вечеру — всё в таблице. Визитки без записи = потерянный контакт." },
];

const numbers = [
  { n: "70%", l: "приходят на встречу, если назначили прямо на конференции" },
  { n: "15%", l: "приходят, если сказали «давай созвонимся через неделю»" },
  { n: "4.5×", l: "разница в конверсии · именно поэтому «сейчас» — единственное правильное время" },
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

