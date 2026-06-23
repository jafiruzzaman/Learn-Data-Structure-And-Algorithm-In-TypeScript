/**
 * @file linear-Search.ts
 * @description linear the Search number in an array
 */
export {};
function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]! == target) return i;
  }
  return -1;
}
const arr: number[] = [2, 4, 56, 8, 7, 6, 9, 10, 24];
console.log(linearSearch(arr, 2));
