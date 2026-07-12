import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const stripePrompt = `Настрой и подключи приём оплат через Stripe для моего продукта. Задача - довести до состояния «работает и готово к продакшену», чтобы я мог принимать реальных клиентов и деньги. Я ничего не должен доделывать руками.

О продукте:
- Что продаю: [ВСТАВЬ: например, курс за $19]
- Цена: [ВСТАВЬ: $19], один раз (не подписка)
- Что клиент получает после оплаты: [ВСТАВЬ: доступ / письмо / редирект на нужную страницу]
- Способы оплаты: карты + Apple Pay + Google Pay
- Email клиента: собирать обязательно (нужен для доступа)

Сделай через Stripe MCP от начала до конца:
1. Создай продукт, цену и способ приёма оплаты
2. Подключи оплату к моему продукту - кнопка «Купить» должна реально работать
3. Настрой, что происходит после успешной оплаты (доступ / письмо / редирект)
4. Используй ограниченный ключ - минимум прав, только то, что нужно для оплат
5. Сам проверь весь путь тестовым платежом: клиент нажал «Купить» -> оплатил -> получил доступ. Убедись, что каждый шаг реально срабатывает.
6. Убедись, что приём оплат надёжный и готов к реальным клиентам и деньгам

Важно:
- Сначала всё в test mode. Live включай только после того, как сам убедился, что весь путь работает без ошибок.
- Ключ - ограниченный, не полный. Минимум прав.
- Ничего не оставляй «на потом» и не перекладывай на меня. Если в описании что-то неоднозначно - спроси, не додумывай.`;

const result = [
  { label: "Что на выходе", value: "Работающий приём оплат на продукте" },
  { label: "Время", value: "~5 минут вместо ~2 часов" },
  { label: "UI Stripe открывал?", value: "Нет. Ни разу." },
  { label: "Статус", value: "Проверено и готово к продакшену" },
];

export default function L6Slide09StripeMcpWalkthrough() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(stripePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Кейс · Stripe через MCP
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Принимать оплаты — один промпт
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          Реальный пример: так я сделал оплату $19 для своего мини-курса. Без открытия Stripe.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[4px] overflow-y-auto mb-[4px]" style={{ maxHeight: "44%" }}>
          <pre className="text-[5.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.55] whitespace-pre-wrap">{stripePrompt}</pre>
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
        <div className="grid grid-cols-2 gap-[3px]">
          {result.map((r) => (
            <div key={r.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[5px] py-[3px]">
              <p className="text-[6.5px] uppercase text-[hsl(var(--slide-text-muted))] tracking-[0.1em] font-bold">{r.label}</p>
              <p className="text-[7px] text-[hsl(var(--slide-gold))] leading-[1.3]">{r.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Кейс · Stripe через MCP
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Принимать оплаты — <span className="text-[hsl(var(--slide-gold))]">один промпт</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[16px] max-w-[1500px] leading-[1.45]">
        Реальный пример. Так я подключил оплату $19 для своего мини-курса. Без открытия Stripe, без копирования ID, без забытых настроек.
      </p>

      <div className="grid grid-cols-[1.5fr_1fr] gap-[20px] max-w-[1700px]">
        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Промпт · скопируй и адаптируй</p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[18px] py-[14px] overflow-y-auto" style={{ maxHeight: "440px" }}>
            <pre className="text-[12.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.7] whitespace-pre-wrap">{stripePrompt}</pre>
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
            {copied ? "✓ Скопировано в буфер" : "📋 Скопировать промпт"}
          </button>
        </div>

        <div className="flex flex-col gap-[14px]">
          <div>
            <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Что получишь на выходе</p>
            <div className="space-y-[8px]">
              {result.map((r) => (
                <div key={r.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[14px] py-[10px]">
                  <p className="text-[12px] uppercase text-[hsl(var(--slide-text-muted))] tracking-[0.14em] font-bold mb-[3px]">{r.label}</p>
                  <p className="text-[15px] text-[hsl(var(--slide-gold))] leading-[1.4] font-semibold">{r.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">Секрет, который многие пропускают</p>
            <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.5]">
              Требуй, чтобы Claude сам прошёл весь путь оплаты тестовым платежом. Не соглашайся на «готово» без проверки. И всегда явно пиши, чего ты НЕ хочешь - иначе он может включить live mode или дать ключ с полными правами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
