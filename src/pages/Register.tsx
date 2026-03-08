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
      className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg bg-secondary border border-border/30 cursor-pointer hover:border-accent/40 active:border-accent/60 transition-colors group"
    >
      <div className="min-w-0">
        <span className="text-[11px] text-muted-foreground block leading-tight">{label}</span>
        <span className="text-sm text-foreground font-medium block">{value}</span>
      </div>
      <button className="shrink-0 p-1.5 rounded text-muted-foreground group-hover:text-accent transition-colors">
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
      </button>
    </div>
  );
}

export default function Register() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-1">
            The Founders Circle
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-1">
            Регистрация
          </h1>
          <p className="text-sm text-muted-foreground">
            Старт — <span className="text-accent font-semibold">16 марта 2026</span>
          </p>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 sm:mb-5">
          <div className="border border-accent/30 rounded-xl p-4 bg-accent/[0.03] flex sm:block items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1 sm:mb-2">Помесячная оплата</p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-accent">₪2,000</span>
                <span className="text-xs text-muted-foreground">/ мес</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground sm:mt-1">3 платежа за программу</p>
          </div>
          <div className="border border-accent/30 rounded-xl p-4 bg-accent/[0.03] flex sm:block items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1 sm:mb-2">Вся программа сразу</p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-accent">₪4,500</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground sm:mt-1">3 месяца · экономия ₪1,500</p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-secondary/50 flex sm:block items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1 sm:mb-2">Разовая консультация</p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold">₪600</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground sm:mt-1">60 минут · 1 сессия</p>
          </div>
        </div>

        {/* Payment options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:mb-4">
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
              <CopyField label="Банк" value="בנק לאומי" />
              <CopyField label="Отделение" value="999" />
              <CopyField label="Номер счёта" value="5054163" />
              <CopyField label="Имя владельца" value="ברבריצ׳י מיכאל" />
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
              <CopyField label="Номер телефона" value="0552221422" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Откройте приложение Bit и переведите на указанный номер
            </p>
          </div>
        </div>

        {/* Telegram */}
        <div className="border border-accent/30 rounded-xl p-4 bg-accent/[0.04] mb-5">
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
        <p className="text-center text-xs text-muted-foreground leading-relaxed pb-4">
          После подтверждения оплаты вы будете добавлены в закрытый чат участников с деталями к старту
        </p>
      </div>
    </div>
  );
}
