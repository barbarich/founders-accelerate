import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    num: "1",
    title: "Найдите 2–3 референса",
    text: "Pinterest, Dribbble, awwwards.com, или просто сайты которые вам нравятся. Сохраните скриншоты.",
    tip: "Ищите: «SaaS landing page dark», «fintech website minimal», «startup landing 2026»",
  },
  {
    num: "2",
    title: "Извлеките визуальную ДНК",
    text: "Загрузите скриншот в Claude и попросите: «Опиши стиль этого сайта для промпта в Lovable — цвета, шрифты, spacing, настроение».",
    tip: "Claude вернёт готовое описание: «тёмный фон #0A0A0B, шрифт Inter 700 для заголовков, акцент #6366F1...»",
  },
  {
    num: "3",
    title: "Добавьте стиль в промпт",
    text: "Вставьте описание стиля в конец промпта из прошлого слайда. Укажите конкретный шрифт — это главное отличие от шаблона.",
    tip: "«Стиль: тёмная тема. Шрифт заголовков — Space Grotesk 700, body — DM Sans 400. Акцент — #6366F1»",
  },
];

const styles = [
  { name: "Minimalism", search: "minimal SaaS landing", desc: "Много воздуха, 2 цвета, крупный текст", ex: "Stripe, Linear" },
  { name: "Glassmorphism", search: "glassmorphism UI", desc: "Полупрозрачные карточки, blur, градиенты", ex: "Apple Vision, Raycast" },
  { name: "Neobrutalism", search: "neobrutalist web design", desc: "Жирные рамки, контрастные цвета, raw-эстетика", ex: "Gumroad, Figma" },
  { name: "Dark premium", search: "dark luxury website", desc: "Чёрный фон, золото/градиент, serif-шрифты", ex: "Vercel, Framer" },
  { name: "Bento grid", search: "bento grid layout", desc: "Карточки разного размера в сетке, как dashboard", ex: "Apple, GitHub" },
  { name: "Soft / Friendly", search: "friendly SaaS design", desc: "Скруглённые углы, пастельные тона, иллюстрации", ex: "Notion, Loom" },
];

export default function M3Slide11LovableDemo() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Не шаблон, а дизайн
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Как задать стиль для Lovable
        </h2>
        <div className="space-y-[8px] mb-[10px]">
          {steps.map((s, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[8px]">
              <div className="flex items-center gap-[6px] mb-[4px]">
                <div className="w-[20px] h-[20px] rounded-full border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0">
                  <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))]">{s.num}</span>
                </div>
                <span className="text-[11px] font-semibold text-[hsl(var(--slide-text))]">{s.title}</span>
              </div>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">
          <p className="text-[8px] uppercase tracking-widest text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Стили — загуглите и выберите</p>
          <div className="grid grid-cols-2 gap-[4px]">
            {styles.map((s, i) => (
              <div key={i} className="text-[8px] text-[hsl(var(--slide-text-muted))]">
                <span className="text-[hsl(var(--slide-text))] font-medium">{s.name}</span> — {s.ex}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center px-[100px]">
      {/* Left — steps */}
      <div className="flex-1 pr-[48px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Не шаблон, а дизайн
        </p>
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px]">
          Как задать стиль для&nbsp;Lovable
        </h2>

        <div className="space-y-[20px]">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-[16px]">
              <div className="w-[44px] h-[44px] rounded-full border-2 border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0">
                <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))]">{s.num}</span>
              </div>
              <div className="pt-[4px]">
                <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">{s.title}</h3>
                <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[6px]">{s.text}</p>
                <p className="text-[14px] text-[hsl(var(--slide-gold))] leading-[1.4] italic">{s.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — styles catalog */}
      <div className="w-[420px] shrink-0">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[24px] py-[22px]">
          <p className="text-[13px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
            Стили — загуглите и выберите свой
          </p>
          <div className="space-y-[12px]">
            {styles.map((s, i) => (
              <div key={i} className="border-b border-[hsl(var(--slide-border)/0.15)] pb-[12px] last:border-b-0 last:pb-0">
                <div className="flex items-center justify-between mb-[3px]">
                  <span className="text-[17px] font-bold text-[hsl(var(--slide-text))]">{s.name}</span>
                  <span className="text-[12px] text-[hsl(var(--slide-text-muted)/0.5)] font-mono">{s.ex}</span>
                </div>
                <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[2px]">{s.desc}</p>
                <p className="text-[12px] text-[hsl(var(--slide-gold))] italic">Искать: «{s.search}»</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[14px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[20px] py-[12px]">
          <p className="text-[14px] text-[hsl(var(--slide-gold))] leading-[1.5]">
            <span className="font-semibold">Где искать референсы:</span><br />
            Pinterest, Dribbble, awwwards.com
          </p>
        </div>
      </div>
    </div>
  );
}
