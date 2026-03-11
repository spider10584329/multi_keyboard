/**
 * Shared type definitions for virtual keyboard layout data.
 */

/** All supported layout identifiers */
export type LayoutId = "mapalineda" | "latin" | "cyrillic" | "greek";

/**
 * A single key definition.
 * - `value`  : the exact Unicode string to insert when the key is pressed
 * - `action` : for control keys that do not insert text
 * - `width`  : optional visual width hint for CSS
 */
export type KeyDef = {
  /** Unique key id (used as React key) */
  id: string;
  /** Visible label shown on the key face */
  label: string;
  /** Unicode string to insert – omit for pure action keys */
  value?: string;
  /**
   * Unicode string inserted when Shift is active (one-shot layer).
   */
  shiftValue?: string;
  /**
   * Unicode string inserted when Caps Lock is active (sticky third layer).
   * If undefined, falls back to shiftValue so Latin/Cyrillic uppercase still
   * works when Caps is on.
   */
  capsValue?: string;
  /** Human-readable Unicode code point(s), e.g. "U+0915" */
  codePoint?: string;
  /** For non-character keys */
  action?: "backspace" | "enter" | "space" | "shift" | "caps" | "ctrl" | "tab" | "close";
  /** Visual width class applied to the key button */
  width?: "normal" | "wide" | "extraWide";
};

/** One complete keyboard layout */
export type KeyboardLayout = {
  id: LayoutId;
  label: string;
  /** Ordered rows of keys, top to bottom */
  rows: KeyDef[][];
};
