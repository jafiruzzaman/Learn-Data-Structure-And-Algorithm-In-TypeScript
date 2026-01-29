/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 */
export {};

/**
 * Question link(GFG): https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1
 * Question: largest element in an Array
 */

/*
  BRUTE: 
    1. first i will sort the array
    2. return the last element of the array
    ⏰ Total Time Complexity --> O(n logn)
  TODO: After learning MergeSort
*/

/*
  OPTIMAL:
    1. first check arrays length === 0 then return
    1. i will store the first element
    2. traverse the array and compare with other elements & replace if the element is large
    ⏰ Total Time Complexity --> O(n)
*/

let largestElement = (arr: number[]): number => {
  // check if array contains any element or not
  if (arr.length === 0) {
    return -1;
  }
  // store the first element
  let largest = arr[0];
  // traverse the array and compare with other elements and update largest value
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};
