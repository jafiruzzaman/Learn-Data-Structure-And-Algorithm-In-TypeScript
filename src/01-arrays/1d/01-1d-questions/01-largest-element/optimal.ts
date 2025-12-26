/*
 * Question Link: https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1
 */
/* ----------------------------------------------------- imports ----------------------------------------------------- */
import { runTests, TestCase } from "../../../../utils/code-runner";
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

const testCases: TestCase<number[], number>[] = [
  { input: [1, 3, 5, 2], expected: 5 },
  { input: [10], expected: 10 },
  { input: [-5, -2, -9], expected: -2 },
  { input: [], expected: -1 },
];

// run code
runTests(findLargest, testCases, "Find Largest Element");
