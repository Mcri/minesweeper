import { BASE_CELL, NEIGHBOURS } from "../constants";
import { Cell, Coords } from "../types";

let minesCoordinates: Coords[] = [];

function getRandomCoordinate(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function checkLimits(
  [col, row]: Coords,
  rows: number,
  columns: number
): boolean {
  return row >= 0 && row <= rows - 1 && col >= 0 && col <= columns - 1;
}

export function setProximity([x, y]: Coords, board: Cell[][], toAdd: number) {
  const rows = board.length;
  const columns = board[0].length;

  for (let [c, r] of NEIGHBOURS) {
    const row = y + r;
    const col = x + c;
    if (checkLimits([col, row], rows, columns)) {
      let cell = board[row][col];
      cell.proximity = cell.proximity + toAdd;
    }
  }
}

export function defineMineProximity(board: Cell[][]): void {
  for (let coords of minesCoordinates) {
    setProximity(coords, board, +1);
  }
}

function placeMines(nMines: number, board: Cell[][]): void {
  const rows = board.length;
  const columns = board[0].length;
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
}

function buildMatrix<T extends { x: number; y: number }>(
  rows: number,
  columns: number,
  content: T
): T[][] {
  const board: T[][] = [];
  for (let y = 0; y < rows; y++) {
    board.push([]);
    for (let x = 0; x < columns; x++) board[y].push({ ...content, x, y });
  }
  return board;
}

export function buildBoard(
  nMines: number,
  rows: number,
  columns: number
): Cell[][] {
  minesCoordinates = [];
  const board: Cell[][] = buildMatrix(rows, columns, BASE_CELL);
  placeMines(nMines, board);
  defineMineProximity(board);
  return board;
}
