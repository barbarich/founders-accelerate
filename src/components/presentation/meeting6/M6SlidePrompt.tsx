import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { UNIVERSAL_PRODUCT_PROMPT } from "./promptTemplates";

export default function M6SlidePrompt() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(UNIVERSAL_PRODUCT_PROMPT);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = UNIVERSAL_PRODUCT_PROMPT;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    copyToClipboard();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      copyToClipboard();
    }
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[18px] py-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Промпт для AI
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Production-ready продукт<br />за один вечер
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Универсальный промпт. Заполни поля 1–12 своим контекстом. Отдай в Lovable / Claude Code / v0.
        </p>

        <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[8px] px-[10px] py-[8px] flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between mb-[5px] pb-[5px] border-b border-[hsl(var(--slide-border)/0.25)] gap-[6px]">
            <p className="text-[8px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] flex-1">
              Скопируй и заполни
            </p>
            <div
              role="button"
              tabIndex={0}
              onClick={onClick}
              onKeyDown={onKey}
              className="shrink-0 flex items-center gap-[3px] text-[9px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] hover:bg-[hsl(var(--slide-gold)/0.25)] px-[8px] py-[4px] rounded-[4px] transition-colors cursor-pointer select-none"
              aria-label="Скопировать промпт"
            >
              {copied ? <Check size={10} /> : <Copy size={10} />}
              {copied ? "Скопировано" : "Копировать"}
            </div>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto pr-[4px] prompt-scroll">
            <p className="font-mono text-[7.5px] text-[hsl(var(--slide-text))] leading-[1.5] whitespace-pre-wrap">
              {UNIVERSAL_PRODUCT_PROMPT}
            </p>
          </div>
        </div>

        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mt-[6px] text-center leading-[1.3]">
          Эталон качества: Linear · Notion · Superhuman
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[100px] py-[60px]">
      <div className="flex items-baseline gap-[18px] mb-[10px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">
          Промпт для AI
        </p>
        <p className="text-[16px] text-[hsl(var(--slide-text-muted))]">
          Эталон качества: Linear · Notion · Superhuman
        </p>
      </div>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Production-ready продукт за один вечер
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1500px] leading-[1.4]">
        Универсальный промпт. Заполни поля 1–12 своим контекстом, отдай в Lovable / Claude Code / v0. Любой продукт — рабочий за вечер.
      </p>

      <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[14px] px-[28px] py-[20px] flex-1 min-h-0 flex flex-col max-w-[1700px] w-full">
        <div className="flex items-start justify-between gap-[16px] mb-[12px] pb-[12px] border-b border-[hsl(var(--slide-border)/0.25)]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] leading-[1.3] flex-1">
            Скопируй промпт целиком · заполни [квадратные скобки] · отдай AI
          </p>
          <div
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={onKey}
            className="shrink-0 flex items-center gap-[8px] text-[14px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] hover:bg-[hsl(var(--slide-gold)/0.25)] px-[16px] py-[8px] rounded-[8px] transition-colors cursor-pointer select-none"
            aria-label="Скопировать промпт"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Скопировано" : "Копировать промпт"}
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto pr-[10px] prompt-scroll">
          <p className="font-mono text-[14px] text-[hsl(var(--slide-text))] leading-[1.65] whitespace-pre-wrap">
            {UNIVERSAL_PRODUCT_PROMPT}
          </p>
        </div>
      </div>
    </div>
  );
}
