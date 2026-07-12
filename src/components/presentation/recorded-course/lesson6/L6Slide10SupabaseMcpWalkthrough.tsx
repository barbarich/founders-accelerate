import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const supabasePrompt = `Спроектируй и настрой базу данных для моего продукта. Задача - довести её до состояния «надёжно, безопасно и готово к росту», чтобы под мой проект ничего не было упущено. Я ничего не должен доделывать руками.

О продукте:
- Что: [ВСТАВЬ: например, SaaS с подписками]
- Главное правило: каждый юзер видит только свои данные, никогда чужие

Сделай через Supabase MCP от начала до конца:

1. Схема под мой проект:
   - Определи, какие таблицы реально нужны именно моему продукту, и создай их со связями
   - Не ограничивайся шаблоном - исходи из того, что я описал выше

2. Безопасность (обязательно):
   - Row Level Security на каждой таблице: юзер видит и меняет только свои строки
   - Защита на уровне базы, не только во фронте
   - Проверь, что чужие данные недоступны даже случайно

3. Надёжность и рост:
   - Индексы под запросы, которые будут частыми - чтобы не тормозило при росте числа юзеров
   - Правильные типы, ограничения и связи, чтобы в базу не попадал мусор
   - Ничего, что развалится на первой тысяче пользователей

4. Автоматика:
   - При регистрации юзера -> автоматически создаётся его профиль
   - При оплате Stripe -> автоматически обновляется подписка (настрой webhook и проверь, что он реально срабатывает)

5. История и типы:
   - Сохраняй изменения как migration-файлы, чтобы схема жила в git
   - Сгенери TypeScript-типы под все таблицы

6. Проверь сам:
   - Убедись, что защита данных работает, автоматика срабатывает, а схема готова к реальным пользователям
   - Пройдись по типичным дырам соло-фаундеров и закрой их

Что НЕ делай:
- Не давай юзерам админских прав
- Не отключай правило «вижу только своё»
- Если под мой проект чего-то не хватает или что-то неоднозначно - спроси меня, не додумывай молча`;

const artifacts = [
  { label: "Схема", value: "Таблицы под твой проект, со связями" },
  { label: "Безопасность", value: "Юзер видит только своё - на уровне базы" },
  { label: "Готовность к росту", value: "Индексы и типы - не развалится при росте" },
  { label: "Статус", value: "Проверено, надёжно, готово к продакшену" },
];

export default function L6Slide10SupabaseMcpWalkthrough() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(supabasePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Кейс · Supabase через MCP
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          База данных за один промпт
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          Один промпт - и Claude проектирует схему под твой продукт, закрывает безопасность и готовит базу к росту. Довести до продакшена и проверить себя - его задача, не твоя.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[4px] overflow-y-auto mb-[4px]" style={{ maxHeight: "44%" }}>
          <pre className="text-[5.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.55] whitespace-pre-wrap">{supabasePrompt}</pre>
        </div>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={handleCopy}
          className="mb-[5px] self-start px-[8px] py-[4px] rounded-[4px] text-[8px] font-semibold transition-all"
          style={{
            background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
            color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
            border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
          }}
        >
          {copied ? "✓ Скопировано" : "📋 Скопировать промпт"}
        </button>
        <div className="space-y-[2px]">
          {artifacts.map((a) => (
            <div key={a.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[3px] px-[5px] py-[2px]">
              <p className="text-[6.5px] font-bold text-[hsl(var(--slide-gold))]">
                {a.label}: <span className="text-[hsl(var(--slide-text-muted))] font-normal">{a.value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Кейс · Supabase через MCP
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        База данных <span className="text-[hsl(var(--slide-gold))]">за один промпт</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[16px] max-w-[1500px] leading-[1.45]">
        Раньше: несколько дней работы инженера по базам данных. Сейчас: один промпт - и Claude сам проектирует схему под твой продукт, закрывает безопасность и готовит базу к росту. Задача сформулирована так, чтобы он довёл всё до продакшена и сам себя проверил, а не оставил дыры на потом.
      </p>

      <div className="grid grid-cols-[1.5fr_1fr] gap-[20px] max-w-[1700px]">
        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Промпт · адаптируй под свой проект</p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[18px] py-[14px] overflow-y-auto" style={{ maxHeight: "440px" }}>
            <pre className="text-[12.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.7] whitespace-pre-wrap">{supabasePrompt}</pre>
          </div>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleCopy}
            className="mt-[10px] px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold transition-all"
            style={{
              background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
              color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
              border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.4"})`,
            }}
          >
            {copied ? "✓ Скопировано" : "📋 Скопировать промпт"}
          </button>
        </div>

        <div className="flex flex-col gap-[14px]">
          <div>
            <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Что получишь на выходе</p>
            <div className="space-y-[8px]">
              {artifacts.map((a) => (
                <div key={a.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[14px] py-[10px]">
                  <p className="text-[12px] uppercase text-[hsl(var(--slide-text-muted))] tracking-[0.14em] font-bold mb-[3px]">{a.label}</p>
                  <p className="text-[15px] text-[hsl(var(--slide-gold))] leading-[1.4] font-semibold">{a.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">Без этого — катастрофа</p>
            <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.5]">
              Если забыть про защиту «вижу только своё», любой залогиненный юзер увидит данные других. Самая частая дыра у соло-фаундеров. Всегда требуй защиту явно.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
