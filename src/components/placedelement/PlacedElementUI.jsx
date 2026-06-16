// PlacedElementUI.jsx — presentational layer only
// All element renderers live here. No state, no event logic.

import "./PlacedElement.css";
import {
  HANDLE_POSITIONS,
  getWrapperStyle,
  getButtonStyle,
  getTextStyle,
  getInputStyle,
  getBadgeStyle,
} from "./usePlacedElement";

// ── Corner selection handles ───────────────────────────────────
export function SelectionHandles() {
  return (
    <>
      {HANDLE_POSITIONS.map((pos, i) => (
        <div key={i} className="selection-handle" style={pos} />
      ))}
    </>
  );
}

// ── Individual element renderers ───────────────────────────────
export function ButtonEl({ p }) {
  return (
    <div className="el-button" style={getButtonStyle(p)}>
      {p.label}
    </div>
  );
}

export function TextEl({ p }) {
  return (
    <div className="el-text" style={getTextStyle(p)}>
      {p.label}
    </div>
  );
}

export function InputEl({ p }) {
  return (
    <div className="el-input" style={getInputStyle(p)}>
      {p.placeholder}
    </div>
  );
}

export function BadgeEl({ p }) {
  return (
    <div className="el-badge" style={getBadgeStyle(p)}>
      {p.label}
    </div>
  );
}

// ── Main UI component ──────────────────────────────────────────
export default function PlacedElementUI({ el, isSelected, onMouseDown }) {
  const { type, x, y, props: p } = el;

  return (
    <div
      className="placed-element"
      style={getWrapperStyle({ x, y, p, isSelected })}
      onMouseDown={onMouseDown}
      onClick={(e) => e.stopPropagation()}
    >
      {isSelected && <SelectionHandles />}

      {type === "button" && <ButtonEl  p={p} />}
      {type === "text"   && <TextEl    p={p} />}
      {type === "input"  && <InputEl   p={p} />}
      {type === "badge"  && <BadgeEl   p={p} />}
    </div>
  );
}