import { useIsMobile } from "@/hooks/use-mobile";

const triggers = [
  "Затрагиваешь > 3 файла",
  "Изменение > 500 строк кода",
  "Любые миграции БД",
  "Новый API endpoint",
  "Рефакторинг (renames, moves)",
  "Подключение нового сервиса",
];

const steps = [
  {
    num: "1",
    title: "Войди в Plan Mode",
    body: "Shift+Tab в Claude Code или явное «work in plan mode». Claude НЕ пишет код — только думает и планирует.",
  },
  {
    num: "2",
    title: "Дай полный контекст",
    body: "Что строишь, для кого, ограничения, существующий стек. Чем точнее ввод — тем плотнее план.",
  },
  {
    num: "3",
    title: "Получи план",
    body: "Список файлов, шагов, рисков. Не код. Прочитай как чертёж — найди слабые места.",
  },
  {
    num: "4",
    title: "Self-review",
    body: "«Прочти план ещё раз и найди 3 слабых места сам». Claude часто находит то что пропустил при первой генерации.",
  },
  {
    num: "5",
    title: "Second-model review",
    body: "Скопируй план в Codex / Antigravity / Gemini. Свежий взгляд другой модели = новые слабые места.",
  },
  {
    num: "6",
    title: "Iterate → выход",
    body: "Возвращаешь правки в Claude, итерируешь план. Когда устраивает каждый пункт — выходишь и даёшь команду на код.",
  },
];

export default function L6Slide12PlanModeAdvanced() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Plan Mode advanced
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Алгоритм 6 шагов · от идеи к плану
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[5px] leading-[1.4]">
          В мини был «сначала план, потом код». Здесь — детальный workflow с self-review и second-model review.
        </p>
        <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Когда обязателен</p>
        <div className="grid grid-cols-2 gap-[2px] mb-[5px]">
          {triggers.map((t) => (
            <div key={t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[3px] px-[5px] py-[2px]">
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">→ {t}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-[3px]">
          {steps.map((s) => (
            <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-center gap-[3px]">
                <span className="font-mono text-[6.5px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[11px] h-[11px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
                <p className="text-[7.5px] font-bold text-[hsl(var(--slide-text))]">{s.title}</p>
              </div>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Plan Mode advanced
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Алгоритм <span className="text-[hsl(var(--slide-gold))]">6 шагов</span> от идеи к коду
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[18px] max-w-[1500px] leading-[1.45]">
        Исправить план — 2 минуты. Исправить код — 2 часа. Этот workflow — фундамент production-grade работы.
      </p>

      <div className="grid grid-cols-[260px_1fr] gap-[20px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[18px] py-[14px]">
          <p className="text-[12px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Когда обязателен</p>
          <ul className="space-y-[5px]">
            {triggers.map((t) => (
              <li key={t} className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {t}</li>
            ))}
          </ul>
          <div className="border-t border-[hsl(var(--slide-gold)/0.2)] mt-[12px] pt-[10px]">
            <p className="text-[11px] text-[hsl(var(--slide-gold))] font-mono">Shift+Tab</p>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[2px]">в Claude Code · войти в Plan Mode</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[12px]">
          {steps.map((s) => (
            <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[16px] py-[12px]">
              <span className="font-mono text-[13px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[26px] h-[26px] flex items-center justify-center rounded-full font-bold mb-[8px]">{s.num}</span>
              <p className="text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[6px]">{s.title}</p>
              <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
