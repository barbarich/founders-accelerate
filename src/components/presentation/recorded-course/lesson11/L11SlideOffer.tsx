import { useIsMobile } from "@/hooks/use-mobile";

const parts = [
  { name: "Что входит", q: "не «доступ», а конкретный список", body: "Разложи ценность стопкой: сам продукт + что идёт бонусом. Forex Tester: софт + 25 лет истории по 18 инструментам бесплатно." },
  { name: "Почему сейчас", q: "причина не откладывать", body: "Акция, дедлайн, бонус за раннюю покупку. Без этого человек говорит «подумаю» - и не возвращается." },
  { name: "Что снимает риск", q: "убирает страх покупки", body: "Гарантия возврата, бесплатный вход или lifetime вместо подписки-ловушки. Forex Tester продаёт lifetime - платишь раз, а не боишься списаний." },
];

export default function L11SlideOffer() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Твой оффер, а не просто продукт
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Продаёт не продукт. Продаёт <span className="text-[hsl(var(--slide-gold))]">оффер.</span>
        </h2>
        <div className="space-y-[4px] mb-[6px]">
          {parts.map((p) => (
            <div key={p.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[9px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))]">{p.name} <span className="text-[hsl(var(--slide-text-muted))] font-normal">· {p.q}</span></p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[9px] py-[5px]">
          <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]"><span className="text-[hsl(0_55%_65%)]">✗</span> «Зарегистрируйся»</p>
          <p className="text-[8px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]"><span className="text-[hsl(142_45%_58%)]">✓</span> «Забери lifetime-доступ со скидкой + 25 лет данных бесплатно»</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Твой оффер, а не просто продукт
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.02em]">
        Продаёт не продукт. Продаёт <span className="text-[hsl(var(--slide-gold))]">оффер.</span>
      </h2>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1700px] mb-[22px]">
        {parts.map((p) => (
          <div key={p.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[18px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] leading-[1.15] mb-[2px]">{p.name}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] mb-[10px]">{p.q}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{p.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[32px] py-[16px] max-w-[1700px]">
        <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[3px]"><span className="text-[hsl(0_55%_65%)] font-bold">✗</span> «Зарегистрируйся» / «Попробуй»</p>
        <p className="text-[19px] text-[hsl(var(--slide-text)/0.95)] leading-[1.5]"><span className="text-[hsl(142_45%_58%)] font-bold">✓</span> «Забери lifetime-доступ со скидкой 40% + 25 лет данных бесплатно, только до пятницы»</p>
      </div>
    </div>
  );
}
