/**
 * @file index.ts
 * @description typescript basics
 */

/**
 * What is TypeScript
 * Ans: TypeScript is a superset of JavaScript. TypeScript allows types in JavaScript
 */

// print in console
console.log("Hello World");

/* 1️⃣
  What is Variable?
  Ans: Variable is a namespace stored in memory-location where value is stored.
*/

/*
 * What is Data-Types?
 * Ans: Data-Types define what type of data it will be.It can be either:
 * Primitive Data-Type:
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Null
 * 5. Symbol(Not required for now)
 * 6. Undefined
 * Non-Primitive Data-Type:
 * Array
 * Object
 * Function
 * Date
 */

// Number(float,double,int in one place in typeScript)
const num: number = 10;
console.log(num);

// String
const str: string = "Mohammad-Jafiruzzaman";
console.log(str);

// Boolean(true or false)
const bool: boolean = true;
console.log("isCoder " + bool);

// Null(Nothing inside empty)
const nullValue: null = null;
console.log(nullValue);

// Undefined(variable will updated later)
let undefinedValue: undefined;
console.log(undefinedValue);

// Array: an Array is a collection of similar elements in contiguous(sequence wise) way
const arr: number[] = [2, 4, 15, 7, 9, 6, 7, 3, 15];
console.log(arr);

// type: define the contract
type ObjectType = {
  name: string;
  age: number;
};

const obj: ObjectType = {
  name: "tuhin",
  age: 20,
};
console.log(obj);

// functions are reusable particular code that work on a particular task to perform a particular operation
function sayHello() {
  console.log("👋");
}
sayHello();

/* 2️⃣ Operators: Operators are used to perform some operation on an operand
    1. Arithmetic Operator(+,-,*,/,%)
    2. Assignment Operator(=,+=,-=,*=,/=,%=)
    3. Comparison Operator(>,>=,<,<=,==,===,!=)
    4. Logical Operator(&&,||,!)

    generate all the code

*/

/**
 * Conditional: Conditional are used to perform task on a condition
 * if-else statement
 * switch-case statement
 * loop(for,for-each,while,do-while)
 * generate all the code
 */
const a = 10;
const b = 3;

// Arithmetic
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Assignment
let x = 10;

x += 5;
console.log(x);

x -= 3;
console.log(x);

x *= 2;
console.log(x);

x /= 4;
console.log(x);

// Comparison
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);

// Logical
console.log(true && true);
console.log(true && false);

console.log(true || false);

console.log(!true);
// if-block
const age = 20;
if (age >= 18) {
  console.log("Adult");
}
// if-else block
const marks = 40;
if (marks >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}
// else
const score = 85;

if (score >= 90) {
  console.log("A+");
} else if (score >= 80) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else {
  console.log("C");
}

const day: number = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

const nums = [10, 20, 30];

for (const num of nums) {
  console.log(num);
}

const user = {
  name: "Tuhin",
  age: 20,
};

for (const key in user) {
  console.log(key);
}

/**
 * Union allows multiple possible types.
 *
 * |
 */
let value: string | number;

value = "Hello";

value = 100;

console.log(value);

class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(100);

const stringBox = new Box<string>("Hello");

console.log(numberBox.getValue());

console.log(stringBox.getValue());

let result = "";

for (let i = 1; i <= 5; i++) {
  result += i + " ";
}

console.log(result);
