import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "01", t: "Свой Facebook", d: "Писал посты сам. Пошёл первый трафик - но меня никто не знал, продаж не было." },
  { n: "02", t: "Голоса, которым доверяют", d: "Попросил знакомых с большой аудиторией написать обо мне и продукте. Пошли первые продажи." },
  { n: "03", t: "Серия рекомендаций", d: "Не один пост, а серия от разных доверенных людей - продажи стали регулярными." },
  { n: "04", t: "Эксперименты в сообществах", d: "Размещал посты в группах, платно и бесплатно. Тестировал, что заходит, - покупали." },
  { n: "05", t: "Таргет + офферы на ретаргете", d: "Подключил Meta. Реклама + спецпредложения и скидки в ретаргетинге = стабильные продажи." },
];

export default function L10SlidePeraPath() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Кейс PERA · как я нашёл свой путь
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Свой путь продвижения <span className="text-[hsl(var(--slide-gold))]">не угадывают - находят.</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[7px]">
          Я не знал заранее, что сработает. Тестировал по шагам, пока не пошли продажи:
        </p>
        <div className="space-y-[4px] mb-[7px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[9px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]"><span className="text-[hsl(var(--slide-gold))]">{s.n}</span> {s.t}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[5px]">
          <p className="text-[8.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Твой ход: начни бесплатно, заметь, что реально дало продажи (у меня - чужие доверенные голоса), удвой это, потом добавь платный трафик и офферы.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[32px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Кейс PERA · как я нашёл свой путь продвижения
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.02em]">
        Свой путь продвижения <span className="text-[hsl(var(--slide-gold))]">не угадывают - находят.</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[18px] max-w-[1650px]">
        Я не знал заранее, что сработает. Тестировал по шагам, пока не пошли продажи:
      </p>
      <div className="space-y-[9px] max-w-[1720px] mb-[16px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[26px] py-[11px] flex items-center gap-[22px]">
            <span className="font-display text-[26px] font-bold text-[hsl(var(--slide-gold))] leading-none w-[44px] shrink-0">{s.n}</span>
            <span className="text-[21px] font-bold text-[hsl(var(--slide-text))] w-[360px] shrink-0">{s.t}</span>
            <span className="text-[17px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4] flex-1">{s.d}</span>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[14px] max-w-[1720px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Твой ход: начни бесплатно, заметь, что реально дало продажи (у меня - чужие доверенные голоса), удвой это, потом добавь платный трафик и офферы.
        </p>
      </div>
    </div>
  );
}
