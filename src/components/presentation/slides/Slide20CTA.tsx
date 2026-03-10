import { QRCodeSVG } from "qrcode.react";
import { useIsMobile } from "@/hooks/use-mobile";

const REGISTER_URL = "https://founders-accelerate.lovable.app/register";

export default function Slide20CTA() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center items-center relative px-[28px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(38_45%_58%/0.06)_0%,transparent_70%)]" />
        <div className="relative z-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">Следующий шаг</p>
          <h2 className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">Как присоединиться</h2>
          <p className="text-[13px] text-[hsl(var(--slide-text-muted))] mb-[20px]">
            Старт — <span className="text-[hsl(var(--slide-gold))] font-semibold">16 марта 2026</span>
          </p>
          <div className="space-y-[10px] mb-[20px] text-left">
            {[
              { n: "01", t: "Отсканируйте QR-код", s: "Откроется страница с реквизитами" },
              { n: "02", t: "Оплатите участие", s: "Bit · перевод на счёт в Израиле" },
              { n: "03", t: "Отправьте скриншот в Telegram", s: "И получите доступ в закрытый чат" },
            ].map((step) => (
              <div key={step.n} className="flex items-start gap-[10px]">
                <span className="text-[14px] font-bold text-[hsl(var(--slide-gold)/0.3)] font-mono">{step.n}</span>
                <div>
                  <p className="text-[13px] text-[hsl(var(--slide-text))] font-medium">{step.t}</p>
                  <p className="text-[10px] text-[hsl(var(--slide-text)/0.5)]">{step.s}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[140px] h-[140px] bg-white rounded-[10px] flex items-center justify-center mb-[8px] p-[8px]">
              <QRCodeSVG value={REGISTER_URL} size={124} level="H" bgColor="white" fgColor="#1a1a1a" />
            </div>
             <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[12px]">Сканируйте для регистрации</p>
            </div>
            <a
              href="/register"
              className="inline-block bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] text-[14px] font-semibold px-[32px] py-[12px] rounded-[8px] transition-opacity hover:opacity-90"
            >
              Присоединиться
            </a>
            <a
              href="/program"
              className="inline-block border border-[hsl(var(--slide-gold)/0.5)] text-[hsl(var(--slide-gold))] text-[13px] font-medium px-[28px] py-[10px] rounded-[8px] transition-opacity hover:opacity-80 mt-[10px]"
            >
              Программа 1-го месяца
            </a>
          <p className="text-[10px] text-[hsl(var(--slide-gold)/0.7)] italic mt-[12px]">
            Количество мест ограничено — 5–7 человек в группе
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(38_45%_58%/0.06)_0%,transparent_70%)]" />
      <div className="relative z-10 flex gap-[100px] items-center max-w-[1500px]">
        <div className="flex-1">
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">Следующий шаг</p>
          <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px]">Как присоединиться</h2>
          <p className="text-[26px] text-[hsl(var(--slide-text-muted))] mb-[48px] leading-[1.5]">
            Старт программы — <span className="text-[hsl(var(--slide-gold))] font-semibold">16 марта 2026</span>
          </p>
          <div className="space-y-[24px] mb-[48px]">
            <div className="flex items-start gap-[20px]">
              <span className="text-[28px] font-bold text-[hsl(var(--slide-gold)/0.3)] font-mono mt-[-2px]">01</span>
              <div>
                <p className="text-[24px] text-[hsl(var(--slide-text))] font-medium">Отсканируйте QR-код</p>
                <p className="text-[18px] text-[hsl(var(--slide-text)/0.5)]">Откроется страница с реквизитами для оплаты</p>
              </div>
            </div>
            <div className="flex items-start gap-[20px]">
              <span className="text-[28px] font-bold text-[hsl(var(--slide-gold)/0.3)] font-mono mt-[-2px]">02</span>
              <div>
                <p className="text-[24px] text-[hsl(var(--slide-text))] font-medium">Оплатите участие</p>
                <p className="text-[18px] text-[hsl(var(--slide-text)/0.5)]">Bit · перевод на счёт в Израиле</p>
              </div>
            </div>
            <div className="flex items-start gap-[20px]">
              <span className="text-[28px] font-bold text-[hsl(var(--slide-gold)/0.3)] font-mono mt-[-2px]">03</span>
              <div>
                <p className="text-[24px] text-[hsl(var(--slide-text))] font-medium">Отправьте скриншот в Telegram</p>
                <p className="text-[18px] text-[hsl(var(--slide-text)/0.5)]">И получите доступ в закрытый чат участников</p>
              </div>
            </div>
          </div>
          <p className="text-[20px] text-[hsl(var(--slide-gold)/0.7)] italic">
            Количество мест ограничено — 5–7 человек в группе
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[320px] h-[320px] bg-white rounded-[16px] flex items-center justify-center mb-[24px] p-[20px]">
            <QRCodeSVG value={REGISTER_URL} size={280} level="H" bgColor="white" fgColor="#1a1a1a" />
          </div>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] text-center mb-[24px]">Сканируйте для<br />регистрации</p>
          <a
            href="/register"
            className="inline-block bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] text-[22px] font-semibold px-[48px] py-[16px] rounded-[10px] transition-opacity hover:opacity-90"
          >
            Присоединиться
          </a>
          <a
            href="/program"
            className="inline-block border border-[hsl(var(--slide-gold)/0.5)] text-[hsl(var(--slide-gold))] text-[18px] font-medium px-[40px] py-[14px] rounded-[10px] transition-opacity hover:opacity-80 mt-[16px]"
          >
            Программа 1-го месяца
          </a>
        </div>
      </div>
    </div>
  );
}
