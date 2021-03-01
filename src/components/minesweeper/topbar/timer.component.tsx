import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { useTimer } from "../../../hooks";
import { MinesweeperContext } from "../../../providers";
import { GameStatus } from "../../../types";

export function Timer() {
  const [{ status }] = useContext(MinesweeperContext);
  const { time, start, stop, reset } = useTimer();

  useEffect(() => {
    if (status === GameStatus.TO_START && time !== 0) return reset();
    if (status === GameStatus.IN_PROGRESS) return start();
    return stop();
  }, [reset, start, status, stop, time]);

  const formatTime = () => {
    return new Date(1000 * time).toISOString().substr(14, 5);
  };

  return (
    <span>
      <FontAwesomeIcon icon={faStopwatch} id="flag" /> {formatTime()}
    </span>
  );
}
