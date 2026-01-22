export {};
console.log(
  '================================= Conditionals in TypeScript =================================',
);
/*
  * What is Conditionals ?
    Ans: Sometime we want to do something on condition basis it's conditional.
  ============================================ There are 2 types conditionals in Typescript ============================================
    * 1️⃣. If-else Statement
    * 2️⃣. Switch-case statement
    * 3️⃣. Ternary Operator
*/

// 1️⃣. If-else Statement
console.log(
  '================================= If-else statement in TypeScript =================================',
);
let age: number = 18;
if (age >= 18) {
  console.log(`You are an adult`);
} else {
  console.log(`you are a minor`);
}

// 1️⃣.1️⃣ else-if Statement
let score: number = 85;
if (score >= 90) {
  console.log('Grade A');
} else if (score >= 75) {
  console.log('Grade B');
} else if (score >= 50) {
  console.log('Grade C');
} else {
  console.log('Fail');
}

// 2️⃣. Switch-case statement
console.log(
  '================================= Switch-case statement in TypeScript =================================',
);

let day: string = 'Friday';
switch (day) {
  case 'Saturday':
    console.log('Saturday');
    break;
  case 'Sunday':
    console.log('Sunday');
    break;
  case 'Monday':
    console.log('Monday');
    break;
  case 'Tuesday':
    console.log('Tuesday');
    break;
  case 'Wednesday':
    console.log('Wednesday');
    break;
  case 'Thursday':
    console.log('Thursday');
    break;
  case 'Friday':
    console.log('Friday');
    break;
  default:
    console.log('The day is invalid');
    break;
}

// 3️⃣. Ternary Operator
console.log(
  '================================= Ternary Operator in TypeScript =================================',
);
let isLoggedIn: boolean = false;
console.log(isLoggedIn ? 'welcome Back' : 'Please login');
