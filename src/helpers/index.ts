import { NEIGHBOURS } from "../constants";
import { Cell, Coords } from "../types";

let minesCoordinates: Coords[] = [];

function getRandomCoordinate(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function checkLimits(
  coords: Coords,
  rows: number,
  columns: number
): boolean {
  const [col, row] = coords;
  return row >= 0 && row <= rows - 1 && col >= 0 && col <= columns - 1;
}

function defineMineProximity(
  board: Cell[][],
  rows: number,
  columns: number
): void {
  for (let [x, y] of minesCoordinates) {
    for (let [c, r] of NEIGHBOURS) {
      const row = y + r;
      const col = x + c;

      if (checkLimits([col, row], rows, columns) && !board[row][col].hasMine) {
        board[row][col].proximity++;
      }
    }
  }
}

function placeMines(
  nMines: number,
  rows: number,
  columns: number,
  board: Cell[][]
): void {
  let counter = 0;

  while (counter < nMines) {
    let [x, y]: Coords = [
      getRandomCoordinate(0, columns - 1),
      getRandomCoordinate(0, rows - 1),
    ];

    let cell = board[y][x];
    if (!cell.hasMine) {
      cell.hasMine = true;
      counter++;
      minesCoordinates.push([x, y]);
    }
  }
  defineMineProximity(board, rows, columns);
}

export function buildBoard(
  nMines: number,
  rows: number,
  columns: number
): Cell[][] {
  minesCoordinates = [];
  const board: Cell[][] = [];
  for (let y = 0; y < rows; y++) {
    board.push([]);
    for (let x = 0; x < columns; x++)
      board[y].push({
        x,
        y,
        hasMine: false,
        hasFlag: false,
        isRevealed: false,
        proximity: 0,
      });
  }
  placeMines(nMines, rows, columns, board);
  return board;
}

export function showAllMines(board: Cell[][]): Cell[][] {
  const updatedBoard = [...board];
  for (let [x, y] of minesCoordinates) {
    updatedBoard[y][x].isRevealed = true;
  }
  return updatedBoard;
}

export function toggleFlag(
  [x, y]: Coords,
  board: Cell[][],
  nFlags: number,
  nMines: number
) {
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
  cellLeft: number
): { board: Cell[][]; cellLeft: number } {
  const rows = board.length;
  const cols = board[0].length;
  const updatedBoard = [...board];
  const revealCell = (x: number, y: number) => {
    const cell = updatedBoard[y][x];
    if (cell.isRevealed || cell.hasFlag) return;
    cell.isRevealed = true;
    cellLeft--;
    if (cell.proximity > 0) return;

    for (let [c, r] of NEIGHBOURS) {
      c += x;
      r += y;
      if (checkLimits([c, r], rows, cols)) revealCell(c, r);
    }
  };
  revealCell(x, y);

  return { board: updatedBoard, cellLeft };
}
