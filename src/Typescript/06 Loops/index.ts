console.log("================================= Loops in TypeScript =================================");
/*
  What is Loop?
  Loop is used to avoid repetitions.If I want to print from 1 to 100000000 it takes hours or even days.By using loop we can do it with in a seconds.
  ================================= There are 5 types of loop in Typescript =================================
  1️⃣ For loop
    Syntax of For Loop
      for(initialization,condition,updation){
        code
      }
  2️⃣ While loop
    Syntax of While loop
    initialization
    while(condition){
      code
      updation // ⚠️ If we don't update loop will be infinite
    }
  3️⃣ Do-While loop
    initialization
    do{
      code
      updation
    }while(condition);
  4️⃣ for-of loop [iterate over arrays]
    for(element of array){
      code
    }
  5️⃣ for-in loop [iterate over objects ]
    for(key in object){
      code
    }
*/

console.log("================================= For Loop in TypeScript =================================");
for (let i: number = 0; i < 5; i++) {
  console.log("For loop iteration:", i);
}

console.log("================================= while Loop in TypeScript =================================");
let j: number = 0;
while (j < 5) {
  console.log("While loop iteration:", j);
  j++;
}


console.log("================================= Do While Loop in TypeScript =================================");
let k: number = 0;
do {
  console.log("Do-While iteration:", k);
  k++;
} while (k < 5);

console.log("================================= For Of Loop in TypeScript =================================");
// @ts-ignore
let numbers: number[] = [10, 20, 30];
for (let num of numbers) {
  console.log("For…of:", num);
}

console.log("================================= For In Loop in TypeScript =================================");
// @ts-ignore
let person:{name:string,age:number} = { name: "Tuhin", age: 21 };
for (let key in person) {
  console.log(key, ":", person[key as keyof typeof person]);
}

console.log("================================= Break Statement in TypeScript =================================");
for (let i:number = 0; i < 5; i++) {
  if (i === 3) break;      // exits at i=3
  console.log(i);
}
console.log("================================= Continue Statement in TypeScript =================================");

for (let i:number = 0; i < 5; i++) {
  if (i === 2) continue;   // skips i=2
  console.log(i);
}
