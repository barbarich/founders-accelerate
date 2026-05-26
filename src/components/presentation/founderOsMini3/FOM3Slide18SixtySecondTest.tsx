import { useState } from "react";

const promptLines = [
  "Я строю продукт. Ты — потенциальный клиент, описание ниже.",
  "Я буду показывать экраны (вставлять скриншоты).",
  "На каждый экран отвечай в трёх строках:",
  "1) что я тут вижу за 5 секунд (буквально, без догадок),",
  "2) какое следующее действие мне очевидно,",
  "3) что непонятно или раздражает.",
  "",
  "Не подсказывай мне как улучшить. Только реакция.",
  "",
  "Профиль клиента:",
  "- Кто: [ВСТАВЬ ICP из С1 — кто платит]",
  "- Боль: [ВСТАВЬ главную боль из С1]",
  "- Что уже пробовал: [ВСТАВЬ 1-2 текущих решения]",
  "- Контекст использования: [ВСТАВЬ где/когда/на каком устройстве]",
  "",
  "Начинаю с лендинга. Вот скриншот: [вставь screenshot]",
];

export default function FOM3Slide18SixtySecondTest() {
  const [copied, setCopied] = useState(false);
  const text = promptLines.join("\n");

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative">
      <div className="flex flex-col justify-center px-[20px] md:px-[140px] h-full max-w-[1800px] py-[24px] md:py-[80px]">
        <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium text-[9px] md:text-[18px] mb-[8px] md:mb-[20px]">
          60-секундный тест · обкатка готового билда
        </p>
        <h2 className="font-display text-[22px] md:text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] md:leading-[1.1] tracking-[-0.01em]">
          Прогоняем MVP через <span className="text-[hsl(var(--slide-gold))]">холодного клиента</span>
        </h2>
        <p className="text-[11px] md:text-[24px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mt-[8px] md:mt-[18px] max-w-[1500px]">
          После того как лендинг и MVP собраны — отдаём их Claude в роли ICP. До живых пользователей, бесплатно, за 5 минут.
        </p>

        <div className="mt-[14px] md:mt-[28px] grid grid-cols-1 md:grid-cols-[1fr_640px] gap-[12px] md:gap-[36px]">
          <div className="space-y-[6px] md:space-y-[14px] text-[11px] md:text-[20px] text-[hsl(var(--slide-text))]">
            <p>
              <span className="text-[hsl(var(--slide-gold))] font-semibold">Зачем:</span> человек смотрит на экран 5–7 секунд и решает «понятно / не понятно». Claude симулирует это честнее, чем вы сами — у вас уже есть контекст.
            </p>
            <p>
              <span className="text-[hsl(var(--slide-gold))] font-semibold">Как:</span> в одном чате — профиль ICP из С1, дальше показываете скриншоты по одному. Лендинг → первый экран продукта → ключевая фича → результат.
            </p>
            <p>
              <span className="text-[hsl(var(--slide-gold))] font-semibold">Что ищем:</span> на каком экране клиент перестаёт понимать. Где догадывается вместо «вижу». Где раздражение. Этот экран — следующий рефактор.
            </p>
            <p>
              <span className="text-[hsl(var(--slide-gold))] font-semibold">Ограничение:</span> Claude не заменяет живой custdev. Это фильтр перед живыми тестами на С4 — чтобы не сжигать живых людей на очевидных багах.
            </p>
            <button
              onClick={handleCopy}
              className="mt-[6px] md:mt-[10px] inline-flex items-center gap-[6px] md:gap-[10px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] px-[10px] md:px-[18px] py-[5px] md:py-[10px] hover:bg-[hsl(var(--slide-gold)/0.2)] transition cursor-pointer"
            >
              <span className="text-[12px] md:text-[18px]">{copied ? "✅" : "📋"}</span>
              <span className="text-[10px] md:text-[16px] text-[hsl(var(--slide-gold))] font-medium">
                {copied ? "Скопировано" : "Скопировать промпт"}
              </span>
            </button>
          </div>

          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] md:rounded-[16px] px-[12px] md:px-[28px] py-[10px] md:py-[22px] max-h-[260px] md:max-h-[520px] overflow-y-auto prompt-scroll">
            <div className="flex items-center gap-[6px] md:gap-[8px] mb-[8px] md:mb-[14px]">
              <div className="w-[8px] md:w-[12px] h-[8px] md:h-[12px] rounded-full bg-red-500/60" />
              <div className="w-[8px] md:w-[12px] h-[8px] md:h-[12px] rounded-full bg-yellow-500/60" />
              <div className="w-[8px] md:w-[12px] h-[8px] md:h-[12px] rounded-full bg-green-500/60" />
              <span className="text-[9px] md:text-[13px] text-[hsl(var(--slide-text-muted)/0.4)] ml-[6px] md:ml-[8px] font-mono">60sec-test.txt</span>
            </div>
            <pre className="text-[9px] md:text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.6] whitespace-pre-wrap font-mono">
              {promptLines.map((line, i) => {
                if (line === "") return <br key={i} />;
                const parts = line.split(/(\[.*?\])/g);
                return (
                  <div key={i}>
                    {parts.map((part, j) =>
                      part.startsWith("[") ? (
                        <span key={j} className="text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[3px] rounded">
                          {part}
                        </span>
                      ) : (
                        <span key={j}>{part}</span>
                      )
                    )}
                  </div>
                );
              })}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
