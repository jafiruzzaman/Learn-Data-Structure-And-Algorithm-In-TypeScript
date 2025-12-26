/*----------------------------------------------------- Imports -----------------------------------------------------*/
import { runTests, TestCase } from "./../../../../utils/code-runner";

function isSorted(arr: number[]): boolean {
  if (arr.length < 1) return true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

const testcases: TestCase<number[], boolean>[] = [
  { input: [1, 2, 3, 4, 5], expected: true },
  { input: [1, 3, 2, 5], expected: false },
  { input: [5], expected: true },
  { input: [], expected: true },
];

runTests(isSorted, testcases);
