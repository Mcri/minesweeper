import React, { useCallback, useContext } from "react";
import CellView from "../cell/cell.component";
import { MinesweeperContext } from "../../providers";
import { GameStatus } from "../../types";
import { showAllMines, showAndExpand, toggleFlag } from "../../helpers";
import { ActionType } from "../../state";

export default function Board() {
  const [{ board, status, cellsLeft, level, nFlags }, dispatch] = useContext(
    MinesweeperContext
  );

  const revealCell = useCallback(
    (row: number, col: number): void => {
      const cell = board[row][col];
      if (status === GameStatus.INPROGRESS && !cell.hasFlag) {
        if (cell.hasMine) {
          dispatch({
            type: ActionType.SET_GAME_OVER,
            payload: showAllMines(board),
          });
          return;
        }
        dispatch({
          type: ActionType.REVEAL_CELLS,
          payload: showAndExpand([col, row], board, cellsLeft),
        });
      }
    },
    [board, cellsLeft, dispatch, status]
  );

  const placeFlag = useCallback(
    (row: number, col: number) => {
      if (status === GameStatus.INPROGRESS && nFlags <= level.mines) {
        dispatch({
          type: ActionType.SET_FLAG,
          payload: toggleFlag([col, row], board, nFlags),
        });
      }
    },
    [board, dispatch, level.mines, nFlags, status]
  );

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
