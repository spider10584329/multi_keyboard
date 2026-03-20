/**
 * DemoPage.tsx
 *
 * Demonstration page for the virtual Unicode keyboard.
 * A single rich-text editor (contentEditable) is provided with a formatting
 * toolbar so users can apply Bold, Italic, Underline, etc. while typing with
 * the virtual keyboard.
 *
 * The editor is UNCONTROLLED — the virtual keyboard writes directly into the
 * DOM via insertText / backspaceText.  Formatting commands are issued via
 * document.execCommand so they work on the current selection without
 * triggering a React re-render that would close the keyboard.
 */

import React, { useCallback, useRef } from "react";
import { useVirtualKeyboardTarget } from "../hooks/useVirtualKeyboardTarget";

// ─── Styles ──────────────────────────────────────────────────────────────────

const editorBoxStyle: React.CSSProperties = {
  border: "2px solid #5b5bf5",
  borderRadius: "10px",
  background: "#16162a",
  overflow: "hidden",
};

const toolbarStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  padding: "8px 10px",
  borderBottom: "1px solid #2a2a50",
  background: "#1a1a30",
};

const editableStyle: React.CSSProperties = {
  minHeight: "200px",
  padding: "14px 16px",
  color: "#e0e0f5",
  fontSize: "18px",
  lineHeight: 1.7,
  outline: "none",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  cursor: "text",
  caretColor: "#a0a0ff",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "8px",
  color: "#a0a0c8",
  fontFamily: "system-ui, sans-serif",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
};

// ─── Toolbar button ───────────────────────────────────────────────────────────

interface ToolBtnProps {
  title: string;
  label: React.ReactNode;
  command: string;
  value?: string;
  onFormat: (cmd: string, val?: string) => void;
}

function ToolBtn({ title, label, command, value, onFormat }: ToolBtnProps) {
  return (
    <button
      title={title}
      // Use onMouseDown + preventDefault so the editor does NOT lose focus
      // when the user clicks a toolbar button.
      onMouseDown={(e) => {
        e.preventDefault();
        onFormat(command, value);
      }}
      style={{
        padding: "4px 10px",
        border: "1px solid #3a3a60",
        borderRadius: "5px",
        background: "#23234a",
        color: "#c8c8f0",
        fontFamily: "system-ui, sans-serif",
        fontSize: "13px",
        cursor: "pointer",
        userSelect: "none",
        lineHeight: 1.4,
        transition: "background 0.1s",
      }}
    >
      {label}
    </button>
  );
}

// ─── Select-based format controls ────────────────────────────────────────────

interface FormatSelectProps {
  title: string;
  options: { label: string; value: string }[];
  command: string;
  onFormat: (cmd: string, val: string) => void;
}

function FormatSelect({ title, options, command, onFormat }: FormatSelectProps) {
  return (
    <select
      title={title}
      defaultValue=""
      onMouseDown={(e) => e.stopPropagation()}
      onChange={(e) => {
        if (e.target.value) {
          onFormat(command, e.target.value);
          // Reset so the same option can be re-selected
          e.target.value = "";
        }
      }}
      style={{
        padding: "4px 6px",
        border: "1px solid #3a3a60",
        borderRadius: "5px",
        background: "#23234a",
        color: "#c8c8f0",
        fontFamily: "system-ui, sans-serif",
        fontSize: "13px",
        cursor: "pointer",
      }}
    >
      <option value="" disabled>{title}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function DemoPage() {
  const bind = useVirtualKeyboardTarget();
  const editorRef = useRef<HTMLDivElement>(null);

  /**
   * Apply a formatting command to the current selection inside the editor.
   * We first re-focus the editor (in case a toolbar click moved focus) before
   * issuing the command.
   */
  const applyFormat = useCallback((command: string, value?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value ?? undefined);
  }, []);

  const fontSizeOptions = [
    { label: "Small (12px)",  value: "1" },
    { label: "Normal (16px)", value: "3" },
    { label: "Large (20px)",  value: "4" },
    { label: "XL (24px)",     value: "5" },
    { label: "XXL (32px)",    value: "6" },
  ];

  const colorOptions = [
    { label: "Default",  value: "#e0e0f5" },
    { label: "Red",      value: "#f47070" },
    { label: "Green",    value: "#70f4a0" },
    { label: "Blue",     value: "#70b8f4" },
    { label: "Yellow",   value: "#f4e070" },
    { label: "Pink",     value: "#f470d0" },
  ];

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
      {/* ── Header ──────────────────────────────────────────────────────── */}
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
          Tap / click the editor to activate the keyboard. Use the toolbar to
          format selected text.
        </p>
      </header>

      {/* ── Rich-text editor ────────────────────────────────────────────── */}
      <main style={{ padding: "28px 24px", maxWidth: "760px" }}>
        <label style={labelStyle}>Rich-text editor</label>

        <div style={editorBoxStyle}>
          {/* Formatting toolbar */}
          <div style={toolbarStyle}>
            <ToolBtn title="Bold"          label={<b>B</b>}   command="bold"          onFormat={applyFormat} />
            <ToolBtn title="Italic"        label={<i>I</i>}   command="italic"        onFormat={applyFormat} />
            <ToolBtn title="Underline"     label={<u>U</u>}   command="underline"     onFormat={applyFormat} />
            <ToolBtn title="Strikethrough" label={<s>S</s>}   command="strikeThrough" onFormat={applyFormat} />

            <div style={{ width: "1px", background: "#3a3a60", margin: "0 4px" }} />

            <ToolBtn title="Align left"   label="⬅ L" command="justifyLeft"   onFormat={applyFormat} />
            <ToolBtn title="Align center" label="≡ C" command="justifyCenter" onFormat={applyFormat} />
            <ToolBtn title="Align right"  label="R ➡" command="justifyRight"  onFormat={applyFormat} />

            <div style={{ width: "1px", background: "#3a3a60", margin: "0 4px" }} />

            <ToolBtn title="Ordered list"   label="1. List" command="insertOrderedList"   onFormat={applyFormat} />
            <ToolBtn title="Unordered list" label="• List"  command="insertUnorderedList" onFormat={applyFormat} />

            <div style={{ width: "1px", background: "#3a3a60", margin: "0 4px" }} />

            <FormatSelect
              title="Size"
              command="fontSize"
              options={fontSizeOptions}
              onFormat={applyFormat}
            />
            <FormatSelect
              title="Color"
              command="foreColor"
              options={colorOptions}
              onFormat={applyFormat}
            />

            <div style={{ width: "1px", background: "#3a3a60", margin: "0 4px" }} />

            <ToolBtn title="Clear formatting" label="✕ Clear" command="removeFormat" onFormat={applyFormat} />
          </div>

          {/* Editable content area */}
          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            style={editableStyle}
            data-placeholder="Tap here and type with the virtual keyboard…"
            {...bind}
          />
        </div>
      </main>
    </div>
  );
}
