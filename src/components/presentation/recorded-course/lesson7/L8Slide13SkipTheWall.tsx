import { useIsMobile } from "@/hooks/use-mobile";

const oldFlow = ["Зарегистрируйся", "Подтверди email", "Создай команду", "Создай проект", "Выбери шаблон", "Начни рисовать"];
const newFlow = ["Открыл сайт", "Пустой холст", "Рисуй"];

const exceptions = [
  { tag: "Финтех / банкинг", reason: "KYC и регуляторика — действие невозможно без идентификации." },
  { tag: "Медицина / здоровье", reason: "Персональные данные с первого шага, законы о приватности." },
  { tag: "B2B SaaS с командой", reason: "Ценность = совместная работа. Без аккаунта нет workspace." },
  { tag: "Маркетплейсы (для продавцов)", reason: "Нужен профиль, верификация, выплаты. Покупателю — наоборот, можно без регистрации." },
];

export default function L8Slide13SkipTheWall() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Главное правило экрана 2
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          По умолчанию — результат раньше регистрации.
        </h2>
        <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[10px]">
          Регистрация — это плата. Берите её, когда юзер уже понял ценность. Но есть продукты, где иначе нельзя.
        </p>
        <div className="space-y-[5px] mb-[8px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-400/30 rounded-[6px] px-[10px] py-[7px]">
            <p className="text-[9px] uppercase tracking-[0.1em] text-red-400 mb-[4px] font-semibold">✗ Старая модель — Figma до 2018</p>
            <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{oldFlow.join(" → ")}</p>
            <p className="text-[8px] text-red-400 mt-[3px] font-semibold">6 шагов до действия = 80% уходит</p>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.4)] rounded-[6px] px-[10px] py-[7px]">
            <p className="text-[9px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[4px] font-semibold">✓ Новая модель — Figma с 2018</p>
            <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4]">{newFlow.join(" → ")}</p>
            <p className="text-[8px] text-[hsl(var(--slide-gold))] mt-[3px] font-semibold">1 шаг = в 4 раза больше остаются</p>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-text-muted)/0.25)] rounded-[6px] px-[10px] py-[6px]">
          <p className="text-[8.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-text-muted))] mb-[3px] font-semibold">Когда регистрация ДО действия оправдана</p>
          <ul className="space-y-[2px]">
            {exceptions.map((e) => (
              <li key={e.tag} className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">
                <span className="text-[hsl(var(--slide-gold))] font-semibold">{e.tag}:</span> {e.reason}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mt-[6px]">
          Спросите себя: я не могу дать результат без регистрации — или просто боюсь её отложить?
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Главное правило экрана 2
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
        По умолчанию — результат раньше регистрации.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[24px] max-w-[1600px]">
        Регистрация — это плата. Берите её, когда юзер уже понял ценность. Но есть категории, где иначе нельзя.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px] mb-[20px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-400/30 rounded-[14px] px-[28px] py-[24px]">
          <p className="text-[14px] uppercase tracking-[0.15em] text-red-400 mb-[14px] font-semibold">✗ Старая модель — Figma до 2018</p>
          <div className="space-y-[6px] mb-[12px]">
            {oldFlow.map((step, i) => (
              <p key={i} className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                <span className="font-mono text-[hsl(var(--slide-gold))] mr-[8px]">{i + 1}.</span>{step}
              </p>
            ))}
          </div>
          <p className="text-[18px] text-red-400 font-semibold leading-[1.3]">
            6 шагов до первого действия = 80% уходят
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-[2px] border-[hsl(var(--slide-gold)/0.5)] rounded-[14px] px-[28px] py-[24px]">
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[14px] font-semibold">✓ Новая модель — Figma с 2018</p>
          <div className="space-y-[6px] mb-[12px]">
            {newFlow.map((step, i) => (
              <p key={i} className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.4]">
                <span className="font-mono text-[hsl(var(--slide-gold))] mr-[8px]">{i + 1}.</span>{step}
              </p>
            ))}
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4] mt-[10px]">
              Email — только когда хочешь сохранить.
            </p>
          </div>
          <p className="text-[18px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.3]">
            1 шаг до действия = в 4 раза больше остаются
          </p>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-text-muted)/0.25)] rounded-[12px] px-[28px] py-[18px] max-w-[1700px] mb-[18px]">
        <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] mb-[10px] font-semibold">
          Когда регистрация ДО действия оправдана
        </p>
        <div className="grid grid-cols-2 gap-x-[28px] gap-y-[6px]">
          {exceptions.map((e) => (
            <p key={e.tag} className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
              <span className="text-[hsl(var(--slide-gold))] font-semibold">{e.tag}:</span> {e.reason}
            </p>
          ))}
        </div>
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1700px] leading-[1.4]">
        Тест: я физически не могу дать результат без регистрации — или просто боюсь её отложить? Если второе — выносим email после первого «вау».
      </p>
    </div>
  );
}
