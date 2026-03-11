/**
 * useVirtualKeyboardTarget.ts
 *
 * Returns a spread-able set of event-handler props that, when attached to any
 * editable element (<input>, <textarea>, or a contentEditable <div>), will:
 *
 *   1. Open the virtual keyboard when the element gains focus.
 *   2. Keep the keyboard open while the user is typing via the virtual keys.
 *   3. Close the keyboard only when focus moves to an element that is NOT
 *      the keyboard itself and NOT another registered input.
 *
 * ─── Usage ───────────────────────────────────────────────────────────────────
 *
 *   const bind = useVirtualKeyboardTarget();
 *
 *   <input        {...bind} />
 *   <textarea     {...bind} />
 *   <div contentEditable {...bind} />
 *
 * ─── Focus-loss protection ────────────────────────────────────────────────────
 *
 * On mobile, tapping a keyboard key triggers a `blur` on the active input
 * *before* the key `pointerdown` fires.  Without protection the keyboard would
 * immediately hide before any character is inserted.
 *
 * Protection strategy:
 *   • The keyboard keys use `onPointerDown` + `e.preventDefault()`, which
 *     stops the browser from moving focus away from the input.
 *   • Additionally, this hook uses a short `setTimeout` delay before hiding
 *     the keyboard on blur, allowing the key press to complete first.
 */

import { useCallback, useRef } from "react";
import { useKeyboard } from "../context/KeyboardProvider";

// How long (ms) to wait after blur before hiding the keyboard.
// This window lets a key's pointerdown handler run first.
const BLUR_DELAY_MS = 150;

interface VirtualKeyboardBindings {
  onFocus: React.FocusEventHandler<HTMLElement>;
  onBlur: React.FocusEventHandler<HTMLElement>;
  onClick: React.MouseEventHandler<HTMLElement>;
  onTouchStart: React.TouchEventHandler<HTMLElement>;
}

export function useVirtualKeyboardTarget(): VirtualKeyboardBindings {
  const { openKeyboard, closeKeyboard } = useKeyboard();

  // Timer reference so we can cancel a pending close if focus re-enters
  const blurTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelPendingClose = useCallback(() => {
    if (blurTimerRef.current !== null) {
      clearTimeout(blurTimerRef.current);
      blurTimerRef.current = null;
    }
  }, []);

  const handleFocus = useCallback<React.FocusEventHandler<HTMLElement>>(
    (e) => {
      // Cancel any pending close triggered by a previous blur
      cancelPendingClose();
      openKeyboard(e.currentTarget as HTMLElement);
    },
    [openKeyboard, cancelPendingClose]
  );

  const handleBlur = useCallback<React.FocusEventHandler<HTMLElement>>(
    (e) => {
      // e.relatedTarget is the element that is about to receive focus.
      // If it is inside the virtual keyboard panel, keep the keyboard open.
      const next = e.relatedTarget as HTMLElement | null;
      if (next && next.closest("[data-vkb-panel]")) {
        // Focus moved into the keyboard – do nothing
        return;
      }

      // Delay the close so keys with onPointerDown+preventDefault can still fire
      blurTimerRef.current = setTimeout(() => {
        closeKeyboard();
      }, BLUR_DELAY_MS);
    },
    [closeKeyboard]
  );

  // Clicking or tapping an already-focused element should also show the keyboard
  const handleClick = useCallback<React.MouseEventHandler<HTMLElement>>(
    (e) => {
      cancelPendingClose();
      openKeyboard(e.currentTarget as HTMLElement);
    },
    [openKeyboard, cancelPendingClose]
  );

  const handleTouchStart = useCallback<React.TouchEventHandler<HTMLElement>>(
    (e) => {
      cancelPendingClose();
      openKeyboard(e.currentTarget as HTMLElement);
    },
    [openKeyboard, cancelPendingClose]
  );

  return {
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: handleClick,
    onTouchStart: handleTouchStart,
  };
}
