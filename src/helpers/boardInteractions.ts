import { NEIGHBOURS } from "../constants";
import { Cell, Coords } from "../types";
import { checkLimits, minesCoordinates } from "./boardSetup";

export function showAllMines(board: Cell[][]): { board: Cell[][] } {
  const updatedBoard = [...board];
  for (let [x, y] of minesCoordinates) {
    updatedBoard[y][x].isRevealed = true;
  }
  return { board: updatedBoard };
}

export function toggleFlag([x, y]: Coords, board: Cell[][], nFlags: number) {
  const updatedBoard = [...board];
  const cell = updatedBoard[y][x];
  if (cell.hasFlag) {
    nFlags++;
    cell.hasFlag = false;
  } else if (nFlags > 0) {
    nFlags--;
    cell.hasFlag = true;
  }
  return { board: updatedBoard, nFlags };
}

export function showAndExpand(
  [x, y]: Coords,
  board: Cell[][],
  cellsLeft: number
): { board: Cell[][]; cellsLeft: number } {
  const rows = board.length;
  const cols = board[0].length;
  const updatedBoard = [...board];

  const revealCell = (x: number, y: number) => {
    const cell = updatedBoard[y][x];
    if (cell.isRevealed || cell.hasFlag) return;
    cell.isRevealed = true;
    cellsLeft--;
    if (cell.proximity > 0) return;

    for (let [c, r] of NEIGHBOURS) {
      c += x;
      r += y;
      if (checkLimits([c, r], rows, cols)) revealCell(c, r);
    }
  };
  revealCell(x, y);

  return { board: updatedBoard, cellsLeft };
}
