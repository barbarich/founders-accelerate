import { useIsMobile } from "@/hooks/use-mobile";

const places = [
  { name: "Telegram / FB-группы", move: "Ищи по ключевым словам и боли клиента. Зайди в группы конкурентов - их подписчики = твоя аудитория. Читай, о чём спрашивают." },
  { name: "LinkedIn", move: "Найди 10 лидеров мнений в нише → смотри, кто комментит их посты → это твои потенциальные клиенты и решающие лица." },
  { name: "Reddit / форумы", move: "Ищи «best alternative to [конкурент]» или «how do you solve [проблема]». Люди уже описали свою боль своими словами." },
  { name: "Отзывы конкурентов", move: "Зайди на сайт и в соцсети конкурента, найди их отзывы и комьюнити. Недовольные их клиенты = твои первые клиенты." },
  { name: "Q&A площадки", move: "Quora и профильные площадки. Кто задаёт вопросы по твоей теме - тот и есть клиент. Отвечай по делу и веди к себе." },
  { name: "События", move: "Конференции, митапы, вебинары по теме. Твои люди уже сами приходят туда слушать - будь там, где они собрались." },
];

export default function L11SlideWhereMethod() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Где искать · конкретный ход
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Аудитория уже собрана. <span className="text-[hsl(var(--slide-gold))]">Вот где искать и что делать.</span>
        </h2>
        <div className="space-y-[4px]">
          {places.map((p) => (
            <div key={p.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[9px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{p.name}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{p.move}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[32px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Где искать · конкретный ход для каждого места
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em] max-w-[1700px]">
        Аудитория уже собрана. <span className="text-[hsl(var(--slide-gold))]">Вот где искать и что делать.</span>
      </h2>
      <div className="grid grid-cols-2 gap-[14px] max-w-[1750px]">
        {places.map((p) => (
          <div key={p.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[24px] py-[13px]">
            <p className="text-[21px] font-bold text-[hsl(var(--slide-gold))] leading-[1.15] mb-[3px]">{p.name}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4]">{p.move}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
