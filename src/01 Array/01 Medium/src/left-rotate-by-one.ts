/**
 * @file left-rotate-by-one.ts
 * @description left rotate an array by 1 places
 */

export {};

function rotateByOne(arr: number[]): void {
  let temp: number = arr[0]!;
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i]!;
  }
  arr[arr.length - 1] = temp;
}
const arr: number[] = [1, 2, 3, 4, 5, 6];
rotateByOne(arr);
console.log(arr);
