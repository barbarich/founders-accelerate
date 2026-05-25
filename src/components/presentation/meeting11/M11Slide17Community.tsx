import { useIsMobile } from "@/hooks/use-mobile";

const cases = [
  {
    name: "The Founders Circle",
    metric: "170 регистраций → 14 платных мини-курсов → 5 в когорте акселератора",
    insight: "Сообщество = долгосрочный warm pipeline. Free → paid → high-ticket — естественная воронка без cold sales.",
  },
  {
    name: "Mikey AI",
    metric: "Первые 500 пользователей пришли через личный нетворк + альфа-тестеров из комьюнити",
    insight: "Каждый альфа-тестер привёл 3–5 человек. Это не «реферальная программа» — это органическое слово рта, если продукт даёт WOW.",
  },
];

const when = [
  { q: "Когда фаундеру нужно community?", a: "Когда LTV клиента высокий и cycle принятия решения длинный. Если ты Notion / Linear / SaaS-для-фаундеров — да. Если discount-приложение — нет." },
  { q: "Free или paid с первого дня?", a: "Paid от $10/мес. Free отфильтровывает не-серьёзных. $10 = коммитмент, но не блок входа. Снимает 80% шума." },
  { q: "Платформа?", a: "Не Slack (умирает в долгую). Discord если geek-аудитория. Circle.so / Skool для founder-сообществ. Telegram для русскоговорящих." },
  { q: "Когда монетизировать?", a: "Когда members сами начинают спрашивать «можно ли купить у тебя X». Не раньше. Сначала ценность, потом транзакция." },
];

export default function M11Slide17Community() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Community as pipeline
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Самый <span className="text-[hsl(var(--slide-gold))]">дешёвый long-term канал</span>
        </h2>
        <div className="space-y-[3px] mb-[5px]">
          {cases.map((c) => (
            <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))]">Кейс · {c.name}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text))] leading-[1.4]">{c.metric}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4]">→ {c.insight}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-[3px]">
          {when.map((w) => (
            <div key={w.q} className="bg-[hsl(var(--slide-gold)/0.06)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[3px] px-[5px] py-[3px]">
              <p className="text-[7px] font-bold text-[hsl(var(--slide-gold))]">{w.q}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{w.a}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Community as pipeline
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Самый <span className="text-[hsl(var(--slide-gold))]">дешёвый long-term канал</span>
      </h2>
      <div className="grid grid-cols-2 gap-[20px] mb-[18px] max-w-[1700px]">
        {cases.map((c) => (
          <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[24px] py-[16px]">
            <p className="text-[18px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">Кейс · {c.name}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.45] mb-[6px]">{c.metric}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] italic leading-[1.45]">→ {c.insight}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-[14px] max-w-[1700px]">
        {when.map((w) => (
          <div key={w.q} className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">{w.q}</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{w.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
