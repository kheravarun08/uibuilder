// TopNavUI.jsx — presentational layer only
// Receives all data as props. No logic or state here.

import "./TopNav.css";

export default function TopNavUI({ elementCount }) {
  return (
    <header className="topnav">
      <div className="topnav-divider" />
      <span className="topnav-filename">Design Screen</span>
      <div className="topnav-spacer" />
      <span className="topnav-count">
        {elementCount} element{elementCount !== 1 ? "s" : ""}
      </span>
    </header>
  );
}