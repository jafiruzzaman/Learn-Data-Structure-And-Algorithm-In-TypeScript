/**
 * @copyright 2026 Mohammad-Jafiruzzaman
 */
export {};

/**
 * Question link(GFG): https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1
 * Question: right Rotate an array by One Places
 */

/*
  BRUTE:
    1. Create a temp Array and store 0 to dth element
    2. traverse the array and shift elements
      i = d to n-1
      arr[i-d] = arr[i]
    3. Put-back the elements from dth place to N-1
        arr[i] = temp[i-(n-d)]
 */
const leftRotateByDPlacesBrute = (arr: number[], d: number): void => {
  // array's length
  let n: number = arr.length;
  // if rotation is bigger than array size
  d = d % n;
  // create temp array
  let temp: number[] = [];
  // push array's element from 0th to dth element in temp array
  for (let i: number = 0; i < d; i++) {
    temp.push(arr[i]);
  }
  // left shift the element
  for (let i: number = d; i < n; i++) {
    arr[i - d] = arr[i];
  }
  // now put-back the elements
  for (let i = 0; i < d; i++) {
    arr[n - d + i] = temp[i];
  }
};
/*
  OPTIMAL:
    1. reverse the 0th to dth element 
    2. reverse the dth to n-1th element 
    3. reverse the whole array
 */
let reverse = (arr: number[], start: number, end: number): void => {
  while (start < end) {
    const temp: number = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};
let leftRotateOptimal = (arr: number[], d: number): void => {
  // array's length
  let n: number = arr.length;
  // if rotation is bigger than array size
  d = d % n;
  // reverse array from 0 to d-1
  reverse(arr, 0, d - 1);
  // reverse array from to d to n-1
  reverse(arr, d, n - 1);
  // reverse array from 0 to n-1
  reverse(arr, 0, n - 1);
};
// ===========================Test-Case====================================
const arr: number[] = [1, 2, 3, 4, 5, 6];
leftRotateByDPlacesBrute(arr, 4);
console.log(arr);
leftRotateOptimal(arr, 3);
console.log(arr);
