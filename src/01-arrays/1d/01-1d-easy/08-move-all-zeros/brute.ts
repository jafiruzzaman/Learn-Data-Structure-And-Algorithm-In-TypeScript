function moveZeros(nums: number[]): void {
  // Step 01: i will traverse the array
  // Step 02: while traversing the array i will keep a pointer to count zeros
  // Step 03: i will store all the non-zero numbers into a temp array
  let n = nums.length;
  let temp: number[] = [];
  let count: number = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      temp.push(nums[i]);
    } else {
      count++;
    }
  }
  // Step 04: put-back all the elements into original array
  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }
  // Step 05: put all the zeros at the end of the array
  for (let i = temp.length; i < n; i++) {
    nums[i] = 0;
  }
}

// Test-Cases
let arr: number[] = [0, 1, 0, 3, 12];
moveZeros(arr);
console.log(arr);
