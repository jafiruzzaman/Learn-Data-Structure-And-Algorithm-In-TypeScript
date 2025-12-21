function reverse(arr: number[], start: number, end: number) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateArray(arr: number[], d: number): void {
  let n = arr.length;
  d = d % n;
  // Step 01: first reverse d to n-1
  reverse(arr, n - d, n - 1);
  // Step 02: reverse 0 to d-1
  reverse(arr, 0, n - d - 1);
  // Step 03: reverse 0 to n-1
  reverse(arr, 0, n - 1);
}

// test-cases
let arr: number[] = [1, 2, 3, 4, 5];
rotateArray(arr, 3);
console.log(arr);
