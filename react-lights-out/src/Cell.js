import React, {useState} from "react";
import "./Cell.css";

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/
let count = 0;
function counter() {
   count += 1;
   document.getElementById("clicks").innerHTML = `You Clicked ${count} Times`;
}

function Cell({ flipCellsAroundMe, isLit }) {
  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  return <td className={classes} onClick={() => {flipCellsAroundMe();counter()}} role="button" />
}

export default Cell;
export {counter}