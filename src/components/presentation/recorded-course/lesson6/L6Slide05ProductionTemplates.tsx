import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const PROMPT = `Создай для этого проекта файл памяти CLAUDE.md и положи его в корень проекта сам. Он нужен, чтобы ты помнил мой продукт и правила работы в каждой новой сессии - без него ты каждый раз начинаешь с нуля.

Заполни файл на основе того, что я расскажу ниже. Чего не хватает - вытяни сам из кода, не выдумывай.

Мой проект:
- Что я строю: [ВСТАВЬ: одно предложение - что за продукт]
- Для кого: [ВСТАВЬ: кто мой клиент]
- Стадия: [ВСТАВЬ: MVP / уже в проде / масштабирую]
- Стек: [ВСТАВЬ: если знаешь - назови; если нет - напиши «не знаю, определи сам по коду»]
- Что нельзя трогать: [ВСТАВЬ: например .env, ключи, папку /public, юр. тексты]

Запиши в файл как правила работы со мной:
- Я основатель, не разработчик. Объясняй просто, без лишнего жаргона.
- Перед задачей сначала показывай план, только потом код.
- На каждом экране - три состояния: загрузка, пусто, ошибка.
- Ключи - только в .env, никогда не показывай их в чате и не пиши в код.
- Мобильная версия так же важна, как десктоп.

И ещё:
- Раздел «Стек» сверяй с реальным кодом в начале каждой сессии и обновляй сам, если устарел.
- Заметишь, что повторяешь одну и ту же ошибку - добавь в этот файл правило «никогда не делай X».
- Если чего-то не хватает, чтобы заполнить файл - задай мне один короткий вопрос, не додумывай.`;

export default function L6Slide05ProductionTemplates() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Память проекта · один промпт
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Claude сам создаёт CLAUDE.md - ты только рассказываешь о проекте
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          Не нужно создавать файл руками и искать, куда его положить. Скопируй промпт (или надиктуй его голосом через <span className="text-[hsl(var(--slide-gold))]">Whisper</span>), замени <span className="font-mono text-[hsl(var(--slide-gold))]">[скобки]</span> под себя - Claude всё создаст и положит в корень сам.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[8px] py-[6px] overflow-y-auto mb-[4px]" style={{ maxHeight: "58%" }}>
          <pre className="text-[6px] font-mono text-[hsl(var(--slide-text))] leading-[1.55] whitespace-pre-wrap">{PROMPT}</pre>
        </div>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={handleCopy}
          className="self-start px-[10px] py-[5px] rounded-[5px] text-[9px] font-semibold transition-all"
          style={{
            background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
            color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
            border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
          }}
        >
          {copied ? "✓ Скопировано" : "📋 Скопировать промпт"}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Память проекта · один промпт, не ручная работа
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Claude сам создаёт <span className="text-[hsl(var(--slide-gold))]">CLAUDE.md</span> - ты только рассказываешь о проекте
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1500px] leading-[1.45]">
        Не нужно создавать файл руками, искать нужную папку и вставлять туда текст. Скопируй промпт ниже (или надиктуй его голосом через <span className="text-[hsl(var(--slide-gold))]">Whisper</span>), замени всё что в <span className="font-mono text-[hsl(var(--slide-gold))]">[скобках]</span> под свой проект - Claude создаст CLAUDE.md, заполнит его и положит в корень сам.
      </p>

      <div className="grid grid-cols-[1fr_320px] gap-[24px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[24px] py-[18px] overflow-y-auto" style={{ maxHeight: "500px" }}>
          <pre className="text-[12.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.7] whitespace-pre-wrap">{PROMPT}</pre>
        </div>

        <div className="flex flex-col gap-[12px]">
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleCopy}
            className="px-[16px] py-[14px] rounded-[10px] text-[16px] font-semibold transition-all"
            style={{
              background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
              color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
              border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.4"})`,
            }}
          >
            {copied ? "✓ Скопировано" : "📋 Скопировать промпт"}
          </button>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">Ничего не создаёшь руками</p>
            <p className="text-[13px] text-[hsl(var(--slide-text))] leading-[1.5]">
              Не нужно создавать файл, искать папку, вставлять текст. Claude сам создаёт <span className="font-mono text-[hsl(var(--slide-gold))]">CLAUDE.md</span> и кладёт его в корень проекта.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-text-muted))] font-bold mb-[6px]">Можно надиктовать голосом</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Не хочешь печатать - надиктуй промпт через <span className="text-[hsl(var(--slide-gold))]">Whisper</span>. Расскажи о проекте своими словами, Claude сам соберёт из этого файл.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-text-muted))] font-bold mb-[6px]">Не знаешь свой стек?</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Нормально, если ты не разработчик. Напиши «не знаю, определи сам по коду» - Claude сам разберётся и будет держать этот раздел актуальным.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
