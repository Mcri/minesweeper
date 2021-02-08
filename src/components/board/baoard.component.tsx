import React, { useCallback, useContext } from "react";
import CellView from "../cell/cell.component";
import { MinesweeperContext } from "../../providers/minesweeper.provider";
import { GameStatus } from "../../types";
import { showAllMines, showAndExpand, toggleFlag } from "../../helpers";
import { ActionType } from "../../state/actions";

export default function Board() {
  const [{ board, status, cellLeft, level, nFlags }, dispatch] = useContext(
    MinesweeperContext
  );

  const revealCell = useCallback(
    (row: number, col: number): void => {
      if (status === GameStatus.INPROGRESS) {
        const cell = board[row][col];
        if (cell.hasMine) {
          dispatch({
            type: ActionType.SET_GAME_OVER,
            payload: { board: showAllMines(board) },
          });
          return;
        }
        dispatch({
          type: ActionType.REVEAL_CELLS,
          payload: showAndExpand([col, row], board, cellLeft),
        });
      }
    },
    [board, cellLeft, dispatch, status]
  );

  const placeFlag = useCallback(
    (row: number, col: number) => {
      if (status === GameStatus.INPROGRESS && nFlags <= level.mines) {
        dispatch({
          type: ActionType.SET_FLAG,
          payload: toggleFlag([col, row], board, nFlags, level.mines),
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
