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
      expect(showAndExpand([0, 0], board, 10 * 10).cellsLeft).toBe(0);
    });

    it("should not refer to the same object", () => {
      const upBoard = showAndExpand([0, 0], board, 10 * 10).board;
      expect(upBoard).not.toBe(board);
      expect(upBoard[0]).not.toBe(board[0]);
      expect(upBoard[0][0]).not.toBe(board[0][0]);
    });
  });

  describe("with mines", () => {
    beforeAll(() => {
      board = buildBoard(0, 10, 10);
      board[1][5].hasMine = true;
      board[1][4].hasFlag = true;
    });

    it("should reveal only the empty cells", () => {
      expect(showAndExpand([0, 0], board, 10 * 10 - 1).cellsLeft).toBe(1);
    });
  });
});

describe("Place Flag", () => {
  beforeAll(() => {
    board = buildBoard(5, 10, 10);
    board[0][1].hasFlag = true;
  });

  it("should toggle flag", () => {
    expect(toggleFlag([0, 0], board, 5).board[0][0].hasFlag).toBe(true);
    expect(toggleFlag([1, 0], board, 5).board[0][1].hasFlag).toBe(false);
  });

  it("should not refer to the same object", () => {
    const upBoard = toggleFlag([0, 0], board, 5).board;
    expect(upBoard).not.toBe(board);
    expect(upBoard[0]).not.toBe(board[0]);
    expect(upBoard[0][0]).not.toBe(board[0][0]);
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

  it("should not refer to the same object", () => {
    let upBoard = replaceMine([0, 0], board).board;
    expect(upBoard).not.toBe(board);
    expect(upBoard[0]).not.toBe(board[0]);
    expect(upBoard[0][0]).not.toBe(board[0][0]);
  });
});
