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
 * The keyboard stays open until the user explicitly clicks the close button.
 * Focus changes alone never close it.
 */

import { useCallback } from "react";
import { useKeyboard } from "../context/KeyboardProvider";

interface VirtualKeyboardBindings {
  onFocus: React.FocusEventHandler<HTMLElement>;
  onBlur: React.FocusEventHandler<HTMLElement>;
  onClick: React.MouseEventHandler<HTMLElement>;
  onTouchStart: React.TouchEventHandler<HTMLElement>;
}

export function useVirtualKeyboardTarget(): VirtualKeyboardBindings {
  const { openKeyboard } = useKeyboard();

  const handleFocus = useCallback<React.FocusEventHandler<HTMLElement>>(
    (e) => {
      openKeyboard(e.currentTarget as HTMLElement);
    },
    [openKeyboard]
  );

  // Blur no longer closes the keyboard – only the close button does.
  const handleBlur = useCallback<React.FocusEventHandler<HTMLElement>>(
    () => { /* intentional no-op */ },
    []
  );

  // Clicking or tapping an already-focused element also shows the keyboard.
  const handleClick = useCallback<React.MouseEventHandler<HTMLElement>>(
    (e) => {
      openKeyboard(e.currentTarget as HTMLElement);
    },
    [openKeyboard]
  );

  const handleTouchStart = useCallback<React.TouchEventHandler<HTMLElement>>(
    (e) => {
      openKeyboard(e.currentTarget as HTMLElement);
    },
    [openKeyboard]
  );

  return {
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: handleClick,
    onTouchStart: handleTouchStart,
  };
}
