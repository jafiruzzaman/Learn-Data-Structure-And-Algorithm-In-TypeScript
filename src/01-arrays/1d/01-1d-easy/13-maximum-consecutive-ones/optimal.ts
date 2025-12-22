/*----------------------------------------------------- Question link -----------------------------------------------------*/

// https://leetcode.com/problems/max-consecutive-ones/

/*----------------------------------------------------- Intuition -----------------------------------------------------*/
/*
 * i will keep track max count of 1s
 * if found 0 the reset the count to 0 then
 */

function maxConsecutive(arr: number[]): number {
  let max: number = 0,
    count: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }
  return max;
}

// Test-Cases
console.log(maxConsecutive([1, 1, 0, 1, 1, 1])); // Output: 3
