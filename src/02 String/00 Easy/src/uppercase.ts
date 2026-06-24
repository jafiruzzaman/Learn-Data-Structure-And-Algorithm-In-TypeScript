/**
 * @file uppercase.ts
 */

export {};
function toUpperCase(str: string) {
  let res = "";
  for (const ch of str) {
    let code = ch.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      res += String.fromCharCode(code - 32);
    } else {
      res += ch;
    }
  }
  return res;
}

console.log(toUpperCase("moHammad"));
