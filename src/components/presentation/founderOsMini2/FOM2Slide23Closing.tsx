import { useIsMobile } from "@/hooks/use-mobile";
import FOM2Footer from "./FOM2Footer";

export default function FOM2Slide23Closing() {
  const isMobile = useIsMobile();

  const lines = [
    "Цена — это уважение к собственной работе. Если стыдно назвать — продукт ещё не доделан или вы себя не оценили.",
    "MVP — это обещание клиенту, что результат он получит за минимум шагов. Всё остальное украшает обещание, не выполняет его.",
    "Через 5 дней на С3 — строим. Не обсуждаем — строим. Приходите с MUST HAVE-списком и ценой.",
  ];

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative overflow-hidden">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[16px]" />
          <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] text-[10px] font-medium mb-[10px]">
            До встречи через 5 дней
          </p>
          <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px]">
            Скоуп и цена — это <span className="text-[hsl(var(--slide-gold))]">первое обещание</span> клиенту.
          </h2>
          <div className="space-y-[10px] text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.55]">
            {lines.map((l, i) => (
              <p key={i}>
                <span className="text-[hsl(var(--slide-gold))]">→</span> {l}
              </p>
            ))}
          </div>
          <p className="mt-[18px] text-[10px] text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.18em]">
            С3 · Build & Land · Lovable + Claude Code + Supabase
          </p>
        </div>
        <FOM2Footer slide={23} />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative overflow-hidden">
      <div className="flex flex-col justify-center px-[140px] max-w-[1700px] h-full">
        <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[40px]" />
        <p className="uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] text-[20px] font-medium mb-[28px]">
          До встречи через 5 дней
        </p>
        <h2 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] mb-[36px] max-w-[1500px]">
          Скоуп и цена — это <span className="text-[hsl(var(--slide-gold))]">первое обещание</span> клиенту.
        </h2>
        <div className="space-y-[14px] text-[24px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] max-w-[1500px]">
          {lines.map((l, i) => (
            <p key={i}>
              <span className="text-[hsl(var(--slide-gold))]">→</span> {l}
            </p>
          ))}
        </div>
        <p className="mt-[44px] text-[18px] text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.2em]">
          С3 · Build & Land · Lovable + Claude Code + Supabase
        </p>
      </div>
      <FOM2Footer slide={23} />
    </div>
  );
}
