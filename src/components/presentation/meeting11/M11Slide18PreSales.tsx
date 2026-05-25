import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { DESIGN_PARTNER_PROMPT } from "./promptTemplates";

const principles = [
  "Не вру что продукт готов. Честно: «строю, ищу design partners».",
  "Прошу 30 минут разговора, не продаю.",
  "В обмен на feedback — lifetime discount + имя в credits + прямая линия со мной.",
  "Цель: 5 LOI (letters of intent) до строчки кода. Если 5 человек подписали LOI — продукт нужен. Если не подписали — гипотеза мертва.",
];

const loiStructure = [
  "Кто (компания + контактное лицо)",
  "Что готов купить (фича / SLA / объём)",
  "За сколько (range $X–Y или fixed)",
  "Когда (если продукт готов к [дата])",
  "Не контракт, не обязательство — но письменное намерение",
];

export default function M11Slide18PreSales() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try { await navigator.clipboard.writeText(DESIGN_PARTNER_PROMPT); }
    catch {
      const ta = document.createElement("textarea"); ta.value = DESIGN_PARTNER_PROMPT;
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
    }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  const onClick = (e: React.MouseEvent) => { e.stopPropagation(); copyToClipboard(); };
  const onKey = (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); copyToClipboard(); } };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[14px] py-[10px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Pre-sales · продукт ещё не готов
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          5 LOI <span className="text-[hsl(var(--slide-gold))]">до строчки кода</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[3px] px-[6px] py-[3px] mb-[3px]">
          <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase mb-[1px]">Принципы</p>
          {principles.map((p, i) => (
            <p key={i} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">· {p}</p>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[3px] px-[6px] py-[3px] mb-[3px]">
          <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase mb-[1px]">LOI · 5 полей</p>
          {loiStructure.map((s, i) => (
            <p key={i} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{i + 1}. {s}</p>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[5px] px-[6px] py-[4px] flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between mb-[2px] pb-[2px] border-b border-[hsl(var(--slide-border)/0.25)]">
            <p className="text-[7px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))]">Pocket prompt #3 · design partner outreach</p>
            <div role="button" tabIndex={0} onClick={onClick} onKeyDown={onKey}
              className="shrink-0 flex items-center gap-[2px] text-[7px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] px-[4px] py-[1px] rounded-[3px] cursor-pointer select-none">
              {copied ? <Check size={8} /> : <Copy size={8} />}
              {copied ? "OK" : "Копир."}
            </div>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto pr-[2px] prompt-scroll">
            <p className="font-mono text-[6px] text-[hsl(var(--slide-text))] leading-[1.5] whitespace-pre-wrap">{DESIGN_PARTNER_PROMPT}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[100px] py-[44px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Pre-sales · когда продукта ещё нет (для Vlad)
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[16px] tracking-[-0.02em]">
        5 LOI <span className="text-[hsl(var(--slide-gold))]">до строчки кода</span>
      </h2>
      <div className="grid grid-cols-2 gap-[18px] mb-[14px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[24px] py-[14px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[8px]">Принципы pre-sales</p>
          {principles.map((p, i) => (
            <p key={i} className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[4px]">· {p}</p>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[14px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[8px]">LOI — 5 полей на одной странице</p>
          {loiStructure.map((s, i) => (
            <p key={i} className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[4px]"><span className="text-[hsl(var(--slide-gold))] font-bold">{i + 1}.</span> {s}</p>
          ))}
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[10px] px-[22px] py-[12px] flex-1 min-h-0 flex flex-col max-w-[1700px]">
        <div className="flex items-center justify-between mb-[8px] pb-[8px] border-b border-[hsl(var(--slide-border)/0.25)]">
          <p className="text-[13px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))]">Pocket prompt #3 · design partner outreach (честный, без вранья про готовый продукт)</p>
          <div role="button" tabIndex={0} onClick={onClick} onKeyDown={onKey}
            className="shrink-0 flex items-center gap-[6px] text-[12px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] hover:bg-[hsl(var(--slide-gold)/0.25)] px-[12px] py-[4px] rounded-[6px] transition-colors cursor-pointer select-none">
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? "Скопировано" : "Копировать"}
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto pr-[8px] prompt-scroll">
          <p className="font-mono text-[12px] text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{DESIGN_PARTNER_PROMPT}</p>
        </div>
      </div>
    </div>
  );
}
