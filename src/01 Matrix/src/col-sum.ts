/**
 * @file col.sum
 */

export {};
function colSum(matrix: number[][]) {
  for (let col = 0; col < matrix[0]!.length; col++) {
    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
      sum += matrix[row]![col]!;
    }
    console.log(`For ${col} col col-sum is ${sum}`);
  }
}
let matrix: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(colSum(matrix));
