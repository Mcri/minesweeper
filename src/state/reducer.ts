import { GameState, GameStatus } from "../types";
import { GameAction, ActionType } from "./actions";
import { buildBoard } from "../helpers";

export const reducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case ActionType.BUILD_BOARD:
      return {
        ...state,
        board: buildBoard(
          state.level.mines,
          state.level.rows,
          state.level.columns
        ),
      };
    case ActionType.START_GAME:
      return {
        ...state,
        status: GameStatus.IN_PROGRESS,
      };
    case ActionType.SET_VICTORY:
      return {
        ...state,
        status: GameStatus.VICTORY,
      };
    case ActionType.SET_GAME_OVER:
      return {
        ...state,
        status: GameStatus.GAME_OVER,
        ...action.payload,
      };
    case ActionType.REVEAL_CELLS:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.PLACE_FLAG:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.REPLACE_MINE:
      console.log("REPLACE MINE ON FIRST CLICK");
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.RESET_GAME:
      return {
        ...state,
        status: GameStatus.TO_START,
        board: buildBoard(
          state.level.mines,
          state.level.rows,
          state.level.columns
        ),
        cellsLeft: state.level.columns * state.level.rows - state.level.mines,
        nFlags: state.level.mines,
      };
    case ActionType.CHANGE_LEVEL:
      const { level } = action.payload;
      return {
        level,
        status: GameStatus.TO_START,
        board: buildBoard(level.mines, level.rows, level.columns),
        cellsLeft: level.columns * level.rows - level.mines,
        nFlags: level.mines,
      };
    default:
      return state;
  }
};
