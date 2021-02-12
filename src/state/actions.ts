import { Cell, Level } from "../types";

export enum ActionType {
  BUILD_BOARD,
  START_GAME,
  SET_VICTORY,
  SET_GAME_OVER,
  RESET_GAME,
  CHANGE_LEVEL,
  PLACE_FLAG,
  REVEAL_CELLS,
  REPLACE_MINE,
}

interface BuildBoardAction {
  type: ActionType.BUILD_BOARD;
}

interface StartGameAction {
  type: ActionType.START_GAME;
}

interface SetVictoryAction {
  type: ActionType.SET_VICTORY;
}

interface SetGameOverAction {
  type: ActionType.SET_GAME_OVER;
  payload: {
    board: Cell[][];
  };
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

interface RevealCellsAction {
  type: ActionType.REVEAL_CELLS;
  payload: {
    board: Cell[][];
    cellsLeft: number;
  };
}

interface SetFlagAction {
  type: ActionType.PLACE_FLAG;
  payload: {
    board: Cell[][];
    nFlags: number;
  };
}

interface ReplaceMineAction {
  type: ActionType.REPLACE_MINE;
  payload: {
    board: Cell[][];
  };
}

export type GameAction =
  | BuildBoardAction
  | StartGameAction
  | SetVictoryAction
  | SetGameOverAction
  | ResetGameAction
  | ChangeLevelAction
  | RevealCellsAction
  | SetFlagAction
  | ReplaceMineAction;
