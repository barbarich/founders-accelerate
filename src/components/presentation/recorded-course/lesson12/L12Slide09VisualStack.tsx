import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  { name: "ChatGPT (Sora) / Nano Banana", tag: "HERO-КАРТИНКИ · ИЛЛЮСТРАЦИИ", body: "Концепты, hero-визуалы, любые иллюстрации под лендинг и рекламу. Бесплатно или $20/мес." },
  { name: "Higgsfield AI", tag: "КИНОСТАЙЛ ВИДЕО · АД-КРЕАТИВЫ", body: "Cinematic-видео с контролем персонажа и камеры. Сделан под рекламу — лучше Sora для performance-креативов." },
  { name: "Kling / Veo 3", tag: "ВИДЕО ИЗ ТЕКСТА И КАРТИНКИ", body: "Короткие ролики для Meta, TikTok, YouTube Shorts. Kling быстрее, Veo 3 кинематографичнее." },
  { name: "Canva (с AI)", tag: "БАННЕРЫ · СОЦСЕТИ · КАРУСЕЛИ", body: "Все форматы соцсетей разом, шаблоны под рекламу, brand kit. Бесплатно или $13/мес." },
  { name: "HeyGen + AI UGC-актёры", tag: "АВАТАР · UGC-ВИДЕО", body: "Свой AI-аватар или готовые «лица» для рекламных видео без съёмок. $24+/мес." },
  { name: "Claude / GPT-5", tag: "КОПИРАЙТИНГ · HOOKS · CTA", body: "Hero-headlines, ad-copy, описания фич. С хорошим промптом — на уровне джуниора-копирайтера, бесплатно." },
];

export default function L12Slide09VisualStack() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Кит 2 · Визуалы · AI-стек 2026
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Дизайнер не нужен — <span className="text-[hsl(var(--slide-gold))]">AI делает за вечер</span>
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          То, что раньше занимало неделю с дизайнером — сейчас собирается за вечер. Стек, которым я пользуюсь:
        </p>
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
        Кит 2 · Визуалы · AI-стек 2026
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
        Дизайнер не нужен — <span className="text-[hsl(var(--slide-gold))]">AI делает за вечер</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1600px]">
        То, что раньше занимало неделю с дизайнером — сейчас собирается за вечер. Стек, на котором я делаю всю упаковку в 2026:
      </p>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1700px]">
        {tools.map((t) => (
          <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[24px] py-[16px]">
            <p className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">{t.name}</p>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[8px]">{t.tag}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{t.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
