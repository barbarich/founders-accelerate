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
      className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-secondary border border-border/30 cursor-pointer hover:border-accent/40 transition-colors group"
    >
      <div className="min-w-0">
        <span className="text-xs text-muted-foreground block">{label}</span>
        <span className="text-base text-foreground font-medium block truncate">{value}</span>
      </div>
      <button className="shrink-0 p-1.5 rounded text-muted-foreground group-hover:text-accent transition-colors">
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
      </button>
    </div>
  );
}

export default function Register() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">
            The Founders Circle
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Регистрация
          </h1>
          <p className="text-lg text-muted-foreground">
            Старт программы — <span className="text-accent font-semibold">16 марта 2026</span>
          </p>
        </div>

        {/* Step 1: Payment */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold text-accent/30 font-mono">01</span>
            <h2 className="text-2xl font-bold">Оплата участия</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Bank transfer */}
            <div className="border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Building2 size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Банковский перевод</h3>
                  <p className="text-sm text-muted-foreground">העברה בנקאית</p>
                </div>
              </div>

              <div className="space-y-2">
                <CopyField label="בנק" value="בנק לאומי" />
                <CopyField label="סניף" value="999" />
                <CopyField label="מספר חשבון" value="5054163" />
                <CopyField label="שם בעל החשבון" value="ברבריצ׳י מיכאל" />
              </div>
            </div>

            {/* Bit */}
            <div className="border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Smartphone size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Bit</h3>
                  <p className="text-sm text-muted-foreground">ביט</p>
                </div>
              </div>

              <div className="space-y-2 mb-5">
                <CopyField label="מספר טלפון" value="0552221422" />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Откройте приложение Bit и переведите на указанный номер
              </p>
            </div>
          </div>
        </div>

        {/* Step 2: Telegram */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold text-accent/30 font-mono">02</span>
            <h2 className="text-2xl font-bold">Отправьте скриншот оплаты</h2>
          </div>

          <div className="border border-accent/30 rounded-2xl p-6 bg-accent/[0.04]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                  <Send size={20} className="text-accent" />
                </div>
                <p className="text-lg font-semibold">
                  Напишите мне в Telegram со скриншотом оплаты
                </p>
              </div>
              <div className="w-full sm:w-auto">
                <CopyField label="Telegram" value="@mbarbarich" />
              </div>
            </div>
          </div>
        </div>

        {/* What happens next */}
        <div className="text-center border-t border-border pt-10">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="text-2xl font-bold text-accent/30 font-mono">03</span>
            <h2 className="text-2xl font-bold">Что дальше</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
            После подтверждения оплаты вы будете добавлены в закрытый чат участников, 
            где получите все детали к старту акселератора
          </p>
        </div>
      </div>
    </div>
  );
}
