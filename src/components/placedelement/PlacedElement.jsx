// PlacedElement.jsx — orchestrator
// Passes props straight into PlacedElementUI.
// Add any future element-level logic here (e.g. resize, context menu).

import PlacedElementUI from "./PlacedElementUI";

export default function PlacedElement({ el, isSelected, onMouseDown }) {
  return (
    <PlacedElementUI
      el={el}
      isSelected={isSelected}
      onMouseDown={onMouseDown}
    />
  );
}