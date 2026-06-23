import { useIsMobile } from "@/hooks/use-mobile";

export default function L1Slide07DeepResearch() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Инструмент 1</p>
        <h2 className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Deep Research
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mb-[16px]">
          Исследование рынка за 15 минут вместо 5 дней
        </p>
        <div className="space-y-[8px] mb-[12px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px]">
            <h3 className="text-[12px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">Что это</h3>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
              Режим в ChatGPT, Claude и Gemini. AI сам ищет в интернете десятки источников, читает их и собирает структурированный отчёт со ссылками.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px]">
            <h3 className="text-[12px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">Чем отличается от обычного чата</h3>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
              Обычный ответ — из памяти, часто выдуман. Deep Research реально ходит по сети, проверяет 20-50 источников и даёт ссылки.
            </p>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[12px] py-[10px]">
          <p className="text-[10px] text-[hsl(var(--slide-gold))] font-medium leading-[1.5]">
            💡 Включается кнопкой «Deep Research» / «Research» в любом из трёх AI. Считает 5-15 минут - можно отойти.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Инструмент 1</span>
      </div>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">
        Deep Research
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mb-[44px]">
        Исследование рынка за 15 минут вместо 5 дней
      </p>
      <div className="grid grid-cols-2 gap-[32px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Что это такое</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Это режим внутри ChatGPT, Claude и Gemini - не отдельный сервис. Вы даёте задачу, и AI сам ищет в интернете десятки источников, читает их и собирает за вас структурированный отчёт со ссылками.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Чем отличается от обычного чата</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Обычный ответ AI берёт из памяти и часто выдумывает факты. Deep Research реально ходит по сети прямо сейчас, проверяет 20-50 источников и даёт ссылки на каждый. Для ресёрча рынка это критично.
          </p>
        </div>
      </div>
      <div className="mt-[32px] bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[32px] py-[20px]">
        <p className="text-[20px] text-[hsl(var(--slide-gold))] font-medium">
          💡 Где включить: в ChatGPT и Gemini - кнопка «Deep Research» под полем ввода, в Claude - режим «Research». Расчёт занимает 5-15 минут, можно отойти. Всегда проверяйте источники по ссылкам.
        </p>
      </div>
    </div>
  );
}
