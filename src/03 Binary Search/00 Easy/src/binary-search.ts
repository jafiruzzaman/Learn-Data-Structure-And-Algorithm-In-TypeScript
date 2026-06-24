/**
 * @file binary-search.ts
 * @description classic binary search
 */

export {};
function binarySearch(arr: number[], target: number) {
  let start: number = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid: number = Math.floor(start + (end - start) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid]! < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target: number = 6;

console.log(`${target} exist on ` + binarySearch(arr, target) + `th index`);
