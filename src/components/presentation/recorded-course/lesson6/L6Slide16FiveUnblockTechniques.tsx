import { useIsMobile } from "@/hooks/use-mobile";

const techniques = [
  {
    num: "1",
    title: "Открой свежий чат",
    symptom: "Чат стал длинным, Claude путает свои прошлые попытки, повторяет одни и те же ошибки",
    what: "Открой новое окно Claude. Опиши задачу заново в 3 предложениях. Свежий контекст = свежая голова.",
    shortPrompt: "«Новый чат. Я строю [что]. Должно быть [что ожидаешь]. Получается [что есть]. С чего начать?»",
  },
  {
    num: "2",
    title: "Покажи скриншот",
    symptom: "Не понимаешь что значит ошибка, или Claude не понимает что у тебя на экране",
    what: "Сделай скрин и вставь прямо в чат. Claude читает картинки. Часто решает быстрее, чем по тексту ошибки.",
    shortPrompt: "[вставь скриншот] + «что здесь происходит и как починить?»",
  },
  {
    num: "3",
    title: "Позови другую модель",
    symptom: "Claude бежит по кругу — пробует одно и то же третий раз, ничего не меняется",
    what: "Скопируй последние попытки в Codex / Gemini / ChatGPT. Опиши «я застрял». Другая модель часто видит решение, которое первая упустила.",
    shortPrompt: "«Я застрял. Claude три раза пробует [подход X] — не работает. Что бы ты попробовал по-другому?»",
  },
];

export default function L6Slide16FiveUnblockTechniques() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Когда Claude застрял
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          3 простые техники разблокировать
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Это происходит у всех. Не паника. Запомни симптом → знаешь что нажать.
        </p>
        <div className="space-y-[5px]">
          {techniques.map((t) => (
            <div key={t.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <div className="flex items-center gap-[5px] mb-[2px]">
                <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold">{t.num}</span>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{t.title}</p>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted)/0.85)] italic leading-[1.4] mb-[2px]">Симптом: {t.symptom}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[3px]">{t.what}</p>
              <p className="text-[7px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.4] bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[3px] px-[5px] py-[2px]">{t.shortPrompt}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Когда Claude застрял
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        3 простые техники <span className="text-[hsl(var(--slide-gold))]">разблокировать</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[22px] max-w-[1500px] leading-[1.45]">
        Это происходит у всех. Не паника. Запоминаешь симптом → знаешь какую кнопку нажать.
      </p>

      <div className="grid grid-cols-3 gap-[16px] max-w-[1700px]">
        {techniques.map((t) => (
          <div key={t.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[18px] flex flex-col">
            <div className="flex items-center gap-[10px] mb-[10px]">
              <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[32px] h-[32px] flex items-center justify-center rounded-full font-bold">{t.num}</span>
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">{t.title}</p>
            </div>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted)/0.85)] italic leading-[1.45] mb-[10px]">Симптом: {t.symptom}</p>
            <p className="text-[14.5px] text-[hsl(var(--slide-text))] leading-[1.55] mb-[12px]">{t.what}</p>
            <p className="text-[12px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.55] bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px] mt-auto">{t.shortPrompt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
