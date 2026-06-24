/**
 * @file row-sum.ts
 *
 */

export {};
function rowSum(matrix: number[][]) {
  let sum = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row]!.length; col++) {
      sum += matrix[row]![col]!;
    }
    console.log(`For ${row} row row-sum is ${sum}`);
  }
}
let matrix: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(rowSum(matrix));
