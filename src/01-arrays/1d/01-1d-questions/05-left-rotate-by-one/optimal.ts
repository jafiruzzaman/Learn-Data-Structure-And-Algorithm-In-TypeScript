/*----------------------------------------------------- Question link -----------------------------------------------------*/
/* https://www.naukri.com/code360/problems/left-rotate-an-array-by-one_5026278?leftPanelTabValue=PROBLEM
*/
function leftRotateByOne(nums: number[]): void {
  // store the first element
  let element = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i - 1] = nums[i];
  }
  nums[nums.length - 1] = element;
}

// [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 4, 5];
leftRotateByOne(arr);
console.log(arr);
