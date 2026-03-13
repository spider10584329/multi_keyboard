/**
 * KeyboardProvider.tsx
 *
 * Global React context that manages the state of the virtual keyboard:
 *
 *   visible        – whether the keyboard panel is shown
 *   activeLayout   – which script is currently displayed
 *   activeTarget   – the editable DOM element that currently has focus
 *
 * Exposed actions:
 *   openKeyboard(target)  – store target + show keyboard
 *   closeKeyboard()       – hide keyboard + clear target
 *   setLayout(id)         – switch layout instantly (no re-mount)
 *   insertKey(keyDef)     – handle a key press (insert char, backspace, etc.)
 *
 * Usage:
 *   Wrap your app root (or the section that contains inputs) with
 *   <KeyboardProvider>.  Render <VirtualKeyboardPortal /> anywhere inside it.
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import type { KeyDef, LayoutId } from "../data/layouts/types";
import { insertText } from "../utils/insertText";
import { backspaceText } from "../utils/backspaceText";

// ─── Types ────────────────────────────────────────────────────────────────────

interface KeyboardContextValue {
  visible: boolean;
  activeLayout: LayoutId;
  activeTarget: HTMLElement | null;
  /** true while the one-shot Shift is pending */
  shift: boolean;
  /** true while Caps Lock is toggled on */
  caps: boolean;
  /** true while the one-shot Ctrl is pending */
  ctrl: boolean;
  openKeyboard: (target: HTMLElement) => void;
  closeKeyboard: () => void;
  setLayout: (id: LayoutId) => void;
  insertKey: (key: KeyDef) => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const KeyboardContext = createContext<KeyboardContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

interface KeyboardProviderProps {
  children: React.ReactNode;
  /**
   * Layout shown when the keyboard first appears.
   * Defaults to "mapalineda" (Nepali).
   */
  defaultLayout?: LayoutId;
}

export function KeyboardProvider({
  children,
  defaultLayout = "mapalineda",
}: KeyboardProviderProps) {
  const [visible, setVisible] = useState(false);
  const [activeLayout, setActiveLayout] = useState<LayoutId>(defaultLayout);

  // Modifier states exposed to the keyboard UI for visual feedback
  const [shift, setShiftState] = useState(false);
  const [caps,  setCapsState]  = useState(false);
  const [ctrl,  setCtrlState]  = useState(false);

  // Refs keep the stable insertKey callback up-to-date without re-creating it
  const targetRef = useRef<HTMLElement | null>(null);
  const shiftRef  = useRef(false);
  const capsRef   = useRef(false);
  const ctrlRef   = useRef(false);

  // Helpers that keep both ref and state in sync
  const setShift = useCallback((v: boolean) => { shiftRef.current = v; setShiftState(v); }, []);
  const setCaps  = useCallback((v: boolean) => { capsRef.current  = v; setCapsState(v);  }, []);
  const setCtrl  = useCallback((v: boolean) => { ctrlRef.current  = v; setCtrlState(v);  }, []);

  // Also expose activeTarget reactively
  const [activeTarget, setActiveTarget] = useState<HTMLElement | null>(null);

  const openKeyboard = useCallback((target: HTMLElement) => {
    targetRef.current = target;
    setActiveTarget(target);
    setVisible(true);
  }, []);

  const closeKeyboard = useCallback(() => {
    setVisible(false);
    targetRef.current = null;
    setActiveTarget(null);
  }, []);

  const setLayout = useCallback((id: LayoutId) => {
    setActiveLayout(id);
  }, []);

  /**
   * Handle a key press from the virtual keyboard.
   *
   * Modifier logic:
   *   Shift  – one-shot: inserts shiftValue of next character key, then releases.
   *   Caps   – sticky toggle: all keys use shiftValue until Caps pressed again.
   *   Shift XOR Caps determines the active layer (they cancel each other out).
   *   Ctrl   – one-shot: next character key dispatches Ctrl+key event instead
   *            of inserting text, then Ctrl releases.
   *   Tab    – inserts \t.
   */
  const insertKey = useCallback((key: KeyDef) => {
    const target = targetRef.current;

    // ─ Page switch ──────────────────────────────────────────────────
    if (key.action === "page" && key.switchTarget) {
      setActiveLayout(key.switchTarget);
      return;
    }

    // ─ Modifier toggle actions ───────────────────────────────────────
    if (key.action === "shift") {
      const next = !shiftRef.current;
      setShift(next);
      if (next) setCaps(false); // Shift cancels Caps
      return;
    }
    if (key.action === "caps") {
      setCaps(!capsRef.current);
      setShift(false);
      return;
    }
    if (key.action === "ctrl") {
      setCtrl(!ctrlRef.current);
      return;
    }

    // ─ Ctrl + character key ──────────────────────────────────────
    // Dispatch a real Ctrl+key event; handle common edit shortcuts via
    // document.execCommand so the browser acts on them immediately.
    if (ctrlRef.current && key.value !== undefined) {
      const char = Array.from(key.value)[0]?.toLowerCase() ?? "";
      const execMap: Record<string, string> = {
        a: "selectAll", c: "copy", v: "paste",
        x: "cut",       z: "undo", y: "redo",
      };
      if (target) {
        target.focus();
        const cmd = execMap[char];
        if (cmd) {
          try { document.execCommand(cmd); } catch {}
        } else {
          target.dispatchEvent(new KeyboardEvent("keydown", {
            key: char, ctrlKey: true, bubbles: true, cancelable: true,
          }));
        }
      }
      setCtrl(false); // one-shot release
      return;
    }

    // ─ Non-character action keys ──────────────────────────────────
    if (key.action) {
      switch (key.action) {
        case "backspace":
          backspaceText(target);
          break;
        case "space":
          insertText(target, " ");
          break;
        case "tab":
          insertText(target, "\t");
          break;
        case "enter":
          if (target?.tagName.toLowerCase() === "textarea") {
            insertText(target, "\n");
          } else if (target?.tagName.toLowerCase() === "input") {
            target.dispatchEvent(new KeyboardEvent("keydown", {
              key: "Enter", bubbles: true, cancelable: true,
            }));
          }
          break;
        case "close":
          setVisible(false);
          break;
        default:
          break;
      }
      // Action keys do NOT release one-shot Shift
      return;
    }

    // ─ Character insertion ────────────────────────────────────────
    if (key.value !== undefined) {
      // Three independent layers:
      //   shift (one-shot) → shiftValue
      //   caps  (sticky)   → capsValue if defined, else shiftValue
      //                     (the fallback preserves uppercase behaviour for
      //                      Latin / Cyrillic / Greek which have no capsValue)
      //   neither          → value
      const shiftOn = shiftRef.current;
      const capsOn  = capsRef.current;

      let text: string;
      if (shiftOn && key.shiftValue !== undefined) {
        text = key.shiftValue;
      } else if (capsOn) {
        text = key.capsValue ?? key.shiftValue ?? key.value;
      } else {
        text = key.value;
      }
      insertText(target, text);
      // One-shot Shift: auto-release after one character
      if (shiftRef.current) setShift(false);
    }
  }, [setShift, setCaps, setCtrl]); // eslint-disable-line react-hooks/exhaustive-deps

  const value: KeyboardContextValue = {
    visible,
    activeLayout,
    activeTarget,
    shift,
    caps,
    ctrl,
    openKeyboard,
    closeKeyboard,
    setLayout,
    insertKey,
  };

  return (
    <KeyboardContext.Provider value={value}>
      {children}
    </KeyboardContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * Access the keyboard context from any component inside <KeyboardProvider>.
 * Throws if called outside the provider.
 */
export function useKeyboard(): KeyboardContextValue {
  const ctx = useContext(KeyboardContext);
  if (!ctx) {
    throw new Error("useKeyboard must be used inside <KeyboardProvider>");
  }
  return ctx;
}
