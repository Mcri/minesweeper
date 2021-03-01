import React from "react";
import { StyledTopbar } from "./topbar.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { Timer } from "./timer.component";

type GameTopbarProps = {
  nFlags: number;
  reset: () => void;
};

export function GameTopbar({ nFlags, reset }: GameTopbarProps) {
  return (
    <StyledTopbar>
      <span>
        <FontAwesomeIcon icon={faFlag} id="flag" /> {nFlags}
      </span>
      <Timer />
      <span id="restart" onClick={reset}>
        RESTART
      </span>
    </StyledTopbar>
  );
}
