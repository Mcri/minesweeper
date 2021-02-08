import { CAMP_COLORS } from "../constants";

const getCampColorsPair = (isRevealed: boolean): string[] => {
  return isRevealed
    ? [CAMP_COLORS.LIGHTBROWN, CAMP_COLORS.DARKBROWN]
    : [CAMP_COLORS.LIGHTGREEN, CAMP_COLORS.DARKGREEN];
};

export const defineCellColor = (
  x: number,
  y: number,
  isRevealed: boolean
): string => {
  const CAMP_COLORS_PAIR = getCampColorsPair(isRevealed);
  let bg: string;
  if (y % 2 === 0) bg = x % 2 === 0 ? CAMP_COLORS_PAIR[0] : CAMP_COLORS_PAIR[1];
  else bg = x % 2 === 0 ? CAMP_COLORS_PAIR[1] : CAMP_COLORS_PAIR[0];
  return bg;
};
