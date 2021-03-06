import React, { useContext } from "react";
import CellView from "../cell/cell.component";
import { MinesweeperContext } from "../../providers";
import { GameStatus } from "../../types";
import { ActionType } from "../../state";

export default function Board() {
  const [{ board, status, level, nFlags }, dispatch] = useContext(
    MinesweeperContext
  );

  const revealCell = (row: number, col: number): void => {
    const cell = board[row][col];
    if (cell.hasFlag || status > GameStatus.IN_PROGRESS) return;
    if (status === GameStatus.TO_START) {
      dispatch({ type: ActionType.START_GAME });
      if (cell.hasMine)
        dispatch({
          type: ActionType.REPLACE_MINE,
          coords: [col, row],
        });
    } else {
      if (cell.hasMine) {
        dispatch({ type: ActionType.SET_GAME_OVER });
        return;
      }
    }
    dispatch({
      type: ActionType.REVEAL_CELLS,
      coords: [col, row],
    });
  };

  const placeFlag = (row: number, col: number) => {
    if (status === GameStatus.IN_PROGRESS && nFlags <= level.mines) {
      dispatch({
        type: ActionType.PLACE_FLAG,
        coords: [col, row],
      });
    }
  };

  return (
    <div>
      {board.map((row, y) => (
        <div key={`row-${y}`} style={{ display: "flex" }}>
          {row.map((cell, x) => (
            <CellView
              key={`col-${x}`}
              {...cell}
              onLeftClick={revealCell}
              onRightClick={placeFlag}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
