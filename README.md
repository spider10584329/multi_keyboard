# Virtual Unicode Keyboard

A cross-platform on-screen keyboard built with React + TypeScript.  
Supports **Nepali (Devanagari / Mapalineda)**, **Latin (QWERTY)**, **Cyrillic (Russian)**, and **Greek** scripts.  
All output is pure Unicode — paste into any document or web form with no extra conversion.

---

## Features

- **Nepali / Devanagari** primary layout — consonants, matras, independent vowels, virama, anusvara, visarga, chandrabindu, Nepali digits, and common conjuncts (क्ष त्र ज्ञ श्र)
- Full **Latin**, **Cyrillic**, and **Greek** fallback layouts
- **One-tap layout switching** — tab-style, instant, no re-fetch or re-mount
- **One global keyboard** shared by every input on the page
- **Focus-driven target selection** — keyboard appears on field focus, inserts into the correct element
- **Touch and mouse** — `onPointerDown` + `preventDefault` keeps focus on the input while typing
- **Grapheme-aware backspace** — uses `Intl.Segmenter` (with `Array.from` fallback) so Devanagari combining marks are deleted correctly
- **Responsive** — scales from 320 px phones to 4K monitors using CSS `clamp()`
- **React Portal** rendering — always on top regardless of CSS stacking contexts
- Tested: Chrome, Firefox, Safari, Edge — desktop, iOS, Android

---

## Project structure

```
src/
  components/
    VirtualKeyboard/
      VirtualKeyboard.tsx        main panel + portal wrapper
      KeyboardKey.tsx            single key button
      LayoutTabs.tsx             script-selector tab strip
      keyboard.css               all keyboard styles
  context/
    KeyboardProvider.tsx         global state + insertKey logic
  hooks/
    useVirtualKeyboardTarget.ts  spread onto any editable element
  data/
    layouts/
      types.ts                   KeyDef / KeyboardLayout / LayoutId types
      mapalineda.ts              Nepali (Devanagari) key map
      latin.ts                   QWERTY key map
      cyrillic.ts                Russian ЙЦУКЕН key map
      greek.ts                   Modern Greek key map
      index.ts                   barrel export + layoutMap
  utils/
    insertText.ts                Unicode insertion (input / textarea / contentEditable)
    backspaceText.ts             grapheme-aware backspace
  pages/
    DemoPage.tsx                 demo: input, textarea, contentEditable + Unicode log
  App.tsx                        root: KeyboardProvider + DemoPage + VirtualKeyboardPortal
```

---

## Installation

```bash
# Install dependencies (already done if you scaffolded with create-react-app)
npm install

# Start the development server
npm start
```

The demo opens at `http://localhost:3000`.

---

## Basic usage — embed in any React page

### 1. Wrap your app root with `<KeyboardProvider>`

```tsx
import { KeyboardProvider } from "./context/KeyboardProvider";
import { VirtualKeyboardPortal } from "./components/VirtualKeyboard/VirtualKeyboard";

function App() {
  return (
    <KeyboardProvider defaultLayout="mapalineda">
      <YourPageContent />

      {/* Render once anywhere inside the provider */}
      <VirtualKeyboardPortal />
    </KeyboardProvider>
  );
}
```

`defaultLayout` accepts `"mapalineda"` | `"latin"` | `"cyrillic"` | `"greek"`.

### 2. Attach the keyboard to editable elements

```tsx
import { useVirtualKeyboardTarget } from "./hooks/useVirtualKeyboardTarget";

function MyForm() {
  const bind = useVirtualKeyboardTarget();

  return (
    <form>
      <input type="text"   {...bind} />
      <textarea            {...bind} />
      <div contentEditable {...bind} />
    </form>
  );
}
```

`bind` spreads four React event handlers: `onFocus`, `onBlur`, `onClick`, `onTouchStart`.  
The keyboard appears on focus and inserts Unicode directly into the active element.

---

## Customise the Nepali key mapping

Edit `src/data/layouts/mapalineda.ts`.

Each key is a `KeyDef` object:

```ts
type KeyDef = {
  id: string;          // unique React key (must be unique within the layout)
  label: string;       // visible character(s) on the key face
  value?: string;      // exact Unicode string inserted on press
  codePoint?: string;  // human-readable code point annotation, e.g. "U+0915"
  action?: "backspace" | "enter" | "space" | "shift" | "close";
  width?: "normal" | "wide" | "extraWide";
};
```

Example — adding a new conjunct:

```ts
{ id: "nna_ta", label: "न्त", value: "न्त", codePoint: "U+0928 U+094D U+0924" }
```

The `value` field is what gets inserted into the target element.  
Always store the final, composed Unicode string — never intermediate tokens.

---

## Customise colours and sizes

All visual tokens are CSS custom properties on `:root` in `keyboard.css`.  
Override in your own stylesheet, no source edits needed:

```css
:root {
  --vkb-bg:           #ffffff;
  --vkb-key-bg:       #f0f0f0;
  --vkb-key-color:    #111111;
  --vkb-key-height:   clamp(44px, 6vw, 60px);
  --vkb-tab-active-bg: #0066cc;
}
```

---

## Font notes

Devanagari glyphs require a font that includes the Unicode Devanagari block.  
The keyboard uses this font stack (in priority order):

1. **Noto Sans Devanagari** — best cross-platform coverage
2. **Mangal** — bundled with Windows
3. **Lohit Devanagari** — bundled with many Linux distros
4. **Kohinoor Devanagari** — bundled with macOS / iOS

To guarantee Noto Sans Devanagari on all platforms, add this to `public/index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wdth,wght@62.5..100,100..900&display=swap"
  rel="stylesheet"
/>
```

---

## Browser compatibility

| Browser | Platform | Notes |
|---------|----------|-------|
| Chrome 87+ | Desktop / Android | Full — Intl.Segmenter available |
| Firefox 126+ | Desktop | Full — Intl.Segmenter available |
| Safari 16.4+ | macOS / iOS | Full — Intl.Segmenter available |
| Edge 87+ | Desktop | Full |
| Older browsers | Any | Works — Array.from fallback used for backspace |

`touch-action: manipulation` removes the 300 ms tap delay on iOS and Android.  
`env(safe-area-inset-bottom)` prevents content hiding behind iPhone notch/home bar.

---

## Known limitations

- **IME composition** — not included. Scripts requiring a full input method engine (Japanese, Chinese, etc.) need an additional IME layer.
- **Shift / caps layer** — the Latin layout is lowercase only. Add a `shift` action key and a per-key `shiftValue` field to support uppercase and symbols.
- **Right-to-left scripts** — the layout system is left-to-right only.
- **Backspace edge cases** — `Intl.Segmenter` handles virtually all Devanagari clusters correctly. Extremely unusual ZWJ-based sequences may need further tuning.

---

## Running tests

```bash
npm test
```

Add layout-correctness tests in `src/data/layouts/__tests__/`:

```ts
import { mapalinedaLayout } from "../mapalineda";

test("ka key inserts correct Unicode", () => {
  const ka = mapalinedaLayout.rows[3][0]; // Row 3, first key = क
  expect(ka.value).toBe("\u0915");        // क
  expect(ka.codePoint).toBe("U+0915");
});

test("virama key inserts correct combining mark", () => {
  const virama = mapalinedaLayout.rows[2][13]; // ् (U+094D)
  expect(ka.value).toBe("\u094D");
});
```
