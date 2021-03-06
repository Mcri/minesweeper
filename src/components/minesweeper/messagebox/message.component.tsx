import React from "react";
import { GameStatus } from "../../../types";
import { StyledMessageContainer } from "./message.style";

type MessageBoxProps = {
  state: GameStatus;
  reset: () => void;
};

export function MessageBox({ state, reset }: MessageBoxProps) {
  const message = (() => {
    if (state === GameStatus.GAME_OVER) return "GAME OVER";
    if (state === GameStatus.VICTORY) return "VICTORY";
  })();
  return (
    <StyledMessageContainer>
      <h2>{message}</h2>
      <button onClick={reset}>Play again</button>
    </StyledMessageContainer>
  );
}
