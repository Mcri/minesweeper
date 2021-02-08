import React, { createContext, ReactNode, useReducer } from "react";
import { INITIAL_GAME_STATE } from "../constants";
import { GameAction } from "../state/actions";
import { GameState } from "../types";

export const MinesweeperContext = createContext<
  [GameState, React.Dispatch<GameAction>]
>([INITIAL_GAME_STATE, () => null]);

export type Props = {
  children: ReactNode;
  initialState: GameState;
  reducer: (state: GameState, action: GameAction) => GameState;
};

export const MinesweeperProvider = ({
  children,
  reducer,
  initialState,
}: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MinesweeperContext.Provider value={[state, dispatch]}>
      {children}
    </MinesweeperContext.Provider>
  );
};
