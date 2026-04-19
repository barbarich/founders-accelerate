import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export interface PersonCardProps {
  order: number;
  name: string;
  product: string;
  state: string;
  task: string;
  taskDetail: string;
  promptTitle: string;
  promptBody: string;
  criterion: string;
}

export default function M6PersonCard(p: PersonCardProps) {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(p.promptBody);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = p.promptBody;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onCopyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    copyToClipboard();
  };

  const onCopyKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      copyToClipboard();
    }
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[16px] py-[18px]">
        <div className="flex items-center gap-[6px] mb-[4px]">
          <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[16px] h-[16px] flex items-center justify-center rounded-full font-bold">{p.order}</span>
          <p className="text-[8px] uppercase tracking-[0.2em] text-[hsl(var(--slide-text-muted))]">Персональная задача</p>
        </div>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">{p.name}</h2>
        <p className="text-[11px] text-[hsl(var(--slide-gold))] mt-[1px] mb-[2px]">{p.product}</p>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[8px]">{p.state}</p>

        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px] mb-[5px]">
          <p className="text-[8px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[1px]">Задача на вечер</p>
          <p className="text-[10.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[2px]">{p.task}</p>
          <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{p.taskDetail}</p>
        </div>

        <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[6px] mb-[5px] flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between mb-[3px] gap-[6px]">
            <p className="text-[8px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] leading-[1.2] flex-1">{p.promptTitle}</p>
            <div
              role="button"
              tabIndex={0}
              onClick={onCopyClick}
              onKeyDown={onCopyKey}
              className="shrink-0 flex items-center gap-[3px] text-[8px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] hover:bg-[hsl(var(--slide-gold)/0.25)] px-[6px] py-[3px] rounded-[4px] transition-colors cursor-pointer select-none"
              aria-label="Скопировать промпт"
            >
              {copied ? <Check size={9} /> : <Copy size={9} />}
              {copied ? "Скопировано" : "Копировать"}
            </div>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto pr-[4px] prompt-scroll">
            <p className="font-mono text-[7.5px] text-[hsl(var(--slide-text))] leading-[1.45] whitespace-pre-wrap">{p.promptBody}</p>
          </div>
        </div>

        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[5px]">
          <p className="text-[8px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[1px]">Сделано к концу встречи</p>
          <p className="text-[9.5px] text-[hsl(var(--slide-text))] leading-[1.4]">{p.criterion}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[90px] py-[60px]">
      <div className="flex items-center gap-[14px] mb-[10px]">
        <span className="font-mono text-[22px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[42px] h-[42px] flex items-center justify-center rounded-full font-bold">{p.order}</span>
        <p className="text-[15px] uppercase tracking-[0.2em] text-[hsl(var(--slide-text-muted))]">Персональная задача</p>
      </div>

      <div className="grid grid-cols-[0.85fr_1.15fr] gap-[36px] max-w-[1700px] items-stretch flex-1 min-h-0">
        <div className="flex flex-col">
          <h2 className="font-display text-[78px] font-bold text-[hsl(var(--slide-text))] leading-[0.95] tracking-[-0.02em]">{p.name}</h2>
          <p className="text-[28px] text-[hsl(var(--slide-gold))] mt-[10px] leading-[1.1]">{p.product}</p>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mt-[12px] leading-[1.45] max-w-[560px]">{p.state}</p>

          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[18px] mt-[22px]">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[6px]">Задача на вечер</p>
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[8px]">{p.task}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{p.taskDetail}</p>
          </div>
        </div>

        <div className="flex flex-col min-h-0">
          <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[12px] px-[22px] py-[18px] flex-1 min-h-0 flex flex-col">
            <div className="flex items-start justify-between gap-[16px] mb-[10px] pb-[10px] border-b border-[hsl(var(--slide-border)/0.25)]">
              <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] leading-[1.3] flex-1">{p.promptTitle}</p>
              <div
                role="button"
                tabIndex={0}
                onClick={onCopyClick}
                onKeyDown={onCopyKey}
                className="shrink-0 flex items-center gap-[6px] text-[13px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] hover:bg-[hsl(var(--slide-gold)/0.25)] px-[12px] py-[6px] rounded-[6px] transition-colors cursor-pointer select-none"
                aria-label="Скопировать промпт"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Скопировано" : "Копировать"}
              </div>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto pr-[8px] prompt-scroll">
              <p className="font-mono text-[13.5px] text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{p.promptBody}</p>
            </div>
          </div>

          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[3px] border-[hsl(var(--slide-gold))] px-[22px] py-[14px] mt-[14px]">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[4px]">Сделано к концу встречи</p>
            <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.4]">{p.criterion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
