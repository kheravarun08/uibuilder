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
  getHeaderBarStyle,
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

// ── Header Bar renderer ────────────────────────────────────────
export function HeaderBarEl({ p }) {
  // navLinks is stored as a comma-separated string for easy panel editing
  const links = (p.navLinks || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
 
  return (
    <div className="el-header-bar" style={getHeaderBarStyle(p)}>
      {/* Logo badge */}
      {p.showLogo && (
        <span className="el-header-logo" style={{ color: p.textColor }}>
          {p.logoText}
        </span>
      )}
 
      {/* Title */}
      <span className="el-header-title" style={{ color: p.textColor, fontSize: p.fontSize, fontWeight: p.fontWeight }}>
        {p.title}
      </span>
 
      {/* Nav links */}
      {p.showNavLinks && links.length > 0 && (
        <nav className="el-header-nav">
          {links.map((link, i) => (
            <span key={i} className="el-header-nav-link" style={{ color: p.textColor, fontSize: p.fontSize }}>
              {link}
            </span>
          ))}
        </nav>
      )}
 
      {/* CTA button */}
      {p.showCta && (
        <span className="el-header-cta" style={{ color: p.textColor, borderColor: p.textColor, fontSize: p.fontSize }}>
          {p.ctaLabel}
        </span>
      )}
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
      {type === "headerBar" && <HeaderBarEl p={p} />}
    </div>
  );
}