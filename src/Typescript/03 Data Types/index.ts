console.log("========================================= data-types in typescript =========================================");
/*
  What is data-type?
  data-type helps us to understand that which type of data stored in the memory.Is it int[number],boolean[true,false].

  * There are 2 types of data-type in TypeScript
    * Primitive data-type
      * number:int,float,double
      * string: string,char
      * boolean: true,false
      * symbols: unique
      * null: Absence of value
      * undefined: variable declare but not assigned values
      * bigint:for large integers
    * Non-Primitive Data-type
      * Arrays
      * Objects
      * Date
      * Math
      * Map
      * Set
*/
console.log("========================================= Primitive Data-Type =========================================");
//1️⃣ number: All numeric types (int,float,double) are number in TypeScript
let num:number = 15;
console.log("number: "+num);

//2️⃣.0️⃣ char: single character.TypeScript doesn't support character.If we want to use character we have to use built-in methods
let char:string = "Hello".charAt(0);
console.log("char: "+char);

//2️⃣.1️⃣ sting: string is sequence of characters
let str:string = "👋 TypeScript";
console.log("string: "+str);

// 3️⃣ boolean: boolean are true or false.
let bool:boolean = true;
console.log("boolean: "+bool);

// 4️⃣ symbol: unique and immutable
let symbol:Symbol = Symbol("1");
console.log("symbol: "+String(symbol));

// 5️⃣ undefined: variable declared but value not assigned
let value:undefined;
console.log("undefined: "+value);

// 6️⃣ null: Absence of value
let nullValue:null = null;
console.log("null: "+nullValue);

// 7️⃣ bigint: to store large integers
let largeInt:bigint = 123n;
console.log("bigint: "+largeInt);



console.log("========================================= Non Primitive Data-Type =========================================");

// 1️⃣ Arrays : Array is a Collection Of
// @ts-ignore
let numbers:number[] = [1,2,3,4,5,6,7,8,9,10];
console.log("Arrays: "+numbers);

// 2️⃣ Objects: Objects are key-value pair
// @ts-ignore
let person:{id:number, name:string}= {
  id: 1,
  name: "Mohammad Jafiruzzaman"
};
console.log("person: "+person);

// 3️⃣ Date: Date is a built-in data-type that interact with and
let date:Date = new Date();
console.log("date: "+date);

// 4️⃣ Map: Map is a data-structure that allows to store values in key-value pairs

let map:Map<string, number> = new Map<string,number>();
console.log("map: "+map);

// 5️⃣ String Object: Rarely used, mostly string primitive data-type used and it
let strObject:String = new String("Hello World");
console.log("strObject: "+strObject);

// 6️⃣ Math : Math is a built-in Object
let PI:number = Math.PI;
console.log("Math: "+PI);

// 7️⃣ set: set is a data-structure that allows to store unique values
let set:Set<number> = new Set<number>();
console.log("set: "+set);