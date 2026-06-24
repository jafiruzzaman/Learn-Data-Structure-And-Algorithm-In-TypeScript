/**
 * @file leader-array.ts
 * @description find the leader in an array
 */

export {};

function leaders(arr: number[]): number[] {
  let res: number[] = [];
  let i = arr.length - 1;
  let maxRight = -Infinity;
  while (i >= 0) {
    if (maxRight < arr[i]!) {
      res.push(arr[i]!);
      maxRight = arr[i]!;
    }
    i--;
  }
  return res;
}

const arr: number[] = [16, 17, 4, 3, 5, 2];
console.log(leaders(arr));
