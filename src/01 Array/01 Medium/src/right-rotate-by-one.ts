/**
 * @file right-rotate-by-one.ts
 * @description right rotate an array by 1 places
 */

export {};
function rotateByOne(arr: number[]): void {
  let temp: number = arr[arr.length - 1]!;
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1]!;
  }
  arr[0] = temp;
}

const arr: number[] = [1, 2, 3, 4, 5, 6];
rotateByOne(arr);
console.log(arr);
