/*----------------------------------------------------- Question link -----------------------------------------------------*/

// https://leetcode.com/problems/two-sum/

/*----------------------------------------------------- Intuition -----------------------------------------------------*/
/*
 * i will store element in hash-map
 * i will insert each element before check if it already into map
 * i will calculate the required then check into map already exist
 * if already exist then return else -1
 */
function twoSum(nums: number[], target: number): number[] {
  // create hashmap
  let map = new Map<number, number>();

  for (let i: number = 0; i < nums.length; i++) {
    // required
    let required = target - nums[i];
    // if it is already present in map
    if (map.has(required)) {
      return [map.get(required)!, i];
    }
    // insert into map
    map.set(nums[i], i);
  }
  return [-1, -1];
}

// test-cases
let num: number[] = [2, 7, 11, 15];
console.log(twoSum(num, 9));
