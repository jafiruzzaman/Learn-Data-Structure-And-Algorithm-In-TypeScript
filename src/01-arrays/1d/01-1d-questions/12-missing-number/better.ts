/*----------------------------------------------------- Question link -----------------------------------------------------*/
// https://leetcode.com/problems/missing-number/description/

/*----------------------------------------------------- Intuition -----------------------------------------------------*/
/*
 * I will create boolean array called seen
 * Traverse the array mark those elements which present in this array
 * now i will traverse the array again and check if is there is a flag of false if found then return the index
 */

function missingNumber(arr: number[]): number {
  // length of the array
  let len: number = arr.length;
  // create seen or visited boolean array
  let seen: boolean[] = new Array(len + 1).fill(false);

  // traverse the array and mark
  for (let value of arr) {
    seen[value] = true;
  }

  // now traverse the seen array and find the missing number
  for (let i = 0; i <= seen.length; i++) {
    if (!seen[i]) {
      return i;
    }
  }
  // return -1 if missing number not found
  return -1;
}

console.log(missingNumber([3, 0, 1])); // returns 2
console.log(missingNumber([0, 1])); // returns 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // returns 8
