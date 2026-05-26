import { useIsMobile } from "@/hooks/use-mobile";
import FOM3Footer from "./FOM3Footer";

export default function FOM3Slide22Closing() {
  const isMobile = useIsMobile();

  const lines = [
    "Лендинг и MVP — это первое физическое доказательство, что вы вообще можете доставить обещание из С1. Без этого всё дальше — разговоры.",
    "Скорость билда в 2026-м не даёт преимущества сама по себе — её даёт качество ТЗ. Возвращайтесь к MUST HAVE из С2 каждый раз, когда AI начинает уезжать в сторону.",
    "Через 7 дней на С4 — смотрим, что чувствует человек в первые 60 секунд. Приходите с live лендингом и работающим MVP. Без этого блок Onboarding не работает.",
  ];

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative overflow-hidden">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[16px]" />
          <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] text-[10px] font-medium mb-[10px]">
            До встречи через 7 дней
          </p>
          <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px]">
            Build & Land — <span className="text-[hsl(var(--slide-gold))]">первое доказательство</span>, что обещание выполнимо.
          </h2>
          <div className="space-y-[10px] text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.55]">
            {lines.map((l, i) => (
              <p key={i}>
                <span className="text-[hsl(var(--slide-gold))]">→</span> {l}
              </p>
            ))}
          </div>
          <p className="mt-[18px] text-[10px] text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.18em]">
            С4 · Onboarding & Aha · первые 60 секунд продукта
          </p>
        </div>
        <FOM3Footer slide={22} />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative overflow-hidden">
      <div className="flex flex-col justify-center px-[140px] max-w-[1700px] h-full">
        <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[40px]" />
        <p className="uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] text-[20px] font-medium mb-[28px]">
          До встречи через 7 дней
        </p>
        <h2 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] mb-[36px] max-w-[1500px]">
          Build & Land — <span className="text-[hsl(var(--slide-gold))]">первое доказательство</span>, что обещание выполнимо.
        </h2>
        <div className="space-y-[14px] text-[24px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] max-w-[1500px]">
          {lines.map((l, i) => (
            <p key={i}>
              <span className="text-[hsl(var(--slide-gold))]">→</span> {l}
            </p>
          ))}
        </div>
        <p className="mt-[44px] text-[18px] text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.2em]">
          С4 · Onboarding & Aha · первые 60 секунд продукта
        </p>
      </div>
      <FOM3Footer slide={22} />
    </div>
  );
}
