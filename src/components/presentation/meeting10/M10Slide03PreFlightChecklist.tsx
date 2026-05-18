import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  {
    n: "01",
    t: "Лендинг с измеримой целью",
    body: "Sign up / Buy / Get demo — одно действие, одна кнопка. Если цель — «узнать о продукте», рекламу запускать рано.",
  },
  {
    n: "02",
    t: "Meta Pixel · живой и стреляет",
    body: "Установлен на лендинге. В Events Manager видны свежие события (PageView, AddToCart, Lead, Purchase). Без пикселя оптимизировать нечего.",
  },
  {
    n: "03",
    t: "Business Manager + Page + Instagram",
    body: "Facebook Page существует и привязана к Business Manager. Instagram аккаунт подключён. На странице 5+ постов и аватарка — иначе low quality score.",
  },
  {
    n: "04",
    t: "Платёжный метод привязан",
    body: "Карта в Ad Account. Лимит установлен (страховка). Без warmup аккаунта НЕ заливать $100/день — заблокируют.",
  },
  {
    n: "05",
    t: "5–10 креативов готовы",
    body: "Из M9 workshop'а — половина статика, половина видео. Если креативов нет, на встрече нечего публиковать. Из тех ассистентов: Higgsfield, Nano Banana, Canva.",
  },
  {
    n: "06",
    t: "Conversion event выбран осознанно",
    body: "Что считаем «успехом»? Purchase, если есть продажи. Lead — если собираешь email. ViewContent — если объём событий пока маленький.",
  },
];

export default function M10Slide03PreFlightChecklist() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Pre-flight · что должно быть готово ДО
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Шесть пунктов. Без них реклама — <span className="text-[hsl(var(--slide-gold))]">сжигание денег</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Этот чек-лист = домашка из M9. Если что-то не закрыто — закрываем прямо сейчас, до Ads Manager.
        </p>
        <div className="grid grid-cols-2 gap-[4px]">
          {items.map((it) => (
            <div key={it.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[5px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{it.n}.</span> {it.t}
              </p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] ml-[12px]">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Pre-flight · что должно быть готово ДО первой кнопки Publish
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Шесть пунктов. Без них реклама — <span className="text-[hsl(var(--slide-gold))]">сжигание денег</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1600px]">
        Этот чек-лист = домашка из M9. Если что-то не закрыто — закрываем прямо сейчас, до Ads Manager.
      </p>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1700px]">
        {items.map((it) => (
          <div key={it.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[24px] py-[18px]">
            <div className="flex items-baseline gap-[12px] mb-[6px]">
              <span className="font-display text-[30px] font-bold text-[hsl(var(--slide-gold))] leading-none">{it.n}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{it.t}</span>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[44px]">{it.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
