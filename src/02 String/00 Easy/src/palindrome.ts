/**
 * @file palindrome.ts
 * @description check if a string is palindrome or not
 */

export {};
function isPalindrome(str: string) {
  let strArr: string[] = str.split("");
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    let temp = strArr[start]!;
    strArr[start] = strArr[end]!;
    strArr[end] = temp;
    (start++, end--);
  }
  if (str === strArr.join("")) {
    return true;
  }
  return false;
}
let str: string = "dad";
console.log(isPalindrome(str));
