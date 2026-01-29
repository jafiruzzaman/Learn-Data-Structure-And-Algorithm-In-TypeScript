/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 */
export {};

/**
 * Question link(GFG): https://www.geeksforgeeks.org/problems/second-largest3735/1
 * Question: second largest element in an Array
 */

/*
  BRUTE:
    1. First i have to sort the array (Optimal is Merge-Sort)
    2. Then i have to reverse traverse the array and find the second largest then return it
    ⏰ Total Time Complexity --> O(n logn) + O(n)

    TODO: Do it when i complete Merge Sort

*/

/*
  BETTER:
    1. Check if array contains only one element then return -1
    2. First i have to traverse the array and find the largest element in the array
    3. Then i have to traverse the array and find the second largest and check if it not be the largest
    ⏰ Total Time Complexity --> O(n) + O(n) --> O(2n)
*/
let findLargest = (arr: number[]): number => {
  let largest: number = arr[0];
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};
const secondLargestBetter = (arr: number[]): number => {
  if (arr.length < 2) return -1;

  const largest = findLargest(arr);
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest === Number.NEGATIVE_INFINITY ? -1 : secondLargest;
};
/*
  OPTIMAL:
    1. Check if array contains only one element then return -1
    2. First i have to traverse the array and find the largest element & second largest in the array
    ⏰ Total Time Complexity --> O(n)
*/
const secondLargestOptimal = (arr: number[]): number => {
  if (arr.length < 2) return -1;

  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest === Number.NEGATIVE_INFINITY ? -1 : secondLargest;
};

// Test-Case
let arr: number[] = [1, 2, 7, 6, 4, 8, 2, 7, 9];
console.log(`Second Largest Optimal`,secondLargestOptimal(arr));
