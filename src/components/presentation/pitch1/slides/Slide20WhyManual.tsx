import { H1, Mono, SlideFrame, SlideFooter, COLORS } from "./_shared";

export default function Slide20WhyManual() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10 text-center">
        <H1 size={56}>Правило первых 10 клиентов</H1>
        <div style={{ fontSize: 32, fontWeight: 500, color: COLORS.text }}>
          Не через рекламу. Не через Product Hunt.
        </div>
        <Mono size={22}>{`→ Рекламу не настроишь без позиционирования
→ Позиционирование не найдёшь без разговоров с купившими
→ Купившие руками покажут, за что реально платят`}</Mono>
      </div>
      <SlideFooter>Реклама работает — но после первых 10. Не до.</SlideFooter>
    </SlideFrame>
  );
}