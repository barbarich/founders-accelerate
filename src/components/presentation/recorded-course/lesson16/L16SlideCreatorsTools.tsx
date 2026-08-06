import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  { t: "Modash", p: "Instagram и TikTok", d: "Ищешь креатора по нише и размеру аудитории - сразу видно охваты, вовлечённость и есть ли накрутка. 14 дней бесплатно, этого хватает на первые 10-15." },
  { t: "HypeAuditor", p: "Проверка, если сомневаешься", d: "Второе мнение по той же странице креатора: своя бесплатная проверка на живых подписчиков, если Modash показал пограничный результат." },
  { t: "TGStat", p: "Telegram отдельно", d: "Modash и HypeAuditor в Telegram не смотрят - там свой сервис. Рост подписчиков, охваты постов, живая ли аудитория канала." },
];

export default function L16SlideCreatorsTools() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Инфлюенсеры · где искать
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          3 сервиса вместо ручного поиска
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Не листай профили вручную - эти сервисы ищут и проверяют за тебя. Базовые данные у всех бесплатны.
        </p>
        <div className="space-y-[5px]">
          {tools.map((t) => (
            <div key={t.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <div className="flex items-baseline justify-between">
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{t.t}</p>
                <p className="text-[8px] font-mono text-[hsl(var(--slide-gold))]">{t.p}</p>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{t.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Инфлюенсеры · где искать
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px] tracking-[-0.01em]">
        3 сервиса <span className="text-[hsl(var(--slide-gold))]">вместо ручного поиска</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[22px] max-w-[1800px]">
        Не листай профили вручную - эти сервисы ищут и проверяют за тебя. Базовые данные у всех бесплатны.
      </p>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1900px]">
        {tools.map((t) => (
          <div key={t.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[18px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[21px] font-bold text-[hsl(var(--slide-text))]">{t.t}</p>
            <p className="text-[14px] font-mono text-[hsl(var(--slide-gold))] mb-[8px]">{t.p}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{t.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
