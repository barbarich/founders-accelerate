import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide14HowToChoose() {
  const questions = [
    { q: "Как часто используют ваш продукт?", a: "Ежедневно → подписка. Раз в месяц → разовая/usage. Раз в жизни → разовая" },
    { q: "Кто ваш клиент?", a: "B2C массовый → freemium. B2B малый → подписка. B2B крупный → enterprise" },
    { q: "Что делают конкуренты?", a: "Начните с того же — клиенты уже привыкли к этой модели. Отличайтесь продуктом, не моделью" },
    { q: "Можно ли показать ценность бесплатно?", a: "Да → freemium. Нет → trial 7-14 дней. Сложный продукт → демо-звонок" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Монетизация</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Как выбрать модель
        </h2>
        <div className="space-y-[8px]">
          {questions.map((q, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <p className="text-[11px] font-semibold text-[hsl(var(--slide-gold))] mb-[3px]">{q.q}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{q.a}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Монетизация</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">Как выбрать модель</h2>
      <div className="space-y-[20px] max-w-[1100px]">
        {questions.map((q, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[20px]">
            <p className="text-[22px] font-semibold text-[hsl(var(--slide-gold))] mb-[8px]">{q.q}</p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{q.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
