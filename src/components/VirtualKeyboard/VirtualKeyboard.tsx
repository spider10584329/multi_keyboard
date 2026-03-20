/**
 * VirtualKeyboard.tsx
 *
 * The main virtual keyboard panel.
 *
 * Renders as a bottom-sheet fixed to the viewport bottom so it is always
 * accessible and never obscured by content.  It is rendered into a React
 * Portal so z-index and stacking context problems are avoided regardless of
 * where <VirtualKeyboardPortal /> appears in the JSX tree.
 *
 * ─── Architecture reminder ───────────────────────────────────────────────────
 * This component is intentionally "dumb" about state – it reads everything
 * from KeyboardContext and delegates all logic back to it.
 * Layout data is pure configuration, imported statically; no network requests.
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useKeyboard } from "../../context/KeyboardProvider";
import { layoutMap } from "../../data/layouts";
import type { KeyDef } from "../../data/layouts/types";
import { KeyboardKey } from "./KeyboardKey";
import { LayoutTabs } from "./LayoutTabs";
import "./keyboard.css";

const FEEDBACK_MSG = "Please send future feedback to spider10584329@gmail.com.";

// ─── Toast ────────────────────────────────────────────────────────────────────

function FeedbackToast({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div className="vkb-toast" role="status" aria-live="polite">
      {FEEDBACK_MSG}
    </div>
  );
}

// ─── Main panel ───────────────────────────────────────────────────────────────

function VirtualKeyboard() {
  const { visible, activeLayout, setLayout, insertKey, closeKeyboard, shift, caps, ctrl } = useKeyboard();

  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePress = useCallback((key: KeyDef) => {
    if (key.action === "shift") {
      // Show toast on every Shift tap
      if (toastTimer.current) clearTimeout(toastTimer.current);
      setToastVisible(true);
      toastTimer.current = setTimeout(() => setToastVisible(false), 4000);
    }
    insertKey(key);
  }, [insertKey]);

  // Clean up timer on unmount
  useEffect(() => () => { if (toastTimer.current) clearTimeout(toastTimer.current); }, []);

  if (!visible) return null;

  const layout = layoutMap[activeLayout];
  const modifiers = { shift, caps, ctrl };

  return (
    // onPointerDown on the panel prevents ANY tap on the keyboard — gaps,
    // padding, empty areas — from blurring the active input.  Key buttons
    // and tabs also call preventDefault individually, but this is the
    // definitive catch-all for every non-interactive pixel on the panel.
    // data-vkb-panel is used by useVirtualKeyboardTarget to skip the blur
    // close-delay when focus moves into the keyboard itself.
    <>
      <FeedbackToast visible={toastVisible} />
      <div
        className="vkb-panel"
        data-vkb-panel="true"
        role="dialog"
        aria-label="Virtual keyboard"
        onPointerDown={(e) => e.preventDefault()}
      >
        {/* Close button – only way to dismiss the keyboard */}
        <button
          className="vkb-close-btn"
          aria-label="Close keyboard"
          onPointerDown={(e) => {
            e.preventDefault(); // keep focus on the editor
            closeKeyboard();
          }}
        >
          ✕
        </button>

        {/* Script selector tabs */}
        <LayoutTabs activeLayout={activeLayout} onSelect={setLayout} />

        {/* Key rows */}
        <div className="vkb-rows">
          {layout.rows.map((row: KeyDef[], rowIndex: number) => (
            <div key={rowIndex} className="vkb-row">
              {row.map((keyDef: KeyDef) => (
                <KeyboardKey
                  key={keyDef.id}
                  keyDef={keyDef}
                  onPress={handlePress}
                  modifiers={modifiers}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ─── Portal wrapper ───────────────────────────────────────────────────────────

/**
 * Renders the virtual keyboard into `document.body` via a React Portal.
 *
 * Place this once near the root of your app:
 *
 *   <KeyboardProvider>
 *     <App />
 *     <VirtualKeyboardPortal />
 *   </KeyboardProvider>
 */
export function VirtualKeyboardPortal() {
  return ReactDOM.createPortal(<VirtualKeyboard />, document.body);
}
