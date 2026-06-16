// src/data/elementTypes.js
//
// Single source of truth for every draggable component.
// To add a new element: push one entry here.
// The canvas renderer (PlacedElement.jsx) also needs a matching case.

const elementTypes = [
  {
    type: "button",
    label: "Button",
    defaultProps: {
      label: "Click me",
      bgColor: "#6366F1",
      textColor: "#ffffff",
      fontSize: 14,
      fontWeight: "500",
      borderRadius: 8,
      width: 128,
      height: 42,
    },
  },
  {
    type: "text",
    label: "Text",
    defaultProps: {
      label: "Text block",
      textColor: "#111827",
      fontSize: 16,
      fontWeight: "400",
      width: 200,
      height: 36,
    },
  },
  {
    type: "input",
    label: "Input",
    defaultProps: {
      placeholder: "Enter text…",
      bgColor: "#ffffff",
      borderColor: "#D1D5DB",
      textColor: "#6B7280",
      fontSize: 14,
      borderRadius: 8,
      width: 220,
      height: 42,
    },
  },
  // ── Header Bar ────────────────────────────────────────────────
  {
    type: "headerBar",
    label: "Header Bar",
    defaultProps: {
      // Header-specific props
      title: "My App",
      logoText: "Logo",
      navLinks: "Home, About, Contact",
      ctaLabel: "Sign Up",
      showLogo: true,
      showNavLinks: true,
      showCta: true,
      // Standard props (auto-wired into PropertiesPanel via hasProp)
      bgColor: "#1a1a2e",
      textColor: "#ffffff",
      fontSize: 14,
      fontWeight: "500",
      borderRadius: 0,
      width: 800,
      height: 60,
    },
  },
];

export default elementTypes;
