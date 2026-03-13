/**
 * App.tsx
 *
 * Application root.
 *
 * Architecture:
 *   <KeyboardProvider>        – global keyboard state + context
 *     <DemoPage />            – all editable fields
 *     <VirtualKeyboardPortal />  – keyboard panel (portalled to document.body)
 *   </KeyboardProvider>
 *
 * To embed the keyboard in your own page, copy this same pattern:
 *   1. Wrap your content with <KeyboardProvider>.
 *   2. Place <VirtualKeyboardPortal /> anywhere inside it (once).
 *   3. Spread `useVirtualKeyboardTarget()` onto every input/textarea/div you
 *      want the keyboard to activate for.
 */

import React from "react";
import { KeyboardProvider } from "./context/KeyboardProvider";
import { VirtualKeyboardPortal } from "./components/VirtualKeyboard/VirtualKeyboard";
import { DemoPage } from "./pages/DemoPage";

function App() {
  return (
    <KeyboardProvider defaultLayout="nepali_alpha_1">
      {/* Your page content goes here */}
      <DemoPage />

      {/*
       * The keyboard portal renders outside the normal DOM tree (via
       * ReactDOM.createPortal into document.body), so z-index stacking
       * context issues are impossible.
       */}
      <VirtualKeyboardPortal />
    </KeyboardProvider>
  );
}

export default App;
