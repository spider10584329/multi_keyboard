/**
 * Nepali Alphabet – Page 1 of 2
 *
 * 6 content rows × 12 keys = 72 character keys (≥ 64 minimum required)
 *
 * Structure mirrors the reference image exactly:
 *   Row 1  Devanagari numerals + first symbols  ० १ २ ३ ४ ५ ६ ७ ८ ९ % +       → 12
 *   Row 2  Remaining symbols + specials         − / = ÷ ऋ ॐ । ॥ ₹ ऽ ! ?       → 12
 *   Row 3  Consonants group 1–2 (velar+palatal) क ख ग घ ङ च छ ज झ ञ ट ठ       → 12
 *   Row 4  Consonants group 3–4 (retroflex+dental) ड ढ ण त थ द ध न प फ ब भ    → 12
 *   Row 5  Consonants group 5+ (labial+semivw+sibi+extras) म य र ल व श ष स ह क्ष त्र ज्ञ → 12
 *   Row 6  All independent vowels + two most-used vowel signs
 *          अ आ इ ई उ ऊ ए ऐ ओ औ ◌ँ ◌ं                                          → 12
 *   Control  ⌫  Space  २ ▶ (→ Page 2)
 *
 * Vowel-sign labels use U+25CC (◌) as the display base; `value` holds only
 * the raw combining character that will be appended to the text.
 *
 * Conjuncts are encoded as virama sequences: C₁ (U+094D) C₂.
 * No private-use or font-specific codepoints are used anywhere.
 */

import type { KeyboardLayout } from "./types";

const DC = "\u25CC"; // U+25CC DOTTED CIRCLE — standard display base for combining marks

export const nepaliAlpha1Layout: KeyboardLayout = {
  id: "nepali_alpha_1",
  label: "वर्णमाला",
  rows: [
    // ── Row 1 : Devanagari digits ०–९  +  % + ────────────────────────────────
    // Devanagari digits: U+0966–U+096F (DEVANAGARI DIGIT ZERO … NINE)
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
      { id: "na1_r1_11", label: "%", value: "%",  codePoint: "U+0025" }, // PERCENT SIGN
      { id: "na1_r1_12", label: "+", value: "+",  codePoint: "U+002B" }, // PLUS SIGN
    ],

    // ── Row 2 : Remaining arithmetic symbols + Devanagari specials ───────────
    // ऋ  U+090B  DEVANAGARI LETTER VOCALIC R (independent vowel)
    // ॐ  U+0950  DEVANAGARI OM
    // ।  U+0964  DEVANAGARI DANDA (full stop)
    // ॥  U+0965  DEVANAGARI DOUBLE DANDA
    // ₹  U+20B9  INDIAN RUPEE SIGN
    // ऽ  U+093D  DEVANAGARI SIGN AVAGRAHA
    [
      { id: "na1_r2_01", label: "−", value: "−", codePoint: "U+2212" }, // MINUS SIGN
      { id: "na1_r2_02", label: "/", value: "/", codePoint: "U+002F" }, // SOLIDUS
      { id: "na1_r2_03", label: "=", value: "=", codePoint: "U+003D" }, // EQUALS SIGN
      { id: "na1_r2_04", label: "÷", value: "÷", codePoint: "U+00F7" }, // DIVISION SIGN
      { id: "na1_r2_05", label: "ऋ", value: "ऋ", codePoint: "U+090B" }, // DEVANAGARI LETTER VOCALIC R
      { id: "na1_r2_06", label: "ॐ", value: "ॐ", codePoint: "U+0950" }, // DEVANAGARI OM
      { id: "na1_r2_07", label: "।", value: "।", codePoint: "U+0964" }, // DEVANAGARI DANDA
      { id: "na1_r2_08", label: "॥", value: "॥", codePoint: "U+0965" }, // DEVANAGARI DOUBLE DANDA
      { id: "na1_r2_09", label: "₹", value: "₹", codePoint: "U+20B9" }, // INDIAN RUPEE SIGN
      { id: "na1_r2_10", label: "ऽ", value: "ऽ", codePoint: "U+093D" }, // DEVANAGARI SIGN AVAGRAHA
      { id: "na1_r2_11", label: "!", value: "!", codePoint: "U+0021" }, // EXCLAMATION MARK
      { id: "na1_r2_12", label: "?", value: "?", codePoint: "U+003F" }, // QUESTION MARK
    ],

    // ── Row 3 : Consonants 1–12  (velar + palatal phonological groups) ────────
    // Standard Devanagari consonant table order (ISO 15919 / Unicode order):
    // Velar:   क ख ग घ ङ  (U+0915–U+0919)
    // Palatal: च छ ज झ ञ  (U+091A–U+091E)
    // Retroflex starts: ट ठ         (U+091F–U+0920)
    [
      { id: "na1_r3_01", label: "क", value: "क", codePoint: "U+0915" }, // DEVANAGARI LETTER KA
      { id: "na1_r3_02", label: "ख", value: "ख", codePoint: "U+0916" }, // DEVANAGARI LETTER KHA
      { id: "na1_r3_03", label: "ग", value: "ग", codePoint: "U+0917" }, // DEVANAGARI LETTER GA
      { id: "na1_r3_04", label: "घ", value: "घ", codePoint: "U+0918" }, // DEVANAGARI LETTER GHA
      { id: "na1_r3_05", label: "ङ", value: "ङ", codePoint: "U+0919" }, // DEVANAGARI LETTER NGA
      { id: "na1_r3_06", label: "च", value: "च", codePoint: "U+091A" }, // DEVANAGARI LETTER CA
      { id: "na1_r3_07", label: "छ", value: "छ", codePoint: "U+091B" }, // DEVANAGARI LETTER CHA
      { id: "na1_r3_08", label: "ज", value: "ज", codePoint: "U+091C" }, // DEVANAGARI LETTER JA
      { id: "na1_r3_09", label: "झ", value: "झ", codePoint: "U+091D" }, // DEVANAGARI LETTER JHA
      { id: "na1_r3_10", label: "ञ", value: "ञ", codePoint: "U+091E" }, // DEVANAGARI LETTER NYA
      { id: "na1_r3_11", label: "ट", value: "ट", codePoint: "U+091F" }, // DEVANAGARI LETTER TTA
      { id: "na1_r3_12", label: "ठ", value: "ठ", codePoint: "U+0920" }, // DEVANAGARI LETTER TTHA
    ],

    // ── Row 4 : Consonants 13–24  (retroflex cont. + dental groups) ──────────
    // Retroflex cont.: ड ढ ण         (U+0921–U+0923)
    // Dental:          त थ द ध न     (U+0924–U+0928)
    // Labial:          प फ ब भ       (U+092A–U+092D)
    [
      { id: "na1_r4_01", label: "ड", value: "ड", codePoint: "U+0921" }, // DEVANAGARI LETTER DDA
      { id: "na1_r4_02", label: "ढ", value: "ढ", codePoint: "U+0922" }, // DEVANAGARI LETTER DDHA
      { id: "na1_r4_03", label: "ण", value: "ण", codePoint: "U+0923" }, // DEVANAGARI LETTER NNA
      { id: "na1_r4_04", label: "त", value: "त", codePoint: "U+0924" }, // DEVANAGARI LETTER TA
      { id: "na1_r4_05", label: "थ", value: "थ", codePoint: "U+0925" }, // DEVANAGARI LETTER THA
      { id: "na1_r4_06", label: "द", value: "द", codePoint: "U+0926" }, // DEVANAGARI LETTER DA
      { id: "na1_r4_07", label: "ध", value: "ध", codePoint: "U+0927" }, // DEVANAGARI LETTER DHA
      { id: "na1_r4_08", label: "न", value: "न", codePoint: "U+0928" }, // DEVANAGARI LETTER NA
      { id: "na1_r4_09", label: "प", value: "प", codePoint: "U+092A" }, // DEVANAGARI LETTER PA
      { id: "na1_r4_10", label: "फ", value: "फ", codePoint: "U+092B" }, // DEVANAGARI LETTER PHA
      { id: "na1_r4_11", label: "ब", value: "ब", codePoint: "U+092C" }, // DEVANAGARI LETTER BA
      { id: "na1_r4_12", label: "भ", value: "भ", codePoint: "U+092D" }, // DEVANAGARI LETTER BHA
    ],

    // ── Row 5 : Consonants 25–36  (labial म + semivowels + sibilants + extras) ─
    // Labial cont.: म                          (U+092E)
    // Semivowels:  य र ल व                    (U+092F U+0930 U+0932 U+0935)
    // Sibilants:   श ष स                      (U+0936 U+0937 U+0938)
    // Aspirate:    ह                           (U+0939)
    // Compound ligatures (treated as extra consonants in Nepali):
    //   क्ष = क (U+0915) + ् (U+094D) + ष (U+0937)
    //   त्र = त (U+0924) + ् (U+094D) + र (U+0930)
    //   ज्ञ = ज (U+091C) + ् (U+094D) + ञ (U+091E)
    [
      { id: "na1_r5_01", label: "म",   value: "म",   codePoint: "U+092E" }, // DEVANAGARI LETTER MA
      { id: "na1_r5_02", label: "य",   value: "य",   codePoint: "U+092F" }, // DEVANAGARI LETTER YA
      { id: "na1_r5_03", label: "र",   value: "र",   codePoint: "U+0930" }, // DEVANAGARI LETTER RA
      { id: "na1_r5_04", label: "ल",   value: "ल",   codePoint: "U+0932" }, // DEVANAGARI LETTER LA
      { id: "na1_r5_05", label: "व",   value: "व",   codePoint: "U+0935" }, // DEVANAGARI LETTER VA
      { id: "na1_r5_06", label: "श",   value: "श",   codePoint: "U+0936" }, // DEVANAGARI LETTER SHA
      { id: "na1_r5_07", label: "ष",   value: "ष",   codePoint: "U+0937" }, // DEVANAGARI LETTER SSA
      { id: "na1_r5_08", label: "स",   value: "स",   codePoint: "U+0938" }, // DEVANAGARI LETTER SA
      { id: "na1_r5_09", label: "ह",   value: "ह",   codePoint: "U+0939" }, // DEVANAGARI LETTER HA
      { id: "na1_r5_10", label: "क्ष", value: "\u0915\u094D\u0937", codePoint: "U+0915+U+094D+U+0937" },
      { id: "na1_r5_11", label: "त्र", value: "\u0924\u094D\u0930", codePoint: "U+0924+U+094D+U+0930" },
      { id: "na1_r5_12", label: "ज्ञ", value: "\u091C\u094D\u091E", codePoint: "U+091C+U+094D+U+091E" },
    ],

    // ── Row 6 : All 11 independent vowels + 2 highest-frequency vowel signs ──
    // Independent vowels (U+0905–U+0914, excluding ऋ already in Row 2):
    //   अ आ इ ई उ ऊ ए ऐ ओ औ
    // Most-used vowel signs placed here for quick access:
    //   ◌ँ U+0901 DEVANAGARI SIGN CANDRABINDU   (nasalisation, very common in Nepali)
    //   ◌ं U+0902 DEVANAGARI SIGN ANUSVARA       (nasal, extremely common in Nepali)
    [
      { id: "na1_r6_01", label: "अ",           value: "अ",      codePoint: "U+0905" }, // DEVANAGARI LETTER A
      { id: "na1_r6_02", label: "आ",           value: "आ",      codePoint: "U+0906" }, // DEVANAGARI LETTER AA
      { id: "na1_r6_03", label: "इ",           value: "इ",      codePoint: "U+0907" }, // DEVANAGARI LETTER I
      { id: "na1_r6_04", label: "ई",           value: "ई",      codePoint: "U+0908" }, // DEVANAGARI LETTER II
      { id: "na1_r6_05", label: "उ",           value: "उ",      codePoint: "U+0909" }, // DEVANAGARI LETTER U
      { id: "na1_r6_06", label: "ऊ",           value: "ऊ",      codePoint: "U+090A" }, // DEVANAGARI LETTER UU
      { id: "na1_r6_07", label: "ए",           value: "ए",      codePoint: "U+090F" }, // DEVANAGARI LETTER E
      { id: "na1_r6_08", label: "ऐ",           value: "ऐ",      codePoint: "U+0910" }, // DEVANAGARI LETTER AI
      { id: "na1_r6_09", label: "ओ",           value: "ओ",      codePoint: "U+0913" }, // DEVANAGARI LETTER O
      { id: "na1_r6_10", label: "औ",           value: "औ",      codePoint: "U+0914" }, // DEVANAGARI LETTER AU
      { id: "na1_r6_11", label: DC + "\u0901", value: "\u0901", codePoint: "U+0901" }, // ◌ँ CANDRABINDU
      { id: "na1_r6_12", label: DC + "\u0902", value: "\u0902", codePoint: "U+0902" }, // ◌ं ANUSVARA
    ],

    // ── Control row ──────────────────────────────────────────────────────────
    [
      { id: "na1_ctrl_bksp",  label: "⌫",    action: "backspace", width: "wide" },
      { id: "na1_ctrl_space", label: "Space", action: "space",     width: "extraWide" },
      { id: "na1_ctrl_page",  label: "२ ▶",  action: "page", switchTarget: "nepali_alpha_2", width: "wide" },
    ],
  ],
};
