import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { num: "1", action: "Подключи GA4 в Lovable: создай property → скопируй Measurement ID → вставь в Lovable settings" },
  { num: "2", action: "Подключи Mixpanel: SDK script → 4 базовых события: SignUp / Activate / Purchase / Returned-D1" },
  { num: "3", action: "Поставь Microsoft Clarity (бесплатно) — увидишь записи сессий через 24 часа" },
  { num: "4", action: "Открой Claude. Промпт: «Я хочу померить PMF своего продукта [тип]. Какие 9 осей из 9-axis framework я могу померить уже сегодня? Что нужно собрать?»" },
  { num: "5", action: "Создай Mixpanel-funnel из 5 этапов AARRR. Поставь baseline-цифры (что есть сегодня)" },
  { num: "6", action: "Запусти Sean Ellis опрос: 1 вопрос через Tally на свою аудиторию, минимум 30 ответов" },
];

export default function L11SlideActionNow() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Пошаговый план · стек измерений
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Подключи стек + запусти Sean Ellis
        </h2>
        <div className="space-y-[6px] mb-[10px]">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
              <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[2px] border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[7px]">
          <p className="text-[9.5px] text-[hsl(var(--slide-text))] font-semibold">На выходе: дашборд с цифрами + первые ответы Sean Ellis</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Пошаговый план · стек измерений
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1700px]">
        Подключи стек + запусти <span className="text-[hsl(var(--slide-gold))]">Sean Ellis опрос</span>
      </h2>
      <div className="space-y-[14px] max-w-[1500px]">
        {steps.map((s) => (
          <div key={s.num} className="flex items-start gap-[18px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[36px] h-[36px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
      <div className="mt-[28px] bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[28px] py-[16px] max-w-[1500px]">
        <p className="text-[19px] text-[hsl(var(--slide-text))] font-semibold">На выходе: дашборд с baseline-цифрами + первые ответы на Sean Ellis опрос</p>
      </div>
    </div>
  );
}
