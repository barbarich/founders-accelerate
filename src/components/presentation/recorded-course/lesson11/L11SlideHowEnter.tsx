import { useIsMobile } from "@/hooks/use-mobile";

const moves = [
  { t: "Живые сообщества", d: "Приходишь как участник, не как реклама. Помогаешь, отвечаешь, показываешь продукт по делу." },
  { t: "Личные продажи", d: "Первые 10 клиентов - руками: знакомые, друзья, знакомые знакомых. Каждое «нет» - это данные." },
  { t: "Выступления и сцена", d: "Конференции, митапы, подкасты по теме аудитории. Один хороший доклад = десятки тёплых лидов." },
  { t: "Демо продукта", d: "Не рассказ, а показ вживую. В сложном продукте демо + ручное сопровождение закрывают лучше любого лендинга." },
];

export default function L11SlideHowEnter() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[18px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Как войти первым
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[7px]">
          Первое касание - <span className="text-[hsl(var(--slide-gold))]">руками, не рекламой.</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[8px]">
          Реклама - потом. Пока не докажешь, что берут, работают четыре бесплатных канала:
        </p>
        <div className="space-y-[5px]">
          {moves.map((m) => (
            <div key={m.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{m.t}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Как войти первым · без бюджета
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Первое касание - <span className="text-[hsl(var(--slide-gold))]">руками, не рекламой.</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[22px] max-w-[1650px]">
        Реклама - потом. Пока не докажешь руками, что берут, работают четыре бесплатных канала. Заодно они дают понимание, как твой продукт реально покупают.
      </p>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1700px]">
        {moves.map((m) => (
          <div key={m.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[16px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">{m.t}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">{m.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
