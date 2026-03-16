import { useState } from "react";

export default function M1Slide08PerplexityPrompts() {
  const [copied, setCopied] = useState(false);
  const docLink = "https://docs.google.com/document/d/1QXfWLylXNDEWcsMxq3Qx5ydOA0qtpqE2UOKNPlwdAGk/edit?usp=sharing";

  const handleCopy = () => {
    navigator.clipboard.writeText(docLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const prompts = [
    { label: "Карта конкурентов", desc: "Найти топ-10 конкурентов с ценами, аудиторией и отличиями" },
    { label: "Слабые места", desc: "Жалобы пользователей на Reddit, G2, Trustpilot, Product Hunt" },
    { label: "Размер рынка", desc: "Объём рынка, темпы роста, тренды, инвесторы — с цифрами" },
    { label: "Кто платит", desc: "Должность, размер компании, бюджет — кто уже тратит деньги" },
    { label: "Позиционирование", desc: "5 углов отстройки от конкретных конкурентов" },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Шаблоны запросов для ИИ
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
        5 готовых промптов для исследования
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[40px]">
        Работают в Perplexity, ChatGPT, Claude, Gemini — подставьте свой продукт и запустите
      </p>

      <div className="grid grid-cols-5 gap-[16px] mb-[40px]">
        {prompts.map((p, i) => (
          <div key={i} className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.15)] rounded-[12px] p-[20px] flex flex-col gap-[8px]">
            <div className="flex items-center gap-[10px]">
              <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] w-[32px] h-[32px] rounded-full flex items-center justify-center shrink-0 font-bold">
                {i + 1}
              </span>
              <span className="text-[19px] font-semibold text-[hsl(var(--slide-text))]">{p.label}</span>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Link block */}
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[16px] p-[28px] flex items-center justify-between">
        <div>
          <p className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">
            📄 Документ с промптами — скопируйте ссылку и отправьте в чат
          </p>
          <p className="text-[17px] text-[hsl(var(--slide-text-muted))]">
            Все 5 шаблонов с пояснениями, готовы к использованию в любом ИИ
          </p>
        </div>
        <button
          onClick={handleCopy}
          className="shrink-0 ml-[24px] px-[28px] py-[14px] rounded-[10px] font-semibold text-[18px] transition-all duration-200"
          style={{
            background: copied
              ? "hsl(var(--slide-gold))"
              : "hsl(var(--slide-gold) / 0.15)",
            color: copied
              ? "hsl(var(--slide-bg))"
              : "hsl(var(--slide-gold))",
            border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
          }}
        >
          {copied ? "✓ Скопировано!" : "📋 Копировать ссылку"}
        </button>
      </div>
    </div>
  );
}
