/**
 * Mapalineda – Nepali Traditional (Remington) keyboard layout.
 *
 * Three layers per physical key:
 *   ▸ Normal  = unshifted layer
 *   ▸ Shift   = shiftValue  (one-shot ⇧ key)
 *   ▸ Caps    = capsValue   (sticky ⇪ key – missing matras, conjuncts, nukta forms)
 *
 * Caps layer layout:
 *   Row 0  ~ ! @ # $ % ^ & * ( ) _ +  (standard shift-number symbols)
 *   Row 1  ज्ञ न्न ऑ द्ध त्त ट्र ड़ ढ़ ळ ऍ  "  <
 *   Row 2  ऑ ल्ल ष्ट ॲ न्ध ज़ य़ फ़ ट्ट ष्ठ ॅ
 *   Row 3  ख़ ग़ क़ क्र ब्र प्र /  >  ?  ऩ
 */

import type { KeyboardLayout } from "./types";

export const mapalinedaLayout: KeyboardLayout = {
  id: "mapalineda",
  label: "नेपाली",
  rows: [
    // ── Row 0 : ` 1–0 - = Bksp ──────────────────────────────────────
    // Normal : ञ  १ २ ३ ४  ५  ६ ७ ८ ९ ०  औ  ्  ⌫
    // Shift  : ॥  ञ् ई घ $ छ  ट ठ ड ढ ण  ओ  =  ⌫
    // Caps   : ~  ! @ # $  %  ^ & * ( )  -  +  ⌫
    [
      { id: "n_grv",  label: "ञ",   value: "\u091E", shiftValue: "\u0965", capsValue: "~",  codePoint: "U+091E" },
      { id: "n_1",    label: "१",   value: "\u0967", shiftValue: "\u091E\u094D", capsValue: "!",  codePoint: "U+0967" },
      { id: "n_2",    label: "२",   value: "\u0968", shiftValue: "\u0908", capsValue: "@",  codePoint: "U+0968" },
      { id: "n_3",    label: "३",   value: "\u0969", shiftValue: "\u0918", capsValue: "#",  codePoint: "U+0969" },
      { id: "n_4",    label: "४",   value: "\u096A", shiftValue: "$",      capsValue: "$",  codePoint: "U+096A" },
      { id: "n_5",    label: "५",   value: "\u096B", shiftValue: "\u091B", capsValue: "%",  codePoint: "U+096B" },
      { id: "n_6",    label: "६",   value: "\u096C", shiftValue: "\u091F", capsValue: "^",  codePoint: "U+096C" },
      { id: "n_7",    label: "७",   value: "\u096D", shiftValue: "\u0920", capsValue: "&",  codePoint: "U+096D" },
      { id: "n_8",    label: "८",   value: "\u096E", shiftValue: "\u0921", capsValue: "*",  codePoint: "U+096E" },
      { id: "n_9",    label: "९",   value: "\u096F", shiftValue: "\u0922", capsValue: "(",  codePoint: "U+096F" },
      { id: "n_0",    label: "०",   value: "\u0966", shiftValue: "\u0923", capsValue: ")",  codePoint: "U+0966" },
      { id: "n_min",  label: "औ",  value: "\u0914", shiftValue: "\u0913", capsValue: "-",  codePoint: "U+0914" },
      { id: "n_eq",   label: "्",   value: "\u094D", shiftValue: "=",      capsValue: "+",  codePoint: "U+094D" },
      { id: "n_bksp", label: "⌫",   action: "backspace",            width: "wide" },
    ],

    // ── Row 1 : Tab Q … P [ ] ────────────────────────────────────────
    // Normal : [tab] त्र ध  भ  च  त  थ  ग  ष  य  उ  र्  े
    // Shift  :       त   ङ् ऐ  द्व ट् ठ· ऊ  क्ष इ  ए  ँ   ै
    // Caps   :       ज्ञ न्न ऑ  द्ध त्त ट्र ड़ ढ़ ळ  _  "   <
    [
      { id: "r1_tab",  label: "⇥",   action: "tab",   width: "wide" },
      { id: "n_q",   label: "त्र", value: "\u0924\u094D\u0930", shiftValue: "\u0924",                  capsValue: "\u091C\u094D\u091E",   codePoint: "U+0924 U+094D U+0930" },
      { id: "n_w",   label: "ध",   value: "\u0927",             shiftValue: "\u0919\u094D",             capsValue: "\u0928\u094D\u0928",   codePoint: "U+0927" },
      { id: "n_e",   label: "भ",   value: "\u092D",             shiftValue: "\u0910",                   capsValue: "\u0911",               codePoint: "U+092D" },
      { id: "n_r",   label: "च",   value: "\u091A",             shiftValue: "\u0926\u094D\u0935",       capsValue: "\u0926\u094D\u0927",   codePoint: "U+091A" },
      { id: "n_t",   label: "त",   value: "\u0924",             shiftValue: "\u091F\u094D",              capsValue: "\u0924\u094D\u0924",   codePoint: "U+0924" },
      { id: "n_y",   label: "थ",   value: "\u0925",             shiftValue: "\u0920\u094D",              capsValue: "\u091F\u094D\u0930",   codePoint: "U+0925" },
      { id: "n_u",   label: "ग",   value: "\u0917",             shiftValue: "\u090A",                   capsValue: "\u095C",               codePoint: "U+0917" },
      { id: "n_i",   label: "ष",   value: "\u0937",             shiftValue: "\u0915\u094D\u0937",       capsValue: "\u095D",               codePoint: "U+0937" },
      { id: "n_o",   label: "य",   value: "\u092F",             shiftValue: "\u0907",                   capsValue: "\u0933",               codePoint: "U+092F" },
      { id: "n_p",   label: "उ",   value: "\u0909",             shiftValue: "\u090F",                   capsValue: "_",                    codePoint: "U+0909" },
      { id: "n_lbr", label: "र्",  value: "\u0930\u094D",        shiftValue: "\u0901",                   capsValue: "\"",               codePoint: "U+0930 U+094D" },
      { id: "n_rbr", label: "े",   value: "\u0947",             shiftValue: "\u0948",                   capsValue: "<",                codePoint: "U+0947" },
    ],

    // ── Row 2 : Caps A … L ; ' Enter ─────────────────────────────────
    // Normal : [caps] ब  क   म   अ  न  ज  व  प  ट  स  ु  [↵]
    // Shift  :        आ  ङ्क ङ्ग ृ  द  झ  ो  फ  ट् ठ् ू
    // Caps   :        ऑ  ल्ल ष्ट ॲ  न्ध ज़ य़ फ़ ट्ट ष्ठ ॅ
    [
      { id: "r2_caps", label: "⇪",   action: "caps",  width: "wide" },
      { id: "n_a",   label: "ब",   value: "\u092C",             shiftValue: "\u0906",                   capsValue: "\u0911",               codePoint: "U+092C" },
      { id: "n_s",   label: "क",   value: "\u0915",             shiftValue: "\u0919\u094D\u0915",       capsValue: "\u0932\u094D\u0932",   codePoint: "U+0915" },
      { id: "n_d",   label: "म",   value: "\u092E",             shiftValue: "\u0919\u094D\u0917",       capsValue: "\u0937\u094D\u091F",   codePoint: "U+092E" },
      { id: "n_f",   label: "अ",   value: "\u0905",             shiftValue: "\u0943",                   capsValue: "\u0972",               codePoint: "U+0905" },
      { id: "n_g",   label: "न",   value: "\u0928",             shiftValue: "\u0926",                   capsValue: "\u0928\u094D\u0927",   codePoint: "U+0928" },
      { id: "n_h",   label: "ज",   value: "\u091C",             shiftValue: "\u091D",                   capsValue: "\u095B",               codePoint: "U+091C" },
      { id: "n_j",   label: "व",   value: "\u0935",             shiftValue: "\u094B",                   capsValue: "\u095F",               codePoint: "U+0935" },
      { id: "n_k",   label: "प",   value: "\u092A",             shiftValue: "\u092B",                   capsValue: "\u095E",               codePoint: "U+092A" },
      { id: "n_l",   label: "ट",   value: "\u091F",             shiftValue: "\u091F\u094D",              capsValue: "\u091F\u094D\u091F",   codePoint: "U+091F" },
      { id: "n_sc",  label: "स",   value: "\u0938",             shiftValue: "\u0920\u094D",              capsValue: "\u0937\u094D\u0920",   codePoint: "U+0938" },
      { id: "n_ap",  label: "ु",   value: "\u0941",             shiftValue: "\u0942",                   capsValue: "\u0945",               codePoint: "U+0941" },
      { id: "r2_ent", label: "↵",   action: "enter", width: "wide" },
    ],

    // ── Row 3 : Shift Z … / Shift ────────────────────────────────────
    // Normal : [⇧] श  ह   ख  ग  ब  ल  ः  ं  ।   र   [⇧]
    // Shift  : [⇧] क्क हृ  ऋ  ॐ  ग् ध  ड् ङ  श्र रु  [⇧]
    // Caps   : [⇧] ख़  ग़  क़ क्र ब्र प्र /  >  ?  ऩ   [⇧]
    [
      { id: "r3_shl",  label: "⇧",   action: "shift", width: "wide" },
      { id: "n_z",   label: "श",   value: "\u0936",             shiftValue: "\u0915\u094D\u0915",       capsValue: "\u0959",               codePoint: "U+0936" },
      { id: "n_x",   label: "ह",   value: "\u0939",             shiftValue: "\u0939\u0943",              capsValue: "\u095A",               codePoint: "U+0939" },
      { id: "n_c",   label: "ख",   value: "\u0916",             shiftValue: "\u090B",                   capsValue: "\u0958",               codePoint: "U+0916" },
      { id: "n_v",   label: "ग",   value: "\u0917",             shiftValue: "\u0950",                   capsValue: "\u0915\u094D\u0930",   codePoint: "U+0917" },
      { id: "n_b",   label: "ब",   value: "\u092C",             shiftValue: "\u0917\u094D",              capsValue: "\u092C\u094D\u0930",   codePoint: "U+092C" },
      { id: "n_n",   label: "ल",   value: "\u0932",             shiftValue: "\u0927",                   capsValue: "\u092A\u094D\u0930",   codePoint: "U+0932" },
      { id: "n_m",   label: "ः",   value: "\u0903",             shiftValue: "\u0921\u094D",              capsValue: "/",                    codePoint: "U+0903" },
      { id: "n_cm",  label: "ं",   value: "\u0902",             shiftValue: "\u0919",                   capsValue: ">",                    codePoint: "U+0902" },
      { id: "n_dt",  label: "।",   value: "\u0964",             shiftValue: "\u0936\u094D\u0930",       capsValue: "?",                    codePoint: "U+0964" },
      { id: "n_sl",  label: "र",   value: "\u0930",             shiftValue: "\u0930\u0941",              capsValue: "\u0929",               codePoint: "U+0930" },
      { id: "r3_shr",  label: "⇧",   action: "shift", width: "wide" },
    ],

    // ── Row 4 : control ──────────────────────────────────────────────
    [
      { id: "n_ctrl",  label: "Ctrl",  action: "ctrl",  width: "wide" },
      { id: "n_space", label: "Space", action: "space", width: "extraWide" },
      { id: "n_close", label: "✕",     action: "close" },
    ],
  ],
};
