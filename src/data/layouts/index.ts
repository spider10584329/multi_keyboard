/**
 * Barrel export for all keyboard layouts.
 * Import `allLayouts` to get every layout in a single array, or import
 * individual layouts for direct access.
 */

// ── All imports must come before re-exports (import/first rule) ──────────────
import { mapalinedaLayout } from "./mapalineda";
import { latinLayout }      from "./latin";
import { cyrillicLayout }   from "./cyrillic";
import { greekLayout }      from "./greek";
import type { KeyboardLayout, LayoutId } from "./types";

// ── Re-exports ────────────────────────────────────────────────────────────────
export type { KeyDef, KeyboardLayout, LayoutId } from "./types";
export { mapalinedaLayout } from "./mapalineda";
export { latinLayout }      from "./latin";
export { cyrillicLayout }   from "./cyrillic";
export { greekLayout }      from "./greek";

/** All supported layouts in display order */
export const allLayouts: KeyboardLayout[] = [
  mapalinedaLayout,
  latinLayout,
  cyrillicLayout,
  greekLayout,
];

/** Lookup map: layoutId → KeyboardLayout */
export const layoutMap: Record<LayoutId, KeyboardLayout> = {
  mapalineda: mapalinedaLayout,
  latin: latinLayout,
  cyrillic: cyrillicLayout,
  greek: greekLayout,
};
