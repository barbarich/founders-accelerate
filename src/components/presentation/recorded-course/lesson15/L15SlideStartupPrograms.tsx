import { useIsMobile } from "@/hooks/use-mobile";

const programs = [
  { name: "AWS Activate", tag: "ОБЛАКО · БЕЗ VC", body: "$1-5K кредитов на старте без акселератора и инвестиций, до $100K через партнёрскую программу. Bedrock, EC2, 200+ сервисов." },
  { name: "Google for Startups", tag: "ОБЛАКО · БЕЗ VC", body: "От $2K на MVP-тире без инвестиций, до $200K на seed-тире. Vertex AI, Gemini, BigQuery." },
  { name: "Microsoft for Startups", tag: "ОБЛАКО + AI · БЕЗ VC", body: "До $150K Azure-кредитов без венчурных денег. Плюс GitHub Enterprise и Microsoft 365 бесплатно." },
  { name: "Mixpanel for Startups", tag: "АНАЛИТИКА", body: "Год Mixpanel бесплатно, до 1 млрд событий. Условие: моложе 5 лет и привлекли меньше $8M (или вообще ничего)." },
  { name: "Notion for Startups", tag: "ИНСТРУМЕНТЫ КОМАНДЫ", body: "Notion Business бесплатно на 6 месяцев — экономия до $12K, плюс Notion AI." },
  { name: "HubSpot for Startups", tag: "CRM", body: "До 90% скидки на CRM в первый год — та же таблица лидов из урока 13, но с автоматизацией." },
];

export default function L15SlideStartupPrograms() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Прежде чем поднимать раунд
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Стартап-кредиты закрывают базовые косты <span className="text-[hsl(var(--slide-gold))]">бесплатно</span>
        </h2>
        <div className="grid grid-cols-2 gap-[5px] mb-[8px]">
          {programs.map((p) => (
            <div key={p.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[6px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{p.name}</p>
              <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[2px]">{p.tag}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
          Быстрый старт: Stripe Atlas ($500 инкорпорация в США) сразу открывает доступ к AWS и Notion. Условия программ меняются — проверяй перед подачей.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Прежде чем поднимать раунд
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.02em]">
        Стартап-кредиты закрывают базовые косты <span className="text-[hsl(var(--slide-gold))]">бесплатно</span>
      </h2>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1900px] mb-[22px]">
        {programs.map((p) => (
          <div key={p.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[24px] py-[18px]">
            <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[2px]">{p.name}</p>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[8px]">{p.tag}</p>
            <p className="text-[14.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">{p.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1900px]">
        Быстрый старт: Stripe Atlas ($500 инкорпорация в США) сразу открывает доступ к AWS и Notion в одном дашборде. Условия программ меняются — проверяй перед подачей.
      </p>
    </div>
  );
}
