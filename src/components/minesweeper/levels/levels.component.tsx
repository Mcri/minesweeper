import React from "react";
import { StyledLevelsBar } from "./levels.style";

type LevelsProps = {
  changeLevel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export function Levels({ changeLevel }: LevelsProps) {
  return (
    <StyledLevelsBar>
      <button onClick={changeLevel} value="EASY">
        EASY
      </button>
      <button onClick={changeLevel} value="MEDIUM">
        MEDIUM
      </button>
      <button onClick={changeLevel} value="HARD">
        HARD
      </button>
    </StyledLevelsBar>
  );
}
