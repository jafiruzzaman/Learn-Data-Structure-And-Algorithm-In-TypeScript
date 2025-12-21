/*----------------------------------------------------- Question link -----------------------------------------------------*/
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/*----------------------------------------------------- Imports -----------------------------------------------------*/
import { runTests, TestCase } from "./../../../../utils/code-runner";

function removeDuplicates(arr: number[]): number {
  // create a set
  let set = new Set(arr);
  let i = 0;
  for (const element of set) {
    arr[i++] = element;
  }
  return set.size;
}

const testcases: TestCase<number[], number>[] = [
  { input: [1, 1, 2, 2, 3, 3, 4], expected: 4 },
  { input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: 5 },
  { input: [1, 1, 2], expected: 2 },
];

runTests(removeDuplicates, testcases);

