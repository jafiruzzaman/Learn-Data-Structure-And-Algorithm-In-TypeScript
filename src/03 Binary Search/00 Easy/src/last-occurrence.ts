/**
 * @file last-occurrence.ts
 * @description
 */
/**
 * @file first-occurrence.ts
 * @description find the first occurrence of target value in a sorted array
 */

export {};
function lastOccurrence(arr: number[], target: number): number {
  let start = 0,
    end = arr.length - 1;
  let res = -1;
  while (start <= end) {
    let mid: number = Math.floor(start + (end - start) / 2);
    if (arr[mid] == target) {
      res = mid;
      start = mid + 1;
    } else if (arr[mid]! < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return res;
}

let arr: number[] = [1, 3, 5, 5, 5, 5, 67, 123, 125],
  x = 5;
console.log(lastOccurrence(arr, x));
