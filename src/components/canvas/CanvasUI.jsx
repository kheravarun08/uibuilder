// CanvasUI.jsx — presentational layer only
// Receives everything as props. No useState, no event logic here.

import "./Canvas.css";
import PlacedElement from "../placedelement/PlacedElement";

export function DotGrid() {
  return <div className="canvas-grid" />;
}

export function EmptyState() {
  return (
    <div className="canvas-empty-state">
      <div className="canvas-empty-icon">＋</div>
      <p className="canvas-empty-title">Start building</p>
      <p className="canvas-empty-subtitle">Drag a component from the left panel</p>
    </div>
  );
}

export default function CanvasUI({
  canvasRef,
  isDragOver,
  elements,
  selectedId,
  onDrop,
  onDragOver,
  onDragLeave,
  onClick,
  onElementMouseDown,
}) {
  return (
    <div className="canvas-workspace">
      <p className="canvas-label">Canvas</p>

      <div
        ref={canvasRef}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onClick={onClick}
        className={`canvas-sheet${isDragOver ? " drag-over" : ""}`}
      >
        <DotGrid />

        {elements.length === 0 && <EmptyState />}

        {elements.map((el) => (
          <PlacedElement
            key={el.id}
            el={el}
            isSelected={el.id === selectedId}
            onMouseDown={(e) => onElementMouseDown(e, el)}
          />
        ))}
      </div>
    </div>
  );
}