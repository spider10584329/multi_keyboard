/**
 * Latin (QWERTY) keyboard layout.
 *
 * Structure mirrors the Nepali layout exactly:
 *   Row 0  ` 1–0 - =  + Bksp          (13 char keys)
 *   Row 1  Tab + q–p [ ]               (12 alpha/symbol keys)
 *   Row 2  Caps + a–l ; ' + Enter      (11 alpha/symbol keys)
 *   Row 3  Shift + z–/ + Shift         (10 char keys)
 *   Row 4  Ctrl  Space  Close
 *
 * Normal / Shift layers follow standard US-QWERTY.
 * Caps layer is omitted — the shiftValue fallback produces uppercase letters.
 */

import type { KeyboardLayout } from "./types";

export const latinLayout: KeyboardLayout = {
  id: "latin",
  label: "Latin",
  rows: [
    // ── Row 0 : ` 1–0 - = Bksp ──────────────────────────────────────────────
    // Normal : `  1 2 3 4 5 6 7 8 9 0  -  =  ⌫
    // Shift  : ~  ! @ # $ % ^ & * ( )  _  +  ⌫
    [
      { id: "l_grv",  label: "`",  value: "`",  shiftValue: "~",  codePoint: "U+0060" },
      { id: "l_1",    label: "1",  value: "1",  shiftValue: "!",  codePoint: "U+0031" },
      { id: "l_2",    label: "2",  value: "2",  shiftValue: "@",  codePoint: "U+0032" },
      { id: "l_3",    label: "3",  value: "3",  shiftValue: "#",  codePoint: "U+0033" },
      { id: "l_4",    label: "4",  value: "4",  shiftValue: "$",  codePoint: "U+0034" },
      { id: "l_5",    label: "5",  value: "5",  shiftValue: "%",  codePoint: "U+0035" },
      { id: "l_6",    label: "6",  value: "6",  shiftValue: "^",  codePoint: "U+0036" },
      { id: "l_7",    label: "7",  value: "7",  shiftValue: "&",  codePoint: "U+0037" },
      { id: "l_8",    label: "8",  value: "8",  shiftValue: "*",  codePoint: "U+0038" },
      { id: "l_9",    label: "9",  value: "9",  shiftValue: "(",  codePoint: "U+0039" },
      { id: "l_0",    label: "0",  value: "0",  shiftValue: ")",  codePoint: "U+0030" },
      { id: "l_min",  label: "-",  value: "-",  shiftValue: "_",  codePoint: "U+002D" },
      { id: "l_eq",   label: "=",  value: "=",  shiftValue: "+",  codePoint: "U+003D" },
      { id: "l_bksp", label: "⌫",  action: "backspace", width: "wide" },
    ],

    // ── Row 1 : Tab q–p [ ] ─────────────────────────────────────────────────
    // Normal : [⇥] q  w  e  r  t  y  u  i  o  p  [  ]
    // Shift  :     Q  W  E  R  T  Y  U  I  O  P  {  }
    [
      { id: "r1_tab",  label: "⇥",  action: "tab", width: "wide" },
      { id: "l_q",     label: "q",  value: "q",  shiftValue: "Q",  codePoint: "U+0071" },
      { id: "l_w",     label: "w",  value: "w",  shiftValue: "W",  codePoint: "U+0077" },
      { id: "l_e",     label: "e",  value: "e",  shiftValue: "E",  codePoint: "U+0065" },
      { id: "l_r",     label: "r",  value: "r",  shiftValue: "R",  codePoint: "U+0072" },
      { id: "l_t",     label: "t",  value: "t",  shiftValue: "T",  codePoint: "U+0074" },
      { id: "l_y",     label: "y",  value: "y",  shiftValue: "Y",  codePoint: "U+0079" },
      { id: "l_u",     label: "u",  value: "u",  shiftValue: "U",  codePoint: "U+0075" },
      { id: "l_i",     label: "i",  value: "i",  shiftValue: "I",  codePoint: "U+0069" },
      { id: "l_o",     label: "o",  value: "o",  shiftValue: "O",  codePoint: "U+006F" },
      { id: "l_p",     label: "p",  value: "p",  shiftValue: "P",  codePoint: "U+0070" },
      { id: "l_lbr",   label: "[",  value: "[",  shiftValue: "{",  codePoint: "U+005B" },
      { id: "l_rbr",   label: "]",  value: "]",  shiftValue: "}",  codePoint: "U+005D" },
    ],

    // ── Row 2 : Caps a–l ; ' Enter ──────────────────────────────────────────
    // Normal : [⇪] a  s  d  f  g  h  j  k  l  ;  '  [↵]
    // Shift  :     A  S  D  F  G  H  J  K  L  :  "
    [
      { id: "r2_caps",  label: "⇪",  action: "caps",  width: "wide" },
      { id: "l_a",      label: "a",  value: "a",  shiftValue: "A",  codePoint: "U+0061" },
      { id: "l_s",      label: "s",  value: "s",  shiftValue: "S",  codePoint: "U+0073" },
      { id: "l_d",      label: "d",  value: "d",  shiftValue: "D",  codePoint: "U+0064" },
      { id: "l_f",      label: "f",  value: "f",  shiftValue: "F",  codePoint: "U+0066" },
      { id: "l_g",      label: "g",  value: "g",  shiftValue: "G",  codePoint: "U+0067" },
      { id: "l_h",      label: "h",  value: "h",  shiftValue: "H",  codePoint: "U+0068" },
      { id: "l_j",      label: "j",  value: "j",  shiftValue: "J",  codePoint: "U+006A" },
      { id: "l_k",      label: "k",  value: "k",  shiftValue: "K",  codePoint: "U+006B" },
      { id: "l_l",      label: "l",  value: "l",  shiftValue: "L",  codePoint: "U+006C" },
      { id: "l_sc",     label: ";",  value: ";",  shiftValue: ":",  codePoint: "U+003B" },
      { id: "l_ap",     label: "'",  value: "'",  shiftValue: "\"", codePoint: "U+0027" },
      { id: "r2_ent",   label: "↵",  action: "enter", width: "wide" },
    ],

    // ── Row 3 : Shift z–/ Shift ──────────────────────────────────────────────
    // Normal : [⇧] z  x  c  v  b  n  m  ,  .  /  [⇧]
    // Shift  :     Z  X  C  V  B  N  M  <  >  ?
    [
      { id: "r3_shl",   label: "⇧",  action: "shift", width: "wide" },
      { id: "l_z",      label: "z",  value: "z",  shiftValue: "Z",  codePoint: "U+007A" },
      { id: "l_x",      label: "x",  value: "x",  shiftValue: "X",  codePoint: "U+0078" },
      { id: "l_c",      label: "c",  value: "c",  shiftValue: "C",  codePoint: "U+0063" },
      { id: "l_v",      label: "v",  value: "v",  shiftValue: "V",  codePoint: "U+0076" },
      { id: "l_b",      label: "b",  value: "b",  shiftValue: "B",  codePoint: "U+0062" },
      { id: "l_n",      label: "n",  value: "n",  shiftValue: "N",  codePoint: "U+006E" },
      { id: "l_m",      label: "m",  value: "m",  shiftValue: "M",  codePoint: "U+006D" },
      { id: "l_cm",     label: ",",  value: ",",  shiftValue: "<",  codePoint: "U+002C" },
      { id: "l_dt",     label: ".",  value: ".",  shiftValue: ">",  codePoint: "U+002E" },
      { id: "l_sl",     label: "/",  value: "/",  shiftValue: "?",  codePoint: "U+002F" },
      { id: "r3_shr",   label: "⇧",  action: "shift", width: "wide" },
    ],

    // ── Row 4 : control ──────────────────────────────────────────────────────
    [
      { id: "l_ctrl",  label: "Ctrl",  action: "ctrl",  width: "wide" },
      { id: "l_space", label: "Space", action: "space", width: "extraWide" },
      { id: "l_close", label: "✕",     action: "close" },
    ],
  ],
};
