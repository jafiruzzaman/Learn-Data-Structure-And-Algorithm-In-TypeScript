/*----------------------------------------------------- Question link -----------------------------------------------------*/
// https://leetcode.com/problems/intersection-of-two-arrays/description/

/*----------------------------------------------------- Intuition -----------------------------------------------------*/
function intersection(arr1:number[], arr2:number[]):number[] {
	// check if array is sorted or not if not then sort
	arr1.sort((a:number, b:number):number => a - b);
	arr2.sort((a:number, b:number):number => a - b);
// create result array
	let result:number[] = [];
	// keep track 2 pointer
	let i:number = 0, j:number = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] === arr2[j]) {
			if (result.length === 0 || result[result.length-1] !== arr1[j]) {
				result.push(arr1[i]);
			}
		i++;
		j++;
		}
		else if(arr1[i] < arr2[j]) {
			i++;
		}else {
			j++;
		}
	}
	return result;
}

// Example
const arr1:number[] = [1, 2, 4, 5, 6];
const arr2:number[] = [2, 3, 5, 7];
console.log(intersection(arr1, arr2)); // Output: [2, 5]