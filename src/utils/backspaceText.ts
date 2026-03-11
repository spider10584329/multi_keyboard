/**
 * backspaceText.ts
 *
 * Removes one user-visible character (grapheme cluster) to the left of the
 * caret inside a supported editable element.
 *
 * Why not String.slice / Array.from / Intl.Segmenter alone?
 * ──────────────────────────────────────────────────────────
 * Devanagari (and other Indic scripts) use multi-codepoint sequences that
 * render as a single glyph:
 *   • Matras       क + ा  → का
 *   • Half-forms   त + ् + र → त्र  (conjunct ligature)
 *   • Nukta forms  ड + ़  → ड़
 *
 * Array.from removes one code point, which can leave broken combining marks.
 * Intl.Segmenter with Unicode < 15.1 splits conjuncts into two clusters
 * (e.g. "त्र" → ["त्", "र"]), so one press only removes "र" and leaves the
 * dangling half-form "त्" — visually confusing, looks like "nothing happened".
 *
 * Solution: document.execCommand('delete')
 * ─────────────────────────────────────────
 * execCommand uses the browser's native deletion logic, which is built on the
 * same Unicode grapheme-cluster rules the layout engine uses to render glyphs.
 * It therefore always removes exactly one user-visible unit — including full
 * Devanagari conjuncts — in a single press.  It also fires proper `input` and
 * `beforeinput` events so React controlled-input state stays in sync.
 *
 * execCommand is "deprecated" in the sense that no new commands will be added,
 * but the existing text-editing commands ('delete', 'insertText', etc.) are
 * explicitly retained in all major browsers and the WHATWG editing spec.
 */

/**
 * Delete one grapheme cluster to the left of the caret in an <input>/<textarea>.
 *
 * Strategy (in order):
 *  1. Selection exists  → delete the selected range manually (no ambiguity).
 *  2. No selection, caret > 0 → execCommand('delete') for native Unicode-
 *     correct deletion.  The element must have focus; onPointerDown +
 *     e.preventDefault() on every keyboard key guarantees that the target
 *     input remains focused when this function is called.
 *  3. execCommand unavailable → fall back to manual Intl.Segmenter deletion.
 */
export function backspaceInputLike(
  el: HTMLInputElement | HTMLTextAreaElement
): void {
  const start = el.selectionStart ?? el.value.length;
  const end   = el.selectionEnd   ?? el.value.length;

  // ── Case 1: a range is selected → clear it manually ────────────────────
  if (start !== end) {
    const proto =
      el instanceof HTMLInputElement
        ? window.HTMLInputElement.prototype
        : window.HTMLTextAreaElement.prototype;
    const nativeSetter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
    const newValue = el.value.slice(0, start) + el.value.slice(end);
    nativeSetter ? nativeSetter.call(el, newValue) : (el.value = newValue);
    el.setSelectionRange(start, start);
    el.dispatchEvent(new Event("input",  { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
    return;
  }

  if (start === 0) return; // nothing to delete

  // ── Case 2: use execCommand for native grapheme-cluster deletion ────────
  // The keyboard's onPointerDown + e.preventDefault() keeps focus on `el`,
  // so execCommand targets it correctly without an explicit el.focus() call.
  if (document.execCommand("delete")) {
    // execCommand fired its own beforeinput/input events — we are done.
    return;
  }

  // ── Case 3: execCommand unavailable (rare) – manual fallback ───────────
  const proto =
    el instanceof HTMLInputElement
      ? window.HTMLInputElement.prototype
      : window.HTMLTextAreaElement.prototype;
  const nativeSetter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
  const setNative = (v: string) =>
    nativeSetter ? nativeSetter.call(el, v) : (el.value = v);

  const before = el.value.slice(0, start);
  const after  = el.value.slice(start);
  const newBefore = deleteLastGrapheme(before);
  setNative(newBefore + after);
  el.setSelectionRange(newBefore.length, newBefore.length);
  el.dispatchEvent(new Event("input",  { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
}

/**
 * Delete one grapheme cluster to the left of the caret inside a contentEditable.
 * execCommand('delete') works here too when the element is focused.
 */
export function backspaceContentEditable(_el: HTMLElement): void {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);

  if (!range.collapsed) {
    // Selection: let execCommand handle it (fires correct events)
    document.execCommand("delete");
    return;
  }

  // No selection: execCommand handles grapheme clusters natively
  if (document.execCommand("delete")) return;

  // Manual fallback for environments where execCommand is unavailable
  const container = range.startContainer;
  const offset    = range.startOffset;

  if (container.nodeType === Node.TEXT_NODE && offset > 0) {
    const text      = container.textContent ?? "";
    const before    = text.slice(0, offset);
    const after     = text.slice(offset);
    const newBefore = deleteLastGrapheme(before);
    container.textContent = newBefore + after;

    const newRange = document.createRange();
    newRange.setStart(container, newBefore.length);
    newRange.collapse(true);
    selection.removeAllRanges();
    selection.addRange(newRange);
  }
}

/**
 * Manual grapheme-cluster deletion used only as a last-resort fallback.
 * Prefers Intl.Segmenter; falls back to Array.from (code-point iteration).
 */
function deleteLastGrapheme(str: string): string {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new (Intl as any).Segmenter(undefined, {
      granularity: "grapheme",
    });
    const segments: string[] = [];
    for (const seg of segmenter.segment(str)) {
      segments.push(seg.segment);
    }
    if (segments.length === 0) return str;
    return segments.slice(0, -1).join("");
  }
  // Final fallback: remove last Unicode code point (handles surrogates)
  const codePoints = Array.from(str);
  if (codePoints.length === 0) return str;
  return codePoints.slice(0, -1).join("");
}

/**
 * Unified entry point – detects the element type and calls the right function.
 */
export function backspaceText(target: HTMLElement | null): void {
  if (!target) return;

  const tag = target.tagName.toLowerCase();

  if (tag === "input" || tag === "textarea") {
    backspaceInputLike(target as HTMLInputElement | HTMLTextAreaElement);
  } else if (target.isContentEditable) {
    backspaceContentEditable(target);
  }
}
