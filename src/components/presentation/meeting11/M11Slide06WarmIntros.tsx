import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { INTRO_REQUEST_PROMPT } from "./promptTemplates";

const dos = [
  "Double opt-in: сначала твой друг спрашивает разрешения у N, только потом интро",
  "Дай интродьюсеру forward-friendly блок (см. шаблон) — копи-пейст без редактирования",
  "Назови конкретный вопрос: «спросить про X», а не «познакомиться»",
  "Дай escape-hatch: «если неудобно — без обид»",
];

const donts = [
  "«Познакомь меня с N» без объяснения зачем",
  "Просить интро у тех, кто сам с N виделся 1 раз",
  "После интро молчать 3 дня — отвечай в течение 4 часов",
  "На первом звонке сразу продавать — ты обещал «спросить»",
];

export default function M11Slide06WarmIntros() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(INTRO_REQUEST_PROMPT);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = INTRO_REQUEST_PROMPT;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onClick = (e: React.MouseEvent) => { e.stopPropagation(); copyToClipboard(); };
  const onKey = (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); copyToClipboard(); } };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[16px] py-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Warm intros · pocket prompt #1
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Как просить и давать <span className="text-[hsl(var(--slide-gold))]">правильно</span>
        </h2>
        <div className="grid grid-cols-2 gap-[5px] mb-[6px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[4px] px-[6px] py-[4px]">
            <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">✓ Делай</p>
            {dos.map((d, i) => (
              <p key={i} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">· {d}</p>
            ))}
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[4px]">
            <p className="text-[7.5px] font-bold text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.1em] mb-[2px]">✗ Не делай</p>
            {donts.map((d, i) => (
              <p key={i} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">· {d}</p>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[6px] px-[8px] py-[5px] flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between mb-[3px] pb-[3px] border-b border-[hsl(var(--slide-border)/0.25)]">
            <p className="text-[7.5px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))]">Forward-friendly шаблон</p>
            <div role="button" tabIndex={0} onClick={onClick} onKeyDown={onKey}
              className="shrink-0 flex items-center gap-[3px] text-[8px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] px-[6px] py-[2px] rounded-[3px] cursor-pointer select-none">
              {copied ? <Check size={9} /> : <Copy size={9} />}
              {copied ? "Скопировано" : "Копировать"}
            </div>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto pr-[2px] prompt-scroll">
            <p className="font-mono text-[6.5px] text-[hsl(var(--slide-text))] leading-[1.5] whitespace-pre-wrap">{INTRO_REQUEST_PROMPT}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[100px] py-[50px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Warm intros · pocket prompt #1
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px] tracking-[-0.02em]">
        Как просить и давать <span className="text-[hsl(var(--slide-gold))]">правильно</span>
      </h2>
      <div className="grid grid-cols-2 gap-[18px] mb-[16px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[20px] py-[14px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[8px]">✓ Делай</p>
          {dos.map((d, i) => (
            <p key={i} className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[3px]">· {d}</p>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[20px] py-[14px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.15em] mb-[8px]">✗ Не делай</p>
          {donts.map((d, i) => (
            <p key={i} className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[3px]">· {d}</p>
          ))}
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[12px] px-[24px] py-[16px] flex-1 min-h-0 flex flex-col max-w-[1700px]">
        <div className="flex items-center justify-between mb-[10px] pb-[10px] border-b border-[hsl(var(--slide-border)/0.25)]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))]">Forward-friendly шаблон · копи-пейст без редактирования</p>
          <div role="button" tabIndex={0} onClick={onClick} onKeyDown={onKey}
            className="shrink-0 flex items-center gap-[8px] text-[13px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] hover:bg-[hsl(var(--slide-gold)/0.25)] px-[14px] py-[6px] rounded-[6px] transition-colors cursor-pointer select-none">
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Скопировано" : "Копировать"}
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto pr-[10px] prompt-scroll">
          <p className="font-mono text-[14px] text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{INTRO_REQUEST_PROMPT}</p>
        </div>
      </div>
    </div>
  );
}
