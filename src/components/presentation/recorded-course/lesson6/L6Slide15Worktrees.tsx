import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const worktreeCmd = `# Из главного репо (на main или текущей ветке):

git worktree add ../my-project-feature-2 -b feature/new-billing

# Что произошло:
# 1. Создалась папка ../my-project-feature-2 (рядом с твоим репо)
# 2. В ней — новая ветка feature/new-billing
# 3. .git один (shared), index и working tree разные

cd ../my-project-feature-2
# открой Claude Code в этой папке — отдельная сессия, чистый контекст

# Когда фича готова — обычный flow:
git add . && git commit -F /tmp/msg.txt
git push -u origin feature/new-billing

# Удалить worktree после мерджа PR:
cd ../my-project   # вернись в основной
git worktree remove ../my-project-feature-2
git branch -d feature/new-billing`;

const useCases = [
  {
    title: "Ждёшь review на PR1",
    body: "Не сиди в простое — запусти worktree, начни PR2 в параллельной ветке. Контекст PR1 не страдает.",
  },
  {
    title: "Experiment без риска",
    body: "Хочешь попробовать большой рефакторинг — worktree. Если идея провалится — git worktree remove, основной репо не тронут.",
  },
  {
    title: "Hotfix во время фичи",
    body: "На фиче, прилетел баг в прод. worktree от main + hotfix branch + push. Основная фича остаётся как была.",
  },
  {
    title: "Параллельные агенты",
    body: "Запусти 2 Claude-сессии в 2-х worktree одновременно. Не мешают друг другу, оба работают параллельно.",
  },
];

export default function L6Slide15Worktrees() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(worktreeCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Worktrees · параллельные ветки
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Два PR-а одновременно · без stash
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          Альтернатива git stash / переключению веток. Каждая ветка в своей папке. Claude-сессии не пересекаются.
        </p>
        <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Команды</p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[4px] overflow-y-auto mb-[4px]" style={{ maxHeight: "40%" }}>
          <pre className="text-[5.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.55] whitespace-pre-wrap">{worktreeCmd}</pre>
        </div>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={handleCopy}
          className="self-start mb-[4px] px-[8px] py-[3px] rounded-[4px] text-[8px] font-semibold transition-all"
          style={{
            background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
            color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
            border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
          }}
        >
          {copied ? "✓ Скопировано" : "📋 Команды"}
        </button>
        <div className="grid grid-cols-2 gap-[3px]">
          {useCases.map((u) => (
            <div key={u.title} className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[1.5px] border-[hsl(var(--slide-gold))] rounded-[3px] px-[5px] py-[2px]">
              <p className="text-[6.5px] font-bold text-[hsl(var(--slide-text))]">{u.title}</p>
              <p className="text-[5.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{u.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Worktrees · параллельные ветки в физически разных папках
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Два PR-а <span className="text-[hsl(var(--slide-gold))]">одновременно</span> · без git stash
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[18px] max-w-[1500px] leading-[1.45]">
        Альтернатива git stash и переключению веток. Каждая ветка живёт в своей папке. Можно открыть 2 Claude-сессии в 2 worktree — каждая со своим чистым контекстом, не путают друг друга.
      </p>

      <div className="grid grid-cols-[1.4fr_1fr] gap-[20px] max-w-[1700px]">
        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Команды · скопируй в терминал</p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[18px] py-[14px] overflow-y-auto" style={{ maxHeight: "360px" }}>
            <pre className="text-[12px] font-mono text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{worktreeCmd}</pre>
          </div>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleCopy}
            className="mt-[10px] px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold transition-all"
            style={{
              background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
              color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
              border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.4"})`,
            }}
          >
            {copied ? "✓ Скопировано" : "📋 Скопировать команды"}
          </button>
        </div>

        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">4 кейса когда нужен</p>
          <div className="space-y-[10px]">
            {useCases.map((u) => (
              <div key={u.title} className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[16px] py-[10px]">
                <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] mb-[3px]">{u.title}</p>
                <p className="text-[12.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
