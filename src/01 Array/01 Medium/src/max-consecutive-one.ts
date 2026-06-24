/**
 * @file max-consecutive-one.ts
 * @description find max consecutive one problem
 */

export {};

function maxConsecutiveOnes(arr: number[]): number {
  let count = 0;
  let maxCount = 0;

  for (const num of arr) {
    if (num === 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 0;
    }
  }

  return maxCount;
}
const arr: number[] = [1, 1, 0, 1, 1, 1, 1];
console.log(maxConsecutiveOnes(arr));
