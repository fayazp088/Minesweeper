import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ScoreBoard } from "./components/Scoreboard/ScoreBoard";

function App() {
  return (
    <div className="App">
      <Header
        name="MineSweeper"
        feature="Flag"
        firstAction="Ctrl"
        secondAction="Alt"
      />
      <ScoreBoard
        time="12:12"
        levels={["beginner", "Intermediate", "Expert"]}
        mines="1"
        onReset={() => null}
      />
    </div>
  );
}

export default App;
