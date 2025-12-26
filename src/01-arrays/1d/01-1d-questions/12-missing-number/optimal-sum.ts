/*----------------------------------------------------- Question link -----------------------------------------------------*/
// https://leetcode.com/problems/missing-number/description/

/*----------------------------------------------------- Intuition -----------------------------------------------------*/
/*
 * first i will traverse from 1 to N and calculate sum
 * then i will traverse the array and calculate sum
 * i subtract the calculated-sum with actual-sum
 * return the value as simple as that
 */

function missingNumber(arr: number[]): number {
  // first calculate from 1 to N
  let n: number = arr.length;
  let calculatedSum: number = (n * (n + 1)) / 2;
  let actualSum: number = 0;
  for (let value of arr) {
    actualSum += value;
  }
  return calculatedSum - actualSum;
}

console.log(missingNumber([3, 0, 1])); // returns 2
console.log(missingNumber([0, 1])); // returns 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // returns 8
