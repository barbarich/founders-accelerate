import { useIsMobile } from "@/hooks/use-mobile";

const sections = [
  {
    icon: "🔐",
    title: "Авторизация",
    tool: "Supabase Auth",
    why: "Без авторизации вы не знаете кто ваш пользователь и не можете сохранять его данные",
    options: [
      { label: "Вход через Google", desc: "Один клик — самая высокая конверсия регистрации. Юзеру не нужен пароль", best: "B2C продукты" },
      { label: "Email + пароль", desc: "Классика, работает везде. Добавь подтверждение email", best: "Универсально" },
      { label: "Magic link", desc: "Email без пароля — юзер получает ссылку для входа на почту", best: "Простые продукты" },
    ],
    prompt: "Подключи Supabase Auth. Добавь вход через Google и email/пароль. На главной — кнопка «Войти» в хедере. После входа — редирект на /dashboard. Незалогиненных юзеров редиректь на /login при попытке открыть защищённые страницы.",
  },
  {
    icon: "💳",
    title: "Приём оплаты",
    tool: "Stripe / Grow",
    why: "Stripe — мировой стандарт, лучшее API. В Израиле Stripe не работает — используйте Grow (Meshulam): Bit, Apple Pay, рассрочка до 12 платежей",
    options: [
      { label: "Подписка", desc: "Ежемесячный платёж с автосписанием. Stripe сам уведомляет твою базу когда оплата прошла или отменилась", best: "SaaS, сервисы" },
      { label: "Разовый платёж", desc: "Одна оплата — постоянный доступ. Проще в реализации", best: "Курсы, шаблоны" },
      { label: "Freemium", desc: "Бесплатный тариф с лимитами + платный без лимитов", best: "Рост базы" },
    ],
    prompt: "Подключи Stripe (Израиль — Grow/Meshulam). Создай /pricing с тарифами: Free (до 100 записей) и Pro $29/мес (безлимит). Кнопка «Upgrade» → Checkout. После успешной оплаты Stripe сам обновляет поле plan в таблице users в Supabase (Claude настроит этот автоматический канал — см. Урок 6).",
  },
];

export default function L4Slide12AuthPayments() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Монетизация
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Авторизация и оплата
        </h2>
        <div className="space-y-[10px]">
          {sections.map((s, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <div className="flex items-center gap-[6px] mb-[4px]">
                <span className="text-[14px]">{s.icon}</span>
                <span className="text-[11px] font-semibold text-[hsl(var(--slide-text))]">{s.title}</span>
                <span className="text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[4px] py-[1px] rounded ml-auto">{s.tool}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[4px]">{s.why}</p>
              <div className="flex gap-[4px] mb-[4px]">
                {s.options.map((o, j) => (
                  <div key={j} className="flex-1 bg-[hsl(var(--slide-bg))] rounded px-[4px] py-[3px]">
                    <p className="text-[8px] font-semibold text-[hsl(var(--slide-text))]">{o.label}</p>
                    <p className="text-[7px] text-[hsl(var(--slide-gold))]">{o.best}</p>
                  </div>
                ))}
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-gold))] font-mono bg-[hsl(var(--slide-gold)/0.06)] px-[6px] py-[4px] rounded leading-[1.4]">{s.prompt}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Монетизация
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px]">
        Авторизация и оплата
      </h2>

      <div className="grid grid-cols-2 gap-[24px] max-w-[1300px]">
        {sections.map((s, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[28px] py-[24px] flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-[12px] mb-[8px]">
              <span className="text-[32px]">{s.icon}</span>
              <div>
                <h3 className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{s.title}</h3>
                <span className="text-[13px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[8px] py-[2px] rounded inline-block mt-[2px]">
                  {s.tool}
                </span>
              </div>
            </div>

            {/* Why */}
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[14px]">{s.why}</p>

            {/* Options */}
            <div className="grid grid-cols-3 gap-[8px] mb-[14px]">
              {s.options.map((o, j) => (
                <div key={j} className="bg-[hsl(var(--slide-bg))] rounded-[8px] px-[12px] py-[10px]">
                  <p className="text-[14px] font-semibold text-[hsl(var(--slide-text))] mb-[2px]">{o.label}</p>
                  <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[4px]">{o.desc}</p>
                  <p className="text-[11px] text-[hsl(var(--slide-gold))]">{o.best}</p>
                </div>
              ))}
            </div>

            {/* Prompt */}
            <div className="mt-auto">
              <p className="text-[11px] uppercase tracking-widest text-[hsl(var(--slide-gold)/0.5)] mb-[6px]">Промпт</p>
              <p className="text-[13px] text-[hsl(var(--slide-gold))] font-mono bg-[hsl(var(--slide-gold)/0.06)] px-[16px] py-[12px] rounded-[8px] leading-[1.55]">
                {s.prompt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
