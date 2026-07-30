import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { MAP_TEMPLATE } from "./promptTemplates";

const why = [
  { stat: "60–70%", l: "тестовых периодов не превращаются в оплату — потому что заранее не договорились, что считать успехом" },
  { stat: "3×", l: "выше шанс на оплату, если план на одной странице согласован в первый день" },
  { stat: "14–30", l: "дней — нормальная длина теста. Дольше — все забывают, зачем начинали" },
];

const components = [
  { name: "Цель", d: "Одна цифра. «Сократить X на Y%», а не «улучшить процесс»." },
  { name: "Условие оплаты", d: "Дословно: при каком результате переходим на оплату, а при каком расходимся." },
  { name: "Кто что делает", d: "С обеих сторон, поимённо. У клиента — кто отвечает, кто пользуется, кто помогает технически." },
  { name: "Сроки", d: "Шаги с датами и ответственными. Обязательно звонок в середине теста." },
  { name: "Дата решения", d: "Зафиксирована в первый день. Встреча с тем, кто платит, — уже в календаре." },
];

export default function L13Slide15MAPPilot() {
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
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[20px] py-[14px]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          🔥 План теста · от пробы к оплате
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Одна страница, согласованная в первый день = <span className="text-[hsl(var(--slide-gold))]">втрое больше оплат</span>
        </h2>
        <div className="grid grid-cols-3 gap-[5px] mb-[6px]">
          {why.map((w, i) => (
            <div key={i} className="bg-[hsl(var(--slide-gold)/0.1)] rounded-[6px] px-[8px] py-[5px]">
              <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))] leading-none">{w.stat}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{w.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[6px] px-[10px] py-[6px] flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between mb-[4px] pb-[4px] border-b border-[hsl(var(--slide-border)/0.25)]">
            <p className="text-[9px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))]">Шаблон на одну страницу</p>
            <div role="button" tabIndex={0} onClick={onClick} onKeyDown={onKey}
              className="shrink-0 flex items-center gap-[2px] text-[9px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] px-[6px] py-[2px] rounded-[4px] cursor-pointer select-none">
              {copied ? <Check size={10} /> : <Copy size={10} />}
              {copied ? "OK" : "Копир."}
            </div>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto pr-[4px] prompt-scroll">
            <p className="font-mono text-[7px] text-[hsl(var(--slide-text))] leading-[1.5] whitespace-pre-wrap">{MAP_TEMPLATE}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[100px] py-[40px]">
      <p className="text-[20px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        🔥 План теста · от пробы к оплате
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[16px] tracking-[-0.02em]">
        Согласован в первый день = <span className="text-[hsl(var(--slide-gold))]">втрое больше тестов доходит до оплаты</span>
      </h2>
      <div className="grid grid-cols-3 gap-[16px] mb-[16px] max-w-[1700px]">
        {why.map((w, i) => (
          <div key={i} className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[20px] py-[12px]">
            <p className="font-display text-[40px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[6px]">{w.stat}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{w.l}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-[12px] mb-[16px] max-w-[1700px]">
        {components.map((c) => (
          <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[17px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">{c.name}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[10px] px-[24px] py-[14px] flex-1 min-h-0 flex flex-col max-w-[1700px]">
        <div className="flex items-center justify-between mb-[10px] pb-[10px] border-b border-[hsl(var(--slide-border)/0.25)]">
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))]">Шаблон на одну страницу · заполняешь вместе с клиентом в первый день</p>
          <div role="button" tabIndex={0} onClick={onClick} onKeyDown={onKey}
            className="shrink-0 flex items-center gap-[6px] text-[13px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] hover:bg-[hsl(var(--slide-gold)/0.25)] px-[14px] py-[5px] rounded-[6px] transition-colors cursor-pointer select-none">
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Скопировано" : "Копировать"}
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto pr-[8px] prompt-scroll">
          <p className="font-mono text-[12px] text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{MAP_TEMPLATE}</p>
        </div>
      </div>
    </div>
  );
}
