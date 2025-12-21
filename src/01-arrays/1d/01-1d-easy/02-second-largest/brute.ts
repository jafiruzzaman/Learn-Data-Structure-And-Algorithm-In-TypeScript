import { runTests, TestCase } from "./../../../../utils/code-runner";
/* ----------------------------------------------------- Intuition ----------------------------------------------------- */

/*
 * By using sorting
  * First i sort the array
  * iterating the array & compare with largest
 */

function find2ndLargest(arr: number[]): number {
  // edge case for length
  if (arr.length < 2) {
    return -1;
  }
  // sort the array in increasing order
  arr.sort((a, b) => a - b);
  // store the largest
  let largest = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] !== largest) {
      return arr[i];
    }
  }
  // all elements are same
  return -1;
}

// test cases
const testcases: TestCase<number[], number>[] = [
  { input: [1, 2, 4, 7, 7, 5], expected: 5 },
  { input: [10, 10, 10], expected: -1 },
  { input: [5], expected: 0 },
];

runTests(find2ndLargest, testcases);
