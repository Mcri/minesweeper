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
    columns: 20,
    mines: 50,
  },
};
