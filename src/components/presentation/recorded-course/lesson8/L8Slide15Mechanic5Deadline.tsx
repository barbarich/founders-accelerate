import L8MechanicSlide from "./L8MechanicSlide";

export default function L8Slide15Mechanic5Deadline() {
  return (
    <L8MechanicSlide m={{
      number: "5",
      name: "Внешний дедлайн",
      oneLiner: "Календарь возвращает лучше любого маркетолога.",
      examples: [
        "Google Calendar: «встреча завтра в 10:00 — 3 участника ждут»",
        "Booking.com: «до заезда 2 дня — подтверди время прибытия»",
        "Amazon: «до конца Prime Day осталось 4 часа»",
      ],
      screen: "Карточка-счётчик: «18:42 до начала». Кнопка действия. Привязка к Google Calendar.",
      howToApply: "Привяжи продукт к реальной дате пользователя: дата аудита, сессия с ментором, просмотр квартиры, запись эпизода. Календарь сделает работу за тебя — не ты пишешь «вернись», а реальность напоминает.",
      noCode: "Cal.com / Tally → автодобавление .ics в письмо и WhatsApp. Reminder через SendPulse за 24ч и за 1ч. Для аудита — обратный отсчёт от даты проверки в шапке кабинета.",
    }} />
  );
}