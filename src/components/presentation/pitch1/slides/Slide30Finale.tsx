import { Eyebrow, H1, Mono, Divider, SlideFrame, SlideFooter, COLORS } from "./_shared";

export default function Slide30Finale() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-9 text-center">
        <Eyebrow>Спасибо за эти 90 минут</Eyebrow>

        <H1 size={88}>
          Сегодня — карта.<br/>
          На программе — <span style={{ color: COLORS.accent }}>×10</span> ускорение.
        </H1>

        <div style={{ width: 480 }}><Divider /></div>

        <div className="text-left">
          <Mono size={22}>{`→  Глубже: реальные навыки, а не обзор
→  Личная работа со мной и обратная связь команды
→  Мотивация группы и ритм 4 встречи × 3 часа
→  Реальный шанс, что продукт начнёт приносить деньги`}</Mono>
        </div>

        <div style={{ fontSize: 24, color: COLORS.muted, lineHeight: 1.5, maxWidth: 1000, marginTop: 4 }}>
          Ссылка в чате — последний раз. Оффер ₪3,000 действует 48 часов.
        </div>
      </div>
      <SlideFooter>Михаэль</SlideFooter>
    </SlideFrame>
  );
}