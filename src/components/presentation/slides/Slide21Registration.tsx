import { useState } from "react";
import { Copy, Check, Building2, Smartphone, Send } from "lucide-react";

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className="flex items-center justify-between gap-[12px] px-[16px] py-[10px] rounded-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] cursor-pointer hover:border-[hsl(var(--slide-gold)/0.4)] transition-colors group"
    >
      <div className="min-w-0">
        <span className="text-[13px] text-[hsl(var(--slide-text-muted))] block">{label}</span>
        <span className="text-[18px] text-[hsl(var(--slide-text))] font-medium block truncate">{value}</span>
      </div>
      <button className="shrink-0 p-[6px] rounded-[6px] text-[hsl(var(--slide-text-muted))] group-hover:text-[hsl(var(--slide-gold))] transition-colors">
        {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
      </button>
    </div>
  );
}

export default function Slide21Registration() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(38_45%_58%/0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[1400px] w-full px-[60px]">
        {/* Header */}
        <div className="text-center mb-[56px]">
          <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
            Шаг 1
          </p>
          <h2 className="text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">
            Оплата участия
          </h2>
          <p className="text-[22px] text-[hsl(var(--slide-text-muted))]">
            Выберите удобный способ оплаты
          </p>
        </div>

        {/* Payment options */}
        <div className="flex gap-[40px] mb-[48px]">
          {/* Bank transfer */}
          <div className="flex-1 border border-[hsl(var(--slide-border)/0.4)] rounded-[16px] p-[36px]">
            <div className="flex items-center gap-[14px] mb-[28px]">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-[hsl(var(--slide-gold)/0.1)] flex items-center justify-center">
                <Building2 size={22} className="text-[hsl(var(--slide-gold))]" />
              </div>
              <div>
                <h3 className="text-[24px] font-bold text-[hsl(var(--slide-text))]">Банковский перевод</h3>
                <p className="text-[15px] text-[hsl(var(--slide-text-muted))]">העברה בנקאית</p>
              </div>
            </div>

            <div className="space-y-[10px]">
              <CopyField label="בנק" value="בנק לאומי" />
              <CopyField label="סניף" value="999" />
              <CopyField label="מספר חשבון" value="5054163" />
              <CopyField label="שם בעל החשבון" value="ברבריצ׳י מיכאל" />
            </div>
          </div>

          {/* Bit */}
          <div className="flex-1 border border-[hsl(var(--slide-border)/0.4)] rounded-[16px] p-[36px]">
            <div className="flex items-center gap-[14px] mb-[28px]">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-[hsl(var(--slide-gold)/0.1)] flex items-center justify-center">
                <Smartphone size={22} className="text-[hsl(var(--slide-gold))]" />
              </div>
              <div>
                <h3 className="text-[24px] font-bold text-[hsl(var(--slide-text))]">Bit</h3>
                <p className="text-[15px] text-[hsl(var(--slide-text-muted))]">ביט</p>
              </div>
            </div>

            <div className="space-y-[10px] mb-[28px]">
              <CopyField label="מספר טלפון" value="0552221422" />
            </div>

            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
              Откройте приложение Bit и переведите на указанный номер
            </p>
          </div>
        </div>

        {/* Step 2: Telegram */}
        <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-[16px] p--[32px] p-[32px] bg-[hsl(var(--slide-gold)/0.04)]">
          <div className="flex items-center gap-[40px]">
            <div className="flex items-center gap-[14px]">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-[hsl(var(--slide-gold)/0.15)] flex items-center justify-center">
                <Send size={22} className="text-[hsl(var(--slide-gold))]" />
              </div>
              <div>
                <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
                  Шаг 2
                </p>
                <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold">
                  Отправьте скриншот оплаты в Telegram
                </p>
              </div>
            </div>
            <div className="ml-auto">
              <CopyField label="Telegram" value="@mbarbarich" />
            </div>
          </div>
        </div>

        {/* After registration note */}
        <div className="text-center mt-[40px]">
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            После подтверждения оплаты вы будете добавлены в закрытый чат участников,<br />
            где получите все детали к старту акселератора
          </p>
        </div>
      </div>
    </div>
  );
}
