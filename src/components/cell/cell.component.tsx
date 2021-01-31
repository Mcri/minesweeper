import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faBomb } from "@fortawesome/free-solid-svg-icons";
import { COLORS, getCampColorsPair } from "./cell.config";
import StyledCell from "./cell.style";

type CellProps = {
  x: number;
  y: number;
  isRevealed: boolean;
  hasFlag: boolean;
  hasMine: boolean;
  proximity: number;
};

export default memo(function Cell({
  x,
  y,
  isRevealed,
  hasFlag,
  hasMine,
  proximity,
}: CellProps) {
  const bg = (() => {
    const CAMP_COLORS_PAIR = getCampColorsPair(isRevealed);
    let bg: string;
    if (y % 2 === 0)
      bg = x % 2 === 0 ? CAMP_COLORS_PAIR[0] : CAMP_COLORS_PAIR[1];
    else bg = x % 2 === 0 ? CAMP_COLORS_PAIR[1] : CAMP_COLORS_PAIR[0];
    return bg;
  })();

  const mineColor = COLORS[Math.round(Math.random() * COLORS.length)];

  return (
    <StyledCell
      bg={bg}
      color={COLORS[proximity]}
      mineColor={mineColor}
      isRevealed={isRevealed}
    >
      {hasFlag && !isRevealed && <FontAwesomeIcon icon={faFlag} id="flag" />}
      {hasMine && isRevealed && <FontAwesomeIcon icon={faBomb} />}
      {isRevealed && proximity > 0 && <p>{proximity}</p>}
    </StyledCell>
  );
});
