import React, { useState } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState("Time");

  function getTime() {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
    setInterval(getTime, 1000);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
