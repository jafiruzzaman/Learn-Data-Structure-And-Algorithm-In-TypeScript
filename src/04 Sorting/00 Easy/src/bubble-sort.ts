/**
 * @file bubble-sort.ts
 * @description bubble sort
 */

export {};

function bubbleSort(arr: number[]): void {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSwap: boolean = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j]! > arr[j + 1]!) {
        let temp: number = arr[j]!;
        arr[j] = arr[j + 1]!;
        arr[j + 1] = temp;
        isSwap = true;
      }
      if (!isSwap) {
        break;
      }
    }
  }
}
const arr: number[] = [1, 2, 5, 4, 6, 8, 3];
bubbleSort(arr);
console.log(arr);
