/*----------------------------------------------------- Question link -----------------------------------------------------*/
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/*----------------------------------------------------- Imports -----------------------------------------------------*/
import { runTests, TestCase } from "./../../../../utils/code-runner";

function removeDuplicates(nums: number[]): number {
  // edge-case
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      // first increment i
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

const testcases: TestCase<number[], number>[] = [
  { input: [1, 1, 2, 2, 3, 3, 4], expected: 4 },
  { input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: 5 },
  { input: [1, 1, 2], expected: 2 },
];

runTests(removeDuplicates, testcases);
