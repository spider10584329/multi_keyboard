/**
 * Nepali Alphabet – Page 2 of 2
 *
 * 6 content rows × 12 keys = 72 character keys (≥ 64 minimum required)
 *
 * Structure mirrors the reference image (conjunct rows organised by subscript type):
 *   Row 1  All 12 main vowel signs          ◌ः ◌् ◌ा ◌ि ◌ी ◌ु ◌ू ◌ृ ◌े ◌ै ◌ो ◌ौ  → 12
 *   Row 2  ya-phala conjuncts (C + ्य)     क्य ख्य ग्य घ्य ट्य ड्य त्य द्य ध्य न्य प्य म्य → 12
 *   Row 3  ra-phala conjuncts (C + ्र)     ग्र घ्र ट्र ड्र द्र ध्र प्र फ्र ब्र भ्र म्र श्र  → 12
 *          (त्र is already on Page 1 as a standard ligature consonant, not duplicated here)
 *   Row 4  Geminate / common conjuncts     क्क ट्ट ड्ड त्त त्थ त्व द्ध द्व न्न ब्ब ल्ल ञ्च  → 12
 *   Row 5  ह्-series conjuncts             ह्न ह्म ह्य ह्र ह्ल ह्व ह्क ह्ग ह्त ह्द ह्ण ह्ट  → 12
 *   Row 6  Punctuation                     , . ; : " " ' ( ) − @ #              → 12
 *   Control  ⌫  Space  ◀ १ (→ Page 1)
 *
 * All conjuncts use virama sequences: C₁ (U+094D DEVANAGARI SIGN VIRAMA) C₂.
 * This is the canonical Unicode representation — no private-use or ligature
 * codepoints are used; shaping is delegated to the font/OpenType engine.
 *
 * Vowel-sign labels use U+25CC (◌) as the display base; `value` holds only
 * the raw combining character that will be appended to the text.
 *
 * This layout is hidden from the tab bar; reached via the page-switch key
 * on Page 1 and returns to Page 1 via its own page-switch key.
 */

import type { KeyboardLayout } from "./types";

const DC = "\u25CC"; // U+25CC DOTTED CIRCLE — standard display base for combining marks
const H  = "\u094D"; // U+094D DEVANAGARI SIGN VIRAMA (halant / virama)

export const nepaliAlpha2Layout: KeyboardLayout = {
  id: "nepali_alpha_2",
  label: "वर्णमाला",
  hidden: true,
  rows: [
    // ── Row 1 : All remaining vowel signs (12) ────────────────────────────────
    // (◌ँ U+0901 and ◌ं U+0902 are on Page 1 Row 6 for quick access)
    // Ordered by Unicode codepoint within the Devanagari block:
    //   U+0903 VISARGA  U+094D VIRAMA  U+093E–U+0941 (ā i ī u)
    //   U+0942–U+0943  (ū ṛ)  U+0947–U+0948 (e ai)  U+094B–U+094C (o au)
    [
      { id: "na2_r1_01", label: DC + "\u0903", value: "\u0903", codePoint: "U+0903" }, // ◌ः VISARGA
      { id: "na2_r1_02", label: DC + "\u094D", value: "\u094D", codePoint: "U+094D" }, // ◌् VIRAMA (halant)
      { id: "na2_r1_03", label: DC + "\u093E", value: "\u093E", codePoint: "U+093E" }, // ◌ा AA-MATRA
      { id: "na2_r1_04", label: DC + "\u093F", value: "\u093F", codePoint: "U+093F" }, // ◌ि I-MATRA
      { id: "na2_r1_05", label: DC + "\u0940", value: "\u0940", codePoint: "U+0940" }, // ◌ी II-MATRA
      { id: "na2_r1_06", label: DC + "\u0941", value: "\u0941", codePoint: "U+0941" }, // ◌ु U-MATRA
      { id: "na2_r1_07", label: DC + "\u0942", value: "\u0942", codePoint: "U+0942" }, // ◌ू UU-MATRA
      { id: "na2_r1_08", label: DC + "\u0943", value: "\u0943", codePoint: "U+0943" }, // ◌ृ VOCALIC-R MATRA
      { id: "na2_r1_09", label: DC + "\u0947", value: "\u0947", codePoint: "U+0947" }, // ◌े E-MATRA
      { id: "na2_r1_10", label: DC + "\u0948", value: "\u0948", codePoint: "U+0948" }, // ◌ै AI-MATRA
      { id: "na2_r1_11", label: DC + "\u094B", value: "\u094B", codePoint: "U+094B" }, // ◌ो O-MATRA
      { id: "na2_r1_12", label: DC + "\u094C", value: "\u094C", codePoint: "U+094C" }, // ◌ौ AU-MATRA
    ],

    // ── Row 2 : ya-phala conjuncts — consonant + ्य (U+092F) ────────────────
    // In the Devanagari script, this subscript ya (्य) appears below the base
    // consonant. Represented canonically as: base-consonant + U+094D + U+092F.
    // 12 most common in Nepali, following consonant-table order:
    [
      { id: "na2_r2_01", label: "क्य", value: "\u0915" + H + "\u092F", codePoint: "U+0915+U+094D+U+092F" }, // KA+YA
      { id: "na2_r2_02", label: "ख्य", value: "\u0916" + H + "\u092F", codePoint: "U+0916+U+094D+U+092F" }, // KHA+YA
      { id: "na2_r2_03", label: "ग्य", value: "\u0917" + H + "\u092F", codePoint: "U+0917+U+094D+U+092F" }, // GA+YA
      { id: "na2_r2_04", label: "घ्य", value: "\u0918" + H + "\u092F", codePoint: "U+0918+U+094D+U+092F" }, // GHA+YA
      { id: "na2_r2_05", label: "ट्य", value: "\u091F" + H + "\u092F", codePoint: "U+091F+U+094D+U+092F" }, // TTA+YA
      { id: "na2_r2_06", label: "ड्य", value: "\u0921" + H + "\u092F", codePoint: "U+0921+U+094D+U+092F" }, // DDA+YA
      { id: "na2_r2_07", label: "त्य", value: "\u0924" + H + "\u092F", codePoint: "U+0924+U+094D+U+092F" }, // TA+YA
      { id: "na2_r2_08", label: "द्य", value: "\u0926" + H + "\u092F", codePoint: "U+0926+U+094D+U+092F" }, // DA+YA
      { id: "na2_r2_09", label: "ध्य", value: "\u0927" + H + "\u092F", codePoint: "U+0927+U+094D+U+092F" }, // DHA+YA
      { id: "na2_r2_10", label: "न्य", value: "\u0928" + H + "\u092F", codePoint: "U+0928+U+094D+U+092F" }, // NA+YA
      { id: "na2_r2_11", label: "प्य", value: "\u092A" + H + "\u092F", codePoint: "U+092A+U+094D+U+092F" }, // PA+YA
      { id: "na2_r2_12", label: "म्य", value: "\u092E" + H + "\u092F", codePoint: "U+092E+U+094D+U+092F" }, // MA+YA
    ],

    // ── Row 3 : ra-phala conjuncts — consonant + ्र (U+0930) ─────────────────
    // The ra-phala (rakar) appears as a curved rightward stroke below the base.
    // त्र (U+0924+U+094D+U+0930) is excluded here because it appears on Page 1
    // as one of the three standard compound ligatures (क्ष त्र ज्ञ).
    // 12 most common ra-phala conjuncts in Nepali, following consonant order:
    [
      { id: "na2_r3_01", label: "ग्र", value: "\u0917" + H + "\u0930", codePoint: "U+0917+U+094D+U+0930" }, // GA+RA
      { id: "na2_r3_02", label: "घ्र", value: "\u0918" + H + "\u0930", codePoint: "U+0918+U+094D+U+0930" }, // GHA+RA
      { id: "na2_r3_03", label: "ट्र", value: "\u091F" + H + "\u0930", codePoint: "U+091F+U+094D+U+0930" }, // TTA+RA
      { id: "na2_r3_04", label: "ड्र", value: "\u0921" + H + "\u0930", codePoint: "U+0921+U+094D+U+0930" }, // DDA+RA
      { id: "na2_r3_05", label: "द्र", value: "\u0926" + H + "\u0930", codePoint: "U+0926+U+094D+U+0930" }, // DA+RA
      { id: "na2_r3_06", label: "ध्र", value: "\u0927" + H + "\u0930", codePoint: "U+0927+U+094D+U+0930" }, // DHA+RA
      { id: "na2_r3_07", label: "प्र", value: "\u092A" + H + "\u0930", codePoint: "U+092A+U+094D+U+0930" }, // PA+RA
      { id: "na2_r3_08", label: "फ्र", value: "\u092B" + H + "\u0930", codePoint: "U+092B+U+094D+U+0930" }, // PHA+RA
      { id: "na2_r3_09", label: "ब्र", value: "\u092C" + H + "\u0930", codePoint: "U+092C+U+094D+U+0930" }, // BA+RA
      { id: "na2_r3_10", label: "भ्र", value: "\u092D" + H + "\u0930", codePoint: "U+092D+U+094D+U+0930" }, // BHA+RA
      { id: "na2_r3_11", label: "म्र", value: "\u092E" + H + "\u0930", codePoint: "U+092E+U+094D+U+0930" }, // MA+RA
      { id: "na2_r3_12", label: "श्र", value: "\u0936" + H + "\u0930", codePoint: "U+0936+U+094D+U+0930" }, // SHA+RA
    ],

    // ── Row 4 : Geminate and common non-phala conjuncts ───────────────────────
    // "Geminate" = a consonant joined to itself (doubled).
    // "Common" = high-frequency pairs in corpus Nepali text.
    [
      { id: "na2_r4_01", label: "क्क", value: "\u0915" + H + "\u0915", codePoint: "U+0915+U+094D+U+0915" }, // KA+KA
      { id: "na2_r4_02", label: "ट्ट", value: "\u091F" + H + "\u091F", codePoint: "U+091F+U+094D+U+091F" }, // TTA+TTA
      { id: "na2_r4_03", label: "ड्ड", value: "\u0921" + H + "\u0921", codePoint: "U+0921+U+094D+U+0921" }, // DDA+DDA
      { id: "na2_r4_04", label: "त्त", value: "\u0924" + H + "\u0924", codePoint: "U+0924+U+094D+U+0924" }, // TA+TA
      { id: "na2_r4_05", label: "त्थ", value: "\u0924" + H + "\u0925", codePoint: "U+0924+U+094D+U+0925" }, // TA+THA
      { id: "na2_r4_06", label: "त्व", value: "\u0924" + H + "\u0935", codePoint: "U+0924+U+094D+U+0935" }, // TA+VA
      { id: "na2_r4_07", label: "द्ध", value: "\u0926" + H + "\u0927", codePoint: "U+0926+U+094D+U+0927" }, // DA+DHA
      { id: "na2_r4_08", label: "द्व", value: "\u0926" + H + "\u0935", codePoint: "U+0926+U+094D+U+0935" }, // DA+VA
      { id: "na2_r4_09", label: "न्न", value: "\u0928" + H + "\u0928", codePoint: "U+0928+U+094D+U+0928" }, // NA+NA
      { id: "na2_r4_10", label: "ब्ब", value: "\u092C" + H + "\u092C", codePoint: "U+092C+U+094D+U+092C" }, // BA+BA
      { id: "na2_r4_11", label: "ल्ल", value: "\u0932" + H + "\u0932", codePoint: "U+0932+U+094D+U+0932" }, // LA+LA
      { id: "na2_r4_12", label: "ञ्च", value: "\u091E" + H + "\u091A", codePoint: "U+091E+U+094D+U+091A" }, // NYA+CA
    ],

    // ── Row 5 : ह्-series conjuncts — ह (U+0939) + ्  + second consonant ─────
    // ह is one of the most productive base consonants for conjuncts in Nepali.
    // The 12 most useful ह्-series forms, ordered by second consonant:
    [
      { id: "na2_r5_01", label: "ह्न", value: "\u0939" + H + "\u0928", codePoint: "U+0939+U+094D+U+0928" }, // HA+NA
      { id: "na2_r5_02", label: "ह्म", value: "\u0939" + H + "\u092E", codePoint: "U+0939+U+094D+U+092E" }, // HA+MA
      { id: "na2_r5_03", label: "ह्य", value: "\u0939" + H + "\u092F", codePoint: "U+0939+U+094D+U+092F" }, // HA+YA
      { id: "na2_r5_04", label: "ह्र", value: "\u0939" + H + "\u0930", codePoint: "U+0939+U+094D+U+0930" }, // HA+RA
      { id: "na2_r5_05", label: "ह्ल", value: "\u0939" + H + "\u0932", codePoint: "U+0939+U+094D+U+0932" }, // HA+LA
      { id: "na2_r5_06", label: "ह्व", value: "\u0939" + H + "\u0935", codePoint: "U+0939+U+094D+U+0935" }, // HA+VA
      { id: "na2_r5_07", label: "ह्क", value: "\u0939" + H + "\u0915", codePoint: "U+0939+U+094D+U+0915" }, // HA+KA
      { id: "na2_r5_08", label: "ह्ग", value: "\u0939" + H + "\u0917", codePoint: "U+0939+U+094D+U+0917" }, // HA+GA
      { id: "na2_r5_09", label: "ह्त", value: "\u0939" + H + "\u0924", codePoint: "U+0939+U+094D+U+0924" }, // HA+TA
      { id: "na2_r5_10", label: "ह्द", value: "\u0939" + H + "\u0926", codePoint: "U+0939+U+094D+U+0926" }, // HA+DA
      { id: "na2_r5_11", label: "ह्ण", value: "\u0939" + H + "\u0923", codePoint: "U+0939+U+094D+U+0923" }, // HA+NNA
      { id: "na2_r5_12", label: "ह्ट", value: "\u0939" + H + "\u091F", codePoint: "U+0939+U+094D+U+091F" }, // HA+TTA
    ],

    // ── Row 6 : Punctuation ───────────────────────────────────────────────────
    [
      { id: "na2_r6_01", label: ",",       value: ",",       codePoint: "U+002C" }, // COMMA
      { id: "na2_r6_02", label: ".",       value: ".",       codePoint: "U+002E" }, // FULL STOP
      { id: "na2_r6_03", label: ";",       value: ";",       codePoint: "U+003B" }, // SEMICOLON
      { id: "na2_r6_04", label: ":",       value: ":",       codePoint: "U+003A" }, // COLON
      { id: "na2_r6_05", label: "\u201C", value: "\u201C", codePoint: "U+201C" }, // " LEFT DOUBLE QUOTATION MARK
      { id: "na2_r6_06", label: "\u201D", value: "\u201D", codePoint: "U+201D" }, // " RIGHT DOUBLE QUOTATION MARK
      { id: "na2_r6_07", label: "'",       value: "'",       codePoint: "U+0027" }, // APOSTROPHE
      { id: "na2_r6_08", label: "(",       value: "(",       codePoint: "U+0028" }, // LEFT PARENTHESIS
      { id: "na2_r6_09", label: ")",       value: ")",       codePoint: "U+0029" }, // RIGHT PARENTHESIS
      { id: "na2_r6_10", label: "−",       value: "−",       codePoint: "U+2212" }, // MINUS SIGN
      { id: "na2_r6_11", label: "@",       value: "@",       codePoint: "U+0040" }, // COMMERCIAL AT
      { id: "na2_r6_12", label: "#",       value: "#",       codePoint: "U+0023" }, // NUMBER SIGN
    ],

    // ── Control row ──────────────────────────────────────────────────────────
    [
      { id: "na2_ctrl_bksp",  label: "⌫",    action: "backspace", width: "wide" },
      { id: "na2_ctrl_space", label: "Space", action: "space",     width: "extraWide" },
      { id: "na2_ctrl_page",  label: "◀ १",  action: "page", switchTarget: "nepali_alpha_1", width: "wide" },
    ],
  ],
};
