import L8MechanicSlide from "./L8MechanicSlide";

export default function L8Slide11Mechanic1Streak() {
  return (
    <L8MechanicSlide m={{
      number: "1",
      name: "Прогресс и streak",
      oneLiner: "Не дать разорвать цепочку — самый сильный триггер из существующих.",
      examples: [
        "Duolingo: «X дней подряд учишь язык — не разорви серию»",
        "Snapchat: Snapstreak — огонёк с другом, пока пишете каждый день",
        "Apple Watch: «закрой три кольца активности и держи серию дней»",
      ],
      screen: "Виджет «47 дней подряд». Кружок дня. Анимация при прерывании цепочки.",
      howToApply: "У каждого студента есть действие, которое логично повторять. Подкаст — эпизод/неделю. Аудит — пункт чек-листа/день. Хобби — занятие/неделю. Покажи цепочку и сделай страшно её потерять.",
      noCode: "Lovable + Supabase: таблица streaks (user_id, last_action_at, current). Cron-функция обнуляет, если 24ч+/7д+ без действия.",
    }} />
  );
}