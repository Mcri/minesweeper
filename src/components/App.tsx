import React from "react";
import Minesweeper from "./minesweeper/minesweeper.component";
import { MinesweeperProvider } from "../providers";
import { reducer } from "../state";
import { INITIAL_GAME_STATE } from "../constants";

function App() {
  return (
    <div className="App">
      <MinesweeperProvider initialState={INITIAL_GAME_STATE} reducer={reducer}>
        <Minesweeper />
      </MinesweeperProvider>
    </div>
  );
}

export default App;
