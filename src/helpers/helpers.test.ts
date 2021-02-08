import { Cell } from "../types";
import { buildBoard, showAndExpand, toggleFlag } from "./index";

let board: Cell[][];

describe("Build Board", () => {
  beforeAll(() => {
    board = buildBoard(15, 8, 10);
  });

  it("should return a matrix of n rows and m columns", () => {
    expect(board.length).toBe(8);
    expect(board[0].length).toBe(10);
  });

  it("should contain n mines", () => {
    expect(
      board.reduce(
        (acc, row) => acc.concat(...row.filter((cell) => cell.hasMine)),
        []
      ).length
    ).toBe(15);
  });
});

describe("Cell Reveal", () => {
  describe("with no mine", () => {
    beforeAll(() => {
      board = buildBoard(0, 10, 10);
    });

    it("should return a cell left count equal to 0", () => {
      expect(showAndExpand([0, 0], board, 10 * 10).cellLeft).toEqual(0);
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
        showAndExpand([0, 0], board, 10 * 10 - 1).cellLeft
      ).toBeLessThanOrEqual(1);
    });
  });
});

describe("Place Flag", () => {
  beforeAll(() => {
    board = buildBoard(5, 10, 10);
  });

  it("should toggle flag", () => {
    toggleFlag([0, 0], board, 5, 5);
    expect(board[0][0].hasFlag).toBe(true);
    toggleFlag([0, 0], board, 5, 5);
    expect(board[0][0].hasFlag).toBe(false);
  });
});
