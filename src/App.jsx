// src/App.jsx

import useElements from "./hooks/useElements";
import TopNav from "./components/topnav/TopNav";
import Sidebar from "./components/sidebar/Sidebar";
import Canvas from "./components/canvas/Canvas";
import PropertiesPanel from "./components/propertiespanel/PropertiesPanel";

export default function App() {
  const {
    elements, selected, selectedId,
    setSelectedId, addElement, startMove,
    updateProp, deleteElement, duplicateElement,
  } = useElements();

  function handleDrop(e, canvasRect) {
    const raw = e.dataTransfer.getData("element");
    if (!raw) return;
    addElement(JSON.parse(raw), canvasRect, e.clientX, e.clientY);
  }

  return (
    <div style={styles.root}>
      <TopNav elementCount={elements.length} />
      <div style={styles.body}>
        <Sidebar />
        <Canvas
          elements={elements}
          selectedId={selectedId}
          onDrop={handleDrop}
          onSelect={setSelectedId}
          onMove={startMove}
        />
        <PropertiesPanel
          element={selected}
          onChange={updateProp}
          onDelete={deleteElement}
          onDuplicate={duplicateElement}
        />
      </div>
    </div>
  );
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    overflow: "hidden",
    background: "#0F1117",
  },
  body: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
  },
};