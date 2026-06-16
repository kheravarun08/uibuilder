// useSidebar.js — pure JS logic for Sidebar
// No JSX here. Icons live in SidebarIcons.jsx.

// Returns an onDragStart handler for a given element definition
export function createDragStartHandler(el) {
  return function onDragStart(e) {
    e.dataTransfer.setData(
      "element",
      JSON.stringify({ type: el.type, defaultProps: el.defaultProps })
    );
    e.dataTransfer.effectAllowed = "copy";
  };
}