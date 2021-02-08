export type Coords = [x: number, y: number];

export enum GameStatus {
  INPROGRESS,
  GAMEOVER,
  VICTORY,
}

export type Level = {
  difficulty: string;
  rows: number;
  columns: number;
  mines: number;
};

export type Cell = {
  x: number;
  y: number;
  hasMine: boolean;
  isRevealed: boolean;
  hasFlag: boolean;
  proximity: number;
};

export type GameState = {
  level: Level;
  status: GameStatus;
  board: Cell[][];
  nFlags: number;
  cellLeft: number;
};
