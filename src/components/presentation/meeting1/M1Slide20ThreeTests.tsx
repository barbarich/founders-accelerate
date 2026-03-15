export default function M1Slide20ThreeTests() {
  const tests = [
    { icon: "⏱️", title: 'Тест "5 секунд"', text: "Зачитайте незнакомому человеку. Понял о чём и для кого? Если нет — переписывайте." },
    { icon: "👩", title: 'Тест "мама"', text: 'Расскажите кому-то не из вашей ниши. Если спросил "а как это работает?" — зацепило. Если кивнул и промолчал — не зацепило.' },
    { icon: "🖥️", title: 'Тест "лендинг"', text: "Можно поставить заголовком первого экрана? Если человек за 5 секунд поймёт что это и для кого — готово." },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Три теста позиционирования</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[64px]">
        Проверьте прежде чем выйти к людям
      </h2>
      <div className="flex gap-[40px]">
        {tests.map((t, i) => (
          <div key={i} className="flex-1 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[hsl(var(--slide-gold)/0.4)] to-transparent" />
            <div className="pt-[36px]">
              <span className="text-[48px]">{t.icon}</span>
              <h3 className="text-[26px] font-semibold text-[hsl(var(--slide-text))] mt-[20px] mb-[16px]">{t.title}</h3>
              <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
