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
  // Hidden layouts (e.g. nepali_alpha_2) are reached only via in-keyboard
  // page-switch keys, not via the tab bar.
  const visibleLayouts = allLayouts.filter((l) => !l.hidden);

  return (
    <div className="vkb-tabs" role="tablist" aria-label="Script layout">
      {visibleLayouts.map((layout) => {
        // A tab is active when the layout itself is active, OR when a hidden
        // sibling layout is active (e.g. show वर्णमाला tab lit while on page 2).
        const isActive =
          activeLayout === layout.id ||
          (layout.id === "nepali_alpha_1" && activeLayout === "nepali_alpha_2");

        return (
          <button
            key={layout.id}
            role="tab"
            type="button"
            className={`vkb-tab ${isActive ? "vkb-tab--active" : ""}`.trim()}
            data-layout={layout.id}
            aria-selected={isActive}
            onPointerDown={(e) => {
              e.preventDefault();
              onSelect(layout.id as LayoutId);
            }}
            style={{ touchAction: "manipulation" }}
          >
            {layout.label}
          </button>
        );
      })}
    </div>
  );
}
