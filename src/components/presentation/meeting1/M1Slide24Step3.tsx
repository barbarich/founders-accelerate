import { useIsMobile } from "@/hooks/use-mobile";

export default function M1Slide24Step3() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <div className="flex items-center gap-[8px] mb-[6px]">
          <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[8px] py-[4px] rounded">10 мин</span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Шаг 3</span>
        </div>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">Позиционирование</h2>

        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[10px] mb-[12px]">
          <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Формула</p>
          <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.6]">
            <span className="text-[hsl(var(--slide-gold))]">[Продукт]</span> помогает <span className="text-[hsl(var(--slide-gold))]">[кому]</span>{" "}
            <span className="text-[hsl(var(--slide-gold))]">[решить проблему]</span> с помощью <span className="text-[hsl(var(--slide-gold))]">[отличие]</span>
          </p>
        </div>

        <div className="space-y-[8px]">
          {[
            { time: "0–3", action: "Заполнить формулу — подставить свой продукт" },
            { time: "3–6", action: "Прочитать вслух — понятно ли за 5 секунд?" },
            { time: "6–8", action: "Группа даёт фидбек → переформулировать" },
            { time: "8–10", action: "Финальная версия — заголовок лендинга" },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[6px] py-[4px] rounded shrink-0 min-w-[32px] text-center">{s.time}</span>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">10 мин</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Делаем вместе — Шаг 3</span>
      </div>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px]">Позиционирование</h2>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[14px] p-[28px] mb-[36px]">
        <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">Формула</p>
        <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.6] font-medium">
          <span className="text-[hsl(var(--slide-gold))]">[Продукт]</span> помогает{" "}
          <span className="text-[hsl(var(--slide-gold))]">[кому]</span>{" "}
          <span className="text-[hsl(var(--slide-gold))]">[решить проблему / достичь результата]</span>{" "}
          с помощью <span className="text-[hsl(var(--slide-gold))]">[ключевое отличие]</span>,{" "}
          в отличие от <span className="text-[hsl(var(--slide-gold))]">[альтернатива]</span>
        </p>
      </div>
      <div className="space-y-[18px] max-w-[1100px]">
        {[
          { time: "0–3 мин", action: "Заполнить формулу позиционирования — подставить свой продукт в каждое поле шаблона" },
          { time: "3–6 мин", action: "Прочитать вслух получившееся предложение — проверить: понятно ли за 5 секунд, для кого и зачем" },
          { time: "6–8 мин", action: "Группа даёт фидбек: «понятно / не понятно / для кого это?» → переформулировать слабые места" },
          { time: "8–10 мин", action: "Финальная версия — одно предложение, которое можно поставить заголовком лендинга" },
        ].map((s, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[8px] rounded shrink-0 min-w-[90px] text-center">{s.time}</span>
            <p className="text-[21px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
