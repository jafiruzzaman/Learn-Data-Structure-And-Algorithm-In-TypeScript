export {};
console.log(
  '========================================= Operators in typescript =========================================',
);

/*
  What is Operators?
  Operators are used to perform different operations.

  ================================= Operators in TypeScript =================================
    1️⃣. Arithmetic Operators
    2️⃣. Assignment Operators
    3️⃣. Comparison Operators
    4️⃣. Logical Operators
    5️⃣. Bitwise Operators
    6️⃣. typeof Operator
*/
console.log(
  '================================= Arithmetic Operators in TypeScript =================================',
);
// 1️⃣. Arithmetic Operators only works on numbers
let a: number = 15;
let b: number = 5;
// Addition
console.log('15 + 5 = ' + (a + b));
// Subtraction
console.log('15 - 5 = ' + (a - b));
// Multiplication
console.log('15 * 5 = ' + a * b);
// Division
console.log('15 / 5 = ' + a / b);
// Modulo
console.log('15 % 5 = ' + (a % b));

console.log(
  '================================= Assignment Operators in TypeScript =================================',
);
// 2️⃣. Assignment Operators : used to assign and update values

// Assign
a = 20;
console.log('Assign: a = 20 : ' + a);

// Assign and Add
a += 15;
console.log('Assign and Add: a += 20 : ' + a);

// Assign and Subtract
a -= 5;
console.log('Assign and Subtract: a -= 5 : ' + a);

// Assign and Multiply
a *= 5;
console.log('Assign and Multiply: a *= 5 : ' + a);

// Assign and Divide
a /= 5;
console.log('Assign and Divide: a /= 5 : ' + a);

// Assign and Modulo
a %= 3;
console.log('Assign and Modulo: a %= 5 : ' + a);

console.log(
  '================================= Comparison Operators in TypeScript =================================',
);
// 3️⃣. Comparison Operators : return booleans(true/false)

// Double-equals(==) ⚠️ Loose Check | only compare values don't check data-types
// @ts-ignore
console.log("Double Equals: 10 == '10' = ", 10 == '10'); // TypeScript gave you error

// Triple-equals(===)  ✅️ Strict Check | compare values and check data-types as well
console.log('Double Equals: 10 === 10 = ', 10 === 10);

// Not-equals (!=) ⚠️ Loose Check
// @ts-ignore
console.log('Not Equals: 10 != 5 = ', 10 != 5);

// Not-equals (!==)  ✅️ Strict Check
// @ts-ignore
console.log('Not Equals: 10 !==5 = ', 10 !== 5);

// Greater than
console.log('Greater than: 10 > 5 = ', 10 > 5);

// Greater than or equals
console.log('Greater than or quals: 10 >= 5 = ', 10 >= 5);

// less than
console.log('less than: 10 < 5 = ', 10 < 5);
// less than or equals
console.log('less than or quals: 10 <= 5 = ', 10 <= 5);

// NOTE: 📝 Always prefer === and !== in TypeScript
console.log(
  '================================= Logical Operators in TypeScript =================================',
);

// && Operator : If Both Condition became true only then it returns true else returns false
console.log('(10>=10) && (10===10) = ', 10 >= 10 && 10 === 10);

// || Operator : If only one Condition became true only then it returns true else returns false
// @ts-ignore
console.log('(10>8) || (10!=8) = ', 10 > 8 || 10 != 8);

console.log(
  '================================= Bitwise Operators in TypeScript =================================',
);
// 5️⃣. Bitwise Operators : Operator on binary representation of numbers

// Bitwise and(&)
console.log('5 & 1 =  ', 5 & 1);

// Bitwise Or(|)
console.log('5 | 1 =  ', 5 | 1);

// Bitwise Xor(^)
console.log('5 ^ 1 =  ', 5 ^ 1);

// Bitwise Not Operator
console.log('~5 =  ', ~5);

// Left Shift (<<)
console.log('5 << 1 =  ', 5 << 1);

// Right Shift (>>)
console.log('5 >> 1 =  ', 5 >> 1);

console.log(
  '================================= Typeof Operators in TypeScript =================================',
);
// 6️⃣. typeof Operator : used to check the data-type
console.log(typeof 10); // 🟰 return the data-type
