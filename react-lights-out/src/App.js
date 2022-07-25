import React, {useState} from "react";
import Board from "./Board";
import "./App.css";
  

/** Simple app that just shows the LightsOut game. */
function refreshPage() {
  window.location.reload(false);
}

function App() {
  return (
    <div className="App">
      <h1>Lights Out Game!</h1>
      <h2 id="clicks"></h2>
      <Board  />
      <button className="Refresh-Btn" onClick={refreshPage}>Restart Game</button>
    </div>
  );
}

export default App;