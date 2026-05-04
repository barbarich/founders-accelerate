import M8MechanicSlide from "./M8MechanicSlide";

export default function M8Slide15Mechanic5Deadline() {
  return (
    <M8MechanicSlide m={{
      number: "5",
      name: "Внешний дедлайн",
      oneLiner: "Календарь возвращает лучше любого маркетолога.",
      examples: ["Booking «бронь через 2 дня»", "Klarna платёж", "Calendly встреча", "Airbnb заезд"],
      screen: "Карточка-счётчик: «18:42 до начала». Кнопка действия. Привязка к Google Calendar.",
      howToApply: "Привяжи продукт к реальной дате юзера: дедлайн, встреча, платёж. Календарь сделает работу за тебя.",
      noCode: "Cal.com / Tally → автодобавление .ics в письмо. Reminder через Loops за 24ч и за 1ч.",
    }} />
  );
}