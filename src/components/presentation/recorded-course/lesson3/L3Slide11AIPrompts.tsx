import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Copy, Check } from "lucide-react";

const UNIVERSAL_PROMPT = `Ты - эксперт по позиционированию продуктов. Помоги мне сформулировать простое и понятное позиционирование, которое продаёт.

Мой продукт: [ВСТАВЬ: что это и что делает]
Кто платит: [ВСТАВЬ: для кого продукт, кто принимает решение]
Главная боль клиента: [ВСТАВЬ: от чего человек страдает сейчас]

Если данных мало для точного ответа - сначала задай мне 2-3 уточняющих вопроса и только потом отвечай.

Сформулируй позиционирование в 3 блоках:
1. Суть в одном предложении по формуле «[Кто] получает [конкретный результат] с помощью [продукт], без [боль]». Дай 3 варианта - без buzzwords и воды, чтобы понял 12-летний.
2. Заголовок для лендинга: до 8 слов, фокус на результате клиента, а не на фичах.
3. Питч на 30 секунд: боль -> решение -> почему мне верить.

Правила: не выдумывай цифры, где их нет - ставь [уточнить]. В конце выбери самый сильный вариант и объясни, почему именно он продаёт.`;

const HINTS = [
  "Заполни 3 поля [ВСТАВЬ: …] своими данными",
  "Вставь в Claude или ChatGPT",
  "Если AI задаёт вопросы - отвечай, позиционирование станет точнее",
];

export default function L3Slide11AIPrompts() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(UNIVERSAL_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">AI-инструмент</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Один промпт - готовое позиционирование
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[10px]">
          Вставь данные о продукте - получи формулировку, которая продаёт.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] px-[12px] py-[10px] relative">
          <button
            onClick={handleCopy}
            className="absolute top-[8px] right-[8px] flex items-center gap-[3px] text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] hover:bg-[hsl(var(--slide-gold)/0.2)] px-[6px] py-[3px] rounded transition-colors"
          >
            {copied ? <Check className="w-[10px] h-[10px]" /> : <Copy className="w-[10px] h-[10px]" />}
            {copied ? "OK" : "Copy"}
          </button>
          <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] font-mono whitespace-pre-line max-h-[330px] overflow-y-auto pr-[40px]">
            {UNIVERSAL_PROMPT}
          </p>
        </div>
        <div className="flex flex-wrap gap-[6px] mt-[8px]">
          {HINTS.map((h, i) => (
            <span key={i} className="text-[8px] text-[hsl(var(--slide-text)/0.7)] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-full px-[8px] py-[3px]">
              {i + 1}. {h}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">AI-инструмент</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
        Один промпт - готовое позиционирование
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[28px] max-w-[1200px]">
        Не нужно держать в голове пять промптов. Вставь данные о продукте - и получи формулировку, заголовок и питч, которые продают.
      </p>
      <div className="grid grid-cols-[1fr_auto] gap-[28px] items-start max-w-[1640px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[16px] px-[32px] py-[24px] relative">
          <button
            onClick={handleCopy}
            className="absolute top-[18px] right-[18px] flex items-center gap-[6px] text-[14px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] hover:bg-[hsl(var(--slide-gold)/0.2)] px-[14px] py-[8px] rounded-[8px] transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-[15px] h-[15px]" /> : <Copy className="w-[15px] h-[15px]" />}
            {copied ? "Скопировано" : "Скопировать"}
          </button>
          <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.6] font-mono whitespace-pre-line pr-[150px]">
            {UNIVERSAL_PROMPT}
          </p>
        </div>
        <div className="w-[360px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[16px] px-[28px] py-[24px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-semibold mb-[16px]">Как использовать</p>
          <div className="space-y-[14px]">
            {HINTS.map((h, i) => (
              <div key={i} className="flex items-start gap-[12px]">
                <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0 font-bold">{i + 1}</span>
                <p className="text-[17px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
