export default function M1Slide15Interview() {
  const rules = [
    { icon: "🎯", title: "Спрашивай про прошлое", text: "Только реальный опыт. «Как решали?», «Что пробовали?» — не «Купили бы?»" },
    { icon: "🤐", title: "80/20: слушай vs говори", text: "Клиент говорит 80% времени. Не подсказывай ответ." },
    { icon: "🔍", title: "Копай вглубь", text: "«Почему?», «Расскажите подробнее». Минимум 3 уровня вглубь." },
    { icon: "⏱️", title: "15–20 минут", text: "Короткие, фокусные. Один сегмент — одна проблема." },
    { icon: "📝", title: "Записывай дословно", text: "Не интерпретируй. Цитаты как есть — анализ потом." },
    { icon: "🔄", title: "Проси рефералы", text: "«Кто ещё сталкивается?» — каждое интервью генерит следующее." },
  ];

  const antiPatterns = [
    "Питчить свою идею вместо вопросов",
    "Спрашивать «Вы бы купили?»",
    "Наводящие вопросы с ответом внутри",
    "Говорить больше, чем слушать",
    "Игнорировать неудобные ответы",
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[20px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Customer Development</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[44px]">
        Правила custdev-интервью
      </h2>

      <div className="flex gap-[32px]">
        <div className="flex-[3]">
          <div className="grid grid-cols-2 gap-[20px]">
            {rules.map((item, i) => (
              <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[28px]">
                <div className="flex items-center gap-[12px] mb-[10px]">
                  <span className="text-[30px]">{item.icon}</span>
                  <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))]">{item.title}</h3>
                </div>
                <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-[1.2] bg-[hsl(0,60%,20%/0.15)] border border-[hsl(0,50%,50%/0.3)] rounded-[12px] p-[32px] flex flex-col">
          <h3 className="text-[24px] font-semibold text-[hsl(0,70%,65%)] mb-[24px]">🚫 Как нельзя</h3>
          <div className="space-y-[20px] flex-1 flex flex-col justify-center">
            {antiPatterns.map((item, i) => (
              <div key={i} className="flex items-start gap-[12px]">
                <span className="text-[hsl(0,70%,65%)] text-[20px] mt-[1px]">✕</span>
                <p className="text-[20px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
