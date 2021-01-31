import React, { useState } from "react";
import { BoardModel } from "../../models/BoardModel";
import { GameStatus, LEVELS } from "./minesweeper.utils";
import { NEIGHBOURS } from "../../utils/utils";
import Board from "../board/baoard.component";

export default function Minesweeper() {
  const [gameState, setGameState] = useState({
    difficulty: LEVELS.EASY,
    status: GameStatus.INPROGRESS,
    board: new BoardModel(
      LEVELS.EASY.rows,
      LEVELS.EASY.columns,
      LEVELS.EASY.mines
    ),
  });
  const [cellLeft, setCellLeft] = useState(
    gameState.difficulty.rows * gameState.difficulty.columns -
      gameState.difficulty.mines
  );

  const [nFlags, setNFlags] = useState(0);

  const showAndExpand = (row: number, col: number): void => {
    const cell = gameState.board.field[row][col];
    if (cell.isRevealed || cell.hasFlag) return;
    if (cell.hasMine) {
      gameState.board.showAllMines();
      setGameState((prev) => ({ ...prev, status: GameStatus.GAMEOVER }));
      return;
    }

    cell.reveal();
    setCellLeft((prev) => prev - 1);
    if (cell.proximity > 0) return;

    for (let [c, r] of NEIGHBOURS) {
      c += col;
      r += row;
      if (gameState.board.checkLimits(r, c)) showAndExpand(r, c);
    }
  };

  const toggleFlag = (row: number, col: number) => {
    if (gameState.status === GameStatus.INPROGRESS) {
      let cell = gameState.board.field[row][col];
      if (cell.hasFlag) {
        setNFlags((prev) => prev - 1);
        cell.toggleFlag();
      } else if (nFlags < gameState.difficulty.mines) {
        setNFlags((prev) => prev + 1);
        cell.toggleFlag();
      }
    }
  };

  return (
    <div>
      <Board
        {...gameState.board}
        showAndExpand={showAndExpand}
        toggleFlag={toggleFlag}
      />
    </div>
  );
}
