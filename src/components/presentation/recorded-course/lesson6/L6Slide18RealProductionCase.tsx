import { useIsMobile } from "@/hooks/use-mobile";

const buggyCode = `// generate-onboarding-summary.ts (баг в проде)
const answers =
  intentAnswers || profileAnswers || {};

// Проблема: intentAnswers = {} (пустой объект)
// JS: {} truthy → answers всегда = {}
// → ни intent, ни profile никогда не использовались
// → онбординг генерировался ВСЕГДА из пустого профиля`;

const fixedCode = `// Фикс:
const hasIntent = Object.keys(intentAnswers ?? {}).length > 0;
const hasProfile = Object.keys(profileAnswers ?? {}).length > 0;

const answers = hasIntent
  ? intentAnswers
  : hasProfile
    ? profileAnswers
    : null;

if (!answers) throw new Error("No answers found");`;

const lessons = [
  "Даже Claude делает JS-семантические ошибки. `{}` правдиво — Claude знал, но в момент написания пропустил.",
  "Без unit-теста на эту функцию баг бы жил месяцы. С тестом — отловили за час.",
  "Sentry MCP показал что 80% sessions попадают в этот код-путь — приоритет critical, фикс в тот же день.",
  "Грепнули весь репо на паттерн `X || Y || {}` — нашли ещё 3 места. Все починили.",
];

export default function L6Slide18RealProductionCase() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Реальный кейс · Mikey AI Bug #30
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          JS empty-object truthy
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          Онбординг работал криво несколько недель. Причина — одна строка кода, которую Claude написал и сам пропустил.
        </p>
        <p className="text-[7.5px] font-bold text-[hsl(0_60%_70%)] uppercase tracking-[0.12em] mb-[1px]">Баг</p>
        <div className="bg-[hsl(0_60%_50%/0.06)] border border-[hsl(0_60%_60%/0.3)] rounded-[4px] px-[6px] py-[3px] mb-[3px]">
          <pre className="text-[5.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.4] whitespace-pre-wrap">{buggyCode}</pre>
        </div>
        <p className="text-[7.5px] font-bold text-[hsl(142_50%_65%)] uppercase tracking-[0.12em] mb-[1px]">Фикс</p>
        <div className="bg-[hsl(142_50%_65%/0.06)] border border-[hsl(142_50%_65%/0.3)] rounded-[4px] px-[6px] py-[3px] mb-[3px]">
          <pre className="text-[5.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.4] whitespace-pre-wrap">{fixedCode}</pre>
        </div>
        <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[1px]">Уроки</p>
        <ul className="space-y-[1px]">
          {lessons.map((l) => (
            <li key={l} className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">→ {l}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Реальный кейс · Mikey AI Bug #30
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        JS <span className="text-[hsl(var(--slide-gold))]">empty-object truthy</span> · баг, который Claude написал сам
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[16px] max-w-[1500px] leading-[1.45]">
        Онбординг Mikey AI работал криво несколько недель. Sentry показывал что пользователи получают пустые summary. Причина — одна строка кода, классическая JS-ловушка.
      </p>

      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px] mb-[16px]">
        <div>
          <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(0_60%_70%)] font-bold mb-[8px]">Баг · что было</p>
          <div className="bg-[hsl(0_60%_50%/0.06)] border border-[hsl(0_60%_60%/0.3)] rounded-[10px] px-[18px] py-[14px]">
            <pre className="text-[12px] font-mono text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{buggyCode}</pre>
          </div>
        </div>
        <div>
          <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(142_50%_65%)] font-bold mb-[8px]">Фикс · что стало</p>
          <div className="bg-[hsl(142_50%_65%/0.06)] border border-[hsl(142_50%_65%/0.3)] rounded-[10px] px-[18px] py-[14px]">
            <pre className="text-[12px] font-mono text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{fixedCode}</pre>
          </div>
        </div>
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.07)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[24px] py-[14px] max-w-[1700px]">
        <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Что унести с собой</p>
        <ul className="grid grid-cols-2 gap-x-[24px] gap-y-[6px]">
          {lessons.map((l) => (
            <li key={l} className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">→ {l}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
