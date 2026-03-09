import photo from "@/assets/slides/photo-michael.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

const bullets = [
  "16 лет в бизнесе, 7 из них в tech",
  "2 экзита (tech-продукты + ресторанный бизнес)",
  "Опыт CEO в международных компаниях",
  "Построил продукты от $0 до $8M ARR",
  "50,000+ платящих клиентов в 107 странах",
  "10 лет в Израиле",
  "Сейчас: MetaMinder (B2B SaaS) + mymikey.ai (AI-стартап)",
];

export default function Slide02WhoAmI() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col">
        <div className="h-[200px] relative">
          <img src={photo} alt="Михаэль Барбарич" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(var(--slide-bg))]" />
        </div>
        <div className="flex-1 flex flex-col justify-center px-[28px] -mt-[20px]">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">О себе</p>
          <h2 className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-[4px]">Кто я</h2>
          <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mb-[20px] italic">
            Действующий предприниматель. Строю продукты и сейчас.
          </p>
          <div className="space-y-[10px]">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-[8px]">
                <div className="w-[4px] h-[4px] rounded-full bg-[hsl(var(--slide-gold))] mt-[6px] shrink-0" />
                <p className="text-[13px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex">
      <div className="w-[700px] h-full relative">
        <img src={photo} alt="Михаэль Барбарич" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(var(--slide-bg))]" />
      </div>
      <div className="flex-1 flex flex-col justify-center px-[100px]">
        <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">О себе</p>
        <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-[12px]">Кто я</h2>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[48px] italic">
          Действующий предприниматель. Строю продукты и сейчас.
        </p>
        <div className="space-y-[20px]">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-[16px]">
              <div className="w-[8px] h-[8px] rounded-full bg-[hsl(var(--slide-gold))] mt-[10px] shrink-0" />
              <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
