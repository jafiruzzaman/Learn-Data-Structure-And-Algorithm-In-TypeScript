/**
 * @file two-sum.ts
 * @description two sum problem
 */

export {};
function twoSum(arr: number[], target: number): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i]! + arr[j]! === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}
const arr: number[] = [1, 2, 3, 4, 5, 6];
console.log(twoSum(arr, 3));
