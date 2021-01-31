export class CellModel {
  constructor(
    public x: number,
    public y: number,
    public hasMine: boolean = false,
    public isRevealed: boolean = false,
    public hasFlag: boolean = false,
    public proximity: number = 0
  ) {}

  reveal() {
    this.isRevealed = true;
  }

  toggleFlag() {
    this.hasFlag = !this.hasFlag;
  }
}
