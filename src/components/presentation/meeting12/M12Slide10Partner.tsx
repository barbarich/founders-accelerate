import { useIsMobile } from "@/hooks/use-mobile";

const take = [
  { t: "Закрывает то, чего нет у тебя", d: "Навык или сеть, которых тебе реально не хватает — не дубль тебя." },
  { t: "Даёт 10x, а не +10%", d: "С ним скорость кратно выше. Иначе это найм или подрядчик, не доля." },
  { t: "Вы прошли стресс вместе", d: "Сначала trial-проект на 4-8 недель — «свидания до брака». Потом доли." },
  { t: "Не «лекарство от одиночества»", d: "В 2026 соло + AI уходит далеко. Партнёр — за результат, не за компанию." },
];

const flags = [
  { t: "Вторая работа «пока на время»", d: "Кто уйдёт через год или не уйдёт вообще — это конфликт по расписанию." },
  { t: "Не умеет спорить", d: "Либо молчит и копит, либо взрывается. Под давлением будет хуже." },
  { t: "Деньги горят", d: "Войдёт ради зарплаты, а не миссии. Уйдёт на первом тяжёлом месяце." },
  { t: "Хочет 50/50 «по-честному»", d: "Без аргументов, почему именно поровну. 50/50 — это deadlock." },
];

export default function M12Slide10Partner() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Партнёрство · нужен ли тебе co-founder
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.12] mb-[4px]">
          Партнёр удваивает скорость — <span className="text-[hsl(var(--slide-gold))]">или убивает компанию.</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[6px]">
          65% стартапов убивает не рынок, а конфликт основателей. Разберём, как не попасть.
        </p>
        <div className="grid grid-cols-2 gap-[5px]">
          <div>
            <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] mb-[3px]">Бери, только если</p>
            <div className="space-y-[3px]">
              {take.map((t) => (
                <div key={t.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
                  <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{t.t}</p>
                  <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{t.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] mb-[3px]">Red flags — стоп</p>
            <div className="space-y-[3px]">
              {flags.map((f) => (
                <div key={f.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
                  <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">⚠ {f.t}</p>
                  <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Партнёрство · нужен ли тебе co-founder
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px] tracking-[-0.02em]">
        Партнёр удваивает скорость — <span className="text-[hsl(var(--slide-gold))]">или убивает компанию.</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[22px] max-w-[1600px]">
        65% стартапов убивает не рынок, а конфликт основателей. Разберём, как не попасть в эти 65%.
      </p>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px]">
        <div>
          <p className="text-[16px] uppercase tracking-[0.16em] text-[hsl(var(--slide-gold))] mb-[12px]">Бери партнёра, только если</p>
          <div className="space-y-[8px]">
            {take.map((t) => (
              <div key={t.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[20px] py-[10px]">
                <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[1px]">{t.t}</p>
                <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[16px] uppercase tracking-[0.16em] text-[hsl(var(--slide-gold))] mb-[12px]">Red flags — беги</p>
          <div className="space-y-[8px]">
            {flags.map((f) => (
              <div key={f.t} className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[20px] py-[10px]">
                <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[1px]">⚠ {f.t}</p>
                <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
