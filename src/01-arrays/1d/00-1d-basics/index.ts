/* How to declare an array */

// 1️⃣.0️⃣ Declare & Initialization
let arr1: number[] = [1, 2, 3, 4];
let arr2: string[] = ["a", "b"];

// 2️⃣ Access Elements
console.log(arr1[1]); // 2nd Element

// 3️⃣ Array's Length
console.log(arr1.length);

// 4️⃣ Iterating Arrays
// 1️⃣ For Loop
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// 2️⃣ For Of Loop
for (let value of arr1) console.log(value);

// 2️⃣.0️⃣ Array Operation

// 1️⃣ Adding / Removing Elements
arr1.push(4); // add at the end
arr1.pop(); // remove last element
arr1.unshift(6); // add at the first
arr1.shift(); // remove from the first
arr1.splice(1, 2); // remove 2 elements from index 1

// 2️⃣ Searching/ Finding Element
arr1.indexOf(3); // index of element
arr1.includes(4); // true/false
arr1.find((x) => x > 2); // first element > 2

// 3️⃣ Copy/ Clone / Slice
let arrCopy = [...arr1];
console.log(arrCopy);
console.log(arr1.slice(0, 2)); // copy sub-array
