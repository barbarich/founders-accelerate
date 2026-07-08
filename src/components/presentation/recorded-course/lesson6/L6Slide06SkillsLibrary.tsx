import { useIsMobile } from "@/hooks/use-mobile";

const skills = [
  { name: "engineering", what: "Claude помогает с архитектурой, ревью кода, тестами. Включается когда ты строишь сам продукт." },
  { name: "design", what: "Подсказывает UI/UX, проверяет доступность, советует цвета и шрифты. Полезно при работе над лендингом." },
  { name: "brand-voice", what: "Пишет в твоём тоне со стоп-словами. Один раз настроил — тексты звучат как твои." },
  { name: "marketing", what: "Копирайт, SEO, email-рассылки, креативы для рекламы. Маркетолог в одном промпте." },
  { name: "sales", what: "Письма прямого аутрича, ответы на возражения, follow-up. Помощник по продажам." },
  { name: "product-management", what: "Спеки фич, roadmap, метрики, custdev-интервью. Продакт-менеджер на проекте." },
  { name: "data", what: "SQL-запросы, аналитика, графики. Когда нужно понять что происходит в продукте." },
  { name: "legal", what: "Условия использования, политика конфиденциальности, NDA. Не заменяет юриста, но первая версия — за минуту." },
  { name: "pdf-viewer", what: "Читать, заполнять, подписывать PDF прямо в чате. Договора, формы, акты." },
  { name: "mempalace", what: "Долгая память Claude между сессиями. Когда у тебя много проектов — помнит контекст каждого." },
];

export default function L6Slide06SkillsLibrary() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Скиллы Claude · 10 готовых экспертов
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Команда в одной программе
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Скилл — это специализация Claude. Когда задача похожа на маркетинг — Claude автоматически думает как маркетолог. Включаешь один раз в настройках.
        </p>
        <p className="text-[7px] text-[hsl(var(--slide-text-muted)/0.8)] italic mb-[4px] leading-[1.35]">
          Скиллы — это claude.ai, чат в браузере. Дальше в уроке — Claude Code: тот же Claude, но у тебя в терминале, с доступом к твоим файлам и сервисам.
        </p>
        <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] mb-[3px]">
          claude.ai → Settings → Skills → Включить все 10
        </p>
        <div className="grid grid-cols-2 gap-[3px]">
          {skills.map((s) => (
            <div key={s.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] font-mono">{s.name}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{s.what}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Скиллы Claude · 10 готовых экспертов
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Команда <span className="text-[hsl(var(--slide-gold))]">в одной программе</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[10px] max-w-[1500px] leading-[1.45]">
        Скилл — это специализация Claude. Когда задача про маркетинг — Claude автоматически думает как маркетолог. Когда про код — как разработчик. Не нужно писать «играй роль...» — он сам подхватывает нужный режим.
      </p>
      <p className="text-[14px] text-[hsl(var(--slide-text-muted)/0.8)] italic mb-[10px] max-w-[1500px] leading-[1.4]">
        Скиллы включаются в claude.ai — чат в браузере. Дальше в уроке речь пойдёт про Claude Code: тот же Claude, но у тебя в терминале, с доступом к твоим файлам и сервисам.
      </p>
      <p className="text-[16px] font-mono text-[hsl(var(--slide-gold))] mb-[18px]">
        Включить: claude.ai → Settings → Skills → все 10
      </p>

      <div className="grid grid-cols-5 gap-[10px] max-w-[1700px]">
        {skills.map((s) => (
          <div key={s.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[10px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] font-mono leading-[1.2] mb-[4px]">{s.name}</p>
            <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{s.what}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
