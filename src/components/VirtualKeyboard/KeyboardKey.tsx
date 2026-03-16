/**
 * KeyboardKey.tsx
 *
 * A single key button on the virtual keyboard.
 *
 * Critical implementation detail — `onPointerDown` instead of `onClick`:
 *   Using onPointerDown + e.preventDefault() keeps focus on the active input
 *   element when the user taps a key.  If we used onClick, the browser would
 *   fire a blur on the input *before* the click, causing the keyboard to hide
 *   before any character is inserted.  This is the most important mobile fix.
 */

import React from "react";
import type { KeyDef } from "../../data/layouts/types";

interface Modifiers {
  shift: boolean;
  caps: boolean;
  ctrl: boolean;
}

interface KeyboardKeyProps {
  keyDef: KeyDef;
  onPress: (keyDef: KeyDef) => void;
  modifiers: Modifiers;
}

export function KeyboardKey({ keyDef, onPress, modifiers }: KeyboardKeyProps) {
  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    // Prevent the browser from blurring the active input element
    e.preventDefault();
    onPress(keyDef);
  };

  // Three independent layers.
  // Shift wins for display when both are somehow active (shouldn't happen
  // with current toggle logic, but be defensive).
  const shiftOn = modifiers.shift;
  const capsOn  = modifiers.caps && !modifiers.shift;

  const displayLabel =
    shiftOn && keyDef.shiftValue !== undefined
      ? keyDef.shiftValue
      : capsOn && (keyDef.capsValue ?? keyDef.shiftValue) !== undefined
      ? (keyDef.capsValue ?? keyDef.shiftValue)!
      : keyDef.label;

  // Light up Shift/Caps/Ctrl buttons when their state is active
  const isModifierActive =
    (keyDef.action === "shift" && modifiers.shift) ||
    (keyDef.action === "caps"  && modifiers.caps)  ||
    (keyDef.action === "ctrl"  && modifiers.ctrl);

  // Map the width hint to a CSS class
  const widthClass =
    keyDef.width === "extraWide"
      ? "vkb-key--extra-wide"
      : keyDef.width === "wide"
      ? "vkb-key--wide"
      : "";

  // Detect Devanagari script in the display label so we can apply
  // script-specific styling (makes Devanagari labels visually match Latin)
  const isDevanagari = /[\u0900-\u097F]/.test(String(displayLabel));
  const scriptClass = isDevanagari ? "vkb-key--deva" : "vkb-key--latin";



  // Action keys get a modifier class for distinct styling
  const actionClass = keyDef.action ? `vkb-key--${keyDef.action}` : "";

  const activeClass = isModifierActive ? "vkb-key--modifier-active" : "";

  return (
    <button
      type="button"
      className={`vkb-key ${widthClass} ${actionClass} ${activeClass} ${scriptClass}`.trim()}
      onPointerDown={handlePointerDown}
      aria-pressed={isModifierActive ? true : undefined}
      aria-label={
        keyDef.action
          ? keyDef.action
          : `${displayLabel}${keyDef.codePoint ? ` (${keyDef.codePoint})` : ""}`
      }
      style={{ touchAction: "manipulation" }}
    >
      {displayLabel}
    </button>
  );
}
