import M8MechanicSlide from "./M8MechanicSlide";

export default function M8Slide11Mechanic1Streak() {
  return (
    <M8MechanicSlide m={{
      number: "1",
      name: "Прогресс и streak",
      oneLiner: "Не дать разорвать цепочку — самый сильный триггер из существующих.",
      examples: ["Duolingo", "Headspace", "Snapchat streaks", "BeReal"],
      screen: "Виджет «47 дней подряд». Кружок дня. Анимация при прерывании.",
      howToApply: "Найди в продукте действие, которое имеет смысл повторять. Покажи цепочку. Покажи, что её страшно потерять.",
      noCode: "Lovable + Supabase: таблица streaks (user_id, last_action_at, current). Cron-функция обнуляет, если 24ч+ без действия.",
    }} />
  );
}