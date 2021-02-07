export type Coords = [x: number, y: number];

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

export enum GameStatus {
  INPROGRESS,
  GAMEOVER,
  VICTORY,
}

type Level = {
  difficulty: string;
  rows: number;
  columns: number;
  mines: number;
};

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

export const COLORS = [
  "#2d2fa3",
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

export const getCampColorsPair = (isRevealed: boolean): string[] => {
  return isRevealed
    ? [CAMP_COLORS.LIGHTBROWN, CAMP_COLORS.DARKBROWN]
    : [CAMP_COLORS.LIGHTGREEN, CAMP_COLORS.DARKGREEN];
};
