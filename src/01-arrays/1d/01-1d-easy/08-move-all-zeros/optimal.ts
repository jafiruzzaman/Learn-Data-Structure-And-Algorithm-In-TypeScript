function moveZeros(nums: number[]): void {
  // Step 01: first find the 1st 0 in the array
  let n = nums.length;
  let firstZero = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      firstZero = i;
      break;
    }
  }
  // if no zero found the return
  if (firstZero === -1) {
    return;
  }

  // traverse the array and swap if non zero
  for (let j = firstZero + 1; j < n; j++) {
    if (nums[j] !== 0) {
      // swap directly in array
      [nums[firstZero], nums[j]] = [nums[j], nums[firstZero]];
      firstZero++;
    }
  }
}

let arr: number[] = [0, 1, 0, 3, 12];
moveZeros(arr);
console.log(arr); // [1, 3, 12, 0, 0]

