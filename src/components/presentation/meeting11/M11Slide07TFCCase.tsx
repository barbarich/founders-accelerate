import { useIsMobile } from "@/hooks/use-mobile";

const breakdown = [
  { label: "Канал", value: "LinkedIn · один пост от первого лица" },
  { label: "Длина", value: "~250 слов · 1 личная история · 1 CTA" },
  { label: "CTA", value: "Один — «забронируй слот в The Founders Circle» (не «лайк», не «коммент»)" },
  { label: "Распределение", value: "0 ads · 0 paid promo · только органика" },
  { label: "Цикл от поста до регистрации", value: "~36 часов в среднем" },
];

const why = [
  "Личная история, не пресс-релиз. Конкретный момент, не «мы рады объявить».",
  "Один CTA. Не «лайк + share + регистрация». Одно действие.",
  "Спецификс. Имя продукта, дата, формат — никаких «скоро запустим».",
  "Founder voice. От «я» — не «команда рада сообщить». Доверие × 10.",
];

export default function M11Slide07TFCCase() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Кейс · The Founders Circle
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          1 пост → <span className="text-[hsl(var(--slide-gold))]">170 регистраций</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Без бюджета на рекламу. Без блога с 50k подписчиков. Личная история фаундера + один пост + правильный CTA.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[8px] py-[5px] mb-[5px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">Анатомия</p>
          {breakdown.map((b) => (
            <p key={b.label} className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
              <span className="text-[hsl(var(--slide-text))] font-semibold">{b.label}:</span> {b.value}
            </p>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[8px] py-[5px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">Почему сработало</p>
          {why.map((w, i) => (
            <p key={i} className="text-[7.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">· {w}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Кейс · The Founders Circle
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[16px] tracking-[-0.02em]">
        1 пост → <span className="text-[hsl(var(--slide-gold))]">170 регистраций</span>
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[28px] max-w-[1600px] leading-[1.45]">
        Без бюджета на рекламу. Без блога с 50k подписчиков. Личная история фаундера + один пост + правильный CTA = pipeline на квартал вперёд.
      </p>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[20px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[12px]">Анатомия поста</p>
          {breakdown.map((b) => (
            <p key={b.label} className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[5px]">
              <span className="text-[hsl(var(--slide-text))] font-semibold">{b.label}:</span> {b.value}
            </p>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[28px] py-[20px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[12px]">Почему сработало</p>
          {why.map((w, i) => (
            <p key={i} className="text-[17px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[5px]">· {w}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
