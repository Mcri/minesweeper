import { Level } from "../types";

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

export type GameAction =
  | {
      type: ActionType.BUILD_BOARD;
    }
  | {
      type: ActionType.START_GAME;
    }
  | {
      type: ActionType.SET_VICTORY;
    }
  | {
      type: ActionType.SET_GAME_OVER;
    }
  | {
      type: ActionType.RESET_GAME;
    }
  | {
      type: ActionType.CHANGE_LEVEL;
      level: Level;
    }
  | {
      type: ActionType.REVEAL_CELLS;
      coords: [x: number, y: number];
    }
  | {
      type: ActionType.PLACE_FLAG;
      coords: [x: number, y: number];
    }
  | {
      type: ActionType.REPLACE_MINE;
      coords: [x: number, y: number];
    };
