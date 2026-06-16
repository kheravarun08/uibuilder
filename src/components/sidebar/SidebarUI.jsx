// SidebarUI.jsx — presentational layer only
// Renders the sidebar shell, item list, and tip card.
// No drag logic or icon definitions here — those come from useSidebar.js.

import "./Sidebar.css";
import ICONS from "./SidebarIcons";
import { createDragStartHandler } from "./useSidebar";
import elementTypes from "../../data/elementTypes";

// ── Single draggable item ──────────────────────────────────────
function SidebarItem({ el }) {
  return (
    <div
      draggable
      onDragStart={createDragStartHandler(el)}
      className="sidebar-item"
    >
      <div className="sidebar-icon-wrap">{ICONS[el.type]}</div>
      <span className="sidebar-item-label">{el.label}</span>
      <span className="sidebar-drag-dots">⠿</span>
    </div>
  );
}

// ── Tip card ───────────────────────────────────────────────────
function TipCard() {
  return (
    <div className="sidebar-tip">
      <span className="sidebar-tip-icon">💡</span>
      <span className="sidebar-tip-text">Drag any component onto the canvas</span>
    </div>
  );
}

// ── Main UI ────────────────────────────────────────────────────
export default function SidebarUI() {
  return (
    <aside className="sidebar">
      <p className="sidebar-section-label">Components</p>

      {elementTypes.map((el) => (
        <SidebarItem key={el.type} el={el} />
      ))}

      <TipCard />
    </aside>
  );
}