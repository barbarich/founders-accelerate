import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { POST_EVENT_FOLLOWUP_PROMPT } from "./promptTemplates";

const before = [
  "Скачай attendee list у организатора (большинство выдают по запросу)",
  "Включи organizer scheduler: Brella · Swapcard · Grip · Web Summit Connect — встроенные приложения для 1-on-1 слотов",
  "Цель: 60–70% calendar заполнен ДО прилёта",
  "LinkedIn DM с reference: «Видел что ты тоже идёшь на [Event] — давай 15 мин в среду?»",
];

const during = [
  "Холл, не зал. Доклады смотришь в записи через неделю.",
  "Calendar открыт на телефоне. Демо букается в моменте — иначе не происходит.",
  "Сцена → QR → демо забуканы в реальном времени.",
  "Voice memo с именем и контекстом после каждого разговора. Визитки = death.",
];

const after = [
  "Follow-up в течение 48 часов БЕЗ ИСКЛЮЧЕНИЙ — потом ты один из 200 писем.",
  "Шаблон ниже → копи-пейст, заполни 4 поля, отправь.",
  "Все voice memos → CRM (даже Notion с 4 колонками) в первые 24ч.",
  "Один полезный артефакт каждому: статья, контакт, ссылка. Даём ценность до сделки.",
];

export default function M11Slide11EventFunnel() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try { await navigator.clipboard.writeText(POST_EVENT_FOLLOWUP_PROMPT); }
    catch {
      const ta = document.createElement("textarea"); ta.value = POST_EVENT_FOLLOWUP_PROMPT;
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
    }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  const onClick = (e: React.MouseEvent) => { e.stopPropagation(); copyToClipboard(); };
  const onKey = (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); copyToClipboard(); } };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[12px] py-[10px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Воронка · ДО · НА · ПОСЛЕ
        </p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Лучшие встречи назначаются <span className="text-[hsl(var(--slide-gold))]">ДО конференции</span>
        </h2>
        <div className="grid grid-cols-3 gap-[3px] mb-[5px]">
          {[{ label: "ДО · 2–4 нед", items: before }, { label: "НА · в моменте", items: during }, { label: "ПОСЛЕ · 48 ч", items: after }].map((col) => (
            <div key={col.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[3px] px-[4px] py-[3px]">
              <p className="text-[7px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.08em] mb-[2px]">{col.label}</p>
              {col.items.map((it, i) => (
                <p key={i} className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[1px]">· {it}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[5px] px-[6px] py-[4px] flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between mb-[2px] pb-[2px] border-b border-[hsl(var(--slide-border)/0.25)]">
            <p className="text-[7px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))]">Pocket prompt #2 · 48-ч follow-up</p>
            <div role="button" tabIndex={0} onClick={onClick} onKeyDown={onKey}
              className="shrink-0 flex items-center gap-[2px] text-[7px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] px-[4px] py-[1px] rounded-[3px] cursor-pointer select-none">
              {copied ? <Check size={8} /> : <Copy size={8} />}
              {copied ? "OK" : "Копир."}
            </div>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto pr-[2px] prompt-scroll">
            <p className="font-mono text-[6px] text-[hsl(var(--slide-text))] leading-[1.5] whitespace-pre-wrap">{POST_EVENT_FOLLOWUP_PROMPT}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[100px] py-[44px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Воронка · ДО · НА · ПОСЛЕ
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[16px] tracking-[-0.02em]">
        Лучшие встречи назначаются <span className="text-[hsl(var(--slide-gold))]">ДО конференции</span>, а не на ней
      </h2>
      <div className="grid grid-cols-3 gap-[14px] mb-[14px] max-w-[1700px]">
        {[{ label: "ДО · за 2–4 недели", items: before }, { label: "НА · в моменте", items: during }, { label: "ПОСЛЕ · в 48 часов", items: after }].map((col) => (
          <div key={col.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[18px] py-[14px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[10px]">{col.label}</p>
            {col.items.map((it, i) => (
              <p key={i} className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[4px]">· {it}</p>
            ))}
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[10px] px-[22px] py-[12px] flex-1 min-h-0 flex flex-col max-w-[1700px]">
        <div className="flex items-center justify-between mb-[8px] pb-[8px] border-b border-[hsl(var(--slide-border)/0.25)]">
          <p className="text-[13px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))]">Pocket prompt #2 · 48-часовой follow-up после события</p>
          <div role="button" tabIndex={0} onClick={onClick} onKeyDown={onKey}
            className="shrink-0 flex items-center gap-[6px] text-[12px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] hover:bg-[hsl(var(--slide-gold)/0.25)] px-[12px] py-[4px] rounded-[6px] transition-colors cursor-pointer select-none">
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? "Скопировано" : "Копировать"}
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto pr-[8px] prompt-scroll">
          <p className="font-mono text-[12px] text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{POST_EVENT_FOLLOWUP_PROMPT}</p>
        </div>
      </div>
    </div>
  );
}
