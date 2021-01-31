import React from "react";
import Cell from "../cell/cell.component";
import { CellModel } from "../../models/CellModel";

export default function Board({ field }: { field: CellModel[][] }) {
  return (
    <div>
      {field.map((row, y) => (
        <div key={`row-${y}`} style={{ display: "flex" }}>
          {row.map((cell, x) => (
            <Cell key={`col-${x}`} {...cell} />
          ))}
        </div>
      ))}
    </div>
  );
}
