/**
 * @file second-largest.ts
 * @description find the 2nd largest element in an array
 */

export {};
function secondLargestElement(arr: number[]): number {
  let largest = arr[0];
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]! > largest!) {
      secondLargest = largest!;
      largest = arr[i];
    } else if (arr[i]! < largest! && arr[i]! > secondLargest) {
      secondLargest = arr[i]!;
    }
  }
  return secondLargest;
}
const arr: number[] = [2, 4, 56, 8, 7, 6, 9, 10, 24];
console.log(secondLargestElement(arr));
