import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { time: "0–5", action: "Подключи GA4 в Lovable: создаёшь property → копируешь Measurement ID → вставляешь в lovable settings" },
  { time: "5–15", action: "Подключи Mixpanel: SDK script → 4 базовых события: SignUp / Activate / Purchase / Returned-D1" },
  { time: "15–20", action: "Поставь Microsoft Clarity (бесплатно) — увидишь записи сессий через 24 часа" },
  { time: "20–30", action: "Открой Claude/ChatGPT. Промпт: «Я хочу померить PMF своего продукта [тип]. Какие 9 осей из 9-axis framework я могу померить уже сегодня? Что нужно собрать?»" },
  { time: "30–40", action: "Создай Mixpanel-funnel из 5 этапов AARRR. Поставь baseline-цифры (что есть сегодня)" },
  { time: "40–60", action: "Запусти Sean Ellis опрос: 1 вопрос через Tally на твою аудиторию (минимум 30 ответов)" },
];

export default function L11SlideActionNow() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <div className="flex items-center gap-[8px] mb-[6px]">
          <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[8px] py-[4px] rounded">60 мин</span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Сделай сейчас</span>
        </div>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Подключи стек измерений + запусти Sean Ellis
        </h2>
        <div className="space-y-[6px]">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[6px] py-[4px] rounded shrink-0 min-w-[36px] text-center">{s.time}</span>
              <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">60 мин</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Сделай сейчас</span>
      </div>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1700px]">
        Подключи стек измерений + запусти Sean Ellis опрос
      </h2>
      <div className="space-y-[14px] max-w-[1700px]">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-[18px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[8px] rounded shrink-0 min-w-[100px] text-center">{s.time}</span>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
