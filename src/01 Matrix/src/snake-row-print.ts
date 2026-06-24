/**
 * @file snake-row-print.ts
 * @description
 */
export {};

function rowWiseSnakePrint(matrix: number[][]) {
  for (let row = 0; row < matrix.length; row++) {
    if (row % 2 == 0) {
      let normal = "";
      for (let col = 0; col < matrix[0]!.length; col++) {
        normal += matrix[row]![col] + " ";
      }
      console.log(normal);
    } else {
      let normal = "";
      for (let col = matrix[0]!.length - 1; col >= 0; col--) {
        normal += matrix[row]![col] + " ";
      }
      console.log(normal);
    }
  }
}

let matrix: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(rowWiseSnakePrint(matrix));
