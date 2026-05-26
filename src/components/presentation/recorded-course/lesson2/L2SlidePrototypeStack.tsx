import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  {
    name: "Lovable",
    price: "$20/мес или free tier",
    when: "Web-продукт с UI",
    fits: "B2C SaaS, marketplaces, dashboards, лендинги, формы",
    what: "Визуальный билдер + AI: пишешь промпт — получаешь рабочее приложение. Supabase auth и Stripe из коробки. Деплоится автоматически.",
    time: "Первый MVP — за вечер",
  },
  {
    name: "Claude Code",
    price: "$20-200/мес",
    when: "Нужен real backend",
    fits: "Кастомная логика, API, AI-агенты, интеграции, всё что не помещается в no-code",
    what: "Терминальный assistant: пишет код в твоём репо, запускает команды, читает файлы, исполняет тесты. Не chat — полноценный со-разработчик.",
    time: "Production-ready — за выходные",
  },
  {
    name: "OpenAI Codex",
    price: "Внутри ChatGPT Plus",
    when: "Async-задачи в репо",
    fits: "Параллельные задачи, рутинные фиксы, ревью PR, изоморфные изменения по всему репо",
    what: "Cloud-agent c GitHub-интеграцией. Даёшь задачу — Codex работает в фоне, открывает PR. Хорошо параллелится.",
    time: "Малые правки — минуты, большие — в фоне",
  },
];

export default function L2SlidePrototypeStack() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Стек для прототипа
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Lovable / Claude Code / Codex — что когда
        </h2>
        <div className="space-y-[10px]">
          {tools.map((t) => (
            <div key={t.name} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[12px] py-[10px] bg-[hsl(var(--slide-gold)/0.04)]">
              <div className="flex items-baseline justify-between mb-[3px]">
                <p className="text-[13px] font-bold text-[hsl(var(--slide-text))]">{t.name}</p>
                <p className="text-[9px] text-[hsl(var(--slide-gold))] font-medium">{t.price}</p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">{t.when}</p>
              <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[3px]"><span className="text-[hsl(var(--slide-text))] font-semibold">Подходит:</span> {t.fits}</p>
              <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[3px]">{t.what}</p>
              <p className="text-[10px] text-[hsl(var(--slide-gold))] font-medium">{t.time}</p>
            </div>
          ))}
        </div>
        <div className="mt-[12px] bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[8px]">
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Соло-фаундер 2026: эти 3 заменяют джуна-разраба + фронтенд + DevOps.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[50px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Стек для прототипа
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        Lovable / Claude Code / Codex — что когда
      </h2>
      <div className="grid grid-cols-3 gap-[24px] max-w-[1900px] mb-[24px]">
        {tools.map((t) => (
          <div key={t.name} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[26px] py-[22px] bg-[hsl(var(--slide-gold)/0.04)] flex flex-col">
            <div className="flex items-baseline justify-between mb-[10px]">
              <p className="text-[26px] font-bold text-[hsl(var(--slide-text))]">{t.name}</p>
              <p className="text-[13px] text-[hsl(var(--slide-gold))] font-medium">{t.price}</p>
            </div>
            <p className="text-[14px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">{t.when}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[10px]"><span className="text-[hsl(var(--slide-text))] font-semibold">Подходит:</span> {t.fits}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[10px]">{t.what}</p>
            <p className="text-[15px] text-[hsl(var(--slide-gold))] font-medium mt-auto">{t.time}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1900px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Соло-фаундер 2026: эти 3 заменяют <span className="text-[hsl(var(--slide-gold))]">джуна-разраба + фронтенд + DevOps</span>.
        </p>
      </div>
    </div>
  );
}
