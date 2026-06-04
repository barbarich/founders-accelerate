import { useState } from "react";
import FOM4SlideBase from "./FOM4SlideBase";

const PROMPT = `# Роль
Ты — мой целевой пользователь, а не дизайнер. Я покажу скриншоты своего продукта и расскажу, что в нём делает человек. Смотри на экраны его глазами: времени нет, рядом куча других вкладок, бросаешь, как только стало непонятно или скучно.

# Что я тебе даю
- Про продукт: [что это и для кого, простыми словами, 1-2 предложения]
- Скриншоты экранов: прикрепляю по порядку, сколько есть — хоть 3, хоть 10
- Что делает человек: [опиши флоу своими словами, по шагам]
- Что считаю успехом (первая польза, Aha): [...]

# Что сделать
Пройди мысленно по моим скриншотам в том порядке, как идёт человек, и проверь три вещи. Реагируй только на то, что реально видно на экранах — чего не видно, не выдумывай (пиши «не видно на скриншотах»).

1) ОБЕЩАНИЕ — первый экран, первые 5 секунд
   - Что я понял, что получу, — одним предложением своими словами.
   - На чём споткнулся. Это про меня (юзера) или про вас (продукт)?

2) ПЕРВОЕ ДЕЙСТВИЕ — путь до первого результата
   - Сколько шагов до первой пользы.
   - Где просят регистрацию или данные раньше, чем я увидел ценность.
   - На каком экране я бы закрыл и почему.

3) ПРИЧИНА ВЕРНУТЬСЯ — что в конце
   - Есть ли повод открыть продукт завтра? Какой?
   - Если нет — что одно добавить, чтобы он появился.

# Что мне вернуть
A. 3 точки спотыкания — где сильнее всего рвётся путь. Каждая: что видно → на каком шаге → почему это теряет юзера.
B. 3 правки — по одной на каждую из трёх вещей выше. Что конкретно изменить (текст / порядок / действие).
C. 1 вопрос, который у меня остался и мешает идти дальше.

# Как отвечать
- Только по моим скриншотам и описанию. Чего не видно — не придумывай.
- Не хвали, говори о продукте, не обо мне.
- Без emoji и общих слов. Коротко и по делу, как реальный занятой человек.`;

export default function FOM4Slide21AIPrompt() {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <FOM4SlideBase
      slide={21}
      eyebrow="AI-as-QA · промпт сессии"
      title="AI смотрит твои экраны глазами нового пользователя"
      subtitle="Прикрепляешь скриншоты своих экранов (сколько есть) и парой фраз описываешь, что делает человек. AI разбирает и возвращает 3 точки спотыкания и 3 правки."
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-[12px] md:gap-[20px] max-w-[1800px] text-[11px] md:text-[20px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] p-[12px] md:p-[20px]">
          <div className="flex items-center justify-between gap-[10px] mb-[6px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">
              Скриншоты + описание флоу → разбор
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
              Живой тестер постесняется сказать «не понял». AI по скриншотам — нет. Он точно покажет, на каком экране рвётся путь к Aha. Бесплатная QA до встречи с людьми.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Как использовать</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              Claude или GPT-5 с vision. Прикрепи скриншоты экранов (3, 10 — сколько есть) и опиши флоу простыми словами. AI не ходит по продукту — он разбирает то, что ты показал.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Что НЕ делает</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              Не заменяет 5 живых тестов «60 секунд». Это первый фильтр — не последний. После AI → 3 человека из ЦА, молча, с секундомером.
            </p>
          </div>
        </div>
      </div>
    </FOM4SlideBase>
  );
}
