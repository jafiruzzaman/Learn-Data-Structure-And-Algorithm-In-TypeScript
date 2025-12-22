/*----------------------------------------------------- Question link -----------------------------------------------------*/
// https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1

/*----------------------------------------------------- Intuition -----------------------------------------------------*/

/* Union means Only Unique elements
	* Create a Set store all the unique elements
	* Create an array and put-back all the unique elements into this array
*/

function union(arr1:number[], arr2:number[]):number[] {
	// Create a set
	let set:Set<number> = new Set<number>();
	//
	for (let i:number = 0; i < arr1.length; i++) {
		set.add(i);
	}
	for (let j:number = 0; j < arr2.length; j++) {
		set.add(j);
	}

// return array
	let result:number[] = [];
	for(let value of set){
		result.push(value);
	}
	return result;
}

// Test-Cases
console.log(union([1,2,2,3,3,4,5,6],[2,3,3,5,6,6,7]));
