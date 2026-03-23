import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide18MVPMyths() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">MVP</p>
        <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          MVP — это не убогая версия продукта
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
          MVP — это самый маленький продукт, который доказывает что люди готовы платить. Не прототип. Не демо. Рабочее решение одной проблемы.
        </p>
        <div className="space-y-[6px] mb-[12px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] p-[10px]">
            <p className="text-[10px] font-semibold text-[hsl(var(--slide-gold))] mb-[2px]">Dropbox</p>
            <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">MVP = 3-минутное видео. 70,000 подписок за ночь</p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] p-[10px]">
            <p className="text-[10px] font-semibold text-[hsl(var(--slide-gold))] mb-[2px]">Zappos</p>
            <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">MVP = фото обуви из магазина. Заказы — покупал и отправлял сам</p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] p-[10px]">
            <p className="text-[10px] font-semibold text-[hsl(var(--slide-gold))] mb-[2px]">Buffer</p>
            <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">MVP = лендинг с ценами. Кнопка «купить» → «мы ещё не готовы, оставьте email»</p>
          </div>
        </div>
        <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold)/0.4)] mb-[10px]" />
        <p className="text-[12px] text-[hsl(var(--slide-gold))] font-medium">
          MVP = минимум, чтобы доставить один результат одному клиенту
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">MVP</p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
        MVP — это не убогая<br />версия продукта
      </h2>
      <p className="text-[26px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[40px] max-w-[900px]">
        MVP — это самый маленький продукт, который доказывает что люди готовы платить. Не прототип. Не демо. Рабочее решение одной проблемы.
      </p>
      <div className="flex gap-[24px] max-w-[1100px] mb-[36px]">
        {[
          { name: "Dropbox", mvp: "3-минутное видео", result: "70,000 подписок за ночь" },
          { name: "Zappos", mvp: "Фото обуви из магазина", result: "Заказы — покупал и отправлял сам" },
          { name: "Buffer", mvp: "Лендинг с ценами", result: 'Кнопка "купить" → "оставьте email"' },
        ].map((c, i) => (
          <div key={i} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] p-[24px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] mb-[10px]">{c.name}</p>
            <p className="text-[18px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">MVP: {c.mvp}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{c.result}</p>
          </div>
        ))}
      </div>
      <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold)/0.4)] mb-[20px]" />
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-medium">
        MVP = минимум, чтобы доставить один результат одному клиенту
      </p>
    </div>
  );
}
