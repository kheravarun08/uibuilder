// usePropertiesPanel.js — logic for PropertiesPanel
// Handles event suppression and derives which fields to show per element type.
// No JSX, no CSS imports here.

// Stops clicks inside the panel from bubbling to the canvas and deselecting
export function stopBubble(e) {
  e.stopPropagation();
}

// Returns true if a given prop key exists on the element's props
export function hasProp(props, key) {
  return key in props;
}

// Font weight options for the select dropdown
export const FONT_WEIGHT_OPTIONS = [
  { value: "300", label: "Light" },
  { value: "400", label: "Regular" },
  { value: "500", label: "Medium" },
  { value: "600", label: "Semibold" },
  { value: "700", label: "Bold" },
];