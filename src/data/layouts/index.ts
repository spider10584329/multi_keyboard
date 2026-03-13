/**
 * Barrel export for all keyboard layouts.
 * Import `allLayouts` to get every layout in a single array, or import
 * individual layouts for direct access.
 */

// ── All imports must come before re-exports (import/first rule) ──────────────
import { mapalinedaLayout }   from "./mapalineda";
import { latinLayout }        from "./latin";
import { cyrillicLayout }     from "./cyrillic";
import { greekLayout }        from "./greek";
import { nepaliAlpha1Layout } from "./nepali_alpha_1";
import { nepaliAlpha2Layout } from "./nepali_alpha_2";
import type { KeyboardLayout, LayoutId } from "./types";

// ── Re-exports ────────────────────────────────────────────────────────────────
export type { KeyDef, KeyboardLayout, LayoutId } from "./types";
export { mapalinedaLayout }   from "./mapalineda";
export { latinLayout }        from "./latin";
export { cyrillicLayout }     from "./cyrillic";
export { greekLayout }        from "./greek";
export { nepaliAlpha1Layout } from "./nepali_alpha_1";
export { nepaliAlpha2Layout } from "./nepali_alpha_2";

/** All supported layouts in display order.
 * mapalinedaLayout is intentionally omitted – replaced by nepali_alpha_1/2.
 */
export const allLayouts: KeyboardLayout[] = [
  nepaliAlpha1Layout,
  nepaliAlpha2Layout,
  latinLayout,
  cyrillicLayout,
  greekLayout,
];

/** Lookup map: layoutId → KeyboardLayout */
export const layoutMap: Record<LayoutId, KeyboardLayout> = {
  mapalineda:     mapalinedaLayout,
  latin:          latinLayout,
  cyrillic:       cyrillicLayout,
  greek:          greekLayout,
  nepali_alpha_1: nepaliAlpha1Layout,
  nepali_alpha_2: nepaliAlpha2Layout,
};
