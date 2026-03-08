import { useState } from "react";
import { Copy, Check, Building2, Smartphone, Send } from "lucide-react";

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-secondary border border-border/30 cursor-pointer hover:border-accent/40 transition-colors group"
    >
      <div className="min-w-0">
        <span className="text-[11px] text-muted-foreground block leading-tight">{label}</span>
        <span className="text-sm text-foreground font-medium block truncate">{value}</span>
      </div>
      <button className="shrink-0 p-1 rounded text-muted-foreground group-hover:text-accent transition-colors">
        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
      </button>
    </div>
  );
}

export default function Register() {
  return (
    <div className="h-screen bg-background text-foreground flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl w-full px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-1">
            The Founders Circle
          </p>
          <h1 className="text-3xl font-bold leading-tight mb-1">
            Регистрация
          </h1>
          <p className="text-sm text-muted-foreground">
            Старт — <span className="text-accent font-semibold">16 марта 2026</span>
          </p>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="border border-accent/30 rounded-xl p-4 bg-accent/[0.03]">
            <h3 className="text-lg font-bold mb-0.5">Акселератор</h3>
            <p className="text-xs text-muted-foreground mb-3">Полная программа · 3 месяца</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-accent">₪4,500</span>
              <span className="text-xs text-muted-foreground">за программу</span>
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-lg font-bold text-accent/80">₪2,000</span>
              <span className="text-xs text-muted-foreground">/ мес × 3</span>
            </div>
          </div>
          <div className="border border-border rounded-xl p-4 bg-secondary/50">
            <h3 className="text-lg font-bold mb-0.5">Консультация</h3>
            <p className="text-xs text-muted-foreground mb-3">Разовая сессия · 60 минут</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">₪600</span>
              <span className="text-xs text-muted-foreground">/ сессия</span>
            </div>
          </div>
        </div>

        {/* Payment options */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Bank */}
          <div className="border border-border rounded-xl p-4">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Building2 size={16} className="text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight">Банковский перевод</h3>
                <p className="text-[11px] text-muted-foreground">העברה בנקאית</p>
              </div>
            </div>
            <div className="space-y-1.5">
              <CopyField label="בנק" value="בנק לאומי" />
              <CopyField label="סניף" value="999" />
              <CopyField label="מספר חשבון" value="5054163" />
              <CopyField label="שם בעל החשבון" value="ברבריצ׳י מיכאל" />
            </div>
          </div>

          {/* Bit */}
          <div className="border border-border rounded-xl p-4">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Smartphone size={16} className="text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight">Bit</h3>
                <p className="text-[11px] text-muted-foreground">ביט</p>
              </div>
            </div>
            <div className="space-y-1.5 mb-3">
              <CopyField label="מספר טלפון" value="0552221422" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Откройте приложение Bit и переведите на указанный номер
            </p>
          </div>
        </div>

        {/* Telegram */}
        <div className="border border-accent/30 rounded-xl p-4 bg-accent/[0.04] mb-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-2.5 flex-1">
              <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                <Send size={16} className="text-accent" />
              </div>
              <p className="text-sm font-semibold">
                Отправьте скриншот оплаты в Telegram
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <CopyField label="Telegram" value="@mbarbarich" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground leading-relaxed">
          После подтверждения оплаты вы будете добавлены в закрытый чат участников с деталями к старту
        </p>
      </div>
    </div>
  );
}
