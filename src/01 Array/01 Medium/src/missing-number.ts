/**
 * @file missing-number.ts
 * @description find the missing number in an array
 */

export {};
function missingNumber(arr: number[]): number {
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i]!;
  }
  let n = arr.length;
  let totalSum = (n * (n + 1)) / 2;
  return totalSum - actualSum;
}
let arr: number[] = [3, 0, 1];
console.log(missingNumber(arr));
