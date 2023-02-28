import React, { useState } from "react";
import "./styles.css";

function App() {
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);

  function updateTime() {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(updateTime, 1000);

  return (
    <div className="App">
      <h1>Display Current Day & time</h1>
      <h1>{date}</h1>
      <h2>{ctime}</h2>
    </div>
  );
}
export default App;
