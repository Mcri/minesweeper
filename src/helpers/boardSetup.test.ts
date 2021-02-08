import { Cell } from "../types";
import { buildBoard } from "./index";

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
