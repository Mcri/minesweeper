import { buildBoard, showAndExpand, toggleFlag } from ".";
import { Cell } from "../types";
import { getCoordsFirstFreeCell, replaceMine } from "./boardInteractions";

let board: Cell[][];

describe("Cell Reveal", () => {
  describe("with no mine", () => {
    beforeAll(() => {
      board = buildBoard(0, 10, 10);
    });

    it("should return a cell left count equal to 0", () => {
      expect(showAndExpand([0, 0], board, 10 * 10).cellsLeft).toEqual(0);
    });

    it("should return a new defined board", () => {
      let result = showAndExpand([0, 0], board, 10 * 10 - 15);
      expect(result.board).toBeDefined();
      expect(result).not.toBe(board);
    });
  });

  describe("with mines", () => {
    beforeAll(() => {
      board = buildBoard(0, 10, 10);
      board[1][5].hasMine = true;
      board[1][4].hasFlag = true;
    });

    it("should reveal only the empty cells", () => {
      expect(
        showAndExpand([0, 0], board, 10 * 10 - 1).cellsLeft
      ).toBeLessThanOrEqual(1);
    });
  });
});

describe("Place Flag", () => {
  beforeAll(() => {
    board = buildBoard(5, 10, 10);
  });

  it("should toggle flag", () => {
    toggleFlag([0, 0], board, 5);
    expect(board[0][0].hasFlag).toBe(true);
    toggleFlag([0, 0], board, 5);
    expect(board[0][0].hasFlag).toBe(false);
  });
});

describe("Replace Mine", () => {
  beforeAll(() => {
    board = buildBoard(0, 10, 10);
    board[5][5].hasMine = true;
  });

  it("should return the coordinates of the first free cell", () => {
    let [x, y] = getCoordsFirstFreeCell(board);
    expect(board[y][x].hasMine).toBe(false);
  });

  it("should replace the mine", () => {
    let upBoard = replaceMine([5, 5], board).board;
    expect(upBoard[5][5].hasMine).toBe(false);
    expect(upBoard[0][0].hasMine).toBe(true);
  });
});
