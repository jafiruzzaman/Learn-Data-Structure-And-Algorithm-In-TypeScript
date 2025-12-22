/*----------------------------------------------------- Question link -----------------------------------------------------*/
// https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1

/*----------------------------------------------------- Intuition -----------------------------------------------------*/

function union(arr1: number[], arr2: number[]): number[] {
  let i = 0, j = 0;
  const result: number[] = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++; // ✅ must move
      j++; // ✅ must move
    }
    else if (arr1[i] < arr2[j]) {
      if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++; // ✅ always move
    }
    else {
      if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
        result.push(arr2[j]);
      }
      j++; // ✅ always move
    }
  }

  while (i < arr1.length) {
    if (result[result.length - 1] !== arr1[i]) {
      result.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (result[result.length - 1] !== arr2[j]) {
      result.push(arr2[j]);
    }
    j++;
  }

  return result;
}


let arr1: number[] = [1, 2, 2, 3, 3, 4, 5, 6];
let arr2: number[] = [2, 3, 3, 5, 6, 6, 7];
console.log(union(arr1, arr2));