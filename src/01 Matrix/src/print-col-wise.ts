/**
 * @file print-col-wise.ts
 * @description print col wise 
 */

export {};
function printCol(matrix: number[][]) {
  for (let col = 0; col < matrix[0]!.length; col++) {
    let space = "";
    for (let row = 0; row < matrix.length; row++) {
      space += matrix[row]![col]! + " ";
    }
    console.log(space);
    space = "";
  }
}
let matrix: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(printCol(matrix));
