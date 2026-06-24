/**
 * @file insert-position.ts
 * @description search insert position
 */

export {};
function insertPosition(arr: number[], target: number) {
  let start: number = 0,
    end = arr.length - 1,
    res = arr.length;
  while (start <= end) {
    let mid: number = Math.floor(start + (end - start) / 2);
    if (arr[mid]! >= target) {
      res = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return res;
}
let arr: number[] = [1, 3, 5, 5, 5, 5, 67, 123, 125],
  x = 2;
console.log(insertPosition(arr, x));
