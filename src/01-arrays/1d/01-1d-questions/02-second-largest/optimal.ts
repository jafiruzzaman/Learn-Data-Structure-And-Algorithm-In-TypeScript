/*----------------------------------------------------- Imports -----------------------------------------------------*/
import { runTests, TestCase } from "./../../../../utils/code-runner";
function find2ndLargest(arr: number[]): number {
  // edge-case
  if (arr.length < 2) return -1;
  // first store the initial value the largest
  let max = arr[0];
  let secondMax = -Infinity;
  // traverse the array and first find the max swap previous secondMax with then update the max value
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }
  return secondMax === -Infinity ? -1 : secondMax;
}
// test cases
const testcases: TestCase<number[], number>[] = [
  { input: [1, 2, 4, 7, 7, 5], expected: 5 },
  { input: [10, 10, 10], expected: -1 },
  { input: [5], expected: -1 },
];

runTests(find2ndLargest, testcases);
