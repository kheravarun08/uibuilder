// src/hooks/useElements.js
//
// All canvas state lives here: the elements array + selectedId.
// Components only call these actions — no raw setElements anywhere else.

import { useState } from "react";

let _id = 1;
const uid = () => _id++;

export default function useElements() {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const selected = elements.find((el) => el.id === selectedId) ?? null;

  // Drop a new element from the sidebar onto the canvas
  function addElement(template, canvasRect, clientX, clientY) {
    const { width, height } = template.defaultProps;
    const el = {
      id: uid(),
      type: template.type,
      x: Math.round(clientX - canvasRect.left - width / 2),
      y: Math.round(clientY - canvasRect.top - height / 2),
      props: { ...template.defaultProps },
    };
    setElements((prev) => [...prev, el]);
    setSelectedId(el.id);
  }

  // Move an element by dragging on the canvas
  function startMove(e, el) {
    const startX = e.clientX;
    const startY = e.clientY;
    const originX = el.x;
    const originY = el.y;

    function onMouseMove(mv) {
      setElements((prev) =>
        prev.map((item) =>
          item.id === el.id
            ? { ...item, x: originX + mv.clientX - startX, y: originY + mv.clientY - startY }
            : item
        )
      );
    }
    function onMouseUp() {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }

  // Update one prop on the selected element
  function updateProp(key, value) {
    setElements((prev) =>
      prev.map((el) =>
        el.id === selectedId
          ? { ...el, props: { ...el.props, [key]: value } }
          : el
      )
    );
  }

  function deleteElement(id) {
    setElements((prev) => prev.filter((el) => el.id !== id));
    setSelectedId(null);
  }

  function duplicateElement(id) {
    const el = elements.find((e) => e.id === id);
    if (!el) return;
    const copy = { ...el, id: uid(), x: el.x + 20, y: el.y + 20 };
    setElements((prev) => [...prev, copy]);
    setSelectedId(copy.id);
  }

  return {
    elements,
    selected,
    selectedId,
    setSelectedId,
    addElement,
    startMove,
    updateProp,
    deleteElement,
    duplicateElement,
  };
}
