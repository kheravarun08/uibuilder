// useCanvas.js — business logic hook for Canvas
// Owns all state and event handlers. No JSX, no styles here.

import { useRef, useState } from "react";

export default function useCanvas({ onDrop, onSelect, onMove }) {
  const canvasRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation(); // prevents drop from also firing onClick → onSelect(null)
    setIsDragOver(false);
    if (canvasRef.current) {
      onDrop(e, canvasRef.current.getBoundingClientRect());
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
    setIsDragOver(true);
  }

  function handleDragLeave() {
    setIsDragOver(false);
  }

  function handleCanvasClick() {
    onSelect(null);
  }

  function handleElementMouseDown(e, el) {
    e.stopPropagation();
    onSelect(el.id);
    onMove(e, el);
  }

  return {
    canvasRef,
    isDragOver,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleCanvasClick,
    handleElementMouseDown,
  };
}