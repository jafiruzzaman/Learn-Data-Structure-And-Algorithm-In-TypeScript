/*----------------------------------------------------- Imports -----------------------------------------------------*/
import { runTests, TestCase } from "./../../../../utils/code-runner";

/*----------------------------------------------------- find largest function -----------------------------------------------------*/
function largest(arr: number[]): number {
  let len = arr.length;
  let max = arr[0];
  for (let i = 1; i < len; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/*----------------------------------------------------- find second largest ----------------------------------------------------- */
function find2ndLargest(arr: number[]): number {
  if (arr.length < 2) {
    return -1;
  }
  // first find the largest
  let max = largest(arr);
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max && arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}

// test cases
const testcases: TestCase<number[], number>[] = [
  { input: [1, 2, 4, 7, 7, 5], expected: 5 },
  { input: [10, 10, 10], expected: -1 },
  { input: [5], expected: -1 },
];

runTests(find2ndLargest, testcases);
