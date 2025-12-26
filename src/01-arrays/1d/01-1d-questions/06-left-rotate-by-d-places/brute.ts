/*----------------------------------------------------- Question link -----------------------------------------------------*/
/* https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1 */

/*
  Input: arr[] = [1, 2, 3, 4, 5], d = 2
  Output: [3, 4, 5, 1, 2]
  Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.
*/

function rotatedArray(arr: number[], d: number): void {
  const n = arr.length;
  d = d % n; // safety

  // Step 01: store first d elements
  let temp: number[] = [];
  for (let i = 0; i < d; i++) {
    temp[i] = arr[i]; // ✅ fixed
  }

  // Step 02: shift remaining elements
  let index = 0;
  for (let i = d; i < n; i++) {
    arr[index++] = arr[i];
  }

  // Step 03: copy temp back
  for (let i = 0; i < temp.length; i++) {
    arr[index++] = temp[i];
  }
}

// Test-Cases
let arr: number[] = [1, 2, 3, 4, 5];
rotatedArray(arr, 2);
console.log(arr);
