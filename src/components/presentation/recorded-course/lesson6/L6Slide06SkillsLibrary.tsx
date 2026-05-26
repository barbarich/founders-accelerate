import { useIsMobile } from "@/hooks/use-mobile";

const builtIn = [
  { name: "engineering", desc: "Архитектура, ревью кода, тесты, debugging" },
  { name: "design", desc: "UI/UX, доступность, palettes, шрифты" },
  { name: "brand-voice", desc: "Пишет в твоём тоне со стоп-словами" },
  { name: "marketing", desc: "Копирайт, SEO, email-sequences, креативы" },
  { name: "sales", desc: "Outreach, voice/email, возражения, follow-up" },
  { name: "product-management", desc: "PRD, roadmap, метрики, custdev" },
  { name: "data", desc: "SQL, аналитика, A/B-тесты, графики" },
  { name: "legal", desc: "ToS, privacy policy, NDA, DPA" },
  { name: "pdf-viewer", desc: "Читать, заполнять, подписывать PDF" },
  { name: "mempalace", desc: "Долгосрочная память между сессиями" },
];

const customSkillSpec = `---
name: ship-feature
description: Полный workflow от идеи до PR — план, реализация, тесты, deploy
metadata:
  triggers: ["ship", "release", "deploy feature"]
---

# Ship Feature

1. Спроси: «Какая фича? Какие файлы?»
2. Plan Mode: составь план изменений
3. После approval — реализуй
4. Запусти typecheck + tests
5. Создай PR через gh CLI
6. Verify в preview URL`;

export default function L6Slide06SkillsLibrary() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Skills · специализированные эксперты
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          10 встроенных + свои собственные
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Skill активируется автоматически когда задача матчит триггер. Промпт не нужен.
        </p>
        <div className="grid grid-cols-2 gap-[3px] mb-[5px]">
          {builtIn.map((s) => (
            <div key={s.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] font-mono">{s.name}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Свой скилл</p>
        <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[3px]">
          <span className="font-mono text-[6.5px]">.claude/skills/[name]/SKILL.md</span> · фронтматтер + инструкция
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[7px] py-[4px] overflow-y-auto" style={{ maxHeight: "28%" }}>
          <pre className="text-[5.5px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.5] whitespace-pre-wrap">{customSkillSpec}</pre>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Skills · специализированные эксперты внутри Claude
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        10 встроенных + <span className="text-[hsl(var(--slide-gold))]">свои собственные</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1500px] leading-[1.45]">
        Skill — это микро-эксперт, который активируется автоматически когда задача матчит триггер. Не нужно писать в промпте «играй роль маркетолога» — Claude сам подхватывает marketing-skill при запросе на копирайт.
      </p>

      <div className="grid grid-cols-[1.3fr_1fr] gap-[24px] max-w-[1700px]">
        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">10 встроенных скиллов</p>
          <div className="grid grid-cols-2 gap-[8px]">
            {builtIn.map((s) => (
              <div key={s.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[8px]">
                <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] font-mono leading-[1.2]">{s.name}</p>
                <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[2px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">Свой кастомный skill</p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[16px] py-[12px] mb-[10px]">
            <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[6px]">
              Создай файл <span className="font-mono text-[hsl(var(--slide-gold))]">.claude/skills/[name]/SKILL.md</span> в корне проекта. Frontmatter + инструкция = персональный эксперт.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[14px] py-[12px] overflow-y-auto" style={{ maxHeight: "300px" }}>
            <pre className="text-[10.5px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.6] whitespace-pre-wrap">{customSkillSpec}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
