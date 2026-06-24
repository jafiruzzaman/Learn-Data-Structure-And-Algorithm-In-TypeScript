/**
 * @file reverse-string.ts
 * @description reverse a string
 */

export {};
function reverse(str: string) {
  const arr = str.trim().toLocaleLowerCase().split("");
  let start = 0;
  let end = str.trim().length - 1;
  while (start < end) {
    let temp: string = arr[start]!;
    arr[start] = arr[end]!;
    arr[end] = temp;
    start++;
    end--;
  }
  return arr.join("");
}
let str: string = "Mohammad";
console.log(reverse(str));
