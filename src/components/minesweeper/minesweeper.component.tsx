import React, { useState, useEffect } from "react";
import { BoardModel } from "../../models/BoardModel";
import { GameStatus, LEVELS } from "./minesweeper.utils";
import { NEIGHBOURS } from "../../utils/utils";
import Board from "../board/baoard.component";
import { StyledMessageContainer } from "./message.style";

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
    LEVELS.EASY.rows * LEVELS.EASY.columns - LEVELS.EASY.mines
  );
  const [nFlags, setNFlags] = useState(0);

  useEffect(() => {
    if (cellLeft === 0)
      setGameState((prev) => ({ ...prev, status: GameStatus.VICTORY }));
  }, [cellLeft]);

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

  const resetGame = () => {
    setGameState((prev) => ({
      ...prev,
      status: GameStatus.INPROGRESS,
      board: new BoardModel(
        prev.difficulty.rows,
        prev.difficulty.columns,
        prev.difficulty.mines
      ),
    }));
    setCellLeft(
      gameState.difficulty.rows * gameState.difficulty.columns -
        gameState.difficulty.mines
    );
    setNFlags(0);
  };

  return (
    <div style={{ position: "relative" }}>
      {gameState.status === GameStatus.VICTORY && (
        <StyledMessageContainer>
          <h2>VICTORY</h2>
          <button onClick={resetGame}>play again</button>
        </StyledMessageContainer>
      )}
      {gameState.status === GameStatus.GAMEOVER && (
        <StyledMessageContainer>
          <h2>GAMEOVER</h2>
          <button onClick={resetGame}>try again</button>
        </StyledMessageContainer>
      )}
      <Board
        {...gameState.board}
        showAndExpand={showAndExpand}
        toggleFlag={toggleFlag}
      />
    </div>
  );
}
