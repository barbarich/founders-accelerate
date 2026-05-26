import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const builtIn = [
  { cmd: "/init", desc: "Claude читает проект и пишет первичный CLAUDE.md за тебя. Запускай в свежем репо." },
  { cmd: "/verify", desc: "Прогоняет typecheck + tests + lint + сборку. Один промпт вместо четырёх команд." },
  { cmd: "/loop 5m", desc: "Циклит команду каждые 5 минут. Polling CI, бэкграунд-агенты, мониторинг." },
  { cmd: "/schedule", desc: "Cron-job: Claude запустит задачу в назначенное время. Дайджесты, репорты." },
  { cmd: "/security-review", desc: "Скан кода на OWASP top 10 + утечки секретов + injection-векторы." },
  { cmd: "/run", desc: "Запускает dev server + открывает preview + скриншот ключевого экрана." },
];

const customCmd = `# .claude/commands/ship-feature.md

Задача: довести фичу до PR в main.

Шаги:
1. Сделай git status — что не закоммичено
2. Если есть untracked файлы — спроси, добавлять или игнорировать
3. Запусти Plan Mode: какие изменения нужны
4. После approval — реализуй
5. npm run typecheck && npm run test
6. Если зелёное — git add конкретные файлы + commit -F /tmp/msg.txt
7. git push + gh pr create с описанием из плана
8. Жди CI зелёным, кидай ссылку`;

export default function L6Slide07SlashCommands() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(customCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Slash commands
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Встроенные + свои workflow-команды
        </h2>
        <div className="grid grid-cols-2 gap-[3px] mb-[5px]">
          {builtIn.map((c) => (
            <div key={c.cmd} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <p className="text-[7.5px] font-mono font-bold text-[hsl(var(--slide-gold))]">{c.cmd}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Кастомная команда</p>
        <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[3px]">
          <span className="font-mono text-[6.5px]">.claude/commands/[name].md</span> · команда становится <span className="font-mono text-[hsl(var(--slide-gold))] text-[6.5px]">/[name]</span>
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[7px] py-[4px] overflow-y-auto" style={{ maxHeight: "30%" }}>
          <pre className="text-[5.5px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.5] whitespace-pre-wrap">{customCmd}</pre>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Slash commands · сокращение workflow до одной команды
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Встроенные + <span className="text-[hsl(var(--slide-gold))]">свои</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1500px] leading-[1.45]">
        Slash-команда — это сохранённый workflow из нескольких шагов. Вместо «прогони тайпчек, тесты, лайнтер и сборку» — <span className="font-mono text-[hsl(var(--slide-gold))]">/verify</span>. Свои команды храняться в репо.
      </p>

      <div className="grid grid-cols-[1fr_1fr] gap-[24px] max-w-[1700px]">
        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">6 встроенных</p>
          <div className="space-y-[8px]">
            {builtIn.map((c) => (
              <div key={c.cmd} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[14px] py-[10px]">
                <p className="text-[15px] font-mono font-bold text-[hsl(var(--slide-gold))] mb-[2px]">{c.cmd}</p>
                <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">Кастомная команда · артефакт</p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[14px] py-[10px] mb-[8px]">
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Файл <span className="font-mono text-[hsl(var(--slide-gold))]">.claude/commands/ship-feature.md</span> — становится командой <span className="font-mono text-[hsl(var(--slide-gold))]">/ship-feature</span> в любой сессии этого проекта.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[14px] py-[12px] overflow-y-auto" style={{ maxHeight: "330px" }}>
            <pre className="text-[11px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.6] whitespace-pre-wrap">{customCmd}</pre>
          </div>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleCopy}
            className="mt-[10px] self-start px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold transition-all"
            style={{
              background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
              color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
              border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.4"})`,
            }}
          >
            {copied ? "✓ Скопировано" : "📋 Скопировать команду"}
          </button>
        </div>
      </div>
    </div>
  );
}
