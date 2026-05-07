import { useIsMobile } from "@/hooks/use-mobile";

const tasks = [
  { n: "1", t: "Финализируйте MVP", d: "Минимальная рабочая версия продукта. Один ключевой сценарий должен работать от начала до конца — без багов и заглушек." },
  { n: "2", t: "Подключите аналитику", d: "Mixpanel или GA4. Настройте ключевое действие и базовые события. Без данных запускать рекламу нельзя." },
  { n: "3", t: "Встройте 1 механику возврата", d: "Выберите одну из пяти: streak, незаконченное, социальная, свежий контент или дедлайн. Внедрите в продукт." },
  { n: "4", t: "Подготовьте посадочную страницу", d: "Чёткое обещание, один CTA, форма регистрации. Это точка приземления для будущего трафика." },
];

export default function M8Slide24Homework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Задание · к встрече 9
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Финализируйте продукт перед запуском маркетинга
        </h2>
        <div className="space-y-[5px] mb-[8px]">
          {tasks.map((t) => (
            <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-baseline gap-[8px]">
                <span className="text-[11px] font-bold text-[hsl(var(--slide-gold))]">{t.n}</span>
                <span className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
              </div>
              <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[18px]">{t.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="text-[hsl(var(--slide-gold))] font-semibold">Цель: </span>к встрече 9 у вас должен быть продукт, на который можно вести трафик.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Задание · к встрече 9
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px] tracking-[-0.02em]">
        Финализируйте продукт перед запуском маркетинга
      </h2>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1500px] mb-[24px]">
        {tasks.map((t) => (
          <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[20px]">
            <div className="flex items-baseline gap-[14px] mb-[8px]">
              <span className="font-display text-[40px] font-bold text-[hsl(var(--slide-gold))] leading-none">{t.n}</span>
              <span className="text-[24px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
            </div>
            <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{t.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[20px] max-w-[1500px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.45]">
          <span className="text-[hsl(var(--slide-gold))] font-semibold">Цель: </span>к встрече 9 у вас должен быть готовый продукт, на который можно вести трафик и тестировать рекламу.
        </p>
      </div>
    </div>
  );
}