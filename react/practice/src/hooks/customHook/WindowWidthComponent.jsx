import React from "react";
import useWindowWidth from "./useWindowWidth";

function WindowWidthComponent() {
  const width = useWindowWidth();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Window Width Tracker</h2>
      <p>Your window width is: <strong>{width}px</strong></p>
    </div>
  );
}

export default WindowWidthComponent;