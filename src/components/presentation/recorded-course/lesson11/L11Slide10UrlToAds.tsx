import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  { name: "Canva · Magic Studio", tag: "БАННЕРЫ · СОЦСЕТИ · КАРУСЕЛИ", body: "Все форматы разом, шаблоны под рекламу, brand kit держит один стиль. Дизайн без дизайнера. $0–13/мес." },
  { name: "Memes AI Studio", tag: "РЕКЛАМА ИЗ МЕМОВ", body: "Даёшь ссылку на лендинг - получаешь мем-объявления. Выглядят как контент, а не реклама: дешевле клик, выше CTR. templates.memes.com" },
  { name: "Midjourney / Flux", tag: "HERO-КАРТИНКИ · ФОНЫ", body: "Концепты и hero-визуалы под лендинг и рекламу в едином стиле под твою палитру. От $10/мес." },
  { name: "Claude / ChatGPT", tag: "КОПИРАЙТ · HOOKS · CTA", body: "Заголовки, тексты объявлений, описания фич. С хорошим промптом - на уровне джуниора-копирайтера." },
];

export default function L11Slide10UrlToAds() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          AI-дизайн · инструменты
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Баннеры, картинки, тексты - <span className="text-[hsl(var(--slide-gold))]">AI за вечер</span>
        </h2>
        <div className="grid grid-cols-2 gap-[5px]">
          {tools.map((t) => (
            <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[5px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{t.name}</p>
              <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[2px]">{t.tag}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        AI-дизайн · инструменты фаундера
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em]">
        Баннеры, картинки, тексты - <span className="text-[hsl(var(--slide-gold))]">AI за вечер</span>
      </h2>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1700px]">
        {tools.map((t) => (
          <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[16px]">
            <div className="flex items-baseline justify-between gap-[10px] mb-[2px]">
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{t.name}</p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] shrink-0">{t.tag}</p>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{t.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
