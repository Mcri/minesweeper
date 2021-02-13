export type Coords = [x: number, y: number];

export enum GameStatus {
  TO_START,
  IN_PROGRESS,
  GAME_OVER,
  VICTORY,
}

export type Level = Readonly<{
  difficulty: string;
  rows: number;
  columns: number;
  mines: number;
}>;

export type Cell = {
  x: number;
  y: number;
  hasMine: boolean;
  isRevealed: boolean;
  hasFlag: boolean;
  proximity: number;
};

export type GameState = Readonly<{
  level: Level;
  status: GameStatus;
  board: Cell[][];
  nFlags: number;
  cellsLeft: number;
}>;
