/**
 * @file count-even.ts
 * @description count the even number in an array
 */
export {};
function countEven(arr: number[]): number {
  let res: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]! % 2 == 0) res++;
  }
  return res;
}
const arr: number[] = [2, 4, 56, 8, 7, 6, 9, 10, 24];
console.log(countEven(arr));
