import React from "react";
import { CellModel } from "./models/CellModel";
import Cell from "./components/cell/cell.component";

const cell = new CellModel(0, 0);
const cell2 = new CellModel(0, 2, false, true);

function App() {
  return (
    <div className="App">
      <Cell {...cell}/>
      <Cell {...cell2}/>
    </div>
  );
}

export default App;
