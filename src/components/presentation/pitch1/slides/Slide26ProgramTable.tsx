import { Eyebrow, H2, Mono, Divider, SlideFrame, COLORS } from "./_shared";

export default function Slide26ProgramTable() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-8">
        <div className="text-center"><Eyebrow>From Zero to Launch</Eyebrow></div>
        <H2 size={36}>30 дней</H2>
        <Mono size={22}>{`Неделя 1   ваш клиент, ваш рынок    →  валидированная идея
Неделя 2   ресерч, позиционирование →  что НЕ строить
Неделя 3   MVP с AI                 →  работающий продукт
Неделя 4   первые платящие          →  запуск с клиентами`}</Mono>
        <div style={{ width: 600, marginTop: 12 }}><Divider /></div>
        <div style={{ fontSize: 18, color: COLORS.muted, textAlign: "center" }}>
          4 встречи × 3 часа · Группа до 8 человек · Я в чате между встречами
        </div>
      </div>
    </SlideFrame>
  );
}