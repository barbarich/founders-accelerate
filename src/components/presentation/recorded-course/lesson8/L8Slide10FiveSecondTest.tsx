import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { num: "1", text: "Найдите человека, который не знает, что у вас за продукт. Партнёр, друг, мама — любой." },
  { num: "2", text: "Покажите свой первый экран на 5 секунд. Закройте." },
  { num: "3", text: "Спросите: «Что ты получишь, если нажмёшь?»" },
];

const verdicts = [
  { mark: "✓", color: "gold", title: "Точный ответ", desc: "«Я получу X» — экран работает." },
  { mark: "?", color: "muted", title: "Расплывчатый", desc: "«Что-то полезное», «не уверен» — экран сломан. Переписать." },
  { mark: "✗", color: "red", title: "Про продукт, не про себя", desc: "«Это какая-то платформа для…» — переписать срочно." },
];

export default function L8Slide10FiveSecondTest() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Тест на 5 секунд
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Проверка, работает ли ваш первый экран.
        </h2>
        <div className="space-y-[4px] mb-[8px]">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-[8px] items-start">
              <span className="font-mono text-[11px] text-[hsl(var(--slide-gold))] font-bold shrink-0 w-[14px]">{s.num}.</span>
              <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="space-y-[4px]">
          {verdicts.map((v, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.15)] rounded-[6px] px-[8px] py-[4px] flex gap-[8px] items-start">
              <span className={`font-bold shrink-0 ${v.color === "gold" ? "text-[hsl(var(--slide-gold))]" : v.color === "red" ? "text-red-400" : "text-[hsl(var(--slide-text-muted))]"}`}>{v.mark}</span>
              <div>
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{v.title}</p>
                <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[8px] leading-[1.4]">
          Тест занимает 2 минуты. Фаундеры годами не делают его, потому что страшно.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Тест на 5 секунд
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px]">
        Проверка, работает ли ваш первый экран.
      </h2>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1500px] mb-[24px]">
        {steps.map((s) => (
          <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[24px] py-[20px]">
            <span className="font-mono text-[42px] text-[hsl(var(--slide-gold))] font-bold leading-none block mb-[12px]">{s.num}</span>
            <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.4]">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-[12px] max-w-[1500px] mb-[20px]">
        {verdicts.map((v, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.15)] rounded-[10px] px-[20px] py-[14px] flex gap-[14px] items-start">
            <span className={`text-[28px] font-bold shrink-0 leading-none ${v.color === "gold" ? "text-[hsl(var(--slide-gold))]" : v.color === "red" ? "text-red-400" : "text-[hsl(var(--slide-text-muted))]"}`}>{v.mark}</span>
            <div>
              <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[3px]">{v.title}</p>
              <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Тест занимает 2 минуты. Но фаундеры годами держат сломанные первые экраны, потому что страшно его сделать. Сегодня делаем.
      </p>
    </div>
  );
}
