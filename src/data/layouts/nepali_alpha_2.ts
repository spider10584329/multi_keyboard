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
    // ── Row 1 : User-specified characters (mapped sequentially) ─────────────
    [
      { id: "na2_r1_01", label: "´", value: "´" },
      { id: "na2_r1_02", label: "B", value: "B" },
      { id: "na2_r1_03", label: "C", value: "C" },
      { id: "na2_r1_04", label: "Q", value: "Q" },
      { id: "na2_r1_05", label: "`", value: "`" },
      { id: "na2_r1_06", label: ">", value: ">" },
      { id: "na2_r1_07", label: "?", value: "?" },
      { id: "na2_r1_08", label: "ß", value: "ß" },
      { id: "na2_r1_09", label: "f", value: "f" },
      { id: "na2_r1_10", label: "Û", value: "Û" },
      { id: "na2_r1_11", label: "<", value: "<" },
      { id: "na2_r1_12", label: "¢", value: "¢" },
    ],

    // ── Rows 2–5 replaced with user-sequence mappings and retained conjuncts
    // Row 2: continuation of user characters
    [
      { id: "na2_r2_01", label: "§", value: "§" },
      { id: "na2_r2_02", label: "Ý", value: "Ý" },
      { id: "na2_r2_03", label: "°", value: "°" },
      { id: "na2_r2_04", label: "¶", value: "¶" },
      { id: "na2_r2_05", label: "Å", value: "Å" },
      { id: "na2_r2_06", label: "Ë", value: "Ë" },
      { id: "na2_r2_07", label: "Í", value: "Í" },
      { id: "na2_r2_08", label: "Î", value: "Î" },
      { id: "na2_r2_09", label: "Ø", value: "Ø" },
      { id: "na2_r2_10", label: "•", value: "•" },
      { id: "na2_r2_11", label: "2", value: "2" },
      { id: "na2_r2_12", label: "4", value: "4" },
    ],

    // Row 3: continuation of user characters
    [
      { id: "na2_r3_01", label: "‹", value: "‹" },
      { id: "na2_r3_02", label: "ˆ", value: "ˆ" },
      { id: "na2_r3_03", label: "0", value: "0" },
      { id: "na2_r3_04", label: ":", value: ":" },
      { id: "na2_r3_05", label: "A", value: "A" },
      { id: "na2_r3_06", label: "D", value: "D" },
      { id: "na2_r3_07", label: "E", value: "E" },
      { id: "na2_r3_08", label: "G", value: "G" },
      { id: "na2_r3_09", label: "H", value: "H" },
      { id: "na2_r3_10", label: "I", value: "I" },
      { id: "na2_r3_11", label: "J", value: "J" },
      { id: "na2_r3_12", label: "K", value: "K" },
    ],

    // Row 4: continuation of user characters
    [
      { id: "na2_r4_01", label: "N", value: "N" },
      { id: "na2_r4_02", label: "m", value: "m" },
      { id: "na2_r4_03", label: "R", value: "R" },
      { id: "na2_r4_04", label: "S", value: "S" },
      { id: "na2_r4_05", label: "T", value: "T" },
      { id: "na2_r4_06", label: "U", value: "U" },
      { id: "na2_r4_07", label: "X", value: "X" },
      { id: "na2_r4_08", label: "Y", value: "Y" },
      { id: "na2_r4_09", label: "Z", value: "Z" },
      { id: "na2_r4_10", label: "~", value: "~" },
      { id: "na2_r4_11", label: "¡", value: "¡" },
      { id: "na2_r4_12", label: "V", value: "V" },
    ],

    // Row 5: remaining user chars then retain some conjuncts for trailing slots
    [
      { id: "na2_r5_01", label: "W", value: "W" },
      { id: "na2_r5_02", label: "£", value: "£" },
      { id: "na2_r5_03", label: "L", value: "L" },
      { id: "na2_r5_04", label: "l", value: "l" },
      { id: "na2_r5_05", label: "ग्र", value: "\u0917\u094D\u0930", codePoint: "U+0917+U+094D+U+0930" },
      { id: "na2_r5_06", label: "क्र", value: "\u0915\u094D\u0930", codePoint: "U+0915+U+094D+U+0930" },
      { id: "na2_r5_07", label: "ग्न", value: "\u0917\u094D\u0928", codePoint: "U+0917+U+094D+U+0928" },
      { id: "na2_r5_08", label: "ञ्च", value: "\u091E\u094D\u091A", codePoint: "U+091E+U+094D+U+091A" },
      { id: "na2_r5_09", label: "ट्र", value: "\u091F\u094D\u0930", codePoint: "U+091F+U+094D+U+0930" },
      { id: "na2_r5_10", label: "ड्र", value: "\u0921\u094D\u0930", codePoint: "U+0921+U+094D+U+0930" },
      { id: "na2_r5_11", label: "स्त", value: "\u0938\u094D\u0924", codePoint: "U+0938+U+094D+U+0924" },
      { id: "na2_r5_12", label: "म्ब", value: "\u092E\u094D\u092C", codePoint: "U+092E+U+094D+U+092C" },
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
