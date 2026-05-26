import { useIsMobile } from "@/hooks/use-mobile";

const insights = [
  {
    n: "1",
    t: "Уходят молча — возвращаются на вопрос",
    d: "Не «мы скучаем» и не «-30%». Один личный вопрос: «Что не сработало?». Открываемость в 3–4× выше любой акции.",
  },
  {
    n: "2",
    t: "Скидка убивает LTV",
    d: "Вернувшийся за -50% уйдёт через неделю и будет ждать следующую акцию. Возвращай ценностью, а не ценой — иначе приучаешь пользователя ждать.",
  },
  {
    n: "3",
    t: "Окно реактивации — 14–30 дней",
    d: "После 60 дней молчания шанс возврата падает в 5×. Триггерь не «когда вспомнил», а ровно на 14-й день тишины — автоматом.",
  },
  {
    n: "4",
    t: "Сегмент важнее текста",
    d: "Письмо «всем ушедшим» = спам. Один точный удар по сегменту «зарегистрировался → не дошёл до ключевого действия» даёт конверсию 12–18%. У сегмента «был активен → пропал» — другой текст и другое предложение.",
  },
  {
    n: "5",
    t: "Возвращай в одно действие",
    d: "Не «зайди в продукт». А «допиши тот черновик», «забери свой отчёт», «твоя команда ждёт ответа». Конкретный незакрытый цикл — главный крючок.",
  },
  {
    n: "6",
    t: "От имени человека, не бренда",
    d: "From: Михаил, а не From: Team Product. Без логотипа, без HTML-вёрстки. Plain text от основателя даёт +40% к ответам. Дёшево и работает.",
  },
];

export default function L9Slide22ReactivationInsights() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Реактивация · 6 инсайтов
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Как вернуть ушедших — без скидок и спама.
        </h2>
        <div className="space-y-[6px]">
          {insights.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <div className="flex items-baseline gap-[8px] mb-[2px]">
                <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))]">{s.n}</span>
                <span className="text-[11px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.t}</span>
              </div>
              <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[60px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Реактивация · 6 главных инсайтов
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[36px] tracking-[-0.02em]">
        Как вернуть ушедших — без скидок и спама.
      </h2>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1600px]">
        {insights.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[24px] py-[22px]">
            <div className="flex items-baseline gap-[12px] mb-[10px]">
              <span className="font-display text-[40px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.t}</span>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
