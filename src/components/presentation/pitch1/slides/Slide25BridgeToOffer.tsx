import { Eyebrow, H1, Divider, Mono, SlideFrame, COLORS } from "./_shared";

export default function Slide25BridgeToOffer() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10 text-center">
        <Eyebrow>За 90 минут мы прошли</Eyebrow>

        <Mono size={24}>{`→  Как валидировать идею и убедиться, что её купят
→  Как разговаривать с людьми и слышать рынок
→  Как собрать MVP с AI и довести до запуска
→  Инструменты, бест-практис, промпты`}</Mono>

        <div style={{ width: 520 }}><Divider /></div>

        <H1 size={64}>Это была карта.<br/>Дальше — маршрут.</H1>

        <div style={{ fontSize: 26, color: COLORS.muted, lineHeight: 1.5, maxWidth: 1100 }}>
          Я приглашаю вас в свою 12-часовую программу: 4 встречи по 3 часа,
          индивидуальная работа над вашим проектом, путь AI-фаундера от идеи
          до первых платящих — под моим руководством.
        </div>
      </div>
    </SlideFrame>
  );
}