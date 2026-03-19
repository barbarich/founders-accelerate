import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide19OneFeature() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">MVP</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Правило одной фичи
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] p-[12px] mb-[12px]">
          <p className="text-[13px] text-[hsl(var(--slide-text))] font-semibold text-center leading-[1.6]">
            Одна проблема →<br />Одно решение →<br />Один сценарий
          </p>
        </div>
        <div className="space-y-[6px]">
          {[
            { q: "Какую ОДНУ проблему решает?", a: "Не три, не пять. Одну. Самую болезненную." },
            { q: "Какой ОДИН сценарий?", a: "Пользователь пришёл → сделал X → получил результат" },
            { q: "Можно ли убрать ещё что-то?", a: "Если убрал и продукт всё ещё работает — убирай" },
          ].map((item, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <p className="text-[11px] font-semibold text-[hsl(var(--slide-gold))]">{item.q}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">MVP</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px]">Правило одной фичи</h2>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[16px] p-[40px] mb-[40px] max-w-[700px]">
        <p className="text-[32px] text-[hsl(var(--slide-text))] font-semibold text-center leading-[1.6]">
          Одна проблема → Одно решение → Один сценарий
        </p>
      </div>
      <div className="space-y-[16px] max-w-[1000px]">
        {[
          { q: "Какую ОДНУ проблему решает ваш продукт?", a: "Не три, не пять. Одну. Самую болезненную. За которую уже платят." },
          { q: "Какой ОДИН сценарий использования?", a: "Пользователь пришёл → сделал X → получил результат. Точка." },
          { q: "Можно ли убрать ещё что-то?", a: "Если убрал и продукт всё ещё решает проблему — убирай. Это и есть MVP." },
        ].map((item, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[18px]">
            <p className="text-[22px] font-semibold text-[hsl(var(--slide-gold))] mb-[6px]">{item.q}</p>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
