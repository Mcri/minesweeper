import React, { useState, useEffect } from "react";
import { BoardModel } from "../../models/BoardModel";
import { NEIGHBOURS, GameStatus, LEVELS } from "../../constants";
import Board from "../board/baoard.component";
import { GameTopbar } from "./topbar/topbar.component";
import { MessageBox } from "./messagebox/message.component";
import { Levels } from "./levels/levels.component";

export default function Minesweeper() {
  const [gameState, setGameState] = useState({
    level: LEVELS.EASY,
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
    if (gameState.status === GameStatus.INPROGRESS) {
      setCellLeft(
        gameState.level.rows * gameState.level.columns - gameState.level.mines
      );
      setNFlags(0);
    }
  }, [gameState]);

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
      } else if (nFlags < gameState.level.mines) {
        setNFlags((prev) => prev + 1);
        cell.toggleFlag();
      }
    }
  };

  const resetGame = (): void => {
    setGameState((prev) => ({
      ...prev,
      status: GameStatus.INPROGRESS,
      board: new BoardModel(
        prev.level.rows,
        prev.level.columns,
        prev.level.mines
      ),
    }));
  };

  const changeLevel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const value = (e.target as HTMLButtonElement).value;
    setGameState({
      level: LEVELS[value],
      status: GameStatus.INPROGRESS,
      board: new BoardModel(
        LEVELS[value].rows,
        LEVELS[value].columns,
        LEVELS[value].mines
      ),
    });
  };

  return (
    <main>
      <h1>Minesweeper</h1>
      <Levels changeLevel={changeLevel} />
      <GameTopbar nFlags={gameState.level.mines - nFlags} reset={resetGame} />
      <section style={{ position: "relative" }}>
        {gameState.status !== GameStatus.INPROGRESS && (
          <MessageBox reset={resetGame} state={gameState.status} />
        )}
        <Board
          {...gameState.board}
          showAndExpand={showAndExpand}
          toggleFlag={toggleFlag}
        />
      </section>
    </main>
  );
}
