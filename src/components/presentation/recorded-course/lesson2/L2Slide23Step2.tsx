import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { num: "1", action: "Открой ChatGPT / Gemini / Claude → вставь готовый промпт для генерации custdev-вопросов" },
  { num: "2", action: "Получи список из 10-18 вопросов → прочитай, убери наводящие и дублирующие" },
  { num: "3", action: "Проверь: есть ли вопросы о прошлом опыте, текущем решении и бюджете. Если нет — добавь" },
  { num: "4", action: "Оцени список: логичный порядок, нет ли сложных формулировок, понятен ли каждый вопрос" },
  { num: "5", action: "Отдай финальный список Claude промптом: «найди 3 слабых места и предложи как улучшить»" },
];

export default function L2Slide23Step2() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Пошаговый план · вопросы для custdev
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          5 действий → 10-18 вопросов для интервью
        </h2>
        <div className="space-y-[8px] mb-[12px]">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[2px] border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold">На выходе: 10-18 готовых вопросов в Google Docs или как основа для Google Forms</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Пошаговый план · вопросы для custdev
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
        5 действий → <span className="text-[hsl(var(--slide-gold))]">10-18 вопросов</span> для интервью
      </h2>
      <div className="space-y-[20px] max-w-[1300px]">
        {steps.map((s) => (
          <div key={s.num} className="flex items-start gap-[18px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[36px] h-[36px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
      <div className="mt-[40px] bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[28px] py-[18px] max-w-[1300px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold">На выходе: 10-18 готовых вопросов в Google Docs или как основа для Google Forms</p>
      </div>
    </div>
  );
}
