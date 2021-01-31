import React from "react";
import Board from "./components/board/baoard.component";
import { BoardModel } from "./models/BoardModel";

const board = new BoardModel(10, 10, 15);

function App() {
  return (
    <div className="App">
      <Board {...board} />
    </div>
  );
}

export default App;
