/**
 * Nepali Alphabet – Page 2 of 2
 *
 * Contains (in image order):
 *   Row 1  Remaining vowels + vowel signs   ए ऐ ओ औ ◌ँ ◌ं ◌ः ◌् ◌ा ◌ि ◌ी ◌ु  → 12
 *   Row 2  More vowel signs + danda/conjuncts ◌ू ◌ृ ◌े ◌ै ◌ो ◌ौ ऽ । ॥ श्र भ्र द्य → 12
 *   Row 3  Common conjuncts (ह-series + more)  → 12
 *   Row 4  More conjuncts                       → 12
 *   Row 5  Punctuation                          → 12
 *   Control  ⌫  Space  ◀ १ (→ Page 1)
 *
 * Vowel-sign labels use ◌ (U+25CC dotted circle) as the display base so the
 * combining mark is visible on the key face, while `value` holds only the raw
 * combining character that will be appended to the text.
 *
 * This layout is hidden from the tab bar; it is reached via the page-switch key
 * on Page 1 and returns to Page 1 via its own page-switch key.
 */

import type { KeyboardLayout } from "./types";

// Shorthand for the dotted-circle display base
const DC = "\u25CC";

export const nepaliAlpha2Layout: KeyboardLayout = {
  id: "nepali_alpha_2",
  label: "वर्णमाला",
  hidden: true,
  rows: [
    // ── Row 1 : Remaining independent vowels + vowel signs ───────────────────
    // Labels for combining signs use DC (◌) as visual anchor.
    [
      { id: "na2_r1_01", label: "ए",            value: "ए",       codePoint: "U+090F" },
      { id: "na2_r1_02", label: "ऐ",            value: "ऐ",       codePoint: "U+0910" },
      { id: "na2_r1_03", label: "ओ",            value: "ओ",       codePoint: "U+0913" },
      { id: "na2_r1_04", label: "औ",            value: "औ",       codePoint: "U+0914" },
      { id: "na2_r1_05", label: DC + "\u0901",  value: "\u0901",  codePoint: "U+0901" }, // ◌ँ chandrabindu
      { id: "na2_r1_06", label: DC + "\u0902",  value: "\u0902",  codePoint: "U+0902" }, // ◌ं anusvara
      { id: "na2_r1_07", label: DC + "\u0903",  value: "\u0903",  codePoint: "U+0903" }, // ◌ः visarga
      { id: "na2_r1_08", label: DC + "\u094D",  value: "\u094D",  codePoint: "U+094D" }, // ◌् virama
      { id: "na2_r1_09", label: DC + "\u093E",  value: "\u093E",  codePoint: "U+093E" }, // ◌ा aa-matra
      { id: "na2_r1_10", label: DC + "\u093F",  value: "\u093F",  codePoint: "U+093F" }, // ◌ि i-matra
      { id: "na2_r1_11", label: DC + "\u0940",  value: "\u0940",  codePoint: "U+0940" }, // ◌ी ii-matra
      { id: "na2_r1_12", label: DC + "\u0941",  value: "\u0941",  codePoint: "U+0941" }, // ◌ु u-matra
    ],

    // ── Row 2 : More vowel signs + special Devanagari + conjuncts ────────────
    [
      { id: "na2_r2_01", label: DC + "\u0942",  value: "\u0942",  codePoint: "U+0942" }, // ◌ू uu-matra
      { id: "na2_r2_02", label: DC + "\u0943",  value: "\u0943",  codePoint: "U+0943" }, // ◌ृ ri-matra
      { id: "na2_r2_03", label: DC + "\u0947",  value: "\u0947",  codePoint: "U+0947" }, // ◌े e-matra
      { id: "na2_r2_04", label: DC + "\u0948",  value: "\u0948",  codePoint: "U+0948" }, // ◌ै ai-matra
      { id: "na2_r2_05", label: DC + "\u094B",  value: "\u094B",  codePoint: "U+094B" }, // ◌ो o-matra
      { id: "na2_r2_06", label: DC + "\u094C",  value: "\u094C",  codePoint: "U+094C" }, // ◌ौ au-matra
      { id: "na2_r2_07", label: "ऽ",            value: "ऽ",       codePoint: "U+093D" }, // avagraha
      { id: "na2_r2_08", label: "।",            value: "।",       codePoint: "U+0964" }, // danda
      { id: "na2_r2_09", label: "॥",            value: "॥",       codePoint: "U+0965" }, // double danda
      { id: "na2_r2_10", label: "श्र", value: "\u0936\u094D\u0930", codePoint: "U+0936+U+094D+U+0930" },
      { id: "na2_r2_11", label: "भ्र", value: "\u092D\u094D\u0930", codePoint: "U+092D+U+094D+U+0930" },
      { id: "na2_r2_12", label: "द्य", value: "\u0926\u094D\u092F", codePoint: "U+0926+U+094D+U+092F" },
    ],

    // ── Row 3 : Common conjuncts – primary set ────────────────────────────────
    [
      { id: "na2_r3_01", label: "त्त", value: "\u0924\u094D\u0924", codePoint: "U+0924+U+094D+U+0924" },
      { id: "na2_r3_02", label: "त्व", value: "\u0924\u094D\u0935", codePoint: "U+0924+U+094D+U+0935" },
      { id: "na2_r3_03", label: "क्त", value: "\u0915\u094D\u0924", codePoint: "U+0915+U+094D+U+0924" },
      { id: "na2_r3_04", label: "ह्न", value: "\u0939\u094D\u0928", codePoint: "U+0939+U+094D+U+0928" },
      { id: "na2_r3_05", label: "ह्म", value: "\u0939\u094D\u092E", codePoint: "U+0939+U+094D+U+092E" },
      { id: "na2_r3_06", label: "ह्व", value: "\u0939\u094D\u0935", codePoint: "U+0939+U+094D+U+0935" },
      { id: "na2_r3_07", label: "ह्य", value: "\u0939\u094D\u092F", codePoint: "U+0939+U+094D+U+092F" },
      { id: "na2_r3_08", label: "ह्र", value: "\u0939\u094D\u0930", codePoint: "U+0939+U+094D+U+0930" },
      { id: "na2_r3_09", label: "ह्ल", value: "\u0939\u094D\u0932", codePoint: "U+0939+U+094D+U+0932" },
      { id: "na2_r3_10", label: "ह्ण", value: "\u0939\u094D\u0923", codePoint: "U+0939+U+094D+U+0923" },
      { id: "na2_r3_11", label: "ह्ब", value: "\u0939\u094D\u092C", codePoint: "U+0939+U+094D+U+092C" },
      { id: "na2_r3_12", label: "ह्ट", value: "\u0939\u094D\u091F", codePoint: "U+0939+U+094D+U+091F" },
    ],

    // ── Row 4 : Common conjuncts – secondary set ──────────────────────────────
    [
      { id: "na2_r4_01", label: "क्क", value: "\u0915\u094D\u0915", codePoint: "U+0915+U+094D+U+0915" },
      { id: "na2_r4_02", label: "क्ट", value: "\u0915\u094D\u091F", codePoint: "U+0915+U+094D+U+091F" },
      { id: "na2_r4_03", label: "ग्ग", value: "\u0917\u094D\u0917", codePoint: "U+0917+U+094D+U+0917" },
      { id: "na2_r4_04", label: "ट्ट", value: "\u091F\u094D\u091F", codePoint: "U+091F+U+094D+U+091F" },
      { id: "na2_r4_05", label: "ड्ड", value: "\u0921\u094D\u0921", codePoint: "U+0921+U+094D+U+0921" },
      { id: "na2_r4_06", label: "त्थ", value: "\u0924\u094D\u0925", codePoint: "U+0924+U+094D+U+0925" },
      { id: "na2_r4_07", label: "द्ध", value: "\u0926\u094D\u0927", codePoint: "U+0926+U+094D+U+0927" },
      { id: "na2_r4_08", label: "न्न", value: "\u0928\u094D\u0928", codePoint: "U+0928+U+094D+U+0928" },
      { id: "na2_r4_09", label: "ब्ब", value: "\u092C\u094D\u092C", codePoint: "U+092C+U+094D+U+092C" },
      { id: "na2_r4_10", label: "ल्ल", value: "\u0932\u094D\u0932", codePoint: "U+0932+U+094D+U+0932" },
      { id: "na2_r4_11", label: "प्त", value: "\u092A\u094D\u0924", codePoint: "U+092A+U+094D+U+0924" },
      { id: "na2_r4_12", label: "ध्व", value: "\u0927\u094D\u0935", codePoint: "U+0927+U+094D+U+0935" },
    ],

    // ── Row 5 : Punctuation ───────────────────────────────────────────────────
    [
      { id: "na2_r5_01", label: "!",  value: "!",  codePoint: "U+0021" },
      { id: "na2_r5_02", label: "?",  value: "?",  codePoint: "U+003F" },
      { id: "na2_r5_03", label: ",",  value: ",",  codePoint: "U+002C" },
      { id: "na2_r5_04", label: ".",  value: ".",  codePoint: "U+002E" },
      { id: "na2_r5_05", label: ";",  value: ";",  codePoint: "U+003B" },
      { id: "na2_r5_06", label: ":",  value: ":",  codePoint: "U+003A" },
      { id: "na2_r5_07", label: "\u201C", value: "\u201C", codePoint: "U+201C" }, // "
      { id: "na2_r5_08", label: "\u201D", value: "\u201D", codePoint: "U+201D" }, // "
      { id: "na2_r5_09", label: "'",  value: "'",  codePoint: "U+0027" },
      { id: "na2_r5_10", label: "(",  value: "(",  codePoint: "U+0028" },
      { id: "na2_r5_11", label: ")",  value: ")",  codePoint: "U+0029" },
      { id: "na2_r5_12", label: "-",  value: "-",  codePoint: "U+002D" },
    ],

    // ── Control row ──────────────────────────────────────────────────────────
    [
      { id: "na2_ctrl_bksp",  label: "⌫",    action: "backspace", width: "wide" },
      { id: "na2_ctrl_space", label: "Space", action: "space",     width: "extraWide" },
      { id: "na2_ctrl_page",  label: "◀ १",  action: "page", switchTarget: "nepali_alpha_1", width: "wide" },
    ],
  ],
};
