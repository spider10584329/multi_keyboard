/**
 * LayoutTabs.tsx
 *
 * Tab strip displayed at the top of the virtual keyboard panel.
 * Each tab represents one script/language layout.
 * Clicking a tab switches the active layout instantly (no fetch, no re-mount).
 *
 * Like KeyboardKey, tabs use `onPointerDown` + `e.preventDefault()` to avoid
 * blurring the active input.
 */

import React from "react";
import { allLayouts } from "../../data/layouts";
import type { LayoutId } from "../../data/layouts/types";

interface LayoutTabsProps {
  activeLayout: LayoutId;
  onSelect: (id: LayoutId) => void;
}

export function LayoutTabs({ activeLayout, onSelect }: LayoutTabsProps) {
  return (
    <div className="vkb-tabs" role="tablist" aria-label="Script layout">
      {allLayouts.map((layout) => (
        <button
          key={layout.id}
          role="tab"
          type="button"
          className={`vkb-tab ${
            activeLayout === layout.id ? "vkb-tab--active" : ""
          }`.trim()}
          aria-selected={activeLayout === layout.id}
          onPointerDown={(e) => {
            // Keep focus on the input while switching layouts
            e.preventDefault();
            onSelect(layout.id as LayoutId);
          }}
          style={{ touchAction: "manipulation" }}
        >
          {layout.label}
        </button>
      ))}
    </div>
  );
}
