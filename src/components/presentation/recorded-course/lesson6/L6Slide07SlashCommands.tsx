import { useIsMobile } from "@/hooks/use-mobile";

const commands = [
  {
    cmd: "/init",
    when: "В самом начале проекта",
    what: "Claude прочитает твой проект и сам напишет первую версию CLAUDE.md. Стартовая точка — лучше, чем пустой файл.",
    example: "Открыл свежий репо → /init → дописал детали вручную",
  },
  {
    cmd: "/verify",
    when: "После каждого изменения",
    what: "Claude прогоняет проверку кода + тесты + сборку. Одна команда вместо четырёх. Знаешь сразу — сломано или нет.",
    example: "Закончил фичу → /verify → если красный, Claude сам и фиксит",
  },
  {
    cmd: "/run",
    when: "Когда хочешь увидеть результат",
    what: "Claude запустит твой проект и сделает скриншот. Не нужно открывать терминал, копировать команды, ждать.",
    example: "/run — Claude поднимает dev-сервер и шлёт скриншот главного экрана",
  },
  {
    cmd: "/security-review",
    when: "Перед запуском продукта в прод",
    what: "Claude сканирует код на типичные дыры в безопасности: утечки ключей, инъекции, открытые ручки.",
    example: "Готов к запуску → /security-review → получаешь список «что починить»",
  },
];

export default function L6Slide07SlashCommands() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Slash-команды
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          4 команды, которые ты будешь жать каждый день
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Slash-команда — это короткий ярлык для длинного действия. Жмёшь /verify — Claude делает четыре проверки разом. Не нужно помнить шаги.
        </p>
        <div className="space-y-[4px]">
          {commands.map((c) => (
            <div key={c.cmd} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[4px]">
              <div className="flex items-baseline justify-between mb-[1px]">
                <p className="text-[10px] font-mono font-bold text-[hsl(var(--slide-gold))]">{c.cmd}</p>
                <p className="text-[6.5px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))]">{c.when}</p>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[1px]">{c.what}</p>
              <p className="text-[6.5px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.35]">→ {c.example}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Slash-команды — сокращение работы до одного слова
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        4 команды, которые ты будешь жать <span className="text-[hsl(var(--slide-gold))]">каждый день</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1500px] leading-[1.45]">
        Slash-команда — это короткий ярлык для длинного действия. Жмёшь <span className="font-mono text-[hsl(var(--slide-gold))]">/verify</span> — Claude разом делает четыре проверки. Не нужно помнить, какие именно. Не нужно копировать команды.
      </p>

      <div className="grid grid-cols-2 gap-[16px] max-w-[1700px]">
        {commands.map((c) => (
          <div key={c.cmd} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[16px]">
            <div className="flex items-baseline justify-between mb-[8px]">
              <p className="text-[22px] font-mono font-bold text-[hsl(var(--slide-gold))]">{c.cmd}</p>
              <p className="text-[12px] uppercase tracking-[0.16em] text-[hsl(var(--slide-text-muted))] font-bold">{c.when}</p>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[10px]">{c.what}</p>
            <p className="text-[13px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.5] bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">{c.example}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
