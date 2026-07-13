import { useIsMobile } from "@/hooks/use-mobile";

const criteria = [
  { t: "Аудитория overlap", d: "Твоя ЦА = их ЦА. Не «они тоже стартап» — конкретный сегмент пересекается. Проверь в Twitter/LinkedIn followers" },
  { t: "Продукт complement", d: "Их продукт дополняет твой, а не конкурирует. Их клиент пользуется их продуктом → потом нуждается в твоём" },
  { t: "Размер 10-100×", d: "Партнёр должен быть в 10-100 раз больше тебя по аудитории. Но не в 1000× — они не заметят" },
  { t: "Контактный фаундер", d: "Фаундер партнёра должен быть достижим: Twitter DM, LinkedIn, email на сайте. Корпоративный BD-партнёр на старте — потеря времени" },
];

const where = [
  { t: "Twitter / LinkedIn", d: "Поищи в своей нише фаундеров с 10K+ followers, кто публикует похожий контент. Их аудитория уже релевантна" },
  { t: "AppSumo / Product Hunt past", d: "Продукты в твоей категории за последний год. Их фаундеры уже занимаются GTM и открыты к партнёрствам" },
  { t: "Slack/Discord communities", d: "Founder-комьюнити в твоей вертикали. Сначала вклад в комьюнити, потом партнёрский pitch" },
  { t: "Conferences / podcasts", d: "Гости в подкастах по твоей теме — уже фильтрованные публичные founders. Слушаешь, потом пишешь" },
];

export default function L15SlideFindPartner() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Где искать + по каким критериям
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Идеальный партнёр · 4+4
        </h2>
        <div className="space-y-[6px] mb-[8px]">
          <p className="text-[10px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold">4 критерия</p>
          {criteria.map((c) => (
            <div key={c.t} className="border-l-2 border-[hsl(var(--slide-gold)/0.4)] pl-[8px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{c.t}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="space-y-[6px]">
          <p className="text-[10px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold">4 канала</p>
          {where.map((w) => (
            <div key={w.t} className="border-l-2 border-[hsl(var(--slide-gold)/0.4)] pl-[8px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{w.t}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Где искать + по каким критериям
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
        Идеальный партнёр · <span className="text-[hsl(var(--slide-gold))]">4 критерия + 4 канала</span>
      </h2>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1900px]">
        <div>
          <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[14px]">4 критерия идеального партнёра</p>
          <div className="space-y-[12px]">
            {criteria.map((c) => (
              <div key={c.t} className="border-l-[3px] border-[hsl(var(--slide-gold)/0.4)] pl-[18px]">
                <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{c.t}</p>
                <p className="text-[15px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[14px]">4 канала где искать</p>
          <div className="space-y-[12px]">
            {where.map((w) => (
              <div key={w.t} className="border-l-[3px] border-[hsl(var(--slide-gold)/0.4)] pl-[18px]">
                <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{w.t}</p>
                <p className="text-[15px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
