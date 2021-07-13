import React, { useState } from "react";

function App() {
  const [headingTest, setHeadingTest] = useState("Hello!");
  const [color, setColor] = useState({ backgroundColor: "#fff" });
  function handleClick() {
    setHeadingTest("Submitted.");
  }

  function handleMouseOver() {
    // ------  VANILLA STYLE  ------
    // document.querySelector("button").style.backgroundColor = "#000";

    // ------  REACT STYLE  ------
    setColor({ backgroundColor: "#000" });
  }
  function handleMouseOut() {
    // ------  VANILLA STYLE  ------
    // document.querySelector("button").style.backgroundColor = "#fff";

    // ------  REACT STYLE  ------
    setColor({ backgroundColor: "#fff" });
  }

  return (
    <div className="container">
      <h1>{headingTest}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={color}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
