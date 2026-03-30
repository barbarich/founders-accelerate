import { useIsMobile } from "@/hooks/use-mobile";

const trackA = {
  title: "Нет лендинга — создаём",
  steps: [
    { num: "1", text: "Скопируйте промпт из слайда 13", bold: "промпт" },
    { num: "2", text: "Заполните [скобки] своими данными из Встреч 1 и 2", bold: "данными" },
    { num: "3", text: "Найдите референс стиля (Pinterest / Dribbble) и опишите его в промпте", bold: "референс" },
    { num: "4", text: "Вставьте в Lovable (бесплатно) или v0.dev (бесплатно) → получите лендинг", bold: "Lovable" },
  ],
  tools: [
    { name: "Lovable", desc: "Бесплатный тариф — хватит для прототипа. Полный стек, деплой в 1 клик", free: true },
    { name: "v0.dev", desc: "Бесплатно от Vercel. Генерирует React-компоненты, лучший UI-дизайн", free: true },
    { name: "Bolt.new", desc: "Бесплатный тариф есть. Быстрые итерации, встроенный превью", free: true },
    { name: "Claude Code", desc: "Для тех кто хочет полный контроль. Работает с GitHub, продакшн-код", free: false },
  ],
};

const trackB = {
  title: "Есть лендинг — улучшаем",
  checklist: [
    { task: "Hero понятен за 5 секунд?", action: "Попросите 3 людей открыть — могут объяснить что это?" },
    { task: "Social proof есть?", action: "Добавьте цифры, лого, цитаты — хотя бы «50+ пользователей в бете»" },
    { task: "CTA работает?", action: "Кликните каждую кнопку. Куда ведёт? Форма отправляется?" },
    { task: "Рекламные пиксели стоят?", action: "GA + Facebook Pixel + Hotjar — промпт в Lovable или скрипт в head" },
    { task: "Мобильная версия ОК?", action: "Откройте с телефона. Текст читается? Кнопки нажимаются?" },
    { task: "Скорость загрузки?", action: "PageSpeed Insights → зелёная зона (90+) = хорошо" },
  ],
};

export default function M3Slide14Workshop() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          20 минут
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Два трека — выберите свой
        </h2>
        <div className="space-y-[10px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border-2 border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] px-[10px] py-[8px]">
            <div className="flex items-center gap-[6px] mb-[6px]">
              <span className="text-[8px] font-mono text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] px-[6px] py-[2px] rounded-full font-bold">A</span>
              <span className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{trackA.title}</span>
            </div>
            {trackA.steps.map((s, i) => (
              <p key={i} className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[4px]">{s.num}. {s.text}</p>
            ))}
            <div className="flex flex-wrap gap-[4px] mt-[6px]">
              {trackA.tools.map((t, i) => (
                <span key={i} className={`text-[7px] px-[4px] py-[1px] rounded ${t.free ? 'bg-green-500/10 text-green-400' : 'bg-[hsl(var(--slide-gold)/0.1)] text-[hsl(var(--slide-gold))]'}`}>
                  {t.name} {t.free && "— free"}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border-2 border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
            <div className="flex items-center gap-[6px] mb-[6px]">
              <span className="text-[8px] font-mono text-[hsl(var(--slide-text-muted))] bg-[hsl(var(--slide-border)/0.3)] px-[6px] py-[2px] rounded-full font-bold">B</span>
              <span className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{trackB.title}</span>
            </div>
            {trackB.checklist.map((c, i) => (
              <div key={i} className="flex items-start gap-[4px] mb-[2px]">
                <span className="text-[8px] text-[hsl(var(--slide-gold))] mt-[1px]">☐</span>
                <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">
                  <span className="text-[hsl(var(--slide-text))] font-medium">{c.task}</span> {c.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        20 минут
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
        Два трека — выберите свой
      </h2>

      <div className="grid grid-cols-2 gap-[28px] max-w-[1300px]">
        {/* Track A */}
        <div className="bg-[hsl(var(--slide-bg-alt))] border-2 border-[hsl(var(--slide-gold)/0.3)] rounded-[16px] px-[28px] py-[24px]">
          <div className="flex items-center gap-[12px] mb-[20px]">
            <span className="text-[18px] font-mono text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[44px] h-[44px] flex items-center justify-center rounded-full font-bold">A</span>
            <h3 className="text-[24px] font-bold text-[hsl(var(--slide-text))]">{trackA.title}</h3>
          </div>

          <div className="space-y-[12px] mb-[20px]">
            {trackA.steps.map((s, i) => (
              <div key={i} className="flex items-start gap-[10px]">
                <span className="font-mono text-[17px] text-[hsl(var(--slide-gold))] shrink-0">{s.num}.</span>
                <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{s.text}</p>
              </div>
            ))}
          </div>

          <p className="text-[13px] uppercase tracking-widest text-[hsl(var(--slide-gold)/0.5)] mb-[10px]">Инструменты</p>
          <div className="grid grid-cols-2 gap-[8px]">
            {trackA.tools.map((t, i) => (
              <div key={i} className={`rounded-[8px] px-[12px] py-[8px] ${t.free ? 'bg-green-500/5 border border-green-500/20' : 'bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-border)/0.2)]'}`}>
                <div className="flex items-center gap-[6px] mb-[2px]">
                  <span className="text-[16px] font-semibold text-[hsl(var(--slide-text))]">{t.name}</span>
                  {t.free && <span className="text-[11px] text-green-400 bg-green-500/10 px-[6px] py-[1px] rounded-full">free</span>}
                </div>
                <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Track B */}
        <div className="bg-[hsl(var(--slide-bg-alt))] border-2 border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[28px] py-[24px]">
          <div className="flex items-center gap-[12px] mb-[20px]">
            <span className="text-[18px] font-mono text-[hsl(var(--slide-text-muted))] bg-[hsl(var(--slide-border)/0.3)] w-[44px] h-[44px] flex items-center justify-center rounded-full font-bold">B</span>
            <h3 className="text-[24px] font-bold text-[hsl(var(--slide-text))]">{trackB.title}</h3>
          </div>

          <div className="space-y-[12px]">
            {trackB.checklist.map((c, i) => (
              <div key={i} className="flex items-start gap-[10px]">
                <div className="w-[20px] h-[20px] border-2 border-[hsl(var(--slide-gold)/0.3)] rounded-[4px] shrink-0 mt-[3px]" />
                <div>
                  <p className="text-[17px] font-semibold text-[hsl(var(--slide-text))] leading-[1.3]">{c.task}</p>
                  <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
