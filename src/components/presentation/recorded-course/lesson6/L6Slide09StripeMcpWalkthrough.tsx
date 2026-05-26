import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const stripePrompt = `Подключи Stripe для $19 мини-курса.

Контекст:
- Продукт: «The Founders Circle mini-course», digital download
- Цена: $19 single payment (не подписка)
- Currency: USD, accept cards + Apple Pay + Google Pay
- Email collection: ON (нужно для активации в боте после оплаты)
- Success redirect: https://founders-circle.space/mini-course/thank-you
- Restricted key role: только products / prices / payment_links / customers.read

Что сделай через Stripe MCP:
1. Создай Product с описанием
2. Создай Price ($19 USD one-time)
3. Создай Payment Link с email collection и success URL
4. Создай restricted key с минимально необходимыми правами
5. Верни мне: product_id, price_id, payment_link_url, restricted_key

Что НЕ делай:
- Не активируй live mode пока я не подтверждаю (test mode сначала)
- Не создавай webhook endpoint в этой сессии — это отдельная задача
- Restricted key — не unrestricted. Минимум прав.`;

const result = [
  { label: "product_id", value: "prod_TFC_minicourse" },
  { label: "price_id", value: "price_1NbXXXXXXXX" },
  { label: "payment_link", value: "buy.stripe.com/cNibJ1gLKfaOb..." },
  { label: "key role", value: "restricted · products + prices + payment_links" },
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
          Walkthrough · Stripe MCP
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Реальный кейс TFC mini-course
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[5px] leading-[1.4]">
          Один промпт → Product + Price + Payment Link + restricted key. Без UI Stripe, без копирования ID.
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
        <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Что Claude вернул</p>
        <div className="grid grid-cols-2 gap-[3px]">
          {result.map((r) => (
            <div key={r.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[5px] py-[3px]">
              <p className="text-[6px] uppercase text-[hsl(var(--slide-text-muted))] tracking-[0.1em]">{r.label}</p>
              <p className="text-[6.5px] font-mono text-[hsl(var(--slide-gold))] leading-[1.3]">{r.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Walkthrough · Stripe MCP
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Реальный кейс · <span className="text-[hsl(var(--slide-gold))]">TFC mini-course $19</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[16px] max-w-[1500px] leading-[1.45]">
        Один промпт → Product + Price + Payment Link + restricted key для бота. Без UI Stripe, без копирования ID, без забытых полей. Этот промпт я реально использовал для founders-circle.space.
      </p>

      <div className="grid grid-cols-[1.5fr_1fr] gap-[20px] max-w-[1700px]">
        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Промпт · скопируй и адаптируй</p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[18px] py-[14px] overflow-y-auto" style={{ maxHeight: "440px" }}>
            <pre className="text-[12px] font-mono text-[hsl(var(--slide-text))] leading-[1.65] whitespace-pre-wrap">{stripePrompt}</pre>
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
            <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Что Claude вернул</p>
            <div className="space-y-[6px]">
              {result.map((r) => (
                <div key={r.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[8px]">
                  <p className="text-[11px] uppercase text-[hsl(var(--slide-text-muted))] tracking-[0.14em] font-bold">{r.label}</p>
                  <p className="text-[13px] font-mono text-[hsl(var(--slide-gold))] leading-[1.4] mt-[2px]">{r.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[12px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">Ключевая фишка</p>
            <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.5]">
              Раздел «Что НЕ делай» — обязателен. Без него Claude может включить live mode или дать unrestricted key. Всегда явно говори про ограничения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
