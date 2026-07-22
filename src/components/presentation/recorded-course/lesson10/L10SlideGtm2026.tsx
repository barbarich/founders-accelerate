import { useIsMobile } from "@/hooks/use-mobile";

const insights = [
  { t: "Концентрация, не распыление", d: "На старте 1-2 канала, доведённые до результата, бьют десять по чуть-чуть. Проверено в 2026 на ранних стартапах." },
  { t: "Founder-led первые ~12 месяцев", d: "Твой личный контент и твои личные продажи - главный канал, особенно в B2B. Люди покупают у человека, за которым следят." },
  { t: "Community-led", d: "Прямые отношения с сообществом (Telegram, Discord, LinkedIn, живые группы) - твой актив, который снижает отток и растит сарафан." },
  { t: "AEO - новый SEO", d: "Покупатели ищут через ChatGPT, Perplexity, Claude. Попадай в их ответы: отзывы, обсуждения, упоминания, свой контент по теме." },
  { t: "Живые события + тёплый outbound", d: "Интимные оффлайн-встречи и точечный тёплый аутрич дают лучший ROI, чем холодные массовые рассылки." },
];

export default function L10SlideGtm2026() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Что работает в GTM · середина 2026
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Выигрывает <span className="text-[hsl(var(--slide-gold))]">концентрация и человек</span>, а не бюджет.
        </h2>
        <div className="space-y-[4px]">
          {insights.map((i) => (
            <div key={i.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[9px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] leading-[1.15]">{i.t}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[34px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Что работает в GTM · середина 2026
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em]">
        Выигрывает <span className="text-[hsl(var(--slide-gold))]">концентрация и человек</span>, а не бюджет.
      </h2>
      <div className="space-y-[11px] max-w-[1750px]">
        {insights.map((i) => (
          <div key={i.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[26px] py-[12px] flex items-baseline gap-[24px]">
            <p className="text-[21px] font-bold text-[hsl(var(--slide-gold))] w-[420px] shrink-0 leading-[1.15]">{i.t}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4] flex-1">{i.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
