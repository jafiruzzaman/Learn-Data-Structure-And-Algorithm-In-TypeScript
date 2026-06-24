/**
 * @file single-number.ts
 * @description find the single number in an array problem
 */

export {};
function singleNumber(arr: number[]) {
  let res: number = 0;
  for (let i = 0; i < arr.length; i++) {
    res ^= arr[i]!;
  }
  return res;
}

const arr: number[] = [4, 1, 2, 1, 2];
console.log(singleNumber(arr));
