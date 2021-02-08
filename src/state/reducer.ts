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
    case ActionType.REVEAL_CELLS:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.SET_FLAG:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.SET_GAME_OVER:
      return {
        ...state,
        status: GameStatus.GAMEOVER,
        ...action.payload,
      };
    case ActionType.SET_VICTORY:
      return {
        ...state,
        status: GameStatus.VICTORY,
      };
    case ActionType.RESET_GAME:
      return {
        ...state,
        status: GameStatus.INPROGRESS,
        board: buildBoard(
          state.level.mines,
          state.level.rows,
          state.level.columns
        ),
        cellLeft: state.level.columns * state.level.rows - state.level.mines,
        nFlags: state.level.mines,
      };
    case ActionType.CHANGE_LEVEL:
      const { level } = action.payload;
      return {
        ...state,
        level: level,
        board: buildBoard(level.mines, level.rows, level.columns),
        cellLeft: level.columns * level.rows - level.mines,
        nFlags: level.mines,
      };
    default:
      return state;
  }
};
