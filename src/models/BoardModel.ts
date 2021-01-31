import { CellModel } from "./CellModel";

type Coords = [x: number, y: number];

const NEIGHBOURS: Coords[] = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
];

export class BoardModel {
  constructor(
    private rows: number,
    private columns: number,
    private nMines: number,
    public field: CellModel[][] = [],
    private minesCoordinates: Coords[] = []
  ) {
    this.buildBoard();
  }

  _getRandomCoordinate(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  _checkLimits(row: number, col: number): boolean {
    return (
      row >= 0 && row <= this.rows - 1 && col >= 0 && col <= this.columns - 1
    );
  }

  _defineMineProximity(): void {
    for (let [x, y] of this.minesCoordinates) {
      for (let [c, r] of NEIGHBOURS) {
        const row = y + r;
        const col = x + c;

        if (this._checkLimits(row, col) && !this.field[row][col].hasMine) {
          this.field[row][col].proximity++;
        }
      }
    }
  }

  _placeMines(): void {
    let counter = 0;

    while (counter < this.nMines) {
      let [x, y]: Coords = [
        this._getRandomCoordinate(0, this.columns - 1),
        this._getRandomCoordinate(0, this.rows - 1),
      ];

      let cell = this.field[y][x];
      if (!cell.hasMine) {
        cell.hasMine = true;
        counter++;
        this.minesCoordinates.push([x, y]);
      }
    }
    this._defineMineProximity();
  }

  buildBoard() {
    this.field = [];
    for (let y = 0; y < this.rows; y++) {
      this.field.push([]);
      for (let x = 0; x < this.columns; x++)
        this.field[y].push(new CellModel(x, y));
    }
    this._placeMines();
  }

  _showAllMines() {
    for (let [x, y] of this.minesCoordinates) {
      let cell = this.field[y][x];
      cell.reveal();
    }
  }

  showAndExpand(row: number, col: number) {
    const cell = this.field[row][col];
    if (cell.isRevealed || cell.hasFlag) return;

    cell.reveal();
    if (cell.proximity > 0) return;
    if (cell.hasMine) {
      this._showAllMines();
      return;
    }

    for (let [c, r] of NEIGHBOURS) {
      c += col;
      r += row;
      if (this._checkLimits(r, c)) this.showAndExpand(r, c);
    }
  }
}
