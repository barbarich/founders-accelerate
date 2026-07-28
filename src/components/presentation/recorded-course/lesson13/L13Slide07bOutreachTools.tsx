import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  {
    name: "Apollo",
    price: "$49/мес",
    role: "База контактов",
    body: "Находишь компании под свой ICP и людей внутри: должности, проверенные email. Список «50 компаний × 3 контакта» собирается здесь за вечер.",
  },
  {
    name: "Linked Helper",
    price: "$15/мес",
    role: "Автоматизация LinkedIn",
    body: "Визиты профилей, заявки в контакты, цепочки сообщений по расписанию. Параллельный канал к email — один и тот же человек видит тебя в двух местах.",
  },
  {
    name: "Instantly",
    price: "$37/мес",
    role: "Cold email",
    body: "Прогрев почтового домена, чтобы письма не падали в спам, и отправка последовательностей с автоматическими фоллоу-апами.",
  },
];

export default function L13Slide07bOutreachTools() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Инструменты аутрича
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Весь стек — <span className="text-[hsl(var(--slide-gold))]">около $100 в месяц</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[7px] leading-[1.4]">
          Ориентир воронки: 500 контактов → 5–10 встреч → 1–2 клиента.
        </p>
        <div className="space-y-[4px] mb-[6px]">
          {tools.map((t) => (
            <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <div className="flex items-baseline justify-between gap-[5px]">
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">
                  {t.name} <span className="text-[7.5px] text-[hsl(var(--slide-gold))] font-medium">· {t.role}</span>
                </p>
                <p className="text-[8px] text-[hsl(var(--slide-gold))] font-semibold shrink-0">{t.price}</p>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{t.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[8px] py-[4px]">
          <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
            <span className="text-[hsl(var(--slide-gold))] font-bold">Правило:</span> инструменты масштабируют адресность, а не заменяют её. Сначала 20–30 писем руками — понять, на что отвечают. Потом автоматизация.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Инструменты аутрича
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px] tracking-[-0.02em]">
        Весь стек — <span className="text-[hsl(var(--slide-gold))]">около $100 в месяц</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1700px] leading-[1.45]">
        Ориентир воронки на этом стеке: 500 контактов → 5–10 встреч → 1–2 клиента.
      </p>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1700px] mb-[20px]">
        {tools.map((t) => (
          <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[26px] py-[22px]">
            <div className="flex items-baseline justify-between gap-[12px] mb-[4px]">
              <p className="text-[26px] font-bold text-[hsl(var(--slide-text))]">{t.name}</p>
              <p className="text-[17px] text-[hsl(var(--slide-gold))] font-semibold shrink-0">{t.price}</p>
            </div>
            <p className="text-[15px] uppercase tracking-[0.08em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">{t.role}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{t.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[24px] py-[14px] max-w-[1700px]">
        <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
          <span className="text-[hsl(var(--slide-gold))] font-bold">Правило:</span> инструменты масштабируют адресность, а не заменяют её. Сначала 20–30 писем руками — понять, какие поводы и формулировки работают. Потом автоматизация того, что уже отвечает.
        </p>
      </div>
    </div>
  );
}
