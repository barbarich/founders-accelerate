

## Plan

### 1. Make thank-you route language-aware

**App.tsx**: Add route `/:lang/thank-you` that wraps `ThankYou` in `LanguageProvider` (same pattern as `LangApply`). Keep `/thank-you` as fallback redirecting to `/en/thank-you`.

**Apply.tsx**: Change `navigate("/thank-you")` → `navigate(`/${lang}/thank-you`)`.

### 2. Add translations to ThankYou page

**ThankYou.tsx**: Use `useLanguage()` to get current lang. Define inline translations object for 4 languages (en, ru, ua, he) with:

- **Title**: "Спасибо за твой интерес!" / "Thank you for your interest!" / "Дякуємо за твій інтерес!" / "!תודה על העניין שלך"
- **Body** (personal message): The provided text adapted naturally for each language — thanking for interest, inviting to a 15-min call to understand their project/idea and discuss if the program is a good fit. Signed "Michael Barbarich, CEO The Founders Circle"
- **CTA**: "Pick a time that works for you →" in each language
- **Back link**: "Back to Home" in each language

Layout: keep the current two-column grid. Left side: check icon → title → personal letter-style message (warm, first-person) → signature block (name + title) → CTA with calendar icon → back link. Right side: TidyCal embed.

Text styling: bright white (`landing-text`), good line-height, readable sizes. Signature slightly styled (name bold, title muted).

### 3. RTL support

The `LanguageProvider` already wraps content in `dir="rtl"` for Hebrew — the grid and text will adapt automatically.

