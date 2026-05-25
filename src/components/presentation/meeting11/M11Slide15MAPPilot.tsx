import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { MAP_TEMPLATE } from "./promptTemplates";

const why = [
  { stat: "60–70%", l: "пилотов НЕ конвертится в paid — потому что value-realization gate не прописан" },
  { stat: "3×", l: "выше конверсия pilot → paid если MAP подписан в week 0" },
  { stat: "14–30", l: "дней — оптимальная длина пилота. Дольше → теряется urgency" },
];

const components = [
  { name: "Goal", d: "Одна числовая метрика. «Сократить X на Y%», не «улучшить процесс»." },
  { name: "Gate", d: "Дословно: что = paid, что = no-go. Без двусмысленности." },
  { name: "Roles", d: "Обе стороны. У клиента — sponsor / champion / тех-человек. У тебя — main + backup." },
  { name: "Timeline", d: "Milestones с датами и ответственными. Mid-pilot check-in обязательно." },
  { name: "Decision date", d: "Зафиксирована в день kick-off. Звонок с EB в календаре до старта." },
];

export default function M11Slide15MAPPilot() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try { await navigator.clipboard.writeText(MAP_TEMPLATE); }
    catch {
      const ta = document.createElement("textarea"); ta.value = MAP_TEMPLATE;
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
          🔥 MAP · pilot → paid
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Mutual Action Plan = <span className="text-[hsl(var(--slide-gold))]">3× конверсия пилотов</span>
        </h2>
        <div className="grid grid-cols-3 gap-[2px] mb-[3px]">
          {why.map((w, i) => (
            <div key={i} className="bg-[hsl(var(--slide-gold)/0.1)] rounded-[3px] px-[4px] py-[2px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] leading-none">{w.stat}</p>
              <p className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{w.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[5px] px-[6px] py-[4px] flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between mb-[2px] pb-[2px] border-b border-[hsl(var(--slide-border)/0.25)]">
            <p className="text-[7px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))]">MAP — одностраничный шаблон</p>
            <div role="button" tabIndex={0} onClick={onClick} onKeyDown={onKey}
              className="shrink-0 flex items-center gap-[2px] text-[7px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] px-[4px] py-[1px] rounded-[3px] cursor-pointer select-none">
              {copied ? <Check size={8} /> : <Copy size={8} />}
              {copied ? "OK" : "Копир."}
            </div>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto pr-[2px] prompt-scroll">
            <p className="font-mono text-[5.5px] text-[hsl(var(--slide-text))] leading-[1.5] whitespace-pre-wrap">{MAP_TEMPLATE}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[100px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        🔥 MAP · Mutual Action Plan
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        Подписан в week 0 = <span className="text-[hsl(var(--slide-gold))]">3× конверсия pilot → paid</span>
      </h2>
      <div className="grid grid-cols-3 gap-[14px] mb-[14px] max-w-[1700px]">
        {why.map((w, i) => (
          <div key={i} className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[18px] py-[10px]">
            <p className="font-display text-[36px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[4px]">{w.stat}</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{w.l}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-[10px] mb-[14px] max-w-[1700px]">
        {components.map((c) => (
          <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[14px] py-[10px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] mb-[3px]">{c.name}</p>
            <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[10px] px-[22px] py-[12px] flex-1 min-h-0 flex flex-col max-w-[1700px]">
        <div className="flex items-center justify-between mb-[8px] pb-[8px] border-b border-[hsl(var(--slide-border)/0.25)]">
          <p className="text-[13px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))]">MAP · одностраничный шаблон · заполняешь с клиентом на kick-off</p>
          <div role="button" tabIndex={0} onClick={onClick} onKeyDown={onKey}
            className="shrink-0 flex items-center gap-[6px] text-[12px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] hover:bg-[hsl(var(--slide-gold)/0.25)] px-[12px] py-[4px] rounded-[6px] transition-colors cursor-pointer select-none">
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? "Скопировано" : "Копировать"}
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto pr-[8px] prompt-scroll">
          <p className="font-mono text-[11px] text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{MAP_TEMPLATE}</p>
        </div>
      </div>
    </div>
  );
}
