/**
 * @file find-largest.ts
 * @description find the largest element in an array problem
 */
export {};
function findLargest(arr: number[]): number {
  let max: number = arr[0]!;
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i]! > max) max = arr[i]!;
  }
  return max;
}
const arr: number[] = [2, 4, 56, 8, 7, 6, 9, 10, 24];
console.log(findLargest(arr));
