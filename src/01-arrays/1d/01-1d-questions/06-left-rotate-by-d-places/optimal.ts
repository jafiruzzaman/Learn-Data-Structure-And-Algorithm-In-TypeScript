/* reverse Function */
function reverse(arr: number[], start: number, end: number): void {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateArray(arr: number[], d: number): void {
  // first i will handle the edge cases
  const n = arr.length;
  d = d % n;
  // Step 01: first i will reverse 0 to d-1th element
  reverse(arr, 0, d - 1);
  // Step 02: 2d i will reverse d to n-1th element
  reverse(arr, d, n - 1);
  // Step 03: i will reverse the entire array
  reverse(arr, 0, n - 1);
}

// Test-Cases
let array: number[] = [1, 2, 3, 4, 5];
rotateArray(array, 4);
console.log(array);
