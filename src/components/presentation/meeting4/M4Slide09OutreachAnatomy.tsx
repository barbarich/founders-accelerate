import { useIsMobile } from "@/hooks/use-mobile";

const formula = [
  { step: "Наблюдение", emoji: "🔍", desc: "Покажи что изучил ИХ ситуацию", example: "«Видел ваш [пост / продукт / комментарий] про [тему] — заметил что [конкретная деталь]»" },
  { step: "Инсайт", emoji: "💡", desc: "Дай ценность ДО продажи", example: "«Мы решали похожую задачу и нашли что [конкретный инсайт / цифра / подход] — делюсь, может пригодится»" },
  { step: "Мост", emoji: "🌉", desc: "Свяжи инсайт со своим продуктом", example: "«Собственно, из этого вырос [продукт] — он делает [результат] за [время]»" },
  { step: "Мягкий CTA", emoji: "🤝", desc: "Низкий порог — без давления", example: "«Интересно глянуть? Могу скинуть доступ / 2-минутное видео — без звонков и демо»" },
];

export default function M4Slide09OutreachAnatomy() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Формула
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Сообщение которое<br />не игнорируют
        </h2>
        <div className="space-y-[8px]">
          {formula.map((f, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <div className="flex items-center gap-[6px] mb-[4px]">
                <span className="text-[14px]">{f.emoji}</span>
                <span className="text-[11px] font-bold text-[hsl(var(--slide-gold))]">{f.step}</span>
                <span className="text-[9px] text-[hsl(var(--slide-text-muted))]">— {f.desc}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4] ml-[20px]">{f.example}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Формула
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[56px]">
        Сообщение которое<br />не игнорируют
      </h2>

      <div className="space-y-[20px] max-w-[1200px]">
        {formula.map((f, i) => (
          <div key={i} className="flex items-start gap-[24px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[32px] py-[24px]">
            <span className="text-[36px] shrink-0">{f.emoji}</span>
            <div>
              <div className="flex items-center gap-[12px] mb-[8px]">
                <span className="text-[24px] font-bold text-[hsl(var(--slide-gold))]">{f.step}</span>
                <span className="text-[20px] text-[hsl(var(--slide-text-muted))]">— {f.desc}</span>
              </div>
              <p className="text-[18px] text-[hsl(var(--slide-text-muted))] italic leading-[1.5]">{f.example}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
