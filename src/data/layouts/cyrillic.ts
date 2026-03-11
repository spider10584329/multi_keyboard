/**
 * Cyrillic (Russian ЙЦУКЕН) keyboard layout.
 *
 * Structure mirrors the Nepali layout exactly:
 *   Row 0  ё 1–0 - =  + Bksp          (13 char keys)
 *   Row 1  Tab + й–ъ                  (12 alpha keys)
 *   Row 2  Caps + ф–э + Enter         (11 alpha keys)
 *   Row 3  Shift + я–. + Shift         (10 char keys)
 *   Row 4  Ctrl  Space  Close
 *
 * Normal / Shift layers follow the standard Russian keyboard.
 * Caps layer is omitted — the shiftValue fallback produces uppercase letters.
 */

import type { KeyboardLayout } from "./types";

export const cyrillicLayout: KeyboardLayout = {
  id: "cyrillic",
  label: "Кирилл",
  rows: [
    // ── Row 0 : ё 1–0 - = Bksp ──────────────────────────────────────────────
    // Normal : ё  1 2 3 4 5 6 7 8 9 0  -  =  ⌫
    // Shift  : Ё  ! @ # $ % ^ & * ( )  _  +  ⌫
    [
      { id: "cy_grv",  label: "ё",    value: "ё",    shiftValue: "Ё",    codePoint: "U+0451" },
      { id: "cy_1",    label: "1",    value: "1",    shiftValue: "!",    codePoint: "U+0031" },
      { id: "cy_2",    label: "2",    value: "2",    shiftValue: "@",    codePoint: "U+0032" },
      { id: "cy_3",    label: "3",    value: "3",    shiftValue: "#",    codePoint: "U+0033" },
      { id: "cy_4",    label: "4",    value: "4",    shiftValue: "$",    codePoint: "U+0034" },
      { id: "cy_5",    label: "5",    value: "5",    shiftValue: "%",    codePoint: "U+0035" },
      { id: "cy_6",    label: "6",    value: "6",    shiftValue: "^",    codePoint: "U+0036" },
      { id: "cy_7",    label: "7",    value: "7",    shiftValue: "&",    codePoint: "U+0037" },
      { id: "cy_8",    label: "8",    value: "8",    shiftValue: "*",    codePoint: "U+0038" },
      { id: "cy_9",    label: "9",    value: "9",    shiftValue: "(",    codePoint: "U+0039" },
      { id: "cy_0",    label: "0",    value: "0",    shiftValue: ")",    codePoint: "U+0030" },
      { id: "cy_min",  label: "-",    value: "-",    shiftValue: "_",    codePoint: "U+002D" },
      { id: "cy_eq",   label: "=",    value: "=",    shiftValue: "+",    codePoint: "U+003D" },
      { id: "cy_bksp", label: "⌫",   action: "backspace", width: "wide" },
    ],

    // ── Row 1 : Tab й–ъ ─────────────────────────────────────────────────────
    // Normal : [⇥] й  ц  у  к  е  н  г  ш  щ  з  х  ъ
    // Shift  :     Й  Ц  У  К  Е  Н  Г  Ш  Щ  З  Х  Ъ
    [
      { id: "r1_tab",   label: "⇥",  action: "tab", width: "wide" },
      { id: "cy_j",     label: "й",  value: "й",  shiftValue: "Й",  codePoint: "U+0439" },
      { id: "cy_c",     label: "ц",  value: "ц",  shiftValue: "Ц",  codePoint: "U+0446" },
      { id: "cy_u",     label: "у",  value: "у",  shiftValue: "У",  codePoint: "U+0443" },
      { id: "cy_k",     label: "к",  value: "к",  shiftValue: "К",  codePoint: "U+043A" },
      { id: "cy_e",     label: "е",  value: "е",  shiftValue: "Е",  codePoint: "U+0435" },
      { id: "cy_n",     label: "н",  value: "н",  shiftValue: "Н",  codePoint: "U+043D" },
      { id: "cy_g",     label: "г",  value: "г",  shiftValue: "Г",  codePoint: "U+0433" },
      { id: "cy_sh",    label: "ш",  value: "ш",  shiftValue: "Ш",  codePoint: "U+0448" },
      { id: "cy_sch",   label: "щ",  value: "щ",  shiftValue: "Щ",  codePoint: "U+0449" },
      { id: "cy_z",     label: "з",  value: "з",  shiftValue: "З",  codePoint: "U+0437" },
      { id: "cy_h",     label: "х",  value: "х",  shiftValue: "Х",  codePoint: "U+0445" },
      { id: "cy_hrd",   label: "ъ",  value: "ъ",  shiftValue: "Ъ",  codePoint: "U+044A" },
    ],

    // ── Row 2 : Caps ф–э Enter ──────────────────────────────────────────────
    // Normal : [⇪] ф  ы  в  а  п  р  о  л  д  ж  э  [↵]
    // Shift  :     Ф  Ы  В  А  П  Р  О  Л  Д  Ж  Э
    [
      { id: "r2_caps",  label: "⇪",  action: "caps",  width: "wide" },
      { id: "cy_f",     label: "ф",  value: "ф",  shiftValue: "Ф",  codePoint: "U+0444" },
      { id: "cy_y",     label: "ы",  value: "ы",  shiftValue: "Ы",  codePoint: "U+044B" },
      { id: "cy_v",     label: "в",  value: "в",  shiftValue: "В",  codePoint: "U+0432" },
      { id: "cy_a",     label: "а",  value: "а",  shiftValue: "А",  codePoint: "U+0430" },
      { id: "cy_p",     label: "п",  value: "п",  shiftValue: "П",  codePoint: "U+043F" },
      { id: "cy_r",     label: "р",  value: "р",  shiftValue: "Р",  codePoint: "U+0440" },
      { id: "cy_o",     label: "о",  value: "о",  shiftValue: "О",  codePoint: "U+043E" },
      { id: "cy_l",     label: "л",  value: "л",  shiftValue: "Л",  codePoint: "U+043B" },
      { id: "cy_d",     label: "д",  value: "д",  shiftValue: "Д",  codePoint: "U+0434" },
      { id: "cy_zh",    label: "ж",  value: "ж",  shiftValue: "Ж",  codePoint: "U+0436" },
      { id: "cy_e2",    label: "э",  value: "э",  shiftValue: "Э",  codePoint: "U+044D" },
      { id: "r2_ent",   label: "↵",  action: "enter", width: "wide" },
    ],

    // ── Row 3 : Shift я–. Shift ──────────────────────────────────────────────
    // Normal : [⇧] я  ч  с  м  и  т  ь  б  ю  .  [⇧]
    // Shift  :     Я  Ч  С  М  И  Т  Ь  Б  Ю  ,
    [
      { id: "r3_shl",   label: "⇧",  action: "shift", width: "wide" },
      { id: "cy_ya",    label: "я",  value: "я",  shiftValue: "Я",  codePoint: "U+044F" },
      { id: "cy_ch",    label: "ч",  value: "ч",  shiftValue: "Ч",  codePoint: "U+0447" },
      { id: "cy_s",     label: "с",  value: "с",  shiftValue: "С",  codePoint: "U+0441" },
      { id: "cy_m",     label: "м",  value: "м",  shiftValue: "М",  codePoint: "U+043C" },
      { id: "cy_i",     label: "и",  value: "и",  shiftValue: "И",  codePoint: "U+0438" },
      { id: "cy_t",     label: "т",  value: "т",  shiftValue: "Т",  codePoint: "U+0442" },
      { id: "cy_sf",    label: "ь",  value: "ь",  shiftValue: "Ь",  codePoint: "U+044C" },
      { id: "cy_b",     label: "б",  value: "б",  shiftValue: "Б",  codePoint: "U+0431" },
      { id: "cy_yu",    label: "ю",  value: "ю",  shiftValue: "Ю",  codePoint: "U+044E" },
      { id: "cy_dt",    label: ".",  value: ".",  shiftValue: ",",   codePoint: "U+002E" },
      { id: "r3_shr",   label: "⇧",  action: "shift", width: "wide" },
    ],

    // ── Row 4 : control ──────────────────────────────────────────────────────
    [
      { id: "cy_ctrl",  label: "Ctrl",  action: "ctrl",  width: "wide" },
      { id: "cy_space", label: "Space", action: "space", width: "extraWide" },
      { id: "cy_close", label: "✕",     action: "close" },
    ],
  ],
};
