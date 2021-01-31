export const COLORS = [
  "#2d2fa3",
  "rgb(57, 128, 25)",
  "rgb(211, 76, 22)",
  "rgb(204, 19, 19)",
  "rgb(156, 6, 56)",
];

export const CAMP_COLORS = {
  LIGHTGREEN: "rgb(170, 219, 124)",
  DARKGREEN: "rgb(133, 201, 130)",
  LIGHTBROWN: "rgb(180, 156, 125)",
  DARKBROWN: "rgb(156, 138, 115)",
};

export const getCampColorsPair = (isRevealed: boolean): string[] => {
  return isRevealed
    ? [CAMP_COLORS.LIGHTBROWN, CAMP_COLORS.DARKBROWN]
    : [CAMP_COLORS.LIGHTGREEN, CAMP_COLORS.DARKGREEN];
};
