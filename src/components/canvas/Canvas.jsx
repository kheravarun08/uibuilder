// Canvas.jsx — orchestrator
// Connects useCanvas (logic) → CanvasUI (presentation).
// No styles, no event handler code, no JSX markup lives here.

import useCanvas from "./useCanvas";
import CanvasUI from "./CanvasUI";

export default function Canvas({ elements, selectedId, onDrop, onSelect, onMove }) {
  const {
    canvasRef,
    isDragOver,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleCanvasClick,
    handleElementMouseDown,
  } = useCanvas({ onDrop, onSelect, onMove });

  return (
    <CanvasUI
      canvasRef={canvasRef}
      isDragOver={isDragOver}
      elements={elements}
      selectedId={selectedId}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={handleCanvasClick}
      onElementMouseDown={handleElementMouseDown}
    />
  );
}