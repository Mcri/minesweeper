import { Cell, Level } from "../types";

export enum ActionType {
  BUILD_BOARD,
  RESET_GAME,
  SET_GAME_OVER,
  SET_VICTORY,
  SET_FLAG,
  REVEAL_CELLS,
  CHANGE_LEVEL,
}

interface RevealCellsAction {
  type: ActionType.REVEAL_CELLS;
  payload: {
    board: Cell[][];
    cellsLeft: number;
  };
}

interface SetFlagAction {
  type: ActionType.SET_FLAG;
  payload: {
    board: Cell[][];
    nFlags: number;
  };
}

interface SetGameOverAction {
  type: ActionType.SET_GAME_OVER;
  payload: {
    board: Cell[][];
  };
}

interface SetVictoryAction {
  type: ActionType.SET_VICTORY;
}

interface ResetGameAction {
  type: ActionType.RESET_GAME;
}

interface ChangeLevelAction {
  type: ActionType.CHANGE_LEVEL;
  payload: {
    level: Level;
  };
}

interface BuildBoardAction {
  type: ActionType.BUILD_BOARD;
}

export type GameAction =
  | RevealCellsAction
  | SetFlagAction
  | SetVictoryAction
  | SetGameOverAction
  | ResetGameAction
  | ChangeLevelAction
  | BuildBoardAction;
