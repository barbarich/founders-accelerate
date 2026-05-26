import { useIsMobile } from "@/hooks/use-mobile";

const techniques = [
  {
    num: "1",
    title: "Свежий чат + minimal repro",
    when: "Чат стал длинным, Claude путает прошлые попытки, повторяет ошибки.",
    prompt: `Новый чат. Контекст:
- Что я строю: [1 предложение]
- Что должно происходить: [1 предложение]
- Что происходит сейчас: [1 предложение]
- Минимальный пример где это ломается: [файл / 10 строк]

Не предлагай решения. Сначала скажи: «я понял проблему правильно?»`,
  },
  {
    num: "2",
    title: "Скриншот + read out",
    when: "Ошибка в браузере, не понимаешь что значит. Стек-трейс непонятный.",
    prompt: `[вставь скриншот]

Прочти что на скриншоте. Объясни:
1. Что говорит ошибка простыми словами
2. В каком файле / строке проблема
3. Что вероятная причина
4. Один шаг что попробовать первым`,
  },
  {
    num: "3",
    title: "Failing test first",
    when: "Баг плавающий, иногда воспроизводится. Не уверен в репро.",
    prompt: `Напиши failing test, который воспроизводит баг.
Не пиши фикс. Только тест.
Я запущу тест, увижу что он красный — это станет минимальным репро.
После этого мы вместе пишем фикс, который сделает тест зелёным.`,
  },
  {
    num: "4",
    title: "Ultrathink + контекст",
    when: "Архитектурная задача / сложный баг, требующий глубокого размышления.",
    prompt: `Включи ultrathink. Задача:
[описание]

Контекст:
- Стек: [перечисли]
- Constraints: [что нельзя менять]
- Что уже пробовал: [список]

Подумай долго перед ответом. Хочу видеть твоё рассуждение, не только итог.`,
  },
  {
    num: "5",
    title: "Second-model rescue",
    when: "Claude в петле — пробует одно и то же, не двигается с места.",
    prompt: `Скопируй контекст последних 5 попыток Claude в Codex / Antigravity / Gemini:

«Я застрял. Claude пробует [подход X] третий раз — не работает.
Вот вся информация: [paste].
Что ты вообще другое предложил бы попробовать?
Не повторяй то что уже пробовали.»`,
  },
];

export default function L6Slide16FiveUnblockTechniques() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Артефакт · 5 техник unblock
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Когда Claude застрял — что делать
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          Готовые промпты под каждый сценарий. Скопировал → вставил → разблокировался.
        </p>
        <div className="space-y-[3px] overflow-y-auto" style={{ maxHeight: "80%" }}>
          {techniques.map((t) => (
            <div key={t.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-center gap-[3px] mb-[1px]">
                <span className="font-mono text-[6.5px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[11px] h-[11px] flex items-center justify-center rounded-full font-bold">{t.num}</span>
                <p className="text-[7.5px] font-bold text-[hsl(var(--slide-text))]">{t.title}</p>
              </div>
              <p className="text-[6px] text-[hsl(var(--slide-text-muted))] italic leading-[1.3] mb-[1px]">{t.when}</p>
              <pre className="text-[5.5px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.4] whitespace-pre-wrap">{t.prompt}</pre>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Артефакт · 5 техник unblock
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Когда Claude <span className="text-[hsl(var(--slide-gold))]">застрял</span> — что делать
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[16px] max-w-[1500px] leading-[1.45]">
        Готовые промпты под каждый сценарий. Когда Claude бежит по кругу — выбираешь технику по симптому, копируешь промпт, вставляешь в свой контекст.
      </p>

      <div className="grid grid-cols-5 gap-[12px] max-w-[1700px]">
        {techniques.map((t) => (
          <div key={t.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[14px] py-[12px] flex flex-col">
            <span className="font-mono text-[13px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[26px] h-[26px] flex items-center justify-center rounded-full font-bold mb-[8px]">{t.num}</span>
            <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[6px]">{t.title}</p>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4] mb-[8px]">{t.when}</p>
            <pre className="text-[9.5px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.5] whitespace-pre-wrap bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[8px] py-[6px] mt-auto">{t.prompt}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
