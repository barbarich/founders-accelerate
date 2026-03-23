import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide07WhyMatters() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">Главный инсайт</p>
        <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Клиентам плевать<br />на ваш продукт
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
          Никто не покупает фичи, технологии или красивый UI. Люди покупают результат: сэкономленное время, заработанные деньги, снятую боль.
        </p>
        <div className="space-y-[6px] mb-[12px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] px-[12px] py-[8px]">
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))]">🔩 Никто не покупает дрель</p>
            <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold">Покупают дырку в стене</p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] px-[12px] py-[8px]">
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))]">📊 Никто не покупает CRM</p>
            <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold">Покупают «ни один лид не потерялся»</p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] px-[12px] py-[8px]">
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))]">📚 Никто не покупает онлайн-курс</p>
            <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold">Покупают новую работу с зарплатой ×2</p>
          </div>
        </div>
        <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold)/0.4)] mb-[10px]" />
        <p className="text-[12px] text-[hsl(var(--slide-gold))] font-medium leading-[1.5]">
          Сегодня всё через эту линзу: позиционирование = обещание результата, цена = стоимость результата, MVP = минимум для доставки результата
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">Главный инсайт</p>
      <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
        Клиентам плевать<br />на ваш продукт
      </h2>
      <p className="text-[26px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[40px] max-w-[900px]">
        Никто не покупает фичи, технологии или красивый UI. Люди покупают <span className="text-[hsl(var(--slide-gold))] font-semibold">результат</span>: сэкономленное время, заработанные деньги, снятую боль.
      </p>
      <div className="flex gap-[24px] max-w-[1100px] mb-[36px]">
        {[
          { icon: "🔩", no: "Никто не покупает дрель", yes: "Покупают дырку в стене" },
          { icon: "📊", no: "Никто не покупает CRM", yes: "Покупают «ни один лид не потерялся»" },
          { icon: "📚", no: "Никто не покупает онлайн-курс", yes: "Покупают новую работу с зарплатой ×2" },
        ].map((e, i) => (
          <div key={i} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] p-[24px]">
            <p className="text-[36px] mb-[12px]">{e.icon}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[8px] line-through">{e.no}</p>
            <p className="text-[22px] font-semibold text-[hsl(var(--slide-text))]">{e.yes}</p>
          </div>
        ))}
      </div>
      <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold)/0.4)] mb-[20px]" />
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-medium max-w-[1000px] leading-[1.5]">
        Сегодня всё через эту линзу: позиционирование = обещание результата, цена = стоимость результата, MVP = минимум для доставки результата
      </p>
    </div>
  );
}
