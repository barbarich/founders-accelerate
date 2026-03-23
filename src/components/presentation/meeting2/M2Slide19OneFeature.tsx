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
            { q: "Какой ОДИН результат получает клиент?", a: "Не три, не пять. Один. Тот, за который готовы платить." },
            { q: "Какой ОДИН сценарий ведёт к результату?", a: "Пользователь пришёл → сделал X → получил результат. Точка." },
            { q: "Хочется добавить фичу?", a: "Без неё клиент получит результат? Если да — не строй" },
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
          Одна проблема → Одно решение → Один результат
        </p>
      </div>
      <div className="space-y-[16px] max-w-[1000px]">
        {[
          { q: "Какой ОДИН результат получает клиент?", a: "Не три, не пять. Один. Тот, за который уже готовы платить." },
          { q: "Какой ОДИН сценарий ведёт к результату?", a: "Пользователь пришёл → сделал X → получил результат. Точка." },
          { q: "Хочется добавить фичу?", a: "Без неё клиент получит результат? Если да — не строй. Это и есть MVP." },
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
