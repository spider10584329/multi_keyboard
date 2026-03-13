/**
 * Nepali Alphabet – Page 1 of 2
 *
 * Contains (in image order):
 *   Row 1  Devanagari numerals + symbols   ० १ … ९  % + − / = ÷ ऋ ॐ  → 12
 *   Row 2  (cont.) symbols + velar group   − / = ÷ ऋ ॐ  क ख ग घ ङ च → 12
 *   Row 3  Palatal … retroflex group       छ ज झ ञ ट ठ ड ढ ण त थ द  → 12
 *   Row 4  Dental … sibilant group         ध न प फ ब भ म य र ल व श  → 12
 *   Row 5  Remaining consonants + vowels   ष स ह क्ष त्र ज्ञ अ आ इ ई उ ऊ → 12
 *   Control  ⌫  Space  ⯈ (→ Page 2)
 *
 * Every character row has exactly 12 keys so keys distribute evenly
 * across all viewport widths via the existing flex-ratio CSS.
 */

import type { KeyboardLayout } from "./types";

export const nepaliAlpha1Layout: KeyboardLayout = {
  id: "nepali_alpha_1",
  label: "वर्णमाला",
  rows: [
    // ── Row 1 : Devanagari numerals + first symbols ──────────────────────────
    [
      { id: "na1_r1_01", label: "०", value: "०", codePoint: "U+0966" },
      { id: "na1_r1_02", label: "१", value: "१", codePoint: "U+0967" },
      { id: "na1_r1_03", label: "२", value: "२", codePoint: "U+0968" },
      { id: "na1_r1_04", label: "३", value: "३", codePoint: "U+0969" },
      { id: "na1_r1_05", label: "४", value: "४", codePoint: "U+096A" },
      { id: "na1_r1_06", label: "५", value: "५", codePoint: "U+096B" },
      { id: "na1_r1_07", label: "६", value: "६", codePoint: "U+096C" },
      { id: "na1_r1_08", label: "७", value: "७", codePoint: "U+096D" },
      { id: "na1_r1_09", label: "८", value: "८", codePoint: "U+096E" },
      { id: "na1_r1_10", label: "९", value: "९", codePoint: "U+096F" },
      { id: "na1_r1_11", label: "%", value: "%",  codePoint: "U+0025" },
      { id: "na1_r1_12", label: "+", value: "+",  codePoint: "U+002B" },
    ],

    // ── Row 2 : Remaining symbols + velar consonants ─────────────────────────
    [
      { id: "na1_r2_01", label: "−", value: "−", codePoint: "U+2212" },
      { id: "na1_r2_02", label: "/", value: "/", codePoint: "U+002F" },
      { id: "na1_r2_03", label: "=", value: "=", codePoint: "U+003D" },
      { id: "na1_r2_04", label: "÷", value: "÷", codePoint: "U+00F7" },
      { id: "na1_r2_05", label: "ऋ", value: "ऋ", codePoint: "U+090B" },
      { id: "na1_r2_06", label: "ॐ", value: "ॐ", codePoint: "U+0950" },
      { id: "na1_r2_07", label: "क", value: "क", codePoint: "U+0915" },
      { id: "na1_r2_08", label: "ख", value: "ख", codePoint: "U+0916" },
      { id: "na1_r2_09", label: "ग", value: "ग", codePoint: "U+0917" },
      { id: "na1_r2_10", label: "घ", value: "घ", codePoint: "U+0918" },
      { id: "na1_r2_11", label: "ङ", value: "ङ", codePoint: "U+0919" },
      { id: "na1_r2_12", label: "च", value: "च", codePoint: "U+091A" },
    ],

    // ── Row 3 : Palatal … retroflex consonants ───────────────────────────────
    [
      { id: "na1_r3_01", label: "छ", value: "छ", codePoint: "U+091B" },
      { id: "na1_r3_02", label: "ज", value: "ज", codePoint: "U+091C" },
      { id: "na1_r3_03", label: "झ", value: "झ", codePoint: "U+091D" },
      { id: "na1_r3_04", label: "ञ", value: "ञ", codePoint: "U+091E" },
      { id: "na1_r3_05", label: "ट", value: "ट", codePoint: "U+091F" },
      { id: "na1_r3_06", label: "ठ", value: "ठ", codePoint: "U+0920" },
      { id: "na1_r3_07", label: "ड", value: "ड", codePoint: "U+0921" },
      { id: "na1_r3_08", label: "ढ", value: "ढ", codePoint: "U+0922" },
      { id: "na1_r3_09", label: "ण", value: "ण", codePoint: "U+0923" },
      { id: "na1_r3_10", label: "त", value: "त", codePoint: "U+0924" },
      { id: "na1_r3_11", label: "थ", value: "थ", codePoint: "U+0925" },
      { id: "na1_r3_12", label: "द", value: "द", codePoint: "U+0926" },
    ],

    // ── Row 4 : Dental … sibilant consonants ─────────────────────────────────
    [
      { id: "na1_r4_01", label: "ध", value: "ध", codePoint: "U+0927" },
      { id: "na1_r4_02", label: "न", value: "न", codePoint: "U+0928" },
      { id: "na1_r4_03", label: "प", value: "प", codePoint: "U+092A" },
      { id: "na1_r4_04", label: "फ", value: "फ", codePoint: "U+092B" },
      { id: "na1_r4_05", label: "ब", value: "ब", codePoint: "U+092C" },
      { id: "na1_r4_06", label: "भ", value: "भ", codePoint: "U+092D" },
      { id: "na1_r4_07", label: "म", value: "म", codePoint: "U+092E" },
      { id: "na1_r4_08", label: "य", value: "य", codePoint: "U+092F" },
      { id: "na1_r4_09", label: "र", value: "र", codePoint: "U+0930" },
      { id: "na1_r4_10", label: "ल", value: "ल", codePoint: "U+0932" },
      { id: "na1_r4_11", label: "व", value: "व", codePoint: "U+0935" },
      { id: "na1_r4_12", label: "श", value: "श", codePoint: "U+0936" },
    ],

    // ── Row 5 : Remaining consonants + independent vowels ────────────────────
    [
      { id: "na1_r5_01", label: "ष",   value: "ष",   codePoint: "U+0937" },
      { id: "na1_r5_02", label: "स",   value: "स",   codePoint: "U+0938" },
      { id: "na1_r5_03", label: "ह",   value: "ह",   codePoint: "U+0939" },
      { id: "na1_r5_04", label: "क्ष", value: "क्ष", codePoint: "U+0915+U+094D+U+0937" },
      { id: "na1_r5_05", label: "त्र", value: "त्र", codePoint: "U+0924+U+094D+U+0930" },
      { id: "na1_r5_06", label: "ज्ञ", value: "ज्ञ", codePoint: "U+091C+U+094D+U+091E" },
      { id: "na1_r5_07", label: "अ",   value: "अ",   codePoint: "U+0905" },
      { id: "na1_r5_08", label: "आ",   value: "आ",   codePoint: "U+0906" },
      { id: "na1_r5_09", label: "इ",   value: "इ",   codePoint: "U+0907" },
      { id: "na1_r5_10", label: "ई",   value: "ई",   codePoint: "U+0908" },
      { id: "na1_r5_11", label: "उ",   value: "उ",   codePoint: "U+0909" },
      { id: "na1_r5_12", label: "ऊ",   value: "ऊ",   codePoint: "U+090A" },
    ],

    // ── Control row ──────────────────────────────────────────────────────────
    [
      { id: "na1_ctrl_bksp",  label: "⌫",    action: "backspace", width: "wide" },
      { id: "na1_ctrl_space", label: "Space", action: "space",     width: "extraWide" },
      { id: "na1_ctrl_page",  label: "२ ▶",  action: "page", switchTarget: "nepali_alpha_2", width: "wide" },
    ],
  ],
};
