import { useState } from "react";
import FOM2SlideBase from "./FOM2SlideBase";

const PROMPT = `Действуй как senior pricing strategist, который ставил цены для 50+ ранних B2B и B2C продуктов. Помоги мне назначить ПЕРВУЮ цену — не «правильную», а ту, с которой можно выйти и быстро откорректировать.

Контекст продукта:
- Что я делаю: [одно предложение, что продукт делает]
- Главный измеримый результат для клиента: [сколько денег / времени / нервов экономит или приносит]
- Целевой клиент (ICP): [кто платит]
- Сегмент: [B2C / SMB / Mid-Market / Enterprise]
- Как часто клиент использует: [каждый день / раз в неделю / раз в проект / раз в год]

Конкуренты:
- Прямой #1: [имя], цена: [сколько], модель: [подписка/usage/one-time/freemium]
- Прямой #2: [имя], цена: [сколько], модель: [...]
- «Замена» (Excel, ChatGPT, ручной процесс): [как сейчас люди решают эту проблему без специализированного продукта, во сколько это им обходится]

Что я НЕ хочу:
- цены «как у всех»
- цены, под которые мне неудобно сказать вслух
- demo-only без self-serve тарифа (если контекст это позволяет)

Дай мне:
1. РЕКОМЕНДОВАННАЯ МОДЕЛЬ монетизации (subscription / usage / one-time / freemium / hybrid) — с обоснованием почему именно эта под мой контекст. Не "это популярно", а почему именно для моего use-case.
2. 3 ТАРИФА: Дешёвый (для входа) · Средний (основной доход, отметить как Recommended) · Дорогой (якорь). По каждому: цена в $, что входит, для кого. Используй магию девятки.
3. ОБОСНОВАНИЕ СРЕДНЕЙ ЦЕНЫ: посчитай «ценность результата» для клиента (сколько он сэкономит/заработает в месяц) и покажи, какой % от этой ценности я беру. Целевой диапазон: 5–15% для SaaS, 10–30% для outcome-based.
4. 3 АРГУМЕНТА «ПОЧЕМУ ИМЕННО СТОЛЬКО» для разговора с клиентом, который скажет «дорого».
5. КРАСНЫЕ ФЛАГИ моей текущей модели/цены (если я что-то выше указал) и что с этим делать.
6. ПЛАН ИТЕРАЦИЙ: какие 2 метрики я меряю первые 30 дней, чтобы понять — поднять цену или опустить.`;

export default function FOM2Slide13PricingPrompt() {
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
      slide={13}
      eyebrow="AI-as-pricing-strategist · промпт #2"
      title="Найди мою первую цену"
      subtitle="Не «правильную», а ту, с которой можно выйти и итерировать"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-[12px] md:gap-[20px] max-w-[1800px] text-[11px] md:text-[20px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] p-[12px] md:p-[20px]">
          <div className="flex items-center justify-between gap-[10px] mb-[6px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">
              Pricing-strategist промпт
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
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Принцип «ценности результата»</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              Если ваш продукт экономит клиенту $1000/мес, цена $99/мес — это 10%. Это легко продать. Цена $499 — придётся обосновывать ROI. Цена $9 — клиент усомнится в качестве.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Запускайте дороже, чем «удобно»</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              Поднять цену через 3 месяца с обоснованием «теперь продукт делает X и Y» — нормально. Поднимать с $9 до $49 — психологически почти невозможно. Стартуйте на 30% выше «удобной» цифры.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">2 метрики первого месяца</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              <span className="font-semibold">Conversion rate</span> на тарифе (если 30%+ — цена низкая) и <span className="font-semibold">скорость возражений по цене</span> в первых 10 разговорах. Никаких «давайте через 6 месяцев померим».
            </p>
          </div>
        </div>
      </div>
    </FOM2SlideBase>
  );
}
