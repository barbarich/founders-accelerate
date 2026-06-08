import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { PITCH_BUILDER_PROMPT } from "./promptTemplates";

export default function M12Slide06PitchPrompt() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try { await navigator.clipboard.writeText(PITCH_BUILDER_PROMPT); }
    catch {
      const ta = document.createElement("textarea"); ta.value = PITCH_BUILDER_PROMPT;
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
    }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  const onClick = (e: React.MouseEvent) => { e.stopPropagation(); copyToClipboard(); };
  const onKey = (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); copyToClipboard(); } };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[16px] py-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          🔥 Промпт встречи №1
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Собери мой питч<br /><span className="text-[hsl(var(--slide-gold))]">за 5 минут</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Вставь в свой AI (Claude / ChatGPT / Gemini). Получишь скрипт по 5 слайдам + строку защищённости + хук. Потом оформи в Canva / Google Slides / PowerPoint — никакой новой платформы.
        </p>
        <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[6px] px-[8px] py-[5px] flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between mb-[3px] pb-[3px] border-b border-[hsl(var(--slide-border)/0.25)]">
            <p className="text-[7.5px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))]">Скопируй · заполни поля · отдай AI</p>
            <div role="button" tabIndex={0} onClick={onClick} onKeyDown={onKey}
              className="shrink-0 flex items-center gap-[3px] text-[8px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] px-[6px] py-[2px] rounded-[3px] cursor-pointer select-none">
              {copied ? <Check size={9} /> : <Copy size={9} />}
              {copied ? "Скопировано" : "Копировать"}
            </div>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto pr-[2px] prompt-scroll">
            <p className="font-mono text-[6.5px] text-[hsl(var(--slide-text))] leading-[1.5] whitespace-pre-wrap">{PITCH_BUILDER_PROMPT}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[100px] py-[50px]">
      <div className="flex items-baseline gap-[20px] mb-[10px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">
          🔥 Промпт встречи №1
        </p>
        <p className="text-[16px] text-[hsl(var(--slide-text-muted))]">
          Claude · ChatGPT/GPT-5 · Gemini 2.5 · Perplexity
        </p>
      </div>
      <h2 className="font-display text-[62px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Собери мой питч <span className="text-[hsl(var(--slide-gold))]">за 5 минут</span>
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[22px] max-w-[1700px] leading-[1.4]">
        Вставь в свой AI → получишь скрипт по 5 слайдам + строку защищённости + хук. Потом оформи в Canva / Google Slides / PowerPoint. Никакой новой платформы учить не надо.
      </p>
      <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[14px] px-[28px] py-[20px] flex-1 min-h-0 flex flex-col max-w-[1700px] w-full">
        <div className="flex items-start justify-between gap-[16px] mb-[12px] pb-[12px] border-b border-[hsl(var(--slide-border)/0.25)]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] leading-[1.3] flex-1">
            Скопируй промпт целиком · заполни [квадратные скобки] · отдай своему AI
          </p>
          <div role="button" tabIndex={0} onClick={onClick} onKeyDown={onKey}
            className="shrink-0 flex items-center gap-[8px] text-[14px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] hover:bg-[hsl(var(--slide-gold)/0.25)] px-[16px] py-[8px] rounded-[8px] transition-colors cursor-pointer select-none">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Скопировано" : "Копировать промпт"}
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto pr-[10px] prompt-scroll">
          <p className="font-mono text-[13px] text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{PITCH_BUILDER_PROMPT}</p>
        </div>
      </div>
    </div>
  );
}
