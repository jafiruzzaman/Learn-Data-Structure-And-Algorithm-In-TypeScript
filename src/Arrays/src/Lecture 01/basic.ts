export {};
/**
  What is an Array?
  Ans: An Array is a collection of similar Elements in contagious way
*/

// 0️⃣ Create an Array
// 1️⃣ Initialize an Array
const arr: number[] = [];
console.log(`Initialize an Array: `, arr);

// 2️⃣ Declare an Array
const drr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Declare an Array: `, drr);

// 3️⃣ Accessing Array elements
console.log(`${drr[0]} is present in 0th index of the array`);

// 4️⃣ Traverse an Array
for (let i: number = 0; i < drr.length; i++) {
  console.log(drr[i], `element exist in ${i} th index in this array.`);
}
