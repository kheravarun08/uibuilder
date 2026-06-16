// PropertiesPanel.jsx — orchestrator
// Decides which UI to render (empty vs populated) and passes props down.
// No styles, no markup, no logic defined here.

import PropertiesPanelUI, { EmptyPanel } from "./PropertiesPanelUI";

export default function PropertiesPanel({ element, onChange, onDelete, onDuplicate }) {
  if (!element) {
    return <EmptyPanel />;
  }

  return (
    <PropertiesPanelUI
      element={element}
      onChange={onChange}
      onDelete={onDelete}
      onDuplicate={onDuplicate}
    />
  );
}