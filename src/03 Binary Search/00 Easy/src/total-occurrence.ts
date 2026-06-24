/**
 * @file total-occurrence.ts
 * @description return total number of occurrence of target value in a sorted array;
 */

export {};
function firstOccurrence(arr: number[], target: number): number {
  let start = 0,
    end = arr.length - 1;
  let res = -1;
  while (start <= end) {
    let mid: number = Math.floor(start + (end - start) / 2);
    if (arr[mid] == target) {
      res = mid;
      end = mid - 1;
    } else if (arr[mid]! < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return res;
}

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

function totalOccurrence(arr: number[], target: number) {
  let first = firstOccurrence(arr, target);
  let last = lastOccurrence(arr, target);

  if (first === -1 || last === -1) {
    return 0;
  }
  return last - first + 1;
}

let arr: number[] = [1, 3, 5, 5, 5, 5, 67, 123, 125],
  x = 5;
console.log(totalOccurrence(arr, x));
