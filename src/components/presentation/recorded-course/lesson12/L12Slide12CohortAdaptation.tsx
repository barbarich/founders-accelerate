import { useIsMobile } from "@/hooks/use-mobile";

const productTypes = [
  {
    name: "Веб-сервис с бесплатным входом",
    track: "Регистрация · первый вход",
    body: "Цель - регистрация и первый вход в продукт. Objective = Sales/Conversions, событие = CompleteRegistration. Креативы: демо интерфейса, результат, который человек получит внутри, «до/после». Hook не про «попробуй платформу», а про то, что он унесёт.",
    brief: "Objective = Conversions, событие = CompleteRegistration. Креатив: демо интерфейса + результат внутри.",
  },
  {
    name: "Платный продукт с оплатой на сайте",
    track: "Подписка, курс, доступ · покупка",
    body: "Цель - оплата. Objective = Sales, событие = Purchase; если Purchase пока не набирает 50 событий в неделю - оптимизируй на InitiateCheckout или регистрацию. Креативы: цена и оффер прямо в кадре, конкретный результат, отзыв или скриншот результата.",
    brief: "Objective = Sales, событие = Purchase (fallback - InitiateCheckout). Креатив: цена и оффер в кадре.",
  },
  {
    name: "Услуга или консалтинг",
    track: "Лид · закрываешь на звонке",
    body: "Цель - лид, которого ты закрываешь голосом. Objective = Leads, instant-форма или лендинг с выбором слота в календаре. Креативы: кейс «было - стало», твоё лицо и голос в камеру, hook про деньги и время клиента, а не про твой метод.",
    brief: "Objective = Leads, форма или слот в календаре. Креатив: кейс «было - стало», ты в камеру.",
  },
  {
    name: "Бот в мессенджере",
    track: "Telegram, WhatsApp · переход в бота",
    body: "Целевое действие - открыть диалог с ботом. Conversion location = Messenger или WhatsApp, CTA = Send Message (click-to-message). Креатив: скриншот самого диалога - человек должен заранее увидеть, что его ждёт внутри. Hook: «сделай X за 5 минут прямо в чате».",
    brief: "Conversion location = Messenger/WhatsApp, CTA = Send Message. Креатив: скриншот диалога с ботом.",
  },
  {
    name: "Мобильное приложение",
    track: "Установка · первое действие",
    body: "Objective = App Promotion, событие = Install; когда данных станет достаточно - оптимизируй на первое ключевое действие внутри приложения через App Events. Креативы: вертикальное видео с экраном приложения, первые 2 секунды - результат, а не логотип.",
    brief: "Objective = App Promotion, событие = Install, дальше - App Events. Креатив: вертикальное видео с экраном.",
  },
  {
    name: "B2B с длинным циклом сделки",
    track: "Лидген-воронка, не баннеры",
    body: "Прямые «купи продукт» креативы в B2B почти не работают. Твой формат - lead-magnet: чеклист, мини-гайд, бенчмарк по индустрии. Objective = Leads, форма с рабочим email и компанией. Дальше nurture-цепочка и звонок; Meta здесь - только верх воронки.",
    brief: "Lead-magnet + Objective = Leads, форма с рабочим email. Дальше nurture-цепочка и звонок.",
  },
];

export default function L12Slide12CohortAdaptation() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Адаптация под свой продукт
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Что меняется <span className="text-[hsl(var(--slide-gold))]">для каждого типа продукта</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Схема одна. Objective, событие и креативы - разные. Найди свой тип и примени шаги 1-5 на своём кабинете.
        </p>
        <div className="space-y-[3px]">
          {productTypes.map((p) => (
            <div key={p.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[4px]">
              <div className="flex items-baseline justify-between gap-[4px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{p.name}</p>
                <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] shrink-0">{p.track}</p>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{p.brief}</p>
            </div>
          ))}
        </div>
        <p className="text-[7px] text-[hsl(var(--slide-text)/0.7)] leading-[1.4] mt-[6px]">
          Жильё, финансы, работа, медицина - обязательно Special Ad Category, иначе блокировка. Таргетинг урежут: вся ставка на креатив.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Адаптация под свой продукт · перед запуском
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
        Что меняется <span className="text-[hsl(var(--slide-gold))]">для каждого типа продукта</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1700px]">
        Схема настройки одна для всех. Разные - Objective, событие оптимизации и креативы. Найди свой тип продукта и примени шаги 1-5 на своём кабинете.
      </p>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1700px]">
        {productTypes.map((p) => (
          <div key={p.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[22px] py-[16px]">
            <p className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[6px]">{p.name}</p>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[8px]">{p.track}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">{p.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] text-[hsl(var(--slide-text)/0.72)] leading-[1.5] mt-[20px] max-w-[1700px]">
        Отдельно: если твой продукт про жильё, финансы и кредиты, работу или медицину - в кампании обязательно ставь Special Ad Category, иначе аккаунт заблокируют. Таргетинг по возрасту, полу и узкому гео там урезан, поэтому вся ставка идёт на креатив и оффер.
      </p>
    </div>
  );
}
