/**
 * @file Array.ts
 * @description Array Basics
 */
export {};
/**
 * What is Array?
 *
 * An array is a linear data structure
 * that stores multiple values of the same type
 * using contiguous indexes.
 *
 * Characteristics:
 * 1. Fixed index positions
 * 2. O(1) random access
 * 3. Stores elements sequentially
 * 4. Zero-based indexing
 *
 * Example:
 *
 * Index : 0 1 2 3 4
 * Value : 10 7 7 1 7
 */

// declare & initialization
const arr: number[] = new Array(5);

// insert element
arr[0] = 10;
arr[4] = 7;
arr[1] = 7;
arr[3] = 1;
arr[2] = 7;

// access Elements
console.log(arr[2]);

// print array
console.log(arr);
let space: string = "";
console.log("print array using loop");
for (let i = 0; i < arr.length; i++) {
  space += arr[i] + " ";
}
console.log(space);
// 2D Array Or matrix collection of multiple array
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// insert value in a matrix
matrix[1]![1] = 5;
console.log(matrix);
// print matrix
console.log("Print matrix using loop");
for (let row = 0; row < matrix.length; row++) {
  let line: string = "";
  for (let col = 0; col < matrix[row]?.length!; col++) {
    line += matrix[row]![col] + " ";
  }
  console.log(line);
}
