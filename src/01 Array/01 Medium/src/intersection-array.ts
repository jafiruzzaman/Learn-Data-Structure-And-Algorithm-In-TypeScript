/**
 * @file intersection-array.ts
 * @description find the intersection of 2 sorted array
 */

export {};

function intersectionOfArray(arr: number[], brr: number[]) {
  let i = 0,
    j = 0;
  let res: number[] = [];
  while (i < arr.length && j < brr.length) {
    if (arr[i] === brr[j]) {
      if (res.length === 0 || res[res.length - 1] !== arr[i]) {
        res.push(arr[i]!);
      }
      i++;
      j++;
    } else if (arr[i]! < brr[j]!) {
      i++;
    } else {
      j++;
    }
  }
  return res;
}

let arr1: number[] = [1, 2, 3, 4],
  arr2: number[] = [2, 4, 6, 7, 8];
console.log(intersectionOfArray(arr1, arr2));
