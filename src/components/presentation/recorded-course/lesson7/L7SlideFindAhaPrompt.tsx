import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

const prompt = `Я строю продукт: [опиши продукт в 2-3 предложениях].

Мой ICP: [кто клиент: роль · контекст · боль].

Помоги найти Aha-moment для этого продукта.

Сделай 3 вещи:

1. Сформулируй 3 возможных Aha-moment для моего ICP — каждый в формате прямой цитаты от пользователя: «О, [внутренний инсайт]».

2. Для каждого Aha — определи тип (cognitive / emotional / social / financial) и оцени силу (1-10) для моего ICP.

3. Выбери самый сильный Aha и опиши конкретный шаг в продукте, на котором он должен происходить. Этот шаг должен быть достижим за <60 секунд от первого открытия. Опиши экран, действие пользователя, и что он видит на выходе.

Если для моего ICP естественного Aha за 60 секунд не существует — скажи прямо. Не выдумывай.`;

export default function L7SlideFindAhaPrompt() {
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();

  const copy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Универсальный промпт · Aha-detector
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Скопируй в Claude/ChatGPT — получишь свой Aha
        </h2>
        <div className="relative">
          <button onClick={copy} className="absolute top-[6px] right-[6px] z-10 bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] px-[8px] py-[4px] rounded-[4px] flex items-center gap-[4px] text-[10px] font-medium">
            {copied ? <><Check size={10} /> Готово</> : <><Copy size={10} /> Копировать</>}
          </button>
          <pre className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] p-[10px] pr-[80px] text-[9px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] whitespace-pre-wrap font-mono max-h-[420px] overflow-y-auto">{prompt}</pre>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Универсальный промпт · Aha-detector
      </p>
      <h2 className="font-display text-[40px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.01em]">
        Скопируй в Claude/ChatGPT — получишь <span className="text-[hsl(var(--slide-gold))]">свой Aha</span>
      </h2>
      <div className="relative max-w-[1800px]">
        <button onClick={copy} className="absolute top-[14px] right-[14px] z-10 bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] px-[16px] py-[8px] rounded-[6px] flex items-center gap-[6px] text-[14px] font-semibold hover:opacity-90 transition-opacity">
          {copied ? <><Check size={14} /> Скопировано</> : <><Copy size={14} /> Копировать</>}
        </button>
        <pre className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] p-[28px] pr-[170px] text-[15px] text-[hsl(var(--slide-text)/0.9)] leading-[1.65] whitespace-pre-wrap font-mono max-h-[560px] overflow-y-auto">{prompt}</pre>
      </div>
    </div>
  );
}
