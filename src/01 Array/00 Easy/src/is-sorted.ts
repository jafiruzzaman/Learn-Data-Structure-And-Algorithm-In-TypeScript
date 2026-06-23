/**
 * @file is-sorted.ts
 * @description check if array is sorted or not
 */

export {};
function isSorted(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1]! > arr[i]!) {
      return false;
    }
  }
  return true;
}
const arr: number[] = [2, 4, 5, 6, 7, 1, 0, 9, 15];
const brr: number[] = [1, 1, 2, 3, 4, 5, 6];
console.log(isSorted(arr));
console.log(isSorted(brr));
