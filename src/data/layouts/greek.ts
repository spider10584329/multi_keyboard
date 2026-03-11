/**
 * Greek (standard monotonic) keyboard layout.
 *
 * Structure mirrors the Nepali layout exactly:
 *   Row 0  ΄ 1–0 - =  + Bksp          (13 char keys)
 *   Row 1  Tab + ;–π [ ]               (12 keys, matches standard Greek QWERTY)
 *   Row 2  Caps + α–λ ά ¨ + Enter      (11 keys)
 *   Row 3  Shift + ζ–μ , . / + Shift   (10 keys)
 *   Row 4  Ctrl  Space  Close
 *
 * Normal / Shift layers follow the standard Greek monotonic keyboard.
 * Caps layer is omitted — the shiftValue fallback produces uppercase letters.
 */

import type { KeyboardLayout } from "./types";

export const greekLayout: KeyboardLayout = {
  id: "greek",
  label: "Ελληνικά",
  rows: [
    // ── Row 0 : ΄ 1–0 - = Bksp ──────────────────────────────────────────────
    // Normal : ΄  1 2 3 4 5 6 7 8 9 0  -  =  ⌫
    // Shift  : ~  ! @ # $ % ^ & * ( )  _  +  ⌫
    [
      { id: "gr_grv",  label: "΄",  value: "΄",  shiftValue: "~",  codePoint: "U+0384" },
      { id: "gr_1",    label: "1",  value: "1",  shiftValue: "!",  codePoint: "U+0031" },
      { id: "gr_2",    label: "2",  value: "2",  shiftValue: "@",  codePoint: "U+0032" },
      { id: "gr_3",    label: "3",  value: "3",  shiftValue: "#",  codePoint: "U+0033" },
      { id: "gr_4",    label: "4",  value: "4",  shiftValue: "$",  codePoint: "U+0034" },
      { id: "gr_5",    label: "5",  value: "5",  shiftValue: "%",  codePoint: "U+0035" },
      { id: "gr_6",    label: "6",  value: "6",  shiftValue: "^",  codePoint: "U+0036" },
      { id: "gr_7",    label: "7",  value: "7",  shiftValue: "&",  codePoint: "U+0037" },
      { id: "gr_8",    label: "8",  value: "8",  shiftValue: "*",  codePoint: "U+0038" },
      { id: "gr_9",    label: "9",  value: "9",  shiftValue: "(",  codePoint: "U+0039" },
      { id: "gr_0",    label: "0",  value: "0",  shiftValue: ")",  codePoint: "U+0030" },
      { id: "gr_min",  label: "-",  value: "-",  shiftValue: "_",  codePoint: "U+002D" },
      { id: "gr_eq",   label: "=",  value: "=",  shiftValue: "+",  codePoint: "U+003D" },
      { id: "gr_bksp", label: "⌫",  action: "backspace", width: "wide" },
    ],

    // ── Row 1 : Tab ;–π [ ] ─────────────────────────────────────────────────
    // Normal : [⇥] ;  ς  ε  ρ  τ  υ  θ  ι  ο  π  [  ]
    // Shift  :     :  Σ  Ε  Ρ  Τ  Υ  Θ  Ι  Ο  Π  {  }
    [
      { id: "r1_tab",   label: "⇥",  action: "tab", width: "wide" },
      { id: "gr_q",     label: ";",  value: ";",  shiftValue: ":",  codePoint: "U+003B" },
      { id: "gr_w",     label: "ς",  value: "ς",  shiftValue: "Σ",  codePoint: "U+03C2" },
      { id: "gr_e",     label: "ε",  value: "ε",  shiftValue: "Ε",  codePoint: "U+03B5" },
      { id: "gr_r",     label: "ρ",  value: "ρ",  shiftValue: "Ρ",  codePoint: "U+03C1" },
      { id: "gr_t",     label: "τ",  value: "τ",  shiftValue: "Τ",  codePoint: "U+03C4" },
      { id: "gr_y",     label: "υ",  value: "υ",  shiftValue: "Υ",  codePoint: "U+03C5" },
      { id: "gr_u",     label: "θ",  value: "θ",  shiftValue: "Θ",  codePoint: "U+03B8" },
      { id: "gr_i",     label: "ι",  value: "ι",  shiftValue: "Ι",  codePoint: "U+03B9" },
      { id: "gr_o",     label: "ο",  value: "ο",  shiftValue: "Ο",  codePoint: "U+03BF" },
      { id: "gr_p",     label: "π",  value: "π",  shiftValue: "Π",  codePoint: "U+03C0" },
      { id: "gr_lbr",   label: "[",  value: "[",  shiftValue: "{",  codePoint: "U+005B" },
      { id: "gr_rbr",   label: "]",  value: "]",  shiftValue: "}",  codePoint: "U+005D" },
    ],

    // ── Row 2 : Caps α–λ ά ¨ Enter ──────────────────────────────────────────
    // Normal : [⇪] α  σ  δ  φ  γ  η  ξ  κ  λ  ά  ¨  [↵]
    // Shift  :     Α  Σ  Δ  Φ  Γ  Η  Ξ  Κ  Λ  Ά  ΅
    [
      { id: "r2_caps",  label: "⇪",  action: "caps",  width: "wide" },
      { id: "gr_a",     label: "α",  value: "α",  shiftValue: "Α",  codePoint: "U+03B1" },
      { id: "gr_s",     label: "σ",  value: "σ",  shiftValue: "Σ",  codePoint: "U+03C3" },
      { id: "gr_d",     label: "δ",  value: "δ",  shiftValue: "Δ",  codePoint: "U+03B4" },
      { id: "gr_f",     label: "φ",  value: "φ",  shiftValue: "Φ",  codePoint: "U+03C6" },
      { id: "gr_g",     label: "γ",  value: "γ",  shiftValue: "Γ",  codePoint: "U+03B3" },
      { id: "gr_h",     label: "η",  value: "η",  shiftValue: "Η",  codePoint: "U+03B7" },
      { id: "gr_j",     label: "ξ",  value: "ξ",  shiftValue: "Ξ",  codePoint: "U+03BE" },
      { id: "gr_k",     label: "κ",  value: "κ",  shiftValue: "Κ",  codePoint: "U+03BA" },
      { id: "gr_l",     label: "λ",  value: "λ",  shiftValue: "Λ",  codePoint: "U+03BB" },
      { id: "gr_sc",    label: "ά",  value: "ά",  shiftValue: "Ά",  codePoint: "U+03AC" },
      { id: "gr_ap",    label: "¨",  value: "¨",  shiftValue: "΅",  codePoint: "U+00A8" },
      { id: "r2_ent",   label: "↵",  action: "enter", width: "wide" },
    ],

    // ── Row 3 : Shift ζ–μ , . / Shift ──────────────────────────────────────
    // Normal : [⇧] ζ  χ  ψ  ω  β  ν  μ  ,  .  /  [⇧]
    // Shift  :     Ζ  Χ  Ψ  Ω  Β  Ν  Μ  <  >  ?
    [
      { id: "r3_shl",   label: "⇧",  action: "shift", width: "wide" },
      { id: "gr_z",     label: "ζ",  value: "ζ",  shiftValue: "Ζ",  codePoint: "U+03B6" },
      { id: "gr_x",     label: "χ",  value: "χ",  shiftValue: "Χ",  codePoint: "U+03C7" },
      { id: "gr_c",     label: "ψ",  value: "ψ",  shiftValue: "Ψ",  codePoint: "U+03C8" },
      { id: "gr_v",     label: "ω",  value: "ω",  shiftValue: "Ω",  codePoint: "U+03C9" },
      { id: "gr_b",     label: "β",  value: "β",  shiftValue: "Β",  codePoint: "U+03B2" },
      { id: "gr_n",     label: "ν",  value: "ν",  shiftValue: "Ν",  codePoint: "U+03BD" },
      { id: "gr_m",     label: "μ",  value: "μ",  shiftValue: "Μ",  codePoint: "U+03BC" },
      { id: "gr_cm",    label: ",",  value: ",",  shiftValue: "<",  codePoint: "U+002C" },
      { id: "gr_dt",    label: ".",  value: ".",  shiftValue: ">",  codePoint: "U+002E" },
      { id: "gr_sl",    label: "/",  value: "/",  shiftValue: "?",  codePoint: "U+002F" },
      { id: "r3_shr",   label: "⇧",  action: "shift", width: "wide" },
    ],

    // ── Row 4 : control ──────────────────────────────────────────────────────
    [
      { id: "gr_ctrl",  label: "Ctrl",  action: "ctrl",  width: "wide" },
      { id: "gr_space", label: "Space", action: "space", width: "extraWide" },
      { id: "gr_close", label: "✕",     action: "close" },
    ],
  ],
};
