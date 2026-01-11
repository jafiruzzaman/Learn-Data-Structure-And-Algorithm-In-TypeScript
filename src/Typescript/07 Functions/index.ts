console.log("================================= Functions in TypeScript =================================");

/*
  Question: What is Function ?
  Ans: Function is a block of code which runs only when it is called
  Syntax:
    function function-name(parameter){
      code
    }
    📞 function
    function-name
*/
console.log("================================= Normal Functions in TypeScript =================================");
// 1️⃣ Basic Function
function add(a:number,b:number):void {
  console.log(`a is ${a}, b is ${b}`);
}
add(10,0);
let result:(a:number,b:number)=>number = function(a:number,b:number):number {
  return a + b;
}
// call function
console.log(result(10,20));
console.log("================================= Arrow Functions in TypeScript =================================");
// 2️⃣ arrow functions
const sum:(a:number,b:number) =>number = (a:number, b:number):number => a + b;
console.log(sum(10,20));
