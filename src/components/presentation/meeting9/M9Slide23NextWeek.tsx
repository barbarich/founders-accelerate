import { useIsMobile } from "@/hooks/use-mobile";

const m10 = [
  "Продажи для фаундеров — от первого DM до закрытой сделки",
  "Холодные письма и LinkedIn-сообщения, которые открывают",
  "Структура продающего демо-звонка за 15 минут",
  "Работа с возражениями: «дорого», «не сейчас», «а у конкурентов...»",
];

const m11 = [
  "Платный трафик: Meta Advantage+, Google PMax, TikTok Smart+",
  "Growth-механики: реферальные программы, вирусные петли",
  "Автоматизация рутины через Zapier, Make, n8n",
  "Как читать метрики и не выключить кампанию слишком рано",
];

export default function M9Slide23NextWeek() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Дальше · M10 + M11</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Маркетинг-блок — три встречи. Это только первая.
        </h2>
        <div className="space-y-[6px] mb-[8px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
            <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Неделя 10 · Продажи</p>
            <div className="space-y-[2px]">
              {m10.map((t, i) => (
                <p key={i} className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {t}</p>
              ))}
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
            <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Неделя 11 · Платный трафик и growth</p>
            <div className="space-y-[2px]">
              {m11.map((t, i) => (
                <p key={i} className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {t}</p>
              ))}
            </div>
          </div>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Без запуска на этой неделе — следующие две встречи разбирать будет нечего.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Дальше · M10 + M11</p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px] tracking-[-0.02em]">
        Маркетинг-блок — три встречи. <span className="text-[hsl(var(--slide-gold))]">Это только первая.</span>
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px] mb-[24px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Неделя 10 · Продажи</p>
          <div className="space-y-[8px]">
            {m10.map((t, i) => (
              <p key={i} className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>{t}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Неделя 11 · Платный трафик и growth</p>
          <div className="space-y-[8px]">
            {m11.map((t, i) => (
              <p key={i} className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>{t}
              </p>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1700px] leading-[1.4]">
        Без реального запуска на этой неделе — следующие две встречи разбирать будет нечего. Не пропусти эту.
      </p>
    </div>
  );
}
