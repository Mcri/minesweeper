import React, { useEffect, useContext } from "react";
import Board from "../board/baoard.component";
import { GameTopbar } from "./topbar/topbar.component";
import { MessageBox } from "./messagebox/message.component";
import { GameStatus } from "../../types";
import { MinesweeperContext } from "../../providers/minesweeper.provider";
import { ActionType } from "../../state/actions";
import { Levels } from "./levels/levels.component";
import { LEVELS } from "../../constants";

export default function Minesweeper() {
  const [{ status, cellLeft, nFlags, level }, dispatch] = useContext(
    MinesweeperContext
  );

  useEffect(() => {
    dispatch({ type: ActionType.BUILD_BOARD });
  }, [dispatch]);

  useEffect(() => {
    if (cellLeft === 0) dispatch({ type: ActionType.SET_VICTORY });
  }, [dispatch, cellLeft]);

  const resetGame = (): void => {
    dispatch({ type: ActionType.RESET_GAME });
  };

  const changeLevel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const value = (e.target as HTMLButtonElement).value;
    dispatch({
      type: ActionType.CHANGE_LEVEL,
      payload: { level: LEVELS[value] },
    });
  };

  return (
    <main>
      <h1>Minesweeper</h1>
      <Levels changeLevel={changeLevel} active={level.difficulty} />
      <GameTopbar nFlags={nFlags} reset={resetGame} />
      <section style={{ position: "relative" }}>
        {status !== GameStatus.INPROGRESS && (
          <MessageBox reset={resetGame} state={status} />
        )}
        <Board />
      </section>
    </main>
  );
}
