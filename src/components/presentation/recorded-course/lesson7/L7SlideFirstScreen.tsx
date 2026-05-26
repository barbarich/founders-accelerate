import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  { t: "1 обещание", d: "Один заголовок в 5-10 слов. «Что получишь» в выгоде для клиента, не описании фичи." },
  { t: "0 регистрации", d: "До первого Aha — никаких форм. Email и пароль — после того как пользователь увидел ценность." },
  { t: "1 действие", d: "Только одна большая кнопка. «Start», «Try», «See it». Никаких вторичных опций." },
  { t: "Pre-filled пример", d: "Покажи продукт в действии до того, как пользователь что-то ввёл. Demo data, пример workflow, шаблон." },
  { t: "Aha видна с порога", d: "Что увидит первый раз → должно быть тем, чем продукт известен. Notion = template. Canva = canvas. Figma = frame." },
];

export default function L7SlideFirstScreen() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Первый экран = путь к Aha
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          5 правил первого экрана
        </h2>
        <p className="text-[10.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[12px]">
          Каждое правило сокращает дистанцию до Aha. Нарушение каждого — потеря пользователей.
        </p>
        <div className="space-y-[8px]">
          {rules.map((r, i) => (
            <div key={i} className="border-l-2 border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-gold)/0.04)] pl-[10px] py-[6px]">
              <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{r.t}</p>
              <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Первый экран = путь к Aha
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.01em]">
        5 правил первого экрана
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1700px] mb-[32px]">
        Каждое правило сокращает дистанцию до Aha. Нарушение каждого — потеря пользователей.
      </p>
      <div className="space-y-[16px] max-w-[1800px]">
        {rules.map((r, i) => (
          <div key={i} className="border-l-[4px] border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-gold)/0.04)] pl-[28px] py-[14px]">
            <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] mb-[6px]">{r.t}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{r.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
