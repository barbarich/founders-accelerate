import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "1", when: "Перед звонком", what: "Исследование компании за 60 секунд — промптом с прошлого слайда. Ты приходишь подготовленным, он это слышит с первой минуты." },
  { n: "2", when: "Во время звонка", what: "Запись с расшифровкой (tl;dv, Granola, Fathom). Ты слушаешь человека, а не пишешь конспект." },
  { n: "3", when: "Через 2 часа", what: "Из расшифровки — черновик письма-резюме и заметки в таблицу. Ты правишь две минуты и отправляешь, а не откладываешь на вечер." },
  { n: "4", when: "В пятницу", what: "Разбор пайплайна: отдаёшь таблицу — получаешь список застрявших сделок и одно действие по каждой." },
];

const PIPELINE_PROMPT = `Ты — мой руководитель отдела продаж. Ниже моя таблица сделок.

[вставь таблицу: компания / человек / стадия / следующий шаг / дата / сумма / дата последнего касания]

Найди и выпиши отдельными списками:
1. Сделки БЕЗ следующего шага или без даты.
2. Сделки без движения 14+ дней.
3. Сделки, где я знаю только одного человека в компании.
4. Сделки, где нет ответа «почему сейчас» — их надо честно закрыть.

По каждой проблемной сделке дай ОДНО конкретное действие на понедельник
и готовый текст сообщения (3–4 строки, на русском, без канцелярита).

В конце: сколько денег реально в работе, сколько из них — иллюзия,
и хватает ли пайплайна на мою цель [впиши цель месяца в €].`;

export default function L13SlideAIStack() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(PIPELINE_PROMPT);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = PIPELINE_PROMPT;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onClick = (e: React.MouseEvent) => { e.stopPropagation(); copyToClipboard(); };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); copyToClipboard(); }
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          🔥 Помощник продаж
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Соберёшь за вечер, <span className="text-[hsl(var(--slide-gold))]">работает каждую неделю</span>
        </h2>
        <div className="space-y-[3px] mb-[6px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[3px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{s.n}</span>
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{s.when}</span>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{s.what}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[5px] px-[8px] py-[6px]">
          <div className="flex items-center justify-between mb-[3px]">
            <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))]">Промпт «разбери мой пайплайн»</p>
            <div
              role="button"
              tabIndex={0}
              onClick={onClick}
              onKeyDown={onKey}
              className="flex items-center gap-[3px] text-[7px] text-[hsl(var(--slide-text))] border border-[hsl(var(--slide-border)/0.5)] rounded-[3px] px-[5px] py-[2px]"
            >
              {copied ? <Check size={9} /> : <Copy size={9} />}
              {copied ? "Скопировано" : "Копировать"}
            </div>
          </div>
          <p className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.45] whitespace-pre-wrap">{PIPELINE_PROMPT}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        🔥 Помощник продаж
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px] tracking-[-0.02em]">
        Соберёшь за вечер, <span className="text-[hsl(var(--slide-gold))]">работает каждую неделю</span>
      </h2>
      <div className="grid grid-cols-4 gap-[18px] max-w-[1700px] mb-[20px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[16px]">
            <p className="font-display text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[6px]">{s.n}</p>
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[6px]">{s.when}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.what}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[12px] px-[28px] py-[18px] max-w-[1700px] mb-[14px]">
        <div className="flex items-center justify-between mb-[8px]">
          <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))]">Промпт на пятницу · «разбери мой пайплайн»</p>
          <div
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={onKey}
            className="flex items-center gap-[8px] text-[17px] text-[hsl(var(--slide-text))] border border-[hsl(var(--slide-border)/0.5)] rounded-[8px] px-[16px] py-[7px] cursor-pointer"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Скопировано" : "Копировать промпт"}
          </div>
        </div>
        <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5] whitespace-pre-wrap">{PIPELINE_PROMPT}</p>
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.45] max-w-[1700px]">
        Это не «AI продаёт за тебя». Это забирает бумажную работу, из-за которой ты и не садишься за продажи.
      </p>
    </div>
  );
}
