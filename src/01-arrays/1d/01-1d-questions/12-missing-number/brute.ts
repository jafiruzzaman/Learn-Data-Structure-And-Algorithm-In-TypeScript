/*----------------------------------------------------- Question link -----------------------------------------------------*/
// https://leetcode.com/problems/missing-number/description/

/*----------------------------------------------------- Intuition -----------------------------------------------------*/

/*
 * outer loop traverse from i to length
 * inner loop check each element
 * if outer loop value is not found then return outer loop value
 */
function missingNumber(arr: number[]): number {
  // length of the array
  let n: number = arr.length;
  for (let i = 0; i <= n; i++) {
    // check if found
    let found: boolean = false;
    for (let j = 0; j < n; j++) {
      if (arr[j] === i) {
        // element exist in this array
        found = true;
        break;
      }
    }

    // The Actual missing number
    if (!found) {
      return i;
    }
  }
  return -1;
}

/*----------------------------------------------------- Code -----------------------------------------------------*/
let arr: number[] = [3, 0, 1];
console.log(missingNumber(arr));
