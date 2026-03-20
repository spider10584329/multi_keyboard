/**
 * Nepali Alphabet – Page 2 (BLUE section)
 * 
 * Uses Preeti font (legacy Nepali encoding)
 * Characters are displayed in Preeti font on both keyboard keys and in input elements.
 * 
 * 5 rows × 16 keys per row = 80 keys
 *   Row 1: ´ B C Q ` > ? ß X ¢ § Ý ° ¶ Å Ë  (16 keys)
 *   Row 2: Í Î Ø • 2 4 ‹ ˆ 0 : A D E G H I  (16 keys)
 *   Row 3: J K N m R S T U X Y Z ~ ¡ V W £  (16 keys)
 *   Row 4: L l f Û < ] } F " ' \ { æ Æ Ù ,  (16 keys)
 *   Row 5: Ú { – - _ ˜ + controls (delete + space + switch)
 */

import type { KeyboardLayout } from "./types";

export const nepaliAlpha2Layout: KeyboardLayout = {
  id: "nepali_alpha_2",
  label: "वर्णमाला",
  hidden: true,
  rows: [
    // ── Row 1: 16 keys ─────────────────────────────────────────────────────
    [
      { id: "na2_r1_01", label: "´", value: "´" },
      { id: "na2_r1_02", label: "B", value: "B" },
      { id: "na2_r1_03", label: "C", value: "C" },
      { id: "na2_r1_04", label: "Q", value: "Q" },
      { id: "na2_r1_05", label: "`", value: "`" },
      { id: "na2_r1_06", label: ">", value: ">" },
      { id: "na2_r1_07", label: "?", value: "?" },
      { id: "na2_r1_08", label: "ß", value: "ß" },
      { id: "na2_r1_09", label: "X", value: "X" },
      { id: "na2_r1_10", label: "¢", value: "¢" },
      { id: "na2_r1_11", label: "§", value: "§" },
      { id: "na2_r1_12", label: "Ý", value: "Ý" },
      { id: "na2_r1_13", label: "°", value: "°" },
      { id: "na2_r1_14", label: "¶", value: "¶" },
      { id: "na2_r1_15", label: "Å", value: "Å" },
      { id: "na2_r1_16", label: "Ë", value: "Ë" },
    ],

    // ── Row 2: 16 keys ─────────────────────────────────────────────────────
    [
      { id: "na2_r2_01", label: "Í", value: "Í" },
      { id: "na2_r2_02", label: "Î", value: "Î" },
      { id: "na2_r2_03", label: "Ø", value: "Ø" },
      { id: "na2_r2_04", label: "•", value: "•" },
      { id: "na2_r2_05", label: "2", value: "2" },
      { id: "na2_r2_06", label: "4", value: "4" },
      { id: "na2_r2_07", label: "‹", value: "‹" },
      { id: "na2_r2_08", label: "ˆ", value: "ˆ" },
      { id: "na2_r2_09", label: "0", value: "0" },
      { id: "na2_r2_10", label: ":", value: ":" },
      { id: "na2_r2_11", label: "A", value: "A" },
      { id: "na2_r2_12", label: "D", value: "D" },
      { id: "na2_r2_13", label: "E", value: "E" },
      { id: "na2_r2_14", label: "G", value: "G" },
      { id: "na2_r2_15", label: "H", value: "H" },
      { id: "na2_r2_16", label: "I", value: "I" },
    ],

    // ── Row 3: 16 keys ─────────────────────────────────────────────────────
    [
      { id: "na2_r3_01", label: "J", value: "J" },
      { id: "na2_r3_02", label: "K", value: "K" },
      { id: "na2_r3_03", label: "N", value: "N" },
      { id: "na2_r3_04", label: "m", value: "m" },
      { id: "na2_r3_05", label: "R", value: "R" },
      { id: "na2_r3_06", label: "S", value: "S" },
      { id: "na2_r3_07", label: "T", value: "T" },
      { id: "na2_r3_08", label: "U", value: "U" },
      { id: "na2_r3_09", label: "X", value: "X" },
      { id: "na2_r3_10", label: "Y", value: "Y" },
      { id: "na2_r3_11", label: "Z", value: "Z" },
      { id: "na2_r3_12", label: "~", value: "~" },
      { id: "na2_r3_13", label: "¡", value: "¡" },
      { id: "na2_r3_14", label: "V", value: "V" },
      { id: "na2_r3_15", label: "W", value: "W" },
      { id: "na2_r3_16", label: "£", value: "£" },
    ],

    // ── Row 4: 16 keys ─────────────────────────────────────────────────────
    [
      { id: "na2_r4_01", label: "L", value: "L" },
      { id: "na2_r4_02", label: "l", value: "l" },
      { id: "na2_r4_03", label: "f", value: "f" },
      { id: "na2_r4_04", label: "Û", value: "Û" },
      { id: "na2_r4_05", label: "<", value: "<" },
      { id: "na2_r4_06", label: "]", value: "]" },
      { id: "na2_r4_07", label: "}", value: "}" },
      { id: "na2_r4_08", label: "F", value: "F" },
      { id: "na2_r4_09", label: "\"", value: "\"" },
      { id: "na2_r4_10", label: "'", value: "'" },
      { id: "na2_r4_11", label: "\\", value: "\\" },
      { id: "na2_r4_12", label: "{", value: "{" },
      { id: "na2_r4_13", label: "æ", value: "æ" },
      { id: "na2_r4_14", label: "Æ", value: "Æ" },
      { id: "na2_r4_15", label: "Ù", value: "Ù" },
      { id: "na2_r4_16", label: ",", value: "," },
    ],

    // ── Row 5: characters + controls ───────────────────────────────────────
    [
      { id: "na2_r5_01", label: "Ú", value: "Ú" },
      { id: "na2_r5_02", label: "{", value: "{" },
      { id: "na2_r5_03", label: "–", value: "–" },
      { id: "na2_r5_04", label: "-", value: "-" },
      { id: "na2_r5_05", label: "_", value: "_" },
      { id: "na2_r5_06", label: "˜", value: "˜" },
      { id: "na2_r5_del", label: "⌫", action: "backspace", width: "wide" },
      { id: "na2_r5_spc", label: "", action: "space", width: "wide" },
      { id: "na2_r5_pg", label: "◀ १", action: "page", switchTarget: "nepali_alpha_1", width: "wide" },
    ],
  ],
};
