import { useIsMobile } from "@/hooks/use-mobile";
import FOM6Footer from "./FOM6Footer";

export default function FOM6SlideClosing() {
  const isMobile = useIsMobile();
  const lines = [
    "За 6 сессий ты прошёл путь от пустой страницы до запущенного продукта с трафиком и первыми разговорами о деньгах. Большинство не доходит и до середины.",
    "Продажи — не врождённый талант, а воронка из понятных этапов. Ты теперь знаешь каждый: от 50-списка до подписанного пилота и расширения.",
    "Дальше всё решает не ещё одно обучение, а повторение. Открой план на 90 дней и сделай первое касание сегодня — пока интерес тёплый.",
  ];

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative overflow-hidden">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[16px]" />
          <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] text-[10px] font-medium mb-[10px]">
            Финал программы · спасибо
          </p>
          <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px]">
            Продукт построен. <span className="text-[hsl(var(--slide-gold))]">Теперь иди и продай его.</span>
          </h2>
          <div className="space-y-[10px] text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.55]">
            {lines.map((l, i) => (
              <p key={i}>
                <span className="text-[hsl(var(--slide-gold))]">→</span> {l}
              </p>
            ))}
          </div>
          <p className="mt-[18px] text-[10px] text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.18em]">
            Первое касание — сегодня
          </p>
        </div>
        <FOM6Footer slide={26} />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative overflow-hidden">
      <div className="flex flex-col justify-center px-[140px] max-w-[1700px] h-full">
        <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[40px]" />
        <p className="uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] text-[20px] font-medium mb-[28px]">
          Финал программы · спасибо за эти 6 сессий
        </p>
        <h2 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] mb-[36px] max-w-[1500px]">
          Продукт построен. <span className="text-[hsl(var(--slide-gold))]">Теперь иди и продай его.</span>
        </h2>
        <div className="space-y-[14px] text-[24px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] max-w-[1500px]">
          {lines.map((l, i) => (
            <p key={i}>
              <span className="text-[hsl(var(--slide-gold))]">→</span> {l}
            </p>
          ))}
        </div>
        <p className="mt-[44px] text-[18px] text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.2em]">
          Первое касание — сегодня, пока интерес тёплый
        </p>
      </div>
      <FOM6Footer slide={26} />
    </div>
  );
}
