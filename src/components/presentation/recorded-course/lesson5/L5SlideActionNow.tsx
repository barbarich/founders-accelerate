import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { time: "0–10", action: "Вспомни момент из шага 1: что тебя бесило до продукта. Дата, место, деталь — одна конкретная сцена, а не абстрактная проблема" },
  { time: "10–25", action: "Напиши по структуре: Хук (1–2 строки) → Сцена с деталью → Инсайт, что ты понял → CTA (1 вопрос). 150–250 слов, не больше" },
  { time: "25–35", action: "Проверь: клиент — герой (не ты), есть конфликт (его боль), есть трансформация до/после. Ни одной сухой фичи" },
  { time: "35–45", action: "Открой Claude/ChatGPT. Промпт: «Вот мой пост-история. Зацепит ли хук? Верю ли я сцене? Где провисает? Перепиши слабые места»" },
  { time: "45–55", action: "Перепиши с учётом фидбека. Заголовок-хук выбери из 5 типов: парадокс / цифра / контр-интуитивно / вопрос / сцена" },
  { time: "55–60", action: "Опубликуй сегодня в LinkedIn / Facebook / Telegram. Не завтра. Building in public начинается с первого поста" },
];

export default function L5SlideActionNow() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[24px] overflow-y-auto">
        <div className="flex items-center gap-[8px] mb-[6px]">
          <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[8px] py-[4px] rounded">60 мин</span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Сделай сейчас</span>
        </div>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Напиши и опубликуй <span className="text-[hsl(var(--slide-gold))]">пост-историю</span>
        </h2>
        <div className="space-y-[8px] mb-[12px]">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[6px] py-[4px] rounded shrink-0 min-w-[36px] text-center">{s.time}</span>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[8px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Результат: 1 опубликованная пост-история сегодня. Не план — действие.
          </p>
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
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1700px]">
        Напиши и опубликуй <span className="text-[hsl(var(--slide-gold))]">пост-историю</span>
      </h2>
      <div className="space-y-[16px] max-w-[1700px] mb-[28px]">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-[18px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[8px] rounded shrink-0 min-w-[100px] text-center">{s.time}</span>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1700px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Результат: <span className="text-[hsl(var(--slide-gold))]">1 опубликованная история сегодня</span>. Не план — действие.
        </p>
      </div>
    </div>
  );
}
