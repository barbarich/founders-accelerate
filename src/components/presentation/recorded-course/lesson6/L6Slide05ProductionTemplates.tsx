import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const TEMPLATE = `# CLAUDE.md — мой проект

## О проекте
Я строю: [ВСТАВЬ: что ты строишь, одно предложение]
Для кого: [ВСТАВЬ: твой клиент, одна строка]
Стадия: [ВСТАВЬ: MVP / в проде / масштабирование]

## Стек (на чём построено)
Не знаешь стек — не выдумывай. Так и напиши: "не знаю, определи сам по коду".
- Фронт: [например: Next.js + Tailwind, или Lovable, или не знаю — определи сам]
- Бэкенд / база: [например: Supabase, или Firebase, или не знаю — определи сам]
- Платежи: [например: Stripe, или Telegram payments, или нет пока]
- Хостинг: [например: Vercel, Railway, Lovable hosting]

## Как ты должен работать со мной (Claude, читай внимательно)
- Я основатель, не разработчик. Объясняй простыми словами, без лишнего жаргона.
- В начале сессии сверяй раздел «Стек» с package.json и структурой проекта. Если он устарел или не заполнен — обнови его сам.
- Перед любой задачей сначала покажи план — какие файлы затрагиваешь, что меняется.
- Если задача затрагивает больше 3 файлов — обязательно Plan Mode.
- На каждом экране должно быть три состояния: загрузка, пусто, ошибка.
- Все секретные ключи — только в .env, никогда не показывай их в чате и не пиши в код.
- Мобильная версия так же важна, как десктоп — проверяй сразу.

## Что НЕ трогать
- [ВСТАВЬ: например: папку /public/, файлы конфигурации, юридические тексты]
- Никогда не меняй .env и не показывай мне ключи в чате.

## Как этот файл растёт
- Если что-то непонятно — не угадывай. Задай мне один короткий вопрос и жди ответа.
- Заметил, что Claude повторяет одну и ту же ошибку? Добавь сюда правило «никогда не делай X».
- Раз в несколько недель проси: «перечитай проект и обнови раздел „Стек", если он устарел».`;

export default function L6Slide05ProductionTemplates() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(TEMPLATE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Готовый шаблон · copy + paste
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Один CLAUDE.md, который работает с первого дня
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          Скопируй, замени всё что в <span className="font-mono text-[hsl(var(--slide-gold))]">[квадратных скобках]</span> под свой проект. 5 минут — и Claude знает твой продукт.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[8px] py-[6px] overflow-y-auto mb-[4px]" style={{ maxHeight: "62%" }}>
          <pre className="text-[6px] font-mono text-[hsl(var(--slide-text))] leading-[1.55] whitespace-pre-wrap">{TEMPLATE}</pre>
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
          {copied ? "✓ Скопировано" : "📋 Скопировать шаблон"}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Готовый шаблон · copy + paste в свой проект
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Один <span className="text-[hsl(var(--slide-gold))]">CLAUDE.md</span>, который работает с первого дня
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1500px] leading-[1.45]">
        Скопируй шаблон ниже, замени всё что в <span className="font-mono text-[hsl(var(--slide-gold))]">[квадратных скобках]</span> под свой проект. 5 минут работы — и Claude знает твой продукт лучше, чем некоторые твои друзья.
      </p>

      <div className="grid grid-cols-[1fr_320px] gap-[24px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[24px] py-[18px] overflow-y-auto" style={{ maxHeight: "500px" }}>
          <pre className="text-[12.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.7] whitespace-pre-wrap">{TEMPLATE}</pre>
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
            {copied ? "✓ Скопировано" : "📋 Скопировать шаблон"}
          </button>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">Куда положить</p>
            <p className="text-[13px] text-[hsl(var(--slide-text))] leading-[1.5]">
              Создай файл <span className="font-mono text-[hsl(var(--slide-gold))]">CLAUDE.md</span> в корне проекта. Просто рядом со всеми остальными файлами. Claude найдёт его сам.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-text-muted))] font-bold mb-[6px]">Не знаешь свой стек?</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Нормально, если ты не разработчик. Напиши «не знаю» — и попроси Claude самостоятельно определить стек по коду и держать этот раздел в актуальном состоянии.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-text-muted))] font-bold mb-[6px]">Дополняй со временем</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Claude сделал что-то не так? Добавь в CLAUDE.md правило «никогда не делай X». Файл растёт из реального опыта.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
