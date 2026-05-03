# О проекте The Founders Circle

URL сайта: https://founders-circle.space
Email: michael.barbarych@gmail.com  ·  hello@founders-circle.space
Основатель: Михаэль Барбарич (https://www.linkedin.com/in/michael-barbarich)

## Что это

The Founders Circle — это:

1. **Акселератор «From Zero to Launch»** — 12-недельная программа для соло-фаундеров,
   строящих AI-продукты. Микро-когорты по 5–7 человек. См. /llms/accelerator-landing.md.
2. **Мини-курс «AI-продукт, который покупают»** — $19, 5 уроков, ~4 часа.
   См. /llms/mini-course-landing.md.
3. **AI-агенты от команды:** FoundersLens (/agents/lens), PMF Agent (/agents/pmf).

## Языки

Сайт поддерживает 4 языка: русский (по умолчанию), английский, украинский, иврит (RTL).
Контент мини-курса — на русском.

## Маршрутизация (для AI / краулеров)

Сайт построен как SPA на React + Vite. Прямой HTTP-запрос вернёт пустую
оболочку index.html. Полный текст ключевых страниц доступен как статический
Markdown:

- /llms.txt — индекс
- /llms/mini-course-landing.md — мини-курс (главная)
- /llms/accelerator-landing.md — акселератор
- /llms/mentor.md — ментор
- /llms/program.md — учебный план
- /llms/about.md — этот файл
- /mini-course/lesson1.md — урок 1 мини-курса (полный текст слайдов)

## Юридические страницы

- /:lang/privacy — Privacy Policy
- /:lang/terms — Terms of Service
- /:lang/contact — контакты