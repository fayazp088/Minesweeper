import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header
        name="MineSweeper"
        feature="Flag"
        firstAction="Ctrl"
        secondAction="Alt"
      />
    </div>
  );
}

export default App;
