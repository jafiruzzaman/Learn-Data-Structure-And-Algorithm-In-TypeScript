/**
 * @file union-array.ts
 * @description union of 2 sorted array problem
 */
export {};
function unionArray(arr: number[], brr: number[]): number[] {
  let i = 0,
    j = 0;
  let res: number[] = [];
  while (i < arr.length && j < brr.length) {
    let value: number;
    if (arr[i]! < brr[j]!) {
      value = arr[i]!;
      i++;
    } else if (arr[i]! > brr[j]!) {
      value = brr[j]!;
      j++;
    } else {
      value = arr[i]!;
      i++;
      j++;
    }
    if (res.length === 0 || res[res.length - 1] !== value) {
      res.push(value);
    }
  }
  while (i < arr.length) {
    if (res.length === 0 || res[res.length - 1] !== arr[i]) {
      res.push(arr[i]!);
    }
    i++;
  }

  while (j < brr.length) {
    if (res.length === 0 || res[res.length - 1] !== brr[j]) {
      res.push(brr[j]!);
    }
    j++;
  }
  return res;
}
let arr: number[] = [1, 2, 3, 4, 5, 6];
let brr: number[] = [2, 7, 8, 9, 11, 12];
console.log(unionArray(arr, brr));
