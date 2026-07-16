import L8MechanicSlide from "./L8MechanicSlide";

export default function L8Slide14Mechanic4FreshContent() {
  return (
    <L8MechanicSlide m={{
      number: "4",
      name: "Свежий контент к моменту возврата",
      oneLiner: "Если ничего не изменилось — возвращаться не на что.",
      examples: [
        "Netflix: «вышел новый сезон сериала, который ты смотришь»",
        "Spotify: «Discover Weekly обновился — 30 треков под твой вкус»",
        "YouTube: «12 новых видео с каналов, на которые ты подписан»",
      ],
      screen: "«Для тебя сегодня: 12 новых». Большая обложка. Дата. Один тап — открыть.",
      howToApply: "Парсинг + AI работают на тебя 24/7. Ночью генерируй персональную подборку под user_id. Один новый блок к утру = причина открыть бота/приложение.",
      noCode: "Lovable AI (Gemini Flash) ночью генерирует подборку из истории кликов и фильтров. Парсер квартир — n8n / Apify по расписанию. Сохраняем в daily_picks, утром шлём в WhatsApp/push.",
    }} />
  );
}