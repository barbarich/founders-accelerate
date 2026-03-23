import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Copy, Check } from "lucide-react";

export default function M2Slide11AIPrompts() {
  const prompts = [
    {
      num: "1",
      title: "Найди результат клиента",
      prompt: "Мой продукт: [описание]. Целевая аудитория: [кто]. Какой конкретный, измеримый результат получает клиент? Ответь в формате: «[Кто] получает [результат в цифрах: часы, деньги, штуки] с помощью [продукт], без [от чего избавляется]». Дай 5 вариантов от самого конкретного к абстрактному.",
    },
    {
      num: "2",
      title: "Три формулировки одного результата",
      prompt: "Вот результат моего продукта для клиента: «[результат из промпта 1]». Напиши три формулировки этого результата: 1) Заголовок лендинга (максимум 10 слов, фокус на результате) 2) Холодное сообщение в LinkedIn/Telegram (3-4 предложения: контекст + результат + вопрос) 3) Устный питч на 30 секунд (боль → решение → доказательство).",
    },
    {
      num: "3",
      title: "Проверка на воду и buzzwords",
      prompt: "Оцени моё позиционирование: «[ваше предложение]». Проверь по критериям: 1) Есть ли конкретный измеримый результат? 2) Понятно ли за 5 секунд кому и зачем? 3) Есть ли buzzwords которые можно заменить на конкретику? 4) Перепиши так, чтобы понял 12-летний подросток.",
    },
    {
      num: "4",
      title: "Отстройка через результат",
      prompt: "Мой продукт: [описание]. Конкуренты: [название 1, название 2, название 3]. Какой результат я даю клиенту, которого НЕ дают конкуренты? Сформулируй 3 варианта позиционирования, где отличие — в результате, а не в фичах.",
    },
    {
      num: "5",
      title: "Посчитай ценность результата",
      prompt: "Мой продукт: [описание]. Клиент: [кто]. Результат: [что получает]. Посчитай ценность этого результата для клиента в деньгах. Учти: 1) Сколько времени экономит (часы × ставку) 2) Сколько дополнительного дохода приносит 3) Какую альтернативу заменяет (зарплата сотрудника, другой сервис). Предложи цену = 10-20% от этой ценности.",
    },
  ];

  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string, index: number) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">AI-инструменты</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          5 промптов для работы
        </h2>
        <div className="space-y-[6px]">
          {prompts.map((p, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px] relative">
              <div className="flex items-center justify-between mb-[3px]">
                <div className="flex items-center gap-[6px]">
                  <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] w-[16px] h-[16px] rounded-full flex items-center justify-center shrink-0">{p.num}</span>
                  <span className="text-[11px] font-semibold text-[hsl(var(--slide-text))]">{p.title}</span>
                </div>
                <button
                  onClick={(e) => handleCopy(e, p.prompt, i)}
                  className="flex items-center gap-[3px] text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] hover:bg-[hsl(var(--slide-gold)/0.2)] px-[6px] py-[3px] rounded transition-colors shrink-0"
                >
                  {copied === i ? <Check className="w-[10px] h-[10px]" /> : <Copy className="w-[10px] h-[10px]" />}
                  {copied === i ? "OK" : "Copy"}
                </button>
              </div>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4] font-mono">{p.prompt}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">AI-инструменты</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">5 промптов для работы</h2>
      <div className="space-y-[12px] max-w-[1100px]">
        {prompts.map((p, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] w-[32px] h-[32px] rounded-full flex items-center justify-center shrink-0 font-bold mt-[4px]">{p.num}</span>
            <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[12px]">
              <div className="flex items-center justify-between mb-[4px]">
                <p className="text-[18px] font-semibold text-[hsl(var(--slide-text))]">{p.title}</p>
                <button
                  onClick={(e) => handleCopy(e, p.prompt, i)}
                  className="flex items-center gap-[6px] text-[13px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] hover:bg-[hsl(var(--slide-gold)/0.2)] px-[12px] py-[6px] rounded-[6px] transition-colors shrink-0 cursor-pointer"
                >
                  {copied === i ? <Check className="w-[14px] h-[14px]" /> : <Copy className="w-[14px] h-[14px]" />}
                  {copied === i ? "Скопировано" : "Скопировать"}
                </button>
              </div>
              <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.5] font-mono">{p.prompt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
