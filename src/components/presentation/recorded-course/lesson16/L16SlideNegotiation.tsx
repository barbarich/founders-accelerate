import { useIsMobile } from "@/hooks/use-mobile";

const terms = [
  {
    q: "Сколько платить?",
    b2b: "20-30% от платежей клиента",
    b2c: "10-30% с продаж по промокоду",
    d: "Сам ведёт сделку - верхняя граница, это рыночная норма. Просто дал контакт - 10-15%. В B2C вместо процента часто фикс за интеграцию.",
  },
  {
    q: "Как долго платить?",
    b2b: "Первые 12 месяцев платежей",
    b2c: "Разово или на срок акции",
    d: "В B2B год - достаточно, чтобы партнёр видел смысл, и не режет экономику навсегда. В B2C сделка короткая, тянуть хвост незачем.",
  },
  {
    q: "Кто выставляет счёт?",
    a: "Ты. Клиент - твой",
    d: "Ты берёшь оплату, раз в месяц партнёр присылает тебе инвойс на свою долю. Так ты видишь всех клиентов и не теряешь их, если партнёр уйдёт.",
  },
  {
    q: "Как считать, кого он привёл?",
    b2b: "Присылает имя до первого контакта",
    b2c: "Свой промокод, окно 30 дней",
    d: "В B2B: написал «веду переговоры с X» - клиент закреплён. Если имя уже в твоём списке - не считается, покажи список заранее.",
  },
  {
    q: "Оформлять ли договор?",
    a: "Сначала письмо, потом бумага",
    d: "На старте достаточно письма с условиями и ответа «согласен». Юридический договор - когда пойдут реальные деньги.",
  },
];

const traps = [
  "Клиент вернул деньги - комиссия вычитается из следующей выплаты",
  "Просит эксклюзив - не даём. Максимум 3 месяца под конкретный план",
  "Процент кажется большим? Это твой CAC. Сравни с ценой рекламы из урока 14",
];

export default function L16SlideNegotiation() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          О чём договариваться
        </p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          5 вопросов · и готовый ответ на каждый
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[6px]">
          Дефолт для первого партнёрства. Бери как есть, меняй только если партнёр объяснил, почему иначе.
        </p>
        <div className="space-y-[5px]">
          {terms.map((t) => (
            <div key={t.q} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{t.q}</p>
              {t.a ? (
                <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] my-[1px]">{t.a}</p>
              ) : (
                <div className="my-[1px]">
                  <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))]"><span className="font-mono text-[8px]">B2B</span> {t.b2b}</p>
                  <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))]"><span className="font-mono text-[8px]">B2C</span> {t.b2c}</p>
                </div>
              )}
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{t.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px] mt-[6px]">
          {traps.map((t) => (
            <p key={t} className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4] pl-[9px] relative before:content-['·'] before:absolute before:left-0 before:text-[hsl(var(--slide-gold))]">{t}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[32px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        О чём договариваться
      </p>
      <h2 className="font-display text-[40px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px] tracking-[-0.01em]">
        5 вопросов · и <span className="text-[hsl(var(--slide-gold))]">готовый ответ на каждый</span>
      </h2>
      <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[18px] max-w-[1800px]">
        Дефолт для первого партнёрства. Бери как есть, меняй только если партнёр объяснил, почему иначе.
      </p>
      <div className="grid grid-cols-3 gap-[15px] max-w-[1900px]">
        {terms.map((t) => (
          <div key={t.q} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[14px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[17.5px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">{t.q}</p>
            {t.a ? (
              <p className="text-[18px] font-bold text-[hsl(var(--slide-gold))] mb-[7px] leading-[1.2]">{t.a}</p>
            ) : (
              <div className="mb-[7px] space-y-[2px]">
                <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] leading-[1.25]"><span className="font-mono text-[12px] opacity-70">B2B</span> {t.b2b}</p>
                <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] leading-[1.25]"><span className="font-mono text-[12px] opacity-70">B2C</span> {t.b2c}</p>
              </div>
            )}
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">{t.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[26px] py-[12px] max-w-[1900px] mt-[16px]">
        <div className="grid grid-cols-3 gap-x-[24px]">
          {traps.map((t) => (
            <p key={t} className="text-[14.5px] text-[hsl(var(--slide-text))] leading-[1.4] pl-[14px] relative before:content-['·'] before:absolute before:left-0 before:text-[hsl(var(--slide-gold))]">{t}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
