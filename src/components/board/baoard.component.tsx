import React from "react";
import Cell from "../cell/cell.component";
import { CellModel } from "../../models/CellModel";

type BoardProps = {
  field: CellModel[][];
  showAndExpand: (row: number, column: number) => void;
  toggleFlag: (row: number, column: number) => void;
};

export default function Board({
  field,
  showAndExpand,
  toggleFlag,
}: BoardProps) {
  return (
    <div>
      {field.map((row, y) => (
        <div key={`row-${y}`} style={{ display: "flex" }}>
          {row.map((cell, x) => (
            <Cell
              key={`col-${x}`}
              {...cell}
              onLeftClick={showAndExpand}
              onRightClick={toggleFlag}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
