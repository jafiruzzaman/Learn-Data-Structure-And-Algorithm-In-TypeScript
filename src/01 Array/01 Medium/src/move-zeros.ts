/**
 * @file move-zeros.ts
 * @description move zeros to the end problem
 */

export {};

function moveZeros(arr: number[]) {
  let j: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp: number = arr[i]!;
      arr[i] = arr[j]!;
      arr[j] = temp;
      j++;
    }
  }
}

const arr: number[] = [1, 2, 0, 4, 3, 0, 5, 0];
moveZeros(arr);
console.log(arr);
