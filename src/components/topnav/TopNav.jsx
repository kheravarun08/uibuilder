// TopNav.jsx — orchestrator
// Wires props from App into TopNavUI.
// Add any future logic here (e.g. export handler, rename handler).

import TopNavUI from "./TopNavUI";

export default function TopNav({ elementCount }) {
  return <TopNavUI elementCount={elementCount} />;
}