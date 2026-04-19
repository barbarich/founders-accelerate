import M6PersonCard from "./M6PersonCard";
import { POST_AUTH_FLOW_PROMPT } from "./promptTemplates";

export default function M6Slide07Laura() {
  return (
    <M6PersonCard
      order={1}
      name="Laura"
      product="QA/RA assistant"
      state="Лендинг с waitlist есть, продукта пока нет. Сегодня — каркас целого продукта плюс рабочий первый флоу. На выходе — почти готовый продукт, не один экран."
      task="Собрать каркас продукта + первый флоу"
      taskDetail="Шаблон справа — полный каркас (навигация, разделы, dashboards) + детально проработанный первый флоу от входа до первого результата. Вторичные разделы заполняются mock-контентом, не заглушками. WOW — ощущение «продукт почти готов»."
      promptTitle="Шаблон post-auth flow (каркас + первый флоу)"
      promptBody={POST_AUTH_FLOW_PROMPT}
      criterion="Публичный URL с логином. Навигация из 3+ разделов, main workspace с рабочим первым флоу (вход → core action → результат), вторичные разделы с реалистичным mock-контентом. Чеклист раздела 8 пройден."
    />
  );
}
