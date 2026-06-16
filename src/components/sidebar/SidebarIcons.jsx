// SidebarIcons.jsx — SVG icons for each element type
// Kept in a .jsx file since icons are JSX, not plain JS logic.
// To add a new element: add a matching key here.

const ICONS = {
  button: (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="0.5" y="3.5" width="14" height="8" rx="2.5" stroke="#818CF8" strokeWidth="1.2" fill="#312E81" fillOpacity="0.4" />
      <line x1="4" y1="7.5" x2="11" y2="7.5" stroke="#818CF8" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  text: (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M2 3h11M7.5 3v9M5 12h5" stroke="#818CF8" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  input: (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="0.5" y="3.5" width="14" height="8" rx="2" stroke="#818CF8" strokeWidth="1.2" fill="#312E81" fillOpacity="0.4" />
      <line x1="3" y1="7.5" x2="4.5" y2="7.5" stroke="#818CF8" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  badge: (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="0.5" y="4.5" width="14" height="6" rx="3" stroke="#818CF8" strokeWidth="1.2" fill="#312E81" fillOpacity="0.4" />
      <circle cx="7.5" cy="7.5" r="1.2" fill="#818CF8" />
    </svg>
  ),
  checkbox: (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="0.5" y="0.5" width="14" height="14" rx="3" stroke="#818CF8" strokeWidth="1.2" fill="#312E81" fillOpacity="0.4" />
      <path d="M4 7.5l2.5 2.5 5-5" stroke="#818CF8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // ── Header Bar ────────────────────────────────────────────────
  headerBar: (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      {/* Full-width bar */}
      <rect x="0.5" y="2.5" width="14" height="5" rx="1.5" stroke="#818CF8" strokeWidth="1.2" fill="#312E81" fillOpacity="0.4" />
      {/* Logo pill on the left */}
      <rect x="2" y="4" width="3" height="2" rx="0.8" fill="#818CF8" fillOpacity="0.8" />
      {/* Nav dots in the centre */}
      <circle cx="7.5" cy="5" r="0.7" fill="#818CF8" fillOpacity="0.6" />
      <circle cx="9.5" cy="5" r="0.7" fill="#818CF8" fillOpacity="0.6" />
      {/* CTA pill on the right */}
      <rect x="11" y="4" width="2.5" height="2" rx="0.8" fill="#818CF8" />
      {/* Content lines below to suggest a page */}
      <line x1="1" y1="10" x2="14" y2="10" stroke="#818CF8" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.3" />
      <line x1="1" y1="12.5" x2="10" y2="12.5" stroke="#818CF8" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.2" />
    </svg>
  ),
};

export default ICONS;