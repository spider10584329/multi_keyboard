/**
 * DemoPage.tsx
 *
 * Demonstration page for the virtual Unicode keyboard.
 * Three editable targets are provided:
 *
 *   • <input>              – single-line text
 *   • <textarea>           – multi-line text
 *   • contentEditable div  – rich-text style block
 *
 * All fields are UNCONTROLLED (no value= prop, no onChange state).
 * The virtual keyboard writes directly into the DOM via insertText /
 * backspaceText and dispatches a native 'input' event.  A controlled React
 * input (value={state}) would re-render on every key press, causing a
 * synthetic blur that hides the keyboard prematurely.
 */

import React, { useRef } from "react";
import { useVirtualKeyboardTarget } from "../hooks/useVirtualKeyboardTarget";

// ─── Shared field styles ─────────────────────────────────────────────────────

const fieldStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "10px 14px",
  border: "2px solid #5b5bf5",
  borderRadius: "8px",
  background: "#16162a",
  color: "#e0e0f5",
  fontFamily:
    '"Noto Sans Devanagari", "Noto Sans", Mangal, "Lohit Devanagari", system-ui, sans-serif',
  fontSize: "18px",
  outline: "none",
  transition: "border-color 0.15s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "6px",
  color: "#a0a0c8",
  fontFamily: "system-ui, sans-serif",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
};

// ─── Component ────────────────────────────────────────────────────────────────

export function DemoPage() {
  const bind = useVirtualKeyboardTarget();

  // Uncontrolled refs — the virtual keyboard writes directly into the DOM.
  // No React state is updated on key press, so no re-render occurs and the
  // keyboard stays visible as long as the input element has focus.
  const inputRef    = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f1a",
        color: "#e0e0f5",
        fontFamily: "system-ui, sans-serif",
        paddingBottom: "380px", // leave room for the bottom keyboard
      }}
    >
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <header
        style={{
          background: "#16162a",
          borderBottom: "1px solid #2a2a50",
          padding: "20px 24px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 700 }}>
          🖊️ Virtual Unicode Keyboard — Demo
        </h1>
        <p style={{ margin: "6px 0 0", fontSize: "14px", color: "#9090b8" }}>
          Tap / click any field to activate the keyboard.  Switch scripts using
          the tabs.
        </p>
      </header>

      {/* ── Fields ────────────────────────────────────────────────────────── */}
      <main style={{ padding: "28px 24px", maxWidth: "700px" }}>

        {/* Input ─────────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: "28px" }}>
          <label style={labelStyle}>Single-line input</label>
          {/*
           * IMPORTANT: uncontrolled input (no value= prop).
           * The virtual keyboard mutates el.value directly and dispatches a
           * native 'input' event.  A controlled input (value={state}) would
           * re-render with the old state and erase every keystroke.
           */}
          <input
            ref={inputRef}
            type="text"
            defaultValue=""
            style={fieldStyle}
            placeholder="Tap here to type with the virtual keyboard…"
            {...bind}
          />
        </div>

        {/* Textarea ───────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: "28px" }}>
          <label style={labelStyle}>Multi-line textarea</label>
          <textarea
            ref={textareaRef}
            rows={4}
            defaultValue=""
            style={{ ...fieldStyle, resize: "vertical" }}
            placeholder="Multi-line input…"
            {...bind}
          />
        </div>

        {/* contentEditable ─────────────────────────────────────────────── */}
        <div style={{ marginBottom: "28px" }}>
          <label style={labelStyle}>Content-editable div</label>
          <div
            ref={contentRef}
            contentEditable
            suppressContentEditableWarning
            style={{
              ...fieldStyle,
              minHeight: "80px",
              whiteSpace: "pre-wrap",
              cursor: "text",
            }}
            data-placeholder="contentEditable block…"
            {...bind}
          />
        </div>
      </main>
    </div>
  );
}
