/*----------------------------------------------------- Question link -----------------------------------------------------*/
// https://leetcode.com/problems/intersection-of-two-arrays/description/

/*----------------------------------------------------- Intuition -----------------------------------------------------*/
/*
 * First for each element of arr1 or first array
 * i will traverse the 2nd entire array
 * i found similar then put it into the result array
 */
function intersection(arr1: number[], arr2: number[]): number[] {
  // result array
  let result: number[] = [];
  for (let i:number = 0; i < arr1.length; i++) {
    for (let j:number = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        if (!result.includes(arr1[i])) {
          result.push(arr1[i]);
        }
      }
    }
  }
  return result;
}

// Example
const arr1:number[] = [1, 2, 4, 5, 6];
const arr2:number[] = [2, 3, 5, 7];
console.log(intersection(arr1, arr2)); // Output: [2, 5]
