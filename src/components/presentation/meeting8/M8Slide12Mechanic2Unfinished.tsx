import M8MechanicSlide from "./M8MechanicSlide";

export default function M8Slide12Mechanic2Unfinished() {
  return (
    <M8MechanicSlide m={{
      number: "2",
      name: "Незаконченное дело",
      oneLiner: "Мозг не выносит открытых задач. Эффект Зейгарник — работает с 1927 года.",
      examples: ["LinkedIn «профиль 60%»", "Notion onboarding-чек-лист", "Trello starter board"],
      screen: "Прогресс-бар со списком: ✓ ✓ ◯ ◯ ◯. Видна следующая микро-задача на 1 клик.",
      howToApply: "Разбей путь до ценности на 5 шагов. Покажи прогресс-бар на главной. Каждое возвращение — закрыть один шаг.",
      noCode: "Tally / Lovable: чек-лист в profiles.onboarding_steps[]. Email через Loops при 24ч простоя на одном шаге.",
    }} />
  );
}