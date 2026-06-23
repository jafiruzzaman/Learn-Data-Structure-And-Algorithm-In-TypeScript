/**
 * @file count-frequency.ts
 * @description count frequency problem
 */

export {};
function frequencyCount(arr: number[], target: number): number {
  let count: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
const arr: number[] = [2, 4, 56, 8, 2, 7, 6, 2, 9, 10, 24];
console.log(frequencyCount(arr, 97));
