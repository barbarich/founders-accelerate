import { useIsMobile } from "@/hooks/use-mobile";

const paths = [
  {
    tag: "B2B",
    head: "Продаёшь лично, руками",
    points: [
      "Первые продажи = фаундер. Всегда.",
      "Пока нет 10 клиентов - сейлзы и реклама выкинутые деньги.",
      "Канал - твой личный outreach и история.",
    ],
  },
  {
    tag: "B2C",
    head: "История + маркетинг с малого бюджета",
    points: [
      "Сторителлинг и реклама дают первую активность.",
      "Тестируешь сразу, по $30-50 в день.",
      "Но история, которую хочется купить, - всё равно на тебе.",
    ],
  },
];

export default function L11SlideTwoPaths() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Дальше - две дороги
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          B2B и B2C стартуют <span className="text-[hsl(var(--slide-gold))]">по-разному</span>
        </h2>
        <div className="space-y-[8px]">
          {paths.map((p) => (
            <div key={p.tag} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[12px] py-[9px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))] mb-[1px]">{p.tag}</p>
              <p className="text-[10.5px] font-semibold text-[hsl(var(--slide-text))] mb-[5px]">{p.head}</p>
              {p.points.map((pt, i) => (
                <p key={i} className="text-[9.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">· {pt}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px] mt-[10px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Общее у обеих - <span className="text-[hsl(var(--slide-gold))]">личная работа фаундера</span>. Дальше разберём каждую дорогу.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Дальше - две дороги
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        B2B и B2C стартуют <span className="text-[hsl(var(--slide-gold))]">по-разному</span>
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1800px] mb-[24px]">
        {paths.map((p) => (
          <div key={p.tag} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[24px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[30px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">{p.tag}</p>
            <p className="text-[23px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">{p.head}</p>
            <div className="space-y-[10px]">
              {p.points.map((pt, i) => (
                <p key={i} className="text-[19px] text-[hsl(var(--slide-text)/0.82)] leading-[1.45]">· {pt}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Общее у обеих - <span className="text-[hsl(var(--slide-gold))]">личная работа фаундера</span>. Дальше разберём каждую дорогу.
        </p>
      </div>
    </div>
  );
}
