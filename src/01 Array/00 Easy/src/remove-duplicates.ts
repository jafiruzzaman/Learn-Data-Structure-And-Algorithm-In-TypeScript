/**
 * @file remove-duplicates.ts
 * @description remove duplicates from a sorted array
 */
export {};

function removeDuplicates(arr: number[]) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j]!;
    }
  }
  return i + 1;
}
const arr: number[] = [1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10, 10];
console.log(removeDuplicates(arr));
