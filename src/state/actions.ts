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

export interface RevealCellsAction {
  type: ActionType.REVEAL_CELLS;
  payload: {
    board: Cell[][];
    cellLeft: number;
  };
}

export interface SetFlagAction {
  type: ActionType.SET_FLAG;
  payload: {
    board: Cell[][];
    nFlags: number;
  };
}

export interface SetGameOverAction {
  type: ActionType.SET_GAME_OVER;
  payload: {
    board: Cell[][];
  };
}

export interface SetVictoryAction {
  type: ActionType.SET_VICTORY;
}

export interface ResetGameAction {
  type: ActionType.RESET_GAME;
}

export interface ChangeLevelAction {
  type: ActionType.CHANGE_LEVEL;
  payload: {
    level: Level;
  };
}

export interface BuildBoardAction {
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
