// usePlacedElement.js — logic for PlacedElement
// Derives selection styles and corner handle positions from props.
// No JSX, no CSS imports here.

// Corner handle positions for the 4 corners of a selected element
export const HANDLE_POSITIONS = [
  { top: -4,  left:  -4 },
  { top: -4,  right: -4 },
  { bottom: -4, left: -4 },
  { bottom: -4, right: -4 },
];

// Inline styles that depend on runtime prop values
export function getWrapperStyle({ x, y, p, isSelected }) {
  return {
    left:         x,
    top:          y,
    width:        p.width,
    height:       p.height,
    outline:      isSelected ? "2px solid #6366F1" : "none",
    outlineOffset: 3,
    borderRadius: p.borderRadius ?? 0,
  };
}

export function getButtonStyle(p) {
  return {
    background:   p.bgColor,
    color:        p.textColor,
    fontSize:     p.fontSize,
    fontWeight:   p.fontWeight ?? "500",
    borderRadius: p.borderRadius,
  };
}

export function getTextStyle(p) {
  return {
    color:      p.textColor,
    fontSize:   p.fontSize,
    fontWeight: p.fontWeight ?? "400",
  };
}

export function getInputStyle(p) {
  return {
    background:   p.bgColor,
    border:       `1.5px solid ${p.borderColor}`,
    borderRadius: p.borderRadius,
    fontSize:     p.fontSize,
    color:        p.textColor,
  };
}

export function getBadgeStyle(p) {
  return {
    background:   p.bgColor,
    color:        p.textColor,
    fontSize:     p.fontSize,
    fontWeight:   p.fontWeight ?? "600",
    borderRadius: p.borderRadius,
  };
}