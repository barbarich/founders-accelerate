

## Problem

The "In my own words" personal statement section on the Mentor page uses low-contrast text (`landing-text / 0.75` for body paragraphs) against the dark striped background, making it very hard to read — especially on mobile and in bright conditions (as shown in the screenshot).

## Plan

Make the personal statement block significantly more readable by brightening the text and improving typography for comfortable reading.

### Changes in `src/pages/Mentor.tsx` (lines 145–193)

1. **Increase text color/opacity for all paragraphs:**
   - First paragraph: keep `hsl(var(--landing-text))` (already white) — no change
   - Body paragraphs (middle): change from `hsl(var(--landing-text) / 0.75)` → `hsl(var(--landing-text) / 0.92)` — nearly white, easy to read
   - Last paragraph (accent): keep as accent color — no change

2. **Increase font size slightly for better readability:**
   - Body paragraphs: `text-base md:text-[17px]` → `text-[17px] md:text-lg`
   - First paragraph: `text-lg md:text-xl` → `text-xl md:text-2xl`

3. **Increase line-height** from `leading-[1.8]` → `leading-[1.9]` for more breathing room

4. **Add a subtle semi-transparent card background** behind the statement block to separate text from the busy striped background:
   - Wrap content in a container with `background: hsl(var(--landing-bg) / 0.7)`, `border-radius: 16px`, `padding: 2rem–3rem`, and a subtle border
   - This creates visual separation on both desktop and mobile, making text pop regardless of device

These changes ensure the text is bright, well-spaced, and visually separated from the textured background on all screen sizes.

