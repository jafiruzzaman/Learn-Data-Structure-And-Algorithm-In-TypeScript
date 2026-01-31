/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 */
export {};

/**
 * Question link(GFG): https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1
 * Question: right Rotate an array by One Places
 */

/*
 * BRUTE/OPTIMAL:
    0. if array's size <=1 then return arr
    1. store the last element
    2. traverse the array from N-2 to 1
    3. right shift each value means arr[i+1] = arr[i]
    4. lastly put temp at the first
 */

const rightRotate = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }
  let temp: number = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = temp;
  return arr;
};

// ===========================Test-Case====================================
const arr: number[] = [1, 2, 3, 4, 5, 6];

console.log(rightRotate(arr));
