import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide07WhyMatters() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">Почему это важно</p>
        <h2 className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[16px]">
          Если не можешь объяснить за 5 секунд — не купят
        </h2>
        <p className="text-[13px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
          У вас есть ровно одно предложение, чтобы человек понял: "это для меня" или "мне не нужно". Нет второго шанса на первое впечатление.
        </p>
        <div className="space-y-[8px] mb-[14px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))]">❌ "Мы делаем платформу для оптимизации бизнес-процессов с использованием ИИ"</p>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[11px] text-[hsl(var(--slide-text))]">✅ "Notion для ресторанов — меню, смены и склад в одном приложении"</p>
          </div>
        </div>
        <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold)/0.4)] mb-[10px]" />
        <p className="text-[12px] text-[hsl(var(--slide-gold))] font-medium">
          Позиционирование — это не слоган. Это ответ на вопрос "что ты делаешь?"
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">Почему это важно</p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
        Если не можешь объяснить<br />за 5 секунд — не купят
      </h2>
      <div className="max-w-[1000px] space-y-[24px]">
        <p className="text-[26px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          У вас есть ровно одно предложение, чтобы человек понял: "это для меня" или "мне не нужно". Нет второго шанса на первое впечатление.
        </p>
        <div className="flex gap-[24px]">
          <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] px-[24px] py-[18px]">
            <span className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-medium">❌ Типичное</span>
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[10px] leading-[1.5]">"Мы делаем платформу для оптимизации бизнес-процессов с использованием ИИ"</p>
          </div>
          <div className="flex-1 bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[24px] py-[18px]">
            <span className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">✅ Работает</span>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] mt-[10px] leading-[1.5]">"Notion для ресторанов — меню, смены и склад в одном приложении"</p>
          </div>
        </div>
        <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold)/0.4)]" />
        <p className="text-[24px] text-[hsl(var(--slide-gold))] font-medium">
          Позиционирование — это не слоган. Это ответ на вопрос "что ты делаешь?"
        </p>
      </div>
    </div>
  );
}
