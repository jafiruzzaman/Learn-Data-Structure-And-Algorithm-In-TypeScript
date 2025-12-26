/*----------------------------------------------------- Question link -----------------------------------------------------*/
// https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1

/*----------------------------------------------------- Intuition -----------------------------------------------------*/
/*
  * i will traverse linearly in the array
  * if i found the target then return the index
*/
function linearSearch(arr: number[], d: number):number {
	for (let i:number = 0; i < arr.length; i++) {
		if (arr[i] ===d) return i;
	}
	return -1;
}

// Test-Cases
let arr: number[] = [6,7,8,9,4,1];
console.log(linearSearch(arr,10));
