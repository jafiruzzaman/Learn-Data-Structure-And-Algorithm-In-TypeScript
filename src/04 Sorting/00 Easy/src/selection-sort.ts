/**
 * @file selection-sort.ts
 * @description selection sort
 */

export {};
function selectionSort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j]! < arr[min]!) {
        min = j;
      }
      // now swap
      let temp: number = arr[min]!;
      arr[min] = arr[i]!;
      arr[i] = temp;
    }
  }
}

const arr: number[] = [1, 2, 5, 4, 6, 8, 3];
selectionSort(arr);
console.log(arr);
