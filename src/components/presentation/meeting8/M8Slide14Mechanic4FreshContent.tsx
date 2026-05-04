import M8MechanicSlide from "./M8MechanicSlide";

export default function M8Slide14Mechanic4FreshContent() {
  return (
    <M8MechanicSlide m={{
      number: "4",
      name: "Свежий контент к моменту возврата",
      oneLiner: "Если ничего не изменилось — возвращаться не на что.",
      examples: ["Spotify Daily Mix", "TikTok For You", "Pinterest рекомендации", "Substack daily digest"],
      screen: "«Для вас сегодня: 12 новых». Большая обложка. Дата.",
      howToApply: "Раз в день генерируй персональный контент на основе истории. Даже один новый блок ломает «нечего смотреть».",
      noCode: "Lovable AI (Gemini Flash) ночью генерирует подборку под user_id из истории кликов. Сохраняем в daily_picks.",
    }} />
  );
}