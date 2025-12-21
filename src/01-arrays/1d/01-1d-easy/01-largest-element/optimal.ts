/*
  * Question Link: https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1
*/

/**
 * Finds the largest number in a given array.
 *
 * @param {number[]} arr - An array of numbers.
 * @returns {number | null} The largest number in the array, or null if the array is empty.
 *
 * @example
 * findLargest([3, 5, 1, 8, 2]); // returns 8
 * findLargest([-10, -3, -25, -7]); // returns -3
 * findLargest([]); // returns null
 */

function findLargest(arr: number[]): number | null {
  if (arr.length === 0) {
    return null;
  }
  let result = arr[0];
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}

/* -------- Main Function -------- */
function main() {
  // Array of test cases
  let testCases: number[][] = [
    [3, 5, 1, 8, 2], // Mixed numbers
    [-10, -3, -25, -7], // Negative numbers
    [42], // Single element
    [], // Empty array
  ];

  // Iterate over each test case and print the result
  testCases.forEach((test, index) => {
    const largest = findLargest(test);
    if (largest === null) {
      console.log(`Test Case ${index + 1}: Array is empty.`);
    } else {
      console.log(`Test Case ${index + 1}: Largest = ${largest}`);
    }
  });
}

// Run the main function
main();
