/*----------------------------------------------------- Question link -----------------------------------------------------*/

// https://leetcode.com/problems/single-number/description/

/*----------------------------------------------------- Intuition -----------------------------------------------------*/
/*
 * for every element in the array i will traverse the entire array
 * if found single element in inner loop return the element
 */
function singleNumber(arr: number[]): number {
  // length of the array
  let len: number = arr.length;
  for (let i: number = 0; i < len; i++) {
    let unique: boolean = true;
    for (let j: number = i + 1; j < len; j++) {
      if (arr[i] === arr[j] && i !== j) {
        unique = false;
        break;
      }
    }
    if (unique) {
      return arr[i];
    }
  }
  // if no single number found then return -1;
  return -1;
}
let arr: number[] = [1, 1, 2, 3, 3, 4, 4, 5, 5];
console.log(singleNumber(arr));
