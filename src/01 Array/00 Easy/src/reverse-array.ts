/**
 * @file reverse-array.ts
 * @description reverse an array problem
 */

export {};
function reverse(arr: number[]): void {
  let start: number = 0,
    end: number = arr.length - 1;
  while (start < end) {
    let temp: number = arr[start]!;
    arr[start] = arr[end]!;
    arr[end] = temp;
    (start++, end--);
  }
}
const arr: number[] = [2, 4, 56, 8, 7, 6, 9, 10, 24];
reverse(arr);
console.log(arr);
