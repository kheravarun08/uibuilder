// PropertiesPanelUI.jsx — presentational layer only
// All sub-components (Section, Field, TextInput, ColorInput) live here.
// No useState, no event logic defined here.

import "./PropertiesPanel.css";
import { stopBubble, hasProp, FONT_WEIGHT_OPTIONS } from "./usePropertiesPanel";

// ── Shared sub-components ──────────────────────────────────────

export function Section({ label }) {
  return (
    <div className="panel-section">
      <span className="panel-section-label">{label}</span>
      <div className="panel-section-line" />
    </div>
  );
}

export function Field({ label, children }) {
  return (
    <div className="panel-field">
      <label className="panel-field-label">{label}</label>
      {children}
    </div>
  );
}

export function TextInput({ value, onChange, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      className="panel-input"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export function ColorInput({ value, onChange }) {
  return (
    <div className="panel-color-row">
      <input
        type="color"
        value={value}
        className="panel-color-swatch"
        onChange={(e) => onChange(e.target.value)}
      />
      <input
        type="text"
        value={value}
        className="panel-input panel-color-text"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function TwoCol({ children }) {
  return <div className="panel-two-col">{children}</div>;
}

// ── Empty state (no element selected) ─────────────────────────

export function EmptyPanel() {
  return (
    <aside className="panel" onClick={stopBubble}>
      <div className="panel-header">
        <span className="panel-title">Properties</span>
      </div>
      <div className="panel-empty-state">
        <div className="panel-empty-icon">✦</div>
        <p className="panel-empty-text">
          Select an element on the canvas to edit its properties
        </p>
      </div>
    </aside>
  );
}

// ── Main UI (element selected) ─────────────────────────────────

export default function PropertiesPanelUI({ element, onChange, onDelete, onDuplicate }) {
  const p = element.props;

  return (
    <aside className="panel" onClick={stopBubble}>
      {/* Header */}
      <div className="panel-header">
        <span className="panel-title">Properties</span>
        <span className="panel-type-badge">{element.type}</span>
      </div>

      <div className="panel-body">
        {/* Actions */}
        <div className="panel-actions">
          <button className="panel-btn-secondary" onClick={() => onDuplicate(element.id)}>
            ⧉ Duplicate
          </button>
          <button className="panel-btn-danger" onClick={() => onDelete(element.id)}>
            ✕ Delete
          </button>
        </div>

        {/* Content */}
        <Section label="Content" />
        {hasProp(p, "label") && (
          <Field label="Label">
            <TextInput value={p.label} onChange={(v) => onChange("label", v)} />
          </Field>
        )}
        {hasProp(p, "placeholder") && (
          <Field label="Placeholder">
            <TextInput value={p.placeholder} onChange={(v) => onChange("placeholder", v)} />
          </Field>
        )}

        {/* Layout */}
        <Section label="Layout" />
        <TwoCol>
          <Field label="Width">
            <TextInput type="number" value={p.width} onChange={(v) => onChange("width", Number(v))} />
          </Field>
          <Field label="Height">
            <TextInput type="number" value={p.height} onChange={(v) => onChange("height", Number(v))} />
          </Field>
        </TwoCol>
        {hasProp(p, "borderRadius") && (
          <Field label="Border Radius">
            <TextInput type="number" value={p.borderRadius} onChange={(v) => onChange("borderRadius", Number(v))} />
          </Field>
        )}

        {/* Typography */}
        <Section label="Typography" />
        <TwoCol>
          <Field label="Font Size">
            <TextInput type="number" value={p.fontSize} onChange={(v) => onChange("fontSize", Number(v))} />
          </Field>
          {hasProp(p, "fontWeight") && (
            <Field label="Weight">
              <select
                value={p.fontWeight}
                className="panel-input"
                onChange={(e) => onChange("fontWeight", e.target.value)}
              >
                {FONT_WEIGHT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </Field>
          )}
        </TwoCol>

        {/* Color */}
        <Section label="Color" />
        {hasProp(p, "textColor") && (
          <Field label="Text Color">
            <ColorInput value={p.textColor} onChange={(v) => onChange("textColor", v)} />
          </Field>
        )}
        {hasProp(p, "bgColor") && (
          <Field label="Background">
            <ColorInput value={p.bgColor} onChange={(v) => onChange("bgColor", v)} />
          </Field>
        )}
        {hasProp(p, "borderColor") && (
          <Field label="Border Color">
            <ColorInput value={p.borderColor} onChange={(v) => onChange("borderColor", v)} />
          </Field>
        )}
      </div>
    </aside>
  );
}