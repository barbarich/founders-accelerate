import M8MechanicSlide from "./M8MechanicSlide";

export default function M8Slide13Mechanic3Social() {
  return (
    <M8MechanicSlide m={{
      number: "3",
      name: "Социальный долг",
      oneLiner: "Кто-то ждёт ответа — самый дорогой триггер для совести.",
      examples: ["WhatsApp", "Instagram DM", "Slack mentions", "Tinder match"],
      screen: "Красный бейдж с именем и аватаром. «Анна ответила на ваш комментарий».",
      howToApply: "Если в продукте 2+ пользователя — введи ответы, реакции, лайки. Уведомление становится приглашением, а не рекламой.",
      noCode: "Supabase Realtime + OneSignal: триггер на новый комментарий → push с именем автора. 5 минут настройки.",
    }} />
  );
}