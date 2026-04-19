import M6PersonCard from "./M6PersonCard";
import { POST_AUTH_FLOW_PROMPT } from "./promptTemplates";

export default function M6Slide08Mila() {
  return (
    <M6PersonCard
      order={2}
      name="Mila"
      product="Hobbix"
      state="Hobbix живой, лендинг работает. Сегодня — продуманный флоу после авторизации: что видит юзер, как удерживаем внимание, как показываем ценность за первые минуты."
      task="Продуманный флоу после авторизации → ценность"
      taskDetail="Шаблон справа — спека целого каркаса + детально первого флоу. Твой фокус: что происходит сразу после login, как завлекаем юзера в продукт, как доносим ценность Hobbix не словами, а действиями. Не просто экран — путь, который удерживает."
      promptTitle="Шаблон post-auth flow (каркас + первый флоу)"
      promptBody={POST_AUTH_FLOW_PROMPT}
      criterion="Обновлённый Hobbix задеплоен. Юзер после login проходит продуманный путь: завлечение → первое действие → ощутимая ценность. Вторичные разделы с realistic mock-контентом. Чеклист раздела 8 пройден."
    />
  );
}
