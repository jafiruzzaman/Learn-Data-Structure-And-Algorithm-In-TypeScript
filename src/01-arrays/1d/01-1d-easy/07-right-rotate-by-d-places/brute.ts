function rotateArray(nums: number[], d: number): void {
  const n: number = nums.length;
  d = d % n;
  // create a temp array
  let temp: number[] = [];
  let index = 0;
  for (let i = n - d; i < n; i++) {
    temp[index++] = nums[i];
  }

  // shift the element to the right
  for (let i = n - d - 1; i >= 0; i--) {
    nums[i + d] = nums[i];
  }
  // put-back the temp elements
  for (let i = 0; i < d; i++) {
    nums[i] = temp[i];
  }
}

let arr: number[] = [1, 2, 3, 4, 5];
rotateArray(arr, 3);
console.log(arr);


