import { useIsMobile } from "@/hooks/use-mobile";

const creation = [
  { name: "Lovable / v0", body: "лендинг", price: "$0–20/мес" },
  { name: "ChatGPT / Nano Banana", body: "hero-картинки", price: "$0–20/мес" },
  { name: "Higgsfield AI", body: "видео-креативы", price: "$9–29/мес" },
  { name: "Canva", body: "баннеры, соцсети", price: "$0–13/мес" },
  { name: "HeyGen", body: "AI-аватар, UGC", price: "$24+/мес" },
  { name: "AdCreative.ai", body: "URL → 100+ ад-креативов", price: "$29+/мес" },
  { name: "Claude / GPT-5", body: "копирайтинг, hooks, CTA", price: "$0–20/мес" },
];

const launch = [
  { name: "Apollo", body: "B2B · 500 ICP-контактов", price: "$49/мес" },
  { name: "Instantly", body: "B2B · warmup + отправка cold email", price: "$37/мес" },
  { name: "LinkedIn Helper", body: "B2B · второй канал outreach", price: "$15/мес" },
  { name: "Meta Ads · Advantage+", body: "B2C · холодный трафик", price: "от $20/день" },
  { name: "TikTok Smart+", body: "B2C · если ICP молодой", price: "от $20/день" },
  { name: "Mixpanel + GA4", body: "аналитика · must-have", price: "$0" },
  { name: "Meta + TikTok + Google пиксели", body: "ставятся до первого клика", price: "$0" },
];

export default function L12Slide20FullStack() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Полный стек одиночки-фаундера 2026
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Всё, чем я <span className="text-[hsl(var(--slide-gold))]">пользуюсь сегодня</span>
        </h2>
        <div className="grid grid-cols-2 gap-[5px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[6px] py-[5px]">
            <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Создание · упаковка</p>
            <div className="space-y-[2px]">
              {creation.map((t) => (
                <div key={t.name}>
                  <p className="text-[7px] font-bold text-[hsl(var(--slide-text))]">{t.name}</p>
                  <p className="text-[6px] text-[hsl(var(--slide-text-muted))]">{t.body} · <span className="text-[hsl(var(--slide-gold))]">{t.price}</span></p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[6px] py-[5px]">
            <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Запуск · трафик</p>
            <div className="space-y-[2px]">
              {launch.map((t) => (
                <div key={t.name}>
                  <p className="text-[7px] font-bold text-[hsl(var(--slide-text))]">{t.name}</p>
                  <p className="text-[6px] text-[hsl(var(--slide-text-muted))]">{t.body} · <span className="text-[hsl(var(--slide-gold))]">{t.price}</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Полный стек одиночки-фаундера 2026 · с ценами
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
        Всё, чем я <span className="text-[hsl(var(--slide-gold))]">пользуюсь сегодня</span> для упаковки и запуска
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[20px] max-w-[1600px]">
        Полный стек за ~$300/мес. Без команды. Без агентств. Применить руками за 90 минут — реально.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[20px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Создание · упаковка</p>
          <div className="space-y-[8px]">
            {creation.map((t) => (
              <div key={t.name} className="flex items-baseline justify-between gap-[12px] pb-[6px] border-b border-[hsl(var(--slide-border)/0.15)]">
                <div className="flex-1">
                  <p className="text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{t.name}</p>
                  <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{t.body}</p>
                </div>
                <p className="text-[14px] text-[hsl(var(--slide-gold))] font-mono">{t.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[20px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Запуск · трафик · аналитика</p>
          <div className="space-y-[8px]">
            {launch.map((t) => (
              <div key={t.name} className="flex items-baseline justify-between gap-[12px] pb-[6px] border-b border-[hsl(var(--slide-border)/0.15)]">
                <div className="flex-1">
                  <p className="text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{t.name}</p>
                  <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{t.body}</p>
                </div>
                <p className="text-[14px] text-[hsl(var(--slide-gold))] font-mono">{t.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
