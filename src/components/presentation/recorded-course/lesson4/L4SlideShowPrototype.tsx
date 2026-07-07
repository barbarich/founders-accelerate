import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { icon: "🔗", n: "01", title: "Опубликуй ссылку", text: "Lovable даёт живой URL в один клик - сервер не нужен. В Claude - поделись превью." },
  { icon: "📲", n: "02", title: "Дай ссылку в руки", text: "Другу, человеку из custdev, кому-то из ЦА. Пусть пройдёт сам, наедине." },
  { icon: "👀", n: "03", title: "Смотри молча", text: "Где застрял, куда нажал не туда, где нахмурился. Не подсказывай." },
];

export default function L4SlideShowPrototype() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Чтобы собрать фидбэк</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Дай людям потыкать самому
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[12px] leading-[1.5]">
          Прототип бесполезен на твоём экране. Опубликуй ссылку - и смотри, как им пользуются.
        </p>
        <div className="space-y-[8px] mb-[10px]">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-[10px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[8px]">
              <span className="text-[18px] shrink-0">{s.icon}</span>
              <div>
                <div className="flex items-center gap-[6px]">
                  <span className="font-mono text-[9px] text-[hsl(var(--slide-gold)/0.6)]">{s.n}</span>
                  <span className="text-[12px] font-semibold text-[hsl(var(--slide-text))]">{s.title}</span>
                </div>
                <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[1px]">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="text-[hsl(var(--slide-gold))] font-semibold">🤫 Не води за руку и не оправдывайся.</span> Начал объяснять - фидбэк перестал быть честным. Молчи и записывай.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[40px]">
      <p className="text-[14px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">Чтобы собрать фидбэк</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
        Дай людям потыкать самому
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[36px] max-w-[1150px] leading-[1.4]">
        Прототип бесполезен на твоём экране. Опубликуй ссылку - и смотри, как им пользуются.
      </p>

      <div className="flex gap-[24px] mb-[26px] max-w-[1300px]">
        {steps.map((s, i) => (
          <div key={i} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] p-[30px]">
            <div className="flex items-center gap-[12px] mb-[16px]">
              <span className="text-[40px]">{s.icon}</span>
              <span className="font-mono text-[16px] text-[hsl(var(--slide-gold)/0.5)]">{s.n}</span>
            </div>
            <h3 className="text-[23px] font-semibold text-[hsl(var(--slide-text))] mb-[10px] leading-[1.2]">{s.title}</h3>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-[18px] bg-[hsl(var(--slide-gold)/0.07)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[20px] max-w-[1300px]">
        <span className="text-[34px] shrink-0">🤫</span>
        <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.4]">
          <span className="font-semibold text-[hsl(var(--slide-gold))]">Не води за руку и не оправдывайся.</span> Как только начал объяснять - фидбэк перестал быть честным. Молчи и записывай, что человек делает сам.
        </p>
      </div>
    </div>
  );
}
