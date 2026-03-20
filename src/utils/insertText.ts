/**
 * insertText.ts
 *
 * Inserts a Unicode string at the current caret position of a supported
 * editable element, replacing any selected text.
 *
 * Supported targets:
 *   • HTMLInputElement
 *   • HTMLTextAreaElement
 *   • HTMLElement with contentEditable="true"
 *
 * After mutating the DOM, a synthetic `input` event is dispatched so that
 * React controlled components (which listen to that event to update state)
 * pick up the new value.
 */

/**
 * Insert `text` at the caret in an <input> or <textarea>.
 *
 * Uses the native value setter (via Object.getOwnPropertyDescriptor on the
 * prototype) rather than assigning el.value directly.  This is necessary for
 * React controlled inputs: React intercepts the direct assignment and
 * considers the value unchanged because it compares against its internal
 * fiber value.  Using the native setter bypasses React's interception so the
 * following synthetic "input" event is treated as a genuine user edit and
 * triggers React's onChange handler with the new value.
 */
export function insertIntoInputLike(
  el: HTMLInputElement | HTMLTextAreaElement,
  text: string
): void {
  const start = el.selectionStart ?? el.value.length;
  const end = el.selectionEnd ?? el.value.length;

  const newValue = el.value.slice(0, start) + text + el.value.slice(end);

  // Use the native prototype setter so React's synthetic event fires correctly
  const proto =
    el instanceof HTMLInputElement
      ? window.HTMLInputElement.prototype
      : window.HTMLTextAreaElement.prototype;
  const nativeSetter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
  if (nativeSetter) {
    nativeSetter.call(el, newValue);
  } else {
    el.value = newValue; // fallback for non-standard environments
  }

  // Place caret immediately after the inserted text
  const nextPos = start + text.length;
  el.setSelectionRange(nextPos, nextPos);

  // Dispatch events so React and any other input listeners pick up the change
  el.dispatchEvent(new Event("input", { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
}

/**
 * Insert `text` at the current Selection inside a contentEditable element.
 * 
 * @param wrapInSpan - If true, wraps the text in a <span class="preeti-char"> for custom styling
 */
export function insertIntoContentEditable(
  _el: HTMLElement,
  text: string,
  wrapInSpan: boolean = false
): void {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);

  // Delete any selected content first
  range.deleteContents();

  if (wrapInSpan) {
    // Create span for Preeti character (nepali_alpha_2 keyboard)
    // Must use Preeti font to display encoded Latin characters as Devanagari
    const span = document.createElement('span');
    span.className = 'preeti-char';
    span.textContent = text;
    
    // Insert a zero-width space BEFORE the span to break any previous formatting
    const breakBefore = document.createTextNode('\u200B');
    range.insertNode(breakBefore);
    range.setStartAfter(breakBefore);
    range.collapse(true);
    
    // Now insert the Preeti span
    range.insertNode(span);
    
    // Insert a zero-width space after to ensure next character doesn't append to this span
    range.setStartAfter(span);
    range.collapse(true);
    const breakAfter = document.createTextNode('\u200B');
    range.insertNode(breakAfter);
    
    // Position caret after the break marker
    range.setStartAfter(breakAfter);
    range.collapse(true);
  } else {
    // Create plain text node for Unicode character (keyboard 1)
    const textNode = document.createTextNode(text);
    range.insertNode(textNode);
    
    // Position caret after the text
    range.setStartAfter(textNode);
    range.collapse(true);
    
    // Insert a zero-width space after plain text too, to ensure clean
    // separation between different node types
    const breakMarker = document.createTextNode('\u200B');
    range.insertNode(breakMarker);
    range.setStartAfter(breakMarker);
    range.collapse(true);
  }
  
  selection.removeAllRanges();
  selection.addRange(range);
}

/**
 * Unified entry point – detects which kind of element the target is and
 * calls the appropriate insertion function.
 * 
 * @param wrapInSpan - For contentEditable elements, wraps text in a span for custom styling
 */
export function insertText(
  target: HTMLElement | null,
  text: string,
  wrapInSpan: boolean = false
): void {
  if (!target) return;

  const tag = target.tagName.toLowerCase();

  if (tag === "input" || tag === "textarea") {
    insertIntoInputLike(
      target as HTMLInputElement | HTMLTextAreaElement,
      text
    );
  } else if (target.isContentEditable) {
    insertIntoContentEditable(target, text, wrapInSpan);
  }
}
