import { useIsMobile } from "@/hooks/use-mobile";

export default function M5Slide23Closing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
        <div className="text-center px-[28px]">
          <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px]">
            Стена проходится.
          </h2>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[18px]">
            Не обходом. Не ожиданием «пока будет готово».<br />
            Одним core-сценарием, работающим на прод-домене.
          </p>

          <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[16px] py-[10px] mb-[14px]">
            <p className="text-[13px] text-[hsl(var(--slide-text))] font-bold leading-[1.3]">
              На следующей встрече тестируем живьём
            </p>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[3px]">
              Приноси URL, а не отговорки
            </p>
          </div>

          <p className="text-[12px] text-[hsl(var(--slide-gold))] font-medium">
            Построение Mikey продолжается. Построение вашего — тоже.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
      <div className="text-center max-w-[1100px]">
        <h2 className="font-display text-[84px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px]">
          Стена проходится.
        </h2>
        <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.55] mb-[48px]">
          Не обходом. Не ожиданием «пока будет готово».<br />
          Одним core-сценарием, работающим на прод-домене,<br />
          и одним постом, в котором звучит ваш голос.
        </p>

        <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[16px] px-[48px] py-[28px] mb-[44px] inline-block">
          <p className="text-[32px] text-[hsl(var(--slide-text))] font-bold leading-[1.3]">
            На Неделе 6 — живые 60-секундные тесты
          </p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[8px]">
            Приноси URL, а не отговорки
          </p>
        </div>

        <p className="text-[28px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Построение Mikey продолжается.<br />
          Построение вашего — тоже.
        </p>
      </div>
    </div>
  );
}
