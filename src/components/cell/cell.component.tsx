import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../constants";
import { defineCellColor } from "../../helpers";
import StyledCell from "./cell.style";

type CellProps = {
  x: number;
  y: number;
  isRevealed: boolean;
  hasFlag: boolean;
  hasMine: boolean;
  proximity: number;
  onLeftClick: (row: number, column: number) => void;
  onRightClick: (row: number, column: number) => void;
};

export default memo(function Cell({
  x,
  y,
  isRevealed,
  hasFlag,
  hasMine,
  proximity,
  onLeftClick,
  onRightClick,
}: CellProps) {
  const bg = defineCellColor(x, y, isRevealed);

  const mineColor = COLORS[Math.round(Math.random() * (COLORS.length - 1))];

  const handleLeftClick = () => {
    onLeftClick(y, x);
  };

  const handleRightClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    onRightClick(y, x);
  };

  return (
    <StyledCell
      bg={bg}
      color={COLORS[proximity]}
      mineColor={mineColor}
      isRevealed={isRevealed}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {hasFlag && !isRevealed && <FontAwesomeIcon icon={faFlag} id="flag" />}
      {hasMine && isRevealed && <div className="mine"></div>}
      {isRevealed && proximity > 0 && <p>{proximity}</p>}
    </StyledCell>
  );
});
