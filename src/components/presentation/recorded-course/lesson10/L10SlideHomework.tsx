import { useIsMobile } from "@/hooks/use-mobile";

const common = {
  title: "Для всех",
  body: "Напиши свою историю основателя по шаблону: «Я строю [продукт], потому что однажды [момент] - и понял [инсайт]». 3-5 предложений, вслух не стыдно.",
};

const b2b = [
  "Составь список 10 конкретных людей (не компаний - людей), которым продукт реально нужен.",
  "5 из них напиши лично: почему именно им, какую боль видишь, твоя история одной фразой.",
  "Цель недели - 1 живой разговор один на один. Записывай каждое возражение.",
];

const b2c = [
  "Опубликуй пост-историю на своей площадке. Замерь реакцию: сохранения, ответы, переходы.",
  "Запусти тест на $30-50 в день. Одна аудитория, один оффер, одна история.",
  "Сделано = видишь цифры клик → регистрация → активация и знаешь, где рвётся.",
];

export default function L10SlideHomework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Домашка · выбери свой путь
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          История для всех. Дальше - <span className="text-[hsl(var(--slide-gold))]">B2B или B2C</span>.
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px] mb-[8px]">
          <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[1px]">{common.title}</p>
          <p className="text-[9px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{common.body}</p>
        </div>
        <div className="grid grid-cols-2 gap-[8px]">
          <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[9px] py-[6px]">
            <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] mb-[3px]">B2B</p>
            {b2b.map((t, i) => (<p key={i} className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[2px]">· {t}</p>))}
          </div>
          <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[9px] py-[6px]">
            <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] mb-[3px]">B2C</p>
            {b2c.map((t, i) => (<p key={i} className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[2px]">· {t}</p>))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Домашка · выбери свой путь
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.01em]">
        История для всех. Дальше - <span className="text-[hsl(var(--slide-gold))]">B2B или B2C</span>.
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[28px] py-[16px] max-w-[1800px] mb-[20px]">
        <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">{common.title}</p>
        <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{common.body}</p>
      </div>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1800px]">
        <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[28px] py-[20px]">
          <p className="text-[26px] font-bold text-[hsl(var(--slide-gold))] mb-[12px]">B2B</p>
          <div className="space-y-[10px]">
            {b2b.map((t, i) => (<p key={i} className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">· {t}</p>))}
          </div>
        </div>
        <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[28px] py-[20px]">
          <p className="text-[26px] font-bold text-[hsl(var(--slide-gold))] mb-[12px]">B2C</p>
          <div className="space-y-[10px]">
            {b2c.map((t, i) => (<p key={i} className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">· {t}</p>))}
          </div>
        </div>
      </div>
    </div>
  );
}
