import { useIsMobile } from "@/hooks/use-mobile";

const blocks = [
  {
    t: "Identity",
    body: "Facebook Page + Instagram аккаунт. Если IG пустой — лучше выключить, чем показывать пустой профиль.",
  },
  {
    t: "Format",
    body: "Single image · Carousel · Video. Рекомендую микс: половина видео, половина статика. Andromeda сама выберет работающее.",
  },
  {
    t: "Media",
    body: "Грузим 5–10 креативов сразу. Dynamic Creative ON — Meta перемешивает заголовки + медиа + CTA.",
  },
  {
    t: "Primary text · 3–5 вариантов",
    body: "Короткий hook · длинный сториз · вопрос. Один Pain + один Outcome в каждом.",
  },
  {
    t: "Headlines · 3–5 вариантов",
    body: "Выгода / результат / соц.доказательство. Не «Mikey — приложение для знакомств». А «500 человек встретили партнёра за месяц».",
  },
  {
    t: "CTA",
    body: "Sign Up / Shop Now / Learn More / Send Message. Одно действие, без «или». Send Message — для WhatsApp-бот аренды (click-to-WhatsApp).",
  },
  {
    t: "Tracking · UTM в URL",
    body: "utm_source=meta · utm_campaign=… · utm_content={{ad.name}}. Без UTM в GA4 / Mixpanel ничего не увидишь.",
  },
  {
    t: "Preview во всех placement",
    body: "Feed · Story · Reels · Right Column. Проверяем что текст не обрезается, кнопка видна. 30 секунд экономии месяца боли.",
  },
];

export default function L12Slide09WorkshopAd() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Walkthrough · Шаг 3 · Ad · Dynamic Creative
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          5–10 креативов в одну группу. <span className="text-[hsl(var(--slide-gold))]">Meta микширует.</span>
        </h2>
        <div className="grid grid-cols-2 gap-[4px]">
          {blocks.map((b) => (
            <div key={b.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[4px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{b.t}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Walkthrough · Шаг 3 · Ad · Dynamic Creative
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        5–10 креативов в одну группу. <span className="text-[hsl(var(--slide-gold))]">Meta микширует.</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[20px] max-w-[1600px]">
        Грузишь медиа из домашки L11. Тексты — Claude / GPT генерит за 5 минут. Главное — объём вариантов, не идеальность одного.
      </p>
      <div className="grid grid-cols-4 gap-[14px] max-w-[1700px]">
        {blocks.map((b) => (
          <div key={b.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[18px] py-[14px]">
            <p className="text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[6px]">{b.t}</p>
            <p className="text-[13.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">{b.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
