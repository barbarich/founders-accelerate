export default function M1Slide15Interview() {
  const rules = [
    { icon: "🎯", title: "Спрашивай про прошлое", text: "Только реальный опыт. «Как решали?», «Что пробовали?» — не «Купили бы?»" },
    { icon: "🤐", title: "80/20: слушай vs говори", text: "Ты задаёшь вопрос и молчишь. Клиент говорит 80% времени. Не подсказывай ответ." },
    { icon: "🔍", title: "Копай вглубь", text: "На каждый ответ — «Почему?», «Расскажите подробнее», «Что именно?». Минимум 3 уровня вглубь." },
    { icon: "⏱️", title: "15–20 минут максимум", text: "Короткие, фокусные разговоры. Один сегмент — одна проблема. Не пытайся узнать всё за раз." },
    { icon: "📝", title: "Записывай дословно", text: "Не интерпретируй на лету. Записывай цитаты как есть — анализ потом." },
    { icon: "🔄", title: "Проси рефералы", text: "«Кто ещё сталкивается с этим?» — каждое интервью должно генерить следующее." },
  ];

  const antiPatterns = [
    "Питчить свою идею вместо вопросов",
    "Спрашивать «Вы бы купили?» — люди врут",
    "Задавать наводящие вопросы с ответом внутри",
    "Говорить больше, чем слушать",
    "Игнорировать неудобные ответы",
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Customer Development</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px]">
        Правила custdev-интервью
      </h2>

      <div className="flex gap-[28px]">
        <div className="flex-[3]">
          <div className="grid grid-cols-2 gap-[16px]">
            {rules.map((item, i) => (
              <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[10px] p-[22px]">
                <div className="flex items-center gap-[10px] mb-[8px]">
                  <span className="text-[24px]">{item.icon}</span>
                  <h3 className="text-[18px] font-semibold text-[hsl(var(--slide-text))]">{item.title}</h3>
                </div>
                <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-[1.2] bg-[hsl(0,60%,20%/0.15)] border border-[hsl(0,50%,50%/0.3)] rounded-[12px] p-[28px]">
          <h3 className="text-[20px] font-semibold text-[hsl(0,70%,65%)] mb-[18px]">🚫 Как нельзя</h3>
          <div className="space-y-[14px]">
            {antiPatterns.map((item, i) => (
              <div key={i} className="flex items-start gap-[10px]">
                <span className="text-[hsl(0,70%,65%)] text-[16px] mt-[2px]">✕</span>
                <p className="text-[16px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
