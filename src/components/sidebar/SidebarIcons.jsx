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
};

export default ICONS;