import { useState } from "react";
import FOM2SlideBase from "./FOM2SlideBase";

const PROMPT = `# Роль
Ты — мой целевой клиент (см. ICP ниже), а не маркетолог и не коуч. Читаешь моё позиционирование первый раз, у тебя 5 секунд внимания и десяток вкладок в браузере.

# Цель
Помочь мне найти позиционирование, которое цепляет именно моего ICP. Тон — спокойный, конструктивный, как умный друг. Без сарказма, без «это плохо», без оценок личности. Все замечания — о тексте, не обо мне.

# Вход
Позиционирование (одно предложение по формуле «[продукт] помогает [кому] решить [что]»):
"[ВСТАВЬ формулировку из С1]"

Контекст:
- ICP (1–2 предложения, роль + ситуация): [...]
- Главная боль, которую решает продукт: [...]
- Измеримый результат для клиента (+ цифра/срок, если есть): [...]
- 3 главных конкурента / альтернативы (включая «ничего не делать» и Excel): [...]

# Что сделать — по шагам

1) ПЕРВОЕ ВПЕЧАТЛЕНИЕ (5 секунд)
   - Что я понял из текста одним предложением своими словами.
   - На какой фразе споткнулся / перечитал.
   - Эмоция: любопытство / безразличие / сомнение — и какая фраза её вызвала.

2) ЯСНОСТЬ ЯЗЫКА
   - Отметь buzzwords и общие места («инновационный», «удобный», «AI-powered», «для бизнеса», «лучший в классе»).
   - По каждому: что конкретно я как клиент не могу из этого понять, и какой более точный вариант предложил бы ты.

3) РЕЗУЛЬТАТ vs ПРОЦЕСС (Jobs-to-be-Done)
   - Текст обещает мне результат или описывает, что вы делаете?
   - Если процесс — переформулируй в результат: «я смогу [действие/состояние] за [срок]».

4) РЕЛЕВАНТНОСТЬ ICP
   - Узнаёт ли ICP себя в первой части предложения? Что в формулировке клиента (роль, контекст, триггер) сделало бы это узнавание мгновенным?

5) ОТЛИЧИЕ ОТ АЛЬТЕРНАТИВ
   - После прочтения я могу объяснить, чем вы отличаетесь от каждого из 3 конкурентов и от варианта «оставить как есть»?
   - Если нет — на чём именно сливаетесь и какая «точка отличия» подсказывается из ICP/боли/результата.

6) ОДИН ВОПРОС
   - Главный вопрос, который остался у меня в голове и который я бы задал до клика. Это сигнал, что добавить или убрать.

# Выход

A. **5 инсайтов** — конкретные наблюдения по шагам выше. Каждый: что заметил → почему это важно для ICP → что попробовать.

B. **3 альтернативные формулировки** позиционирования, каждая в одном предложении, разные по углу:
   - вариант от боли,
   - вариант от результата,
   - вариант от отличия от альтернатив.
   Под каждой — одной строкой: для какого сегмента ICP она сильнее и какой ценой (что теряем).

C. **Что проверить на живых интервью** — 3 коротких вопроса, которые подтвердят или опровергнут лучший вариант.

# Правила
- Опирайся только на текст и контекст выше. Если данных не хватает — задай 1–2 уточняющих вопроса вместо догадок.
- Не хвали и не критикуй меня, говори о тексте.
- Не используй emoji и громкие эпитеты. Коротко, по делу.`;

export default function FOM2Slide06AIQaPrompt() {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <FOM2SlideBase
      slide={6}
      eyebrow="AI-as-QA · промпт #1"
      title="Claude / GPT играет клиента"
      subtitle="Прогоняем формулировку из С1 через AI до того, как покажем живому человеку"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-[12px] md:gap-[20px] max-w-[1800px] text-[11px] md:text-[20px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] p-[12px] md:p-[20px]">
          <div className="flex items-center justify-between gap-[10px] mb-[6px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">
              AI-as-QA для позиционирования
            </p>
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={handleCopy}
              className="shrink-0 px-[10px] md:px-[16px] py-[4px] md:py-[8px] rounded-[6px] font-semibold text-[10px] md:text-[14px] transition-all"
              style={{
                background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
                color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
                border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
              }}
            >
              {copied ? "✓ Скопировано" : "📋 Копировать"}
            </button>
          </div>
          <pre className="whitespace-pre-wrap font-mono text-[hsl(var(--slide-text)/0.9)] text-[9px] md:text-[13px] leading-[1.45] max-h-[220px] md:max-h-[480px] overflow-auto pr-[6px] prompt-scroll">
{PROMPT}
          </pre>
        </div>

        <div className="space-y-[8px] md:space-y-[14px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Зачем</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              Живой клиент скажет «нормально» из вежливости. AI не вежлив — он подсветит buzzwords, обобщения, отсутствие отличия от конкурента. Это бесплатная QA до того, как тратите чужое время.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Где запускать</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              Claude (claude.ai) или ChatGPT-5 в режиме reasoning. Дайте контекст ICP и конкурентов — без этого ответ будет общий.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Что НЕ делает</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              AI не заменит реальные интервью. Это первый фильтр — не последний. После AI-QA → 3 живых человека из ICP, 5 секунд на чтение, вопрос «о чём это?».
            </p>
          </div>
        </div>
      </div>
    </FOM2SlideBase>
  );
}
