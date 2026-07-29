import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    n: "01",
    t: "Создать датасет",
    body: "В Events Manager нажимаешь «подключить источник данных» и получаешь номер из 15-16 цифр. В 2026 Meta называет пиксель датасетом - это одно и то же.",
  },
  {
    n: "02",
    t: "Поставить код на сайт",
    body: "Один кусок кода в шапку сайта, на все страницы. Он сам начинает считать посещения. Вставляет Claude за 10 минут, а на Shopify и Wix это вообще одна кнопка.",
  },
  {
    n: "03",
    t: "Отметить целевое действие",
    body: "Ещё одна строка - на странице «спасибо». Именно она говорит Meta «вот это для меня успех». Сумму указываешь всегда: без неё алгоритм ищет любую покупку, с ней - крупные.",
  },
  {
    n: "04",
    t: "Проверить до запуска",
    body: "В Events Manager есть режим проверки: проходишь путь покупателя сам и смотришь, доходят ли данные. Пять минут здесь экономят недели и слитый бюджет.",
  },
];

export default function L12SlidePixelInstall() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Рычаг 2 · Данные · пиксель
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Пиксель ставится <span className="text-[hsl(var(--slide-gold))]">за четыре шага</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[8px]">
          Пиксель - это счётчик на твоём сайте. Он рассказывает Meta, что человек сделал после клика по рекламе.
        </p>
        <div className="grid grid-cols-2 gap-[5px] mb-[7px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[5px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
                <span className="text-[hsl(var(--slide-gold))]">{s.n}.</span> {s.t}
              </p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] ml-[12px]">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Пошаговая инструкция с кодом, ссылками и промптом - в дополнительных материалах урока.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Рычаг 2 · Данные · пиксель
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Пиксель ставится <span className="text-[hsl(var(--slide-gold))]">за четыре шага</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1600px]">
        Пиксель - это счётчик на твоём сайте. Он рассказывает Meta, что человек сделал после клика по рекламе.
      </p>
      <div className="grid grid-cols-2 gap-[20px] mb-[24px] max-w-[1700px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[18px]">
            <div className="flex items-baseline gap-[12px] mb-[6px]">
              <span className="font-display text-[30px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{s.t}</span>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[44px]">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[30px] py-[16px] max-w-[1700px]">
        <p className="text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
          Пошаговая инструкция с кодом, ссылками и промптом - в дополнительных материалах урока.
        </p>
      </div>
    </div>
  );
}
