/*----------------------------------------------------- Question link -----------------------------------------------------*/

// https://leetcode.com/problems/two-sum/

/*----------------------------------------------------- Intuition -----------------------------------------------------*/
/*
 * i will traverse the array
 * for each element i calculate the sum and then compare with target
 * if found then return else return -1;
 */
function twoSum(nums: number[], target: number): number[] {
  let len: number = nums.length;
  for (let i: number = 0; i < len; i++) {
    for (let j: number = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

// test-cases
let num: number[] = [2, 7, 11, 15];
console.log(twoSum(num, 9));
