import { Coords, GameState, GameStatus, Level } from "../types";

export const NEIGHBOURS: Coords[] = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
];

export const LEVELS: { [key: string]: Level } = {
  EASY: {
    difficulty: "EASY",
    rows: 10,
    columns: 10,
    mines: 15,
  },
  MEDIUM: {
    difficulty: "MEDIUM",
    rows: 15,
    columns: 15,
    mines: 35,
  },
  HARD: {
    difficulty: "HARD",
    rows: 15,
    columns: 15,
    mines: 50,
  },
};

export const INITIAL_GAME_STATE: GameState = {
  level: LEVELS.EASY,
  status: GameStatus.INPROGRESS,
  board: [],
  nFlags: LEVELS.EASY.mines,
  cellsLeft: LEVELS.EASY.rows * LEVELS.EASY.columns - LEVELS.EASY.mines,
};

export const COLORS = [
  "rgb(45, 47, 163)",
  "rgb(57, 128, 25)",
  "rgb(211, 76, 22)",
  "rgb(204, 19, 19)",
  "rgb(156, 6, 56)",
];

export const CAMP_COLORS = {
  LIGHTGREEN: "rgb(170, 219, 124)",
  DARKGREEN: "rgb(133, 201, 130)",
  LIGHTBROWN: "rgb(180, 156, 125)",
  DARKBROWN: "rgb(156, 138, 115)",
};
