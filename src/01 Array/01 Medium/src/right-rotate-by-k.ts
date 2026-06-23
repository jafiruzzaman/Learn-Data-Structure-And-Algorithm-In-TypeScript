/**
 * @file right-rotate-by-k.ts
 * @description right rotate an array by k places
 */
export {};

function reverse(arr: number[], start: number, end: number) {
  while (start < end) {
    let temp: number = arr[start]!;
    arr[start] = arr[end]!;
    arr[end] = temp;
    (start++, end--);
  }
}

function rightRotateByKPlaces(arr: number[], rotate: number): void {
  let len = arr.length;
  rotate = rotate % len;
  // 0 to rotate-1
  reverse(arr, 0, len - 1);
  reverse(arr, 0, rotate - 1);
  reverse(arr, rotate, len - 1);
}
const arr: number[] = [1, 2, 3, 4, 5, 6];
rightRotateByKPlaces(arr, 3);
console.log(arr);
