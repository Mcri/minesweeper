import React from "react";
import { StyledLevelsBar } from "./levels.style";

type LevelsProps = {
  changeLevel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  active: string;
};

export function Levels({ changeLevel, active }: LevelsProps) {
  return (
    <StyledLevelsBar>
      <button
        onClick={changeLevel}
        value="EASY"
        className={active === "EASY" ? "active" : ""}
      >
        EASY
      </button>
      <button
        onClick={changeLevel}
        value="MEDIUM"
        className={active === "MEDIUM" ? "active" : ""}
      >
        MEDIUM
      </button>
      <button
        onClick={changeLevel}
        value="HARD"
        className={active === "HARD" ? "active" : ""}
      >
        HARD
      </button>
    </StyledLevelsBar>
  );
}
