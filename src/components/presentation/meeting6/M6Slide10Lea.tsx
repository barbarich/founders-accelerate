import M6PersonCard from "./M6PersonCard";
import { POST_AUTH_FLOW_PROMPT } from "./promptTemplates";

export default function M6Slide10Lea() {
  return (
    <M6PersonCard
      order={4}
      name="Lea"
      product="Default She"
      state="Платформа существует с несколькими возможными направлениями. Сегодня первое решение — выбрать ОДНУ категорию, на которой фокусируемся. Потом — флоу от авторизации до Aha-момента под эту категорию."
      task="Выбрать первую категорию → собрать флоу от входа до Aha"
      taskDetail="Сначала решение: одна категория, куда идём первыми. Узкий аватар, одна боль, одно ключевое действие внутри продукта. Под неё — шаблон справа: флоу auth → первое действие → первый результат → Aha-момент. Остальные категории — potentially later."
      promptTitle="Шаблон post-auth flow (каркас + первый флоу)"
      promptBody={POST_AUTH_FLOW_PROMPT}
      criterion="Default She в проде с одной выбранной категорией в фокусе. Флоу от login до Aha проходится end-to-end, ведёт юзера к конкретной ценности. 3 женщины из выбранного аватара прошли без блоков. Чеклист раздела 8 пройден."
    />
  );
}
