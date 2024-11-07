import React from "react";
import {GameStatus} from "../../../types";
import {StyledMessageContainer} from "./message.style";

type MessageBoxProps = {
  state: GameStatus;
  reset: () => void;
};

export function MessageBox({ state, reset }: MessageBoxProps) {
  const message: {[key: string]: string} = {
    [GameStatus.GAME_OVER] : "GAME OVER",
    [GameStatus.VICTORY] : "VICTORY"
  };
  return (
    <StyledMessageContainer>
      <h2 className={state === GameStatus.GAME_OVER ? 'gameover' : undefined}>{message[state]}</h2>
      <button onClick={reset}>Play again</button>
    </StyledMessageContainer>
  );
}
