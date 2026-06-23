/**
 * @file smallest-element.ts
 * @description smallest element in an array
 */
export {};
function smallestElement(arr: number[]) {
  let min: number = arr[0]!;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]! < min) min = arr[i]!;
  }
  return min;
}

const arr: number[] = [2, 4, 56, 8, 7, 6, 9, 10, 24];
console.log(smallestElement(arr));
