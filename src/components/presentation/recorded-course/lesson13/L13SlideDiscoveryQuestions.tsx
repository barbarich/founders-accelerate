import { useIsMobile } from "@/hooks/use-mobile";

const questions = [
  { n: "1", q: "«Как вы решаете это сегодня?»", why: "Текущий способ — твой настоящий конкурент. Чаще всего это таблица, переписка и один человек, который «всё помнит»." },
  { n: "2", q: "«Сколько это стоит вам в часах и деньгах?»", why: "Без цифры сделки нет. Цифру называет клиент — тогда это его цифра, и он же будет ею защищать покупку внутри." },
  { n: "3", q: "«Что уже пробовали и почему не подошло?»", why: "Узнаёшь, на чём тебя сравнят, и не наступаешь на те же грабли на демо." },
  { n: "4", q: "«Кто ещё будет участвовать в решении?»", why: "Задаётся в начале, не в конце. Ответ определяет, сколько недель займёт сделка." },
  { n: "5", q: "«Что должно произойти, чтобы вы сказали “да”?»", why: "Клиент сам вслух проговаривает условия сделки. Тебе остаётся их выполнить." },
  { n: "6", q: "«К какому сроку это нужно решить — и почему именно тогда?»", why: "Нет их даты — нет срочности. «Когда-нибудь» стоит тебе трёх месяцев календаря." },
];

export default function L13SlideDiscoveryQuestions() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Первый звонок
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          6 вопросов, <span className="text-[hsl(var(--slide-gold))]">которые решают всё</span>
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Первый звонок — не показ продукта. Продукт ты покажешь на втором, когда будешь знать, что показывать.
        </p>
        <div className="space-y-[3px] mb-[6px]">
          {questions.map((x) => (
            <div key={x.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[3px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{x.n}</span>
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{x.q}</span>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{x.why}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.4] mb-[2px]">
            Говоришь 30%, слушаешь 70%.
          </p>
          <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
            Записывай их словами, не своими. Эти формулировки потом идут в письма, на лендинг и в рекламу — бесплатно и точнее любого копирайтера.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Первый звонок
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px] tracking-[-0.02em]">
        6 вопросов, <span className="text-[hsl(var(--slide-gold))]">которые решают всё</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1700px] leading-[1.45]">
        Первый звонок — это не показ продукта. Продукт покажешь на втором, когда будешь знать, что именно показывать.
      </p>
      <div className="space-y-[9px] max-w-[1700px] mb-[18px]">
        {questions.map((x) => (
          <div key={x.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[11px]">
            <div className="flex items-baseline gap-[14px] mb-[2px]">
              <span className="font-display text-[26px] font-bold text-[hsl(var(--slide-gold))] leading-none">{x.n}</span>
              <span className="text-[21px] font-bold text-[hsl(var(--slide-text))]">{x.q}</span>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[40px]">{x.why}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1700px]">
        <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[4px]">
          Говоришь 30%, слушаешь 70%. Пауза после вопроса — твой главный инструмент.
        </p>
        <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
          Записывай ответы их словами, не своими. Эти формулировки потом идут в письма, на лендинг и в рекламу — точнее любого копирайтера и бесплатно.
        </p>
      </div>
    </div>
  );
}
