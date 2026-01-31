/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 */
export {};

/**
 * Question link():
 * Question: Left Rotate an array by One Places
 */

/*
 * BRUTE/OPTIMAL:
    1. store the first element
    2. traverse the array from 1 to N-1
    3. left shift each value means arr[i-1] = arr[i]
    4. lastly put temp at the end
 */

const leftRotate = (arr: number[]): number[] => {
  // check if array contains only one element
  if (arr.length === 1) {
    return [arr[0]];
  }
  let temp: number = arr[0];
  for (let i: number = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
};

// ===========================Test-Case====================================
const arr: number[] = [1, 2, 3, 4, 5, 6];
console.log(leftRotate(arr));
