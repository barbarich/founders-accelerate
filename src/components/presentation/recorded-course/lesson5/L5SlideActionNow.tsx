import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { time: "0–10", action: "Открой LinkedIn / Apollo. Выпиши 10 человек из твоего ICP. Имя · компания · роль" },
  { time: "10–20", action: "Для каждого найди триггер за последние 30 дней: пост, найм, раунд, новость, изменение в продукте" },
  { time: "20–35", action: "Напиши первое сообщение по формуле: повод (про них) + ценность (что меняется у них) + CTA (1 строка). 2-3 предложения, не больше" },
  { time: "35–45", action: "Открой Claude/ChatGPT. Промпт: «Я [твоя роль]. Отправляю это сообщение [роль контакта] в [индустрия]. Скажи: открыл бы / удалил бы / ответил бы. Что переписать?»" },
  { time: "45–55", action: "Перепиши с учётом AI-фидбека. Сделай каждое сообщение уникальным (не одинаковый шаблон)" },
  { time: "55–60", action: "Отправь все 10 сегодня. Не завтра. Завтра ты их перечитаешь и удалишь" },
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
          Напиши и отправь <span className="text-[hsl(var(--slide-gold))]">10 outreach-сообщений</span>
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
            Результат: 10 отправленных сообщений сегодня. Не план — действие.
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
        Напиши и отправь <span className="text-[hsl(var(--slide-gold))]">10 outreach-сообщений</span>
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
          Результат: <span className="text-[hsl(var(--slide-gold))]">10 отправленных сообщений сегодня</span>. Не план — действие.
        </p>
      </div>
    </div>
  );
}
