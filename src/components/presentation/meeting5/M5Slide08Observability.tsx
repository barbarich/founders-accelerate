import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  {
    name: "Supabase",
    what: "PostgreSQL + Auth + Storage + Realtime API — всё в одном. Backend без backend-разработчика.",
    pros: [
      "Старт бесплатно — до 500 МБ и 50K запросов/мес",
      "Claude пишет SQL — понятный язык, не ORM",
      "Auth из коробки — email, Google, GitHub за 10 мин",
      "RLS — безопасность данных на уровне БД, не кода",
      "MCP-коннектор — Claude работает с базой напрямую",
    ],
    cons: [
      "Vendor lock-in: миграция на другую БД — боль",
      "Free лимиты кончаются при росте (~$25/мес потом)",
      "Realtime сложнее при 10К+ одновременных соединений",
    ],
    why: "Настраивается за час. Claude пишет миграции сам. Не нужен DBA.",
  },
  {
    name: "Vercel",
    what: "Хостинг для Next.js: автодеплой, CDN, edge functions, preview на каждый PR.",
    pros: [
      "git push → живой URL за 90 секунд",
      "Preview URL на каждый PR — показываешь инвесторам до мержа",
      "CDN в 100+ странах — быстро для всех",
      "Zero-config для Next.js — работает сразу",
      "Аналитика и логи в дашборде",
    ],
    cons: [
      "Serverless limits: функция живёт 10 сек на free",
      "Дорожает при трафике (Hobby $0 → Pro $20/мес)",
      "Vendor lock-in на Next.js — другой фреймворк сложнее",
    ],
    why: "Деплой без DevOps. Домен в 2 клика. Инфра сама масштабируется.",
  },
];

export default function M5Slide08Observability() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Backend + Deploy
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Почему Supabase + Vercel для MVP
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Полный стек от нуля до прода за $0 — без DevOps и backend-разработчика.
        </p>
        <div className="space-y-[6px]">
          {tools.map((t, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">{t.name}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[4px]">{t.what}</p>
              <p className="text-[7.5px] text-[hsl(142_50%_65%)] font-bold mb-[1px]">+ Плюсы</p>
              {t.pros.slice(0, 3).map((p, j) => <p key={j} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">— {p}</p>)}
              <p className="text-[7.5px] text-[hsl(0_60%_70%)] font-bold mt-[3px] mb-[1px]">− Минусы</p>
              {t.cons.slice(0, 2).map((c, j) => <p key={j} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">— {c}</p>)}
              <p className="text-[7.5px] text-[hsl(var(--slide-gold))] font-bold mt-[3px]">→ {t.why}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Backend + Deploy
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Почему Supabase + Vercel для MVP
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1200px]">
        Полный стек от нуля до прода за $0 — без DevOps и backend-разработчика.
      </p>

      <div className="grid grid-cols-2 gap-[24px] max-w-[1500px] mb-[18px]">
        {tools.map((t, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[26px] py-[20px]">
            <p className="text-[24px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">{t.name}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[14px]">{t.what}</p>

            <div className="grid grid-cols-2 gap-[12px] mb-[12px]">
              <div>
                <p className="text-[12px] uppercase tracking-[0.12em] text-[hsl(142_50%_65%)] font-bold mb-[6px]">Плюсы</p>
                <div className="space-y-[4px]">
                  {t.pros.map((p, j) => (
                    <div key={j} className="flex items-start gap-[6px]">
                      <span className="text-[hsl(142_50%_65%)] text-[11px] mt-[1px] shrink-0">+</span>
                      <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.12em] text-[hsl(0_60%_70%)] font-bold mb-[6px]">Минусы</p>
                <div className="space-y-[4px]">
                  {t.cons.map((c, j) => (
                    <div key={j} className="flex items-start gap-[6px]">
                      <span className="text-[hsl(0_60%_70%)] text-[11px] mt-[1px] shrink-0">−</span>
                      <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-[hsl(var(--slide-border)/0.3)] pt-[10px]">
              <p className="text-[14px] text-[hsl(var(--slide-gold))] font-bold">→ {t.why}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.07)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[28px] py-[14px] max-w-[1500px]">
        <p className="text-[18px] text-[hsl(var(--slide-gold))] font-bold">
          При 1000 юзеров — переходи. До 1000 — не думай об этом.
        </p>
        <p className="text-[14px] text-[hsl(var(--slide-text-muted))] mt-[4px]">
          Supabase и Vercel созданы для старта. Когда вырастешь — мигрируешь на AWS/GCP с деньгами и командой. Сейчас — просто строй продукт.
        </p>
      </div>
    </div>
  );
}
