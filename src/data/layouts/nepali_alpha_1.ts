/**
 * Nepali Alphabet – Page 1 (RED section)
 * 
 * 4 rows × 16 keys per row = 64 keys
 *   Row 1: ० १ २ ३ ४ ५ ६ ७ ८ ९ % + - / = ÷  (16 keys)
 *   Row 2: ऋ ॐ क ख ग घ ङ च छ ज झ ञ त ठ ड ढ  (16 keys)
 *   Row 3: ण त थ द ध न प फ ब भ म य र ल व श  (16 keys)
 *   Row 4: ष स ह क्ष त्र ज्ञ अ इ उ ऊ ए + controls  (11 chars + delete(wide) + space(wide) + switch(normal))
 */

import type { KeyboardLayout } from "./types";

const V = "\u094D"; // U+094D DEVANAGARI SIGN VIRAMA

export const nepaliAlpha1Layout: KeyboardLayout = {
  id: "nepali_alpha_1",
  label: "वर्णमाला",
  rows: [
    // ── Row 1: 16 keys ─────────────────────────────────────────────────────
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
      { id: "na1_r1_11", label: "%", value: "%", codePoint: "U+0025" },
      { id: "na1_r1_12", label: "+", value: "+", codePoint: "U+002B" },
      { id: "na1_r1_13", label: "−", value: "−", codePoint: "U+2212" },
      { id: "na1_r1_14", label: "/", value: "/", codePoint: "U+002F" },
      { id: "na1_r1_15", label: "=", value: "=", codePoint: "U+003D" },
      { id: "na1_r1_16", label: "÷", value: "÷", codePoint: "U+00F7" },
    ],

    // ── Row 2: 16 keys ─────────────────────────────────────────────────────
    [
      { id: "na1_r2_01", label: "ऋ", value: "ऋ", codePoint: "U+090B" },
      { id: "na1_r2_02", label: "ॐ", value: "ॐ", codePoint: "U+0950" },
      { id: "na1_r2_03", label: "क", value: "क", codePoint: "U+0915" },
      { id: "na1_r2_04", label: "ख", value: "ख", codePoint: "U+0916" },
      { id: "na1_r2_05", label: "ग", value: "ग", codePoint: "U+0917" },
      { id: "na1_r2_06", label: "घ", value: "घ", codePoint: "U+0918" },
      { id: "na1_r2_07", label: "ङ", value: "ङ", codePoint: "U+0919" },
      { id: "na1_r2_08", label: "च", value: "च", codePoint: "U+091A" },
      { id: "na1_r2_09", label: "छ", value: "छ", codePoint: "U+091B" },
      { id: "na1_r2_10", label: "ज", value: "ज", codePoint: "U+091C" },
      { id: "na1_r2_11", label: "झ", value: "झ", codePoint: "U+091D" },
      { id: "na1_r2_12", label: "ञ", value: "ञ", codePoint: "U+091E" },
      { id: "na1_r2_13", label: "त", value: "त", codePoint: "U+0924" },
      { id: "na1_r2_14", label: "ठ", value: "ठ", codePoint: "U+0920" },
      { id: "na1_r2_15", label: "ड", value: "ड", codePoint: "U+0921" },
      { id: "na1_r2_16", label: "ढ", value: "ढ", codePoint: "U+0922" },
    ],

    // ── Row 3: 16 keys ─────────────────────────────────────────────────────
    [
      { id: "na1_r3_01", label: "ण", value: "ण", codePoint: "U+0923" },
      { id: "na1_r3_02", label: "त", value: "त", codePoint: "U+0924" },
      { id: "na1_r3_03", label: "थ", value: "थ", codePoint: "U+0925" },
      { id: "na1_r3_04", label: "द", value: "द", codePoint: "U+0926" },
      { id: "na1_r3_05", label: "ध", value: "ध", codePoint: "U+0927" },
      { id: "na1_r3_06", label: "न", value: "न", codePoint: "U+0928" },
      { id: "na1_r3_07", label: "प", value: "प", codePoint: "U+092A" },
      { id: "na1_r3_08", label: "फ", value: "फ", codePoint: "U+092B" },
      { id: "na1_r3_09", label: "ब", value: "ब", codePoint: "U+092C" },
      { id: "na1_r3_10", label: "भ", value: "भ", codePoint: "U+092D" },
      { id: "na1_r3_11", label: "म", value: "म", codePoint: "U+092E" },
      { id: "na1_r3_12", label: "य", value: "य", codePoint: "U+092F" },
      { id: "na1_r3_13", label: "र", value: "र", codePoint: "U+0930" },
      { id: "na1_r3_14", label: "ल", value: "ल", codePoint: "U+0932" },
      { id: "na1_r3_15", label: "व", value: "व", codePoint: "U+0935" },
      { id: "na1_r3_16", label: "श", value: "श", codePoint: "U+0936" },
    ],

    // ── Row 4: 11 character keys + wide delete + wide space + switch ──────
    [
      { id: "na1_r4_01", label: "ष", value: "ष", codePoint: "U+0937" },
      { id: "na1_r4_02", label: "स", value: "स", codePoint: "U+0938" },
      { id: "na1_r4_03", label: "ह", value: "ह", codePoint: "U+0939" },
      { id: "na1_r4_04", label: "क्ष", value: "\u0915" + V + "\u0937", codePoint: "U+0915+U+094D+U+0937" },
      { id: "na1_r4_05", label: "त्र", value: "\u0924" + V + "\u0930", codePoint: "U+0924+U+094D+U+0930" },
      { id: "na1_r4_06", label: "ज्ञ", value: "\u091C" + V + "\u091E", codePoint: "U+091C+U+094D+U+091E" },
      { id: "na1_r4_07", label: "अ", value: "अ", codePoint: "U+0905" },
      { id: "na1_r4_08", label: "इ", value: "इ", codePoint: "U+0907" },
      { id: "na1_r4_09", label: "उ", value: "उ", codePoint: "U+0909" },
      { id: "na1_r4_10", label: "ऊ", value: "ऊ", codePoint: "U+090A" },
      { id: "na1_r4_11", label: "ए", value: "ए", codePoint: "U+090F" },
      { id: "na1_r4_del", label: "⌫", action: "backspace", width: "wide" },
      { id: "na1_r4_spc", label: "Space", action: "space", width: "wide" },
      { id: "na1_r4_pg", label: "२ ▶", action: "page", switchTarget: "nepali_alpha_2" },
    ],
  ],
};
