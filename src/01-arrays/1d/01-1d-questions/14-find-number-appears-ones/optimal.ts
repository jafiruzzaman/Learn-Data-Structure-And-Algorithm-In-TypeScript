/*----------------------------------------------------- Question link -----------------------------------------------------*/

// https://leetcode.com/problems/single-number/description/

/*----------------------------------------------------- Intuition -----------------------------------------------------*/

/*
 * i will traverse the array
 * i will xor each element because
 * arr = [4, 1, 2, 1, 2]
 * 0 ^ 4 = 4
 * 4 ^ 1 = 5
 * 5 ^ 2 = 7
 * 7 ^ 1 = 6
 * 6 ^ 2 = 4 ✅
 */

function singleNumber(arr: number[]): number {
  let result: number = 0;
  for (const num of arr) {
    result ^= num;
  }
  return result;
}

let arr: number[] = [4, 1, 2, 1, 2];
console.log(singleNumber(arr));
