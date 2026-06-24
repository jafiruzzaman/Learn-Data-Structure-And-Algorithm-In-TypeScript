/**
 * @file lowercase.ts
 * @description convert to lowercase
 */

export {};
function convertToLowerCase(str: string): string {
  let res = "";

  for (const ch of str) {
    const code = ch.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      res += String.fromCharCode(code + 32);
    } else {
      res += ch;
    }
  }

  return res;
}

console.log(convertToLowerCase("MOHAMMAD"));
