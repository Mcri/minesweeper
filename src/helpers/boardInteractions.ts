import { NEIGHBOURS } from "../constants";
import { Cell, Coords } from "../types";
import { checkLimits, setProximity } from "./boardSetup";

export function getCoordsFirstFreeCell(
  board: Cell[][]
): [x: number, y: number] {
  const rows = board.length;
  const cols = board[0].length;
  let x = 0;
  let y = 0;
  while (board[y][x].hasMine && y < rows) {
    if (x >= cols) {
      x = 0;
      y++;
    } else {
      x++;
    }
  }
  return [x, y];
}

export function replaceMine(
  [x, y]: Coords,
  board: Cell[][]
): { board: Cell[][] } {
  const updatedBoard = [...board];
  let [fx, fy] = getCoordsFirstFreeCell(updatedBoard);

  updatedBoard[y][x].hasMine = false;
  setProximity([x, y], updatedBoard, -1);
  updatedBoard[fy][fx].hasMine = true;
  setProximity([fx, fy], updatedBoard, +1);

  return { board: updatedBoard };
}

export function showAllMines(board: Cell[][]): { board: Cell[][] } {
  const updatedBoard = [...board];
  updatedBoard.forEach((row) =>
    row.forEach((cell) => {
      if (cell.hasMine) cell.isRevealed = true;
    })
  );
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
