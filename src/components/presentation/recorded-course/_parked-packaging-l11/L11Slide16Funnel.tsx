import { useIsMobile } from "@/hooks/use-mobile";

const stages = [
  { name: "TOFU · Awareness", tag: "ХОЛОДНЫЕ · НЕ ЗНАЮТ ТЕБЯ", goal: "Узнать что ты существуешь", tools: "Реклама в Meta / TikTok · контент в соцсетях · посты фаундера · подкасты", metric: "Reach · impressions · CPM" },
  { name: "MOFU · Consideration", tag: "ЗНАЮТ · НЕ УВЕРЕНЫ", goal: "Понять как ты решаешь их проблему", tools: "Лендинг · вебинары · кейсы клиентов · email-серия · DM-диалог", metric: "CTR · time-on-site · email open · meetings booked" },
  { name: "BOFU · Conversion", tag: "ДОВЕРЯЮТ · ВЫБИРАЮТ", goal: "Принять решение и заплатить", tools: "Demo-звонок · триал · оффер · отзывы клиентов · гарантии", metric: "Trial → paid · close rate · CAC" },
  { name: "Retention · Loyalty", tag: "ПЛАТЯТ · ПРОДЛЕВАЮТ", goal: "Возвращаться и привести друзей", tools: "Onboarding · фичи · комьюнити · реферальная программа", metric: "D30 retention · NPS · LTV · referrals" },
];

export default function L11Slide16Funnel() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Воронка маркетинга 101
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Где сейчас твои люди — и <span className="text-[hsl(var(--slide-gold))]">что им нужно</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Реклама в TOFU, продающее письмо в BOFU. Перепутаешь стадию — сольёшь бюджет.
        </p>
        <div className="space-y-[4px]">
          {stages.map((s) => (
            <div key={s.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[4px]">
              <div className="flex items-baseline justify-between gap-[4px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{s.name}</p>
                <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))]">{s.tag}</p>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.35]"><b className="text-[hsl(var(--slide-gold))]">Цель:</b> {s.goal}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]"><b>Инструменты:</b> {s.tools}</p>
              <p className="text-[7px] text-[hsl(var(--slide-gold)/0.8)] leading-[1.35] italic">Метрика: {s.metric}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Воронка маркетинга 101 · базовое понимание
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
        Где сейчас твои люди — и <span className="text-[hsl(var(--slide-gold))]">что им нужно на каждой стадии</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1600px]">
        Реклама работает в TOFU. Продающее письмо — в BOFU. Перепутаешь стадию — сольёшь бюджет и не поймёшь почему.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        {stages.map((s) => (
          <div key={s.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[16px]">
            <div className="flex items-baseline justify-between gap-[8px] mb-[6px]">
              <p className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))]">{s.name}</p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))]">{s.tag}</p>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45] mb-[4px]"><b className="text-[hsl(var(--slide-gold))]">Цель: </b>{s.goal}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[4px]"><b>Инструменты: </b>{s.tools}</p>
            <p className="text-[14px] text-[hsl(var(--slide-gold)/0.85)] leading-[1.4] italic">Метрика: {s.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
