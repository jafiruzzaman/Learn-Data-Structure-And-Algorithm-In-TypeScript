/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 */
export {};

/**
 * Question link(LeetCode): https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Question: Remove Duplicates from a sorted array
 */

/*
  BRUTE:
    1. Use Set to avoid duplicates
    2. Iterate the array and put into set
*/
const removeDuplicatesBrute = (arr: number[]): number => {
  let set = new Set<number>();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }
  return set.size;
};

/*
  OPTIMAL:
    1. keep a pointer i & j 
    2. iterate the array
    3. only and only if move the pointer and replace value if arr[j]!=arr[i]
*/

const removeDuplicates = (arr: number[]): number => {
  if (arr.length === 0) {
    return -1;
  }
  let i: number = 0;
  for (let j: number = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

// ===========================Test-Case====================================
const arr: number[] = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6];
console.log(removeDuplicatesBrute(arr));
console.log(removeDuplicates(arr));
