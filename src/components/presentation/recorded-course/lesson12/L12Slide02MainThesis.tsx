import { useIsMobile } from "@/hooks/use-mobile";

export default function L12Slide02MainThesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Главная мысль сегодня
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] tracking-[-0.01em]">
          В 2026 в Meta ты не настраиваешь аудиторию. Ты кормишь алгоритм.
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px] mb-[12px]">
          <p className="text-[13px] font-bold text-[hsl(var(--slide-text))] leading-[1.35] mb-[6px]">
            У тебя ровно два рычага: креативы и данные о том, что для тебя успех.
          </p>
          <p className="text-[13px] font-bold text-[hsl(var(--slide-text))] leading-[1.35]">
            Всё остальное Meta делает сама - и делает это лучше тебя.
          </p>
        </div>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
          Поэтому одиночка-фаундер запускает рекламу без маркетолога. Весь урок - про то, как собрать эти два рычага и донести их до кнопки Publish.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        Главная мысль сегодня
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] max-w-[1500px] tracking-[-0.01em]">
        В 2026 в Meta ты не настраиваешь аудиторию. Ты кормишь алгоритм.
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[28px] max-w-[1500px] mb-[28px]">
        <p className="text-[36px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[10px]">
          У тебя ровно два рычага: креативы и данные о том, что для тебя успех.
        </p>
        <p className="text-[36px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">
          Всё остальное Meta делает сама - и делает это лучше тебя.
        </p>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1500px]">
        Поэтому одиночка-фаундер запускает рекламу без маркетолога. Весь урок - про то, как собрать эти два рычага и донести их до кнопки Publish.
      </p>
    </div>
  );
}
